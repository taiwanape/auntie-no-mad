import fs from "node:fs";
import path from "node:path";
import { publicUrl } from "./public-site-url.mjs";

const root = process.cwd();
const sharePackPath = path.join(root, "data", "share-pack.json");
const outputPath = path.join(root, "data", "social-posts.json");
const todayUrl = publicUrl("today.html");

const sharePack = JSON.parse(fs.readFileSync(sharePackPath, "utf8"));

function cleanText(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

function compact(value = "", maxLength = 60) {
  const clean = cleanText(value);
  if ([...clean].length <= maxLength) return clean;
  return `${[...clean].slice(0, maxLength - 1).join("")}…`;
}

function withSource(urlValue, source, campaign) {
  const url = new URL(urlValue);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", "social");
  if (campaign) url.searchParams.set("utm_campaign", campaign);
  return url.href;
}

function buildBoundedXText(item, url) {
  const titleLimits = [34, 30, 26, 22];
  const summaryLimits = [46, 40, 34, 28];

  for (const titleLimit of titleLimits) {
    for (const summaryLimit of summaryLimits) {
      const text = [
        compact(item.title, titleLimit),
        "",
        `阿姨翻譯：${compact(item.summary, summaryLimit)}`,
        "",
        url,
        "#阿姨別生氣"
      ].join("\n");
      if ([...text].length <= 270) return text;
    }
  }

  const fallback = [compact(item.title, 18), "", url, "#阿姨別生氣"].join("\n");
  if ([...fallback].length > 270) {
    throw new Error(`X post is too long even after compaction: ${item.title}`);
  }
  return fallback;
}

function pickPrimaryItem(items = []) {
  const priority = ["pitfall", "life-radar", "stock-watch", "live-news"];
  return priority
    .map((kind) => items.find((item) => item.kind === kind && item.imagePath && item.articleUrl))
    .find(Boolean) || items.find((item) => item.imagePath && item.articleUrl) || items[0];
}

function buildXPost(item) {
  const url = withSource(todayUrl, "x_daily", "today_page");
  const text = buildBoundedXText(item, url);

  return {
    platform: "x",
    text,
    url,
    imagePath: item.imagePath || "",
    sourceKind: item.kind,
    sourceTitle: item.title,
    sourceUrl: item.sourceUrl || ""
  };
}

function buildFacebookPost(item) {
  const url = withSource(todayUrl, "facebook_daily", "today_page");
  const text = [
    `${item.title}`,
    "",
    `阿姨看到這個，第一個反應是：${item.summary}`,
    "",
    "這種新聞不要只滑過去，點進去看完整整理，少踩一個坑就是賺到。",
    "",
    url,
    "",
    "#阿姨別生氣 #生活雷達 #踩坑日記"
  ].join("\n");

  return {
    platform: "facebook",
    text,
    url,
    imagePath: item.imagePath || "",
    sourceKind: item.kind,
    sourceTitle: item.title,
    sourceUrl: item.sourceUrl || ""
  };
}

function buildInstagramPost(item) {
  const url = withSource(todayUrl, "instagram_daily", "today_page");
  const text = [
    `${item.title}`,
    "",
    `阿姨白話：${item.summary}`,
    "",
    "完整整理放在官網，連結看個人檔案。",
    "",
    "#阿姨別生氣 #台灣生活 #生活雷達 #踩坑提醒"
  ].join("\n");

  return {
    platform: "instagram",
    text,
    url,
    imagePath: item.imagePath || "",
    sourceKind: item.kind,
    sourceTitle: item.title,
    sourceUrl: item.sourceUrl || ""
  };
}

const primary = pickPrimaryItem(sharePack.items || []);
if (!primary) {
  throw new Error("No share-pack item available for social posts.");
}

const socialPosts = {
  generatedAt: sharePack.generatedAt,
  source: {
    sharePackGeneratedAt: sharePack.generatedAt,
    primaryKind: primary.kind,
    primaryTitle: primary.title,
    primaryArticleUrl: primary.articleUrl,
    primaryLandingUrl: todayUrl
  },
  posts: {
    x: buildXPost(primary),
    facebook: buildFacebookPost(primary),
    instagram: buildInstagramPost(primary)
  }
};

fs.writeFileSync(outputPath, `${JSON.stringify(socialPosts, null, 2)}\n`, "utf8");
console.log(`Generated ${path.relative(root, outputPath)} from ${primary.kind}.`);
