import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataPath = path.join(root, "data", "site-content.json");
const content = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const errors = [];
const warnings = [];

const requiredArticleFields = [
  "title",
  "date",
  "category",
  "summary",
  "auntieComment",
  "sourceUrl",
  "slug"
];

const requiredStockFields = [
  "ticker",
  "name",
  "type",
  "reason",
  "auntieComment",
  "riskLevel",
  "riskNote",
  "suitableFor",
  "notSuitableFor",
  "disclaimer",
  "sourceUrl",
  "updatedAt"
];

const bannedInvestmentPhrases = ["買進", "賣出", "目標價", "保證獲利"];
const stockImageMap = new Map([
  ["assets/stock-20260526-auo.png", "2409"],
  ["assets/stock-20260526-inventec.png", "2356"],
  ["assets/stock-20260526-umc.png", "2303"],
  ["assets/stock-20260526-00919.png", "00919"],
  ["assets/stock-tsmc-cowos.png", "2330"],
  ["assets/stock-0050-split.png", "0050"],
  ["assets/stock-0056-dividend.png", "0056"],
  ["assets/stock-00878-dividend.png", "00878"]
]);

const articleImageRules = [
  {
    pattern: /hsr|高鐵/i,
    keywords: ["高鐵", "退費", "延誤", "列車"],
    label: "高鐵圖"
  },
  {
    pattern: /heat|jangmi|高溫|鋒面/i,
    keywords: ["高溫", "熱", "鋒面", "變天", "梅雨", "天氣"],
    label: "高溫變天圖"
  },
  {
    pattern: /plum-rain|laundry|梅雨|衣服/i,
    keywords: ["梅雨", "衣服", "陽台", "除濕", "曬衣"],
    label: "梅雨曬衣圖"
  },
  {
    pattern: /ticket|五月天|搶票/i,
    keywords: ["五月天", "搶票", "演唱會", "售票", "排隊"],
    label: "搶票圖"
  },
  {
    pattern: /social-scam|詐騙|名人/i,
    keywords: ["詐騙", "名人", "社群", "Meta", "投資", "廣告", "推薦"],
    label: "社群詐騙圖"
  },
  {
    pattern: /traffic-crowd|交通|人潮/i,
    keywords: ["交通", "景點", "排隊", "人潮", "接駁", "出門"],
    label: "交通人潮圖"
  }
];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function isGeneratedForDate(assetPath, date) {
  return normalizePath(assetPath).startsWith(`assets/generated/${date}/`);
}

function itemText(item) {
  return `${item.title || ""} ${item.name || ""} ${item.category || ""} ${item.summary || ""} ${item.auntieComment || ""} ${item.slug || ""}`;
}

function checkFields(section, item, fields) {
  fields.forEach((field) => {
    assert(
      item[field] !== undefined && String(item[field]).trim() !== "",
      `${section}: missing ${field} on ${item.title || item.slug || "unknown item"}`
    );
  });
}

function checkSourceUrl(section, item) {
  assert(
    /^https?:\/\//.test(item.sourceUrl || ""),
    `${section}: sourceUrl must be a public URL on ${item.title || item.slug}`
  );
}

function checkLocalSlug(section, slug) {
  if (!slug || slug.startsWith("http") || slug.startsWith("#")) return;
  assert(fileExists(slug), `${section}: local slug does not exist: ${slug}`);
}

function checkAsset(section, item, field) {
  const assetPath = normalizePath(item[field]);
  if (!assetPath) return;
  assert(fileExists(assetPath), `${section}: ${field} file does not exist for ${item.title || item.slug}: ${assetPath}`);
  if (assetPath.endsWith(".svg") && fileExists(assetPath)) {
    assert(false, `${section}: SVG image assets are not allowed for public content: ${assetPath}`);
  }
}

