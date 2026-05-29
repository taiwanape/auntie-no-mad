import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://taiwanape.github.io/auntie-no-mad/";
const content = JSON.parse(fs.readFileSync(path.join(root, "data", "site-content.json"), "utf8"));
const siteTitle = "阿姨別生氣";
const siteDescription = "每天整理台灣生活雷達、踩坑提醒、股市 ETF 白話觀察與實用工具。阿姨不講官腔，只講今天出門會不會煩。";
const socialLinks = [
  "https://x.com/auntienomad",
  "https://www.instagram.com/auntienomad/",
  "https://www.facebook.com/profile.php?id=61553234457401"
];

const dataSlugs = [
  ...(content.lifeRadar || []),
  ...(content.pitfalls || []),
  ...(content.stockWatchlist || []),
  ...(content.archive || [])
].map((item) => item.slug).filter(Boolean);

const staticUrls = [
  "index.html",
  "about.html",
  "contact.html",
  "privacy.html",
  "disclaimer.html",
  "copyright.html",
  "archive.html",
  "share.html",
  "tools/index.html",
  "tools/unit-converter.html"
];

const urls = new Set([...staticUrls, ...dataSlugs]);

function absoluteUrl(slug = "") {
  if (!slug || slug === "index.html") return siteUrl;
  if (/^https?:\/\//.test(slug)) return slug;
  return `${siteUrl}${slug.replace(/^\//, "")}`;
}

function escapeXml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function normalizeDate(value) {
  const date = value ? new Date(`${String(value).slice(0, 10)}T00:00:00+08:00`) : new Date();
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function collectFeedItems() {
  const sections = [
    ...(content.lifeRadar || []),
    ...(content.pitfalls || []),
    content.stockOverview,
    ...(content.stockWatchlist || []),
    ...(content.archive || [])
  ].filter(Boolean);
  const seen = new Set();
  return sections
    .filter((item) => item.slug && !item.slug.startsWith("#"))
    .filter((item) => {
      if (seen.has(item.slug)) return false;
      seen.add(item.slug);
      return true;
    })
    .sort((a, b) => normalizeDate(b.date) - normalizeDate(a.date))
    .slice(0, 30);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls].sort().map((url) => {
  const loc = url === "index.html" ? siteUrl : `${siteUrl}${url}`;
  return `  <url><loc>${loc}</loc><lastmod>${content.site?.updatedAt?.slice(0, 10) || new Date().toISOString().slice(0, 10)}</lastmod></url>`;
}).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /
Sitemap: ${siteUrl}sitemap.xml
`);

const feedItems = collectFeedItems();
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <description>${escapeXml(siteDescription)}</description>
    <link>${escapeXml(siteUrl)}</link>
    <language>zh-TW</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(`${siteUrl}rss.xml`)}" rel="self" type="application/rss+xml"/>
${feedItems.map((item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.summary || item.auntieComment || "")}</description>
      <link>${escapeXml(absoluteUrl(item.slug))}</link>
      <guid isPermaLink="true">${escapeXml(absoluteUrl(item.slug))}</guid>
      <pubDate>${normalizeDate(item.date).toUTCString()}</pubDate>
      <category>${escapeXml(item.category || "阿姨別生氣")}</category>
    </item>`).join("\n")}
  </channel>
</rss>
`;

const jsonFeed = {
  version: "https://jsonfeed.org/version/1.1",
  title: siteTitle,
  home_page_url: siteUrl,
  feed_url: `${siteUrl}feed.json`,
  description: siteDescription,
  language: "zh-TW",
  items: feedItems.map((item) => ({
    id: absoluteUrl(item.slug),
    url: absoluteUrl(item.slug),
    title: item.title,
    summary: item.summary || item.auntieComment || "",
    content_text: [item.summary, item.auntieComment].filter(Boolean).join("\n\n"),
    date_published: normalizeDate(item.date).toISOString(),
    tags: [item.category].filter(Boolean),
    external_url: item.sourceUrl
  }))
};

fs.writeFileSync(path.join(root, "rss.xml"), rss);
fs.writeFileSync(path.join(root, "feed.json"), `${JSON.stringify(jsonFeed, null, 2)}\n`);

const manifest = {
  name: "阿姨別生氣",
  short_name: "阿姨別生氣",
  description: siteDescription,
  lang: "zh-TW",
  start_url: `${siteUrl}?utm_source=web_app_manifest&utm_medium=owned&utm_campaign=install`,
  scope: siteUrl,
  display: "standalone",
  background_color: "#ffd51f",
  theme_color: "#ffd51f",
  icons: [
    {
      src: `${siteUrl}assets/auntie-avatar-nav.jpg`,
      sizes: "192x192",
      type: "image/jpeg",
      purpose: "any"
    }
  ],
  shortcuts: [
    {
      name: "今日分享包",
      short_name: "分享包",
      url: `${siteUrl}share.html?utm_source=web_app_manifest&utm_medium=owned&utm_campaign=share_pack`,
      description: "拿今天可轉傳的文章、圖文與社群文案。"
    },
    {
      name: "即時新聞",
      short_name: "即時",
      url: `${siteUrl}#live`,
      description: "看阿姨整理的即時新聞入口。"
    },
    {
      name: "工具箱",
      short_name: "工具",
      url: `${siteUrl}tools/index.html`,
      description: "打開阿姨的小工具。"
    }
  ]
};

const latestItems = feedItems.slice(0, 8);
const llms = [
  "# 阿姨別生氣",
  "",
  "> 台灣生活雷達、踩坑提醒、股市 ETF 白話觀察與實用工具。語氣白話、有一點碎念，重點是幫一般人看懂生活大小事。",
  "",
  `- Website: ${siteUrl}`,
  `- RSS: ${siteUrl}rss.xml`,
  `- JSON Feed: ${siteUrl}feed.json`,
  `- Sitemap: ${siteUrl}sitemap.xml`,
  `- Share kit: ${siteUrl}share.html`,
  `- X: ${socialLinks[0]}`,
  `- Instagram: ${socialLinks[1]}`,
  `- Facebook: ${socialLinks[2]}`,
  "",
  "## Content Rules",
  "",
  "- 所有新聞與市場內容都要保留來源連結。",
  "- 股市 ETF 內容只做教育與資訊整理，不是投資建議。",
  "- 內容風格：白話、犀利但不惡毒、像阿姨提醒晚輩，不要像新聞機器人。",
  "",
  "## Latest Public Articles",
  "",
  ...latestItems.map((item) => `- [${item.title}](${absoluteUrl(item.slug)}) — ${item.category || "阿姨別生氣"}`)
].join("\n");

fs.writeFileSync(path.join(root, "site.webmanifest"), `${JSON.stringify(manifest, null, 2)}\n`);
fs.writeFileSync(path.join(root, "llms.txt"), `${llms}\n`, "utf8");

console.log(`Generated sitemap.xml with ${urls.size} URLs, robots.txt, rss.xml, feed.json, site.webmanifest, and llms.txt.`);
