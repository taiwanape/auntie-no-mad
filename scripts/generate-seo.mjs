import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://taiwanape.github.io/auntie-no-mad/";
const content = JSON.parse(fs.readFileSync(path.join(root, "data", "site-content.json"), "utf8"));

const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if ([".git", "assets", "restore-points", "qa", "qa-local"].includes(entry.name)) continue;
      walk(rel);
    } else if (entry.name.endsWith(".html")) {
      htmlFiles.push(rel.replaceAll("\\", "/"));
    }
  }
}
walk(".");

const dataSlugs = [
  ...(content.lifeRadar || []),
  ...(content.pitfalls || []),
  ...(content.stockWatchlist || []),
  ...(content.archive || [])
].map((item) => item.slug).filter(Boolean);

const urls = new Set(["index.html", "about.html", "contact.html", "privacy.html", "disclaimer.html", "copyright.html", "archive.html", "tools/index.html", ...dataSlugs, ...htmlFiles.map((file) => file.replace(/^\.\//, ""))]);

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
console.log(`Generated sitemap.xml with ${urls.size} URLs and robots.txt.`);
