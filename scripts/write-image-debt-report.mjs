import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const outPath = path.join(root, "data", "site-image-debt.json");
const checkOnly = process.argv.includes("--check");

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function slugId(page) {
  return normalizePath(page)
    .replace(/\.html$/i, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function imageKind(page) {
  if (page.startsWith("radar/")) return "life-radar";
  if (page.startsWith("stories/")) return "pitfall";
  if (page.startsWith("stocks/") && page.includes("market-watch")) return "market-overview";
  if (page.startsWith("stocks/")) return "stock";
  return "article";
}

function priorityFor(item) {
  if (item.inArchiveHtml || item.inSitemap) return "P0";
  if (item.inArchiveData) return "P1";
  return "P2";
}

function promptBriefFor(item) {
  const title = item.title || path.basename(item.page, ".html");
  const kind = imageKind(item.page);
  const topic = item.category ? `${item.category}: ${title}` : title;
  return [
    `Create a fresh Auntie No Mad ${kind} article hero for: ${topic}.`,
    "Use bright yellow halftone background, thick black outlines, white sticker border, hot-pink accents, curly Auntie with pixel sunglasses, gold hoop earrings, leopard top, black apron, and pink heart.",
    "Show the actual topic visually with props and scene details; no visible writing, no fake Chinese, no watermarks, no copied old composition."
  ].join(" ");
}

function buildReport() {
  const audit = spawnSync(process.execPath, ["scripts/audit-site-images.mjs"], {
    cwd: root,
    encoding: "utf8",
    windowsHide: true
  });

  let auditReport;
  try {
    auditReport = JSON.parse(audit.stdout || "{}");
  } catch (error) {
    throw new Error(`site image audit output is not JSON: ${error.message}`);
  }

  if (audit.status !== 0 || !auditReport.ok) {
    const message = audit.stderr || audit.stdout || "site image audit failed";
    throw new Error(message.trim());
  }

  const legacyItems = (auditReport.details?.legacyApprovedPrimaryImages || [])
    .map((item) => {
      const priority = priorityFor(item);
      return {
        id: slugId(item.page),
        status: "needs_regeneration",
        priority,
        page: item.page,
        date: item.date,
        title: item.title || "",
        category: item.category || "",
        currentImage: item.image,
        promoted: Boolean(item.inArchiveHtml || item.inSitemap),
        inArchiveData: Boolean(item.inArchiveData),
        inArchiveHtml: Boolean(item.inArchiveHtml),
        inSitemap: Boolean(item.inSitemap),
        suggestedAssetFolder: `assets/generated/${item.date}/`,
        suggestedImageKind: imageKind(item.page),
        promptBrief: promptBriefFor(item)
      };
    })
    .sort((a, b) => {
      const priorityCompare = a.priority.localeCompare(b.priority);
      if (priorityCompare) return priorityCompare;
      return a.page.localeCompare(b.page);
    });

  return {
    schemaVersion: 1,
    policy: "Historical pages may remain direct-linkable, but approved fallback primary images must be regenerated before those pages are promoted in archive, sitemap, RSS, JSON feed, homepage, or social surfaces.",
    taipeiDate: auditReport.taipeiDate,
    summary: {
      legacyApprovedPrimaryImages: auditReport.totals?.legacyApprovedPrimaryImages || 0,
      exposedLegacyApprovedPrimaryImages: auditReport.totals?.exposedLegacyApprovedPrimaryImages || 0,
      historicalDuplicatePrimaryImageGroups: auditReport.totals?.historicalDuplicatePrimaryImageGroups || 0,
      p0PromotedNeedsImmediateFix: legacyItems.filter((item) => item.priority === "P0").length,
      p1ArchiveDataHiddenUntilRegenerated: legacyItems.filter((item) => item.priority === "P1").length,
      p2DirectOnlyBacklog: legacyItems.filter((item) => item.priority === "P2").length
    },
    regenerationRules: [
      "Generate a fresh topic-specific raster image before changing any item status away from needs_regeneration.",
      "Do not copy older images into a new date folder.",
      "Do not use filenames containing approved for public primary images.",
      "Do not promote an item while promoted is true or exposedLegacyApprovedPrimaryImages is greater than zero.",
      "After replacing an image, run npm test, npm run audit:images, and npm run test:image-debt."
    ],
    items: legacyItems
  };
}

const nextJson = `${JSON.stringify(buildReport(), null, 2)}\n`;

if (checkOnly) {
  const currentJson = fs.existsSync(outPath) ? fs.readFileSync(outPath, "utf8") : "";
  if (currentJson !== nextJson) {
    console.error("data/site-image-debt.json is out of sync; run npm run audit:image-debt");
    process.exit(1);
  }
  console.log("Image debt report is up to date.");
} else {
  fs.writeFileSync(outPath, nextJson, "utf8");
  console.log(`Wrote ${normalizePath(path.relative(root, outPath))}`);
}
