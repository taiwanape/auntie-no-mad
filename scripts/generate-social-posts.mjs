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

function auntieLineForKind(item = {}) {
  if (item.kind === "stock-watch") {
    return "不是報明牌，是幫你把市場消息翻成人話。";
  }
  if (item.kind === "pitfall") {
    return "不是你笨，是套路真的越來越會包裝。";
  }
  if (item.kind === "live-news") {
    return "先看重點，不要等到被新聞追著跑。";
  }
  return "新聞不是拿來焦慮的，是拿來少踩一個坑的。";
}

function hookForKind(item = {}) {
  const title = compact(item.title || "今天這件事", 28);
  if (item.kind === "stock-watch") return `今天市場這一桌，阿姨先把菜名念清楚：${title}`;
  if (item.kind === "pitfall") return `今天這個坑，真的不是只有長輩會踩：${title}`;
  if (item.kind === "live-news") return `先別滑走，今天這條可能跟你出門有關：${title}`;
  return `今天先看這條，等等出門比較不會煩：${title}`;
}

function commentPromptForKind(item = {}) {
  if (item.kind === "stock-watch") return "你今天最想觀察哪一檔？留言講，阿姨明天幫你盯。";
  if (item.kind === "pitfall") return "你有看過類似套路嗎？留言提醒一下隔壁那位還在相信陌生連結的人。";
  if (item.kind === "live-news") return "這條你覺得要緊嗎？留言給阿姨知道，明天整理更準。";
  return "你今天有被哪件生活小事煩到？留言讓阿姨一起碎念。";
}

function buildXPost(item) {
  const url = withSource(todayUrl, "x_daily", "today_page");
  const hook = hookForKind(item);
  const auntieLine = auntieLineForKind(item);
  const commentPrompt = commentPromptForKind(item);
  const text = buildBoundedXText({ ...item, summary: auntieLine }, url);

  return {
    platform: "x",
    text,
    hook,
    auntieLine,
    commentPrompt,
    cta: "點進今日必看，先看阿姨整理好的重點。",
    url,
    imagePath: item.imagePath || "",
    sourceKind: item.kind,
    sourceTitle: item.title,
    sourceUrl: item.sourceUrl || ""
  };
}

function buildFacebookPost(item) {
  const url = withSource(todayUrl, "facebook_daily", "today_page");
  const hook = hookForKind(item);
  const auntieLine = auntieLineForKind(item);
  const commentPrompt = commentPromptForKind(item);
  const text = [
    hook,
    "",
    `阿姨看到這個，第一個反應是：${auntieLine}`,
    "",
    item.summary,
    "",
    "這種新聞不要只滑過去，點進去看完整整理，少踩一個坑就是賺到。",
    "",
    commentPrompt,
    "",
    url,
    "",
    "#阿姨別生氣 #生活雷達 #踩坑日記"
  ].join("\n");

  return {
    platform: "facebook",
    text,
    hook,
    auntieLine,
    commentPrompt,
    cta: "看完整整理",
    url,
    imagePath: item.imagePath || "",
    sourceKind: item.kind,
    sourceTitle: item.title,
    sourceUrl: item.sourceUrl || ""
  };
}

function buildInstagramPost(item) {
  const url = withSource(todayUrl, "instagram_daily", "today_page");
  const hook = hookForKind(item);
  const auntieLine = auntieLineForKind(item);
  const commentPrompt = commentPromptForKind(item);
  const text = [
    hook,
    "",
    `阿姨白話：${auntieLine}`,
    "",
    item.summary,
    "",
    "完整整理放在官網，連結看個人檔案。",
    "",
    commentPrompt,
    "",
    "#阿姨別生氣 #台灣生活 #生活雷達 #踩坑提醒"
  ].join("\n");

  return {
    platform: "instagram",
    text,
    hook,
    auntieLine,
    commentPrompt,
    cta: "連結看個人檔案",
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
