import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const defaultText = [
  "台北昨天 38.3°C，五月高溫紀錄直接被刷新。",
  "",
  "阿姨翻譯：天氣不是熱，是在烤人情緒。",
  "今天水先喝、傘先帶，冷氣別一口氣轉 18 度，電費也會生氣。",
  "",
  "來源：中央社",
  "https://www.cna.com.tw/news/ahel/202605270353.aspx",
  "#阿姨別生氣 #生活雷達"
].join("\n");
const defaultImage = "social/x-heat-2026-05-28.png";

const credentials = {
  apiKey: process.env.X_API_KEY,
  apiSecret: process.env.X_API_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET
};

function oauthEncode(value) {
  return encodeURIComponent(String(value)).replace(/[!'()*]/g, (char) =>
    `%${char.charCodeAt(0).toString(16).toUpperCase()}`
  );
}

function buildOAuth1Header(method, baseUrl, queryParams = {}) {
  const oauthParams = {
    oauth_consumer_key: credentials.apiKey,
    oauth_nonce: crypto.randomBytes(16).toString("hex"),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: credentials.accessToken,
    oauth_version: "1.0"
  };

  const signatureParams = { ...queryParams, ...oauthParams };
  const parameterString = Object.keys(signatureParams)
    .sort()
    .map((key) => `${oauthEncode(key)}=${oauthEncode(signatureParams[key])}`)
    .join("&");
  const signatureBase = [
    method.toUpperCase(),
    oauthEncode(baseUrl),
    oauthEncode(parameterString)
  ].join("&");
  const signingKey = `${oauthEncode(credentials.apiSecret)}&${oauthEncode(
    credentials.accessTokenSecret
  )}`;
  const signature = crypto
    .createHmac("sha1", signingKey)
    .update(signatureBase)
    .digest("base64");

  return `OAuth ${Object.entries({ ...oauthParams, oauth_signature: signature })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${oauthEncode(key)}="${oauthEncode(value)}"`)
    .join(", ")}`;
}

function assertCredentials() {
  const missing = Object.entries(credentials)
    .filter(([, value]) => !value)
    .map(([key]) => key);
  if (missing.length) {
    throw new Error(`Missing X credentials: ${missing.join(", ")}`);
  }
}

function validateTweetText(text) {
  const length = [...text].length;
  if (length > 270) {
    throw new Error(`Tweet text is too long: ${length} chars`);
  }
  return text;
}

function emitResult(result) {
  const output = JSON.stringify(result, null, 2);
  const resultPath = process.env.POST_X_RESULT_PATH;
  if (resultPath) {
    fs.mkdirSync(path.dirname(path.join(root, resultPath)), { recursive: true });
    fs.writeFileSync(path.join(root, resultPath), `${output}\n`, "utf8");
  }
  console.log(output);
}

function compact(text, maxLength) {
  const clean = String(text || "")
    .replace(/（中央社.*?）/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if ([...clean].length <= maxLength) return clean;
  return `${[...clean].slice(0, maxLength - 1).join("")}…`;
}

function normalizeAssetPath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function assertDailyPostImageReady(item, content, report) {
  const imagePath = normalizeAssetPath(item.hero || item.thumbnail || defaultImage);
  const absoluteImagePath = path.join(root, imagePath);
  const imageSource = (report.sources || []).find((source) => source.name === "OpenAI Images API");
  const approvedFallback = (report.sources || []).find(
    (source) => source.name === "Approved Auntie raster image library"
  );
  const imageExists = fs.existsSync(absoluteImagePath);
  const imageIsRaster = /\.(png|jpe?g|webp)$/i.test(imagePath);
  const generatedImageCount = Number(content.generatedImages?.length || 0);
  const openAiImagesReady = Boolean(imageSource?.ok && Number(imageSource.count || 0) > 0);
  const approvedFallbackReady = Boolean(approvedFallback?.ok && Number(approvedFallback.count || 0) > 0);

  if (report.status !== "approved") {
    return {
      ok: false,
      imagePath,
      reason: `Daily X post skipped because review report is ${report.status || "missing"}: ${(report.errors || []).join("; ") || "no errors recorded"}`
    };
  }

  if (!imageExists || !imageIsRaster) {
    return {
      ok: false,
      imagePath,
      reason: `Daily X post skipped because image is not a ready raster asset: ${imagePath}`
    };
  }

  if (openAiImagesReady || generatedImageCount > 0 || approvedFallbackReady) {
    return {
      ok: true,
      imagePath,
      source: openAiImagesReady ? "openai-images" : generatedImageCount > 0 ? "generated-images" : "approved-raster-fallback"
    };
  }

  return {
    ok: false,
    imagePath,
    reason: `Daily X post skipped because no approved image source is ready: ${(report.errors || []).join("; ") || imageSource?.error || "no generated image count"}`
  };
}

function buildTweetFromSocialPosts() {
  const socialPostsPath = path.join(root, "data", "social-posts.json");
  if (!fs.existsSync(socialPostsPath)) {
    throw new Error("data/social-posts.json not found. Run npm run generate:social-posts first.");
  }

  const socialPosts = JSON.parse(fs.readFileSync(socialPostsPath, "utf8"));
  const xPost = socialPosts.posts?.x;
  if (!xPost?.text || !xPost?.imagePath) {
    throw new Error("data/social-posts.json does not contain a ready X post with text and imagePath.");
  }

  let imageReadiness = { ok: true, imagePath: xPost.imagePath, source: "social-posts" };
  if (process.env.REQUIRE_DAILY_IMAGES === "true") {
    const contentPath = path.join(root, "data", "site-content.json");
    const reportPath = path.join(root, "data", "review-report.json");
    const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    imageReadiness = assertDailyPostImageReady({ hero: xPost.imagePath }, content, report);
    if (!imageReadiness.ok) {
      return {
        skip: true,
        reason: imageReadiness.reason,
        imagePath: imageReadiness.imagePath
      };
    }
  }

  return {
    text: validateTweetText(xPost.text),
    imagePath: imageReadiness.imagePath,
    sourceSlug: xPost.url || socialPosts.source?.primaryArticleUrl,
    imageSource: imageReadiness.source || "social-posts"
  };
}

function buildDailyTweetFromContent() {
  const contentPath = path.join(root, "data", "site-content.json");
  const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
  const item = content.lifeRadar?.[0] || content.pitfalls?.[0];
  if (!item) throw new Error("No daily lifeRadar or pitfalls content found.");

  let imageReadiness = { ok: true, imagePath: item.hero || item.thumbnail || defaultImage };
  if (process.env.REQUIRE_DAILY_IMAGES === "true") {
    const reportPath = path.join(root, "data", "review-report.json");
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    imageReadiness = assertDailyPostImageReady(item, content, report);
    if (!imageReadiness.ok) {
      return {
        skip: true,
        reason: imageReadiness.reason,
        imagePath: imageReadiness.imagePath
      };
    }
  }

  const categoryTag = item.category?.includes("踩坑") ? "#踩坑日記" : "#生活雷達";
  const sourceLabel = item.sourceName || "公開來源";
  const summary = compact(item.summary, 54);
  const auntieComment = compact(item.auntieComment || "先看來源，再決定要不要緊張。", 38);
  const text = [
    compact(item.title, 36),
    "",
    `阿姨翻譯：${auntieComment}`,
    `重點：${summary}`,
    "",
    `來源：${sourceLabel}`,
    item.sourceUrl || content.site?.url || "https://taiwanape.github.io/auntie-no-mad/",
    `#阿姨別生氣 ${categoryTag}`
  ].join("\n");

  return {
    text: validateTweetText(text),
    imagePath: imageReadiness.imagePath,
    sourceSlug: item.slug,
    imageSource: imageReadiness.source
  };
}

