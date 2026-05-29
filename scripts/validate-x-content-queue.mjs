import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const queuePath = path.join(root, "data", "x-content-queue.json");
const queue = JSON.parse(fs.readFileSync(queuePath, "utf8"));

const errors = [];
const warnings = [];

const requiredCharacterTerms = [
  "Photorealistic",
  "Auntie",
  "short",
  "curly",
  "gold",
  "hoop",
  "leopard",
  "black",
  "pink heart"
];
const badCopyTerms = ["好物推薦", "阿姨出清", "下單", "購買", "特價", "商品展示"];
const explicitTerms = ["全裸", "露點", "性行為", "性交", "色情", "約炮"];
const acceptedStatuses = new Set(["planned", "drafting", "ready", "published", "retired"]);
const acceptedPillars = new Set(["tech-ai", "money-caution", "life-radar", "culture-meme"]);

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function charLength(value = "") {
  return [...String(value)].length;
}

function includesAny(text, terms) {
  return terms.filter((term) => String(text || "").includes(term));
}

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function checkEntry(entry) {
  const label = entry.id || "(missing id)";
  assert(entry.id, "x-content-queue: entry missing id");
  assert(acceptedStatuses.has(entry.status), `x-content-queue: ${label} has invalid status ${entry.status}`);
  assert(acceptedPillars.has(entry.pillar), `x-content-queue: ${label} has invalid pillar ${entry.pillar}`);
  assert(Number.isInteger(entry.spiceLevel), `x-content-queue: ${label} spiceLevel must be an integer`);
  assert(entry.spiceLevel >= 1 && entry.spiceLevel <= 5, `x-content-queue: ${label} spiceLevel must be 1-5`);
  assert(entry.topicHook && charLength(entry.topicHook) <= 18, `x-content-queue: ${label} needs a short topicHook`);
  assert(entry.angle && charLength(entry.angle) >= 16, `x-content-queue: ${label} needs a clear angle`);
  assert(entry.copyDraft && charLength(entry.copyDraft) <= 270, `x-content-queue: ${label} copyDraft must fit X`);
  assert(entry.imagePrompt && charLength(entry.imagePrompt) >= 120, `x-content-queue: ${label} needs a usable imagePrompt`);

  const checkText = [entry.topicHook, entry.angle, entry.copyDraft, entry.imagePrompt].join("\n");
  includesAny(checkText, badCopyTerms).forEach((term) => {
    assert(false, `x-content-queue: ${label} contains ecommerce term "${term}"`);
  });
  includesAny(checkText, explicitTerms).forEach((term) => {
    assert(false, `x-content-queue: ${label} contains explicit/cheap term "${term}"`);
  });

  const prompt = [
    queue.visualDefaults?.characterLock || "",
    queue.visualDefaults?.negativePrompt || "",
    entry.imagePrompt || ""
  ].join(" ");
  requiredCharacterTerms.forEach((term) => {
    assert(
      prompt.toLowerCase().includes(term.toLowerCase()),
      `x-content-queue: ${label} imagePrompt missing character lock term "${term}"`
    );
  });
  ["no product", "no nudity"].forEach((term) => {
    assert(
      prompt.toLowerCase().includes(term),
      `x-content-queue: ${label} imagePrompt must explicitly include "${term}"`
    );
  });

  if (entry.sourcePlan?.required) {
    const hasSpecificSource = entry.sourcePlan.sourceUrl || entry.sourcePlan.query;
    assert(hasSpecificSource, `x-content-queue: ${label} sourcePlan requires sourceUrl or query`);
  }

  if (entry.status === "published") {
    assert(/^https:\/\/x\.com\/auntienomad\/status\/\d+/.test(entry.publishedUrl || ""), `x-content-queue: ${label} missing publishedUrl`);
    assert(entry.imagePath, `x-content-queue: ${label} published entry needs imagePath`);
  }

  if (entry.imagePath) {
    const imagePath = normalizePath(entry.imagePath);
    assert(fs.existsSync(path.join(root, imagePath)), `x-content-queue: ${label} imagePath does not exist: ${imagePath}`);
    assert(/\.(png|jpe?g|webp)$/i.test(imagePath), `x-content-queue: ${label} imagePath must be raster`);
  }
}

assert(queue.account === "@auntienomad", "x-content-queue: account must be @auntienomad");
assert(queue.positioning?.oneLine?.includes("真人"), "x-content-queue: positioning must mention 真人");
assert(queue.positioning?.promise?.includes("尺度"), "x-content-queue: promise must mention scale");
assert(queue.visualDefaults?.characterLock?.includes("photorealistic"), "x-content-queue: characterLock must be photorealistic");
assert(queue.visualDefaults?.negativePrompt?.includes("no collage"), "x-content-queue: negativePrompt must forbid collage");
assert(Array.isArray(queue.entries), "x-content-queue: entries must be an array");
assert(queue.entries?.length >= 8, "x-content-queue: keep at least 8 campaign entries");

const ids = new Set();
(queue.entries || []).forEach((entry) => {
  assert(!ids.has(entry.id), `x-content-queue: duplicate id ${entry.id}`);
  ids.add(entry.id);
  checkEntry(entry);
});

const plannedCount = (queue.entries || []).filter((entry) => ["planned", "drafting", "ready"].includes(entry.status)).length;
const publishedCount = (queue.entries || []).filter((entry) => entry.status === "published").length;
assert(plannedCount >= 6, "x-content-queue: keep at least 6 planned/drafting/ready entries");
assert(publishedCount >= 1, "x-content-queue: keep at least 1 published example");

const highSpiceWithoutSource = (queue.entries || []).filter(
  (entry) => entry.spiceLevel >= 4 && entry.sourcePlan?.required !== true && entry.pillar !== "culture-meme"
);
warn(
  highSpiceWithoutSource.length === 0,
  `x-content-queue: high-spice topical entries should usually require sources: ${highSpiceWithoutSource.map((entry) => entry.id).join(", ")}`
);

if (warnings.length) {
  console.warn("X content queue warnings:");
  warnings.forEach((message) => console.warn(`- ${message}`));
}

if (errors.length) {
  console.error("X content queue validation failed:");
  errors.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("X content queue validation passed.");
