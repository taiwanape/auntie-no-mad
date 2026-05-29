import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataPath = path.join(root, "data", "site-content.json");
const content = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const sourceFeeds = [
  { name: "中央社生活", url: "https://feeds.feedburner.com/rsscna/lifehealth", category: "生活" },
  { name: "中央社社會", url: "https://feeds.feedburner.com/rsscna/social", category: "社會" },
  { name: "中央社產經證券", url: "https://feeds.feedburner.com/rsscna/finance", category: "財經" },
  { name: "中央社科技", url: "https://feeds.feedburner.com/rsscna/technology", category: "科技" },
  { name: "中央社地方", url: "https://feeds.feedburner.com/rsscna/local", category: "地方" },
  { name: "中央社娛樂", url: "https://feeds.feedburner.com/rsscna/stars", category: "娛樂" }
];

const taipeiNow = new Date();
const taipeiDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Taipei",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(taipeiNow);

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

function cleanSummary(value = "", fallback = "") {
  const text = stripHtml(decodeEntities(value || fallback))
    .replace(/（中央社.*?）/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return [...text].slice(0, 96).join("");
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

function isoDateOrNow(value) {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "accept": "text/xml,application/xml,text/html;q=0.9,*/*;q=0.8",
        "user-agent": "Mozilla/5.0 (compatible; AuntieNoMadLiveNews/1.0; +https://auntienomad.com)"
      }
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

function parseRss(xml, source) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => {
    const item = match[1];
    const pick = (tag) => {
      const m = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
      return m ? decodeEntities(stripHtml(m[1])) : "";
    };
    return {
      title: pick("title"),
      sourceUrl: pick("link"),
      description: pick("description"),
      publishedAt: pick("pubDate"),
      category: source.category,
      sourceName: source.name
    };
  }).filter((item) => item.title && /^https?:\/\//.test(item.sourceUrl));
}

function auntieCommentFor(item) {
  const text = `${item.title} ${item.description}`;
  if (/詐|騙|假|匯款|個資|罰|違規/.test(text)) return "先查證再動作，急著信就容易被牽著走。";
  if (/雨|颱|高溫|天氣|交通|捷運|台鐵|高鐵/.test(text)) return "先看會不會影響今天出門，其他等下再煩。";
  if (/股|台股|外資|科技|AI|半導體|ETF/.test(text)) return "先看脈絡，不要只看標題就跟著情緒跑。";
  return "新聞很多，先抓重點，不要被標題牽著鼻子走。";
}

function buildLiveNews(items) {
  const seen = new Set();
  return items
    .filter((item) => !seen.has(item.sourceUrl) && seen.add(item.sourceUrl))
    .sort((a, b) => {
      const bt = new Date(b.publishedAt).getTime() || 0;
      const at = new Date(a.publishedAt).getTime() || 0;
      return bt - at;
    })
    .slice(0, 6)
    .map((item) => ({
      title: item.title,
      date: taipeiDate,
      category: `即時${item.category}`,
      summary: `${cleanSummary(item.description, item.title)} 阿姨提醒：先看來源，再看這件事跟你有沒有關係。`,
      auntieComment: auntieCommentFor(item),
      sourceUrl: item.sourceUrl,
      slug: item.sourceUrl,
      sourceName: item.sourceName,
      publishedAt: isoDateOrNow(item.publishedAt),
      displayTime: formatTaipeiMinute(item.publishedAt)
    }));
}

async function main() {
  const all = [];
  const sources = [];

  for (const source of sourceFeeds) {
    try {
      const xml = await fetchText(source.url);
      const items = parseRss(xml, source);
      all.push(...items);
      sources.push({ name: source.name, url: source.url, ok: true, count: items.length });
    } catch (error) {
      sources.push({ name: source.name, url: source.url, ok: false, error: error.message });
    }
  }

  const liveNews = buildLiveNews(all);
  if (liveNews.length < 3) {
    fs.writeFileSync(path.join(root, "data", "live-news-report.json"), JSON.stringify({
      generatedAt: new Date().toISOString(),
      status: "kept",
      reason: "live news source returned fewer than 3 usable items; kept previous data",
      sources
    }, null, 2) + "\n");
    console.log("Live news kept previous data.");
    return;
  }

  const nextContent = {
    ...content,
    site: {
      ...content.site,
      liveNewsUpdatedAt: new Date().toISOString()
    },
    liveNews
  };

  fs.writeFileSync(dataPath, JSON.stringify(nextContent, null, 2) + "\n");
  fs.writeFileSync(path.join(root, "data", "live-news-report.json"), JSON.stringify({
    generatedAt: new Date().toISOString(),
    status: "approved",
    count: liveNews.length,
    sources,
    titles: liveNews.map((item) => item.title)
  }, null, 2) + "\n");
  console.log(`Live news updated: ${liveNews.length} items.`);
}

main().catch((error) => {
  fs.writeFileSync(path.join(root, "data", "live-news-report.json"), JSON.stringify({
    generatedAt: new Date().toISOString(),
    status: "failed",
    error: error.message
  }, null, 2) + "\n");
  console.error(error);
  process.exit(1);
});
