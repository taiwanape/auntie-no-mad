import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { publicSiteUrl } from "./public-site-url.mjs";

const root = process.cwd();
const repo = process.env.GITHUB_REPOSITORY || "taiwanape/auntie-no-mad";
const siteUrl = process.env.AUNTIE_SITE_URL || publicSiteUrl;
const coreWorkflows = [
  "Daily Auntie Update",
  "Live News Update",
  "Deploy GitHub Pages"
];
const socialWorkflows = [
  "X Daily Post",
  "Meta Daily Post"
];
const includeSocialHealth = process.env.OPS_HEALTH_INCLUDE_SOCIAL === "true";
const requiredWorkflows = includeSocialHealth ? [...coreWorkflows, ...socialWorkflows] : coreWorkflows;

const checks = [];
const warnings = [];
const errors = [];
const details = {};
const taipeiNow = new Date();
const taipeiDate = getTaipeiDate(taipeiNow);
const taipeiHour = Number(new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Taipei",
  hour: "2-digit",
  hour12: false
}).format(taipeiNow));
const taipeiDayStartMs = Date.parse(`${taipeiDate}T00:00:00+08:00`);

function addCheck(name, ok, message, meta = {}) {
  checks.push({ name, ok, message, ...meta });
  if (!ok) errors.push(`${name}: ${message}`);
}

function addWarning(message) {
  warnings.push(message);
}

function getTaipeiDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function localDatePart(value = "") {
  return String(value).match(/\d{4}-\d{2}-\d{2}/)?.[0] || "";
}

function addFreshnessCheck(name, ok, message) {
  if (ok) {
    addCheck(name, true, message);
    return;
  }
  if (taipeiHour >= 7) {
    addCheck(name, false, message);
  } else {
    addWarning(`${name}: ${message}; still before 07:00 Asia/Taipei grace window`);
  }
}

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function runNodeScript(script) {
  return spawnSync(process.execPath, [script], {
    cwd: root,
    encoding: "utf8",
    windowsHide: true
  });
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, name, rawValue] = match;
    if (process.env[name]) continue;
    let value = rawValue.trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[name] = value;
  }
  return true;
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

