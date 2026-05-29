import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const summaryPath = process.env.GITHUB_STEP_SUMMARY;
const mode = process.env.SUMMARY_MODE || process.argv[2] || "daily";

function readJson(relativePath) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) return null;
  return JSON.parse(fs.readFileSync(fullPath, "utf8"));
}

function line(value = "") {
  return `${value}\n`;
}

function writeSummary(markdown) {
  if (summaryPath) {
    fs.appendFileSync(summaryPath, `${markdown}\n`, "utf8");
  }
  console.log(markdown);
}

function dailySummary() {
  const report = readJson("data/review-report.json");
  if (!report) {
    return [
      line("## 阿姨別生氣每日更新"),
      line("找不到 `data/review-report.json`，請回頭看前面步驟 log。")
    ].join("");
  }

  const statusIcon = report.status === "approved" ? "✅" : report.status === "rejected" ? "⛔" : "⚠️";
  const source = (report.sources || []).find((item) => item.name === "OpenAI Images API");
  const checks = (report.checks || []).map((item) => line(`- ${item}`)).join("");
  const errors = (report.errors || []).length
    ? (report.errors || []).map((item) => line(`- ${item}`)).join("")
    : line("- 無");
  const updated = (report.updatedSections || []).length ? report.updatedSections.join(", ") : "無，正式資料已保留舊版";
  const proposed = (report.proposedSections || []).length ? report.proposedSections.join(", ") : "未記錄";

  return [
    line("## 阿姨別生氣每日更新"),
    line(`**狀態：** ${statusIcon} ${report.status}`),
    line(`**日期：** ${report.date || "未記錄"}`),
    line(`**正式更新區塊：** ${updated}`),
    line(`**本次嘗試區塊：** ${proposed}`),
    line(`**圖片生成：** ${source ? `${source.count || 0} 張，模型 ${source.model || "未記錄"}，狀態 ${source.ok ? "ok" : "failed"}` : "未記錄"}`),
    line(""),
    line("### 檢查"),
    checks || line("- 未記錄"),
    line(""),
    line("### 錯誤 / 阻塞"),
    errors,
    line(""),
    line("### 下一步"),
    report.status === "rejected"
      ? line("OpenAI 圖片生成尚未成功，請先確認 OpenAI Platform Billing / Limits 是否解除 hard limit；解除後重新執行 `Daily Auntie Update`。")
      : line("內容已通過審核並更新。")
  ].join("");
}

function xSummary() {
  const resultPath = process.env.POST_X_RESULT_PATH || ".tmp/x-post-result.json";
  const result = readJson(resultPath);
  if (!result) {
    return [
      line("## 阿姨別生氣 X 發文"),
      line(`找不到發文結果檔 \`${resultPath}\`，請查看 \`Publish daily X post\` log。`)
    ].join("");
  }

  const status = result.ok ? "✅ posted" : result.mode === "skip" ? "⏭️ skipped" : result.mode || "unknown";
  return [
    line("## 阿姨別生氣 X 發文"),
    line(`**狀態：** ${status}`),
    result.reason ? line(`**原因：** ${result.reason}`) : "",
    result.url ? line(`**貼文：** ${result.url}`) : "",
    result.sourceSlug ? line(`**來源文章：** ${result.sourceSlug}`) : "",
    result.imagePath ? line(`**圖片：** ${result.imagePath}`) : ""
  ].join("");
}

function metaSummary() {
  const resultPath = process.env.POST_META_RESULT_PATH || ".tmp/meta-post-result.json";
  const result = readJson(resultPath);
  if (!result) {
    return [
      line("## 阿姨別生氣 Meta 發文"),
      line(`找不到結果檔 \`${resultPath}\`，請看 \`Publish Meta daily post\` log。`)
    ].join("");
  }

  const rows = Object.entries(result.platforms || {})
    .map(([platform, item]) => {
      const status = item.mode === "posted" ? "posted" : item.mode === "skip" ? "skipped" : "dry-run";
      const detail = item.response?.id || item.response?.post_id || item.reason || item.sourceTitle || "";
      return line(`- ${platform}: ${status}${detail ? ` - ${detail}` : ""}`);
    })
    .join("");

  return [
    line("## 阿姨別生氣 Meta 發文"),
    line(`**狀態** ${result.ok ? "ok" : "failed"} / ${result.mode || "unknown"}`),
    result.error ? line(`**錯誤** ${result.error}`) : "",
    result.reason ? line(`**原因** ${result.reason}`) : "",
    rows || line("- 沒有平台結果")
  ].join("");
}

writeSummary(mode === "x-post" ? xSummary() : mode === "meta-post" ? metaSummary() : dailySummary());
