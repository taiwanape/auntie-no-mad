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

function compact(text, maxLength) {
  const clean = String(text || "")
    .replace(/（中央社.*?）/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if ([...clean].length <= maxLength) return clean;
  return `${[...clean].slice(0, maxLength - 1).join("")}…`;
}

function buildDailyTweetFromContent() {
  const contentPath = path.join(root, "data", "site-content.json");
  const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
  if (process.env.REQUIRE_DAILY_IMAGES === "true") {
    const reportPath = path.join(root, "data", "review-report.json");
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    const imageSource = (report.sources || []).find((source) => source.name === "OpenAI Images API");
    if (!imageSource?.ok || Number(imageSource.count || 0) <= 0) {
      return {
        skip: true,
        reason: `Daily X post skipped because generated images are not ready: ${report.errors?.join("; ") || "no generated image count"}`
      };
    }
  }
  const item = content.lifeRadar?.[0] || content.pitfalls?.[0];
  if (!item) throw new Error("No daily lifeRadar or pitfalls content found.");

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
    imagePath: item.hero || item.thumbnail || defaultImage,
    sourceSlug: item.slug
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
    process.env.X_POST_SOURCE === "daily-content" ? buildDailyTweetFromContent() : null;
  if (dailyPost?.skip) {
    console.log(JSON.stringify({ mode: "skip", reason: dailyPost.reason }, null, 2));
    return;
  }
  const text = validateTweetText(process.env.X_POST_TEXT?.trim() || dailyPost?.text || defaultText);
  const imagePath = process.env.X_POST_IMAGE?.trim() || dailyPost?.imagePath || defaultImage;

  console.log(
    JSON.stringify(
      {
        mode: shouldPost ? "post" : "dry-run",
        source: process.env.X_POST_SOURCE || "manual-default",
        sourceSlug: dailyPost?.sourceSlug,
        imagePath,
        text
      },
      null,
      2
    )
  );

  if (!shouldPost) return;

  const mediaId = await uploadMedia(imagePath);
  const tweet = await createTweet(text, mediaId);
  console.log(
    JSON.stringify(
      {
        ok: true,
        tweetId: tweet.data?.id,
        text: tweet.data?.text,
        url: tweet.data?.id ? `https://x.com/auntienomad/status/${tweet.data.id}` : undefined
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
