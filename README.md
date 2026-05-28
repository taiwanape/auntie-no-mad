# 阿姨別生氣

阿姨別生氣是一個靜態 GitHub Pages 內容網站，主題包含生活雷達、踩坑日記、股市 ETF、工具箱、好物推薦與冰箱便條紙。

正式網站：

https://taiwanape.github.io/auntie-no-mad/

## 專案啟動

本專案不需要前端框架或 build step。可以直接用本機靜態伺服器預覽：

```powershell
python -m http.server 8098
```

開啟：

```text
http://127.0.0.1:8098/
```

## 測試

```powershell
npm test
```

測試會檢查：

- `data/site-content.json` 是否可解析
- 主要內容欄位是否存在
- 股市 ETF 是否有免責聲明
- 股市內容是否避開「買進、賣出、目標價、保證獲利」等投資建議語句
- 首頁 inline script 是否可解析
- 文章 slug 是否存在

## 內容資料位置

- 首頁主要資料：`data/site-content.json`
- 每日審核報告：`data/review-report.json`，由每日更新流程產生
- 生活雷達文章：`radar/`
- 踩坑日記文章：`stories/`
- 股市 ETF 文章：`stocks/`
- 工具箱：`tools/`
- 舊文章：`archive.html`

首頁會優先讀取 `data/site-content.json`。如果資料檔讀取失敗，會保留 HTML 裡的靜態 fallback 內容，避免首頁壞掉。

## 每日自動更新

GitHub Actions workflow：

```text
.github/workflows/daily-update.yml
```

排程：

- GitHub cron：`30 21 * * *`
- 對應台灣時間：每天 05:30
- 目標：每天早上 7 點前完成更新

流程：

1. 抓取公開 RSS / 公開市場資料
2. 產生候選內容
3. 使用 OpenAI Images API 產生每日圖文圖片
4. 圖片生成失敗時保留舊圖，不讓首頁壞掉
5. 執行內容審核
6. 通過才寫入 `data/site-content.json` 與文章頁
7. 產生 `sitemap.xml` 與 `robots.txt`
8. 執行 `npm test`
9. 有變更才自動 commit / push

## 手動觸發 GitHub Actions

到 GitHub repo：

```text
Actions → Daily Auntie Update → Run workflow
```

## Secrets

每日自動生成圖片需要 GitHub Secret：

- `OPENAI_API_KEY`：OpenAI API key，用於每日產生生活雷達、踩坑日記、股市 ETF 的文章圖。

可選設定：

- `OPENAI_IMAGE_MODEL`：預設由 workflow 設為 `gpt-image-1`
- `OPENAI_IMAGE_QUALITY`：預設 `medium`
- `OPENAI_IMAGE_SIZE`：預設 `1536x1024`
- `OPENAI_IMAGE_LIMIT`：預設每日最多 9 張

若 OpenAI API 失敗、額度不足、或帳號花費上限擋住，腳本會保留既有圖片並在 `data/review-report.json` 記錄原因。

## X API 測試

安全測試腳本：

```powershell
npm run test:x-api
```

這個測試只驗證 X API 憑證是否能讀取目前登入帳號，不會發文。

可用兩種設定方式擇一：

- OAuth2：`X_BEARER_TOKEN`
- OAuth1 user context：`X_API_KEY`、`X_API_SECRET`、`X_ACCESS_TOKEN`、`X_ACCESS_TOKEN_SECRET`

GitHub Actions 手動測試：

```text
Actions → X API Smoke Test → Run workflow
```

如果要之後自動發文，還需要另外確認 token 有寫入貼文與上傳圖片權限；目前 smoke test 不會公開發布任何內容。

## 更新失敗怎麼查

1. 到 GitHub Actions 查看 `Daily Auntie Update`
2. 看 `Generate daily content` 和 `Validate content`
3. 若內容審核不過，log 會列出原因
4. 若已產生 `data/review-report.json`，可查看最近一次審核摘要

失敗時不應覆蓋正式資料；首頁會保留舊內容。

## 新增生活雷達文章

1. 在 `radar/` 新增 HTML
2. 在 `data/site-content.json` 的 `lifeRadar` 新增資料
3. 至少包含：
   - `title`
   - `date`
   - `category`
   - `summary`
   - `auntieComment`
   - `sourceUrl`
   - `slug`

## 新增踩坑日記

1. 在 `stories/` 新增 HTML
2. 在 `data/site-content.json` 的 `pitfalls` 新增資料
3. 事件必須有來源，不要亂編

## 新增股市 ETF 觀察項目

在 `data/site-content.json` 的 `stockWatchlist` 新增或修改項目。

必要欄位：

- `ticker`
- `name`
- `type`
- `reason`
- `auntieComment`
- `riskLevel`
- `riskNote`
- `suitableFor`
- `notSuitableFor`
- `disclaimer`
- `sourceUrl`
- `updatedAt`

限制：

- 不寫買進
- 不寫賣出
- 不寫目標價
- 不寫保證獲利
- 不寫成報明牌
- 必須附投資風險提醒

## 修改阿姨語氣

完整語氣標準在 `docs/VOICE_GUIDE.md`。

主要在這些地方調整：

- `data/site-content.json`
- `scripts/daily-update.mjs`
- `index.html` 的 fallback 文案

語氣原則：

- 白話
- 有一點碎念
- 像阿姨提醒晚輩
- 犀利但不要惡毒
- 不要像投資老師
- 不要像新聞機器人

## 部署注意事項

GitHub Pages 從 `main` branch 直接部署。不要把大型暫存圖、測試截圖或本機工具輸出 commit 進 repo。

## 暫停自動更新

到 `.github/workflows/daily-update.yml` 移除或註解 `schedule` 區塊即可。保留 `workflow_dispatch` 仍可手動執行。

## 回復到昨天資料

使用 GitHub commit history：

```powershell
git log --oneline
git revert <commit>
git push origin main
```

若只要回復資料，優先還原：

```text
data/site-content.json
```

## 未來接 API

先從 `scripts/daily-update.mjs` 加資料來源。任何需要 key 的來源都要：

1. 使用 GitHub Secrets
2. 有 timeout
3. 有 fallback
4. 失敗時保留舊資料
