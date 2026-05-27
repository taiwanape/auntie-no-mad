import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const defaultText = [
  "今天出門三件事：",
  "",
  "水先喝，別跟太陽硬碰硬。",
  "傘先帶，天氣比群組還會變臉。",
  "訊息先別亂回，已讀不等於上班。",
  "",
  "阿姨不是都對，阿姨只是先幫你少煩一次。",
  "#阿姨別生氣 #生活雷達"
].join("\n");
const defaultImage = "social/x-trial-2026-05-28.png";

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

  const text = validateTweetText(process.env.X_POST_TEXT?.trim() || defaultText);
  const imagePath = process.env.X_POST_IMAGE?.trim() || defaultImage;

  console.log(
    JSON.stringify(
      {
        mode: shouldPost ? "post" : "dry-run",
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
