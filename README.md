# 阿姨別生氣網站

這是 `taiwanape/auntie-no-mad` 的 GitHub Pages 網站原始碼。

公開網址：

- 主要網址: http://auntienomad.com/
- GitHub Pages 備援: https://taiwanape.github.io/auntie-no-mad/

> 自訂網域的 HTTPS 由 GitHub Pages 憑證簽發控制。若瀏覽器暫時顯示不安全，先跑 domain health check 確認狀態。

## 本機啟動

```powershell
cd C:\Users\taiwa\Documents\AuntieNoMad\website
python -m http.server 8098
```

打開：

```text
http://127.0.0.1:8098/
```

## 常用檢查

```powershell
npm test
npm run test:social-previews
npm run ops:health
npm run test:domain
```

X API 相關檢查：

```powershell
npm run test:x-api
npm run test:x-profile
npm run test:x-queue
npm run test:x-readiness
npm run test:x-daily-post
```

Meta / FB / IG 發文 dry-run：

```powershell
npm run test:meta-post
```

Meta secrets 快速貼入：

```powershell
powershell -ExecutionPolicy Bypass -File scripts\setup-meta-secrets.ps1
```

## 主要內容資料

- `data/site-content.json`：首頁主要內容。
- `data/share-pack.json`：今日分享包。
- `data/social-posts.json`：FB / IG / X 文案草稿。
- `data/x-content-queue.json`：X 發文佇列。
- `data/review-report.json`：每日內容審核報告。
- `today.html`：每日主打導流頁，適合放在社群簡介或貼文裡。

文章頁：

- `radar/`：生活雷達。
- `stories/`：踩坑日記。
- `stocks/`：股市 ETF。

## 每日自動更新

主要 workflow：

- `.github/workflows/daily-update.yml`
- `.github/workflows/live-news-update.yml`
- `.github/workflows/pages.yml`
- `.github/workflows/domain-health-check.yml`
- `.github/workflows/x-daily-post.yml`
- `.github/workflows/meta-daily-post.yml`
- `.github/workflows/ops-health-check.yml`

每日更新流程會：

1. 收集來源資料。
2. 更新 `data/site-content.json`。
3. 產生或保留符合品質標準的圖片。
4. 產生文章頁、SEO、RSS、JSON Feed、分享包與社群文案。
5. 執行 `npm test`。
6. 執行 `npm run test:social-previews`，確認首頁、今日頁、社群入口、分享包與文章頁都有可用的 OG / X 預覽圖、alt、canonical 與 UTM 分享連結。
7. 通過後 commit 並由 GitHub Pages 部署。

如果資料或圖片產生失敗，應保留前一天可用內容，不要讓首頁壞掉。

`ops-health-check.yml` 會在每日更新、社群發文與 Pages 部署後跑總巡檢：內容驗證、社群預覽稽核、X 發文素材 dry-run、Meta 發文素材 dry-run、自訂網域 HTTPS 狀態、GitHub Actions 最新執行狀態都會檢查一次。Meta token 尚未設定時，Meta dry-run 只會列出缺少的 secrets，不會亂發文。

07:00（Asia/Taipei）之後，`ops:health` 會把 `data/site-content.json` 與 `data/review-report.json` 的日期、以及 Daily Auntie Update 當天是否跑過列為硬性檢查，避免出現「workflow 綠燈但首頁還是昨天內容」的假安全。

## SEO 與分享

由 `scripts/generate-seo.mjs` 產生：

- `sitemap.xml`
- `robots.txt`
- `rss.xml`
- `feed.json`
- `site.webmanifest`
- `llms.txt`
- `today.html`

首頁與文章頁要保留正常的 title、description、OG tags、JSON-LD 與來源連結。

`scripts/audit-social-previews.mjs` 會檢查：

- `index.html`、`today.html`、`links.html`、`share.html` 與當日文章頁的 OG / X 預覽資料。
- 預覽圖必須存在、不可是 SVG、尺寸不能太小。
- 分享包至少 3 則要有可分享圖片。
- LINE / FB / X 連結必須回到本站並帶 UTM。

## 內容風格

- 白話、有梗、有用。
- 像阿姨提醒晚輩，犀利但不惡毒。
- 不要像新聞機器人。
- 不要無來源亂講。
- 股市內容只能做教育型觀察，不是買賣建議。

## 圖片品質

公開圖片要符合品牌質感：

- 黃色半色調背景。
- 粗黑線。
- 白色貼紙邊。
- 粉紅重點色。
- 阿姨角色表情要有戲。

不要發布低品質拼貼、幼稚圖示、亂字、假 UI、空洞 placeholder 或跟內文無關的圖。

## Secrets

GitHub Secrets 可能會用到：

- `OPENAI_API_KEY`
- `X_API_KEY`
- `X_API_SECRET`
- `X_ACCESS_TOKEN`
- `X_ACCESS_TOKEN_SECRET`
- `X_BEARER_TOKEN`
- `META_PAGE_ID`
- `META_PAGE_ACCESS_TOKEN`
- `IG_USER_ID`
- `IG_ACCESS_TOKEN`
- `META_GRAPH_VERSION`（可選，預設 `v23.0`）

不要把任何 secret 寫進 repo。

## FB / IG 自動發文

`Meta Daily Post` workflow 會在每日內容更新後，把 `data/social-posts.json` 的 Facebook / Instagram 文案與圖片發出去。

目前設計：

- FB 粉絲頁：用 `META_PAGE_ID` + `META_PAGE_ACCESS_TOKEN` 發圖文。
- IG：用 `IG_USER_ID` + `IG_ACCESS_TOKEN` 發單張圖文。
- 圖片來源必須是公開網址；workflow 會用 GitHub Pages 的圖片網址。
- 沒有 token 時 workflow 會安全略過並寫 summary，不會亂發或讓網站壞掉。
- token 有填但權限錯誤時會失敗，方便檢查 Meta 權限。

Meta App 權限通常需要：

- Facebook Page：`pages_show_list`、`pages_read_engagement`、`pages_manage_posts`
- Instagram：`instagram_basic`、`instagram_content_publish`

IG 帳號必須是專業帳號，且已連到同一個 Facebook 粉絲頁。

取得 Meta secrets 的標準流程：

1. 到 `https://developers.facebook.com/tools/explorer/` 打開 Graph API Explorer。
2. 選 AuntieNoMad 的 Meta App，產生 user token，勾上方列出的 Page / Instagram 權限。
3. 在查詢欄執行：

```text
/me/accounts?fields=id,name,access_token,instagram_business_account
```

4. 回傳中的 `id` 是 `META_PAGE_ID`，`access_token` 是 `META_PAGE_ACCESS_TOKEN`。
5. `instagram_business_account.id` 是 `IG_USER_ID`。初期測試時，`IG_ACCESS_TOKEN` 可以先使用同一組 Page access token。
6. 不要把 token 貼進聊天或 commit。用這個腳本貼進 GitHub Secrets：

```powershell
powershell -ExecutionPolicy Bypass -File scripts\setup-meta-secrets.ps1
```

## 社群導流入口頁

- `links.html` 是 IG 個人檔案、FB 粉專簡介、X 置頂貼文可放的入口頁。
- 每次每日更新與即時新聞更新都會執行 `npm run generate:links`。
- 入口頁會從 `data/share-pack.json` 讀取今日主打與最新圖文，不要手動硬改 `links.html`。
- 所有按鈕會帶 `utm_source=link_in_bio`，方便之後從流量工具追蹤社群導流效果。
- 若要本機重產：

```powershell
npm run generate:share-pack
npm run generate:social-posts
npm run generate:links
```
