# 阿姨別生氣技術盤點報告

更新時間：2026-06-04

## 1. 目前專案架構

- `index.html`：首頁，包含主要 UI、內嵌 CSS、少量互動 JS。
- `radar/`：生活雷達文章頁。
- `stories/`：踩坑日記文章頁。
- `stocks/`：股市 ETF 與個股故事頁，`stock-story.css` 為部分股票頁共用樣式。
- `tools/`：工具箱頁，目前有單位換算。
- `assets/`：角色、文章主圖、縮圖與 OG 圖素材。
- `archive.html`：舊文章入口。
- `site-info.css` 與 `about.html`、`contact.html`、`privacy.html`、`disclaimer.html`、`copyright.html`：網站資訊頁。
- `.github/workflows/`：已建立正式 GitHub Actions workflow，包含每日內容更新、即時新聞、GitHub Pages 部署、X API smoke test、X 每日發文、手動發文與刪文。

## 2. 使用技術棧

- 靜態 HTML / CSS / Vanilla JavaScript。
- GitHub Pages 靜態部署。
- 無 npm build、無框架、無 bundler。
- 少量外部服務：首頁來訪計數使用公開計數 endpoint，失敗時顯示 fallback。

## 3. 目前寫死的靜態資料

- 首頁生活雷達卡片。
- 首頁踩坑日記卡片。
- 股市 ETF 的全球雷達、今日觀察清單、ETF 懶人包、風險提醒。
- 工具箱入口與舊文章入口。
- 好物推薦。
- 冰箱便條紙。
- 舊文章列表。
- 部分文章頁 metadata、來源與內容。

## 4. 適合拆成資料檔的內容

- 首頁各區塊資料：適合放在 `data/site-content.json`。
- 每日文章 metadata：標題、日期、分類、摘要、阿姨碎念、來源、slug、圖像。
- 股市 ETF 今日觀察清單：適合用 JSON，欄位固定、方便審核。
- 舊文章索引：適合用 JSON，之後自動追加。
- SEO sitemap 資料：可從 JSON 與檔案列表產生。

## 5. 適合 GitHub Actions 自動更新的地方

- 每日更新 `data/site-content.json`。
- 產生或更新每日文章 HTML。
- 產生 `data/review-report.json` 或 markdown review report。
- 產生 `sitemap.xml` 與 `robots.txt`。
- 執行資料驗證與禁止詞檢查。
- 自動 commit / push。

## 6. 目前仍需注意的問題

- `README.md`、舊 bot 文件或歷史草稿中仍可能有早期亂碼，需逐步清理；正式 `data/site-content.json` 已有驗證阻擋亂碼。
- `qa/`、本機截圖與社群草稿應保持為本機 QA 產物，避免混入正式發布。
- X 真人版視覺已開始接入，但舊 cartoon 視覺仍是網站主體；之後要區分「網站卡通角色」與「X 真人角色」的使用邊界。
- 股市內容需要固定審核，避免變成投資建議。
- OpenAI 圖片 API 可能遇到 billing hard limit；公開每日更新已改為「新圖生成失敗就擋下 workflow」，不可用舊圖 fallback 冒充當日主圖。

## 7. GitHub Pages 部署方式

- Repository：`taiwanape/auntie-no-mad`
- Branch：`main`
- Primary URL：`http://auntienomad.com/`
- GitHub Pages fallback：`https://taiwanape.github.io/auntie-no-mad/`
- 目前由 GitHub Pages 直接部署靜態檔案，無 build step。

## 8. GitHub Actions 狀態

- `daily-update.yml`：每天 04:00、05:00、06:00 Asia/Taipei 更新主要內容。
- `live-news-update.yml`：每天 07:00 到 23:30 Asia/Taipei 每 30 分鐘刷新即時新聞。
- `pages.yml`：push 到 `main` 後部署 GitHub Pages。
- `x-daily-post.yml`：每天 06:45 Asia/Taipei 以 API 發布每日 X 貼文。
- `x-api-smoke-test.yml`：手動驗證 X API credentials。
- `x-manual-post.yml`：手動 API 發文。
- `x-delete-posts.yml`：手動 API 刪文。

## 9. 目前維運順序

1. 每日巡檢 Actions、`npm test`、X API、`data/review-report.json`。
2. 優先修正會影響公開首頁、資料來源、X 發文或 Pages 部署的錯誤。
3. 維持內容資料由 `data/site-content.json` 驅動，SEO 檔案由 `scripts/generate-seo.mjs` 產生。
4. X 發文走 API 腳本，不使用瀏覽器模式。
5. 新增正式社群素材時納入 git；測試截圖、失敗草稿與 secrets 不納入 git。
6. 逐步清理舊文件亂碼與過時說明。

## 10. 維運狀態

- 本機 `npm test`：2026-06-04 通過。
- 本機 `npm run test:x-api`：2026-05-29 通過，確認帳號 `@auntienomad`。
- GitHub workflows：2026-05-29 查詢時主要 workflow 皆為 active，近期 run 皆為 success。
- 另見 `docs/CODEX_PROJECT_CONTEXT.md` 與 `docs/OPERATIONS_RUNBOOK.md` 作為日常維護依據。
