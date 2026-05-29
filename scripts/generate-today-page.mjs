import fs from "node:fs";
import path from "node:path";
import { publicImageUrl, publicSiteUrl as siteUrl } from "./public-site-url.mjs";

const root = process.cwd();
const sharePackPath = path.join(root, "data", "share-pack.json");
const socialPostsPath = path.join(root, "data", "social-posts.json");
const outputPath = path.join(root, "today.html");

const sharePack = JSON.parse(fs.readFileSync(sharePackPath, "utf8"));
const socialPosts = fs.existsSync(socialPostsPath)
  ? JSON.parse(fs.readFileSync(socialPostsPath, "utf8"))
  : {};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function absoluteUrl(href = "") {
  if (!href) return siteUrl;
  if (/^https?:\/\//.test(href)) return href;
  return new URL(href.replace(/^\//, ""), siteUrl).href;
}

function cleanText(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

function pickPrimary(items = []) {
  const priority = ["pitfall", "life-radar", "stock-watch", "live-news"];
  return priority
    .map((kind) => items.find((item) => item.kind === kind && item.articleUrl))
    .find(Boolean) || items[0];
}

function withUtm(href, source, campaign = "today_page") {
  const url = new URL(href);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", "social");
  url.searchParams.set("utm_campaign", campaign);
  return url.href;
}

function platformButtons({ url, title, description } = {}) {
  const lineUrl = withUtm(url, "line");
  const facebookUrl = withUtm(url, "facebook");
  const xUrl = withUtm(url, "x");
  const xText = `${title}\n${description}\n\n${xUrl}`;
  const links = {
    line: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(lineUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(facebookUrl)}`,
    x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(xText)}`
  };
  return [
    ["LINE", links.line],
    ["FB", links.facebook],
    ["X", links.x]
  ]
    .filter(([, href]) => href)
    .map(([label, href]) => `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");
}

const items = sharePack.items || [];
const primary = pickPrimary(items);

if (!primary) {
  throw new Error("No share-pack items available to generate today.html");
}

const title = `今日必看｜${cleanText(primary.title)}`;
const description = cleanText(primary.summary || "阿姨幫你把今天最值得看的生活新聞、踩坑提醒與股市觀察整理成人話。");
const articleUrl = primary.articleUrl || siteUrl;
const todayUrl = `${siteUrl}today.html`;
const imageUrl = publicImageUrl(primary.imagePath || "assets/auntie-hero.jpg");
const imageAlt = cleanText(primary.imageAlt || primary.title || "阿姨別生氣今日必看圖文");
const copyText = `${primary.title}\n${description}\n\n阿姨別生氣今日必看：${todayUrl}?utm_source=copy&utm_medium=social&utm_campaign=today_page`;
const nativeShareUrl = withUtm(todayUrl, "native", "today_page");
const nativeShareText = `阿姨別生氣幫你整理成人話：${description}`;
const xText = socialPosts.posts?.x?.text || copyText;
const todayPlatformButtons = platformButtons({ url: todayUrl, title: primary.title, description });

const relatedCards = items
  .filter((item) => item !== primary)
  .slice(0, 3)
  .map((item) => `
        <a class="mini-card" href="${escapeHtml(item.articleUrl || "#")}">
          <span>${escapeHtml(item.category || item.kind || "阿姨提醒")}</span>
          <strong>${escapeHtml(item.title || "今日提醒")}</strong>
          <small>${escapeHtml(item.summary || "點進去看阿姨整理。")}</small>
        </a>`)
  .join("");

const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${escapeHtml(todayUrl)}">
  <link rel="alternate" type="application/rss+xml" title="阿姨別生氣 RSS" href="${siteUrl}rss.xml">
  <link rel="alternate" type="application/feed+json" title="阿姨別生氣 JSON Feed" href="${siteUrl}feed.json">
  <link rel="manifest" href="site.webmanifest">
  <link rel="me" href="https://x.com/auntienomad">
  <link rel="me" href="https://www.instagram.com/auntienomad/">
  <link rel="me" href="https://www.facebook.com/profile.php?id=61553234457401">
  <meta property="og:site_name" content="阿姨別生氣">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(todayUrl)}">
  <meta property="og:image" content="${escapeHtml(imageUrl)}">
  <meta property="og:image:alt" content="${escapeHtml(imageAlt)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${escapeHtml(imageUrl)}">
  <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}">
  <link rel="icon" href="assets/auntie-avatar-nav.jpg">
  <link rel="stylesheet" href="site-info.css">
  <style>
    .today-hero {
      display: grid;
      grid-template-columns: minmax(0, .85fr) minmax(300px, 1.15fr);
      gap: 20px;
      align-items: stretch;
    }

    .today-image {
      width: 100%;
      height: 100%;
      min-height: 360px;
      object-fit: cover;
      border: var(--line);
      border-radius: 18px;
      background: var(--yellow);
      box-shadow: 6px 6px 0 var(--ink);
    }

    .today-copy {
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 22px;
      border: var(--line);
      border-radius: 18px;
      background: var(--paper);
      box-shadow: 6px 6px 0 var(--ink);
    }

    .today-copy h1 {
      margin: 0;
      font-size: clamp(32px, 4.2vw, 52px);
      line-height: 1.1;
      font-weight: 1000;
      overflow-wrap: anywhere;
    }

    .today-copy p {
      margin: 0;
      font-size: 20px;
      line-height: 1.55;
      font-weight: 900;
    }

    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: auto;
    }

    .button-row a,
    .button-row button {
      min-height: 44px;
      padding: 9px 14px 10px;
      border: 3px solid var(--ink);
      border-radius: 999px;
      background: white;
      color: var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
      font: inherit;
      font-weight: 1000;
      cursor: pointer;
      text-decoration: none;
    }

    .button-row .primary {
      background: var(--pink);
      color: white;
    }

    .mini-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      margin-top: 22px;
    }

    .mini-card {
      display: grid;
      gap: 8px;
      padding: 16px;
      border: var(--line);
      border-radius: 16px;
      background: var(--paper);
      box-shadow: 4px 4px 0 var(--ink);
      text-decoration: none;
      color: inherit;
    }

    .mini-card span {
      width: fit-content;
      padding: 4px 10px;
      border: 3px solid var(--ink);
      border-radius: 999px;
      background: var(--yellow);
      font-size: 13px;
      font-weight: 1000;
    }

    .mini-card strong {
      font-size: 22px;
      line-height: 1.18;
      font-weight: 1000;
    }

    .mini-card small {
      font-size: 15px;
      line-height: 1.45;
      font-weight: 850;
      color: rgba(22, 19, 15, .72);
    }

    @media (max-width: 820px) {
      .today-hero,
      .mini-grid {
        grid-template-columns: 1fr;
      }

      .today-image {
        min-height: 220px;
        aspect-ratio: 16 / 10;
      }

      .today-copy h1 {
        font-size: clamp(32px, 11vw, 44px);
        line-height: 1.12;
      }

      .button-row a,
      .button-row button {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="shell">
    <header class="top">
      <a class="brand" href="index.html"><img src="assets/auntie-avatar-nav.jpg" alt=""><span>阿姨別生氣</span></a>
      <a class="back" href="index.html">回首頁</a>
    </header>

    <main>
      <section class="today-hero" aria-labelledby="todayTitle">
        <img class="today-image" src="${escapeHtml(primary.imagePath || "assets/auntie-hero.jpg")}" alt="${escapeHtml(primary.imageAlt || primary.title)}">
        <div class="today-copy">
          <span class="label">今日必看</span>
          <h1 id="todayTitle">${escapeHtml(primary.title)}</h1>
          <p>${escapeHtml(description)}</p>
          <p class="notice">這頁每天跟著最新內容更新。想轉給朋友，貼這一頁就好，阿姨會自己換今日重點。</p>
          <div class="button-row">
            <a class="primary" href="${escapeHtml(articleUrl)}">看完整整理</a>
            <button type="button" data-native-share data-title="${escapeHtml(title)}" data-text="${escapeHtml(nativeShareText)}" data-url="${escapeHtml(nativeShareUrl)}">手機分享</button>
            <button type="button" data-copy="${escapeHtml(copyText)}">複製分享文</button>
            ${todayPlatformButtons}
          </div>
        </div>
      </section>

      <section class="card" style="margin-top: 26px;">
        <span class="label">順手再看</span>
        <h2>今天另外幾件阿姨也幫你整理好了</h2>
        <div class="mini-grid">${relatedCards}</div>
      </section>
    </main>

    <footer class="footer">阿姨別生氣・今日必看入口</footer>
  </div>

  <script>
    document.addEventListener("click", async (event) => {
      const nativeButton = event.target.closest("[data-native-share]");
      if (nativeButton) {
        const shareData = {
          title: nativeButton.dataset.title || document.title,
          text: nativeButton.dataset.text || "阿姨別生氣幫你整理成人話。",
          url: nativeButton.dataset.url || window.location.href
        };
        if (navigator.share) {
          await navigator.share(shareData).catch(() => {});
          return;
        }
        const original = nativeButton.textContent;
        try {
          await navigator.clipboard.writeText(\`\${shareData.title}\\n\${shareData.text}\\n\\n\${shareData.url}\`);
          nativeButton.textContent = "連結已複製";
        } catch {
          nativeButton.textContent = "複製失敗";
        }
        setTimeout(() => {
          nativeButton.textContent = original;
        }, 1400);
        return;
      }

      const button = event.target.closest("[data-copy]");
      if (!button) return;
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(button.dataset.copy || "");
        button.textContent = "已複製";
      } catch {
        button.textContent = "複製失敗";
      }
      setTimeout(() => {
        button.textContent = original;
      }, 1400);
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(outputPath, html, "utf8");
console.log(`Generated ${path.relative(root, outputPath)} for ${primary.kind}: ${primary.title}`);
