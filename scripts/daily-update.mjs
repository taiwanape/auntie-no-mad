import fs from "node:fs";
import path from "node:path";
import {
  AUNTIE_LIFE_REFERENCE_IMAGES,
  AUNTIE_MARKET_REFERENCE_IMAGES,
  IMAGE_STYLE_RULE_VERSION,
  auntieStylePrompt
} from "./image-style-rules.mjs";
import { generateOpenAIImageFile, resolveImageReferencePath, relativeImageReferencePath } from "./openai-image-client.mjs";
import { publicImageUrl, publicSiteUrl, publicUrl } from "./public-site-url.mjs";

const root = process.cwd();
const dataPath = path.join(root, "data", "site-content.json");
const reportPath = path.join(root, "data", "review-report.json");
const content = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const taipeiDate = getTaipeiDate();
const stamp = `${taipeiDate}T07:00:00+08:00`;
const ymd = taipeiDate.replaceAll("-", "");

const assets = {
  life: [
    "assets/radar-20260526-hsr-recovery-thumb.png",
    "assets/radar-20260526-heat-jangmi-thumb.png"
  ],
  lifeHero: [
    "assets/radar-20260526-hsr-recovery.png",
    "assets/radar-20260526-heat-jangmi.png"
  ],
  pitfalls: [
    "assets/story-20260527-social-scam-thumb.png",
    "assets/story-20260527-traffic-crowd-thumb.png"
  ],
  pitfallsHero: [
    "assets/story-20260527-social-scam.png",
    "assets/story-20260527-traffic-crowd.png"
  ],
  stocks: {
    default: "assets/stock-20260526-market-watch.png",
    "2409": "assets/stock-20260526-auo.png",
    "2356": "assets/stock-20260526-inventec.png",
    "6770": "assets/stock-20260526-umc.png",
    "00919": "assets/stock-20260526-00919.png"
  }
};

const sourceFeeds = [
  {
    name: "中央社生活醫藥",
    url: "https://feeds.feedburner.com/rsscna/lifehealth",
    type: "life"
  },
  {
    name: "中央社社會新聞",
    url: "https://feeds.feedburner.com/rsscna/social",
    type: "pitfall"
  },
  {
    name: "中央社財經新聞",
    url: "https://feeds.feedburner.com/rsscna/finance",
    type: "finance"
  },
  {
    name: "中央社科技新聞",
    url: "https://feeds.feedburner.com/rsscna/technology",
    type: "live"
  },
  {
    name: "中央社地方新聞",
    url: "https://feeds.feedburner.com/rsscna/local",
    type: "live"
  },
  {
    name: "中央社娛樂新聞",
    url: "https://feeds.feedburner.com/rsscna/stars",
    type: "live"
  }
];

const review = {
  date: taipeiDate,
  generatedAt: new Date().toISOString(),
  status: "pending",
  checks: [],
  sources: [],
  proposedSections: [],
  updatedSections: [],
  errors: []
};

const imageGeneration = {
  enabled: process.env.GENERATE_DAILY_IMAGES === "true",
  model: process.env.OPENAI_IMAGE_MODEL || "gpt-image-2",
  quality: process.env.OPENAI_IMAGE_QUALITY || "medium",
  size: process.env.OPENAI_IMAGE_SIZE || "1536x1024",
  outputFormat: process.env.OPENAI_IMAGE_OUTPUT_FORMAT || "jpeg",
  outputCompression: Number.parseInt(process.env.OPENAI_IMAGE_OUTPUT_COMPRESSION || "88", 10),
  limit: Number.parseInt(process.env.OPENAI_IMAGE_LIMIT || "9", 10),
  promptRevision: process.env.OPENAI_IMAGE_PROMPT_REVISION || IMAGE_STYLE_RULE_VERSION,
  referencePath: process.env.OPENAI_IMAGE_REFERENCE_PATH || "auto",
  allowApprovedFallback: process.env.ALLOW_APPROVED_IMAGE_FALLBACK === "true",
  forceApprovedFallback: process.env.FORCE_APPROVED_IMAGE_FALLBACK === "true"
};

const fridgeNotePool = [
  {
    key: "source",
    title: "今天先查來源",
    summary: "看到驚人消息先停三秒，來源比情緒重要。",
    auntieComment: "心急可以，手不要急著轉傳。",
    sourceUrl: "https://tfc-taiwan.org.tw/"
  },
  {
    key: "receipt",
    title: "收據先別丟",
    summary: "退貨、報帳、保固，很多麻煩都是一張紙救回來的。",
    auntieComment: "不是叫你囤垃圾，是叫你留證據。",
    sourceUrl: "https://cpc.ey.gov.tw/"
  },
  {
    key: "weather",
    title: "出門先看天氣",
    summary: "台灣的天氣很會演，晴天出門也要留一手。",
    auntieComment: "傘不是迷信，是給自己留台階。",
    sourceUrl: "https://www.cwa.gov.tw/V8/C/"
  },
  {
    key: "password",
    title: "密碼不要共用",
    summary: "一組密碼走天下，最後通常是帳號一起出事。",
    auntieComment: "方便過頭，就會變別人方便。",
    sourceUrl: "https://moda.gov.tw/"
  }
];

function getTaipeiDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function ensureDir(dir) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
}

