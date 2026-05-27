import crypto from "node:crypto";

const X_API_BASE = "https://api.x.com";
const TWITTER_API_BASE = "https://api.twitter.com";

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
  if (missing.length) throw new Error(`Missing X credentials: ${missing.join(", ")}`);
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

async function verifyAccount() {
  const baseUrl = `${X_API_BASE}/1.1/account/verify_credentials.json`;
  const queryParams = { include_entities: "false", skip_status: "true" };
  const url = `${baseUrl}?${new URLSearchParams(queryParams).toString()}`;
  const body = await fetchJson(url, {
    headers: {
      authorization: buildOAuth1Header("GET", baseUrl, queryParams),
      "user-agent": "auntie-no-mad-x-cleanup/1.0"
    }
  });

  return {
    id: body.id_str || String(body.id),
    username: body.screen_name,
    name: body.name
  };
}

async function listTweetsV2(userId, maxResults) {
  const baseUrl = `${X_API_BASE}/2/users/${userId}/tweets`;
  const queryParams = {
    max_results: String(Math.min(Math.max(maxResults, 5), 100)),
    "tweet.fields": "created_at"
  };
  const url = `${baseUrl}?${new URLSearchParams(queryParams).toString()}`;
  const body = await fetchJson(url, {
    headers: {
      authorization: buildOAuth1Header("GET", baseUrl, queryParams),
      "user-agent": "auntie-no-mad-x-cleanup/1.0"
    }
  });
  return body.data || [];
}

async function listTweetsV1(username, maxResults) {
  const baseUrl = `${TWITTER_API_BASE}/1.1/statuses/user_timeline.json`;
  const queryParams = {
    screen_name: username,
    count: String(Math.min(Math.max(maxResults, 1), 200)),
    include_rts: "true",
    exclude_replies: "false",
    trim_user: "true"
  };
  const url = `${baseUrl}?${new URLSearchParams(queryParams).toString()}`;
  const body = await fetchJson(url, {
    headers: {
      authorization: buildOAuth1Header("GET", baseUrl, queryParams),
      "user-agent": "auntie-no-mad-x-cleanup/1.0"
    }
  });
  return body.map((tweet) => ({
    id: tweet.id_str || String(tweet.id),
    text: tweet.text,
    created_at: tweet.created_at
  }));
}

async function listRecentTweets(account, maxResults) {
  try {
    return await listTweetsV2(account.id, maxResults);
  } catch (error) {
    console.warn(`V2 timeline failed, trying v1.1 timeline: ${error.message}`);
    return listTweetsV1(account.username, maxResults);
  }
}

async function deleteTweetV2(tweetId) {
  const baseUrl = `${X_API_BASE}/2/tweets/${tweetId}`;
  return fetchJson(baseUrl, {
    method: "DELETE",
    headers: {
      authorization: buildOAuth1Header("DELETE", baseUrl),
      "user-agent": "auntie-no-mad-x-cleanup/1.0"
    }
  });
}

async function deleteTweetV1(tweetId) {
  const baseUrl = `${TWITTER_API_BASE}/1.1/statuses/destroy/${tweetId}.json`;
  const queryParams = { trim_user: "true" };
  const url = `${baseUrl}?${new URLSearchParams(queryParams).toString()}`;
  return fetchJson(url, {
    method: "POST",
    headers: {
      authorization: buildOAuth1Header("POST", baseUrl, queryParams),
      "user-agent": "auntie-no-mad-x-cleanup/1.0"
    }
  });
}

async function deleteTweet(tweetId) {
  try {
    return await deleteTweetV2(tweetId);
  } catch (error) {
    console.warn(`V2 delete failed for ${tweetId}, trying v1.1 destroy: ${error.message}`);
    return deleteTweetV1(tweetId);
  }
}

function unique(values) {
  return [...new Set(values.filter(Boolean).map(String))];
}

async function main() {
  assertCredentials();
  const shouldDelete = process.env.DELETE_FROM_X === "true";
  const maxResults = Number.parseInt(process.env.X_DELETE_MAX || "10", 10);
  const idsFromEnv = unique((process.env.X_DELETE_IDS || "").split(/[\s,]+/));
  const account = await verifyAccount();
  const tweets =
    idsFromEnv.length > 0
      ? idsFromEnv.map((id) => ({ id }))
      : await listRecentTweets(account, Number.isFinite(maxResults) ? maxResults : 10);
  const targets = tweets.slice(0, maxResults || tweets.length);

  console.log(
    JSON.stringify(
      {
        mode: shouldDelete ? "delete" : "dry-run",
        account,
        count: targets.length,
        targets: targets.map((tweet) => ({
          id: tweet.id,
          createdAt: tweet.created_at,
          text: tweet.text ? [...tweet.text].slice(0, 80).join("") : undefined
        }))
      },
      null,
      2
    )
  );

  if (!shouldDelete) return;

  const results = [];
  for (const tweet of targets) {
    const id = tweet.id;
    try {
      const body = await deleteTweet(id);
      results.push({ id, ok: true, body });
    } catch (error) {
      results.push({ id, ok: false, message: error.message, body: error.body });
    }
  }

  console.log(JSON.stringify({ deleted: results }, null, 2));
  if (results.some((result) => !result.ok)) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
