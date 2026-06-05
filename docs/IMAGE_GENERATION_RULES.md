# 阿姨別生氣圖片生成規則

這份文件是給人看的規格；真正被程式引用的單一來源是 `scripts/image-style-rules.mjs`。每日圖片、歷史舊圖補圖、重複主圖重生，都必須使用同一份 style lock，並優先使用 `assets/brand/auntie-style-reference.jpg` 當角色與畫風參考圖。

## 為什麼以前會跑掉

圖片模型不是照稿排版工具。即使 prompt 寫得很長，它仍會用機率方式補細節，所以只靠「請畫成阿姨風格」不可能保證每天都穩。文字規則可以降低跑掉機率，但不足以鎖住人物與筆觸。

之前更大的問題是規則分散在多個腳本：

- `scripts/daily-update.mjs`
- `scripts/regenerate-image-debt.mjs`
- `scripts/regenerate-duplicate-image-debt.mjs`

只要其中一份 prompt 比較鬆、少寫人物限制、少寫禁止文字，生成結果就會開始偏掉。`auntie-style-v5` 已集中 prompt，但抽看仍偏平、偏 icon 化，所以 `auntie-reference-v6` 改成「參考圖 + 規則」。

## 現在的硬規則

所有公開主圖都必須先套用 `IMAGE_STYLE_RULE_VERSION` 目前版本的共用規則。現在版本是 `auntie-reference-v6`：

- 每次生成優先使用 `assets/brand/auntie-style-reference.jpg` 作為角色與畫風參考圖。
- 16:9 橫式網站文章封面，不做 logo、海報、資訊圖表、圖標拼貼或吉祥物徽章。
- 亮黃色 halftone 背景、粗黑線、白色 sticker cut 邊、桃紅點綴、奶油紙感、台灣生活漫畫感。
- 阿姨是第一眼主角：中年台灣阿姨、圓潤臉、深棕短捲髮、大捲度、黑色 pixel sunglasses、金色圈耳環、豹紋長袖、黑圍裙、小粉紅愛心。
- 不准改成人物設定：不能變年輕、變瘦、換髮型、換衣服、變成一般網紅、變成小 icon mascot。
- 不准裁掉頭、臉、墨鏡、手、圍裙愛心或關鍵道具。
- 文章主題必須用場景和物件表達，不靠文字說明。
- 絕對禁止任何可讀文字、假中文字、英文字、數字、股票代號、公司名、品牌名、logo、水印、標籤、招牌、對話框文字、收據文字、手機文字、圖表文字。
- 也避免貨幣符號、百分比、QR code 形狀、可讀警告標籤。
- 用空白圖示、形狀、箭頭、色點、抽象圖表、空白卡片、空白手機畫面替代文字。

## 生成失敗時的處理

公開每日更新不能拿舊圖或 fallback 圖假裝成功。如果 OpenAI 圖片 API、額度、billing 或生成流程失敗：

- 當天公開更新要失敗，不發布破圖或舊圖。
- 保留前一天穩定網站。
- 錯誤寫進 GitHub Actions log / `data/review-report.json`。

## 仍然不能保證的事

這套規則可以大幅降低跑掉機率，也能防止腳本繞過規則。`auntie-reference-v6` 已比純文字 prompt 更硬，因為生成時會帶參考圖；但模型仍不是逐像素模板，仍不能 100% 保證每張都完全貼近參考圖。

若之後還要更硬，可以再加第二層：

- 生成後用 vision 模型做風格審查，不合格就重生。
- 每日只發布通過人工或自動視覺審查的圖片。
