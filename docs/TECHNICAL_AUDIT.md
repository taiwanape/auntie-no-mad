# 阿姨別生氣技術盤點報告

更新時間：2026-05-27

## 1. 目前專案架構

- `index.html`：首頁，包含主要 UI、內嵌 CSS、少量互動 JS。
- `radar/`：生活雷達文章頁。
- `stories/`：踩坑日記文章頁。
- `stocks/`：股市 ETF 與個股故事頁，`stock-story.css` 為部分股票頁共用樣式。
- `tools/`：工具箱頁，目前有單位換算。
- `assets/`：角色、文章主圖、縮圖與 OG 圖素材。
- `archive.html`：舊文章入口。
- `site-info.css` 與 `about.html`、`contact.html`、`privacy.html`、`disclaimer.html`、`copyright.html`：網站資訊頁。
- `.github/`：目前存在資料夾，但尚未建立正式 GitHub Actions workflow。

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

## 6. 可能問題

- 目前沒有正式 GitHub Actions workflow，無法保證 GitHub 端自動更新。
- 之前的本機自動化會產生內容但可能卡在 commit / push，造成「本機有、公開站沒有」。
- `README.md`、`archive.html`、`products.json` 內有部分亂碼，需逐步清理。
- `qa/` 截圖曾被 commit，應改成不追蹤的本機 QA 產物。
- 首頁資料仍有大量寫死內容，需要改成資料檔驅動。
- 股市內容需要固定審核，避免變成投資建議。
- SEO 檔案目前尚未完整：缺 `sitemap.xml`、`robots.txt`，部分頁面 OG 設定不足。

## 7. GitHub Pages 部署方式

- Repository：`taiwanape/auntie-no-mad`
- Branch：`main`
- Pages URL：`https://taiwanape.github.io/auntie-no-mad/`
- 目前由 GitHub Pages 直接部署靜態檔案，無 build step。

## 8. GitHub Actions 狀態

- `.github/` 資料夾存在。
- 尚未建立正式 workflow。
- 下一階段會新增 `.github/workflows/daily-update.yml`，支援排程與手動觸發。

## 9. 建議改造順序

1. 先讓首頁資料從 `data/site-content.json` 讀取，保留 HTML fallback。
2. 建立資料驗證與內容審核腳本。
3. 建立每日更新腳本，失敗時保留舊資料。
4. 建立 GitHub Actions workflow。
5. 補 sitemap、robots、JSON-LD 與社群分享 metadata。
6. 重寫 README 與維護文件。
7. 移除舊的本機交接文件與桌面排程依賴，改由 GitHub Actions 維護。

## 10. 第一個 PR / commit 建議修改

- 新增 `docs/TECHNICAL_AUDIT.md`。
- 新增 `data/site-content.json`。
- 修改 `index.html`：加入資料渲染與 fallback 防護。
- 後續小 commit 再加入 GitHub Actions、review report、SEO 與 README。
