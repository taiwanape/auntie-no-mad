import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://taiwanape.github.io/auntie-no-mad/";
const repoRawPrefix = "https://raw.githubusercontent.com/taiwanape/auntie-no-mad/";
const errors = [];
const warnings = [];

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/").replace(/^\.\//, "");
}

function fileExists(relativePath = "") {
  return Boolean(relativePath) && fs.existsSync(path.join(root, normalizePath(relativePath)));
}

function parseAttributes(tag = "") {
  const attrs = {};
  for (const match of tag.matchAll(/([a-zA-Z0-9:_-]+)\s*=\s*"([^"]*)"/g)) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}

function extractMeta(html) {
  const meta = new Map();
  for (const match of html.matchAll(/<meta\s+[^>]*>/g)) {
    const attrs = parseAttributes(match[0]);
    const key = attrs.property || attrs.name;
    if (key) meta.set(key, attrs.content || "");
  }
  return meta;
}

function extractLink(html, rel) {
  for (const match of html.matchAll(/<link\s+[^>]*>/g)) {
    const attrs = parseAttributes(match[0]);
    if (attrs.rel === rel) return attrs.href || "";
  }
  return "";
}

function extractTitle(html) {
  return (html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "").trim();
}

function localPathFromPublicUrl(value = "") {
  const normalized = normalizePath(value);
  if (!normalized) return "";
  if (!/^https?:\/\//.test(normalized)) return normalized;
  if (normalized.startsWith(siteUrl)) {
    return decodeURIComponent(normalized.slice(siteUrl.length).split(/[?#]/)[0]);
  }
  if (normalized.startsWith(repoRawPrefix)) {
    const parts = normalized.slice(repoRawPrefix.length).split("/");
    return decodeURIComponent(parts.slice(1).join("/").split(/[?#]/)[0]);
  }
  return "";
}

function readImageDimensions(relativePath = "") {
  const assetPath = path.join(root, normalizePath(relativePath));
  if (!fs.existsSync(assetPath)) return null;
  const buffer = fs.readFileSync(assetPath);

  if (buffer.length >= 24 && buffer.toString("ascii", 1, 4) === "PNG") {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
      type: "png"
    };
  }

  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length - 9) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      const segmentLength = buffer.readUInt16BE(offset + 2);
      if (
        [
          0xc0,
          0xc1,
          0xc2,
          0xc3,
          0xc5,
          0xc6,
          0xc7,
          0xc9,
          0xca,
          0xcb,
          0xcd,
          0xce,
          0xcf
        ].includes(marker)
      ) {
        return {
          width: buffer.readUInt16BE(offset + 7),
          height: buffer.readUInt16BE(offset + 5),
          type: "jpg"
        };
      }
      offset += 2 + segmentLength;
    }
  }

  return null;
}

function compact(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

function assertUsefulText(label, value, minLength = 12) {
  const text = compact(value);
  if (text.length < minLength) fail(`${label} is too short or missing`);
  if (/\?{3,}|undefined|null|NaN/i.test(text)) fail(`${label} contains placeholder or mojibake text`);
}

function auditImage(label, imageUrl, { requireLarge = true } = {}) {
  if (!imageUrl) {
    fail(`${label}: missing image URL`);
    return;
  }
  if (!/^https:\/\//.test(imageUrl)) fail(`${label}: image must use an absolute HTTPS URL`);
  if (/\.svg(?:[?#]|$)/i.test(imageUrl)) fail(`${label}: SVG images are not allowed for social previews`);

  const localPath = localPathFromPublicUrl(imageUrl);
  if (!localPath) {
    warn(`${label}: external preview image could not be inspected locally (${imageUrl})`);
    return;
  }
  if (!fileExists(localPath)) {
    fail(`${label}: preview image file does not exist (${localPath})`);
    return;
  }

  const dimensions = readImageDimensions(localPath);
  if (!dimensions) {
    fail(`${label}: preview image dimensions could not be read (${localPath})`);
    return;
  }

  if (requireLarge && (dimensions.width < 600 || dimensions.height < 315)) {
    fail(`${label}: preview image is too small for social cards (${dimensions.width}x${dimensions.height})`);
  }

  const ratio = dimensions.width / dimensions.height;
  if (ratio < 1.2 || ratio > 2.2) {
    warn(`${label}: preview image aspect ratio is unusual for social sharing (${dimensions.width}x${dimensions.height})`);
  }
}

function auditPage(relativePath, label) {
  const normalized = normalizePath(relativePath);
  const htmlPath = path.join(root, normalized);
  if (!fs.existsSync(htmlPath)) {
    fail(`${label}: page is missing (${normalized})`);
    return;
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  const title = extractTitle(html);
  const meta = extractMeta(html);
  const canonical = extractLink(html, "canonical");

  assertUsefulText(`${label}: title`, title, 3);
  assertUsefulText(`${label}: meta description`, meta.get("description"), 10);
  assertUsefulText(`${label}: og:title`, meta.get("og:title"), 3);
  assertUsefulText(`${label}: og:description`, meta.get("og:description"), 10);
  assertUsefulText(`${label}: og:image:alt`, meta.get("og:image:alt"), 6);
  assertUsefulText(`${label}: twitter:title`, meta.get("twitter:title") || meta.get("og:title"), 3);
  assertUsefulText(`${label}: twitter:description`, meta.get("twitter:description") || meta.get("og:description"), 10);
  assertUsefulText(`${label}: twitter:image:alt`, meta.get("twitter:image:alt") || meta.get("og:image:alt"), 6);

  if (!canonical || !canonical.startsWith(siteUrl)) fail(`${label}: canonical must point to the public site`);
  if (!meta.get("og:url") || !meta.get("og:url").startsWith(siteUrl)) fail(`${label}: og:url must point to the public site`);
  if (meta.get("twitter:card") !== "summary_large_image") fail(`${label}: twitter:card must be summary_large_image`);

  const ogImage = meta.get("og:image");
  const twitterImage = meta.get("twitter:image");
  auditImage(`${label}: og:image`, ogImage);
  if (twitterImage && twitterImage !== ogImage) auditImage(`${label}: twitter:image`, twitterImage);
  if (!twitterImage) fail(`${label}: twitter:image is missing`);
}

function assertSiteUrl(label, value = "") {
  if (!String(value).startsWith(siteUrl)) fail(`${label} must point back to the public site`);
}

function auditSharePack(sharePack) {
  const items = sharePack.items || [];
  if (items.length < 3) fail("share-pack: needs at least 3 shareable items");

  let imageReadyCount = 0;
  for (const item of items) {
    const label = `share-pack ${item.kind || item.title || "item"}`;
    assertUsefulText(`${label}: title`, item.title);
    assertUsefulText(`${label}: summary`, item.summary, 10);
    assertUsefulText(`${label}: shareText`, item.shareText, 20);
    assertSiteUrl(`${label}: articleUrl`, item.articleUrl);
    assertSiteUrl(`${label}: copyUrl`, item.copyUrl);

    if (item.imagePath) {
      imageReadyCount += 1;
      const publicImage = /^https?:\/\//.test(item.imagePath) ? item.imagePath : new URL(item.imagePath, siteUrl).href;
      auditImage(`${label}: imagePath`, publicImage);
    } else {
      warn(`${label}: no imagePath; this item should not be the primary social card`);
    }

    for (const platform of ["line", "facebook", "x"]) {
      const link = item.platformLinks?.[platform] || "";
      if (!/^https?:\/\//.test(link)) {
        fail(`${label}: ${platform} share link is missing`);
        continue;
      }
      const decoded = decodeURIComponent(link);
      if (!decoded.includes(`utm_source=${platform}`)) fail(`${label}: ${platform} share link is missing UTM source`);
    }
  }

  if (imageReadyCount < 3) {
    fail(`share-pack: needs at least 3 shareable items with images; found ${imageReadyCount}`);
  }
}

function auditSocialPosts(socialPosts) {
  for (const platform of ["x", "facebook", "instagram"]) {
    const post = socialPosts.posts?.[platform];
    if (!post) {
      fail(`social-posts: missing ${platform} draft`);
      continue;
    }
    assertUsefulText(`social-posts ${platform}: text`, post.text, 30);
    assertSiteUrl(`social-posts ${platform}: url`, post.url);
    if (!post.text.includes("#阿姨別生氣")) fail(`social-posts ${platform}: text must include #阿姨別生氣`);
    if (platform === "x" && [...post.text].length > 280) fail("social-posts x: text exceeds 280 characters");
    if (!post.imagePath) {
      fail(`social-posts ${platform}: imagePath is required`);
    } else {
      auditImage(`social-posts ${platform}: image`, new URL(post.imagePath, siteUrl).href);
    }
  }
}

const content = readJson("data/site-content.json");
const sharePack = readJson("data/share-pack.json");
const socialPosts = readJson("data/social-posts.json");

const pages = new Map([
  ["index.html", "homepage"],
  ["today.html", "today landing"],
  ["links.html", "social entry"],
  ["share.html", "share pack"]
]);

for (const item of [
  ...(content.liveNews || []),
  ...(content.lifeRadar || []),
  ...(content.pitfalls || []),
  content.stockOverview,
  ...(content.stockWatchlist || [])
].filter(Boolean)) {
  if (item.slug && fileExists(item.slug)) pages.set(item.slug, item.title || item.slug);
}

for (const [relativePath, label] of pages.entries()) {
  auditPage(relativePath, label);
}

auditSharePack(sharePack);
auditSocialPosts(socialPosts);

if (warnings.length) {
  console.warn("Social preview audit warnings:");
  warnings.forEach((message) => console.warn(`- ${message}`));
}

if (errors.length) {
  console.error("Social preview audit failed:");
  errors.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Social preview audit passed for ${pages.size} pages and ${sharePack.items?.length || 0} share-pack items.`);
