# 阿姨別生氣專案穩定規格

更新日：2026-06-04

這份文件把目前網站後續維運的硬規則集中起來。之後修改網站、每日更新腳本、圖片生成、社群素材或 SEO 檔案時，以這份文件、`SITE_OPERATING_SPEC.md`、`VOICE_GUIDE.md`、`TAIWAN_TOP_SITES_BENCHMARK_2026.md` 為準。

## 1. 正式工作區

正式工作區固定為：

```powershell
C:\Users\taiwa\Documents\阿姨別生氣\website
```

舊資料夾 `C:\Users\taiwa\Documents\Temp\AuntieNoMad\` 只作為歷史參考，不再當成主要工作區。

## 2. 網站架構

網站是 GitHub Pages 靜態站：

- `index.html`：首頁與主要互動入口。
- `data/site-content.json`：首頁與今日內容的資料來源。
- `radar/`：生活雷達文章。
- `stories/`：踩坑日記文章。
- `stocks/`：股市 ETF 與個股觀察文章。
- `today.html`：今日入口頁。
- `links.html`：社群入口頁。
- `archive.html`：舊文章分類入口。
- `scripts/`：每日更新、SEO、社群文案、驗證與維運腳本。
- `.github/workflows/`：每日更新、即時新聞、Pages 部署與社群自動化。

## 3. 每日更新機制

主更新 workflow：`.github/workflows/daily-update.yml`

- 04:00、05:00、06:00 Asia/Taipei 分別嘗試更新。
- 每次產生生活雷達 2 則、踩坑日記 2 則、股市/ETF 4 則、股市總覽、冰箱便條紙。
- 每日主內容必須有文章頁、來源連結、SEO/OG/Twitter 預覽與首頁資料。
- 產生後必須通過 `npm test`、`npm run audit:images` 與 `npm run test:social-previews` 才能 commit / deploy。

即時新聞 workflow：`.github/workflows/live-news-update.yml`

- 07:17 到 23:47 Asia/Taipei，每約 30 分鐘更新。
- 只更新公開來源即時新聞，不生成 AI 圖。
- 沒有新內容時不 commit、不部署。

## 4. 圖片生成規則

每日主內容圖片必須符合：

- 使用當日新生成圖片，放在 `assets/generated/YYYY-MM-DD/`。
- 不得用舊圖複製後改檔名冒充新圖。
- 不得使用 `*-approved.*` 備援檔公開發布當日主內容。
- 預設輸出 JPEG，避免主頁過慢。
- 圖片需與文章主題直接對應。

自動驗證已檢查：

- 檔案存在。
- 不使用 SVG。
- 主內容圖片彼此 byte hash 不重複。
- 主內容圖片不能與舊資產 byte hash 相同。
- 主內容圖片不能使用 fallback/approved 檔名。
- 主內容圖片在文章日期資料夾。
- 主內容圖片解析度至少 1200x675。
- 主內容圖片比例適合文章 hero。
- 主內容圖片檔案大小需在合理範圍。

全站圖片稽核：

- `npm run audit:images` 會掃描所有公開 HTML 圖片引用。
- 今天的文章主圖若缺檔、使用 `*-approved.*`、不在當日資料夾，或與其他今日文章 byte hash 重複，必須失敗。
- 歷史舊文若仍使用早期 approved fallback，先列為追蹤警示，不可混同為今日更新合格。
- 歷史 approved fallback 頁在補新圖前，不可出現在 `archive.html`、`sitemap.xml`、RSS 或 JSON feed 這些主要入口。
- `npm run ops:health` 必須執行全站圖片稽核，讓每日健康檢查看得見圖片債務與今日發布門檻。

如果 OpenAI 圖片 API 失敗：

- 不發布不合格圖。
- 不用舊圖 fallback 直接公開更新。
- workflow 應失敗，保留昨天線上版本。
- 需修復 API/billing/金鑰後重新跑。

## 5. 內容規則

所有自動內容都要有：

- `title`
- `date`
- `category`
- `summary`
- `auntieComment`
- `sourceUrl`
- `slug`

股市內容另需有：

- `ticker`
- `reason`
- `riskLevel`
- `riskNote`
- `suitableFor`
- `notSuitableFor`
- `disclaimer`
- `sourceName`

禁止：

- 未附來源。
- 把不確定消息寫成結論。
- 股市使用買進、賣出、目標價、保證獲利等投資建議語氣。
- 圖文不符。
- 舊內容重複塞成新內容。

## 6. 資料來源

目前正式資料來源：

- 中央社 RSS：生活、社會、財經等公開新聞。
- 臺灣證券交易所公開資料。
- 官方/公開來源頁面，用於文章來源連結。

來源抓取失敗時：

- 不硬編。
- 可保留上一版正式資料。
- 失敗原因寫入報告或 workflow log。

## 7. 品牌與 UI 方向

核心體驗：

- 第一畫面要讓使用者立刻知道今天有什麼值得看。
- 文章入口要清楚：生活、踩坑、股市、舊文章。
- 內容要像阿姨白話整理，不像新聞機器。
- 版面可以活潑，但資訊層級要穩。

圖片角色固定：

- 捲髮、pixel 墨鏡、金耳環、豹紋上衣、黑色圍裙、粉紅愛心。
- 不要變年輕、變瘦、換髮型、換衣服或變成不同角色。

熱門網站借鏡轉化：

- Google 借鏡：首屏要像「今天該看什麼」的最快入口，標題與摘要要回答明確問題。
- YouTube 借鏡：主圖必須像縮圖一樣有主題、有記憶點，文章底部要能接著看。
- Facebook 借鏡：分享摩擦要低，每篇文章要有可複製、可丟群組的一句阿姨提醒。
- 詳細分析與不可照抄界線見 `docs/TAIWAN_TOP_SITES_BENCHMARK_2026.md`。

## 8. 必跑檢查

改任何正式內容後至少跑：

```powershell
npm test
npm run audit:images
npm run test:social-previews
```

改每日更新、自動化、社群或部署時，視情況加跑：

```powershell
npm run ops:health
npm run test:domain
npm run test:x-daily-post
npm run test:meta-post
```

推上線後檢查：

```powershell
gh run list --limit 5
```

## 9. 完成標準

一次更新只有在以下條件都成立時，才算可以上線：

- 內容來源存在。
- 今日文章頁可開。
- 主圖是當日新圖且通過驗證。
- 首頁、today、links、RSS、JSON feed、OG/Twitter 預覽同步。
- GitHub Pages deploy 成功。
- 線上資料不是舊 cache 或舊路徑。
