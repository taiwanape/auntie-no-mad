import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentPath = path.join(root, "data", "site-content.json");
const sharePackPath = path.join(root, "data", "share-pack.json");
const socialPostsPath = path.join(root, "data", "social-posts.json");
const outputPath = path.join(root, "links.html");

const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
const sharePack = fs.existsSync(sharePackPath)
  ? JSON.parse(fs.readFileSync(sharePackPath, "utf8"))
  : { items: [] };
const socialPosts = fs.existsSync(socialPostsPath)
  ? JSON.parse(fs.readFileSync(socialPostsPath, "utf8"))
  : {};

const siteUrl = ensureSlash(content.site?.url || "https://taiwanape.github.io/auntie-no-mad/");
const siteName = content.site?.name || "阿姨別生氣";
const handle = "@auntienomad";
const defaultImage = "assets/auntie-hero.jpg";
const generatedAt = sharePack.generatedAt || content.site?.updatedAt || new Date().toISOString();

function ensureSlash(value) {
  return value.endsWith("/") ? value : `${value}/`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function cleanText(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

function absoluteUrl(href = "") {
  if (!href || href === "#") return siteUrl;
  if (/^https?:\/\//.test(href)) return href;
  return new URL(normalizePath(href).replace(/^\//, ""), siteUrl).href;
}

function withUtm(href, source, campaign = "link_in_bio") {
  const url = new URL(absoluteUrl(href));
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", "social");
  url.searchParams.set("utm_campaign", campaign);
  return url.href;
}

function pickPrimary(items = []) {
  const socialPrimaryUrl = socialPosts.source?.primaryLandingUrl || "";
  const priority = ["pitfall", "life-radar", "live-news", "stock-watch"];
  return (
    priority.map((kind) => items.find((item) => item.kind === kind && item.articleUrl)).find(Boolean) ||
    items.find((item) => item.articleUrl) ||
    {
      kind: "today",
      title: "今天先看阿姨整理",
      summary: "新聞很多，阿姨先把最有用的整理成一頁。",
      imagePath: defaultImage,
      articleUrl: socialPrimaryUrl || `${siteUrl}today.html`
    }
  );
}

function displayCategory(kind = "") {
  return (
    {
      "live-news": "即時新聞",
      "life-radar": "生活雷達",
      pitfall: "踩坑日記",
      "stock-watch": "股市 ETF",
      today: "今日重點"
    }[kind] || "阿姨整理"
  );
}

function truncate(value = "", max = 58) {
  const text = cleanText(value);
  return [...text].length > max ? `${[...text].slice(0, max - 1).join("")}…` : text;
}

const items = sharePack.items || [];
const primary = pickPrimary(items);
const primaryTitle = cleanText(primary.title || "今天先看阿姨整理");
const primarySummary = cleanText(primary.summary || "新聞很多，阿姨先把最有用的整理成一頁。");
const primaryImage = normalizePath(primary.imagePath || defaultImage);
const linksPageUrl = `${siteUrl}links.html`;
const todayUrl = withUtm("today.html", "link_in_bio", "today_page");
const shareUrl = withUtm("share.html", "link_in_bio", "share_pack");
const latestUrl = withUtm(primary.articleUrl || "today.html", "link_in_bio", "featured_story");
const description = `阿姨別生氣社群入口：每天早上更新生活雷達、踩坑提醒、股市 ETF 白話整理。`;
const ogImage = absoluteUrl(primaryImage);

const articleCards = items
  .filter((item) => item.articleUrl)
  .slice(0, 5)
  .map((item) => {
    const title = truncate(item.title || displayCategory(item.kind), 54);
    const summary = truncate(item.summary || "阿姨幫你整理成白話，先看重點再決定要不要點。", 72);
    const category = displayCategory(item.kind);
    const href = withUtm(item.articleUrl, "link_in_bio", item.kind || "daily_item");
    const image = normalizePath(item.imagePath || defaultImage);
    return `<a class="story-link" href="${escapeHtml(href)}">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}">
      <span>
        <small>${escapeHtml(category)}</small>
        <strong>${escapeHtml(title)}</strong>
        <em>${escapeHtml(summary)}</em>
      </span>
    </a>`;
  })
  .join("\n");

const quickLinks = [
  ["今日重點", todayUrl],
  ["分享包", shareUrl],
  ["首頁", withUtm("index.html", "link_in_bio", "homepage")],
  ["工具箱", withUtm("tools/index.html", "link_in_bio", "tools")],
  ["舊文章", withUtm("archive.html", "link_in_bio", "archive")]
]
  .map(([label, href], index) => `<a class="${index === 0 ? "primary" : ""}" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(siteName)}｜社群入口</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${escapeHtml(linksPageUrl)}">
  <link rel="alternate" type="application/rss+xml" title="${escapeHtml(siteName)} RSS" href="${siteUrl}rss.xml">
  <link rel="alternate" type="application/feed+json" title="${escapeHtml(siteName)} JSON Feed" href="${siteUrl}feed.json">
  <link rel="manifest" href="site.webmanifest">
  <link rel="me" href="https://x.com/auntienomad">
  <link rel="me" href="https://www.instagram.com/auntienomad/">
  <link rel="me" href="https://www.facebook.com/profile.php?id=61553234457401">
  <meta property="og:site_name" content="${escapeHtml(siteName)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(`${siteName}｜社群入口`)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(linksPageUrl)}">
  <meta property="og:image" content="${escapeHtml(ogImage)}">
  <meta property="og:image:alt" content="${escapeHtml(primaryTitle)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(`${siteName}｜社群入口`)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${escapeHtml(ogImage)}">
  <link rel="icon" href="assets/auntie-avatar-nav.jpg">
  <link rel="stylesheet" href="site-info.css">
  <style>
    .link-shell {
      width: min(100% - 26px, 680px);
      margin: 0 auto;
      padding: 24px 0 42px;
    }

    .profile-card,
    .feature-card,
    .link-panel {
      border: var(--line);
      border-radius: 22px;
      background: var(--paper);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .profile-card {
      padding: 22px;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 14px;
      align-items: center;
      margin-bottom: 18px;
    }

    .profile-card img {
      width: 76px;
      height: 76px;
      border: 4px solid var(--ink);
      border-radius: 50%;
      object-fit: cover;
      background: white;
      box-shadow: 4px 4px 0 var(--ink);
    }

    .profile-card h1 {
      margin: 0;
      font-size: clamp(30px, 7vw, 44px);
      line-height: 1.05;
      letter-spacing: 0;
      text-shadow: 3px 3px 0 white, 5px 5px 0 var(--ink);
    }

    .profile-card p {
      margin: 6px 0 0;
      font-size: 15px;
      line-height: 1.45;
      font-weight: 950;
    }

    .feature-card {
      margin-bottom: 18px;
    }

    .feature-card img {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      background: var(--yellow);
      border-bottom: var(--line);
    }

    .feature-body {
      padding: 18px;
      display: grid;
      gap: 12px;
    }

    .feature-body h2 {
      margin: 0;
      font-size: clamp(30px, 8vw, 44px);
      line-height: 1.08;
      font-weight: 1000;
      overflow-wrap: anywhere;
    }

    .feature-body p {
      margin: 0;
      font-size: 18px;
      line-height: 1.55;
      font-weight: 900;
    }

    .button-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 2px;
    }

    .button-grid a,
    .social-row a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 10px 12px;
      border: 3px solid var(--ink);
      border-radius: 999px;
      background: white;
      color: var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
      text-decoration: none;
      font-weight: 1000;
      text-align: center;
    }

    .button-grid a.primary {
      grid-column: 1 / -1;
      background: var(--pink);
      color: white;
      min-height: 54px;
      font-size: 20px;
    }

    .link-panel {
      padding: 18px;
      display: grid;
      gap: 12px;
      margin-bottom: 18px;
    }

    .link-panel h2 {
      margin: 0;
      font-size: 24px;
    }

    .story-link {
      display: grid;
      grid-template-columns: 96px minmax(0, 1fr);
      gap: 12px;
      align-items: center;
      padding: 10px;
      border: 3px solid var(--ink);
      border-radius: 16px;
      background: white;
      color: var(--ink);
      text-decoration: none;
      box-shadow: 3px 3px 0 var(--ink);
      overflow: hidden;
    }

    .story-link img {
      width: 96px;
      height: 72px;
      border: 3px solid var(--ink);
      border-radius: 12px;
      object-fit: cover;
      background: var(--yellow);
    }

    .story-link span {
      min-width: 0;
      display: grid;
      gap: 3px;
    }

    .story-link small {
      width: fit-content;
      padding: 2px 8px;
      border: 2px solid var(--ink);
      border-radius: 999px;
      background: var(--yellow);
      font-size: 12px;
      font-weight: 1000;
    }

    .story-link strong,
    .story-link em {
      overflow-wrap: anywhere;
    }

    .story-link strong {
      font-size: 18px;
      line-height: 1.18;
      font-weight: 1000;
    }

    .story-link em {
      color: rgba(22, 19, 15, .72);
      font-size: 14px;
      line-height: 1.35;
      font-style: normal;
      font-weight: 850;
    }

    .social-row {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
    }

    .return-row {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
    }

    .return-row a {
      display: grid;
      gap: 4px;
      min-height: 74px;
      padding: 12px;
      border: 3px solid var(--ink);
      border-radius: 16px;
      background: white;
      color: var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
      text-decoration: none;
      font-weight: 1000;
      text-align: center;
      align-content: center;
    }

    .return-row a:first-child {
      background: var(--pink);
      color: white;
    }

    .return-row small {
      font-size: 12px;
      line-height: 1.25;
      font-weight: 900;
    }

    .fine-print {
      margin: 16px 0 0;
      text-align: center;
      font-size: 13px;
      line-height: 1.5;
      font-weight: 900;
      color: rgba(22, 19, 15, .72);
    }

    @media (max-width: 520px) {
      .link-shell {
        width: min(100% - 20px, 680px);
        padding-top: 14px;
      }

      .profile-card {
        grid-template-columns: 64px minmax(0, 1fr);
        padding: 16px;
      }

      .profile-card img {
        width: 64px;
        height: 64px;
      }

      .button-grid,
      .social-row,
      .return-row {
        grid-template-columns: 1fr;
      }

      .story-link {
        grid-template-columns: 82px minmax(0, 1fr);
      }

      .story-link img {
        width: 82px;
        height: 68px;
      }
    }
  </style>
  <script type="application/ld+json">
    ${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: `${siteName} 社群入口`,
      url: linksPageUrl,
      description,
      image: ogImage,
      dateModified: generatedAt,
      mainEntity: {
        "@type": "Organization",
        name: siteName,
        url: siteUrl,
        sameAs: [
          "https://x.com/auntienomad",
          "https://www.instagram.com/auntienomad/",
          "https://www.facebook.com/profile.php?id=61553234457401"
        ]
      }
    })}
  </script>
</head>
<body>
  <main class="link-shell">
    <section class="profile-card" aria-label="${escapeHtml(siteName)}">
      <img src="assets/auntie-avatar-nav.jpg" alt="${escapeHtml(siteName)}">
      <div>
        <h1>${escapeHtml(siteName)}</h1>
        <p>${escapeHtml(handle)}｜每天把生活新聞、踩坑提醒、股市 ETF 講成人話。</p>
      </div>
    </section>

    <section class="feature-card" aria-labelledby="featuredTitle">
      <img src="${escapeHtml(primaryImage)}" alt="${escapeHtml(primaryTitle)}">
      <div class="feature-body">
        <span class="label">今天先看這篇</span>
        <h2 id="featuredTitle">${escapeHtml(primaryTitle)}</h2>
        <p>${escapeHtml(primarySummary)}</p>
        <div class="button-grid">
          <a class="primary" href="${escapeHtml(latestUrl)}">打開今天主打</a>
          ${quickLinks}
        </div>
      </div>
    </section>

    <section class="link-panel" aria-labelledby="storyLinksTitle">
      <h2 id="storyLinksTitle">最新圖文入口</h2>
      ${articleCards || `<a class="story-link" href="${escapeHtml(todayUrl)}"><img src="${defaultImage}" alt="${escapeHtml(siteName)}"><span><small>今日重點</small><strong>今天先看阿姨整理</strong><em>資料正在更新，先進首頁看最新內容。</em></span></a>`}
    </section>

    <section class="link-panel" aria-labelledby="returnTitle">
      <h2 id="returnTitle">明天也要回來看</h2>
      <div class="return-row">
        <a href="daily-reminder.ics" download="auntie-no-mad-daily-reminder.ics">
          每天 7 點提醒
          <small>加到行事曆</small>
        </a>
        <a href="rss.xml?utm_source=link_in_bio&utm_medium=owned&utm_campaign=rss">
          RSS 訂閱
          <small>給閱讀器</small>
        </a>
        <a href="feed.json?utm_source=link_in_bio&utm_medium=owned&utm_campaign=json_feed">
          JSON Feed
          <small>給工具接</small>
        </a>
      </div>
    </section>

    <section class="link-panel" aria-labelledby="socialTitle">
      <h2 id="socialTitle">追蹤阿姨</h2>
      <div class="social-row">
        <a href="https://www.instagram.com/auntienomad/" rel="me noreferrer" target="_blank">IG</a>
        <a href="https://www.facebook.com/profile.php?id=61553234457401" rel="me noreferrer" target="_blank">FB</a>
        <a href="https://x.com/auntienomad" rel="me noreferrer" target="_blank">X</a>
      </div>
    </section>

    <p class="fine-print">每日早上更新。股市內容是公開資訊整理，不是投資建議；錢袋自己顧，阿姨只幫你翻成人話。</p>
  </main>
</body>
</html>
`;

fs.writeFileSync(outputPath, html, "utf8");
console.log(`Generated ${path.relative(root, outputPath)} with ${items.length} article links.`);
