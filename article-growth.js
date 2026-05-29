(() => {
  const SITE_BASE = "https://taiwanape.github.io/auntie-no-mad/";
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

  function render(currentItem, related) {
    const article = $("article");
    if (!article || $(".article-growth")) return;

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