async function fetchJson(url, options = {}) {
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

async function checkLiveSite() {
  const response = await fetch(siteUrl, {
    headers: { "user-agent": "auntie-no-mad-ops-health/1.0" }
  });
  const html = await response.text();
  const ok = response.ok && html.includes("阿姨別生氣") && html.includes("即時新聞");
  details.liveSite = {
    status: response.status,
    length: html.length,
    hasBrand: html.includes("阿姨別生氣"),
    hasLiveNews: html.includes("即時新聞")
  };
  addCheck("live site", ok, ok ? `${response.status}, public homepage contains brand and live news` : `unexpected public homepage response ${response.status}`);
}

function checkLocalContent() {
  const result = runNodeScript("scripts/validate-content.mjs");
  addCheck(
    "content validation",
    result.status === 0,
    result.status === 0 ? "npm test validation passed" : (result.stderr || result.stdout || "validation failed").trim()
  );

  const imageAuditResult = runNodeScript("scripts/audit-site-images.mjs");
  let imageAudit = null;
  try {
    imageAudit = JSON.parse(imageAuditResult.stdout || "{}");
  } catch {
    imageAudit = null;
  }
  details.imageAudit = imageAudit || {
    parseError: true,
    stdout: imageAuditResult.stdout,
    stderr: imageAuditResult.stderr
  };
  addCheck(
    "site image audit",
    imageAuditResult.status === 0,
    imageAudit?.ok
      ? `${imageAudit.totals?.todayContentPages || 0} today pages checked; ${imageAudit.totals?.legacyApprovedPrimaryImages || 0} legacy approved images tracked`
      : (imageAuditResult.stderr || imageAuditResult.stdout || "site image audit failed").trim()
  );
  (imageAudit?.warnings || []).forEach((message) => addWarning(message));

  const imageDebtResult = spawnSync(process.execPath, ["scripts/write-image-debt-report.mjs", "--check"], {
    cwd: root,
    encoding: "utf8",
    windowsHide: true
  });
  const imageDebt = fs.existsSync(path.join(root, "data", "site-image-debt.json"))
    ? readJson("data/site-image-debt.json")
    : null;
  details.imageDebt = imageDebt ? {
    legacyApprovedPrimaryImages: imageDebt.summary?.legacyApprovedPrimaryImages,
    exposedLegacyApprovedPrimaryImages: imageDebt.summary?.exposedLegacyApprovedPrimaryImages,
    p0PromotedNeedsImmediateFix: imageDebt.summary?.p0PromotedNeedsImmediateFix,
    p1ArchiveDataHiddenUntilRegenerated: imageDebt.summary?.p1ArchiveDataHiddenUntilRegenerated,
    p2DirectOnlyBacklog: imageDebt.summary?.p2DirectOnlyBacklog
  } : { missing: true };
  addCheck(
    "image debt report",
    imageDebtResult.status === 0,
    imageDebtResult.status === 0
      ? `${imageDebt?.summary?.legacyApprovedPrimaryImages || 0} legacy image-debt items tracked; P0 ${imageDebt?.summary?.p0PromotedNeedsImmediateFix || 0}`
      : (imageDebtResult.stderr || imageDebtResult.stdout || "image debt report is out of sync").trim()
  );

  const duplicateImageDebtResult = spawnSync(process.execPath, ["scripts/write-duplicate-image-debt-report.mjs", "--check"], {
    cwd: root,
    encoding: "utf8",
    windowsHide: true
  });
  const duplicateImageDebt = fs.existsSync(path.join(root, "data", "site-duplicate-image-debt.json"))
    ? readJson("data/site-duplicate-image-debt.json")
    : null;
  details.duplicateImageDebt = duplicateImageDebt ? {
    historicalDuplicatePrimaryImageGroups: duplicateImageDebt.summary?.historicalDuplicatePrimaryImageGroups,
    pagesToRegenerate: duplicateImageDebt.summary?.pagesToRegenerate,
    p1PromotedOrArchivePages: duplicateImageDebt.summary?.p1PromotedOrArchivePages,
    p2DirectOnlyPages: duplicateImageDebt.summary?.p2DirectOnlyPages
  } : { missing: true };
  addCheck(
    "duplicate image debt report",
    duplicateImageDebtResult.status === 0,
    duplicateImageDebtResult.status === 0
      ? `${duplicateImageDebt?.summary?.historicalDuplicatePrimaryImageGroups || 0} duplicate image groups tracked; ${duplicateImageDebt?.summary?.pagesToRegenerate || 0} pages to regenerate`
      : (duplicateImageDebtResult.stderr || duplicateImageDebtResult.stdout || "duplicate image debt report is out of sync").trim()
  );

  const content = readJson("data/site-content.json");
  const report = readJson("data/review-report.json");
  details.content = {
    siteUpdatedAt: content.site?.updatedAt,
    expectedDate: taipeiDate,
    lifeRadar: content.lifeRadar?.length || 0,
    pitfalls: content.pitfalls?.length || 0,
    liveNews: content.liveNews?.length || 0,
    stockWatchlist: content.stockWatchlist?.length || 0
  };
  details.review = {
    date: report.date,
    generatedAt: report.generatedAt,
    status: report.status,
    errors: report.errors || []
  };

  addCheck("review report", report.status === "approved" && !(report.errors || []).length, `status ${report.status}`);
  addCheck("life radar count", (content.lifeRadar?.length || 0) >= 2, `${content.lifeRadar?.length || 0} items`);
  addCheck("pitfalls count", (content.pitfalls?.length || 0) >= 2, `${content.pitfalls?.length || 0} items`);
  addCheck("live news count", (content.liveNews?.length || 0) >= 3, `${content.liveNews?.length || 0} items`);
  addCheck("stock watchlist count", (content.stockWatchlist?.length || 0) === 4, `${content.stockWatchlist?.length || 0} items`);
  addFreshnessCheck(
    "daily content freshness",
    localDatePart(content.site?.updatedAt) === taipeiDate && report.date === taipeiDate,
    `expected ${taipeiDate}, siteUpdatedAt ${content.site?.updatedAt || "missing"}, review date ${report.date || "missing"}`
  );

  const imageSource = (report.sources || []).find((source) => source.name === "OpenAI Images API");
  const fallbackSource = (report.sources || []).find((source) => source.name === "Approved Auntie raster image library");
  const dailyUpdateWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "daily-update.yml"), "utf8");
  const publicFallbackDisabled =
    dailyUpdateWorkflow.includes('ALLOW_APPROVED_IMAGE_FALLBACK: "false"') &&
    dailyUpdateWorkflow.includes('FORCE_APPROVED_IMAGE_FALLBACK: "false"');
  details.imagePolicy = {
    openAiImagesOk: imageSource?.ok ?? null,
    approvedFallbackLibraryOk: fallbackSource?.ok ?? null,
    publicFallbackDisabled
  };
  if (imageSource && !imageSource.ok) {
    if (publicFallbackDisabled) {
      addWarning(`OpenAI Images API is not healthy (${imageSource.error || "unknown error"}); public daily workflow blocks approved fallback instead of publishing stale art.`);
    } else if (fallbackSource?.ok) {
      addWarning(`OpenAI Images API is not healthy (${imageSource.error || "unknown error"}); approved raster fallback library exists and must not be used for public daily content.`);
    } else {
      addCheck("image fallback", false, `OpenAI Images API failed and no approved raster fallback is healthy`);
    }
  }
}

