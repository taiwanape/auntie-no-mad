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

function pickHomepagePreviewItem() {
  return [
    ...(content.pitfalls || []),
    ...(content.lifeRadar || []),
    content.stockOverview,
    ...(content.stockWatchlist || []),
    ...(content.liveNews || [])
  ].filter(Boolean).find((item) => item.title && (item.hero || item.thumbnail || item.image || item.summary || item.auntieComment));
}

function pickHomepagePreviewImage(item) {
  const image = [item?.hero, item?.thumbnail, item?.image]
    .filter(Boolean)
    .map(normalizePath)[0];
  return image || "assets/auntie-hero.jpg";
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

function normalizedTitleSignature(item) {
  return String(item?.title || "")
    .replace(/\s+/g, "")
    .replace(/[0-9０-９年月日縣市區鄉鎮]/g, "")
    .slice(0, 10);
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

function checkArticleSocialPreview(section, item) {
  if (!item.slug || !fileExists(item.slug)) return;
  const html = fs.readFileSync(path.join(root, item.slug), "utf8").replaceAll("\\", "/");
  assert(!/\?{3,}/.test(html), `${section}: article page ${item.slug} contains question-mark mojibake such as ???`);
  assert(html.includes('property="og:site_name"'), `${section}: article page ${item.slug} must include og:site_name`);
  assert(html.includes('property="og:image:alt"'), `${section}: article page ${item.slug} must include og:image:alt`);
  assert(html.includes('name="twitter:card" content="summary_large_image"'), `${section}: article page ${item.slug} must include summary_large_image twitter card`);
  assert(html.includes('name="twitter:image"'), `${section}: article page ${item.slug} must include twitter:image`);
  assert(html.includes('name="twitter:image:alt"'), `${section}: article page ${item.slug} must include twitter:image:alt`);
  assert(html.includes('property="article:published_time"'), `${section}: article page ${item.slug} must include article:published_time`);
  assert(html.includes('property="article:section"'), `${section}: article page ${item.slug} must include article:section`);
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

function checkJsonArtifact(relativePath, label) {
  if (!fileExists(relativePath)) return null;
  const parsed = JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
  const serialized = JSON.stringify(parsed);
  assert(!/\?{3,}/.test(serialized), `${label} contains question-mark mojibake such as ???`);
  assert(!serialized.includes("\uFFFD"), `${label} contains replacement characters`);
  assert(!/[銝嚗瘞]\S*[?]/.test(serialized), `${label} appears to contain mojibake text`);
  return parsed;
}

const serializedData = JSON.stringify(content);
assert(!/\?{3,}/.test(serializedData), "data/site-content.json contains question-mark mojibake such as ???");
assert(!/[銝嚗瘞踹]\S*[?]/.test(serializedData), "data/site-content.json appears to contain mojibake text");

const sharePack = checkJsonArtifact("data/share-pack.json", "data/share-pack.json");
const socialPosts = checkJsonArtifact("data/social-posts.json", "data/social-posts.json");
if (sharePack) {
  assert(Array.isArray(sharePack.items), "data/share-pack.json must include items array");
  (sharePack.items || []).forEach((item) => {
    if (item.imagePath) checkAsset("sharePack", { ...item, shareImage: item.imagePath }, "shareImage");
  });
}
if (socialPosts) {
  ["x", "facebook", "instagram"].forEach((platform) => {
    const post = socialPosts.posts?.[platform];
    assert(post?.text, `data/social-posts.json missing ${platform} text`);
    assert(post?.imagePath, `data/social-posts.json missing ${platform} imagePath`);
    if (post?.imagePath) checkAsset("socialPosts", { ...post, socialImage: post.imagePath }, "socialImage");
  });
}

["lifeRadar", "pitfalls"].forEach((section) => {
  assert(Array.isArray(content[section]), `${section} must be an array`);
  (content[section] || []).forEach((item) => {
    checkFields(section, item, requiredArticleFields);
    checkSourceUrl(section, item);
    checkLocalSlug(section, item.slug);
    checkArticleImageMatch(section, item);
    checkArticlePageImage(section, item);
    checkArticleSocialPreview(section, item);
    checkArticleGrowthScript(section, item);
  });
});

if ((content.lifeRadar || []).length >= 2) {
  const categories = new Set(content.lifeRadar.map((item) => item.category));
  const signatures = new Set(content.lifeRadar.map((item) => normalizedTitleSignature(item)));
  assert(
    categories.size >= 2 || signatures.size >= 2,
    "lifeRadar must avoid repeating the same topic twice on the homepage"
  );
}

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
  checkArticleSocialPreview("stockWatchlist", item);
  checkArticleGrowthScript("stockWatchlist", item);
});

if (content.stockOverview) {
  checkFields("stockOverview", content.stockOverview, requiredArticleFields);
  checkSourceUrl("stockOverview", content.stockOverview);
  checkAsset("stockOverview", content.stockOverview, "hero");
  checkLocalSlug("stockOverview", content.stockOverview.slug);
  checkArticlePageImage("stockOverview", content.stockOverview);
  checkArticleSocialPreview("stockOverview", content.stockOverview);
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
["sitemap.xml", "robots.txt", "rss.xml", "feed.json", "site.webmanifest", "llms.txt", "share.html", "today.html", "links.html", "daily-reminder.ics"].forEach((file) => {
  assert(fileExists(file), `SEO/feed file missing: ${file}`);
});
assert(fileExists("article-growth.js"), "article-growth.js missing");
assert(indexHtml.includes('type="application/rss+xml"'), "index.html must advertise rss.xml");
assert(indexHtml.includes('type="application/feed+json"'), "index.html must advertise feed.json");
assert(indexHtml.includes('rel="manifest"'), "index.html must expose site.webmanifest");
assert(indexHtml.includes('rel="me"'), "index.html must expose official social links");
assert(indexHtml.includes("today.html"), "index.html must link to the stable today landing page");
assert(indexHtml.includes("quiet-status"), "index.html must keep a lightweight daily update status strip");
assert(indexHtml.includes("把今天的吵，整理成人話"), "index.html hero must clearly explain the site promise");
assert(!indexHtml.includes('class="growth-funnel"'), "index.html must not reintroduce the crowded first-visit growth funnel");
assert(indexHtml.includes('id="firstClick"'), "index.html must keep the daily first-click entry point");
assert(indexHtml.includes("今天先點這裡"), "index.html first-click entry must tell visitors where to start today");
assert(indexHtml.includes("homepage_entry"), "index.html first-click links must use homepage_entry UTM tracking");
assert(indexHtml.includes("beforeinstallprompt"), "index.html must handle browser install prompts when available");
assert(indexHtml.includes("install_fallback"), "index.html install fallback must use UTM tracking");
const navTodayIndex = indexHtml.indexOf('href="today.html"');
const navStockIndex = indexHtml.indexOf('href="#investing"');
const navArchiveIndex = indexHtml.indexOf('href="archive.html"');
const navLiveIndex = indexHtml.indexOf('href="#live"');
assert(
  navTodayIndex >= 0 && navStockIndex > navTodayIndex && navArchiveIndex > navStockIndex && navLiveIndex > navArchiveIndex,
  "index.html nav must place old articles second from the end, between stocks and live news"
);
assert(indexHtml.includes("約每半小時自動整理"), "index.html must describe live news cadence as approximate");
assert(indexHtml.includes("site-content.json?ts="), "index.html must bust cache when loading site content");
if (content.site?.dailyNoteUrl) {
  assert(indexHtml.includes(content.site.dailyNoteUrl), `index.html static stock section must link today's market note: ${content.site.dailyNoteUrl}`);
}
(content.stockWatchlist || []).forEach((item) => {
  assert(indexHtml.includes(item.slug), `index.html static stock section must include current stock page: ${item.slug}`);
});

const homepagePreviewItem = pickHomepagePreviewItem();
if (homepagePreviewItem) {
  const titleNeedle = String(homepagePreviewItem.title).slice(0, 8);
  const imageNeedle = pickHomepagePreviewImage(homepagePreviewItem);
  assert(indexHtml.includes("今日必看"), "index.html social preview must advertise today's strongest story");
  assert(indexHtml.includes(titleNeedle), `index.html social preview must include today's story title: ${homepagePreviewItem.title}`);
  assert(indexHtml.includes(imageNeedle), `index.html social preview must use today's story image: ${imageNeedle}`);
  assert(indexHtml.includes('property="og:image:alt"'), "index.html social preview must include og:image:alt");
  assert(indexHtml.includes('name="twitter:image"'), "index.html social preview must include twitter:image");
  if (imageNeedle !== "assets/auntie-hero.jpg") {
    assert(
      !indexHtml.includes('property="og:image" content="http://auntienomad.com/assets/auntie-hero.jpg"'),
      "index.html social preview must not fall back to the generic hero when a current story image exists"
    );
  }
}

const reminderIcs = fs.readFileSync(path.join(root, "daily-reminder.ics"), "utf8");
assert(reminderIcs.includes("RRULE:FREQ=DAILY"), "daily-reminder.ics must be a daily recurring reminder");
assert(reminderIcs.includes("utm_source=calendar"), "daily-reminder.ics must track calendar return visits");

const archiveHtml = fs.readFileSync(path.join(root, "archive.html"), "utf8");
["id=\"life\"", "id=\"pitfalls\"", "id=\"stocks\"", "舊文章分類"].forEach((needle) => {
  assert(archiveHtml.includes(needle), `archive.html must keep categorized archive structure: ${needle}`);
});
["生活雷達", "踩坑日記", "股市 ETF"].forEach((label) => {
  assert(archiveHtml.includes(label), `archive.html must include category label: ${label}`);
});
(content.archive || []).slice(0, 8).forEach((item) => {
  if (item.slug) assert(archiveHtml.includes(item.slug), `archive.html must include recent archive item: ${item.slug}`);
});
assert(reminderIcs.includes("today.html"), "daily-reminder.ics must point visitors to today.html");

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
  const shareSiteUrl = new URL(sharePack.site?.url || content.site?.url || "http://auntienomad.com/");
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
  assert(String(socialPosts.source?.primaryLandingUrl || "").includes("today.html"), "social-posts: primaryLandingUrl must point to today.html");
  ["x", "facebook", "instagram"].forEach((platform) => {
    const post = socialPosts.posts?.[platform];
    assert(post, `social-posts: ${platform} post is required`);
    assert(post.text, `social-posts: ${platform} text is required`);
    assert(/^https?:\/\//.test(post.url || ""), `social-posts: ${platform} url must be public URL`);
    assert(String(post.url || "").includes("today.html"), `social-posts: ${platform} url must point to today.html`);
    assert(String(post.url || "").includes("utm_campaign=today_page"), `social-posts: ${platform} url must use today_page campaign`);
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
  assert(articleGrowthJs.includes("links.html?utm_source=article_cta"), "article-growth.js must link article readers to the social entry page");
  assert(articleGrowthJs.includes("growth-return"), "article-growth.js must render a daily return reminder for article readers");
  assert(articleGrowthJs.includes("article_return"), "article-growth.js return reminder must use tracked internal links");
  assert(articleGrowthJs.includes("daily-reminder.ics"), "article-growth.js must let article readers add a daily reminder");
  assert(articleGrowthJs.includes("social-arrival-nudge"), "article-growth.js must keep a social arrival nudge for referred visitors");
  assert(articleGrowthJs.includes("article_arrival"), "article-growth.js social arrival nudge must use tracked internal links");
} catch (error) {
  errors.push(`article-growth.js syntax error: ${error.message}`);
}

const shareHtml = fs.readFileSync(path.join(root, "share.html"), "utf8");
assert(shareHtml.includes("data/share-pack.json"), "share.html must load data/share-pack.json");
assert(shareHtml.includes("data/social-posts.json"), "share.html must load data/social-posts.json");
assert(shareHtml.includes("今日分享包"), "share.html must identify itself as the daily share pack");
assert(shareHtml.includes('id="todayPromo"'), "share.html must feature the stable today landing page");
assert(shareHtml.includes("renderTodayPromo"), "share.html must render the stable today landing page promo from share data");
assert(shareHtml.includes('id="campaignCopies"'), "share.html must provide copyable campaign templates");
assert(shareHtml.includes("renderCampaignCopies"), "share.html must render LINE/FB/IG campaign copy templates");
assert(shareHtml.includes("manual_share"), "share.html campaign templates must use manual_share tracking");
assert(shareHtml.includes("today.html?utm_source=copy"), "share.html today promo must copy the stable today landing URL");
assert(shareHtml.includes('withUtm(TODAY_URL, "line")'), "share.html today promo must expose a LINE link for the stable today URL");
assert(shareHtml.includes('withUtm(TODAY_URL, "facebook")'), "share.html today promo must expose a Facebook link for the stable today URL");
assert(shareHtml.includes('withUtm(TODAY_URL, "x")'), "share.html today promo must expose an X link for the stable today URL");
assert(shareHtml.includes('cache: "no-store"'), "share.html must bypass cached share JSON after daily updates");
assert(shareHtml.includes("dataVersion"), "share.html must cache-bust daily share JSON requests");
assert(shareHtml.includes('rel="canonical"'), "share.html must include canonical URL");
assert(shareHtml.includes('rel="alternate"'), "share.html must expose feed alternates");
assert(shareHtml.includes('rel="manifest"'), "share.html must expose site.webmanifest");
assert(shareHtml.includes('name="twitter:image"'), "share.html must include a Twitter/X preview image");
assert(shareHtml.includes('name="twitter:image:alt"'), "share.html must include a Twitter/X preview image alt");
assert(shareHtml.includes("overflow: hidden"), "share.html cards must clip accidental visual overflow");
assert(shareHtml.includes("overflow-wrap: anywhere"), "share.html must wrap long URLs and post text inside cards");
assert(shareHtml.includes(".share-card > *"), "share.html must force card children to respect card width");
for (const [index, script] of [...shareHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]).entries()) {
  try {
    new Function(script);
  } catch (error) {
    errors.push(`share.html inline script ${index + 1} syntax error: ${error.message}`);
  }
}

const todayHtml = fs.readFileSync(path.join(root, "today.html"), "utf8");
assert(todayHtml.includes("今日必看"), "today.html must identify itself as the today landing page");
assert(todayHtml.includes('rel="canonical"'), "today.html must include canonical URL");
assert(todayHtml.includes('property="og:image"'), "today.html must include an OG image");
assert(todayHtml.includes('property="og:image:alt"'), "today.html must include an OG image alt");
assert(todayHtml.includes('name="twitter:image:alt"'), "today.html must include a Twitter/X image alt");
assert(todayHtml.includes("data-copy"), "today.html must provide a copyable share text");
assert(todayHtml.includes("today.html?utm_source=copy"), "today.html copy text must share the stable today landing URL");
assert(todayHtml.includes("today.html%3Futm_source%3Dline"), "today.html LINE button must share the stable today landing URL");
assert(todayHtml.includes("today.html%3Futm_source%3Dfacebook"), "today.html Facebook button must share the stable today landing URL");
assert(todayHtml.includes("today.html%3Futm_source%3Dx"), "today.html X button must share the stable today landing URL");
assert(todayHtml.includes("複製社群開場"), "today.html must provide copyable social opening copy");
assert(todayHtml.includes("copy_hook"), "today.html social opening copy must use copy_hook tracking");
assert(todayHtml.includes("today_hook"), "today.html must link readers from hook section to share and social entry pages");
assert(todayHtml.includes("三分鐘路線"), "today.html must keep the three-minute route section for deeper browsing");
assert(todayHtml.includes("route-card"), "today.html must render route cards that send readers to the next page");
assert(todayHtml.includes("today_route"), "today.html route cards must use today_route tracking");
assert(todayHtml.includes("不要看完就走"), "today.html must explicitly encourage readers to continue browsing");
for (const [index, script] of [...todayHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]).entries()) {
  try {
    new Function(script);
  } catch (error) {
    errors.push(`today.html inline script ${index + 1} syntax error: ${error.message}`);
  }
}

const linksHtml = fs.readFileSync(path.join(root, "links.html"), "utf8");
assert(linksHtml.includes("link_in_bio"), "links.html must use link_in_bio UTM tracking");
assert(linksHtml.includes("today.html"), "links.html must link to the stable today landing page");
assert(linksHtml.includes("share.html"), "links.html must link to the daily share pack");
assert(linksHtml.includes("tools/index.html"), "links.html must link to the tools page");
assert(linksHtml.includes("archive.html"), "links.html must link to archive");
assert(linksHtml.includes("daily-reminder.ics"), "links.html must offer the daily calendar reminder");
assert(linksHtml.includes("rss.xml?utm_source=link_in_bio"), "links.html must offer RSS subscription tracking");
assert(linksHtml.includes("feed.json?utm_source=link_in_bio"), "links.html must offer JSON Feed subscription tracking");
assert(linksHtml.includes("data-share-entry"), "links.html must offer native sharing for the social entry page");
assert(linksHtml.includes("data-copy-entry"), "links.html must offer one-tap copying for the social entry page");
assert(linksHtml.includes("native_share"), "links.html native share must use tracked UTM parameters");
assert(linksHtml.includes("今天不用亂滑"), "links.html must keep the social-entry freshness hook");
assert(linksHtml.includes("每日 07:00 前更新"), "links.html must advertise the daily update promise");
assert(linksHtml.includes("有新聞來源"), "links.html must explain why visitors can trust the entry page");
assert(linksHtml.includes("適合丟群組"), "links.html must position the entry page as shareable");
assert(linksHtml.includes("為什麼要點"), "links.html must keep the click-reason panel");
assert(linksHtml.includes("why-panel"), "links.html must render the click-reason panel");
assert(linksHtml.includes("今天三句，可直接丟群組"), "links.html must surface copyable group-share hooks");
assert(linksHtml.includes("data-copy-snippet"), "links.html must provide one-tap copying for group-share hooks");
assert(linksHtml.includes("group_copy"), "links.html group-share hooks must use tracked UTM parameters");
assert(linksHtml.includes("snippet-grid"), "links.html must render the group-share snippet panel");
assert(linksHtml.includes("instagram.com/auntienomad"), "links.html must link to Instagram");
assert(linksHtml.includes("facebook.com/profile.php?id=61553234457401"), "links.html must link to Facebook");
assert(linksHtml.includes("x.com/auntienomad"), "links.html must link to X");
assert(linksHtml.includes('property="og:image"'), "links.html must include an OG image");
assert(linksHtml.includes('name="twitter:image:alt"'), "links.html must include a Twitter/X image alt");
assert(linksHtml.includes('type="application/ld+json"'), "links.html must include JSON-LD");
assert(!/\.svg(?:[?#"]|$)/i.test(linksHtml), "links.html must not reference SVG assets");
for (const [index, script] of [...linksHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]).entries()) {
  if (script.includes("application/ld+json")) continue;
  try {
    new Function(script);
  } catch (error) {
    errors.push(`links.html inline script ${index + 1} syntax error: ${error.message}`);
  }
}

const webManifest = JSON.parse(fs.readFileSync(path.join(root, "site.webmanifest"), "utf8"));
assert(webManifest.name === "阿姨別生氣", "site.webmanifest must use the site name");
assert(Array.isArray(webManifest.shortcuts) && webManifest.shortcuts.length >= 3, "site.webmanifest must expose growth shortcuts");
assert(JSON.stringify(webManifest).includes("share.html"), "site.webmanifest must include share pack shortcut");
assert(JSON.stringify(webManifest).includes("today.html"), "site.webmanifest must include today landing page shortcut");
const llmsTxt = fs.readFileSync(path.join(root, "llms.txt"), "utf8");
assert(llmsTxt.includes("# 阿姨別生氣"), "llms.txt must identify the site");
assert(llmsTxt.includes("RSS:"), "llms.txt must mention RSS");
assert(llmsTxt.includes("Share kit:"), "llms.txt must mention share kit");
assert(llmsTxt.includes("Today page:"), "llms.txt must mention today page");

["daily-update.yml", "live-news-update.yml"].forEach((workflowFile) => {
  const workflow = fs.readFileSync(path.join(root, ".github", "workflows", workflowFile), "utf8");
  assert(workflow.includes("site.webmanifest"), `${workflowFile} must commit site.webmanifest updates`);
  assert(workflow.includes("llms.txt"), `${workflowFile} must commit llms.txt updates`);
  assert(workflow.includes("today.html"), `${workflowFile} must commit today.html updates`);
  assert(workflow.includes("links.html"), `${workflowFile} must commit social link page updates`);
  assert(workflow.includes("generate:links"), `${workflowFile} must regenerate social link page`);
  assert(workflow.includes("test:social-previews"), `${workflowFile} must audit social previews`);
  assert(workflow.includes("index.html"), `${workflowFile} must commit homepage preview updates`);
});
const liveNewsWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "live-news-update.yml"), "utf8");
assert(liveNewsWorkflow.includes("data/live-news-report.json"), "live-news-update.yml must publish the live news report");
const gitignore = fs.readFileSync(path.join(root, ".gitignore"), "utf8");
assert(!gitignore.includes("data/live-news-report.json"), "data/live-news-report.json must not be ignored");
const dailyUpdateScript = fs.readFileSync(path.join(root, "scripts", "daily-update.mjs"), "utf8");
assert(dailyUpdateScript.includes("process.exit(1);"), "daily-update.mjs must fail the workflow when public daily content is rejected");
const dailyUpdateWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "daily-update.yml"), "utf8");
assert(dailyUpdateWorkflow.includes('ALLOW_APPROVED_IMAGE_FALLBACK: "true"'), "daily-update.yml must allow approved image fallback when the Images API is unavailable");

const pagesWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "pages.yml"), "utf8");
assert(pagesWorkflow.includes("test:social-previews"), "pages.yml must audit social previews before deploying");

const xDailyWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "x-daily-post.yml"), "utf8");
assert(xDailyWorkflow.includes("test:x-daily-post"), "x-daily-post.yml must dry-run daily X content before posting");
assert(xDailyWorkflow.includes("FAIL_ON_SKIP"), "x-daily-post.yml must fail instead of silently skipping daily X posts");

const metaDailyWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "meta-daily-post.yml"), "utf8");
assert(metaDailyWorkflow.includes("npm run post:meta"), "meta-daily-post.yml must publish through the Meta posting script");
assert(
  metaDailyWorkflow.includes('META_ALLOW_SKIP: "false"'),
  "meta-daily-post.yml must fail loudly instead of silently skipping FB/IG posts when credentials are missing"
);

const opsHealthWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "ops-health-check.yml"), "utf8");
assert(opsHealthWorkflow.includes("npm test"), "ops-health-check.yml must run content validation");
assert(opsHealthWorkflow.includes("test:social-previews"), "ops-health-check.yml must audit social previews");
assert(opsHealthWorkflow.includes("test:x-daily-post"), "ops-health-check.yml must verify X daily post readiness");
assert(opsHealthWorkflow.includes("test:meta-post"), "ops-health-check.yml must verify Meta daily post readiness");
assert(opsHealthWorkflow.includes("test:domain"), "ops-health-check.yml must check the public custom domain");
assert(opsHealthWorkflow.includes("ENABLE_PAGES_HTTPS"), "ops-health-check.yml must retry GitHub Pages HTTPS enforcement");

const opsHealthScript = fs.readFileSync(path.join(root, "scripts", "ops-health-check.mjs"), "utf8");
assert(opsHealthScript.includes("metaDailyPostSkippedRun"), "ops-health-check must warn when Meta Daily Post silently skipped publishing");
const dailyImagePromptBlock = dailyUpdateScript.slice(
  dailyUpdateScript.indexOf("function imagePromptFor"),
  dailyUpdateScript.indexOf("async function generateOpenAIImage")
);

assert(
  dailyUpdateScript.includes("OPENAI_IMAGE_PROMPT_REVISION"),
  "daily-update image filenames must include a prompt revision so bad image batches can be replaced without reusing stale files"
);
assert(
  dailyUpdateScript.includes("Absolutely no visible writing anywhere"),
  "daily-update image prompt must explicitly ban visible writing"
);
assert(
  !/labels are allowed|allowed only if crisp|別匯款|先查證|打165/.test(dailyImagePromptBlock),
  "daily-update image prompt must not allow generated text labels; AI text caused broken public images"
);
assert(
  dailyUpdateWorkflow.includes("OPENAI_IMAGE_PROMPT_REVISION"),
  "daily-update.yml must set OPENAI_IMAGE_PROMPT_REVISION when generating daily images"
);

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
