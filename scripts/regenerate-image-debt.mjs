import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

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
const promptRevision = process.env.IMAGE_DEBT_PROMPT_REVISION || "legacy-v1";

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
    "Create a fresh 16:9 landscape editorial comic illustration for the Auntie No Mad website.",
    "Match the approved style exactly: bright yellow halftone background, thick black ink outlines, white sticker-cut borders, hot-pink accent icons, cream paper tones, playful Taiwan sticker/comic style, clean bold shapes, polished rendering.",
    "Preserve the character identity exactly: middle-aged Taiwanese auntie, round fuller face, full curly dark-brown short hair with big swooping curls, black pixel sunglasses, gold hoop earrings, leopard-print long sleeves/top, black apron with a small pink heart, fuller body, confident auntie attitude.",
    "Do not make the auntie younger, thinner, a different hairstyle, a different outfit, a logo mascot, a flat vector icon, a typography poster, a collage, or a banner.",
    "Absolutely no visible writing anywhere: no Chinese characters, no English letters, no numbers, no stock tickers, no company names, no brand title, no logo, no watermark, no signage, no captions, no labels, no speech-bubble words, no readable or fake text on papers, screens, phones, signs, badges, charts, cards, stickers, or map pins.",
    "Use blank icons, shapes, arrows, colored dots, pictograms, empty check circles, abstract charts, and blank panels instead of words or numbers.",
    "Keep the auntie large and fully inside the frame; do not crop the head, face, hands, or key objects.",
    `Topic: ${title}.`,
    summary ? `Story angle: ${summary}` : "",
    topicScene(item)
  ].filter(Boolean).join(" ");
}

async function generateOpenAIImage(prompt, outputPath) {
  const requestBody = {
    model,
    prompt,
    size,
    quality,
    n: 1
  };
  if (outputFormat) requestBody.output_format = outputFormat;
  if (["jpeg", "webp"].includes(outputFormat) && Number.isFinite(outputCompression)) {
    requestBody.output_compression = outputCompression;
  }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json",
      "user-agent": "auntie-no-mad-image-debt-regenerator/1.0"
    },
    body: JSON.stringify(requestBody)
  });

  const body = await response.json().catch(async () => ({ error: { message: await response.text() } }));
  if (!response.ok) {
    throw new Error(body.error?.message || `OpenAI image generation failed: ${response.status}`);
  }

  const b64 = body.data?.[0]?.b64_json;
  if (!b64) throw new Error("OpenAI image generation returned no b64_json");
  fs.writeFileSync(outputPath, Buffer.from(b64, "base64"));
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
