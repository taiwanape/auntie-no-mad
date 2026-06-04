import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const content = JSON.parse(fs.readFileSync(path.join(root, "data", "site-content.json"), "utf8"));

const legacyItems = [
  {
    title: "五月天大巨蛋搶票",
    date: "2026-05-26",
    category: "生活雷達",
    summary: "搶票不是買票，是手速、網路和情緒管理的聯合考。",
    slug: "radar/ticket-panic.html"
  },
  {
    title: "梅雨季與曬衣危機",
    date: "2026-05-26",
    category: "生活雷達",
    summary: "衣服不是沒乾，是在陽台修仙。",
    slug: "radar/plum-rain-laundry.html"
  },
  {
    title: "高鐵今天恢復正常：昨天的心臟還在候補。",
    date: "2026-05-26",
    category: "交通生活",
    summary: "通勤族出門前還是先看 App。",
    slug: "radar/2026-05-26-hsr-recovery.html"
  },
  {
    title: "全台熱到週四：薔蜜在旁邊排隊取號。",
    date: "2026-05-26",
    category: "天氣生活",
    summary: "高溫與熱帶系統，用阿姨口吻翻成生活提醒。",
    slug: "radar/2026-05-26-heat-jangmi.html"
  },
  {
    title: "台積電 AI 產能故事",
    date: "2026-05-26",
    category: "股市 ETF",
    summary: "AI 晶片、先進封裝與產能鍋夠不夠大。",
    slug: "stocks/2330-tsmc.html"
  },
  {
    title: "元大台灣50 基本故事",
    date: "2026-05-26",
    category: "ETF 基本功",
    summary: "買一包台灣前 50 大公司，但不是不會晃。",
    slug: "stocks/0050-taiwan50.html"
  },
  {
    title: "元大高股息 基本故事",
    date: "2026-05-26",
    category: "ETF 基本功",
    summary: "配息不是免費雞腿，除息後也要看價格。",
    slug: "stocks/0056-high-dividend.html"
  },
  {
    title: "國泰永續高股息 基本故事",
    date: "2026-05-26",
    category: "ETF 基本功",
    summary: "人氣很旺，但阿姨還是先看成分與風險。",
    slug: "stocks/00878-esg-dividend.html"
  }
];

const sections = [
  {
    id: "life",
    title: "生活雷達",
    label: "天氣、交通、民生、娛樂",
    intro: "跟日常直接有關的提醒先放這裡，出門、花錢、追活動前可以先翻一下。"
  },
  {
    id: "pitfalls",
    title: "踩坑日記",
    label: "詐騙、糾紛、安全提醒",
    intro: "容易讓人一時手快、心急或誤判的事件，阿姨都先收進這格。"
  },
  {
    id: "stocks",
    title: "股市 ETF",
    label: "市場筆記、個股觀察、ETF 基本功",
    intro: "股市內容只做教育整理，不是買賣建議。先看題材，再看風險。"
  },
  {
    id: "notes",
    title: "其他提醒",
    label: "便條紙與補充資料",
    intro: "不完全屬於前三類，但仍值得保存的阿姨碎念。"
  }
];

