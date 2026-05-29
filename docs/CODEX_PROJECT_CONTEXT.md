# Auntie NoMad Codex Context

Updated: 2026-05-29

This is the short working context for the Auntie NoMad project. Use this file plus the current repo files as the source of truth. Do not load unrelated legacy chats or external delegation workflows.

## Workspace

- Root workspace: `C:\Users\taiwa\Documents\AuntieNoMad`
- Website repo: `C:\Users\taiwa\Documents\AuntieNoMad\website`
- GitHub repo: `taiwanape/auntie-no-mad`
- Public URLs:
  - `https://taiwanape.github.io/auntie-no-mad/`
  - `http://auntienomad.com/`
- Custom-domain HTTPS may still wait for GitHub Pages certificate provisioning.
- Never commit secrets, API keys, OAuth tokens, cookies, or local credential files.

## Product Goal

Make Auntie NoMad a daily-updated Taiwanese life-info site that people want to click, read, and share.

Main sections:

- Life radar
- Pitfall diary
- Stocks / ETF
- Live news
- Tools
- Recommendations
- Archive
- Share pack
- Auntie reminders

Voice:

- Plain, useful, a little funny.
- Sounds like an auntie warning younger people.
- Sharp but not cruel.
- Not a news bot, investment teacher, or product catalog.
- Every sourced item needs a real `sourceUrl`.

Finance rules:

- Educational observation only.
- Never write buy, sell, target price, guaranteed profit, or stock-tip language.
- Every market item needs risk notes and a disclaimer.

## Visual Rules

- Use high-quality raster / AI-style images.
- Brand style: yellow halftone, bold black outline, white sticker stroke, pink accent, expressive Auntie character.
- Do not publish childish collage, generic SVG-like placeholders, empty poster layouts, fake text, random icons, or image/content mismatches.
- Thumbnails may feel icon-like, but must still look designed and on-brand.
- Large article images and thumbnails should not be identical.
- If image generation fails, keep previous good images or approved raster fallbacks. Do not replace good art with poor placeholders.

## Core Files

- Homepage: `index.html`
- Site data: `data/site-content.json`
- Social drafts: `data/social-posts.json`
- Share pack: `data/share-pack.json`
- X queue: `data/x-content-queue.json`
- Review report: `data/review-report.json`
- Today page: `today.html`
- Share page: `share.html`
- Growth CTA module: `article-growth.js`
- Styles: `site-info.css`
- Articles: `radar/`, `stories/`, `stocks/`
- SEO outputs: `sitemap.xml`, `robots.txt`, `rss.xml`, `feed.json`, `site.webmanifest`, `llms.txt`

## Automation

GitHub Actions:

- `daily-update.yml`: daily site update before Taiwan morning.
- `live-news-update.yml`: live news refresh.
- `pages.yml`: GitHub Pages deploy.
- `domain-health-check.yml`: custom-domain HTTPS check.
- `ops-health-check.yml`: operational health check.
- X workflows: daily post, API smoke test, manual post, deletion helper.

Current known risks:

- Daily updates must visibly change content and preserve old data if fetching fails.
- Image generation may fail if API billing limits are hit; text can still update, but low-quality image fallbacks are not acceptable.
- HTTPS for the custom domain may remain pending until GitHub finishes certificate provisioning.

## Standard Work Protocol

1. Run `git status --short --branch`.
2. Inspect current repo files, not old sessions.
3. Make focused changes.
4. Run checks; for site changes, at least run `npm test`.
5. Review `git diff`.
6. Commit and push when the change should publish.
7. Watch GitHub Actions for deployment or automation changes.
8. Verify public pages when the change affects the live site.

Useful commands from `website`:

```powershell
npm test
npm run ops:health
npm run test:domain
npm run test:x-api
npm run test:x-profile
npm run test:x-queue
npm run test:x-readiness
```
