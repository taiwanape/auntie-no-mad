# Auntie NoMad Codex Context

Updated: 2026-05-30

This is the compressed working context for the Auntie NoMad project. Use this file plus the current repo files as the source of truth. Codex owns planning, implementation, testing, deployment, and operations directly in this workspace.

## Source Of Truth

- Root workspace: `C:\Users\taiwa\Documents\AuntieNoMad`
- Website repo: `C:\Users\taiwa\Documents\AuntieNoMad\website`
- GitHub repo: `taiwanape/auntie-no-mad`
- Current public URLs:
  - `http://auntienomad.com/`
  - `https://taiwanape.github.io/auntie-no-mad/`
- Custom-domain HTTPS is still pending if GitHub Pages has no certificate yet.
- Never commit secrets, API keys, OAuth tokens, cookies, or local credential files.

## Product Direction

Auntie NoMad is a daily-updated Taiwanese life-info site built to make people click, read, share, and come back.

Core sections:

- `lifeRadar`: Taiwan life news and useful public information.
- `pitfalls`: scams, consumer traps, traffic, travel, social media warnings.
- `stockWatchlist`: four educational stock / ETF observations per day.
- `liveNews`: faster breaking-news style item.
- `tools`: practical calculators and utilities.
- `recommendations`: lightweight product or useful-item picks.
- `archive`: old posts must remain reachable.
- `sharePack` / `socialPosts`: reusable social copy and links.

Tone:

- Plain, useful, a little funny.
- Like an auntie warning younger people.
- Sharp but not cruel.
- Never sounds like a news bot, investment teacher, or product catalog.
- Every sourced content item needs a real `sourceUrl`; if missing, show a safe fallback.

Finance rules:

- Educational observation only.
- Never write buy, sell, target price, guaranteed profit, or stock-tip language.
- Daily stock mix should be: two hot names, one rising / overlooked name, one risk theme or high-attention ETF.
- Every market item needs `riskNote`, `suitableFor`, `notSuitableFor`, and a disclaimer.

## Visual Standard

Approved style: yellow halftone background, bold black outlines, white sticker stroke, pink accents, expressive Auntie character, polished raster / AI illustration quality.

Do not publish:

- Childish collage or vector-placeholder art.
- Generic SVG-like doodles.
- Empty poster layouts.
- Fake or unreadable text.
- Image/content mismatch.
- Reused identical large image and thumbnail for the same story.

If new image generation fails, keep previous good art or approved raster fallbacks. Do not replace good images with low-quality placeholders.

## Important Files

- Homepage: `index.html`
- Main content data: `data/site-content.json`
- Share pack: `data/share-pack.json`
- Social post drafts: `data/social-posts.json`
- X queue: `data/x-content-queue.json`
- Review report: `data/review-report.json`
- Today landing page: `today.html`
- Share landing page: `share.html`
- Article growth module: `article-growth.js`
- Shared CSS: `site-info.css`
- Article pages: `radar/`, `stories/`, `stocks/`
- SEO / feeds: `sitemap.xml`, `robots.txt`, `rss.xml`, `feed.json`, `site.webmanifest`, `llms.txt`
- Operations docs: `docs/OPERATIONS_RUNBOOK.md`, `docs/SITE_OPERATING_SPEC.md`, `docs/GROWTH_PLAYBOOK.md`, `docs/VOICE_GUIDE.md`

## Automation

GitHub Actions:

- `daily-update.yml`: daily site update before Taiwan morning.
- `live-news-update.yml`: live-news refresh.
- `pages.yml`: GitHub Pages deploy.
- `domain-health-check.yml`: custom-domain HTTPS health check.
- `ops-health-check.yml`: overall site health check.
- X workflows: API smoke test, daily post, manual post, deletion helper.

Daily update must:

- Generate visibly fresh content before 07:00 Asia/Taipei.
- Keep old data if fetching or review fails.
- Include source links.
- Run review checks before publishing.
- Regenerate SEO, feeds, today page, share pack, and social drafts.
- Avoid low-quality images even when image generation fails.

Known risks:

- `OPENAI_API_KEY` can hit billing limits; if image generation fails, text may update but images must stay approved quality.
- Custom-domain HTTPS may remain unavailable until GitHub Pages provisions the certificate.
- Social platform APIs depend on repo secrets and platform permissions.

## Work Protocol

1. Run `git status --short --branch`.
2. Inspect current repo files first.
3. Make focused changes.
4. Run checks; for site changes, at least run `npm test`.
5. Review `git diff`.
6. Commit and push when the change should publish.
7. Watch GitHub Actions for deploy / automation changes.
8. Verify public pages when the live site is affected.

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

## Current Next Priorities

- Confirm daily updates are visibly changing homepage data and public article pages.
- Keep improving social/search previews so the homepage preview reflects today's strongest story.
- Re-check `auntienomad.com` HTTPS until GitHub Pages can enforce HTTPS.
- Improve content and image QA before any automated social publishing.
