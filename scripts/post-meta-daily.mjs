import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const graphVersion = process.env.META_GRAPH_VERSION || "v23.0";
const graphBase = `https://graph.facebook.com/${graphVersion}`;
const shouldPost = process.env.POST_TO_META === "true" && !args.has("--dry-run");
const allowSkip = process.env.META_ALLOW_SKIP === "true";
const resultPath = process.env.POST_META_RESULT_PATH || ".tmp/meta-post-result.json";

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function writeResult(result) {
  const output = JSON.stringify(result, null, 2);
  fs.mkdirSync(path.dirname(path.join(root, resultPath)), { recursive: true });
  fs.writeFileSync(path.join(root, resultPath), `${output}\n`, "utf8");
  console.log(output);
}

function charLength(value = "") {
  return [...String(value)].length;
}

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function assertCleanText(label, value) {
  const text = String(value || "");
  if (/\?{3,}|�|[銝嚗瘞]\S*\?/.test(text)) {
    throw new Error(`${label} contains mojibake or replacement characters.`);
  }
}

function assertReadyPost(platform, post) {
  if (!post?.text) throw new Error(`${platform}: missing post text.`);
  if (!post?.imagePath) throw new Error(`${platform}: missing imagePath.`);
  assertCleanText(`${platform} text`, post.text);
  assertCleanText(`${platform} title`, post.sourceTitle || "");

  const imagePath = normalizePath(post.imagePath);
  if (!/\.(png|jpe?g|webp)$/i.test(imagePath)) {
    throw new Error(`${platform}: imagePath must be a raster image: ${imagePath}`);
  }
  if (!fs.existsSync(path.join(root, imagePath))) {
    throw new Error(`${platform}: image file not found: ${imagePath}`);
  }
  return imagePath;
}

function getPublicBaseUrl() {
  const content = readJson("data/site-content.json");
  const configured = process.env.PUBLIC_SITE_URL || content.site?.url || "https://taiwanape.github.io/auntie-no-mad/";
  return configured.endsWith("/") ? configured : `${configured}/`;
}

function absoluteSiteUrl(relativePath) {
  return new URL(normalizePath(relativePath), getPublicBaseUrl()).href;
}

function missingCredentialsFor(platform) {
  if (platform === "facebook") {
    return [
      ["META_PAGE_ID", process.env.META_PAGE_ID],
      ["META_PAGE_ACCESS_TOKEN", process.env.META_PAGE_ACCESS_TOKEN]
    ]
      .filter(([, value]) => !value)
      .map(([name]) => name);
  }

  return [
    ["IG_USER_ID", process.env.IG_USER_ID],
    ["IG_ACCESS_TOKEN or META_PAGE_ACCESS_TOKEN", process.env.IG_ACCESS_TOKEN || process.env.META_PAGE_ACCESS_TOKEN]
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);
}

async function readGraphBody(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return { text };
  }
}

async function assertGraphOk(response, label) {
  const body = await readGraphBody(response);
  if (!response.ok) {
    throw new Error(`${label} failed: ${response.status} ${JSON.stringify(body)}`);
  }
  return body;
}

async function publishFacebookPhoto(post, imageUrl) {
  const params = new URLSearchParams({
    url: imageUrl,
    caption: post.text,
    published: "true",
    access_token: process.env.META_PAGE_ACCESS_TOKEN
  });

  const response = await fetch(`${graphBase}/${process.env.META_PAGE_ID}/photos`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: params
  });

  return assertGraphOk(response, "Facebook photo publish");
}

async function publishInstagramPhoto(post, imageUrl) {
  const accessToken = process.env.IG_ACCESS_TOKEN || process.env.META_PAGE_ACCESS_TOKEN;
  const createParams = new URLSearchParams({
    image_url: imageUrl,
    caption: post.text,
    access_token: accessToken
  });

  const createResponse = await fetch(`${graphBase}/${process.env.IG_USER_ID}/media`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: createParams
  });
  const container = await assertGraphOk(createResponse, "Instagram media container create");
  if (!container.id) throw new Error(`Instagram media container create returned no id: ${JSON.stringify(container)}`);

  const publishParams = new URLSearchParams({
    creation_id: container.id,
    access_token: accessToken
  });
  const publishResponse = await fetch(`${graphBase}/${process.env.IG_USER_ID}/media_publish`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: publishParams
  });

  return assertGraphOk(publishResponse, "Instagram media publish");
}

function platformsToRun() {
  const raw = process.env.META_PLATFORMS || "facebook,instagram";
  return raw
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean)
    .filter((value) => ["facebook", "instagram"].includes(value));
}

async function main() {
  const socialPosts = readJson("data/social-posts.json");
  const platforms = platformsToRun();
  const results = {
    ok: true,
    mode: shouldPost ? "post" : "dry-run",
    graphVersion,
    generatedAt: socialPosts.generatedAt,
    platforms: {}
  };

  for (const platform of platforms) {
    const post = socialPosts.posts?.[platform];
    const imagePath = assertReadyPost(platform, post);
    const imageUrl = absoluteSiteUrl(imagePath);
    const missing = missingCredentialsFor(platform);

    const platformResult = {
      sourceKind: post.sourceKind,
      sourceTitle: post.sourceTitle,
      sourceUrl: post.sourceUrl,
      landingUrl: post.url,
      imagePath,
      imageUrl,
      textLength: charLength(post.text)
    };

    if (missing.length) {
      platformResult.mode = "skip";
      platformResult.reason = `Missing Meta credentials: ${missing.join(", ")}`;
      results.platforms[platform] = platformResult;
      if (shouldPost && !allowSkip) {
        throw new Error(`${platform}: ${platformResult.reason}`);
      }
      continue;
    }

    if (!shouldPost) {
      platformResult.mode = "dry-run";
      results.platforms[platform] = platformResult;
      continue;
    }

    const published =
      platform === "facebook"
        ? await publishFacebookPhoto(post, imageUrl)
        : await publishInstagramPhoto(post, imageUrl);

    platformResult.mode = "posted";
    platformResult.response = published;
    results.platforms[platform] = platformResult;
  }

  const postedCount = Object.values(results.platforms).filter((item) => item.mode === "posted").length;
  const skippedCount = Object.values(results.platforms).filter((item) => item.mode === "skip").length;
  if (shouldPost && postedCount === 0 && skippedCount > 0) {
    results.ok = false;
    results.mode = "skip";
    results.reason = "No Meta platform was posted because credentials are missing.";
    if (!allowSkip) {
      throw new Error(results.reason);
    }
  }

  writeResult(results);
}

main().catch((error) => {
  writeResult({
    ok: false,
    mode: shouldPost ? "post" : "dry-run",
    error: error.message
  });
  process.exit(1);
});
