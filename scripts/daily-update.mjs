import fs from "node:fs";
import path from "node:path";

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
  model: process.env.OPENAI_IMAGE_MODEL || "gpt-image-1",
  quality: process.env.OPENAI_IMAGE_QUALITY || "medium",
  size: process.env.OPENAI_IMAGE_SIZE || "1536x1024",
  limit: Number.parseInt(process.env.OPENAI_IMAGE_LIMIT || "9", 10)
};

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

function cleanPromptText(value = "", maxLength = 120) {
  const cleaned = stripHtml(value)
    .replace(/（中央社.*?）/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return [...cleaned].slice(0, maxLength).join("");
}

function imagePromptFor(target) {
  const title = cleanPromptText(target.item.title, 70);
  const summary = cleanPromptText(target.item.summary || target.item.reason, 140);
  const commonStyle = [
    "Create a polished 16:9 landscape editorial comic illustration for the Taiwanese brand '阿姨別生氣'.",
    "Bright yellow halftone background, thick black outlines, sticker-comic framing, cream and pink accents.",
    "Main character: cute middle-aged Taiwanese auntie, curly dark-brown short hair, rounded face, fuller body, black pixel sunglasses, gold hoop earrings, leopard-print top, black apron with a small pink heart.",
    "No words, no Chinese text, no fake letters, no watermark, no logo, no stock photo look, no 3D render, no distorted hands or face."
  ].join(" ");

  if (target.section === "stock") {
    return [
      commonStyle,
      `Topic: Taiwanese stock/ETF observation for ${target.item.ticker} ${target.item.name}.`,
      `Story angle: ${summary}`,
      "Scene: auntie at a desk with a tablet showing simple chart icons, sticky notes, calculator, coffee, piggy bank, and warning triangle stickers; make it educational and funny, not financial-advisor serious."
    ].join(" ");
  }

  if (target.section === "market") {
    return [
      commonStyle,
      "Topic: daily Taiwanese stock and ETF watchlist overview.",
      "Scene: auntie reviewing four colorful cards on a large tablet, with chart stickers, a piggy bank, calculator, coffee, and a big caution sign; playful but trustworthy."
    ].join(" ");
  }

  if (target.section === "pitfall") {
    return [
      commonStyle,
      `Topic: ${title}.`,
      `Story angle: ${summary}`,
      "Scene: auntie warning the viewer about a daily-life trap, with phone, message bubbles, receipt, street or home-life props depending on the topic; humorous, practical, and slightly dramatic."
    ].join(" ");
  }

  return [
    commonStyle,
    `Topic: ${title}.`,
    `Story angle: ${summary}`,
    "Scene: auntie reacting to a real Taiwan life/news situation with household or commute props; make it feel like a clickable lifestyle article cover."
  ].join(" ");
}

async function generateOpenAIImage(prompt, outputPath) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json",
      "user-agent": "auntie-no-mad-daily-image-generator/1.0"
    },
    body: JSON.stringify({
      model: imageGeneration.model,
      prompt,
      size: imageGeneration.size,
      quality: imageGeneration.quality,
      n: 1
    })
  });

  const body = await response.json().catch(async () => ({ error: { message: await response.text() } }));
  if (!response.ok) {
    throw new Error(body.error?.message || `OpenAI image generation failed: ${response.status}`);
  }

  const b64 = body.data?.[0]?.b64_json;
  if (!b64) throw new Error("OpenAI image generation returned no b64_json");
  fs.writeFileSync(outputPath, Buffer.from(b64, "base64"));
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
    review.checks.push("daily images: skipped because GENERATE_DAILY_IMAGES is not true");
    return { required: false, generated: 0, total: requiredTotal, createdAssetPaths: [] };
  }

  if (!process.env.OPENAI_API_KEY) {
    review.errors.push("daily images skipped: OPENAI_API_KEY is missing");
    review.sources.push({
      name: "OpenAI Images API",
      url: "https://platform.openai.com/docs/guides/images/image-generation",
      ok: false,
      count: 0,
      model: imageGeneration.model,
      quality: imageGeneration.quality,
      size: imageGeneration.size
    });
    review.checks.push(`daily images: 0/${requiredTotal} generated or reused`);
    return { required: true, generated: 0, total: requiredTotal, createdAssetPaths: [] };
  }

  ensureDir(dir);
  let generated = 0;
  const createdAssetPaths = [];

  for (const target of targets.slice(0, max)) {
    const file = `${target.prefix}-${makeSlugPart(target.item.title || target.item.name).slice(0, 40)}.png`;
    const assetPath = `${dir}/${file}`;
    const outputPath = path.join(root, assetPath);
    try {
      if (!fs.existsSync(outputPath)) {
        await generateOpenAIImage(imagePromptFor(target), outputPath);
        createdAssetPaths.push(assetPath);
      }
      if (target.section === "stock") {
        target.item.image = assetPath;
      } else if (target.section === "market") {
        target.item.hero = assetPath;
      } else {
        target.item.hero = assetPath;
        target.item.thumbnail = assetPath;
        target.item.thumbnailAlt = `${target.item.title} 的阿姨別生氣今日生成圖`;
      }
      generated += 1;
    } catch (error) {
      review.errors.push(`daily image fallback used for ${target.prefix}: ${error.message}`);
      if (/billing|hard limit|quota/i.test(error.message)) break;
    }
  }

  review.sources.push({
    name: "OpenAI Images API",
    url: "https://platform.openai.com/docs/guides/images/image-generation",
    ok: generated > 0,
    count: generated,
    model: imageGeneration.model,
    quality: imageGeneration.quality,
    size: imageGeneration.size
  });
  review.checks.push(`daily images: ${generated}/${requiredTotal} generated or reused`);
  return { required: true, generated, total: requiredTotal, createdAssetPaths };
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent": "auntie-no-mad-daily-updater/1.0"
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