function checkArticlePageImage(section, item) {
  const expectedImage = normalizePath(item.hero || item.image || "");
  if (!item.slug || !expectedImage || !fileExists(item.slug)) return;

  const html = fs.readFileSync(path.join(root, item.slug), "utf8").replaceAll("\\", "/");
  const expectedWithParent = `../${expectedImage}`;
  assert(
    html.includes(expectedImage) || html.includes(expectedWithParent),
    `${section}: article page ${item.slug} does not contain expected image ${expectedImage}`
  );
}

function checkArticleGrowthScript(section, item) {
  if (!item.slug || !fileExists(item.slug)) return;
  const html = fs.readFileSync(path.join(root, item.slug), "utf8");
  assert(
    html.includes("article-growth.js"),
    `${section}: article page ${item.slug} must include article-growth.js for sharing and related links`
  );
}

function checkArticleImageMatch(section, item) {
  const assets = [item.thumbnail, item.hero].filter(Boolean).map(normalizePath);
  assets.forEach((assetPath) => {
    checkAsset(section, { ...item, imageCandidate: assetPath }, "imageCandidate");
    if (isGeneratedForDate(assetPath, item.date)) return;

    const rule = articleImageRules.find((candidate) => candidate.pattern.test(assetPath));
    if (!rule) return;
    const text = itemText(item);
    const matches = rule.keywords.some((keyword) => text.includes(keyword));
    assert(matches, `${section}: ${rule.label} used on unrelated item "${item.title}" (${assetPath})`);
  });
}

function checkStockImageMatch(item) {
  const image = normalizePath(item.image || "");
  checkAsset("stockWatchlist", item, "image");
  if (!image) return;
  if (isGeneratedForDate(image, item.date)) return;

  assert(
    image !== "assets/stock-20260526-market-watch.png",
    `stockWatchlist: generic market image cannot be used for individual stock ${item.ticker}`
  );

  const expectedTicker = stockImageMap.get(image);
  if (expectedTicker) {
    assert(
      expectedTicker === item.ticker,
      `stockWatchlist: image ${image} belongs to ${expectedTicker}, not ${item.ticker}`
    );
  }
}

function checkNoInvestmentAdvice(section, item) {
  const haystack = JSON.stringify(item);
  bannedInvestmentPhrases.forEach((phrase) => {
    assert(
      !haystack.includes(phrase),
      `${section}: banned investment phrase "${phrase}" found in ${item.ticker || item.title}`
    );
  });
  assert(
    String(item.disclaimer || "").includes("不是投資建議"),
    `${section}: disclaimer must say 不是投資建議 for ${item.ticker || item.title}`
  );
}

const serializedData = JSON.stringify(content);
assert(!/\?{3,}/.test(serializedData), "data/site-content.json contains question-mark mojibake such as ???");
assert(!/[銝嚗瘞踹]\S*[?]/.test(serializedData), "data/site-content.json appears to contain mojibake text");

["lifeRadar", "pitfalls"].forEach((section) => {
  assert(Array.isArray(content[section]), `${section} must be an array`);
  (content[section] || []).forEach((item) => {
    checkFields(section, item, requiredArticleFields);
    checkSourceUrl(section, item);
    checkLocalSlug(section, item.slug);
    checkArticleImageMatch(section, item);
    checkArticlePageImage(section, item);
    checkArticleGrowthScript(section, item);
  });
});

assert(Array.isArray(content.liveNews), "liveNews must be an array");
assert(content.liveNews?.length >= 3, "liveNews must contain at least 3 items");
(content.liveNews || []).forEach((item) => {
  checkFields("liveNews", item, requiredArticleFields);
  checkSourceUrl("liveNews", item);
  checkLocalSlug("liveNews", item.slug);
});

assert(Array.isArray(content.stockWatchlist), "stockWatchlist must be an array");
assert(content.stockWatchlist?.length === 4, "stockWatchlist must contain exactly 4 items");
(content.stockWatchlist || []).forEach((item) => {
  checkFields("stockWatchlist", item, [...requiredArticleFields, ...requiredStockFields]);
  checkSourceUrl("stockWatchlist", item);
  checkNoInvestmentAdvice("stockWatchlist", item);
  checkLocalSlug("stockWatchlist", item.slug);
  checkStockImageMatch(item);
  checkArticlePageImage("stockWatchlist", item);
  checkArticleGrowthScript("stockWatchlist", item);
});

