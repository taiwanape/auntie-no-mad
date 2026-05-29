# 阿姨別生氣 Codex 壓縮上下文

更新時間：2026-05-29

這份文件是「阿姨別生氣」目前唯一需要優先讀取的壓縮上下文。後續維護以這份文件、`docs/SITE_OPERATING_SPEC.md`、`docs/OPERATIONS_RUNBOOK.md`、`docs/VOICE_GUIDE.md`、`docs/GROWTH_PLAYBOOK.md` 為準。

## 角色與原則

- Codex 是本專案唯一總負責人，直接處理規劃、內容、程式、測試、部署、社群與錯誤修正。
- 不再使用外部代理或舊流程；不要依賴舊聊天脈絡做決策。
- 每次修改先保護現有網站可用性；完成後跑驗證，再回報狀態。
- 不把 API key、OAuth token、GitHub secrets、`.env` 內容寫入 git。
- 不發布無來源新聞、不確定投資結論、醫療法律結論或測試貼文。

## 專案位置

- 本機主資料夾：`C:\Users\taiwa\Documents\AuntieNoMad`
- 官網 repo：`C:\Users\taiwa\Documents\AuntieNoMad\website`
- GitHub repo：`taiwanape/auntie-no-mad`
- GitHub Pages：`https://taiwanape.github.io/auntie-no-mad/`
- 自訂網域：`auntienomad.com`
- 目前 HTTPS 狀態：自訂網域已綁定，但 GitHub Pages 憑證可能仍待簽發；用 `gh api repos/taiwanape/auntie-no-mad/pages` 檢查。

## 技術架構

- 靜態網站，主檔案為 `index.html`，使用 vanilla HTML / CSS / JavaScript。
- 不需要 bundler 或 build step。
- 主要內容資料：`data/site-content.json`
- 內容驗證：`scripts/validate-content.mjs`
- SEO 產生：`scripts/generate-seo.mjs`
- 每日內容更新：`scripts/daily-update.mjs`
- 即時新聞更新：`scripts/update-live-news.mjs`
- 營運健康檢查：`scripts/ops-health-check.mjs`

常用命令：

```powershell
cd C:\Users\taiwa\Documents\AuntieNoMad\website
npm test
npm run generate:seo
npm run update:live-news
npm run ops:health
```

## 主要內容區塊

- 即時新聞：`liveNews`，每天 07:00 到 23:30 台灣時間每 30 分鐘更新。
- 生活雷達：`lifeRadar`，每天 2 則生活新聞或民生資訊。
- 踩坑日記：`pitfalls`，每天 2 則詐騙、消費、交通、社群或生活踩坑提醒。
- 股市 ETF：`stockWatchlist`，每天 4 則，包含熱門股 A、熱門股 B、新星觀察股、風險題材或高人氣 ETF。
- 工具箱：`tools/`，之後可增加實用小工具。
- 好物推薦：保留為內容區，但不可變成硬推銷。
- 舊文章：`archive.html`，保留歷史資料入口。
- 冰箱便條紙：每日一句阿姨提醒。

## 自動更新排程

`Daily Auntie Update`：

- 檔案：`.github/workflows/daily-update.yml`
- 台灣時間 04:00 跑第一次，06:00 備援跑第二次。
- 手動觸發預設 dry-run；只有 `publish=true` 才會 commit 和部署。
- 更新生活雷達、踩坑日記、股市 ETF、冰箱便條紙、文章頁、SEO 與 feed。
- 若資料抓取或審核失敗，要保留舊資料，不讓首頁壞掉。

`Live News Update`：

- 檔案：`.github/workflows/live-news-update.yml`
- 台灣時間 07:00 到 23:30，每 30 分鐘更新一次。
- 僅更新 `data/site-content.json` 的 `liveNews`，有變更才 commit 和部署。

`Deploy GitHub Pages`：

- 檔案：`.github/workflows/pages.yml`
- push 到 `main` 後部署 GitHub Pages。

## 圖片品質規則

- 公開內容不可使用低品質 SVG、臨時 icon 拼貼、幼稚園風格圖或和內文不相干的圖。
- 公開內容圖片必須是高品質 raster 圖：`.jpg`、`.jpeg` 或 `.png`。
- `scripts/validate-content.mjs` 必須拒絕公開資料中的 `.svg` 圖片。
- 風格要接近目前網站主視覺：黃色底、粗黑線、白色貼紙邊、漫畫感、阿姨角色一致、生活場景有細節。
- 角色基準：短深色捲髮、金色大圓耳環、pixel 墨鏡、豹紋衣、黑色主體或圍裙、粉紅愛心，表情犀利但可愛。
- 詐騙或踩坑圖可以有少量清楚中文，例如「假客服」、「先別匯」、「不要點」，但不能有亂字或假中文。
- OpenAI Images API 若遇到額度或 billing 問題，使用已審核通過的高品質 raster fallback，並在報告中標記 warning；不要自動產生爛圖硬上。

## 股市 ETF 內容限制

- 可以提供公開資訊整理、風險觀察與白話解釋。
- 不可寫「買進」、「賣出」、「目標價」、「保證獲利」或任何報明牌語氣。
- 每檔要有 `ticker`、`name`、`type`、`reason`、`auntieComment`、`riskLevel`、`riskNote`、`suitableFor`、`notSuitableFor`、`disclaimer`、`sourceUrl`、`updatedAt`。
- 每篇與首頁區塊都要清楚顯示不是投資建議。

## 社群與 X

- X 帳號：`@auntienomad`
- X API secrets 已設定在 GitHub Secrets；不要印出或寫入 repo。
- X 相關 workflow：`x-daily-post.yml`、`x-api-smoke-test.yml`、`x-manual-post.yml`、`x-delete-posts.yml`。
- 發文要用 API 腳本，先做品質檢查。若貼文低品質、錯圖、亂碼或像測試文，要立刻刪除。
- FB / IG 若未設定正式 API，先以網站圖文與連結素材為主，不假裝已自動發布。

## 每日巡檢

每天早上檢查：

- `Daily Auntie Update` 是否成功。
- `Live News Update` 是否成功。
- `Deploy GitHub Pages` 是否成功。
- 公開 `data/site-content.json` 是否是當天資料。
- `lifeRadar` 2 則、`pitfalls` 2 則、`stockWatchlist` 4 則、`liveNews` 至少 3 則。
- 公開圖片路徑不可包含 `.svg`。
- `npm test` 必須通過。
- `auntienomad.com` HTTPS 憑證狀態若還沒好，只回報 GitHub 憑證待簽發，不亂改 DNS。

## 回報格式

回報給使用者時保持簡短、具體：

- 已完成什麼。
- 是否已部署到 GitHub。
- 測試是否通過。
- 若卡住，明確說明卡在哪裡、影響範圍和下一步。
