# Auntie NoMad Codex Context

Updated: 2026-05-29

Compact working context for the Auntie NoMad project. Read this first, then inspect the current files before making changes.

## Ownership

- Codex is the direct owner for site development, content operations, automation, deployment, SEO, X posting, and maintenance.
- Work in `C:\Users\taiwa\Documents\AuntieNoMad`; the public website repo is `C:\Users\taiwa\Documents\AuntieNoMad\website`.
- Never commit secrets: `.env.local`, API keys, OAuth tokens, GitHub secrets, cookies, or credential values.
- Use current repo files and this context file for decisions. Ignore unrelated old sessions.

## Public Targets

- GitHub repo: `taiwanape/auntie-no-mad`
- Stable public URL until HTTPS is ready: `https://taiwanape.github.io/auntie-no-mad/`
- Custom domain: `auntienomad.com`
- Current domain state: HTTP works; HTTPS is waiting for GitHub Pages certificate provisioning.
- X account: `@auntienomad`

## Product Direction

- Goal: make Auntie NoMad a daily-updated, shareable Taiwanese life-info site.
- Main sections: life radar, pitfall diary, stocks/ETF, tools, recommendations, archive, reminders, live news.
- Voice: plain Taiwanese, useful, a little funny, Auntie-style nagging, sharp but not cruel.
- Every sourced content item needs a real topic, a source URL, a hook, and a reason to exist.
- Finance content is educational observation only. Never write buy/sell/target-price/guaranteed-profit language.

## Visual Quality Gate

- Public visuals must be high-quality raster/AI-style images, not SVG-like placeholders or childish collage art.
- Keep the Auntie brand style: yellow halftone, bold black outlines, white sticker stroke, pink accent, expressive Auntie character.
- Rejected: generic icons, random product props, empty poster layouts, fake UI text, low-quality vector doodles.
- Article thumbnails may be icon-like, but must still look designed and consistent with the brand.
- Large article images and social preview images should differ from thumbnails.

## Site Files

- Homepage: `index.html`
- Main content data: `data/site-content.json`
- Share pack: `data/share-pack.json`
- Social post drafts: `data/social-posts.json`
- X content queue: `data/x-content-queue.json`
- Article growth module: `article-growth.js`
- Core styles: `site-info.css`
- Article pages: `radar/`, `stories/`, `stocks/`

## Scripts

```powershell
cd C:\Users\taiwa\Documents\AuntieNoMad\website
npm test
npm run ops:health
npm run test:domain
npm run test:x-api
npm run test:x-profile
npm run test:x-queue
npm run test:x-readiness
```

Key scripts:

- `scripts/daily-update.mjs`: daily site content update.
- `scripts/update-live-news.mjs`: live news refresh.
- `scripts/validate-content.mjs`: content and page validation.
- `scripts/generate-seo.mjs`: sitemap, robots, feed, metadata support.
- `scripts/generate-share-pack.mjs`: share metadata and UTM links.
- `scripts/generate-social-posts.mjs`: platform post drafts.
- `scripts/check-domain-health.mjs`: custom-domain HTTP/HTTPS check.
- `scripts/post-x-manual.mjs`: API-based X posting.

## Automation

- `daily-update.yml`: daily content generation and commit.
- `live-news-update.yml`: live news refresh.
- `pages.yml`: GitHub Pages deploy.
- `domain-health-check.yml`: retries HTTPS enforcement for `auntienomad.com`.
- `ops-health-check.yml`: operational health check.
- `x-daily-post.yml`: daily X post.
- `x-api-smoke-test.yml`: X credential check.
- `x-manual-post.yml`: manual X post helper.
- `x-delete-posts.yml`: API deletion helper.

## Current Known State

- Daily content and social-post files exist, but image quality must be watched closely.
- Some OpenAI image calls may fail if billing/limit is not restored; do not replace good imagery with low-quality placeholders.
- X credentials are configured locally and in GitHub Secrets; never print values.
- X profile assets were updated to a real-person Auntie direction on 2026-05-29.
- Custom-domain HTTPS is still pending certificate provisioning; no site-code fix is needed for that specific browser warning.

## Deployment Flow

1. Check `git status --short --branch`.
2. Inspect the actual files related to the request.
3. Make focused changes.
4. Run the relevant checks; at minimum run `npm test` for site changes.
5. Review `git diff`.
6. Commit and push when the change should publish.
7. Verify GitHub Actions and the public page.
