import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const outPath = path.join(root, "data", "site-duplicate-image-debt.json");
const checkOnly = process.argv.includes("--check");

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function normalizeNewlines(value = "") {
  return String(value).replace(/\r\n/g, "\n");
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
  if (item.inArchiveHtml || item.inSitemap || item.inArchiveData) return "P1";
  return "P2";
}

function promptBriefFor(item) {
  const title = item.title || path.basename(item.page, ".html");
  const topic = item.category ? `${item.category}: ${title}` : title;
  return [
    `Create a fresh duplicate-replacement Auntie No Mad ${imageKind(item.page)} hero for: ${topic}.`,
    "Use bright yellow halftone background, thick black outlines, white sticker border, hot-pink accents, curly Auntie with pixel sunglasses, gold hoop earrings, leopard top, black apron, and pink heart.",
    "Show this page's topic with distinct props and composition; no visible writing, no fake Chinese, no letters, no numbers, no currency signs, no watermarks, no copied old composition."
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

  const groups = (auditReport.details?.historicalDuplicatePrimaryImageGroups || [])
    .map((group, groupIndex) => {
      const items = [...group].sort((a, b) => a.page.localeCompare(b.page));
      const keep = items[0];
      const replacements = items.slice(1).map((item) => {
        const priority = priorityFor(item);
        return {
          id: slugId(item.page),
          status: "needs_regeneration",
          priority,
          groupId: `duplicate-group-${groupIndex + 1}`,
          page: item.page,
          date: item.date,
          title: item.title || "",
          category: item.category || "",
          currentImage: item.image,
          keptPage: keep.page,
          keptImage: keep.image,
          inArchiveData: Boolean(item.inArchiveData),
          inArchiveHtml: Boolean(item.inArchiveHtml),
          inSitemap: Boolean(item.inSitemap),
          suggestedAssetFolder: `assets/generated/${item.date}/`,
          suggestedImageKind: imageKind(item.page),
          promptBrief: promptBriefFor(item)
        };
      });
      return {
        id: `duplicate-group-${groupIndex + 1}`,
        keptPage: keep.page,
        keptImage: keep.image,
        duplicateImage: keep.image,
        pages: items.map((item) => item.page),
        replacements
      };
    });

  const items = groups.flatMap((group) => group.replacements)
    .sort((a, b) => {
      const priorityCompare = a.priority.localeCompare(b.priority);
      if (priorityCompare) return priorityCompare;
      return a.page.localeCompare(b.page);
    });

  return {
    schemaVersion: 1,
    policy: "Historical duplicate primary images must be replaced before old pages are considered clean. Keep one source page per duplicate hash, regenerate every other page with fresh topic-specific art.",
    taipeiDate: auditReport.taipeiDate,
    summary: {
      historicalDuplicatePrimaryImageGroups: auditReport.totals?.historicalDuplicatePrimaryImageGroups || 0,
      pagesToRegenerate: items.length,
      p1PromotedOrArchivePages: items.filter((item) => item.priority === "P1").length,
      p2DirectOnlyPages: items.filter((item) => item.priority === "P2").length
    },
    regenerationRules: [
      "Generate a fresh topic-specific raster image for every replacement item.",
      "Do not copy older duplicate images into a new date folder.",
      "Do not use filenames containing approved for duplicate replacements.",
      "Use distinct composition and props so the page no longer shares byte-identical primary art.",
      "After replacing images, run npm test, npm run audit:images, and npm run test:duplicate-image-debt."
    ],
    groups,
    items
  };
}

const report = buildReport();
const nextJson = `${JSON.stringify(report, null, 2)}\n`;

if (checkOnly) {
  const currentJson = fs.existsSync(outPath) ? fs.readFileSync(outPath, "utf8") : "";
  if (normalizeNewlines(currentJson) !== normalizeNewlines(nextJson)) {
    console.error("data/site-duplicate-image-debt.json is out of sync; run npm run audit:duplicate-image-debt");
    process.exit(1);
  }
  if ((report.summary?.pagesToRegenerate || 0) > 0 && process.env.ALLOW_DUPLICATE_IMAGE_DEBT !== "true") {
    console.error(
      `Duplicate image debt is not allowed: ${report.summary.pagesToRegenerate} pages still need regenerated primary images.`
    );
    process.exit(1);
  }
  console.log("Duplicate image debt report is up to date.");
} else {
  fs.writeFileSync(outPath, nextJson, "utf8");
  console.log(`Wrote ${normalizePath(path.relative(root, outPath))}`);
}
