import crypto from "node:crypto";

const X_API_BASE = "https://api.x.com";

const expected = {
  username: "auntienomad",
  name: "阿姨別生氣",
  location: "台灣・熱搜現場",
  urlHost: "taiwanape.github.io",
  descriptionTerms: ["熱搜翻譯", "真人版阿姨", "尺度大一點", "腦袋也要在線"],
  bannedDescriptionTerms: ["好物推薦", "阿姨出清", "電商", "商品展示", "下單"]
};

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

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  const text = await response.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text.slice(0, 500);
  }
  if (!response.ok) {
    const error = new Error(`HTTP ${response.status} ${response.statusText}`);
    error.body = body;
    throw error;
  }
  return body;
}

function requireEnv() {
  const credentials = {
    apiKey: process.env.X_API_KEY,
    apiSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET
  };
  const missing = Object.entries(credentials)
    .filter(([, value]) => !value)
    .map(([key]) => key);
  if (missing.length) {
    throw new Error(`Missing X OAuth1 credentials: ${missing.join(", ")}`);
  }
  return credentials;
}

async function readProfile() {
  const credentials = requireEnv();
  const baseUrl = `${X_API_BASE}/1.1/account/verify_credentials.json`;
  const queryParams = {
    include_entities: "true",
    skip_status: "true"
  };
  const url = `${baseUrl}?${new URLSearchParams(queryParams).toString()}`;
  return fetchJson(url, {
    headers: {
      authorization: buildOAuth1Header("GET", baseUrl, queryParams, credentials),
      "user-agent": "auntie-no-mad-x-profile-audit/1.0"
    }
  });
}

function buildAudit(profile) {
  const expandedUrl = profile.entities?.url?.urls?.[0]?.expanded_url || profile.url || "";
  const checks = [
    {
      label: "username",
      ok: profile.screen_name === expected.username,
      actual: profile.screen_name
    },
    {
      label: "name",
      ok: profile.name === expected.name,
      actual: profile.name
    },
    {
      label: "location",
      ok: profile.location === expected.location,
      actual: profile.location
    },
    {
      label: "profile image",
      ok: Boolean(profile.profile_image_url_https),
      actual: Boolean(profile.profile_image_url_https)
    },
    {
      label: "profile banner",
      ok: Boolean(profile.profile_banner_url),
      actual: Boolean(profile.profile_banner_url)
    },
    {
      label: "profile url",
      ok: String(expandedUrl).includes(expected.urlHost),
      actual: expandedUrl
    },
    ...expected.descriptionTerms.map((term) => ({
      label: `bio includes ${term}`,
      ok: String(profile.description || "").includes(term),
      actual: profile.description || ""
    })),
    ...expected.bannedDescriptionTerms.map((term) => ({
      label: `bio avoids ${term}`,
      ok: !String(profile.description || "").includes(term),
      actual: profile.description || ""
    }))
  ];

  return {
    ok: checks.every((check) => check.ok),
    profile: {
      id: profile.id_str || profile.id,
      name: profile.name,
      username: profile.screen_name,
      description: profile.description,
      location: profile.location,
      url: profile.url,
      expandedUrl,
      followers: profile.followers_count,
      statuses: profile.statuses_count
    },
    checks
  };
}

readProfile()
  .then((profile) => {
    const audit = buildAudit(profile);
    console.log(JSON.stringify(audit, null, 2));
    if (!audit.ok) process.exit(1);
  })
  .catch((error) => {
    console.error(JSON.stringify({ ok: false, message: error.message, body: error.body }, null, 2));
    process.exit(1);
  });