async function uploadMedia(imagePath) {
  const baseUrl = "https://upload.twitter.com/1.1/media/upload.json";
  const absolutePath = path.join(root, imagePath);
  if (!fs.existsSync(absolutePath)) throw new Error(`Image not found: ${imagePath}`);

  const form = new FormData();
  const bytes = fs.readFileSync(absolutePath);
  form.append("media", new Blob([bytes]), path.basename(imagePath));

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      authorization: buildOAuth1Header("POST", baseUrl),
      "user-agent": "auntie-no-mad-x-poster/1.0"
    },
    body: form
  });
  const body = await response.json().catch(async () => ({ text: await response.text() }));
  if (!response.ok) {
    throw new Error(`Media upload failed: ${response.status} ${JSON.stringify(body)}`);
  }
  return body.media_id_string;
}

async function createTweet(text, mediaId) {
  const baseUrl = "https://api.x.com/2/tweets";
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      authorization: buildOAuth1Header("POST", baseUrl),
      "content-type": "application/json",
      "user-agent": "auntie-no-mad-x-poster/1.0"
    },
    body: JSON.stringify({
      text,
      media: {
        media_ids: [mediaId]
      }
    })
  });
  const body = await response.json().catch(async () => ({ text: await response.text() }));
  if (!response.ok) {
    throw new Error(`Tweet creation failed: ${response.status} ${JSON.stringify(body)}`);
  }
  return body;
}

async function main() {
  const shouldPost = process.env.POST_TO_X === "true";
  if (shouldPost) assertCredentials();

  const dailyPost =
    process.env.X_POST_SOURCE === "social-posts"
      ? buildTweetFromSocialPosts()
      : process.env.X_POST_SOURCE === "daily-content"
        ? buildDailyTweetFromContent()
        : null;
  if (dailyPost?.skip) {
    emitResult({ mode: "skip", reason: dailyPost.reason });
    return;
  }
  const text = validateTweetText(process.env.X_POST_TEXT?.trim() || dailyPost?.text || defaultText);
  const imagePath = process.env.X_POST_IMAGE?.trim() || dailyPost?.imagePath || defaultImage;

  emitResult({
    mode: shouldPost ? "post" : "dry-run",
    source: process.env.X_POST_SOURCE || "manual-default",
    sourceSlug: dailyPost?.sourceSlug,
    imageSource: dailyPost?.imageSource,
    imagePath,
    text
  });

  if (!shouldPost) return;

  const mediaId = await uploadMedia(imagePath);
  const tweet = await createTweet(text, mediaId);
  emitResult({
    ok: true,
    tweetId: tweet.data?.id,
    text: tweet.data?.text,
    url: tweet.data?.id ? `https://x.com/auntienomad/status/${tweet.data.id}` : undefined,
    sourceSlug: dailyPost?.sourceSlug,
    imageSource: dailyPost?.imageSource,
    imagePath
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