if (content.stockOverview) {
  checkFields("stockOverview", content.stockOverview, requiredArticleFields);
  checkSourceUrl("stockOverview", content.stockOverview);
  checkAsset("stockOverview", content.stockOverview, "hero");
  checkLocalSlug("stockOverview", content.stockOverview.slug);
  checkArticlePageImage("stockOverview", content.stockOverview);
  checkArticleGrowthScript("stockOverview", content.stockOverview);
}

["etfGuide", "goodPicks", "fridgeNotes", "archive"].forEach((section) => {
  assert(Array.isArray(content[section]), `${section} must be an array`);
  (content[section] || []).forEach((item) => {
    checkFields(section, item, requiredArticleFields);
    checkSourceUrl(section, item);
    if (section === "archive") checkLocalSlug(section, item.slug);
  });
});

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
["sitemap.xml", "robots.txt", "rss.xml", "feed.json", "share.html"].forEach((file) => {
  assert(fileExists(file), `SEO/feed file missing: ${file}`);
});
assert(fileExists("article-growth.js"), "article-growth.js missing");
assert(indexHtml.includes('type="application/rss+xml"'), "index.html must advertise rss.xml");
assert(indexHtml.includes('type="application/feed+json"'), "index.html must advertise feed.json");

const jsonFeedPath = path.join(root, "feed.json");
if (fs.existsSync(jsonFeedPath)) {
  const feed = JSON.parse(fs.readFileSync(jsonFeedPath, "utf8"));
  assert(feed.version && Array.isArray(feed.items), "feed.json must be valid JSON Feed");
  assert(feed.items.length > 0, "feed.json must contain at least one item");
}

