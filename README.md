# 阿姨別生氣網站

這是 `taiwanape/auntie-no-mad` 的 GitHub Pages 網站原始碼。

公開網址：

- GitHub Pages: https://taiwanape.github.io/auntie-no-mad/
- 自訂網域: http://auntienomad.com/

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
npm run ops:health
npm run test:domain
```

X API 相關檢查：

```powershell
npm run test:x-api
npm run test:x-profile
npm run test:x-queue
npm run test:x-readiness
```

## 主要內容資料

- `data/site-content.json`：首頁主要內容。
- `data/share-pack.json`：今日分享包。
- `data/social-posts.json`：FB / IG / X 文案草稿。
- `data/x-content-queue.json`：X 發文佇列。
- `data/review-report.json`：每日內容審核報告。

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

每日更新流程會：

1. 收集來源資料。
2. 更新 `data/site-content.json`。
3. 產生或保留符合品質標準的圖片。
4. 產生文章頁、SEO、RSS、JSON Feed、分享包與社群文案。
5. 執行 `npm test`。
6. 通過後 commit 並由 GitHub Pages 部署。

如果資料或圖片產生失敗，應保留前一天可用內容，不要讓首頁壞掉。

## SEO 與分享

由 `scripts/generate-seo.mjs` 產生：

- `sitemap.xml`
- `robots.txt`
- `rss.xml`
- `feed.json`
- `site.webmanifest`
- `llms.txt`

首頁與文章頁要保留正常的 title、description、OG tags、JSON-LD 與來源連結。

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

不要把任何 secret 寫進 repo。
