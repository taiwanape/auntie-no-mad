import crypto from "node:crypto";

const X_API_BASE = "https://api.x.com";

function oauthEncode(value) {
  return encodeURIComponent(String(value))
    .replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

function mask(value = "") {
  const text = String(value);
  if (text.length <= 8) return "********";
  return `${text.slice(0, 4)}...${text.slice(-4)}`;
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
  const signingKey = `${oauthEncode(credentials.apiSecret)}&${oauthEncode(credentials.accessTokenSecret)}`;
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

async function testOAuth2Bearer() {
  const token = process.env.X_BEARER_TOKEN;
  if (!token) return null;

  const body = await fetchJson(`${X_API_BASE}/2/users/me?user.fields=id,name,username`, {
    headers: {
      authorization: `Bearer ${token}`,
      "user-agent": "auntie-no-mad-x-smoke-test/1.0"
    }
  });

  return {
    mode: "oauth2-bearer",
    credential: mask(token),
    user: body.data
  };
}

async function testOAuth1UserContext() {
  const credentials = {
    apiKey: process.env.X_API_KEY,
    apiSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET
  };
  if (!Object.values(credentials).every(Boolean)) return null;

  const baseUrl = `${X_API_BASE}/1.1/account/verify_credentials.json`;
  const queryParams = {
    include_entities: "false",
    skip_status: "true"
  };
  const url = `${baseUrl}?${new URLSearchParams(queryParams).toString()}`;
  const body = await fetchJson(url, {
    headers: {
      authorization: buildOAuth1Header("GET", baseUrl, queryParams, credentials),
      "user-agent": "auntie-no-mad-x-smoke-test/1.0"
    }
  });

  return {
    mode: "oauth1-user-context",
    credential: mask(credentials.accessToken),
    user: {
      id: body.id_str || body.id,
      name: body.name,
      username: body.screen_name
    }
  };
}

async function run() {
  const tests = [
    ["OAuth2 bearer token", testOAuth2Bearer],
    ["OAuth1 user context", testOAuth1UserContext]
  ];
  const available = tests.filter(([, test]) => {
    if (test === testOAuth2Bearer) return Boolean(process.env.X_BEARER_TOKEN);
    return Boolean(process.env.X_API_KEY && process.env.X_API_SECRET && process.env.X_ACCESS_TOKEN && process.env.X_ACCESS_TOKEN_SECRET);
  });

  if (!available.length) {
    console.error("No X API credentials found.");
    console.error("Set either X_BEARER_TOKEN, or all four OAuth1 secrets: X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET.");
    process.exit(2);
  }

  const results = [];
  for (const [label, test] of available) {
    try {
      const result = await test();
      if (result) results.push({ ok: true, label, ...result });
    } catch (error) {
      results.push({ ok: false, label, message: error.message, body: error.body });
    }
  }

  console.log(JSON.stringify(results, null, 2));
  if (!results.some((result) => result.ok)) process.exit(1);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