function checkGitHubActions() {
  const ghBaseEnv = {
    ...process.env,
    GH_TOKEN: process.env.GH_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_TOKEN
  };

  function latestWorkflowRun(workflow) {
    const gh = spawnSync("gh", [
      "run",
      "list",
      "--repo",
      repo,
      "--workflow",
      workflow,
      "--limit",
      "1",
      "--json",
      "databaseId,workflowName,status,conclusion,createdAt,event,url,headBranch"
    ], {
      cwd: root,
      encoding: "utf8",
      windowsHide: true,
      env: ghBaseEnv
    });

    if (gh.status !== 0) {
      return { error: (gh.stderr || gh.stdout || "").trim() };
    }

    return { run: JSON.parse(gh.stdout)[0] || null };
  }

  details.actions = {};
  if (!includeSocialHealth) {
    details.optionalSocialWorkflows = socialWorkflows;
    addWarning("Social posting workflows are not part of core website health; set OPS_HEALTH_INCLUDE_SOCIAL=true to audit X and Meta as blocking checks.");
  }

  for (const workflow of requiredWorkflows) {
    const { run: latest, error } = latestWorkflowRun(workflow);
    if (error) {
      addWarning(`Unable to inspect GitHub Actions workflow ${workflow} with gh: ${error}`);
      details.actions[workflow] = null;
      continue;
    }

    details.actions[workflow] = latest || null;
    if (!latest) {
      addCheck(`workflow ${workflow}`, false, "no recent run found");
      continue;
    }
    const ok = latest.conclusion === "success" || latest.status === "in_progress" || latest.status === "queued";
    addCheck(`workflow ${workflow}`, ok, `${latest.status}/${latest.conclusion || "pending"} at ${latest.createdAt}`, { url: latest.url });

    if (workflow === "Daily Auntie Update") {
      const latestRunMs = latest.createdAt ? Date.parse(latest.createdAt) : 0;
      details.dailyWorkflowFreshness = {
        expectedDate: taipeiDate,
        latestCreatedAt: latest.createdAt,
        latestRunIsToday: latestRunMs >= taipeiDayStartMs
      };
      addFreshnessCheck(
        "daily workflow freshness",
        latestRunMs >= taipeiDayStartMs,
        `latest Daily Auntie Update is ${latest.createdAt || "missing"}, expected a run on ${taipeiDate} Asia/Taipei`
      );
    }

    if (workflow === "X Daily Post" && latest.conclusion === "success") {
      const view = spawnSync("gh", [
        "run",
        "view",
        String(latest.databaseId),
        "--repo",
        repo,
        "--log"
      ], {
        cwd: root,
        encoding: "utf8",
        windowsHide: true,
        env: ghBaseEnv
      });
      if (view.status === 0) {
        if (/"mode":\s*"skip"/.test(view.stdout) || /skipped/i.test(view.stdout)) {
          details.xDailyPostSkippedRun = latest;
        }
      } else {
        addWarning(`Unable to inspect X Daily Post log: ${(view.stderr || view.stdout || "").trim()}`);
      }
    }

    if (workflow === "Meta Daily Post" && latest.conclusion === "success") {
      const view = spawnSync("gh", [
        "run",
        "view",
        String(latest.databaseId),
        "--repo",
        repo,
        "--log"
      ], {
        cwd: root,
        encoding: "utf8",
        windowsHide: true,
        env: ghBaseEnv
      });
      if (view.status === 0) {
        if (/"mode":\s*"skip"/.test(view.stdout) || /skipped\s+-\s+Missing Meta credentials/i.test(view.stdout)) {
          details.metaDailyPostSkippedRun = latest;
        }
      } else {
        addWarning(`Unable to inspect Meta Daily Post log: ${(view.stderr || view.stdout || "").trim()}`);
      }
    }
  }
}

function finalizeXDailyPostWarning() {
  const skippedRun = details.xDailyPostSkippedRun;
  if (!skippedRun) return;

  const latestTweetAt = details.x?.latest?.createdAt ? Date.parse(details.x.latest.createdAt) : 0;
  const skippedRunAt = skippedRun.createdAt ? Date.parse(skippedRun.createdAt) : 0;
  if (latestTweetAt && skippedRunAt && latestTweetAt > skippedRunAt) {
    details.xDailyPostSkipResolvedByLatestTweet = true;
    return;
  }

  addWarning(`Latest X Daily Post workflow completed but skipped publishing: ${skippedRun.url}`);
}

function finalizeMetaDailyPostWarning() {
  const skippedRun = details.metaDailyPostSkippedRun;
  if (!skippedRun) return;

  addWarning(`Latest Meta Daily Post workflow completed but skipped FB/IG publishing: ${skippedRun.url}`);
}