const sharePackPath = path.join(root, "data", "share-pack.json");
assert(fileExists("data/share-pack.json"), "data/share-pack.json missing; run npm run generate:share-pack");
if (fs.existsSync(sharePackPath)) {
  const sharePack = JSON.parse(fs.readFileSync(sharePackPath, "utf8"));
  const shareSiteUrl = new URL(sharePack.site?.url || content.site?.url || "https://taiwanape.github.io/auntie-no-mad/");
  const isSiteShareUrl = (urlValue = "") => {
    try {
      const url = new URL(urlValue);
      return url.origin === shareSiteUrl.origin && url.pathname.startsWith(shareSiteUrl.pathname);
    } catch {
      return false;
    }
  };
  assert(sharePack.site?.homepageShareUrl, "share-pack: homepageShareUrl is required");
  assert(
    String(sharePack.site?.homepageShareUrl || "").includes("utm_source=copy"),
    "share-pack: homepageShareUrl must include copy UTM tracking"
  );
  assert(Array.isArray(sharePack.items), "share-pack: items must be an array");
  assert(sharePack.items.length >= 3, "share-pack: must contain at least 3 share items");
  (sharePack.items || []).forEach((item) => {
    assert(item.kind, "share-pack: each item needs kind");
    assert(item.title, `share-pack: ${item.kind || "item"} needs title`);
    assert(item.summary, `share-pack: ${item.kind || "item"} needs summary`);
    assert(/^https?:\/\//.test(item.articleUrl || ""), `share-pack: ${item.kind} articleUrl must be public URL`);
    assert(/^https?:\/\//.test(item.copyUrl || ""), `share-pack: ${item.kind} copyUrl must be public URL`);
    assert(isSiteShareUrl(item.articleUrl), `share-pack: ${item.kind} articleUrl must point back to the site`);
    assert(isSiteShareUrl(item.copyUrl), `share-pack: ${item.kind} copyUrl must point back to the site`);
    assert(String(item.copyUrl || "").includes("utm_source=copy"), `share-pack: ${item.kind} copyUrl missing copy UTM`);
    if (item.imagePath) checkAsset("share-pack", { ...item, imageCandidate: item.imagePath }, "imageCandidate");
    assert(String(item.shareText || "").includes(item.title), `share-pack: ${item.kind} shareText must include title`);
    ["line", "facebook", "x"].forEach((platform) => {
      const link = item.platformLinks?.[platform] || "";
      const decoded = decodeURIComponent(link);
      assert(/^https?:\/\//.test(link), `share-pack: ${item.kind} ${platform} link must be URL`);
      assert(decoded.includes(`utm_source=${platform}`), `share-pack: ${item.kind} ${platform} link missing UTM`);
      assert(
        String(item.trackingUrls?.[platform] || "").includes(`utm_source=${platform}`),
        `share-pack: ${item.kind} ${platform} trackingUrl missing UTM`
      );
      assert(
        isSiteShareUrl(item.trackingUrls?.[platform] || ""),
        `share-pack: ${item.kind} ${platform} trackingUrl must point back to the site`
      );
    });
    assert(!/\.svg(?:[?#"]|$)/i.test(JSON.stringify(item)), `share-pack: ${item.kind} must not reference SVG assets`);
  });
}

const socialPostsPath = path.join(root, "data", "social-posts.json");
assert(fileExists("data/social-posts.json"), "data/social-posts.json missing; run npm run generate:social-posts");
if (fs.existsSync(socialPostsPath)) {
  const socialPosts = JSON.parse(fs.readFileSync(socialPostsPath, "utf8"));
  ["x", "facebook", "instagram"].forEach((platform) => {
    const post = socialPosts.posts?.[platform];
    assert(post, `social-posts: ${platform} post is required`);
    assert(post.text, `social-posts: ${platform} text is required`);
    assert(/^https?:\/\//.test(post.url || ""), `social-posts: ${platform} url must be public URL`);
    assert(String(post.url || "").includes(`utm_source=${platform === "x" ? "x_daily" : `${platform}_daily`}`), `social-posts: ${platform} url missing daily UTM`);
    assert(post.imagePath, `social-posts: ${platform} imagePath is required`);
    checkAsset("social-posts", { title: `${platform} post`, imageCandidate: post.imagePath }, "imageCandidate");
    assert(!/\.svg(?:[?#"]|$)/i.test(JSON.stringify(post)), `social-posts: ${platform} must not reference SVG assets`);
  });
  assert([...String(socialPosts.posts?.x?.text || "")].length <= 270, "social-posts: X text must stay under 270 chars");
}

for (const [index, script] of [...indexHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]).entries()) {
  try {
    new Function(script);
  } catch (error) {
    errors.push(`index.html inline script ${index + 1} syntax error: ${error.message}`);
  }
}

try {
  const articleGrowthJs = fs.readFileSync(path.join(root, "article-growth.js"), "utf8");
  new Function(articleGrowthJs);
  assert(articleGrowthJs.includes("growth-actions"), "article-growth.js must render the article retention CTA");
  assert(articleGrowthJs.includes("share.html"), "article-growth.js must link article readers to the share pack");
} catch (error) {
  errors.push(`article-growth.js syntax error: ${error.message}`);
}

const shareHtml = fs.readFileSync(path.join(root, "share.html"), "utf8");
assert(shareHtml.includes("data/share-pack.json"), "share.html must load data/share-pack.json");
assert(shareHtml.includes("data/social-posts.json"), "share.html must load data/social-posts.json");
assert(shareHtml.includes("今日分享包"), "share.html must identify itself as the daily share pack");
for (const [index, script] of [...shareHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]).entries()) {
  try {
    new Function(script);
  } catch (error) {
    errors.push(`share.html inline script ${index + 1} syntax error: ${error.message}`);
  }
}

if (warnings.length) {
  console.warn("Content warnings:");
  warnings.forEach((message) => console.warn(`- ${message}`));
}

if (errors.length) {
  console.error("Content validation failed:");
  errors.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Content validation passed.");