function buildLifeItems(news) {
  const picked = pickNews(news, "life", 8, ["高鐵", "天氣", "高溫", "交通", "補助", "消費", "醫療", "停班", "颱風", "豪雨", "詐騙"])
    .filter((item) => item.score > 0)
    .slice(0, 2);
  if (picked.length < 2) return content.lifeRadar;

  return picked.map((item, index) => {
    const slug = `radar/${taipeiDate}-life-${index + 1}.html`;
    const title = `${item.title}`;
    return {
      title,
      date: taipeiDate,
      category: index === 0 ? "生活新聞" : "民生資訊",
      summary: `${item.description || item.title} 阿姨提醒：先看來源、再看自己今天會不會被影響。`,
      auntieComment: "新聞不是拿來焦慮的，是拿來少踩一個坑的。",
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
  const hasPitfallAngle = (item) => ["詐騙", "假投資", "假冒", "謊稱", "不明成分", "個資", "查詢個資", "醫療行為", "中醫", "兜售", "問診", "消費", "交通違規", "拒檢", "罰", "糾紛", "社群"].some((keyword) => `${item.title} ${item.description}`.includes(keyword));
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
  const picked = uniqueByLink([...primary, ...relaxed]).slice(0, 2);
  if (picked.length < 2) return content.pitfalls;

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

function parseNumber(value) {
  const number = Number(String(value || "").replace(/[,+]/g, ""));
  return Number.isFinite(number) ? number : 0;
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
  const commonStocks = rows
    .filter((row) => /^\d{4}$/.test(row.ticker) && !row.ticker.startsWith("0") && row.ticker !== "2330")
    .filter((row) => parseNumber(row.close) > 0)
    .sort((a, b) => b.amount - a.amount);

  const hot = commonStocks.slice(0, 2);
  const selected = new Set(hot.map((item) => item.ticker));

  const emergingCandidates = ["6770", "2408", "3481", "2303", "3711", "2376", "2382", "3231"];
  const emerging = emergingCandidates
    .map((ticker) => rows.find((row) => row.ticker === ticker && !selected.has(row.ticker)))
    .find(Boolean) || commonStocks.find((row) => !selected.has(row.ticker));
  if (emerging) selected.add(emerging.ticker);

  const etfCandidates = ["00919", "00878", "0056", "0050", "006208"];
  const riskEtf = etfCandidates
    .map((ticker) => rows.find((row) => row.ticker === ticker))
    .find(Boolean) || rows.find((row) => /^00/.test(row.ticker));

  const picks = [
    { row: hot[0], type: "熱門股 A", category: "熱門股", risk: "中高" },
    { row: hot[1], type: "熱門股 B", category: "熱門股", risk: "中高" },
    { row: emerging, type: "新星觀察股", category: "新星觀察", risk: "中高" },
    { row: riskEtf, type: "風險題材 / 高人氣 ETF", category: "風險題材 ETF", risk: "中" }
  ].filter((item) => item.row);

  if (picks.length !== 4) throw new Error("市場資料不足，無法產生四檔觀察清單");
  return picks;
}

function buildStockItems(rows) {
  const picks = pickStocks(rows);
  return picks.map(({ row, type, category, risk }) => {
    const slug = `stocks/${taipeiDate}-${row.ticker}.html`;
    const isEtf = row.ticker.startsWith("00");
    const reason = isEtf
      ? "高人氣 ETF 容易被配息吸引，但更要看淨值、成分股與填息。"
      : `${row.name} 今天成交金額在市場前段班，代表討論度和資金注意力都不低。`;
    return {
      title: row.name,
      date: taipeiDate,
      category,
      summary: `${row.close} 收盤，漲跌 ${row.change || "0"}。${reason}`,
      auntieComment: isEtf ? "息很香，但不要只聞香味，還要看成本。" : "熱鬧可以看，但不要把熱鬧當答案。",
      sourceUrl: row.sourceUrl,
      slug,
      ticker: row.ticker,
      name: row.name,
      type,
      reason,
      riskLevel: risk,
      riskNote: isEtf ? "配息不等於獲利，淨值與成分股仍會波動。" : "成交熱度高時波動也常變大，追題材前要先看風險。",
      suitableFor: isEtf ? "想練習看 ETF 配息、淨值與成分股的人。" : "想練習看成交量、題材與基本面的觀察者。",
      notSuitableFor: "想找保證答案、不能接受波動，或沒有時間做功課的人。",
      disclaimer: "僅供教育與資訊參考，不是投資建議。",
      updatedAt: stamp,
      close: row.close,
      change: row.change,
      sourceName: "臺灣證券交易所",
      image: assets.stocks[row.ticker] || assets.stocks.default
    };
  });
}

function buildStockOverview(stockItems) {
  return {
    title: "股市ETF",
    date: taipeiDate,
    category: "股市 ETF",
    summary: "今天固定四檔：兩檔熱門股、一檔新星觀察、一檔高人氣但風險也要看的 ETF。每檔都附阿姨白話理由，但仍然不是買賣建議。",
    auntieComment: "不是報明牌，是把市場消息整理成白話文。",
    sourceUrl: "https://www.twse.com.tw/rwd/zh/afterTrading/STOCK_DAY_ALL?response=json",
    slug: `stocks/${taipeiDate}-market-watch.html`,
    badge: "早晨版",
    marketCards: stockItems.map((item) => ({
      label: `${item.category} ${item.ticker}`,
      value: item.name,
      note: item.type,
      trend: item.category,
      tone: item.category.includes("ETF") ? "down" : "up"
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
  checkArray("stockWatchlist", nextContent.stockWatchlist, 4);

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
  const pageUrl = `https://taiwanape.github.io/auntie-no-mad/${item.slug}`;
  const imageUrl = `https://taiwanape.github.io/auntie-no-mad/${hero}`;
  const articleType = section === "life" ? "NewsArticle" : "Article";
  const articleJsonLd = structuredData({
    "@context": "https://schema.org",
    "@type": articleType,
    headline: item.title,
    description: item.summary,
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
      name: "阿姨別生氣"
    },
    publisher: {
      "@type": "Organization",
      name: "阿姨別生氣",
      logo: {
        "@type": "ImageObject",
        url: "https://taiwanape.github.io/auntie-no-mad/assets/auntie-avatar-nav.jpg"
      }
    }
  });
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${htmlEscape(item.title)}｜阿姨別生氣</title>
  <meta name="description" content="${htmlEscape(item.summary)}">
  <link rel="canonical" href="${htmlEscape(pageUrl)}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${htmlEscape(item.title)}">
  <meta property="og:description" content="${htmlEscape(item.summary)}">
  <meta property="og:url" content="${htmlEscape(pageUrl)}">
  <meta property="og:image" content="${htmlEscape(imageUrl)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${htmlEscape(item.title)}">
  <meta name="twitter:description" content="${htmlEscape(item.summary)}">
  <meta name="twitter:image" content="${htmlEscape(imageUrl)}">
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
      <a class="back" href="${backHref}">${backText}</a>
    </header>
    <article class="card">
      <img src="${htmlEscape(heroPath)}" alt="${htmlEscape(item.title)}" style="display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border:4px solid #16130f;border-radius:16px;margin-bottom:22px;">
      <span class="label">${htmlEscape(item.category)} · ${htmlEscape(item.date)}</span>
      <h1>${htmlEscape(item.title)}</h1>
      <p>${htmlEscape(item.summary)}</p>
      <div class="notice"><strong>阿姨一句話：</strong>${htmlEscape(item.auntieComment)}</div>
      ${section === "stock" ? stockDetails(item) : lifeDetails(item)}
      <h2>資料來源</h2>
      <p><a href="${htmlEscape(item.sourceUrl)}" target="_blank" rel="noreferrer">${htmlEscape(sourceLabel)}</a></p>
    </article>
    <footer class="footer">阿姨別生氣 © 2026</footer>
  </div>
</body>
</html>
`;
}

function lifeDetails(item) {
  return `<h2>阿姨幫你翻譯</h2>
      <p>這篇整理自公開來源。阿姨不幫你製造焦慮，只幫你抓重點：先確認來源，再決定今天要不要調整行程、錢包或心情。</p>`;
}

function stockDetails(item) {
  return `<h2>今天為什麼被選到</h2>
      <p>${htmlEscape(item.reason)}</p>
      <h2>阿姨看風險</h2>
      <ul>
        <li><strong>風險等級：</strong>${htmlEscape(item.riskLevel)}</li>
        <li><strong>主要風險：</strong>${htmlEscape(item.riskNote)}</li>
        <li><strong>適合觀察：</strong>${htmlEscape(item.suitableFor)}</li>
        <li><strong>不適合：</strong>${htmlEscape(item.notSuitableFor)}</li>
      </ul>
      <div class="risk-box" role="note" aria-label="阿姨的風險提醒">
        <h2>⚠️ 阿姨的風險提醒（你一定要看）</h2>
        <p><span class="pin">📌</span> 本站所有股票 ETF 內容僅供教育與資訊參考，<strong>不是投資建議</strong>，不保證任何收益。</p>
        <p><span class="pin">📌</span> 所有數字與範例皆為靜態展示資料，<strong>未串接即時市場數據</strong>，請勿以此做為買賣依據。</p>
        <p><span class="pin">📌</span> 任何投資都有風險，包括本金損失的可能。投資前請自行做功課、評估財務狀況，必要時諮詢專業顧問。</p>
      </div>`;
}

function marketTemplate(stockOverview, stockItems) {
  const pageUrl = `https://taiwanape.github.io/auntie-no-mad/${stockOverview.slug}`;
  const hero = stockOverview.hero || assets.stocks.default;
  const heroPath = hero.startsWith("assets/") ? `../${hero}` : hero;
  const imageUrl = `https://taiwanape.github.io/auntie-no-mad/${hero}`;
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
      name: "阿姨別生氣"
    },
    publisher: {
      "@type": "Organization",
      name: "阿姨別生氣",
      logo: {
        "@type": "ImageObject",
        url: "https://taiwanape.github.io/auntie-no-mad/assets/auntie-avatar-nav.jpg"
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
  <meta property="og:title" content="${htmlEscape(stockOverview.title)} ${htmlEscape(stockOverview.date)}">
  <meta property="og:description" content="${htmlEscape(stockOverview.summary)}">
  <meta property="og:url" content="${htmlEscape(pageUrl)}">
  <meta property="og:image" content="${htmlEscape(imageUrl)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${htmlEscape(stockOverview.title)} ${htmlEscape(stockOverview.date)}">
  <meta name="twitter:description" content="${htmlEscape(stockOverview.summary)}">
  <meta name="twitter:image" content="${htmlEscape(imageUrl)}">
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
      <a class="back" href="../index.html#investing">回股市 ETF</a>
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

function mergeArchive(existingArchive = [], additions = []) {
  const map = new Map();
  [...additions, ...existingArchive].forEach((item) => {
    map.set(item.slug, item);
  });
  return [...map.values()].slice(0, 60);
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
  const todayFridgeNote = {
    title: "今天先查來源",
    date: taipeiDate,
    category: "冰箱便條紙",
    summary: "看到驚人消息先停三秒，來源比情緒重要。",
    auntieComment: "心急可以，手不要急著轉傳。",
    sourceUrl: "",
    slug: `note-${taipeiDate}-source`
  };

  try {
    const marketRows = await collectMarket();
    stockItems = buildStockItems(marketRows);
    stockOverview = buildStockOverview(stockItems);
  } catch (error) {
    review.errors.push(`market fallback used: ${error.message}`);
  }

  const nextContent = {
    ...content,
    site: {
      ...content.site,
      updatedAt: stamp,
      dailyNote: `看完整 ${taipeiDate.replaceAll("-", "/")} 早晨市場筆記，把四檔分類、理由、風險和來源一次看完。`,
      dailyNoteUrl: stockOverview.slug
    },
    lifeRadar: buildLifeItems(news),
    pitfalls: buildPitfallItems(news),
    stockOverview,
    stockWatchlist: stockItems,
    fridgeNotes: [
      todayFridgeNote,
      ...(content.fridgeNotes || []).filter((item) => item.slug !== todayFridgeNote.slug).slice(0, 3)
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
  const proposedSections = ["lifeRadar", "pitfalls", "stockOverview", "stockWatchlist", "fridgeNotes", "archive", "generatedImages"];
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
    return;
  }

  review.status = "approved";
  review.updatedSections.push(...proposedSections);
  writePages(nextContent);
  fs.writeFileSync(dataPath, JSON.stringify(nextContent, null, 2) + "\n");
  fs.writeFileSync(reportPath, JSON.stringify(review, null, 2) + "\n");
  console.log("Daily update approved and written.");
}

main().catch((error) => {
  review.status = "failed";
  review.errors.push(error.message);
  fs.writeFileSync(reportPath, JSON.stringify(review, null, 2) + "\n");
  console.error(error);
  process.exit(1);
});
