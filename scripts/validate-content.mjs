import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataPath = path.join(root, "data", "site-content.json");
const content = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const errors = [];
const warnings = [];

const requiredArticleFields = [
  "title",
  "date",
  "category",
  "summary",
  "auntieComment",
  "sourceUrl",
  "slug"
];

const requiredStockFields = [
  "ticker",
  "name",
  "type",
  "reason",
  "auntieComment",
  "riskLevel",
  "riskNote",
  "suitableFor",
  "notSuitableFor",
  "disclaimer",
  "sourceUrl",
  "updatedAt"
];

const bannedInvestmentPhrases = ["買進", "賣出", "目標價", "保證獲利"];
const legacyProxyTerms = ["Open" + "Claw", "OPEN" + "CLAW"];
const textExtensions = new Set([
  ".html",
  ".json",
  ".md",
  ".mjs",
  ".js",
  ".yml",
  ".yaml",
  ".txt",
  ".css",
  ".xml"
]);
const skippedDirs = new Set([
  ".git",
  ".playwright-cli",
  "assets",
  "qa",
  "qa-local",
  "restore-points",
  "node_modules"
]);

const stockImageMap = new Map([
  ["assets/stock-20260526-auo.png", "2409"],
  ["assets/stock-20260526-inventec.png", "2356"],
  ["assets/stock-20260526-umc.png", "2303"],
  ["assets/stock-20260526-00919.png", "00919"],
  ["assets/stock-tsmc-cowos.png", "2330"],
  ["assets/stock-0050-split.png", "0050"],
  ["assets/stock-0056-dividend.png", "0056"],
  ["assets/stock-00878-dividend.png", "00878"]
]);

const articleImageRules = [
  {
    pattern: /hsr|高鐵/i,
    keywords: ["高鐵", "退費", "延誤", "列車"],
    label: "高鐵圖"
  },
  {
    pattern: /heat|jangmi|高溫|鋒面/i,
    keywords: ["高溫", "熱", "鋒面", "變天", "梅雨", "天氣"],
    label: "高溫變天圖"
  },
  {
    pattern: /plum-rain|laundry|梅雨|衣服/i,
    keywords: ["梅雨", "衣服", "陽台", "除濕", "曬衣"],
    label: "梅雨曬衣圖"
  },
  {
    pattern: /ticket|五月天|搶票/i,
    keywords: ["五月天", "搶票", "演唱會", "售票", "排隊"],
    label: "搶票圖"
  },
  {
    pattern: /social-scam|詐騙|名人/i,
    keywords: ["詐騙", "名人", "社群", "Meta", "投資", "廣告", "推薦"],
    label: "社群詐騙圖"
  },
  {
    pattern: /traffic-crowd|交通|人潮/i,
    keywords: ["交通", "景點", "排隊", "人潮", "接駁", "出門"],
    label: "交通人潮圖"
  }
];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function isGeneratedForDate(assetPath, date) {
  return normalizePath(assetPath).startsWith(`assets/generated/${date}/`);
}

function itemText(item) {
  return `${item.title || ""} ${item.name || ""} ${item.category || ""} ${item.summary || ""} ${item.auntieComment || ""} ${item.slug || ""}`;
}

function checkFields(section, item, fields) {
  fields.forEach((field) => {
    assert(
      item[field] !== undefined && String(item[field]).trim() !== "",
      `${section}: missing ${field} on ${item.title || item.slug || "unknown item"}`
    );
  });
}

function checkSourceUrl(section, item) {
  assert(
    /^https?:\/\//.test(item.sourceUrl || ""),
    `${section}: sourceUrl must be a public URL on ${item.title || item.slug}`
  );
}

function checkLocalSlug(section, slug) {
  if (!slug || slug.startsWith("http") || slug.startsWith("#")) return;
  assert(fileExists(slug), `${section}: local slug does not exist: ${slug}`);
}

function checkAsset(section, item, field) {
  const assetPath = normalizePath(item[field]);
  if (!assetPath) return;
  assert(fileExists(assetPath), `${section}: ${field} file does not exist for ${item.title || item.slug}: ${assetPath}`);
  if (assetPath.endsWith(".svg") && fileExists(assetPath)) {
    const svg = fs.readFileSync(path.join(root, assetPath), "utf8");
    assert(/<svg[\s>]/.test(svg) && svg.includes("</svg>"), `${section}: SVG asset is malformed for ${item.title || item.slug}: ${assetPath}`);
    const tags = svg.match(/<[^!?][^>]*>/g) || [];
    tags.forEach((tag) => {
      const seen = new Set();
      [...tag.matchAll(/\s([a-zA-Z_:][-.\w:]*)=/g)].forEach((match) => {
        const attr = match[1];
        assert(!seen.has(attr), `${section}: SVG asset has duplicate ${attr} attribute for ${item.title || item.slug}: ${assetPath}`);
        seen.add(attr);
      });
    });
  }
}

function checkArticlePageImage(section, item) {
  const expectedImage = normalizePath(item.hero || item.image || "");
  if (!item.slug || !expectedImage || !fileExists(item.slug)) return;

  const html = fs.readFileSync(path.join(root, item.slug), "utf8").replaceAll("\\", "/");
  const expectedWithParent = `../${expectedImage}`;
  assert(
    html.includes(expectedImage) || html.includes(expectedWithParent),
    `${section}: article page ${item.slug} does not contain expected image ${expectedImage}`
  );
}

