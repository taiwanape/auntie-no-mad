# 阿姨別生氣營運接手手冊

更新時間：2026-05-29

這份文件是 Codex 接手「阿姨別生氣」網站與 X 帳號後的日常維運準則。之後內容更新、排程調整、錯誤修正、部署發布與 X 發文，都以這份文件、`docs/SITE_OPERATING_SPEC.md`、`docs/GROWTH_PLAYBOOK.md`、`docs/VOICE_GUIDE.md` 為準。

## 責任範圍

Codex 負責：

- X 帳號 `@auntienomad` 的內容規劃、圖文製作、API 發文、壞貼文刪除與 profile 視覺維護。
- 網站 `auntie-no-mad` 的資料更新、前台顯示、後台腳本、驗證規則、SEO feed、部署流程與錯誤修正。
- GitHub Actions 排程、GitHub Secrets、X API、OpenAI 圖片生成與公開資料來源的健康檢查。
- 發現錯誤時先判斷是否會影響公開站或 X 帳號，再決定修復、回滾、刪文或保留舊資料。

不做：

- 不發布無來源的新聞、投資建議、醫療法律結論。
- 不用瀏覽器自動操作 X，除非使用者明確要求。
- 不把測試貼文、錯誤圖片、低品質拼貼或亂碼內容留在線上。
- 不把 API key、access token 或 GitHub secrets 寫入 git。

## 每日巡檢

每日 08:15 Asia/Taipei 進行營運巡檢。巡檢項目：

- `Daily Auntie Update` 最近一次是否成功。
- `Live News Update` 最近一次是否成功。
- `Deploy GitHub Pages` 最近一次是否成功。
- `X Daily Post` 最近一次是否成功或是否因品質條件跳過。
- 本機 `npm test` 是否通過。
- 本機 `npm run test:x-api` 是否能驗證 `@auntienomad`。
- `data/review-report.json` 是否為 `approved`，以及資料來源、圖片生成有沒有錯誤。
- 最新 X 貼文是否有文字與圖片媒體附件。

巡檢正常時，回報簡短健康狀態；巡檢異常時，列出錯誤、影響範圍、建議修復步驟與是否需要立即處理。

可重複執行的巡檢命令：

```powershell
npm run ops:health
```

GitHub Actions workflow：`.github/workflows/ops-health-check.yml`

- 08:15 Asia/Taipei 每日執行。
- 檢查本機內容驗證、公開首頁、主要 Actions、X API、profile 視覺與最新貼文。
- 若 `X Daily Post` workflow 綠燈但實際輸出 `mode: skip`，列為 warning，避免「有跑但沒發」被忽略。
- OpenAI 圖片額度失敗但合格 raster fallback 可用時，列為 warning；不把網站視為中斷。

## 內容更新規則

網站每日內容由 `scripts/daily-update.mjs` 產生，正式資料寫入 `data/site-content.json`。所有生活雷達、踩坑日記、股市 ETF 觀察都必須有公開來源。

X 貼文規則：

- 題材優先使用當日台灣生活新聞、社群熱門話題、詐騙警示、科技與投資踩坑、交通民生痛點。
- X 文字要短、有梗、有一句可轉貼的金句。
- 圖片要和貼文同一主題，不能拿舊圖硬套。
- 真人版 X 視覺必須延續角色設定：短深色捲髮、金色大圓耳環、豹紋外搭、黑色主體、粉紅愛心、知性且有吸引力。
- 不做電商廣告感，不做商品展示，不使用手拿商品或刻意賣貨姿勢。

## 發文與刪文

優先使用 API 腳本：

- 手動發文：`npm run post:x`
- 刪除貼文：`npm run delete:x-posts`
- X API 測試：`npm run test:x-api`

正式發文前必須先 dry-run，確認：

- 中文沒有亂碼。
- 圖片路徑存在。
- 貼文長度未超過限制。
- 來源 URL 正確。
- 圖片不是被使用者拒絕過的風格。

若公開後發現內容錯誤、圖片不合格、文字亂碼或方向不符合品牌，立即用 API 刪除，不讓錯誤貼文留在線上。

## 部署與版本控制

`website` 是正式 GitHub repo。所有會影響公開網站、排程、資料、驗證規則或正式社群素材的變更，都應納入 git。

目前需注意：

- `x-bot` 是本機工具資料夾，不是獨立 git repo。
- GitHub Actions 只從 `website` repo 執行。
- GitHub Secrets 已包含 X OAuth1 四件組與 OpenAI API key，但不得在 log 或文件中列出值。
- 本機 `.env.local` 只作本機 API 操作，不 commit。

部署流程：

1. 修改資料、腳本或素材。
2. 執行 `npm test`。
3. 必要時執行 `npm run test:x-api`。
4. 確認 git diff 只包含本次要發布的內容。
5. commit / push 到 GitHub。
6. 檢查 `Deploy GitHub Pages` 是否成功。

## 常見故障處理

OpenAI 圖片生成失敗：

- 檢查 `data/review-report.json` 的 `OpenAI Images API` 狀態。
- 若是 billing hard limit，保留文字更新，改用已審核 raster 圖庫，不用 SVG 或低品質備援。

X 發文失敗：

- 先跑 `npm run test:x-api`。
- 若 OAuth1 可讀帳號但發文失敗，檢查 app 權限、media upload、POST_TO_X 與圖片路徑。
- 不改用瀏覽器流程，除非使用者明確要求。

GitHub Actions 失敗：

- 先看失敗 workflow 的第一個紅色 step。
- 若是 validation failed，修正資料或圖片規則。
- 若是 push 衝突，先 pull/rebase 或檢查是否有排程同時更新。
- 若是 Pages 部署失敗，確認 artifact path、Pages environment 與權限。

網站內容錯誤：

- 若正式資料壞掉，優先恢復上一版 `data/site-content.json`。
- 若只是單篇文章錯字或來源錯誤，修正該 HTML 與 JSON metadata。
- 修正後必跑 `npm test` 和 `npm run generate:seo`。

## 品質底線

任何公開內容都必須同時符合：

- 有來源。
- 無亂碼。
- 圖文同題。
- 不違反投資建議限制。
- 不使用使用者明確拒絕過的視覺方向。
- 先驗證再發布。