async function checkXApi() {
  const loadedLocalEnv = loadEnvFile(process.env.AUNTIE_X_ENV_FILE || path.resolve(root, "..", "x-bot", ".env.local"));
  const credentials = {
    apiKey: process.env.X_API_KEY,
    apiSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET
  };
  const requireX = process.env.OPS_HEALTH_REQUIRE_X === "true";
  if (!includeSocialHealth && !requireX) {
    addWarning("X API audit skipped because social health is optional in this run.");
    return;
  }
  if (!Object.values(credentials).every(Boolean)) {
    const message = loadedLocalEnv ? "X credentials incomplete after loading local env" : "X credentials unavailable";
    if (requireX) addCheck("X API", false, message);
    else addWarning(message);
    return;
  }

  const verifyBase = "https://api.x.com/1.1/account/verify_credentials.json";
  const verifyQuery = { include_entities: "false", skip_status: "true" };
  const verifyUrl = `${verifyBase}?${new URLSearchParams(verifyQuery).toString()}`;
  const account = await fetchJson(verifyUrl, {
    headers: {
      authorization: buildOAuth1Header("GET", verifyBase, verifyQuery, credentials),
      "user-agent": "auntie-no-mad-ops-health/1.0"
    }
  });

  const userId = account.id_str || account.id;
  const timelineBase = `https://api.x.com/2/users/${userId}/tweets`;
  const timelineQuery = {
    max_results: "5",
    "tweet.fields": "created_at,attachments",
    expansions: "attachments.media_keys",
    "media.fields": "type,url,preview_image_url"
  };
  const timelineUrl = `${timelineBase}?${new URLSearchParams(timelineQuery).toString()}`;
  const timeline = await fetchJson(timelineUrl, {
    headers: {
      authorization: buildOAuth1Header("GET", timelineBase, timelineQuery, credentials),
      "user-agent": "auntie-no-mad-ops-health/1.0"
    }
  });

  const latest = timeline.data?.[0] || null;
  const media = timeline.includes?.media || [];
  details.x = {
    user: {
      id: userId,
      username: account.screen_name,
      name: account.name,
      profileImageUrlPresent: Boolean(account.profile_image_url_https),
      profileBannerUrlPresent: Boolean(account.profile_banner_url)
    },
    latest: latest ? {
      id: latest.id,
      createdAt: latest.created_at,
      mediaKeys: latest.attachments?.media_keys || [],
      url: `https://x.com/${account.screen_name}/status/${latest.id}`
    } : null,
    mediaTypes: media.map((item) => item.type)
  };

  addCheck("X API", account.screen_name === "auntienomad", `verified @${account.screen_name}`);
  addCheck("X profile visuals", Boolean(account.profile_image_url_https && account.profile_banner_url), "profile image/banner present");
  addCheck("latest X tweet", Boolean(latest), latest ? `${latest.id} at ${latest.created_at}` : "no latest tweet found");
  if (latest && !(latest.attachments?.media_keys || []).length) {
    addWarning(`Latest X tweet has no media attachment: https://x.com/${account.screen_name}/status/${latest.id}`);
  }
}

function markdownSummary() {
  const okCount = checks.filter((check) => check.ok).length;
  const failCount = checks.length - okCount;
  const lines = [
    "## 阿姨別生氣營運健康檢查",
    "",
    `狀態：${failCount ? "failed" : "healthy"}`,
    `通過：${okCount}/${checks.length}`,
    `警告：${warnings.length}`,
    "",
    "### Checks",
    ...checks.map((check) => `- ${check.ok ? "OK" : "FAIL"} ${check.name}: ${check.message}`),
    "",
    "### Warnings",
    ...(warnings.length ? warnings.map((warning) => `- ${warning}`) : ["- 無"]),
    "",
    "### Key Details",
    `- siteUpdatedAt: ${details.content?.siteUpdatedAt || "unknown"}`,
    `- review: ${details.review?.status || "unknown"} (${details.review?.date || "unknown date"})`,
    `- latest X: ${details.x?.latest?.url || "unknown"}`
  ];
  return `${lines.join("\n")}\n`;
}

async function main() {
  checkLocalContent();
  checkGitHubActions();
  await checkLiveSite();
  await checkXApi();
  finalizeXDailyPostWarning();
  finalizeMetaDailyPostWarning();

  const result = {
    ok: errors.length === 0,
    generatedAt: new Date().toISOString(),
    checks,
    warnings,
    errors,
    details
  };

  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdownSummary(), "utf8");
  }
  console.log(JSON.stringify(result, null, 2));
  if (errors.length) process.exit(1);
}

main().catch((error) => {
  console.error(JSON.stringify({
    ok: false,
    message: error.message,
    body: error.body
  }, null, 2));
  process.exit(1);
});
