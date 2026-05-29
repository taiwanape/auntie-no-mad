import fs from "node:fs";

const repo = process.env.GITHUB_REPOSITORY || "taiwanape/auntie-no-mad";
const domain = process.env.AUNTIE_CUSTOM_DOMAIN || "auntienomad.com";
const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || "";
const shouldEnableHttps = process.env.ENABLE_PAGES_HTTPS === "true";
const strict = process.env.AUNTIE_DOMAIN_STRICT === "true";
const apiBase = "https://api.github.com";

function log(message) {
  console.log(`[domain-health] ${message}`);
}

function writeSummary(lines) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${lines.join("\n")}\n`, "utf8");
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 20000);
  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "user-agent": "auntie-no-mad-domain-health/1.0",
        ...(options.headers || {})
      }
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function probe(url) {
  try {
    const response = await fetchWithTimeout(url, { redirect: "follow" });
    const text = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      finalUrl: response.url,
      hasSite: text.includes("阿姨別生氣")
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message
    };
  }
}

async function githubApi(path, options = {}) {
  if (!token) return null;
  const response = await fetchWithTimeout(`${apiBase}${path}`, {
    ...options,
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "x-github-api-version": "2022-11-28",
      ...(options.headers || {})
    }
  });
  const body = await response.json().catch(async () => ({ text: await response.text() }));
  return { response, body };
}

async function getPagesState() {
  const result = await githubApi(`/repos/${repo}/pages`);
  if (!result) return null;
  return {
    ok: result.response.ok,
    status: result.response.status,
    body: result.body
  };
}

async function enableHttps() {
  const result = await githubApi(`/repos/${repo}/pages`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      build_type: "workflow",
      cname: domain,
      https_enforced: true
    })
  });
  if (!result) return null;
  return {
    ok: result.response.ok,
    status: result.response.status,
    body: result.body
  };
}

const http = await probe(`http://${domain}/`);
const https = await probe(`https://${domain}/`);
const pages = await getPagesState();

log(`HTTP ${http.status || "ERR"} ${http.finalUrl || http.error || ""}`);
log(`HTTPS ${https.status || "ERR"} ${https.finalUrl || https.error || ""}`);

if (pages?.ok) {
  log(`Pages cname=${pages.body.cname || ""} https_enforced=${Boolean(pages.body.https_enforced)} status=${pages.body.status || ""}`);
} else if (pages) {
  log(`Pages API failed: ${pages.status} ${JSON.stringify(pages.body)}`);
} else {
  log("Pages API skipped: no GitHub token available.");
}

let enableResult = null;
if (shouldEnableHttps && pages?.ok && !pages.body.https_enforced) {
  enableResult = await enableHttps();
  if (enableResult?.ok) {
    log("Requested GitHub Pages HTTPS enforcement successfully.");
  } else if (enableResult) {
    log(`HTTPS enforcement not ready: ${enableResult.status} ${JSON.stringify(enableResult.body)}`);
    if (enableResult.status === 403) {
      log("The current token can check Pages state but cannot update Pages settings. Add GH_PAGES_TOKEN with Pages write/admin permission to enable automatic HTTPS enforcement from Actions.");
    }
  }
}

const summary = [
  "## Auntie NoMad domain health",
  "",
  `- Domain: \`${domain}\``,
  `- HTTP: ${http.ok ? "ok" : "not ok"}${http.status ? ` (${http.status})` : ""}`,
  `- HTTPS: ${https.ok ? "ok" : "not ok"}${https.status ? ` (${https.status})` : ""}`,
  `- GitHub Pages HTTPS enforced: ${pages?.body ? String(Boolean(pages.body.https_enforced)) : "unknown"}`,
  enableResult ? `- HTTPS enable attempt: ${enableResult.ok ? "ok" : `not ready (${enableResult.status})`}` : "- HTTPS enable attempt: skipped",
  enableResult?.status === 403
    ? "- Note: set `GH_PAGES_TOKEN` with repository Pages write/admin permission if Actions should enforce HTTPS automatically."
    : ""
];
writeSummary(summary);

const failures = [];
if (!http.ok || !http.hasSite) failures.push(`HTTP probe failed or did not contain site content: ${JSON.stringify(http)}`);
if (strict && (!https.ok || !https.hasSite)) failures.push(`HTTPS probe failed: ${JSON.stringify(https)}`);
if (strict && pages?.body && !pages.body.https_enforced) failures.push("GitHub Pages HTTPS is not enforced yet.");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
