import fs from "node:fs";
import path from "node:path";
import { publicSiteUrl as siteUrl } from "./public-site-url.mjs";

const root = process.cwd();
const contentPath = path.join(root, "data", "site-content.json");
const outputPath = path.join(root, "data", "share-pack.json");

const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
const generatedAt =
  content.site?.liveNewsUpdatedAt || content.site?.updatedAt || new Date().toISOString();

function absoluteUrl(href = "") {
  if (!href || href === "#") return siteUrl;
  if (/^https?:\/\//.test(href)) return href;
  return new URL(href, siteUrl).href;
}

function withUtm(href, source, campaign = "daily_share_pack") {
  const url = new URL(absoluteUrl(href));
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", "social");
  url.searchParams.set("utm_campaign", campaign);
  return url.href;
}

function isExternalUrl(href = "") {
  if (!/^https?:\/\//.test(href)) return false;
  return new URL(href).origin !== new URL(siteUrl).origin;
}

function resolveShareHref(item = {}, fallbackHref = "") {
  const slug = item.slug || "";
  if (slug && !isExternalUrl(slug)) return slug;
  return fallbackHref || siteUrl;
}

function cleanText(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

function pickText(item = {}) {
  return cleanText(
    item.auntieComment ||
      item.cta ||
      item.summary ||
      item.reason ||
      "阿姨幫你把今天重點整理成人話。"
  );
}

function buildShareText(item, url) {
  const title = cleanText(item.title || item.name || "阿姨別生氣今日提醒");
  const summary = pickText(item);
  return `${title}\n${summary}\n\n阿姨別生氣幫你整理成人話：${url}`;
}

function buildItem(kind, item, fallbackHref, campaign) {
  if (!item) return null;

  const href = resolveShareHref(item, fallbackHref);
  const title = cleanText(item.title || item.name || "阿姨別生氣今日提醒");
  const summary = pickText(item);
  const copyUrl = withUtm(href, "copy", campaign);
  const lineUrl = withUtm(href, "line", campaign);
  const facebookUrl = withUtm(href, "facebook", campaign);
  const xUrl = withUtm(href, "x", campaign);
  const copyText = buildShareText({ ...item, title, summary }, copyUrl);
  const xText = buildShareText({ ...item, title, summary }, xUrl);

  return {
    kind,
    title,
    summary,
    date: item.date || "",
    category: item.category || "",
    sourceName: item.sourceName || "",
    sourceUrl: item.sourceUrl || "",
    imagePath: item.hero || item.thumbnail || item.image || "",
    imageAlt: item.thumbnailAlt || item.imageAlt || item.title || "",
    articleUrl: absoluteUrl(href),
    copyUrl,
    trackingUrls: {
      copy: copyUrl,
      line: lineUrl,
      facebook: facebookUrl,
      x: xUrl
    },
    shareText: copyText,
    platformLinks: {
      line: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(lineUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(facebookUrl)}`,
      x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(xText)}`
    }
  };
}

const firstStockNames = (content.stockOverview?.marketCards || [])
  .slice(0, 2)
  .map((card) => card.value)
  .filter(Boolean)
  .join("、");

const stockItem = content.stockOverview
  ? {
      ...content.stockOverview,
      title: firstStockNames
        ? `阿姨今天看市場：${firstStockNames} 等四檔`
        : content.stockOverview.title,
      slug: content.site?.dailyNoteUrl || content.stockOverview.slug
    }
  : null;

const liveNewsShareItem = (content.liveNews || []).find((item) => item.hero || item.thumbnail || item.image);

const items = [
  buildItem("live-news", liveNewsShareItem, "#live", "live_news"),
  buildItem("life-radar", content.lifeRadar?.[0], "#radar", "daily_life_radar"),
  buildItem("pitfall", content.pitfalls?.[0], "#stories", "daily_pitfall"),
  buildItem("stock-watch", stockItem, "#investing", "daily_stock_watch")
].filter(Boolean);

const homepageUrl = withUtm(siteUrl, "copy", "homepage_share");
const sharePack = {
  generatedAt,
  site: {
    name: content.site?.name || "阿姨別生氣",
    url: siteUrl,
    homepageShareUrl: homepageUrl,
    homepageShareText: `阿姨別生氣：台灣生活雷達、踩坑提醒、股市 ETF 白話整理。\n不是嚇你，是幫你少踩一個坑。\n\n${homepageUrl}`
  },
  items
};

fs.writeFileSync(outputPath, `${JSON.stringify(sharePack, null, 2)}\n`, "utf8");
console.log(`Generated ${path.relative(root, outputPath)} with ${items.length} share items.`);
