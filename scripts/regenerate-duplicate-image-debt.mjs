import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { AUNTIE_REFERENCE_IMAGE, IMAGE_STYLE_RULE_VERSION, auntieStylePrompt } from "./image-style-rules.mjs";
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

const priority = argValue("--priority", "ALL").toUpperCase();
const limit = Number.parseInt(argValue("--limit", "10"), 10);
const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";
const quality = process.env.OPENAI_IMAGE_QUALITY || "medium";
const size = process.env.OPENAI_IMAGE_SIZE || "1536x1024";
const outputFormat = process.env.OPENAI_IMAGE_OUTPUT_FORMAT || "jpeg";
const outputCompression = Number.parseInt(process.env.OPENAI_IMAGE_OUTPUT_COMPRESSION || "88", 10);
const promptRevision = process.env.DUPLICATE_IMAGE_PROMPT_REVISION || `dedupe-${IMAGE_STYLE_RULE_VERSION}`;
const referencePath = process.env.OPENAI_IMAGE_REFERENCE_PATH || AUNTIE_REFERENCE_IMAGE;

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
  const page = normalizePath(item.page).toLowerCase();
  const kind = String(item.suggestedImageKind || "").toLowerCase();
  const haystack = `${page} ${kind} ${item.id || ""}`;
  if (page.startsWith("radar/") && /hsr|train|traffic|commute|transit|transport/.test(haystack)) {
    return "Scene: auntie at a Taiwan transit planning table with blank route shapes, a train model, platform railings, commuter bag, clock icon without numbers, and motion stickers. Use a distinct composition from older transit covers.";
  }
  if (page.startsWith("radar/") && /heat|front|weather|rain|life-2/.test(haystack)) {
    return "Scene: auntie preparing for Taiwan weather with umbrella, laundry rack, blank weather phone panel, rain cloud, puddles, water bottle, and checklist icons. Use a distinct composition from older weather covers.";
  }
  if (page.startsWith("stories/") || /traffic-crowd|social-scam|pitfall|trap|scam/.test(haystack)) {
    return "Scene: auntie warning the viewer about a daily-life trap with a phone showing blank bubbles, blank receipt, warning icon, blocked profile silhouette, and household or street props. Avoid cash, coins, currency symbols, and sensational crime-poster layout.";
  }
  if (page.startsWith("stocks/") || /etf|market-watch|stock|00919|2330|2344|2454|6770|auo|inventec|psmc|umc/.test(haystack)) {
    return "Scene: auntie at a kitchen-table market desk with four blank cards, abstract chart panels, semiconductor wafer, coffee, calculator with blank keys, caution icon, and magnifying glass. No tickers, company names, prices, coins, cash, or currency signs.";
  }
  return "Scene: auntie reacting to a real Taiwan daily-life topic with rich household, street, commute, or desk props. Make the page visually distinct from the old duplicate image.";
}

function buildPrompt(item) {
  const html = fs.existsSync(path.join(root, item.page)) ? htmlText(item.page) : "";
  const description = metaContent(html, "description");
  const title = summarize(item.title || metaContent(html, "og:title") || item.id, 90);
  const summary = summarize(description, 180);
  return [
    auntieStylePrompt([
      `Style rule version: ${IMAGE_STYLE_RULE_VERSION}.`,
      "This replaces a duplicate historical primary image, so the composition must be clearly different from the old shared art while still obeying the same locked Auntie No Mad style."
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
    userAgent: "auntie-no-mad-duplicate-image-regenerator/1.0"
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

function replaceInJsonForPage(value, item) {
  if (Array.isArray(value)) return value.map((entry) => replaceInJsonForPage(entry, item));
  if (!value || typeof value !== "object") return value;

  const slug = normalizePath(value.slug || value.page || "");
  const isTargetRecord = slug === item.page || slug.endsWith(`/${item.page}`);
  if (isTargetRecord) return replaceInJsonStrings(value, item.currentImage, item.nextImage);

  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [key, replaceInJsonForPage(entry, item)])
  );
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
  if (!["ALL", "P1", "P2"].includes(priority)) {
    throw new Error("--priority must be ALL, P1, or P2");
  }
  if (!Number.isFinite(limit) || limit < 1) {
    throw new Error("--limit must be a positive number");
  }
  if (!dryRun && !process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required to regenerate duplicate image debt");
  }

  const debt = readJson("data/site-duplicate-image-debt.json");
  const selected = (debt.items || [])
    .filter((item) => item.status === "needs_regeneration")
    .filter((item) => priority === "ALL" || item.priority === priority)
    .slice(0, limit);

  if (!selected.length) {
    console.log(`No duplicate image debt items to regenerate for ${priority}.`);
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
    const content = replaceInJsonForPage(readJson("data/site-content.json"), {
      ...item,
      nextImage
    });
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

  runScript("scripts/write-duplicate-image-debt-report.mjs");
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
