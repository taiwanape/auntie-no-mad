import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function fail(message) {
  console.error(message);
  process.exit(1);
}

function parseLastJson(stdout) {
  const blocks = String(stdout || "").match(/\{[\s\S]*?\n\}/g) || [];
  if (!blocks.length) return null;
  return JSON.parse(blocks.at(-1));
}

const result = spawnSync(process.execPath, ["scripts/post-x-manual.mjs"], {
  cwd: root,
  env: {
    ...process.env,
    POST_TO_X: "",
    X_POST_SOURCE: "social-posts",
    REQUIRE_DAILY_IMAGES: "true",
    FAIL_ON_SKIP: "true",
    POST_X_RESULT_PATH: ".tmp/x-daily-readiness-result.json"
  },
  encoding: "utf8"
});

if (result.status !== 0) {
  console.error(result.stdout);
  console.error(result.stderr);
  fail("X daily readiness dry-run failed.");
}

const payload = parseLastJson(result.stdout);
if (!payload) fail("X daily readiness dry-run did not emit JSON.");
if (payload.mode === "skip") fail(`X daily post would skip: ${payload.reason || "no reason"}`);
if (payload.mode !== "dry-run") fail(`Expected dry-run mode, got ${payload.mode || "missing"}.`);
if (!payload.text || [...payload.text].length > 270) {
  fail("X daily post text is missing or too long.");
}
if (!payload.imagePath) fail("X daily post imagePath is missing.");
if (/\.svg(?:[?#]|$)/i.test(payload.imagePath)) {
  fail(`X daily post must not use SVG image: ${payload.imagePath}`);
}
if (!/\.(png|jpe?g|webp)$/i.test(payload.imagePath)) {
  fail(`X daily post must use a raster image: ${payload.imagePath}`);
}
if (!fs.existsSync(path.join(root, payload.imagePath))) {
  fail(`X daily post image does not exist: ${payload.imagePath}`);
}
if (!["openai-images", "generated-images", "approved-raster-fallback"].includes(payload.imageSource)) {
  fail(`X daily post image source is not an approved daily source: ${payload.imageSource || "missing"}`);
}

console.log(
  JSON.stringify(
    {
      ok: true,
      mode: payload.mode,
      imageSource: payload.imageSource,
      imagePath: payload.imagePath,
      textLength: [...payload.text].length
    },
    null,
    2
  )
);
