# Auntie NoMad Codex Context

Updated: 2026-05-29

This is the compressed working context for the Auntie NoMad project. Use this file plus the current repo files as the source of truth.

## Ownership

- Codex is the direct technical and operations owner.
- Do the work directly in `C:\Users\taiwa\Documents\AuntieNoMad`.
- Public website repo/workdir: `C:\Users\taiwa\Documents\AuntieNoMad\website`.
- Do not use external delegation workflows or unrelated old chat history for project decisions.
- Never commit secrets, API keys, OAuth tokens, cookies, or local credential files.

## Public Targets

- GitHub repo: `taiwanape/auntie-no-mad`
- GitHub Pages URL: `https://taiwanape.github.io/auntie-no-mad/`
- Custom domain: `auntienomad.com`
- Current domain state: HTTP works; HTTPS may still wait for GitHub Pages certificate provisioning.
- X account: `@auntienomad`
- Instagram: `https://www.instagram.com/auntienomad/`
- Facebook: `https://www.facebook.com/profile.php?id=61553234457401`

## Product Goal

Turn Auntie NoMad into a daily-updated Taiwanese life-info site that people want to click, read, and share.

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
- Feels like an auntie warning younger people.
- Sharp but not cruel.
- Never sounds like a news bot or investment teacher.
- Every sourced item needs a real source URL.

Finance rules:

- Educational observation only.
- Never write buy, sell, target price, guaranteed profit, or stock-tip language.
- Every market item needs a risk note and disclaimer.

## Visual Quality Rules

- Public images must be high-quality raster / AI-style images.
- Keep the brand style: yellow halftone, bold black outline, white sticker stroke, pink accent, expressive Auntie character.
- Do not publish childish collage, generic SVG-like placeholders, empty poster layouts, fake text, or random icons.
- Thumbnails can be icon-like, but still need designed brand quality.
- Large article images and thumbnails should not be identical.
- If image generation fails, keep previous good images instead of replacing them with poor placeholders.

## Key Files

- Homepage: `index.html`
- Site data: `data/site-content.json`
- Share pack: `data/share-pack.json`
- Social drafts: `data/social-posts.json`
- X queue: `data/x-content-queue.json`
- Review report: `data/review-report.json`
- Today landing page: `today.html`
- Article CTA module: `article-growth.js`
- Core styles: `site-info.css`
- Article folders: `radar/`, `stories/`, `stocks/`
- SEO outputs: `sitemap.xml`, `robots.txt`, `rss.xml`, `feed.json`, `site.webmanifest`, `llms.txt`

## Key Scripts

Run from `C:\Users\taiwa\Documents\AuntieNoMad\website`.

```powershell
npm test
npm run ops:health
npm run test:domain
npm run test:x-api
npm run test:x-profile
npm run test:x-queue
npm run test:x-readiness
```

Important scripts:

- `scripts/daily-update.mjs`: daily site update.
- `scripts/update-live-news.mjs`: live news refresh.
- `scripts/validate-content.mjs`: validation and quality gates.
- `scripts/generate-seo.mjs`: sitemap, robots, RSS, JSON Feed, manifest, `llms.txt`.
- `scripts/generate-share-pack.mjs`: share metadata and UTM links.
- `scripts/generate-social-posts.mjs`: social post drafts.
- `scripts/check-domain-health.mjs`: custom domain check.
- `scripts/post-x-manual.mjs`: API-based X posting.

## GitHub Actions

- `daily-update.yml`: daily content generation before Taiwan morning.
- `live-news-update.yml`: live news refresh.
- `pages.yml`: GitHub Pages deploy.
- `domain-health-check.yml`: custom-domain HTTPS retry/check.
- `ops-health-check.yml`: operational health check.
- `x-daily-post.yml`: daily X post.
- `x-api-smoke-test.yml`: X credential check.
- `x-manual-post.yml`: manual X post helper.
- `x-delete-posts.yml`: API deletion helper.

## Current Known State

- Daily content automation exists, but tomorrow morning must be checked for actual visible changes.
- Image quality is the biggest risk. Reject poor fallback art.
- OpenAI Images API may fail if billing or hard limit is blocked; text can update while new images fall back.
- X credentials exist in GitHub Secrets and local setup; never print secret values.
- Custom-domain HTTPS may still show browser warnings until GitHub finishes certificate provisioning.

## Standard Work Protocol

1. Run `git status --short --branch`.
2. Inspect only the relevant current files.
3. Make focused changes.
4. Run checks; for site changes, at least run `npm test`.
5. Review `git diff`.
6. Commit and push when the change should publish.
7. Watch GitHub Actions if deployment or automation changed.
8. Verify the public page when needed.
