import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const content = JSON.parse(fs.readFileSync(path.join(root, "data", "site-content.json"), "utf8"));
const taipeiDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Taipei",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(new Date());

const errors = [];
const warnings = [];

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function walkHtml(dir, out = []) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".git" || entry.name === "node_modules") return;
      walkHtml(fullPath, out);
      return;
    }
    if (entry.isFile() && entry.name.endsWith(".html")) {
      out.push(normalizePath(path.relative(root, fullPath)));
    }
  });
  return out;
}

function htmlImages(page) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  return [...html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => match[1])
    .filter((src) => src && !src.includes("${") && !/^data:/i.test(src) && !/^https?:\/\//i.test(src))
    .map((src) => {
      const cleanSrc = src.split("#")[0].split("?")[0];
      const resolved = normalizePath(path.normalize(path.join(path.dirname(page), cleanSrc)));
      return resolved.replace(/^\.\//, "");
    });
}

function fileHash(relativePath) {
  const file = fs.readFileSync(path.join(root, relativePath));
  return crypto.createHash("sha256").update(file).digest("hex");
}

function isContentPage(page) {
  return /^(radar|stories|stocks)\/\d{4}-\d{2}-\d{2}-.+\.html$/.test(page);
}

function pageDate(page) {
  return page.match(/\/(\d{4}-\d{2}-\d{2})-/)?.[1] || "";
}

function isNavImage(image) {
  return image.endsWith("assets/auntie-avatar-nav.jpg");
}

function isApprovedFallback(image) {
  return /(^|-)approved(-|\.|$)/i.test(path.basename(image));
}

function primaryImageForPage(page) {
  return htmlImages(page).find((image) => !isNavImage(image)) || "";
}

const pages = walkHtml(root);
const imageRefs = pages.flatMap((page) => htmlImages(page).map((image) => ({ page, image })));
const missing = imageRefs.filter(({ image }) => !fs.existsSync(path.join(root, image)));
missing.forEach(({ page, image }) => errors.push(`missing image file: ${page} -> ${image}`));

const contentPages = pages.filter(isContentPage).sort();
const primaryImages = contentPages
  .map((page) => ({ page, date: pageDate(page), image: primaryImageForPage(page) }))
  .filter((item) => item.image);

const todayPrimaries = primaryImages.filter((item) => item.date === taipeiDate);
todayPrimaries.forEach((item) => {
  if (isApprovedFallback(item.image)) {
    errors.push(`today primary image must not use approved fallback: ${item.page} -> ${item.image}`);
  }
  if (!item.image.startsWith(`assets/generated/${taipeiDate}/`)) {
    errors.push(`today primary image must live under assets/generated/${taipeiDate}/: ${item.page} -> ${item.image}`);
  }
});

const todayHashes = new Map();
todayPrimaries.forEach((item) => {
  if (!fs.existsSync(path.join(root, item.image))) return;
  const hash = fileHash(item.image);
  const prior = todayHashes.get(hash);
  if (prior) {
    errors.push(`today primary image duplicates another article: ${prior.page} and ${item.page} both use duplicate bytes`);
  } else {
    todayHashes.set(hash, item);
  }
});

const legacyApproved = primaryImages.filter((item) => item.date !== taipeiDate && isApprovedFallback(item.image));
if (legacyApproved.length) {
  warnings.push(`${legacyApproved.length} legacy content pages still use approved fallback images; they are historical and not part of today's publish gate.`);
}

const duplicateGroups = new Map();
primaryImages.forEach((item) => {
  if (!fs.existsSync(path.join(root, item.image))) return;
  const hash = fileHash(item.image);
  if (!duplicateGroups.has(hash)) duplicateGroups.set(hash, []);
  duplicateGroups.get(hash).push(item);
});
const nonTodayDuplicateGroups = [...duplicateGroups.values()]
  .filter((items) => items.length > 1 && !items.some((item) => item.date === taipeiDate))
  .map((items) => items.map((item) => ({ page: item.page, image: item.image })));
if (nonTodayDuplicateGroups.length) {
  warnings.push(`${nonTodayDuplicateGroups.length} historical duplicate primary-image groups remain in old pages; current-day duplicate images are blocked.`);
}

const currentContentImages = [
  ...(content.lifeRadar || []).map((item) => ({ section: "lifeRadar", title: item.title, image: item.hero || item.thumbnail })),
  ...(content.pitfalls || []).map((item) => ({ section: "pitfalls", title: item.title, image: item.hero || item.thumbnail })),
  content.stockOverview && { section: "stockOverview", title: content.stockOverview.title, image: content.stockOverview.hero },
  ...(content.stockWatchlist || []).map((item) => ({ section: "stockWatchlist", title: `${item.ticker} ${item.title}`, image: item.image }))
].filter(Boolean);

currentContentImages.forEach((item) => {
  const image = normalizePath(item.image || "");
  if (!image) {
    errors.push(`current content item missing primary image: ${item.section} ${item.title}`);
    return;
  }
  if (!fs.existsSync(path.join(root, image))) {
    errors.push(`current content primary image missing: ${item.section} ${item.title} -> ${image}`);
  }
  if (isApprovedFallback(image)) {
    errors.push(`current content primary image uses approved fallback: ${item.section} ${item.title} -> ${image}`);
  }
});

const report = {
  ok: errors.length === 0,
  generatedAt: new Date().toISOString(),
  taipeiDate,
  totals: {
    htmlPages: pages.length,
    imageReferences: imageRefs.length,
    contentPages: contentPages.length,
    todayContentPages: todayPrimaries.length,
    legacyApprovedPrimaryImages: legacyApproved.length,
    historicalDuplicatePrimaryImageGroups: nonTodayDuplicateGroups.length
  },
  warnings,
  errors
};

console.log(JSON.stringify(report, null, 2));

if (errors.length) {
  process.exit(1);
}
