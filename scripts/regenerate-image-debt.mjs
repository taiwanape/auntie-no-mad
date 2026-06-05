import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { AUNTIE_REFERENCE_IMAGES, IMAGE_STYLE_RULE_VERSION, auntieStylePrompt } from "./image-style-rules.mjs";
import { generateOpenAIImageFile } from "./openai-image-client.mjs";

const root = process.cwd();
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");

function argValue(name, fallback = "") {
  const prefix = `${name}=`;
  const inline = args.find((arg) => arg.startsWith(prefix));
  if (inline) return inline.slice(prefix.length);
  const index = args.indexOf(name);
  if (index >= 0 && args[index + 1] && !args[index + 1].startsWith("--")) return args[index + 1];
  return fallback;
}

const priority = argValue("--priority", "P1").toUpperCase();
const limit = Number.parseInt(argValue("--limit", "8"), 10);
const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";
const quality = process.env.OPENAI_IMAGE_QUALITY || "medium";
const size = process.env.OPENAI_IMAGE_SIZE || "1536x1024";
const outputFormat = process.env.OPENAI_IMAGE_OUTPUT_FORMAT || "jpeg";
const outputCompression = Number.parseInt(process.env.OPENAI_IMAGE_OUTPUT_COMPRESSION || "88", 10);
const promptRevision = process.env.IMAGE_DEBT_PROMPT_REVISION || `legacy-${IMAGE_STYLE_RULE_VERSION}`;
const referencePath = process.env.OPENAI_IMAGE_REFERENCE_PATH || AUNTIE_REFERENCE_IMAGES.join(";");

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function writeJson(relativePath, value) {
  fs.writeFileSync(path.join(root, relativePath), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function ensureDir(relativePath) {
  fs.mkdirSync(path.join(root, relativePath), { recursive: true });
}

function htmlText(page) {
  return fs.readFileSync(path.join(root, page), "utf8");
}

function metaContent(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`<meta\\s+(?:name|property)=["']${escaped}["']\\s+content=["']([^"']*)["'][^>]*>`, "i");
  return html.match(regex)?.[1] || "";
}

function stripHtml(value = "") {
  return String(value)
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function summarize(value = "", maxLength = 180) {
  return [...stripHtml(value)].slice(0, maxLength).join("");
}

function topicScene(item) {
  const haystack = `${item.page} ${item.title} ${item.category}`;
  if (/捷運|三鶯|通車|交通|班距|車站/.test(haystack)) {
    return "Scene: auntie at a Taiwan transit planning table with a small blank train model, blank route map shapes, platform railings, commuter bag, clock icon without numbers, and motion stickers. Make the metro topic instantly readable through objects, not text.";
  }
  if (/雨|豪雨|鋒面|颱|天氣|高溫|薔蜜/.test(haystack)) {
    return "Scene: auntie preparing for Taiwan stormy weather with umbrella, laundry rack, rain cloud, puddles, blank phone weather panel, and household checklist icons. Make the weather risk clear without any text or numbers.";
  }
  if (/航廈|工區|鐵道局|機敏|工程|機場/.test(haystack)) {
    return "Scene: auntie checking an airport construction model from a safe distance with blank blueprint sheets, safety cone, helmet, toolbox, train or terminal silhouette, and privacy shield icon. No official logos or readable documents.";
  }
  if (/股市|ETF|市場|股票|market-watch|stocks/.test(haystack)) {
    return "Scene: auntie at a kitchen-table market desk with four blank cards, abstract chart panels, semiconductor wafer, coffee, calculator with blank keys, caution icon, and magnifying glass. Educational and funny, not a finance ad.";
  }
  return "Scene: auntie reacting to a real Taiwan daily-life news situation with rich household, street, commute, or market props that explain the topic visually. Make it clickable and story-like.";
}

function buildPrompt(item) {
  const html = fs.existsSync(path.join(root, item.page)) ? htmlText(item.page) : "";
  const description = metaContent(html, "description");
  const title = summarize(item.title || metaContent(html, "og:title") || item.id, 90);
  const summary = summarize(description, 180);
  return [
    auntieStylePrompt([
      `Style rule version: ${IMAGE_STYLE_RULE_VERSION}.`,
      "This replaces historical fallback art, so make a fresh topic-specific article cover rather than copying any older composition."
    ]),
    `Topic: ${title}.`,
    summary ? `Story angle: ${summary}` : "",
    topicScene(item)
  ].filter(Boolean).join(" ");
}

async function generateOpenAIImage(prompt, outputPath) {
  return generateOpenAIImageFile({
    prompt,
    outputPath,
    model,
    size,
    quality,
    outputFormat,
    outputCompression,
    referencePath,
    userAgent: "auntie-no-mad-image-debt-regenerator/1.0"
  });
}

function outputAssetPath(item) {
  const ext = outputFormat === "jpeg" ? ".jpg" : `.${outputFormat || "png"}`;
  const cleanId = String(item.id || path.basename(item.page, ".html"))
    .replace(/[^a-z0-9-]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return `assets/generated/${item.date}/${cleanId}-${promptRevision}${ext}`;
}

function replaceAllText(relativePath, oldValue, newValue) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) return false;
  const before = fs.readFileSync(fullPath, "utf8");
  const after = before.split(oldValue).join(newValue);
  if (after === before) return false;
  fs.writeFileSync(fullPath, after, "utf8");
  return true;
}

function replaceInJsonStrings(value, oldValue, newValue) {
  if (typeof value === "string") return value.split(oldValue).join(newValue);
  if (Array.isArray(value)) return value.map((item) => replaceInJsonStrings(item, oldValue, newValue));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, replaceInJsonStrings(item, oldValue, newValue)])
    );
  }
  return value;
}

function runScript(script) {
  const result = spawnSync(process.execPath, [script], {
    cwd: root,
    encoding: "utf8",
    windowsHide: true
  });
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `${script} failed`).trim());
  }
}

async function main() {
  if (!["P0", "P1", "P2"].includes(priority)) {
    throw new Error("--priority must be P0, P1, or P2");
  }
  if (!Number.isFinite(limit) || limit < 1) {
    throw new Error("--limit must be a positive number");
  }
  if (!dryRun && !process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required to regenerate image debt");
  }

  const debt = readJson("data/site-image-debt.json");
  const selected = (debt.items || [])
    .filter((item) => item.status === "needs_regeneration" && item.priority === priority)
    .slice(0, limit);

  if (!selected.length) {
    console.log(`No ${priority} image debt items to regenerate.`);
    return;
  }

  const summary = [];
  for (const item of selected) {
    const nextImage = outputAssetPath(item);
    const prompt = buildPrompt(item);
    summary.push({ page: item.page, from: item.currentImage, to: nextImage });

    if (dryRun) continue;

    ensureDir(path.dirname(nextImage));
    const outputPath = path.join(root, nextImage);
    if (!fs.existsSync(outputPath) || force) {
      await generateOpenAIImage(prompt, outputPath);
    }

    replaceAllText(item.page, item.currentImage, nextImage);
    const content = replaceInJsonStrings(readJson("data/site-content.json"), item.currentImage, nextImage);
    writeJson("data/site-content.json", content);
  }

  if (dryRun) {
    console.log(JSON.stringify({
      ok: true,
      dryRun: true,
      priority,
      limit,
      selected: summary
    }, null, 2));
    return;
  }

  runScript("scripts/write-image-debt-report.mjs");
  console.log(JSON.stringify({
    ok: true,
    dryRun: false,
    priority,
    generated: summary.length,
    items: summary
  }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