function htmlEscape(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtml(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(value = "") {
  return String(value)
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'");
}

function makeSlugPart(value = "") {
  const cleaned = String(value)
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || "auntie-note";
}

function makeAssetId(value = "") {
  let hash = 5381;
  for (const char of String(value)) {
    hash = ((hash << 5) + hash) ^ char.codePointAt(0);
  }
  return Math.abs(hash >>> 0).toString(36).padStart(6, "0");
}

function cleanPromptText(value = "", maxLength = 120) {
  const cleaned = stripHtml(value)
    .replace(/（中央社.*?）/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return [...cleaned].slice(0, maxLength).join("");
}

function layoutVariantFor(target) {
  const seed = makeAssetId(`${target.prefix}-${target.item.title || target.item.name || ""}`);
  const index = Number.parseInt(seed.slice(-2), 36) || 0;
  const stockLayouts = [
    "Layout variant: auntie sits at the kitchen table in a three-quarter view, sleeves visible, one hand moving blank colored stock cards, with coffee, notebook, wafer, calculator, and household shelves around her. The abstract chart is a small background prop, not the main subject.",
    "Layout variant: auntie leans over a messy notebook spread, comparing a wafer tray, ETF-like colored blocks, blank sticky notes, and a magnifying glass. Use a low desk-level foreground with hands and props large in frame; avoid a standing presenter pose.",
    "Layout variant: auntie points from behind a cluttered table toward physical props on the table, not toward a giant UI panel. Put the blank chart paper off to the side and make the table objects carry the story."
  ];
  const pitfallLayouts = [
    "Layout variant: create a full everyday scene with auntie inside the incident, using a table, shop counter, street corner, home doorway, or police-station waiting area as a continuous environment. The suspicious object is in the foreground; auntie reacts to it, not to floating signs.",
    "Layout variant: use a cinematic kitchen-table or counter scene where auntie is checking a blank document, package, phone, key, bag, or receipt-like paper while the risky situation unfolds in the background. Keep warning symbols out unless absolutely needed.",
    "Layout variant: make the story visible through props and setting: nearby vehicle, storefront, mailbox, wallet, blank paperwork, package, or household objects. Auntie should be mid-action, not centered as a mascot."
  ];
  const lifeLayouts = [
    "Layout variant: use the approved full cover rhythm: large foreground object, busy midground action, warm household or Taiwan street background, and auntie reacting inside the scene. Avoid a plain icon backdrop.",
    "Layout variant: place auntie at a real table, commute stop, kitchen, living room, shop, or event setting with several concrete props. The main topic should be shown through objects and action, not labels or icons.",
    "Layout variant: create a layered editorial scene with a big topic object in front, auntie's hands interacting with it, and a detailed background that explains the news without readable text."
  ];
  const pool = target.section === "stock" || target.section === "market"
    ? stockLayouts
    : target.section === "pitfall"
      ? pitfallLayouts
      : lifeLayouts;
  return pool[index % pool.length];
}

function imagePromptFor(target) {
  const title = cleanPromptText(target.item.title, 70);
  const summary = cleanPromptText(target.item.summary || target.item.reason, 140);
  const layoutVariant = layoutVariantFor(target);
  const commonStyle = auntieStylePrompt([
    `Style rule version: ${IMAGE_STYLE_RULE_VERSION}.`
  ]);

  if (target.section === "stock") {
    return [
      commonStyle,
      `Topic: Taiwanese stock/ETF observation for ${target.item.ticker} ${target.item.name}.`,
      `Story angle: ${summary}`,
      layoutVariant,
      "Scene direction: build a rich kitchen-table stock detective scene with physical objects carrying the story. No phone-in-hand pose, no chart-icon wallpaper, no giant dashboard, no presenter standing beside a screen. Auntie should lean, sit, reach, sort, compare, circle, or inspect objects with a practical expression. Include foreground desk clutter, midground object action, and background household details. Use topic-relevant props such as semiconductor wafer shapes, ETF basket-like colored blocks, blank sticky notes, magnifying glass, coffee, notebook with blank pages, calculator, and zero warning triangles unless the scene truly needs one tiny non-text caution sticker. Make it educational and funny, not financial-advisor serious. No coins, cash, currency signs, piggy banks, extra mascots, ticker symbols, company names, prices, dates, percent signs, plus/minus signs, chart labels, axis labels, or any market text."
    ].join(" ");
  }

  if (target.section === "market") {
    return [
      commonStyle,
      "Topic: daily Taiwanese stock and ETF watchlist overview.",
      layoutVariant,
      "Scene direction: create a lively kitchen-table market command center with a clear foreground, midground, and background. No phone-in-hand pose, no chart-icon wallpaper, no giant dashboard, and no generic standing pose. Auntie should actively sort, compare, or push around colorful blank cards and physical market props while reacting with a knowing auntie expression. Include a shiny semiconductor wafer, a basket of blank colored blocks, coffee, notebook with blank pages, calculator, household shelves, and no warning triangles unless one tiny caution sticker is essential. Keep the reference-image richness. No coins, cash, currency signs, percent signs, plus/minus signs, piggy banks, extra mascots, visible words, letters, or numbers."
    ].join(" ");
  }

  if (target.section === "pitfall") {
    return [
      commonStyle,
      `Topic: ${title}.`,
      `Story angle: ${summary}`,
      layoutVariant,
      "Scene direction: create a specific daily-life trap mini-scene with auntie catching the problem in action, not posing beside icons. Do not create an icon wall, warning poster, or single-character mascot image. Do not copy the reference phone pose. Use a phone only when the topic clearly requires it; otherwise use topic-relevant street, home, shop, police, transport, or paperwork props as blank visual objects. Include foreground clutter, midground action, and background context. Use zero or one floating warning symbol total, small and secondary. The mood is humorous, practical, and slightly dramatic. No text in message bubbles, phone screens, receipts, signs, papers, badges, stickers, license plates, or UI panels."
    ].join(" ");
  }

  return [
    commonStyle,
    `Topic: ${title}.`,
    `Story angle: ${summary}`,
    layoutVariant,
    "Scene direction: create a distinct Taiwan everyday-life article cover with auntie inside the situation, not a generic icon wall or centered mascot. Do not copy the reference phone pose unless the topic is specifically about phone use. Use household, commute, entertainment, weather, food, shopping, or neighborhood props that match the topic. Build a rich foreground, midground, and background; vary auntie's pose and expression while preserving the exact reference identity. Use zero or one floating symbol total, small and secondary. Make it feel like a clickable lifestyle article cover, using objects and action instead of labels, with no visible text, numbers, percent signs, or UI labels."
  ].join(" ");
}

function imageReferencePathFor(target) {
  if (imageGeneration.referencePath && imageGeneration.referencePath !== "auto") {
    return imageGeneration.referencePath;
  }
  if (target.section === "stock" || target.section === "market") {
    return AUNTIE_MARKET_REFERENCE_IMAGES.join(";");
  }
  return AUNTIE_LIFE_REFERENCE_IMAGES.join(";");
}

async function generateOpenAIImage(prompt, outputPath, target) {
  return generateOpenAIImageFile({
    prompt,
    outputPath,
    model: imageGeneration.model,
    size: imageGeneration.size,
    quality: imageGeneration.quality,
    outputFormat: imageGeneration.outputFormat,
    outputCompression: imageGeneration.outputCompression,
    referencePath: imageReferencePathFor(target),
    userAgent: "auntie-no-mad-daily-image-generator/1.0"
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isTransientImageApiError(message = "") {
  return /timeout|timed out|reset|disconnect|before headers|fetch failed|network|temporarily|rate limit|429|500|502|503|504/i.test(message);
}

async function generateOpenAIImageWithRetries(prompt, outputPath, target) {
  const maxAttempts = Math.max(1, Number.parseInt(process.env.OPENAI_IMAGE_MAX_ATTEMPTS || "3", 10) || 3);
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await generateOpenAIImage(prompt, outputPath, target);
    } catch (error) {
      lastError = error;
      if (fs.existsSync(outputPath)) fs.rmSync(outputPath, { force: true });
      if (attempt >= maxAttempts || isBlockingImageApiError(error.message) || !isTransientImageApiError(error.message)) {
        break;
      }
      await sleep(4000 * attempt);
    }
  }
  throw lastError;
}

function assignTargetImage(target, assetPath, thumbPath = assetPath) {
  if (target.section === "stock") {
    target.item.image = assetPath;
    return;
  }
  if (target.section === "market") {
    target.item.hero = assetPath;
    return;
  }
  target.item.hero = assetPath;
  target.item.thumbnail = thumbPath;
  target.item.thumbnailAlt = target.item.thumbnailAlt || `${target.item.title} 的阿姨別生氣今日圖`;
}

function approvedImageFallbackFor(target) {
  const text = `${target.item.title || ""} ${target.item.summary || ""} ${target.item.reason || ""}`;
  const approved = {
    transit: "assets/generated/2026-05-29/life-1-ai.jpg",
    weather: "assets/generated/2026-05-29/life-2-ai.jpg",
    laundry: "assets/radar-plum-rain-laundry.png",
    ticket: "assets/radar-ticket-panic.png",
    security: "assets/generated/2026-05-29/pitfall-1-ai.jpg",
    scam: "assets/generated/2026-05-29/pitfall-1-ai.jpg",
    fraud: "assets/generated/2026-05-29/pitfall-2-ai.jpg",
    fraudAlt: "assets/generated/2026-05-29/pitfall-1-ai.jpg",
    market: "assets/generated/2026-05-29/stock-overview-ai.jpg",
    stock2408: "assets/generated/2026-05-29/stock-2408-ai.jpg",
    stock2344: "assets/stock-20260526-umc.png",
    stock2454: "assets/generated/2026-05-29/stock-2454-ai.jpg",
    stock6770: "assets/generated/2026-05-29/stock-6770-ai.jpg",
    stock00919: "assets/generated/2026-05-29/stock-00919-ai.jpg"
  };

  if (target.section === "market") return approved.market;
  if (target.section === "stock") {
    return approved[`stock${target.item.ticker}`] || approved.market;
  }
  if (target.section === "pitfall") {
    if (target.prefix === "pitfall-2") return approved.fraudAlt;
    if (/詐騙|詐欺|假投資|假出金|出金|金條|金主|結婚|婚|婚姻|詐財|現金|搜索/.test(text)) return approved.fraud;
    return approved.scam;
  }
  if (/演唱會|售票|票券|搶票|門票|五月天|金曲/.test(text)) return approved.ticket;
  if (/梅雨|衣服|陽台|除濕|曬衣|濕/.test(text)) return approved.laundry;
  if (/資安|個資|網路|平台|AI|手機|APP|App/.test(text)) return approved.security;
  if (/雨|颱|鋒面|天氣|高溫|梅雨|薔蜜|濕|雷/.test(text)) return approved.weather;
  if (/捷運|高鐵|台鐵|交通|通車|班距|車站|公車/.test(text)) return approved.transit;
  return approved.weather;
}

function copyApprovedFallbackImage(target, assetPath, sourcePath = approvedImageFallbackFor(target)) {
  const sourceFullPath = path.join(root, sourcePath);
  if (!fs.existsSync(sourceFullPath)) {
    throw new Error(`approved image fallback missing: ${sourcePath}`);
  }
  const outputPath = path.join(root, assetPath);
  const existed = fs.existsSync(outputPath);
  fs.copyFileSync(sourceFullPath, outputPath);
  return !existed;
}

function isBlockingImageApiError(message = "") {
  return /billing hard limit|quota|credit|budget|incorrect api key|invalid api key|organization|project/i.test(message);
}

async function enrichGeneratedImages(nextContent) {
  const dir = `assets/generated/${taipeiDate}`;
  const targets = [
    ...nextContent.lifeRadar.map((item, index) => ({ section: "life", item, prefix: `life-${index + 1}` })),
    ...nextContent.pitfalls.map((item, index) => ({ section: "pitfall", item, prefix: `pitfall-${index + 1}` })),
    { section: "market", item: nextContent.stockOverview, prefix: "stock-overview" },
    ...nextContent.stockWatchlist.map((item, index) => ({ section: "stock", item, prefix: `stock-${index + 1}-${item.ticker}` }))
  ];
  const max = Number.isFinite(imageGeneration.limit) && imageGeneration.limit > 0 ? imageGeneration.limit : targets.length;
  const requiredTotal = Math.min(max, targets.length);

  if (!imageGeneration.enabled) {
    review.errors.push("daily images required: set GENERATE_DAILY_IMAGES=true before updating public content");
    review.sources.push({
      name: "OpenAI Images API",
      url: "https://platform.openai.com/docs/guides/images/image-generation",
      ok: false,
      count: 0,
      reason: "GENERATOR_DISABLED"
    });
    review.checks.push(`daily images: 0/${requiredTotal} generated or reused`);
    return { required: true, generated: 0, total: requiredTotal, createdAssetPaths: [] };
  }

  ensureDir(dir);
  let ready = 0;
  let openAiGenerated = 0;
  let openAiReused = 0;
  let fallbackGenerated = 0;
  let reused = 0;
  let openAiError = "";
  let skipOpenAiAttempts = false;
  let openAiSkipped = 0;
  let openAiEndpoint = "";
  let openAiReferenceImage = "";
  const createdAssetPaths = [];
  const resolvedReferencePath = resolveImageReferencePath(imageGeneration.referencePath);
  if (resolvedReferencePath) {
    openAiReferenceImage = relativeImageReferencePath(resolvedReferencePath);
  }

  for (const target of targets.slice(0, max)) {
    const baseName = `${target.prefix}-${imageGeneration.promptRevision}-${makeAssetId(target.item.title || target.item.name || target.prefix)}`;
    const openAiExt = imageGeneration.outputFormat === "jpeg" ? ".jpg" : `.${imageGeneration.outputFormat || "png"}`;
    const openAiAssetPath = `${dir}/${baseName}${openAiExt}`;
    const approvedFallbackSourcePath = approvedImageFallbackFor(target);
    const approvedFallbackExt = path.extname(approvedFallbackSourcePath) || ".jpg";
    const approvedFallbackAssetPath = `${dir}/${baseName}-approved${approvedFallbackExt}`;
    const openAiOutputPath = path.join(root, openAiAssetPath);
    try {
      if (imageGeneration.forceApprovedFallback) {
        throw new Error("approved image fallback forced before public publish");
      }
      if (process.env.OPENAI_API_KEY && !skipOpenAiAttempts) {
        if (!fs.existsSync(openAiOutputPath)) {
          const generatedImage = await generateOpenAIImageWithRetries(imagePromptFor(target), openAiOutputPath, target);
          openAiEndpoint = generatedImage.endpoint;
          openAiReferenceImage = generatedImage.referenceImage || openAiReferenceImage;
          createdAssetPaths.push(openAiAssetPath);
          openAiGenerated += 1;
        } else {
          openAiReused += 1;
        }
        assignTargetImage(target, openAiAssetPath);
        ready += 1;
        continue;
      }
      if (skipOpenAiAttempts) {
        openAiSkipped += 1;
        throw new Error(`OpenAI Images API skipped after earlier blocking error: ${openAiError}`);
      }
      openAiError = "OPENAI_API_KEY is missing";
      throw new Error(openAiError);
    } catch (error) {
      if (!skipOpenAiAttempts || !openAiError) openAiError = error.message;
      if (isBlockingImageApiError(error.message)) skipOpenAiAttempts = true;
      if (!imageGeneration.allowApprovedFallback) {
        review.errors.push(`daily AI image generation failed for ${target.prefix}: ${error.message}`);
        continue;
      }
      try {
        const created = copyApprovedFallbackImage(target, approvedFallbackAssetPath, approvedFallbackSourcePath);
        if (created) createdAssetPaths.push(approvedFallbackAssetPath);
        fallbackGenerated += created ? 1 : 0;
        if (!created) reused += 1;
        assignTargetImage(target, approvedFallbackAssetPath, approvedFallbackAssetPath);
        ready += 1;
      } catch (fallbackError) {
        review.errors.push(`daily image generation failed for ${target.prefix}: ${error.message}; approved fallback also failed: ${fallbackError.message}`);
      }
    }
  }

  review.sources.push({
    name: "OpenAI Images API",
    url: "https://platform.openai.com/docs/guides/images/image-generation",
    ok: openAiGenerated + openAiReused > 0,
    count: openAiGenerated + openAiReused,
    model: imageGeneration.model,
    quality: imageGeneration.quality,
    size: imageGeneration.size,
    outputFormat: imageGeneration.outputFormat,
    outputCompression: imageGeneration.outputCompression,
    promptRevision: imageGeneration.promptRevision,
    imageStyleRuleVersion: IMAGE_STYLE_RULE_VERSION,
    endpoint: openAiEndpoint || (openAiReferenceImage ? "images/edits" : "images/generations"),
    referenceImage: openAiReferenceImage || undefined,
    error: openAiGenerated + openAiReused > 0 ? undefined : openAiError || undefined,
    forcedFallback: imageGeneration.forceApprovedFallback || undefined
  });

  if (imageGeneration.allowApprovedFallback && (fallbackGenerated > 0 || reused > 0)) {
    review.sources.push({
      name: "Approved Auntie raster image library",
      url: "docs/VOICE_GUIDE.md",
      ok: true,
      count: fallbackGenerated + reused,
      reason: "Emergency preview fallback only; public daily updates should use AI-generated topic images."
    });
  }

  review.checks.push(`daily images: ${ready}/${requiredTotal} ready (${openAiGenerated} OpenAI generated, ${openAiReused} OpenAI reused, ${fallbackGenerated} approved fallback, ${reused} fallback reused${openAiSkipped ? `, ${openAiSkipped} OpenAI attempts skipped` : ""})`);
  return { required: true, generated: ready, total: requiredTotal, createdAssetPaths };
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "accept": "application/json,text/xml,application/xml,text/html;q=0.9,*/*;q=0.8",
        "user-agent": "Mozilla/5.0 (compatible; AuntieNoMadDailyUpdater/1.0; +https://auntienomad.com)"
      }
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

function parseRss(xml, sourceName) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => {
    const item = match[1];
    const pick = (tag) => {
      const m = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
      return m ? decodeEntities(stripHtml(m[1])) : "";
    };
    return {
      title: pick("title"),
      link: pick("link"),
      description: pick("description"),
      pubDate: pick("pubDate"),
      sourceName
    };
  }).filter((item) => item.title && item.link);
}

async function collectNews() {
  const all = [];
  for (const feed of sourceFeeds) {
    try {
      const xml = await fetchText(feed.url);
      const items = parseRss(xml, feed.name).map((item) => ({ ...item, feedType: feed.type }));
      all.push(...items);
      review.sources.push({ name: feed.name, url: feed.url, ok: true, count: items.length });
    } catch (error) {
      review.sources.push({ name: feed.name, url: feed.url, ok: false, error: error.message });
    }
  }
  return all;
}

function pickNews(news, type, count, keywords) {
  const pool = news.filter((item) => item.feedType === type || type === "any");
  const scored = pool.map((item) => {
    const text = `${item.title} ${item.description}`;
    const score = keywords.reduce((sum, keyword) => sum + (text.includes(keyword) ? 2 : 0), 0);
    return { ...item, score };
  }).sort((a, b) => b.score - a.score);
  return scored.slice(0, count);
}

const lifeTopicRules = [
  {
    key: "weather",
    category: "天氣生活",
    keywords: ["氣象", "豪雨", "大雨", "高溫", "颱風", "低氣壓", "梅雨", "降雨", "天氣", "雨"]
  },
  {
    key: "transport",
    category: "交通生活",
    keywords: ["高鐵", "台鐵", "捷運", "公車", "交通", "道路", "塞車", "通車", "班距", "航班", "機場"]
  },
  {
    key: "consumer",
    category: "民生資訊",
    keywords: ["補助", "消費", "物價", "電價", "瓦斯", "停電", "停水", "食品", "回收", "超商", "發票"]
  },
  {
    key: "health",
    category: "健康生活",
    keywords: ["醫療", "健康", "流感", "疫苗", "醫院", "用藥", "食安", "疾病", "健保"]
  },
  {
    key: "entertainment",
    category: "娛樂生活",
    keywords: ["藝人", "演唱會", "金曲", "電影", "戲劇", "歌手", "粉絲", "偶像", "展覽"]
  },
  {
    key: "local",
    category: "地方生活",
    keywords: ["台北", "新北", "桃園", "台中", "台南", "高雄", "基隆", "新竹", "屏東", "宜蘭", "花蓮", "地方"]
  },
  {
    key: "tech",
    category: "科技生活",
    keywords: ["手機", "APP", "App", "AI", "資安", "個資", "網路", "平台", "數位"]
  }
];

function normalizedTitleSignature(item) {
  return String(item?.title || "")
    .replace(/\s+/g, "")
    .replace(/[0-9０-９年月日縣市區鄉鎮]/g, "")
    .slice(0, 10);
}

function lifeTopicFor(item = {}) {
  const text = `${item.title || ""} ${item.description || ""} ${item.sourceName || ""}`;
  if (/娛樂/.test(item.sourceName || "")) return lifeTopicRules.find((rule) => rule.key === "entertainment");
  if (/科技/.test(item.sourceName || "")) return lifeTopicRules.find((rule) => rule.key === "tech");
  const matched = lifeTopicRules.find((rule) => rule.keywords.some((keyword) => text.includes(keyword)));
  if (matched) return matched;
  if (/地方/.test(item.sourceName || "")) return lifeTopicRules.find((rule) => rule.key === "local");
  return { key: "daily", category: "生活新聞", keywords: [] };
}

function lifeAuntieLine(topicKey) {
  return {
    weather: "天氣不是拿來焦慮的，是拿來決定要不要帶傘、改行程。",
    transport: "交通消息先看一眼，少在月台或路上多煩十分鐘。",
    consumer: "跟荷包和日常有關的事，先看懂再動作。",
    health: "健康消息先看可靠來源，別被群組偏方牽著跑。",
    entertainment: "八卦可以看，但先看來源，不要幫謠言加班。",
    local: "地方消息常常最影響生活，別只看大標題。",
    tech: "新科技先看用途，不要只看熱鬧。"
  }[topicKey] || "新聞不是拿來焦慮的，是拿來少踩一個坑的。";
}

function hasSupportedLifeImageFallback(item = {}) {
  const text = `${item.title || ""} ${item.description || ""}`;
  return /雨|颱|鋒面|天氣|高溫|梅雨|薔蜜|濕|雷|捷運|高鐵|台鐵|交通|通車|班距|車站|公車|演唱會|售票|票券|搶票|門票|五月天|金曲|衣服|陽台|除濕|曬衣|資安|個資|網路|平台|AI|手機|APP|App/.test(text);
}

function buildLifeItems(news) {
  const keywords = [
    "高鐵", "台鐵", "捷運", "交通", "天氣", "高溫", "豪雨", "颱風", "補助", "消費", "醫療", "健康", "停班",
    "物價", "展覽", "演唱會", "電影", "藝人", "地方", "手機", "APP", "AI", "資安"
  ];
  const topicBonus = {
    weather: 5,
    transport: 6,
    consumer: 5,
    health: 4,
    entertainment: 4,
    local: 3,
    tech: 3,
    daily: 1
  };
  const pool = news
    .filter((item) => ["life", "live"].includes(item.feedType))
    .filter(hasSupportedLifeImageFallback)
    .map((item) => {
      const topic = lifeTopicFor(item);
      const text = `${item.title} ${item.description}`;
      const keywordScore = keywords.reduce((sum, keyword) => sum + (text.includes(keyword) ? 2 : 0), 0);
      return {
        ...item,
        topic,
        score: keywordScore + (topicBonus[topic.key] || 0),
        signature: normalizedTitleSignature(item)
      };
    })
    .filter((item) => item.score > 1 && /^https?:\/\//.test(item.link || ""))
    .sort((a, b) => b.score - a.score);

  const picked = [];
  const seenTopics = new Set();
  const seenSignatures = new Set();
  for (const item of pool) {
    if (seenSignatures.has(item.signature)) continue;
    if (seenTopics.has(item.topic.key)) continue;
    picked.push(item);
    seenTopics.add(item.topic.key);
    seenSignatures.add(item.signature);
    if (picked.length >= 2) break;
  }
  for (const item of pool) {
    if (picked.length >= 2) break;
    if (seenSignatures.has(item.signature)) continue;
    picked.push(item);
    seenSignatures.add(item.signature);
  }
  if (picked.length < 2) return content.lifeRadar;

  return picked.map((item, index) => {
    const slug = `radar/${taipeiDate}-life-${index + 1}.html`;
    const title = `${item.title}`;
    const topic = item.topic || lifeTopicFor(item);
    return {
      title,
      date: taipeiDate,
      category: topic.category || (index === 0 ? "生活新聞" : "民生資訊"),
      summary: `${item.description || item.title} 阿姨提醒：先看來源、再看自己今天會不會被影響。`,
      auntieComment: lifeAuntieLine(topic.key),
      sourceUrl: item.link,
      slug,
      thumbnail: assets.life[index % assets.life.length],
      thumbnailAlt: `阿姨整理${item.title}的生活雷達縮圖`,
      cta: "新聞重點、阿姨白話翻譯與你今天可以先做的事。",
      sourceName: item.sourceName,
      hero: assets.lifeHero[index % assets.lifeHero.length]
    };
  });
}

function buildPitfallItems(news) {
  const hardBlockedTopics = ["議長", "連署案", "選舉", "涉貪", "貪污", "判刑", "判決", "勒贖", "拘禁", "凌虐", "殺人", "投毒", "毒駕", "毒品", "灼傷", "火警", "骨折", "摔落", "起火"];
  const isPublicFriendly = (item) => !hardBlockedTopics.some((keyword) => `${item.title} ${item.description}`.includes(keyword));
  const hasPitfallAngle = (item) => ["詐騙", "假投資", "假冒", "謊稱", "詐財", "網戀", "匯款", "假軍官", "警方", "警察", "不明成分", "個資", "查詢個資", "醫療行為", "中醫", "兜售", "問診", "消費", "交通違規", "拒檢", "吊銷", "罰", "違規", "糾紛", "社群"].some((keyword) => `${item.title} ${item.description}`.includes(keyword));
  const uniqueByLink = (items) => {
    const seen = new Set();
    return items.filter((item) => {
      if (seen.has(item.link)) return false;
      seen.add(item.link);
      return true;
    });
  };
  const primary = pickNews(news, "pitfall", 20, ["詐騙", "假投資", "假冒", "謊稱", "不明成分", "個資", "查詢個資", "社群", "消費", "糾紛"])
    .filter((item) => item.score > 0)
    .filter(hasPitfallAngle)
    .filter(isPublicFriendly);
  const relaxed = pickNews(news, "pitfall", 20, ["個資", "中醫", "醫療行為", "問診", "兜售", "不明成分", "交通違規", "拒檢", "罰", "違規", "詐"])
    .filter((item) => item.score > 0)
    .filter(hasPitfallAngle)
    .filter(isPublicFriendly);
  const dailyFriendlyFallback = pickNews(news, "pitfall", 20, ["詐", "假", "匯款", "違規", "警方", "警察", "罰", "交通", "駕", "車", "市府"])
    .filter(isPublicFriendly)
    .filter((item) => item.score > 0 || hasPitfallAngle(item));
  const picked = uniqueByLink([...primary, ...relaxed, ...dailyFriendlyFallback]).slice(0, 2);
  if (picked.length < 1) return [];

  return picked.slice(0, 2).map((item, index) => {
    const slug = `stories/${taipeiDate}-pitfall-${index + 1}.html`;
    return {
      title: `${item.title}`,
      date: taipeiDate,
      category: index === 0 ? "踩坑提醒" : "生活踩坑",
      summary: `${item.description || item.title} 阿姨提醒：越急、越便宜、越像好康，越要先停三秒。`,
      auntieComment: "不是你笨，是套路越來越會穿西裝。",
      sourceUrl: item.link,
      slug,
      thumbnail: assets.pitfalls[index % assets.pitfalls.length],
      thumbnailAlt: `阿姨整理${item.title}的踩坑日記縮圖`,
      cta: "先看懂套路，別把錢包推出去。",
      sourceName: item.sourceName,
      hero: assets.pitfallsHero[index % assets.pitfallsHero.length]
    };
  });
}

function formatTaipeiMinute(dateValue) {
  const date = dateValue ? new Date(dateValue) : new Date();
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}

function auntieLiveComment(item) {
  const text = `${item.title} ${item.description}`;
  if (/詐|騙|假|匯款|個資|罰|違規/.test(text)) return "先查證再動作，急著信就容易被牽著走。";
  if (/雨|颱|高溫|天氣|交通|捷運|台鐵|高鐵/.test(text)) return "先看會不會影響今天出門，其他等下再煩。";
  if (/股|台股|外資|科技|AI|半導體|ETF/.test(text)) return "先看脈絡，不要只看標題就跟著情緒跑。";
  return "新聞很多，先抓重點，不要被標題牽著鼻子走。";
}

function liveCategoryFor(item) {
  if (item.feedType === "life") return "即時生活";
  if (item.feedType === "pitfall") return "即時社會";
  if (item.feedType === "finance") return "即時財經";
  if (/科技/.test(item.sourceName || "")) return "即時科技";
  if (/地方/.test(item.sourceName || "")) return "即時地方";
  if (/娛樂/.test(item.sourceName || "")) return "即時娛樂";
  return "即時新聞";
}

function isoDateOrNow(value) {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function buildLiveNews(news) {
  const seen = new Set();
  const picked = news
    .filter((item) => item.title && /^https?:\/\//.test(item.link || ""))
    .filter((item) => {
      if (seen.has(item.link)) return false;
      seen.add(item.link);
      return true;
    })
    .sort((a, b) => (new Date(b.pubDate).getTime() || 0) - (new Date(a.pubDate).getTime() || 0))
    .slice(0, 6);

  if (picked.length < 3) return content.liveNews || [];

  return picked.map((item) => ({
    title: item.title,
    date: taipeiDate,
    category: liveCategoryFor(item),
    summary: `${cleanPromptText(item.description || item.title, 96)} 阿姨提醒：先看來源，再看這件事跟你有沒有關係。`,
    auntieComment: auntieLiveComment(item),
    sourceUrl: item.link,
    slug: item.link,
    sourceName: item.sourceName,
    publishedAt: isoDateOrNow(item.pubDate),
    displayTime: formatTaipeiMinute(item.pubDate)
  }));
}

function parseNumber(value) {
  const number = Number(String(value || "").replace(/[,+]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function signedNumber(value) {
  const text = String(value || "0").replace(/[,+]/g, "").trim();
  const number = Number(text);
  return Number.isFinite(number) ? number : 0;
}

function changePercent(row) {
  const close = parseNumber(row.close);
  const change = signedNumber(row.change);
  const previous = close - change;
  if (!close || !previous) return 0;
  return (change / previous) * 100;
}

const overExposedStockTickers = new Set([
  "2330",
  "2317",
  "2454",
  "2308",
  "2382",
  "2412",
  "3008",
  "3661",
  "6669",
  "3711"
]);

const repeatedEtfPenaltyTickers = new Set(["00919", "00878", "0056"]);
const leveragedEtfPattern = /正2|反1|反向|槓桿|期貨|VIX|N|L$/i;

function isEtfRow(row) {
  return /^00\d/.test(row.ticker || "");
}

function recentStockTickers() {
  return new Set((content.stockWatchlist || []).map((item) => item.ticker).filter(Boolean));
}

function rotationScore(row) {
  const name = `${row.name || ""}`;
  if (/電|光|網|通|半導|晶|封|測|矽|AI|資訊/.test(name)) return 14;
  if (/航|運|車|鋼|水泥|塑|化|玻|紙/.test(name)) return 11;
  if (/建|營造|資產|觀光|餐|百貨|零售|生技|醫|藥/.test(name)) return 9;
  if (/金|銀|保|證/.test(name)) return 6;
  return 3;
}

function marketMood(rows) {
  const common = rows
    .filter((row) => /^\d{4}$/.test(row.ticker || "") && !isEtfRow(row))
    .filter((row) => parseNumber(row.close) > 0)
    .map((row) => changePercent(row))
    .filter((value) => Number.isFinite(value));
  const sample = common.length || 1;
  const average = common.reduce((sum, value) => sum + value, 0) / sample;
  const downRatio = common.filter((value) => value < 0).length / sample;
  const hardDown = average <= -1.2 || downRatio >= 0.66;
  const softDown = average <= -0.35 || downRatio >= 0.55;
  return {
    average,
    downRatio,
    state: hardDown ? "大跌防守" : softDown ? "偏弱觀察" : "輪動觀察",
    isWeak: hardDown || softDown,
    label: hardDown
      ? "盤面偏弱，阿姨先整理分批觀察名單"
      : softDown
        ? "市場有點晃，先看小資能負擔的題材"
        : "市場輪動中，阿姨挑可做功課的口袋名單"
  };
}

function liquidityScore(row) {
  if (row.amount <= 0) return 0;
  return Math.min(28, Math.log10(row.amount) * 4);
}

function stockAffordabilityScore(close) {
  if (close <= 30) return 30;
  if (close <= 60) return 25;
  if (close <= 100) return 18;
  if (close <= 150) return 10;
  return -20;
}

function etfAffordabilityScore(close) {
  if (close <= 25) return 30;
  if (close <= 45) return 24;
  if (close <= 70) return 16;
  if (close <= 100) return 8;
  return -25;
}

function bestByScore(candidates, selected, scoreFn) {
  return candidates
    .filter((row) => row && !selected.has(row.ticker))
    .map((row) => ({ row, score: scoreFn(row) }))
    .sort((a, b) => b.score - a.score)
    .find((item) => Number.isFinite(item.score))?.row;
}

async function collectMarket() {
  const url = "https://www.twse.com.tw/rwd/zh/afterTrading/STOCK_DAY_ALL?response=json";
  const text = await fetchText(url);
  const json = JSON.parse(text);
  if (json.stat !== "OK" || !Array.isArray(json.data)) throw new Error("TWSE STOCK_DAY_ALL unavailable");
  review.sources.push({ name: "臺灣證券交易所 STOCK_DAY_ALL", url, ok: true, count: json.data.length });
  return json.data.map((row) => ({
    ticker: row[0],
    name: row[1],
    volume: parseNumber(row[2]),
    amount: parseNumber(row[3]),
    open: row[4],
    high: row[5],
    low: row[6],
    close: row[7],
    change: row[8],
    sourceUrl: `https://www.twse.com.tw/rwd/zh/afterTrading/STOCK_DAY?date=${json.date}&stockNo=${row[0]}&response=json`,
    rawDate: json.date
  }));
}

function pickStocks(rows) {
  const mood = marketMood(rows);
  const recent = recentStockTickers();
  const commonStocks = rows
    .filter((row) => /^\d{4}$/.test(row.ticker) && !isEtfRow(row))
    .filter((row) => parseNumber(row.close) > 0)
    .filter((row) => parseNumber(row.close) <= 180 || row.amount > 1_500_000_000)
    .sort((a, b) => b.amount - a.amount);
  const affordableStocks = commonStocks.filter((row) => parseNumber(row.close) <= 150 && !overExposedStockTickers.has(row.ticker));
  const etfs = rows
    .filter(isEtfRow)
    .filter((row) => parseNumber(row.close) > 0 && parseNumber(row.close) <= 100)
    .filter((row) => !leveragedEtfPattern.test(row.name || ""))
    .sort((a, b) => b.amount - a.amount);

  const selected = new Set();
  const picks = [];
  const addPick = (row, category, type, risk, theme) => {
    if (!row || selected.has(row.ticker) || picks.length >= 4) return false;
    selected.add(row.ticker);
    picks.push({ row, category, type, risk, theme, mood });
    return true;
  };

  const etfScore = (row) => {
    const close = parseNumber(row.close);
    const pct = changePercent(row);
    return etfAffordabilityScore(close)
      + liquidityScore(row)
      + (/台灣|臺灣|高股息|ESG|永續|中小|公司治理|電子|金融/.test(row.name || "") ? 15 : 4)
      + (mood.isWeak ? 14 : 6)
      + (pct < -1 ? 8 : 0)
      - (recent.has(row.ticker) ? 28 : 0)
      - (repeatedEtfPenaltyTickers.has(row.ticker) ? 10 : 0);
  };

  const dipScore = (row) => {
    const close = parseNumber(row.close);
    const pct = changePercent(row);
    return stockAffordabilityScore(close)
      + liquidityScore(row)
      + rotationScore(row)
      + (pct <= -4 ? 34 : pct <= -2 ? 22 : pct < 0 ? 10 : -12)
      + (mood.isWeak && pct < 0 ? 15 : 0)
      - (recent.has(row.ticker) ? 35 : 0)
      - (overExposedStockTickers.has(row.ticker) ? 45 : 0);
  };

  const rotationCandidateScore = (row) => {
    const close = parseNumber(row.close);
    const pct = changePercent(row);
    return stockAffordabilityScore(close)
      + liquidityScore(row)
      + rotationScore(row) * 2
      + (pct >= 0 ? 10 : 0)
      + (pct > -2 && pct < 3 ? 8 : 0)
      - (recent.has(row.ticker) ? 35 : 0)
      - (overExposedStockTickers.has(row.ticker) ? 45 : 0);
  };

  const smallInvestorScore = (row) => {
    const close = parseNumber(row.close);
    const pct = changePercent(row);
    return stockAffordabilityScore(close)
      + liquidityScore(row)
      + (close <= 80 ? 14 : 0)
      + (Math.abs(pct) <= 3 ? 8 : 0)
      + rotationScore(row)
      - (recent.has(row.ticker) ? 35 : 0)
      - (overExposedStockTickers.has(row.ticker) ? 55 : 0);
  };

  addPick(
    bestByScore(etfs, selected, etfScore),
    "ETF 分散配置",
    mood.isWeak ? "大盤拉回 ETF 分批觀察" : "小資分散 ETF",
    "中",
    "ETF 分散配置"
  );
  if (mood.isWeak) {
    addPick(
      bestByScore(etfs, selected, etfScore),
      "防守型 ETF",
      "震盪盤 ETF 第二層觀察",
      "中",
      "ETF 分散配置"
    );
  }
  addPick(
    bestByScore(affordableStocks, selected, dipScore),
    mood.isWeak ? "跌深反彈觀察" : "逢低觀察",
    "價格可負擔的跌深題材",
    "中高",
    "跌深反彈觀察"
  );
  addPick(
    bestByScore(affordableStocks, selected, rotationCandidateScore),
    "產業輪動觀察",
    "低中價題材輪動股",
    "中高",
    "產業輪動"
  );
  addPick(
    bestByScore(affordableStocks, selected, smallInvestorScore),
    "小資可負擔",
    "低中價位量能觀察",
    "中",
    "小資可負擔"
  );

  for (const row of [...etfs, ...affordableStocks, ...commonStocks]) {
    if (picks.length >= 4) break;
    const isEtf = isEtfRow(row);
    addPick(
      row,
      isEtf ? "ETF 分散配置" : "小資可負擔",
      isEtf ? "ETF 備選觀察" : "低中價位備選觀察",
      isEtf ? "中" : "中高",
      isEtf ? "ETF 分散配置" : "小資可負擔"
    );
  }

  if (picks.length !== 4) throw new Error("市場資料不足，無法產生四檔小資觀察清單");
  return picks;
}

function buildStockItems(rows) {
  const picks = pickStocks(rows);
  return picks.map(({ row, type, category, risk, theme, mood }) => {
    const slug = `stocks/${taipeiDate}-${row.ticker}.html`;
    const isEtf = row.ticker.startsWith("00");
    const close = parseNumber(row.close);
    const pct = changePercent(row);
    const pctText = `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`;
    const reason = isEtf
      ? `${row.name} 股價門檻相對親民，適合拿來練習看一籃子配置；今天漲跌幅約 ${pctText}，重點不是追高，而是看分散、淨值和成分股。`
      : `${row.name} 收盤價 ${close.toFixed(2)}，比高價權值股更容易被小資族納入口袋名單；今天漲跌幅約 ${pctText}，可用來觀察 ${theme} 的節奏。`;
    return {
      title: row.name,
      date: taipeiDate,
      category,
      summary: `${row.close} 收盤，漲跌 ${row.change || "0"}。${reason}`,
      auntieComment: isEtf
        ? "ETF 是一籃菜，不是保證不會跌的護身符。"
        : mood.isWeak
          ? "跌下來先看清楚，不是看到便宜就手癢。"
          : "名單可以放口袋，功課不能放冰箱。",
      sourceUrl: row.sourceUrl,
      slug,
      ticker: row.ticker,
      name: row.name,
      type,
      reason,
      riskLevel: risk,
      riskNote: isEtf
        ? "ETF 仍會跟著成分股和大盤波動，配息或分散都不是保證答案。"
        : theme === "跌深反彈觀察"
          ? "跌深不等於落底，反彈前常會先震盪，務必看量能和基本面。"
          : "低中價位也可能波動很大，題材輪動退潮時要特別小心。",
      suitableFor: isEtf ? "想用小額練習分散配置、比較 ETF 規則與成分股的人。" : "想找價格較可負擔、願意做題材與風險功課的觀察者。",
      notSuitableFor: "想找保證答案、不能接受波動，或沒有時間做功課的人。",
      disclaimer: "僅供教育與資訊參考，不是投資建議。",
      updatedAt: stamp,
      close: row.close,
      change: row.change,
      changePercent: pctText,
      selectionTheme: theme,
      marketMood: mood.state,
      sourceName: "臺灣證券交易所",
      image: assets.stocks[row.ticker] || assets.stocks.default
    };
  });
}

function buildStockOverview(stockItems) {
  const mood = stockItems[0]?.marketMood || "輪動觀察";
  const etfCount = stockItems.filter((item) => isEtfItem(item)).length;
  const affordableCount = stockItems.filter((item) => parseNumber(item.close) <= 100).length;
  return {
    title: "股市ETF",
    date: taipeiDate,
    category: "股市 ETF",
    summary: `${mood}：今天不追固定熱門股，改從小資可負擔、ETF 分散、低基期題材和跌深反彈觀察裡挑四檔。這是口袋名單整理，不是買賣建議。`,
    auntieComment: `阿姨今天先看 ${etfCount} 檔 ETF、${affordableCount} 檔百元內標的；不是叫你衝，是幫你把功課順序排好。`,
    sourceUrl: "https://www.twse.com.tw/rwd/zh/afterTrading/STOCK_DAY_ALL?response=json",
    slug: `stocks/${taipeiDate}-market-watch.html`,
    badge: "小資版",
    marketCards: stockItems.map((item) => ({
      label: `${item.category} ${item.ticker}`,
      value: item.name,
      note: item.type,
      trend: item.selectionTheme || item.category,
      tone: /跌深|防守|ETF/.test(item.category) ? "down" : "up"
    }))
  };
}

function reviewProposed(nextContent) {
  const errors = [];
  const checks = [];
  const required = ["title", "date", "category", "summary", "auntieComment", "sourceUrl", "slug"];
  const stockRequired = ["ticker", "name", "type", "reason", "riskLevel", "riskNote", "suitableFor", "notSuitableFor", "disclaimer", "updatedAt"];
  const banned = ["買進", "賣出", "目標價", "保證獲利"];

  function checkArray(name, items, min) {
    if (!Array.isArray(items) || items.length < min) errors.push(`${name}: insufficient items`);
    (items || []).forEach((item) => {
      if (item.date !== taipeiDate) errors.push(`${name}: stale date on ${item.title || "unknown"}`);
      required.forEach((field) => {
        if (!item[field]) errors.push(`${name}: missing ${field} on ${item.title || "unknown"}`);
      });
      if (!/^https?:\/\//.test(item.sourceUrl || "")) errors.push(`${name}: sourceUrl must be public URL on ${item.title}`);
    });
    checks.push(`${name}: ${(items || []).length} items checked`);
  }

  checkArray("lifeRadar", nextContent.lifeRadar, 2);
  checkArray("pitfalls", nextContent.pitfalls, 1);
  checkArray("liveNews", nextContent.liveNews, 3);
  checkArray("stockWatchlist", nextContent.stockWatchlist, 4);

  if ((nextContent.lifeRadar || []).length >= 2) {
    const lifeCategories = new Set(nextContent.lifeRadar.map((item) => item.category));
    const lifeSignatures = new Set(nextContent.lifeRadar.map((item) => normalizedTitleSignature(item)));
    if (lifeCategories.size < 2 && lifeSignatures.size < 2) {
      errors.push("lifeRadar: topics are too repetitive; pick two different daily-life angles");
    }
    checks.push(`lifeRadar diversity: ${lifeCategories.size} categories, ${lifeSignatures.size} title signatures`);
  }

  if (nextContent.stockWatchlist?.length !== 4) errors.push("stockWatchlist must have exactly 4 items");
  (nextContent.stockWatchlist || []).forEach((item) => {
    stockRequired.forEach((field) => {
      if (!item[field]) errors.push(`stockWatchlist: missing ${field} on ${item.ticker || item.title}`);
    });
    const serialized = JSON.stringify(item);
    banned.forEach((phrase) => {
      if (serialized.includes(phrase)) errors.push(`stockWatchlist: banned phrase ${phrase} on ${item.ticker}`);
    });
    if (!String(item.disclaimer).includes("不是投資建議")) {
      errors.push(`stockWatchlist: missing disclaimer on ${item.ticker}`);
    }
  });

  const slugs = new Set();
  [...nextContent.lifeRadar, ...nextContent.pitfalls, ...nextContent.stockWatchlist].forEach((item) => {
    if (slugs.has(item.slug)) errors.push(`duplicate slug: ${item.slug}`);
    slugs.add(item.slug);
  });

  return { ok: errors.length === 0, errors, checks };
}

function structuredData(data) {
  return JSON.stringify(data, null, 2).replace(/</g, "\\u003c");
}

function articleTemplate(item, section) {
  const base = section === "stock" ? "../" : "../";
  const sourceLabel = item.sourceName || "公開來源";
  const hero = item.hero || item.image || assets.stocks.default;
  const heroPath = hero.startsWith("assets/") ? `../${hero}` : hero;
  const backHref = section === "stock" ? "../index.html#investing" : section === "pitfall" ? "../index.html#stories" : "../index.html#radar";
  const backText = section === "stock" ? "回股市 ETF" : section === "pitfall" ? "回踩坑日記" : "回生活雷達";
  const pageUrl = publicUrl(item.slug);
  const imageUrl = publicImageUrl(hero);
  const articleType = section === "life" ? "NewsArticle" : "Article";
  const displayTitle = section === "stock" ? stockStoryTitle(item) : item.title;
  const pageDescription = section === "stock" ? stockDeck(item) : item.summary;
  const articleJsonLd = structuredData({
    "@context": "https://schema.org",
    "@type": articleType,
    headline: displayTitle,
    description: pageDescription,
    image: [imageUrl],
    datePublished: item.date,
    dateModified: item.updatedAt || item.date,
    articleSection: item.category,
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl
    },
    author: {
      "@type": "Organization",
      name: "阿姨別生氣",
      sameAs: [
        "https://x.com/auntienomad",
        "https://www.instagram.com/auntienomad/",
        "https://www.facebook.com/profile.php?id=61553234457401"
      ]
    },
    publisher: {
      "@type": "Organization",
      name: "阿姨別生氣",
      sameAs: [
        "https://x.com/auntienomad",
        "https://www.instagram.com/auntienomad/",
        "https://www.facebook.com/profile.php?id=61553234457401"
      ],
      logo: {
        "@type": "ImageObject",
        url: publicImageUrl("assets/auntie-avatar-nav.jpg")
      }
    }
  });
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${htmlEscape(displayTitle)}｜阿姨別生氣</title>
  <meta name="description" content="${htmlEscape(pageDescription)}">
  <link rel="canonical" href="${htmlEscape(pageUrl)}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="阿姨別生氣">
  <meta property="og:title" content="${htmlEscape(displayTitle)}">
  <meta property="og:description" content="${htmlEscape(pageDescription)}">
  <meta property="og:url" content="${htmlEscape(pageUrl)}">
  <meta property="og:image" content="${htmlEscape(imageUrl)}">
  <meta property="og:image:alt" content="${htmlEscape(`阿姨別生氣圖文：${displayTitle}`)}">
  <meta property="article:published_time" content="${htmlEscape(item.date)}">
  <meta property="article:modified_time" content="${htmlEscape(item.updatedAt || item.date)}">
  <meta property="article:section" content="${htmlEscape(item.category)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${htmlEscape(displayTitle)}">
  <meta name="twitter:description" content="${htmlEscape(pageDescription)}">
  <meta name="twitter:image" content="${htmlEscape(imageUrl)}">
  <meta name="twitter:image:alt" content="${htmlEscape(`阿姨別生氣圖文：${displayTitle}`)}">
  <link rel="alternate" type="application/rss+xml" title="阿姨別生氣 RSS" href="${publicUrl("rss.xml")}">
  <link rel="alternate" type="application/feed+json" title="阿姨別生氣 JSON Feed" href="${publicUrl("feed.json")}">
  <link rel="manifest" href="${base}site.webmanifest">
  <link rel="me" href="https://x.com/auntienomad">
  <link rel="me" href="https://www.instagram.com/auntienomad/">
  <link rel="me" href="https://www.facebook.com/profile.php?id=61553234457401">
  <script type="application/ld+json">
${articleJsonLd}
  </script>
  <link rel="icon" href="${base}assets/auntie-avatar-nav.jpg">
  <link rel="stylesheet" href="${section === "stock" ? "stock-story.css" : "../site-info.css"}">
</head>
<body>
  <div class="shell">
    <header class="top">
      <a class="brand" href="../index.html"><img src="../assets/auntie-avatar-nav.jpg" alt=""><span>阿姨別生氣</span></a>
      <div class="top-actions">
        <a class="back" href="${backHref}">${backText}</a>
        <a class="back" href="../archive.html">舊文章庫</a>
      </div>
    </header>
    <article${section === "stock" ? "" : " class=\"card\""}>
      ${section === "stock"
        ? `<img class="hero" src="${htmlEscape(heroPath)}" alt="${htmlEscape(displayTitle)}">`
        : `<img src="${htmlEscape(heroPath)}" alt="${htmlEscape(displayTitle)}" style="display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border:4px solid #16130f;border-radius:16px;margin-bottom:22px;">`}
      ${section === "stock" ? `<div class="content">` : ""}
      <span class="label">${htmlEscape(item.category)} · ${htmlEscape(item.date)}</span>
      <h1>${htmlEscape(displayTitle)}</h1>
      <p class="${section === "stock" ? "deck" : ""}">${htmlEscape(pageDescription)}</p>
      <div class="${section === "stock" ? "auntie-note" : "notice"}"><strong>阿姨一句話：</strong>${htmlEscape(item.auntieComment)}</div>
      ${section === "stock" ? stockDetails(item) : lifeDetails(item)}
      <h2>資料來源</h2>
      <p><a href="${htmlEscape(item.sourceUrl)}" target="_blank" rel="noreferrer">${htmlEscape(sourceLabel)}</a></p>
      ${section === "stock" ? `</div>` : ""}
    </article>
    <footer class="footer">阿姨別生氣 © 2026</footer>
  </div>
  <script src="../article-growth.js?v=${encodeURIComponent(item.updatedAt || item.date || taipeiDate)}" defer></script>
</body>
</html>
`;
}

function lifeDetails(item) {
  return `<h2>阿姨幫你翻譯</h2>
      <p>這篇整理自公開來源。阿姨不幫你製造焦慮，只幫你抓重點：先確認來源，再決定今天要不要調整行程、錢包或心情。</p>`;
}

function stockCodeName(item) {
  return [item.ticker, item.name].filter(Boolean).join(" ");
}

function isEtfItem(item) {
  return item.ticker?.startsWith("00") || /ETF/.test(item.category || item.type || "");
}

function stockStoryTitle(item) {
  if (item.storyTitle) return item.storyTitle;
  if (isEtfItem(item)) return `${item.name}：小資分散配置，阿姨先看一籃菜有沒有新鮮`;
  if (/跌深|逢低/.test(item.category || item.type || "")) return `${item.name}：跌下來先別急，阿姨看是不是有反彈條件`;
  if (/輪動/.test(item.category || item.type || "")) return `${item.name}：題材輪到這桌，先看有沒有基本面撐腰`;
  return `${item.name}：價格比較親民，阿姨把觀察理由講白`;
}

function stockChangeClass(item) {
  const value = Number.parseFloat(String(item.change || "0").replace(/[,+]/g, ""));
  return value >= 0 ? "up" : "down";
}

function stockChangeText(item) {
  const raw = String(item.change || "0");
  const value = Number.parseFloat(raw.replace(/[,+]/g, ""));
  const prefix = value >= 0 ? "▲" : "▼";
  return `${prefix} ${raw}`;
}

function stockDeck(item) {
  const codeName = stockCodeName(item);
  if (isEtfItem(item)) {
    return `${codeName} 今天收在 ${item.close || "未揭露"}，漲跌 ${item.change || "0"}。它被放進清單，不是因為熱門口號，而是適合用小額練習看分散配置、淨值和成分股風險。`;
  }
  return `${codeName} 今天收在 ${item.close || "未揭露"}，漲跌 ${item.change || "0"}。它被選進今日觀察，不是叫你追熱鬧，而是因為價格相對可負擔，又有 ${item.selectionTheme || item.category} 可以做功課。`;
}

function stockOpening(item) {
  if (isEtfItem(item)) {
    return `${item.name} 這類 ETF 的重點不是一句「很穩」或「配很多」就結束。小資族看 ETF，阿姨會先問三件事：一籃子裝什麼、價格有沒有太熱、遇到大盤震盪時能不能幫你分散一點壓力。`;
  }
  if (/跌深|逢低/.test(item.category || item.type || "")) {
    return `${item.name} 今天被放進觀察，不是因為阿姨看到下跌就想撿便宜，而是因為價格門檻、成交量和題材位置值得重新看一次。跌下來只是入場券，能不能站穩才是正片。`;
  }
  return `${item.name} 不是那種大家每天喊到耳朵長繭的高價權值股。阿姨把它放進口袋名單，是因為它比較接近一般人能做功課的價格帶，也能拿來觀察產業輪動和資金是不是換桌吃飯。`;
}

function stockContext(item) {
  if (isEtfItem(item)) {
    return `ETF 的故事通常不是單一公司，而是一籃成分股和指數規則。阿姨看 ETF 不只看配息，也會看分散度、成分股集中度、費用、折溢價和市場循環；越適合小資族，越不能只靠一句口號決定。`;
  }
  return `${item.name} 的題材要回到產業位置、價格帶、成交量和近期市場情緒一起看。阿姨不把單日漲跌當答案，只把它當成提醒：今天市場有話想說，但你要慢慢聽，不要被音量牽著走。`;
}

function stockOpportunity(item) {
  if (isEtfItem(item)) {
    return `可以觀察的機會在於：如果成分股分散、費用合理、淨值和市價沒有過度脫節，ETF 會比較適合拿來做長期配置練習；但如果只靠配息或人氣撐場，價格一晃就會知道自己功課少寫一頁。`;
  }
  if (/跌深|逢低/.test(item.category || item.type || "")) {
    return `可以觀察的機會在於：如果下跌只是市場情緒拖累，後續又能看到產業題材、營收或量能回溫，就有重新被討論的空間；但如果基本面也同步變差，便宜可能只是另一個陷阱。`;
  }
  return `可以觀察的機會在於：如果低中價位背後有營收、訂單、產業輪動或政策題材支撐，後續才有比較完整的故事；如果只是短線資金換桌，熱鬧散場時也會很快。`;
}

function stockWatchPoints(item) {
  if (isEtfItem(item)) {
    return [
      ["配息品質", "看配息來源和填息狀況，不要只看殖利率數字。"],
      ["成分股", "確認主要持股與產業集中度，別以為 ETF 一定很分散。"],
      ["價格波動", item.riskNote || "淨值與市價仍會上下震盪。"]
    ];
  }
  return [
    ["價格帶", "先確認這是不是一般人能負擔、也能分批做功課的價格區間。"],
    ["題材背景", stockContext(item)],
    ["風險節奏", item.riskNote || "波動變大時，先確認自己看懂什麼。"]
  ];
}

function stockDetails(item) {
  const watchPoints = stockWatchPoints(item)
    .map(([label, text]) => `<li><strong>${htmlEscape(label)}：</strong>${htmlEscape(text)}</li>`)
    .join("");
  return `<div class="fact-grid" aria-label="今日觀察數字">
        <div class="fact"><strong>收盤價</strong><span>${htmlEscape(item.close || "未揭露")}</span></div>
        <div class="fact"><strong>漲跌</strong><span class="${stockChangeClass(item)}">${htmlEscape(stockChangeText(item))}</span></div>
        <div class="fact"><strong>觀察分類</strong><span>${htmlEscape(item.category || item.type || "觀察")}</span></div>
      </div>
      <section class="stock-section">
        <h2>今天這齣在演什麼</h2>
        <p>${htmlEscape(stockOpening(item))}</p>
        <p>${htmlEscape(stockContext(item))}</p>
      </section>
      <section class="stock-section">
        <h2>為什麼值得注意</h2>
        <p>${htmlEscape(item.reason)}</p>
        <p>${htmlEscape(stockOpportunity(item))}</p>
      </section>
      <section class="stock-section">
        <h2>阿姨看點</h2>
        <ul class="watch-list">${watchPoints}</ul>
      </section>
      <section class="stock-section">
        <h2>阿姨看風險</h2>
        <ul>
          <li><strong>風險等級：</strong>${htmlEscape(item.riskLevel)}</li>
          <li><strong>適合觀察：</strong>${htmlEscape(item.suitableFor)}</li>
          <li><strong>不適合：</strong>${htmlEscape(item.notSuitableFor)}</li>
        </ul>
      </section>
      <div class="risk-box" role="note" aria-label="阿姨的風險提醒">
        <h2>⚠️ 阿姨的風險提醒（你一定要看）</h2>
        <p><span class="pin">📌</span> 本站所有股票 ETF 內容僅供教育與資訊參考，<strong>不是投資建議</strong>，不保證任何收益。</p>
        <p><span class="pin">📌</span> 所有數字與範例皆為靜態展示資料，<strong>未串接即時市場數據</strong>，請勿以此做為買賣依據。</p>
        <p><span class="pin">📌</span> 任何投資都有風險，包括本金損失的可能。投資前請自行做功課、評估財務狀況，必要時諮詢專業顧問。</p>
      </div>`;
}

function marketTemplate(stockOverview, stockItems) {
  const pageUrl = publicUrl(stockOverview.slug);
  const hero = stockOverview.hero || assets.stocks.default;
  const heroPath = hero.startsWith("assets/") ? `../${hero}` : hero;
  const imageUrl = publicImageUrl(hero);
  const marketJsonLd = structuredData({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${stockOverview.title} ${stockOverview.date}`,
    description: stockOverview.summary,
    image: [imageUrl],
    datePublished: stockOverview.date,
    dateModified: stockOverview.updatedAt || stockOverview.date,
    articleSection: stockOverview.category,
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl
    },
    author: {
      "@type": "Organization",
      name: "阿姨別生氣",
      sameAs: [
        "https://x.com/auntienomad",
        "https://www.instagram.com/auntienomad/",
        "https://www.facebook.com/profile.php?id=61553234457401"
      ]
    },
    publisher: {
      "@type": "Organization",
      name: "阿姨別生氣",
      sameAs: [
        "https://x.com/auntienomad",
        "https://www.instagram.com/auntienomad/",
        "https://www.facebook.com/profile.php?id=61553234457401"
      ],
      logo: {
        "@type": "ImageObject",
        url: publicImageUrl("assets/auntie-avatar-nav.jpg")
      }
    }
  });
  const cards = stockItems.map((item) => `<section class="market-card">
        <h2>${htmlEscape(item.ticker)} ${htmlEscape(item.name)}</h2>
        <div class="price">${htmlEscape(item.close || "")}</div>
        <div class="change ${String(item.change).startsWith("+") ? "up" : "down"}">${htmlEscape(item.change || "")}</div>
        <p>${htmlEscape(item.summary)} 阿姨翻譯：${htmlEscape(item.auntieComment)}</p>
      </section>`).join("");
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${htmlEscape(stockOverview.title)} ${htmlEscape(stockOverview.date)}｜阿姨別生氣</title>
  <meta name="description" content="${htmlEscape(stockOverview.summary)}">
  <link rel="canonical" href="${htmlEscape(pageUrl)}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="阿姨別生氣">
  <meta property="og:title" content="${htmlEscape(stockOverview.title)} ${htmlEscape(stockOverview.date)}">
  <meta property="og:description" content="${htmlEscape(stockOverview.summary)}">
  <meta property="og:url" content="${htmlEscape(pageUrl)}">
  <meta property="og:image" content="${htmlEscape(imageUrl)}">
  <meta property="og:image:alt" content="${htmlEscape(`阿姨別生氣圖文：${stockOverview.title}`)}">
  <meta property="article:published_time" content="${htmlEscape(stockOverview.date)}">
  <meta property="article:modified_time" content="${htmlEscape(stockOverview.updatedAt || stockOverview.date)}">
  <meta property="article:section" content="${htmlEscape(stockOverview.category)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${htmlEscape(stockOverview.title)} ${htmlEscape(stockOverview.date)}">
  <meta name="twitter:description" content="${htmlEscape(stockOverview.summary)}">
  <meta name="twitter:image" content="${htmlEscape(imageUrl)}">
  <meta name="twitter:image:alt" content="${htmlEscape(`阿姨別生氣圖文：${stockOverview.title}`)}">
  <link rel="alternate" type="application/rss+xml" title="阿姨別生氣 RSS" href="${publicUrl("rss.xml")}">
  <link rel="alternate" type="application/feed+json" title="阿姨別生氣 JSON Feed" href="${publicUrl("feed.json")}">
  <link rel="manifest" href="../site.webmanifest">
  <link rel="me" href="https://x.com/auntienomad">
  <link rel="me" href="https://www.instagram.com/auntienomad/">
  <link rel="me" href="https://www.facebook.com/profile.php?id=61553234457401">
  <script type="application/ld+json">
${marketJsonLd}
  </script>
  <link rel="icon" href="../assets/auntie-avatar-nav.jpg">
  <style>
    @import url("stock-story.css");
    .market-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; margin:24px 0; }
    .market-card { padding:18px; border:var(--line); border-radius:16px; background:white; box-shadow:5px 5px 0 var(--ink); }
    .market-card:nth-child(2n) { background:var(--sky); }
    .price { font-size:34px; line-height:1; font-weight:1000; }
    .change.up { color:#e62a32; }
    .change.down { color:#0e8c3a; }
    @media (max-width:640px) { .market-grid { grid-template-columns:1fr; } }
  </style>
</head>
<body>
  <div class="shell">
    <header class="top">
      <a class="brand" href="../index.html"><img src="../assets/auntie-avatar-nav.jpg" alt=""><span>阿姨別生氣</span></a>
      <div class="top-actions">
        <a class="back" href="../index.html#investing">回股市 ETF</a>
        <a class="back" href="../archive.html">舊文章庫</a>
      </div>
    </header>
    <article>
      <img class="hero" src="${htmlEscape(heroPath)}" alt="阿姨整理股市觀察清單的漫畫插圖">
      <div class="content">
        <span class="label">股市 ETF · ${htmlEscape(stockOverview.date)}</span>
        <h1>${htmlEscape(stockOverview.date)} 早晨市場筆記</h1>
        <p class="deck">${htmlEscape(stockOverview.summary)}</p>
        <div class="auntie-note">阿姨一句話：${htmlEscape(stockOverview.auntieComment)}</div>
        <div class="market-grid">${cards}</div>
        <h2>今天的四檔觀察清單</h2>
        <ul>${stockItems.map((item) => `<li><strong>${htmlEscape(item.ticker)} ${htmlEscape(item.name)}：</strong>${htmlEscape(item.reason)} 風險：${htmlEscape(item.riskNote)}</li>`).join("")}</ul>
        <div class="risk-box" role="note" aria-label="阿姨的風險提醒">
          <h2>⚠️ 阿姨的風險提醒（你一定要看）</h2>
          <p><span class="pin">📌</span> 本站所有股票 ETF 內容僅供教育與資訊參考，<strong>不是投資建議</strong>，不保證任何收益。</p>
          <p><span class="pin">📌</span> 今日資料來自公開來源，非即時報價，請勿作為買賣依據。</p>
          <p><span class="pin">📌</span> 投資前請自行做功課，必要時諮詢專業顧問。</p>
        </div>
        <div class="sources">資料來源：<a href="${htmlEscape(stockOverview.sourceUrl)}" target="_blank" rel="noreferrer">臺灣證券交易所公開資料</a></div>
      </div>
    </article>
  </div>
  <script src="../article-growth.js?v=${encodeURIComponent(stockOverview.updatedAt || stockOverview.date || taipeiDate)}" defer></script>
</body>
</html>
`;
}

function writePages(nextContent) {
  ensureDir("radar");
  ensureDir("stories");
  ensureDir("stocks");

  nextContent.lifeRadar.forEach((item) => {
    fs.writeFileSync(path.join(root, item.slug), articleTemplate(item, "life"));
  });
  nextContent.pitfalls.forEach((item) => {
    fs.writeFileSync(path.join(root, item.slug), articleTemplate(item, "pitfall"));
  });
  nextContent.stockWatchlist.forEach((item) => {
    fs.writeFileSync(path.join(root, item.slug), articleTemplate(item, "stock"));
  });
  fs.writeFileSync(path.join(root, nextContent.stockOverview.slug), marketTemplate(nextContent.stockOverview, nextContent.stockWatchlist));
}

function replaceBetweenMarkers(text, startMarker, endMarker, replacement) {
  const start = text.indexOf(startMarker);
  const end = text.indexOf(endMarker, start + startMarker.length);
  if (start === -1 || end === -1) {
    throw new Error(`homepage static sync failed: missing marker ${start === -1 ? startMarker : endMarker}`);
  }
  return `${text.slice(0, start)}${replacement}${text.slice(end)}`;
}

function renderHomepageNav() {
  return `      <nav class="nav" aria-label="網站導覽">
        <a href="today.html">今日必看</a>
        <a href="#radar">生活雷達</a>
        <a href="#stories">踩坑日記</a>
        <a href="#investing">股市ETF</a>
        <a href="archive.html">舊文章</a>
        <a href="#live">即時新聞</a>
      </nav>`;
}

function renderHomepageMarketCards(stockOverview = {}) {
  return (stockOverview.marketCards || []).map((item) => `            <article class="radar-card">
              <div class="index-name">${htmlEscape(item.label)}</div>
              <div class="index-value">${htmlEscape(item.value)} <span class="index-unit">${htmlEscape(item.note)}</span></div>
              <div class="index-change ${item.tone === "up" ? "change-up" : item.tone === "down" ? "change-down" : "change-neutral"}">${htmlEscape(item.trend)}</div>
            </article>`).join("\n");
}

function renderHomepageWatchlist(stockItems = []) {
  return stockItems.map((item) => {
    const note = [
      `${item.category || item.type || "觀察股"}。${item.close ? `${item.close} 收盤` : ""}${item.change ? `，漲跌 ${item.change}` : ""}。`,
      item.reason || item.summary || "",
      item.auntieComment ? `阿姨的理由：${item.auntieComment}` : ""
    ].filter(Boolean).join("");
    return `            <a class="watchlist-card" href="${htmlEscape(item.slug || "#")}" aria-label="閱讀${htmlEscape(item.name || item.title)}今日股票故事">
              <span class="wl-symbol">${htmlEscape(item.ticker || "ETF")}</span>
              <div class="wl-info">
                <div class="wl-name">${htmlEscape(item.name || item.title)}</div>
                <div class="wl-note">${htmlEscape(note)}</div>
                <span class="wl-story-link">讀個股故事</span>
              </div>
            </a>`;
  }).join("\n");
}

function updateHomepageStaticContent(nextContent) {
  const indexPath = path.join(root, "index.html");
  if (!fs.existsSync(indexPath)) return;

  let html = fs.readFileSync(indexPath, "utf8");
  html = html.replace(/      <nav class="nav" aria-label="網站導覽">[\s\S]*?      <\/nav>/, renderHomepageNav());

  const radarBlock = `        <!-- 全球雷達 -->
        <div class="investing-block" aria-labelledby="radarSubTitle">
          <div class="investing-block-head">
            <h3 id="radarSubTitle" class="investing-subtitle">🌍 全球雷達</h3>
            <span class="example-badge">${htmlEscape(nextContent.stockOverview.badge || "早晨版")}</span>
          </div>
          <p class="investing-desc">${htmlEscape(nextContent.stockOverview.summary)}</p>
          <div class="radar-grid">
${renderHomepageMarketCards(nextContent.stockOverview)}
          </div>
        </div>

`;

  const watchBlock = `        <!-- 今日觀察清單 -->
        <div class="investing-block" aria-labelledby="watchSubTitle">
          <div class="investing-block-head">
            <h3 id="watchSubTitle" class="investing-subtitle">📋 今日觀察清單</h3>
            <span class="example-badge">剛出爐</span>
          </div>
          <p class="investing-desc">今天依市場狀況重排觀察名單，優先看小資可負擔、ETF 分散、低基期題材、跌深反彈與產業輪動，不再每天固定那幾支熱門股。</p>
          <div class="watchlist-grid">
${renderHomepageWatchlist(nextContent.stockWatchlist)}
          </div>
          <p class="investing-desc" data-daily-market-link="true"><a href="${htmlEscape(nextContent.site.dailyNoteUrl)}">${htmlEscape(nextContent.site.dailyNote)}</a></p>
        </div>

`;

  html = replaceBetweenMarkers(html, "        <!-- 全球雷達 -->", "        <!-- 今日觀察清單 -->", radarBlock);
  html = replaceBetweenMarkers(html, "        <!-- 今日觀察清單 -->", "        <!-- ETF懶人包 -->", watchBlock);
  fs.writeFileSync(indexPath, html, "utf8");
}

function mergeArchive(existingArchive = [], additions = []) {
  const map = new Map();
  [...additions, ...existingArchive].forEach((item) => {
    const key = item.sourceUrl
      ? `${item.title || ""}::${item.sourceUrl}`
      : item.slug || `${item.title || ""}::${item.date || ""}`;
    if (!map.has(key)) map.set(key, item);
  });
  return [...map.values()].slice(0, 60);
}

function buildTodayFridgeNote() {
  const dayIndex = Number.parseInt(taipeiDate.replaceAll("-", ""), 10) % fridgeNotePool.length;
  const note = fridgeNotePool[dayIndex];
  return {
    title: note.title,
    date: taipeiDate,
    category: "冰箱便條紙",
    summary: note.summary,
    auntieComment: note.auntieComment,
    sourceUrl: note.sourceUrl,
    slug: `note-${taipeiDate}-${note.key}`
  };
}

function cleanupGeneratedAssets(assetPaths = []) {
  assetPaths.forEach((assetPath) => {
    try {
      const fullPath = path.join(root, assetPath);
      if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
    } catch (error) {
      review.errors.push(`cleanup generated image failed for ${assetPath}: ${error.message}`);
    }
  });
}

async function main() {
  const news = await collectNews();
  let stockItems = content.stockWatchlist;
  let stockOverview = content.stockOverview;
  const todayFridgeNote = buildTodayFridgeNote();

  try {
    const marketRows = await collectMarket();
    stockItems = buildStockItems(marketRows);
    stockOverview = buildStockOverview(stockItems);
  } catch (error) {
    review.checks.push(`market fallback used: ${error.message}; kept previous stock content`);
    review.sources.push({
      name: "臺灣證券交易所 STOCK_DAY_ALL",
      url: "https://www.twse.com.tw/rwd/zh/afterTrading/STOCK_DAY_ALL?response=json",
      ok: false,
      count: 0,
      error: error.message,
      reason: "Kept previous stock content so the site does not break."
    });
  }

  const nextContent = {
    ...content,
    site: {
      ...content.site,
      url: publicSiteUrl,
      updatedAt: stamp,
      dailyNote: `看完整 ${taipeiDate.replaceAll("-", "/")} 早晨市場筆記，把四檔分類、理由、風險和來源一次看完。`,
      dailyNoteUrl: stockOverview.slug
    },
    liveNews: buildLiveNews(news),
    lifeRadar: buildLifeItems(news),
    pitfalls: buildPitfallItems(news),
    stockOverview,
    stockWatchlist: stockItems,
    fridgeNotes: [
      todayFridgeNote,
      ...(content.fridgeNotes || [])
        .filter((item) => item.slug !== todayFridgeNote.slug && item.title !== todayFridgeNote.title)
        .slice(0, 3)
    ],
    archive: mergeArchive(content.archive, [
      {
        title: `今日市場筆記 ${taipeiDate.replaceAll("-", "/")}`,
        date: taipeiDate,
        category: "股市 ETF",
        summary: stockOverview.summary,
        auntieComment: stockOverview.auntieComment,
        sourceUrl: stockOverview.sourceUrl,
        slug: stockOverview.slug
      },
      ...buildLifeItems(news).map(({ title, date, category, summary, auntieComment, sourceUrl, slug }) => ({ title, date, category, summary, auntieComment, sourceUrl, slug }))
    ])
  };

  const imageResult = await enrichGeneratedImages(nextContent);

  const result = reviewProposed(nextContent);
  const proposedSections = ["liveNews", "lifeRadar", "pitfalls", "stockOverview", "stockWatchlist", "fridgeNotes", "archive", "generatedImages"];
  if (imageResult?.required && imageResult.generated < imageResult.total) {
    result.errors.unshift(`daily images required but only ${imageResult.generated}/${imageResult.total} were generated or reused`);
  }
  review.checks.push(...result.checks);
  review.proposedSections.push(...proposedSections);
  review.errors.push(...result.errors);

  if (review.errors.length || !result.ok) {
    review.status = "rejected";
    cleanupGeneratedAssets(imageResult?.createdAssetPaths);
    review.updatedSections = [];
    fs.writeFileSync(reportPath, JSON.stringify(review, null, 2) + "\n");
    console.error("Daily update rejected:");
    review.errors.forEach((error) => console.error(`- ${error}`));
    process.exit(1);
  }

  review.status = "approved";
  review.updatedSections.push(...proposedSections);
  writePages(nextContent);
  updateHomepageStaticContent(nextContent);
  fs.writeFileSync(dataPath, JSON.stringify(nextContent, null, 2) + "\n");
  fs.writeFileSync(reportPath, JSON.stringify(review, null, 2) + "\n");
  console.log("Daily update approved and written.");
}

async function previewStockSelection() {
  const rows = await collectMarket();
  const stockItems = buildStockItems(rows);
  const stockOverview = buildStockOverview(stockItems);
  console.log(JSON.stringify({
    date: taipeiDate,
    summary: stockOverview.summary,
    auntieComment: stockOverview.auntieComment,
    items: stockItems.map((item) => ({
      ticker: item.ticker,
      name: item.name,
      close: item.close,
      change: item.change,
      changePercent: item.changePercent,
      category: item.category,
      type: item.type,
      selectionTheme: item.selectionTheme,
      marketMood: item.marketMood,
      reason: item.reason
    }))
  }, null, 2));
}

const runStockSelectionPreview = process.argv.includes("--stock-selection-preview");

(runStockSelectionPreview ? previewStockSelection() : main()).catch((error) => {
  review.status = "failed";
  review.errors.push(error.message);
  fs.writeFileSync(reportPath, JSON.stringify(review, null, 2) + "\n");
  console.error(error);
  process.exit(1);
});
