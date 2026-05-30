(() => {
  const SITE_BASE = "http://auntienomad.com/";
  const currentPath = window.location.pathname.replace(/^\/auntie-no-mad\//, "");
  const isNestedPage = /\/(?:radar|stories|stocks)\//.test(window.location.pathname);
  const dataUrl = isNestedPage ? "../data/site-content.json" : "data/site-content.json";

  const $ = (selector) => document.querySelector(selector);

  function absoluteUrl(href = "") {
    if (!href || href === "#") return SITE_BASE;
    if (/^https?:\/\//.test(href)) return href;
    return new URL(href, SITE_BASE).href;
  }

  function withUtm(href, source, campaign = "article_share") {
    const url = new URL(absoluteUrl(href));
    url.searchParams.set("utm_source", source);
    url.searchParams.set("utm_medium", "social");
    url.searchParams.set("utm_campaign", campaign);
    return url.href;
  }

  function compact(text = "", maxLength = 72) {
    const clean = String(text).replace(/\s+/g, " ").trim();
    if ([...clean].length <= maxLength) return clean;
    return `${[...clean].slice(0, maxLength - 1).join("")}…`;
  }

  function normalizeSlug(slug = "") {
    return String(slug).replace(/^\.\.\//, "").replace(/^\//, "").replace(/^auntie-no-mad\//, "");
  }

  function currentSlug() {
    const canonical = $('link[rel="canonical"]')?.href || window.location.href;
    try {
      return normalizeSlug(new URL(canonical).pathname);
    } catch {
      return normalizeSlug(currentPath);
    }
  }

  function flattenContent(content = {}) {
    return [
      ...(content.lifeRadar || []).map((item) => ({ ...item, sectionLabel: "生活雷達" })),
      ...(content.pitfalls || []).map((item) => ({ ...item, sectionLabel: "踩坑日記" })),
      ...(content.stockWatchlist || []).map((item) => ({ ...item, sectionLabel: "股市 ETF" })),
      ...(content.stockOverview ? [{ ...content.stockOverview, sectionLabel: "今日市場筆記" }] : [])
    ].filter((item) => item.slug);
  }

  function buildShareText(title, summary, url) {
    return `${title}\n${compact(summary, 58)}\n\n阿姨別生氣幫你整理成人話：${url}`;
  }

  function injectStickyStyles() {
    if ($("#articleStickyStyles")) return;
    const style = document.createElement("style");
    style.id = "articleStickyStyles";
    style.textContent = `
      body.has-sticky-article-bar { padding-bottom: 88px; }
      .article-sticky-bar {
        position: fixed;
        left: 50%;
        bottom: 12px;
        z-index: 30;
        width: min(calc(100% - 24px), 760px);
        transform: translateX(-50%);
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        gap: 8px;
        align-items: center;
        padding: 10px;
        border: 4px solid var(--ink, #16130f);
        border-radius: 20px;
        background: rgba(255, 253, 241, .96);
        box-shadow: 0 8px 0 var(--ink, #16130f);
        backdrop-filter: blur(8px);
        opacity: 0;
        pointer-events: none;
        transform: translate(-50%, calc(100% + 24px));
        transition: opacity .18s ease, transform .18s ease;
      }
      .article-sticky-bar.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: translate(-50%, 0);
      }
      .article-sticky-bar strong {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 15px;
        font-weight: 1000;
      }
      .article-sticky-bar a,
      .article-sticky-bar button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 38px;
        padding: 8px 12px;
        border: 3px solid var(--ink, #16130f);
        border-radius: 999px;
        background: white;
        color: var(--ink, #16130f);
        box-shadow: 2px 2px 0 var(--ink, #16130f);
        font: inherit;
        font-size: 14px;
        font-weight: 1000;
        text-decoration: none;
        cursor: pointer;
      }
      .article-sticky-bar a:first-of-type {
        background: var(--pink, #ff6f97);
        color: white;
      }
      @media (max-width: 560px) {
        body.has-sticky-article-bar { padding-bottom: 150px; }
        .article-sticky-bar {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          bottom: 8px;
          border-radius: 16px;
        }
        .article-sticky-bar strong {
          grid-column: 1 / -1;
          white-space: normal;
          line-height: 1.25;
        }
        .article-sticky-bar a,
        .article-sticky-bar button {
          width: 100%;
          min-height: 42px;
          padding-inline: 8px;
          font-size: 13px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function renderStickyBar({ title, summary, nativeUrl, shareText, lineUrl } = {}) {
    if ($(".article-sticky-bar")) return;
    injectStickyStyles();
    document.body.classList.add("has-sticky-article-bar");
    const bar = document.createElement("aside");
    bar.className = "article-sticky-bar";
    bar.setAttribute("aria-label", "文章快速導流");
    bar.innerHTML = `
      <strong>${escapeHtml(compact(title || "阿姨別生氣今日重點", 30))}</strong>
      <a href="../today.html?utm_source=article_sticky&utm_medium=internal&utm_campaign=today_page">今日必看</a>
      <button type="button" data-native-share data-native-title="${escapeHtml(title || document.title)}" data-native-text="${escapeHtml(`阿姨別生氣幫你整理成人話：${compact(summary || "", 58)}`)}" data-native-url="${escapeHtml(nativeUrl || window.location.href)}">手機分享</button>
      <a href="${lineUrl || "../share.html?utm_source=article_sticky&utm_medium=internal&utm_campaign=share_pack"}" target="_blank" rel="noreferrer">LINE</a>
    `;
    document.body.appendChild(bar);
    const update = () => {
      const shouldShow = window.scrollY > Math.min(420, window.innerHeight * 0.55);
      bar.classList.toggle("is-visible", shouldShow);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function relatedItems(content, slug) {
    const items = flattenContent(content);
    const current = items.find((item) => normalizeSlug(item.slug) === slug);
    const candidates = items.filter((item) => normalizeSlug(item.slug) !== slug);
    const sameSection = current
      ? candidates.filter((item) => item.sectionLabel === current.sectionLabel)
      : [];
    const mixed = [...sameSection, ...candidates.filter((item) => !sameSection.includes(item))];
    return mixed.slice(0, 3);
  }

  function socialSourceLabel() {
    const params = new URLSearchParams(window.location.search);
    const source = String(params.get("utm_source") || "").toLowerCase();
    const referrer = String(document.referrer || "").toLowerCase();
    if (source.includes("line") || referrer.includes("line.me")) return "LINE";
    if (source.includes("facebook") || source === "fb" || referrer.includes("facebook.com")) return "FB";
    if (source === "x" || source.includes("x_daily") || referrer.includes("x.com") || referrer.includes("twitter.com")) return "X";
    if (source.includes("instagram") || referrer.includes("instagram.com")) return "IG";
    if (source.includes("link_in_bio")) return "社群入口";
    return "";
  }

  function renderSocialArrivalNudge(article) {
    if (!article || $(".social-arrival-nudge")) return;
    const source = socialSourceLabel();
    if (!source) return;

    const nudge = document.createElement("section");
    nudge.className = "article-growth social-arrival-nudge";
    nudge.innerHTML = `
      <div class="growth-actions" aria-label="社群來訪提示">
        <div>
          <strong>${escapeHtml(source)} 來的朋友，先別滑走</strong>
          <span>這篇先看完，等等回今日必看。阿姨每天早上整理生活雷達、踩坑日記、股市 ETF，不講官腔。</span>
        </div>
        <a href="../today.html?utm_source=article_arrival&utm_medium=internal&utm_campaign=today_page">今日必看</a>
        <a href="../daily-reminder.ics" download="auntie-no-mad-daily-reminder.ics">每天提醒</a>
        <a href="../share.html?utm_source=article_arrival&utm_medium=internal&utm_campaign=share_pack">分享包</a>
      </div>
    `;
    article.insertAdjacentElement("beforebegin", nudge);
  }

  function render(currentItem, related) {
    const article = $("article");
    if (!article) return;
    renderSocialArrivalNudge(article);
    if ($(".article-growth:not(.social-arrival-nudge)")) return;

    const title =
      currentItem?.title ||
      $("h1")?.textContent?.trim() ||
      document.title.replace("｜阿姨別生氣", "").trim();
    const summary =
      currentItem?.auntieComment ||
      currentItem?.summary ||
      $('meta[name="description"]')?.content ||
      "阿姨幫你把今天重點整理成人話。";
    const pageUrl = withUtm(currentItem?.slug || currentSlug(), "copy", "article_share");
    const nativeUrl = withUtm(currentItem?.slug || currentSlug(), "native", "article_share");
    const shareText = buildShareText(title, summary, pageUrl);
    const nativeShareText = `阿姨別生氣幫你整理成人話：${compact(summary, 58)}`;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(withUtm(currentItem?.slug || currentSlug(), "line", "article_share"))}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(withUtm(currentItem?.slug || currentSlug(), "facebook", "article_share"))}`;
    const xText = buildShareText(title, summary, withUtm(currentItem?.slug || currentSlug(), "x", "article_share"));
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(xText)}`;
    renderStickyBar({ title, summary, nativeUrl, shareText, lineUrl });

    const section = document.createElement("section");
    section.className = "article-growth";
    section.innerHTML = `
      <div class="growth-share" aria-label="文章分享">
        <div>
          <strong>覺得有用就丟給朋友</strong>
          <span>阿姨碎念不是拿來收藏的，是拿來少踩坑的。</span>
        </div>
        <button type="button" data-native-share data-native-title="${escapeHtml(title)}" data-native-text="${escapeHtml(nativeShareText)}" data-native-url="${escapeHtml(nativeUrl)}">手機分享</button>
        <button type="button" data-article-copy="${escapeHtml(shareText)}">複製分享文</button>
        <a href="${lineUrl}" target="_blank" rel="noreferrer">LINE</a>
        <a href="${facebookUrl}" target="_blank" rel="noreferrer">FB</a>
        <a href="${xUrl}" target="_blank" rel="noreferrer">X</a>
      </div>
      <div class="growth-related">
        <h2>接著看，別滑走</h2>
        <div class="related-grid">
          ${related.map((item) => `
            <a href="../${normalizeSlug(item.slug)}?utm_source=article_related&utm_medium=internal&utm_campaign=keep_reading">
              <span>${escapeHtml(item.sectionLabel)}</span>
              <strong>${escapeHtml(item.title)}</strong>
              <em>${escapeHtml(compact(item.auntieComment || item.summary, 42))}</em>
            </a>
          `).join("")}
          <a href="../index.html?utm_source=article_related&utm_medium=internal&utm_campaign=homepage">
            <span>回首頁</span>
            <strong>看今天全部重點</strong>
            <em>生活雷達、踩坑日記、股市 ETF 一次整理好。</em>
          </a>
        </div>
      </div>
      <div class="growth-return" aria-label="每日回訪提醒">
        <div>
          <span class="return-kicker">明天早上 7 點</span>
          <strong>阿姨再幫你把今天的亂七八糟翻成人話。</strong>
          <p>加個提醒，不用每天自己記。生活雷達、踩坑日記、股市 ETF，醒來先看一輪再出門。</p>
        </div>
        <div class="return-actions">
          <a href="../daily-reminder.ics" download="auntie-no-mad-daily-reminder.ics">加入每日提醒</a>
          <a href="../today.html?utm_source=article_return&utm_medium=internal&utm_campaign=today_page">明天固定看這頁</a>
          <a href="../links.html?utm_source=article_return&utm_medium=internal&utm_campaign=link_in_bio">社群入口</a>
        </div>
      </div>
      <div class="growth-actions" aria-label="站內導流">
        <div>
          <strong>今天還有什麼可以看？</strong>
          <span>別只看一篇就走，阿姨今天整理的重點都放好了。</span>
        </div>
        <a href="../index.html?utm_source=article_cta&utm_medium=internal&utm_campaign=today_all">看今日全部</a>
        <a href="../links.html?utm_source=article_cta&utm_medium=internal&utm_campaign=link_in_bio">社群入口</a>
        <a href="../share.html?utm_source=article_cta&utm_medium=internal&utm_campaign=share_pack">拿分享包</a>
        <a href="../index.html?utm_source=article_cta&utm_medium=internal&utm_campaign=live_news#live">看即時新聞</a>
      </div>
    `;
    article.insertAdjacentElement("afterend", section);
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  document.addEventListener("click", async (event) => {
    const nativeButton = event.target.closest("[data-native-share]");
    if (nativeButton) {
      const title = nativeButton.getAttribute("data-native-title") || document.title;
      const text = nativeButton.getAttribute("data-native-text") || "阿姨別生氣幫你整理成人話。";
      const url = nativeButton.getAttribute("data-native-url") || window.location.href;
      if (navigator.share) {
        await navigator.share({ title, text, url }).catch(() => {});
        return;
      }
      const original = nativeButton.textContent;
      await navigator.clipboard?.writeText(`${title}\n${text}\n\n${url}`);
      nativeButton.textContent = "連結已複製";
      setTimeout(() => {
        nativeButton.textContent = original || "手機分享";
      }, 1400);
      return;
    }

    const button = event.target.closest("[data-article-copy]");
    if (!button) return;
    const text = button.getAttribute("data-article-copy") || "";
    await navigator.clipboard?.writeText(text);
    const original = button.textContent;
    button.textContent = "已複製";
    setTimeout(() => {
      button.textContent = original || "複製分享文";
    }, 1400);
  });

  fetch(dataUrl)
    .then((response) => (response.ok ? response.json() : null))
    .then((content) => {
      const slug = currentSlug();
      const items = flattenContent(content || {});
      const current = items.find((item) => normalizeSlug(item.slug) === slug);
      render(current, relatedItems(content || {}, slug));
    })
    .catch(() => render(null, []));
})();
