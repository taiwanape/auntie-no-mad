# 阿姨別生氣 Auntie No Mad

台灣生活情報與風險提醒網站。正式工作區：

```powershell
cd C:\Users\taiwa\Documents\阿姨別生氣\website
```

正式網站：

- http://auntienomad.com/
- GitHub Pages fallback: https://taiwanape.github.io/auntie-no-mad/

## 專案架構

- `data/site-content.json`：首頁、今日文章、股市觀察、即時新聞與舊文資料。
- `radar/`：生活雷達文章頁。
- `stories/`：踩坑日記文章頁。
- `stocks/`：股市 ETF 與個股觀察文章頁。
- `assets/generated/YYYY-MM-DD/`：每日文章主圖。
- `scripts/daily-update.mjs`：每日內容與主圖更新。
- `scripts/update-live-news.mjs`：即時新聞更新。
- `.github/workflows/daily-update.yml`：每天主更新。
- `.github/workflows/live-news-update.yml`：即時新聞更新。
- `.github/workflows/pages.yml`：push 到 `main` 後部署 GitHub Pages。
- `docs/`：品牌、內容、營運與技術規格。

## 本機檢查

使用 Codex bundled Node 或系統 Node 皆可；若系統 `node.exe` 被 Windows 擋住，使用：

```powershell
& 'C:\Users\taiwa\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' scripts/validate-content.mjs
```

常用檢查：

```powershell
npm test
npm run test:social-previews
npm run ops:health
npm run test:domain
```

本機預覽：

```powershell
python -m http.server 4177 --bind 127.0.0.1
```

打開：

```text
http://127.0.0.1:4177/
```

## 每日更新規則

- 每天 04:00、05:00、06:00 Asia/Taipei 由 GitHub Actions 嘗試更新。
- 內容必須有來源，不能硬掰。
- 每日主內容圖片必須是當日新生成、符合文章主題的 raster 圖。
- 不允許用舊圖改檔名冒充新圖。
- 不允許強制 fallback 舊圖公開發布。
- 如果 OpenAI 圖片 API 失敗，工作流程應失敗並保留昨天已上線版本，不應發布不合格圖片。
- 即時新聞每 30 分鐘更新，不使用 AI 圖片。

## 圖片底線

主內容圖片需符合：

- 阿姨角色固定：捲髮、pixel 墨鏡、金耳環、豹紋上衣、黑色圍裙、粉紅愛心。
- 亮黃半色調、粗黑線、白色貼紙邊、粉紅點綴。
- 與文章主題直接相關。
- 不出現亂碼、假中文、亂塞文字、水印、低品質 icon 拼貼。
- 檔案需在文章日期資料夾內，例如 `assets/generated/2026-06-04/...jpg`。

`npm test` 會檢查圖片日期、尺寸、檔案大小、是否重複舊圖、是否使用 fallback 檔名。

## 主要文件

- `docs/SITE_OPERATING_SPEC.md`
- `docs/VOICE_GUIDE.md`
- `docs/OPERATIONS_RUNBOOK.md`
- `docs/PROJECT_STABILITY_SPEC.md`
- `docs/TAIWAN_TOP_SITES_BENCHMARK_2026.md`

## 部署流程

```powershell
git status --short
npm test
npm run test:social-previews
git add <files>
git commit -m "<clear message>"
git push origin main
```

Push 後檢查 GitHub Pages：

```powershell
gh run list --limit 5
```