function checkArticleImageMatch(section, item) {
  const assets = [item.thumbnail, item.hero].filter(Boolean).map(normalizePath);
  assets.forEach((assetPath) => {
    checkAsset(section, { ...item, imageCandidate: assetPath }, "imageCandidate");
    if (isGeneratedForDate(assetPath, item.date)) return;

    const rule = articleImageRules.find((candidate) => candidate.pattern.test(assetPath));
    if (!rule) return;
    const text = itemText(item);
    const matches = rule.keywords.some((keyword) => text.includes(keyword));
    assert(matches, `${section}: ${rule.label} used on unrelated item "${item.title}" (${assetPath})`);
  });
}

function checkStockImageMatch(item) {
  const image = normalizePath(item.image || "");
  checkAsset("stockWatchlist", item, "image");
  if (!image) return;
  if (isGeneratedForDate(image, item.date)) return;

  assert(
    image !== "assets/stock-20260526-market-watch.png",
    `stockWatchlist: generic market image cannot be used for individual stock ${item.ticker}`
  );

  const expectedTicker = stockImageMap.get(image);
  if (expectedTicker) {
    assert(
      expectedTicker === item.ticker,
      `stockWatchlist: image ${image} belongs to ${expectedTicker}, not ${item.ticker}`
    );
  }
}

function checkNoInvestmentAdvice(section, item) {
  const haystack = JSON.stringify(item);
  bannedInvestmentPhrases.forEach((phrase) => {
    assert(
      !haystack.includes(phrase),
      `${section}: banned investment phrase "${phrase}" found in ${item.ticker || item.title}`
    );
  });
  assert(
    String(item.disclaimer || "").includes("不是投資建議"),
    `${section}: disclaimer must say 不是投資建議 for ${item.ticker || item.title}`
  );
}

function walkTextFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skippedDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkTextFiles(fullPath);
      continue;
    }
    if (!textExtensions.has(path.extname(entry.name))) continue;
    const relativePath = path.relative(root, fullPath).replaceAll("\\", "/");
    const text = fs.readFileSync(fullPath, "utf8");
    legacyProxyTerms.forEach((term) => {
      assert(!text.includes(term), `legacy proxy term "${term}" still appears in ${relativePath}`);
    });
  }
}

const serializedData = JSON.stringify(content);
assert(!/\?{3,}/.test(serializedData), "data/site-content.json contains question-mark mojibake such as ???");
assert(!/[銝嚗瘞踹]\S*[?]/.test(serializedData), "data/site-content.json appears to contain mojibake text");

["lifeRadar", "pitfalls"].forEach((section) => {
  assert(Array.isArray(content[section]), `${section} must be an array`);
  (content[section] || []).forEach((item) => {
    checkFields(section, item, requiredArticleFields);
    checkSourceUrl(section, item);
    checkLocalSlug(section, item.slug);
    checkArticleImageMatch(section, item);
    checkArticlePageImage(section, item);
  });
});

assert(Array.isArray(content.stockWatchlist), "stockWatchlist must be an array");
assert(content.stockWatchlist?.length === 4, "stockWatchlist must contain exactly 4 items");
(content.stockWatchlist || []).forEach((item) => {
  checkFields("stockWatchlist", item, [...requiredArticleFields, ...requiredStockFields]);
  checkSourceUrl("stockWatchlist", item);
  checkNoInvestmentAdvice("stockWatchlist", item);
  checkLocalSlug("stockWatchlist", item.slug);
  checkStockImageMatch(item);
  checkArticlePageImage("stockWatchlist", item);
});

if (content.stockOverview) {
  checkFields("stockOverview", content.stockOverview, requiredArticleFields);
  checkSourceUrl("stockOverview", content.stockOverview);
  checkAsset("stockOverview", content.stockOverview, "hero");
  checkLocalSlug("stockOverview", content.stockOverview.slug);
  checkArticlePageImage("stockOverview", content.stockOverview);
}

["etfGuide", "goodPicks", "fridgeNotes", "archive"].forEach((section) => {
  assert(Array.isArray(content[section]), `${section} must be an array`);
  (content[section] || []).forEach((item) => {
    checkFields(section, item, requiredArticleFields);
    checkSourceUrl(section, item);
    if (section === "archive") checkLocalSlug(section, item.slug);
  });
});

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
["sitemap.xml", "robots.txt", "rss.xml", "feed.json"].forEach((file) => {
  assert(fileExists(file), `SEO/feed file missing: ${file}`);
});
assert(indexHtml.includes('type="application/rss+xml"'), "index.html must advertise rss.xml");
assert(indexHtml.includes('type="application/feed+json"'), "index.html must advertise feed.json");

const jsonFeedPath = path.join(root, "feed.json");
if (fs.existsSync(jsonFeedPath)) {
  const feed = JSON.parse(fs.readFileSync(jsonFeedPath, "utf8"));
  assert(feed.version && Array.isArray(feed.items), "feed.json must be valid JSON Feed");
  assert(feed.items.length > 0, "feed.json must contain at least one item");
}

for (const [index, script] of [...indexHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]).entries()) {
  try {
    new Function(script);
  } catch (error) {
    errors.push(`index.html inline script ${index + 1} syntax error: ${error.message}`);
  }
}

walkTextFiles(root);

if (warnings.length) {
  console.warn("Content warnings:");
  warnings.forEach((message) => console.warn(`- ${message}`));
}

if (errors.length) {
  console.error("Content validation failed:");
  errors.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Content validation passed.");