function htmlEscape(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeDate(value = "") {
  const date = new Date(`${String(value).slice(0, 10)}T00:00:00+08:00`);
  return Number.isNaN(date.getTime()) ? new Date(0) : date;
}

function displayDate(value = "") {
  return String(value).slice(0, 10).replaceAll("-", "/");
}

function localPageExists(slug = "") {
  return Boolean(slug) && !/^https?:\/\//.test(slug) && fs.existsSync(path.join(root, slug));
}

function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

function pagePrimaryImage(slug = "") {
  if (!localPageExists(slug)) return "";
  const html = fs.readFileSync(path.join(root, slug), "utf8");
  const images = [...html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => match[1])
    .filter((src) => src && !src.includes("${") && !/^data:/i.test(src) && !/^https?:\/\//i.test(src))
    .map((src) => {
      const cleanSrc = src.split("#")[0].split("?")[0];
      return normalizePath(path.normalize(path.join(path.dirname(slug), cleanSrc))).replace(/^\.\//, "");
    });
  return images.find((image) => !image.endsWith("assets/auntie-avatar-nav.jpg")) || "";
}

function isApprovedFallbackImage(image = "") {
  return /(^|-)approved(-|\.|$)/i.test(path.basename(image));
}

function isPublicArchiveReady(item = {}) {
  const image = pagePrimaryImage(item.slug);
  return !image || !isApprovedFallbackImage(image);
}

function classify(item = {}) {
  const haystack = `${item.slug || ""} ${item.category || ""} ${item.title || ""}`;
  if (/stories\//.test(haystack) || /踩坑|詐騙|糾紛|安全/.test(haystack)) return "pitfalls";
  if (/stocks\//.test(haystack) || /股市|ETF|熱門股|新星|高股息|台灣50/.test(haystack)) return "stocks";
  if (/radar\//.test(haystack) || /生活|天氣|交通|民生|娛樂|科技|地方|健康/.test(haystack)) return "life";
  return "notes";
}

function symbolFor(item = {}) {
  if (item.ticker) return item.ticker;
  if (/ETF|股市|高股息|台灣50/.test(item.category || item.title || "")) return "股市";
  if (/踩坑|詐騙|糾紛|安全/.test(item.category || item.title || "")) return "踩坑";
  if (/天氣|颱風|豪雨|高溫|梅雨/.test(item.category || item.title || "")) return "天氣";
  if (/交通|高鐵|捷運|通車/.test(item.category || item.title || "")) return "交通";
  return "生活";
}

function collectItems() {
  const rawItems = [
    ...(content.archive || []),
    ...(content.lifeRadar || []),
    ...(content.pitfalls || []),
    content.stockOverview,
    ...(content.stockWatchlist || []),
    ...(content.fridgeNotes || []),
    ...legacyItems
  ].filter(Boolean).filter((item) => localPageExists(item.slug)).filter(isPublicArchiveReady);

  const bySlug = new Map();
  rawItems.forEach((item) => {
    if (!bySlug.has(item.slug)) bySlug.set(item.slug, { ...item, group: classify(item) });
  });

  return [...bySlug.values()].sort((a, b) => {
    const dateDiff = normalizeDate(b.date) - normalizeDate(a.date);
    if (dateDiff) return dateDiff;
    return String(a.title || "").localeCompare(String(b.title || ""), "zh-Hant");
  });
}

function renderCard(item) {
  const summary = item.summary || item.auntieComment || item.reason || "阿姨先幫你收著，之後要回頭看比較好找。";
  return `<a class="archive-card" href="${htmlEscape(item.slug)}">
              <span class="symbol">${htmlEscape(symbolFor(item))}</span>
              <div class="archive-copy">
                <div class="meta"><span>${htmlEscape(item.category || "阿姨筆記")}</span><span>${htmlEscape(displayDate(item.date))}</span></div>
                <h3>${htmlEscape(item.title || item.name || "阿姨舊文")}</h3>
                <p>${htmlEscape(summary)}</p>
                <span class="read">讀文章</span>
              </div>
            </a>`;
}

const items = collectItems();
const grouped = Object.fromEntries(sections.map((section) => [section.id, items.filter((item) => item.group === section.id)]));
const visibleSections = sections.filter((section) => grouped[section.id].length > 0);
const total = items.length;

const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="阿姨別生氣舊文章庫：依生活雷達、踩坑日記、股市 ETF 分類保存舊文。">
  <title>舊文章庫｜阿姨別生氣</title>
  <link rel="icon" href="assets/auntie-avatar-nav.jpg">
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    :root { --yellow:#ffd51f; --pink:#ff6f97; --ink:#16130f; --paper:#fffdf1; --sky:#eaf5ff; --mint:#dff4e6; --line:4px solid var(--ink); --shadow:7px 7px 0 var(--ink); }
    body { margin:0; color:var(--ink); font-family:"Arial","Noto Sans TC",sans-serif; background:radial-gradient(circle at 1px 1px, rgba(22,19,15,.18) 1.6px, transparent 2px) 0 0 / 18px 18px, var(--yellow); }
    .shell { width:min(100% - 28px, 1080px); margin:0 auto; padding:28px 0 48px; }
    .top { display:flex; align-items:center; justify-content:space-between; gap:14px; margin-bottom:18px; }
    .brand,.back,.quick a { display:inline-flex; align-items:center; gap:10px; color:var(--ink); text-decoration:none; font-weight:1000; }
    .brand img { width:44px; height:44px; border:3px solid var(--ink); border-radius:50%; background:white; }
    .back,.quick a { padding:9px 13px; border:3px solid var(--ink); border-radius:999px; background:white; box-shadow:3px 3px 0 var(--ink); }
    .hero { margin-bottom:18px; padding:clamp(22px,5vw,44px); border:var(--line); border-radius:20px; background:var(--paper); box-shadow:var(--shadow); }
    .label { display:inline-flex; padding:6px 12px; border:3px solid var(--ink); border-radius:999px; background:var(--pink); color:white; font-size:14px; font-weight:1000; box-shadow:3px 3px 0 var(--ink); }
    h1 { margin:18px 0 12px; font-size:clamp(42px,8vw,76px); line-height:1.02; font-weight:1000; text-shadow:4px 4px 0 white,7px 7px 0 var(--ink); letter-spacing:0; }
    .deck { margin:0; max-width:760px; font-size:20px; line-height:1.55; font-weight:900; }
    .quick { display:flex; flex-wrap:wrap; gap:10px; margin:0 0 22px; }
    .quick a { background:var(--mint); }
    .archive-section { margin:0 0 28px; scroll-margin-top:18px; }
    .section-head { display:flex; align-items:flex-end; justify-content:space-between; gap:16px; margin:0 0 12px; }
    .section-head h2 { margin:0; font-size:clamp(32px,6vw,54px); line-height:1.05; font-weight:1000; text-shadow:3px 3px 0 white,5px 5px 0 var(--ink); }
    .section-head p { margin:6px 0 0; max-width:620px; font-size:17px; line-height:1.55; font-weight:900; }
    .count { flex:none; padding:6px 11px; border:3px solid var(--ink); border-radius:999px; background:var(--pink); color:white; font-size:14px; font-weight:1000; box-shadow:3px 3px 0 var(--ink); }
    .archive-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }
    .archive-card { display:grid; grid-template-columns:auto 1fr; gap:14px; align-items:start; min-height:152px; padding:16px; border:var(--line); border-radius:16px; background:var(--paper); box-shadow:5px 5px 0 var(--ink); color:var(--ink); text-decoration:none; }
    .symbol { min-width:72px; min-height:48px; display:inline-flex; align-items:center; justify-content:center; padding:8px 10px; border-radius:10px; background:var(--ink); color:white; font-size:15px; font-weight:1000; }
    .archive-copy { min-width:0; }
    .meta { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:7px; color:rgba(22,19,15,.68); font-size:13px; font-weight:1000; }
    .archive-card h3 { margin:0; font-size:20px; line-height:1.28; font-weight:1000; }
    .archive-card p { margin:7px 0 0; color:rgba(22,19,15,.72); font-weight:850; line-height:1.55; }
    .read { display:inline-flex; margin-top:10px; padding:5px 9px; border:2px solid var(--ink); border-radius:999px; background:var(--pink); color:white; font-size:12px; font-weight:1000; box-shadow:2px 2px 0 var(--ink); }
    .empty { padding:18px; border:3px dashed var(--ink); border-radius:16px; background:rgba(255,253,241,.7); font-weight:900; }
    @media (max-width:720px) { .top,.section-head { align-items:flex-start; flex-direction:column; } .hero { padding:22px 20px; } .back { width:100%; justify-content:center; } .quick { display:grid; grid-template-columns:1fr 1fr; } .quick a { justify-content:center; } .archive-grid { grid-template-columns:1fr; } .archive-card { grid-template-columns:1fr; } h1 { font-size:clamp(36px,11vw,46px); line-height:1.12; text-shadow:3px 3px 0 white,5px 5px 0 var(--ink); } .section-head h2 { font-size:clamp(34px,10vw,44px); } }
  </style>
</head>
<body>
  <div class="shell">
    <header class="top">
      <a class="brand" href="index.html"><img src="assets/auntie-avatar-nav.jpg" alt=""><span>阿姨別生氣</span></a>
      <a class="back" href="index.html">回首頁</a>
    </header>
    <section class="hero">
      <span class="label">舊文章庫 · ${total} 篇</span>
      <h1>分類收好，回頭比較不會迷路</h1>
      <p class="deck">生活雷達、踩坑日記、股市 ETF 分開放。想找天氣交通、社會提醒或市場筆記，不用在一鍋粥裡撈。</p>
    </section>
    <nav class="quick" aria-label="舊文章分類">
      ${visibleSections.map((section) => `<a href="#${section.id}">${htmlEscape(section.title)} · ${grouped[section.id].length}</a>`).join("\n      ")}
    </nav>
    <main>
      ${visibleSections.map((section) => {
        const sectionItems = grouped[section.id];
        return `<section class="archive-section" id="${section.id}" aria-labelledby="${section.id}Title">
          <div class="section-head">
            <div>
              <h2 id="${section.id}Title">${htmlEscape(section.title)}</h2>
              <p>${htmlEscape(section.intro)}</p>
            </div>
            <span class="count">${sectionItems.length} 篇</span>
          </div>
          ${sectionItems.length ? `<div class="archive-grid">
            ${sectionItems.map(renderCard).join("\n            ")}
          </div>` : `<div class="empty">這一區目前還沒有舊文。</div>`}
        </section>`;
      }).join("\n      ")}
    </main>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(root, "archive.html"), html, "utf8");
console.log(`Generated archive.html with ${total} categorized articles.`);
