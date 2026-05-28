import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://taiwanape.github.io/auntie-no-mad/";
const content = JSON.parse(fs.readFileSync(path.join(root, "data", "site-content.json"), "utf8"));
const siteTitle = "阿姨別生氣";
const siteDescription = "每天整理台灣生活雷達、踩坑提醒、股市 ETF 白話觀察與實用工具。阿姨不講官腔，只講今天出門會不會煩。";

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

console.log(`Generated sitemap.xml with ${urls.size} URLs, robots.txt, rss.xml, and feed.json.`);
