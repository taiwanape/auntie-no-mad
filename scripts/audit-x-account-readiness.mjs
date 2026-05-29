import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const X_API_BASE = "https://api.x.com";

const requiredProfile = {
  username: "auntienomad",
  name: "阿姨別生氣",
  location: "台灣・熱搜現場",
  bioTerms: ["熱搜翻譯", "真人版阿姨", "尺度大一點", "腦袋也要在線"],
  bannedBioTerms: ["好物推薦", "阿姨出清", "電商", "商品展示", "下單"]
};

const checks = [];

function addCheck(label, ok, evidence = {}) {
  checks.push({ label, ok: Boolean(ok), ...evidence });
}

function readText(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function readJson(relativePath) {
  return JSON.parse(readText(relativePath));
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function fileSize(relativePath) {
  return fs.statSync(path.join(root, relativePath)).size;
}

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function charLength(value = "") {
  return [...String(value)].length;
}

function oauthEncode(value) {
  return encodeURIComponent(String(value))
    .replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

function buildOAuth1Header(method, baseUrl, queryParams, credentials) {
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

function credentialsFromEnv() {
  return {
    apiKey: process.env.X_API_KEY,
    apiSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET
  };
}

async function fetchXProfile() {
  const credentials = credentialsFromEnv();
  const missing = Object.entries(credentials)
    .filter(([, value]) => !value)
    .map(([key]) => key);
  if (missing.length) {
    addCheck("X API credentials available", false, { missing });
    return null;
  }
  addCheck("X API credentials available", true, { mode: "oauth1-user-context" });

  const baseUrl = `${X_API_BASE}/1.1/account/verify_credentials.json`;
  const queryParams = {
    include_entities: "true",
    skip_status: "true"
  };
  const url = `${baseUrl}?${new URLSearchParams(queryParams).toString()}`;
  const response = await fetch(url, {
    headers: {
      authorization: buildOAuth1Header("GET", baseUrl, queryParams, credentials),
      "user-agent": "auntie-no-mad-readiness-audit/1.0"
    }
  });
  const body = await response.json().catch(async () => ({ text: await response.text() }));
  if (!response.ok) {
    addCheck("X API profile fetch", false, { status: response.status, body });
    return null;
  }
  addCheck("X API profile fetch", true, { id: body.id_str, username: body.screen_name });
  return body;
}

function auditProfile(profile) {
  if (!profile) return;
  const expandedUrl = profile.entities?.url?.urls?.[0]?.expanded_url || "";
  addCheck("X username is correct", profile.screen_name === requiredProfile.username, {
    actual: profile.screen_name
  });
  addCheck("X display name is correct", profile.name === requiredProfile.name, {
    actual: profile.name
  });
  addCheck("X location is positioned", profile.location === requiredProfile.location, {
    actual: profile.location
  });
  addCheck("X bio has real-person positioning", requiredProfile.bioTerms.every((term) => profile.description?.includes(term)), {
    actual: profile.description
  });
  addCheck("X bio avoids ecommerce language", requiredProfile.bannedBioTerms.every((term) => !profile.description?.includes(term)), {
    actual: profile.description
  });
  addCheck("X profile image is present", Boolean(profile.profile_image_url_https));
  addCheck("X profile banner is present", Boolean(profile.profile_banner_url));
  addCheck("X profile link points to site", /auntienomad\.com|taiwanape\.github\.io\/auntie-no-mad/.test(expandedUrl), {
    expandedUrl
  });
  addCheck("X has at least five posts", Number(profile.statuses_count || 0) >= 5, {
    statuses: profile.statuses_count
  });
}

function auditLocalFiles() {
  const queue = readJson("data/x-content-queue.json");
  const strategy = readText("docs/X_REAL_PERSON_CONTENT_STRATEGY.md");
  const workflow = readText(".github/workflows/x-daily-post.yml");
  const packageJson = readJson("package.json");

  const published = queue.entries.filter((entry) => entry.status === "published");
  const planned = queue.entries.filter((entry) => ["planned", "drafting", "ready"].includes(entry.status));
  const highSpice = queue.entries.filter((entry) => Number(entry.spiceLevel) >= 4);

  addCheck("Queue belongs to @auntienomad", queue.account === "@auntienomad", { account: queue.account });
  addCheck("Queue states sexy/intellectual/recognizable positioning", ["性感", "知性", "尺度", "辨識度"].every((term) => JSON.stringify(queue.positioning).includes(term)), {
    positioning: queue.positioning
  });
  addCheck("Queue has at least two published X examples", published.length >= 2, {
    published: published.map((entry) => entry.id)
  });
  addCheck("Queue has at least six future concepts", planned.length >= 6, {
    plannedCount: planned.length
  });
  addCheck("Queue includes bold higher-spice concepts", highSpice.length >= 3, {
    highSpice: highSpice.map((entry) => entry.id)
  });
  addCheck("Queue visual defaults forbid collage/ecommerce/explicit cheap framing", [
    "no collage",
    "no product display pose",
    "no hand-held product",
    "no nudity",
    "no explicit sex act",
    "no cheap lingerie"
  ].every((term) => queue.visualDefaults?.negativePrompt?.includes(term)), {
    negativePrompt: queue.visualDefaults?.negativePrompt
  });

  published.forEach((entry) => {
    const imagePath = normalizePath(entry.imagePath);
    const imageDir = path.dirname(imagePath);
    const sourceExists = fs.readdirSync(path.join(root, imageDir)).some((file) => file.includes("source"));
    addCheck(`Published entry ${entry.id} has X URL`, /^https:\/\/x\.com\/auntienomad\/status\/\d+/.test(entry.publishedUrl || ""), {
      publishedUrl: entry.publishedUrl
    });
    addCheck(`Published entry ${entry.id} has sourced news basis`, Boolean(entry.sourcePlan?.sourceUrl && entry.sourcePlan?.sourceName && entry.sourcePlan?.sourceDate), {
      sourcePlan: entry.sourcePlan
    });
    addCheck(`Published entry ${entry.id} has ready raster image`, exists(imagePath) && /\.(png|jpe?g|webp)$/i.test(imagePath) && fileSize(imagePath) > 100000, {
      imagePath,
      size: exists(imagePath) ? fileSize(imagePath) : 0
    });
    addCheck(`Published entry ${entry.id} keeps source image`, sourceExists, { imageDir });
    addCheck(`Published entry ${entry.id} X copy fits platform`, charLength(entry.copyDraft || "") <= 270, {
      length: charLength(entry.copyDraft || "")
    });
  });

  const profileAssets = [
    "social/x-profile-generated-20260529/x-profile-avatar-generated-20260529.jpg",
    "social/x-profile-generated-20260529/x-profile-cover-generated-20260529.jpg",
    "social/x-profile-generated-20260529/x-profile-generated-source-20260529.png"
  ];
  profileAssets.forEach((asset) => {
    addCheck(`Profile asset exists: ${asset}`, exists(asset) && fileSize(asset) > 50000, {
      size: exists(asset) ? fileSize(asset) : 0
    });
  });

  addCheck("Strategy defines real-person X direction", ["real-person", "smart, spicy, suggestive", "not an ecommerce channel", "Do not reuse the same pose"].every((term) => strategy.includes(term)));
  addCheck("Strategy defines tasteful adult boundaries", ["no nudity", "no explicit sex act", "cheap lingerie"].every((term) => strategy.includes(term)));
  addCheck("Strategy defines campaign queue gate", strategy.includes("data/x-content-queue.json") && strategy.includes("npm run test:x-queue"));
  addCheck("Scheduled X workflow checks queue before posting", workflow.includes("npm run test:x-queue"));
  addCheck("Scheduled X workflow audits profile before posting", workflow.includes("npm run test:x-profile"));
  addCheck("Scheduled X workflow posts through API script", workflow.includes("npm run post:x") && workflow.includes('POST_TO_X: "true"'));
  addCheck("Scheduled X workflow uses social post source", workflow.includes('X_POST_SOURCE: "social-posts"'));
  ["test:x-queue", "test:x-profile", "test:x-api", "post:x"].forEach((scriptName) => {
    addCheck(`package.json exposes ${scriptName}`, Boolean(packageJson.scripts?.[scriptName]), {
      command: packageJson.scripts?.[scriptName]
    });
  });
}

async function main() {
  auditLocalFiles();
  const profile = await fetchXProfile();
  auditProfile(profile);

  const summary = {
    ok: checks.every((check) => check.ok),
    checkedAt: new Date().toISOString(),
    totalChecks: checks.length,
    passedChecks: checks.filter((check) => check.ok).length,
    failedChecks: checks.filter((check) => !check.ok),
    checks
  };
  console.log(JSON.stringify(summary, null, 2));
  if (!summary.ok) process.exit(1);
}

main().catch((error) => {
  console.error(JSON.stringify({ ok: false, message: error.message, stack: error.stack }, null, 2));
  process.exit(1);
});
