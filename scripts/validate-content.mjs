import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataPath = path.join(root, "data", "site-content.json");
const content = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const errors = [];
const warnings = [];
const requiredArticleFields = ["title", "date", "category", "summary", "auntieComment", "sourceUrl", "slug"];
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
const textExtensions = new Set([".html", ".json", ".md", ".mjs", ".js", ".yml", ".yaml", ".txt", ".css", ".xml"]);
const skippedDirs = new Set([".git", ".playwright-cli", "assets", "qa", "qa-local", "restore-points", "node_modules"]);

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function checkFields(section, item, fields) {
  fields.forEach((field) => {
    assert(item[field] !== undefined && String(item[field]).trim() !== "", `${section}: missing ${field} on ${item.title || item.slug || "unknown item"}`);
  });
}

function checkLocalSlug(section, slug) {
  if (!slug || slug.startsWith("http") || slug.startsWith("#")) return;
  const slugPath = path.join(root, slug);
  assert(fs.existsSync(slugPath), `${section}: local slug does not exist: ${slug}`);
}

function checkNoInvestmentAdvice(section, item) {
  const haystack = JSON.stringify(item);
  bannedInvestmentPhrases.forEach((phrase) => {
    assert(!haystack.includes(phrase), `${section}: banned investment phrase "${phrase}" found in ${item.ticker || item.title}`);
  });
  assert(String(item.disclaimer || "").includes("不是投資建議"), `${section}: disclaimer must say 不是投資建議 for ${item.ticker || item.title}`);
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

["lifeRadar", "pitfalls"].forEach((section) => {
  assert(Array.isArray(content[section]), `${section} must be an array`);
  (content[section] || []).forEach((item) => {
    checkFields(section, item, requiredArticleFields);
    checkLocalSlug(section, item.slug);
  });
});

assert(Array.isArray(content.stockWatchlist), "stockWatchlist must be an array");
assert(content.stockWatchlist?.length === 4, "stockWatchlist must contain exactly 4 items");
(content.stockWatchlist || []).forEach((item) => {
  checkFields("stockWatchlist", item, [...requiredArticleFields, ...requiredStockFields]);
  checkNoInvestmentAdvice("stockWatchlist", item);
  checkLocalSlug("stockWatchlist", item.slug);
});

["etfGuide", "goodPicks", "fridgeNotes", "archive"].forEach((section) => {
  assert(Array.isArray(content[section]), `${section} must be an array`);
  (content[section] || []).forEach((item) => {
    const fields = section === "goodPicks" || section === "fridgeNotes"
      ? requiredArticleFields.filter((field) => field !== "sourceUrl")
      : requiredArticleFields;
    checkFields(section, item, fields);
    if (!item.sourceUrl) warnings.push(`${section}: sourceUrl missing for ${item.title}; UI should treat as 來源待補`);
    if (["archive"].includes(section)) checkLocalSlug(section, item.slug);
  });
});

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
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
