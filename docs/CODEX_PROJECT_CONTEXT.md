# Auntie NoMad Codex Context

Updated: 2026-05-29

This is the compact working context for Codex. Read this first, then inspect current workspace files before changing anything.

## Ownership

- Codex is responsible for technical maintenance, content operations, X operations, automation, deployment, and bug fixes.
- Work only in `C:\Users\taiwa\Documents\AuntieNoMad` unless the user explicitly says otherwise.
- Do not use browser automation for X. Use API, CLI, GitHub Actions, and local scripts.
- Never commit `.env.local`, API keys, OAuth tokens, GitHub secrets, or credential values.
- Do not use unrelated old sessions, external-agent notes, or old handoff procedures.

## Project Map

- Website repo: `C:\Users\taiwa\Documents\AuntieNoMad\website`
- GitHub repo: `taiwanape/auntie-no-mad`
- GitHub Pages: `https://taiwanape.github.io/auntie-no-mad/`
- Custom domain target: `auntienomad.com`
- X account: `@auntienomad`
- Local X tool folder: `C:\Users\taiwa\Documents\AuntieNoMad\x-bot`

## Site

- Static website using vanilla HTML, CSS, and JavaScript.
- Main page: `index.html`
- Source content: `data/site-content.json`
- Validation: `scripts/validate-content.mjs`
- SEO: `scripts/generate-seo.mjs`
- Daily update: `scripts/daily-update.mjs`
- Live news: `scripts/update-live-news.mjs`
- Ops check: `scripts/ops-health-check.mjs`

Core checks:

```powershell
cd C:\Users\taiwa\Documents\AuntieNoMad\website
npm test
npm run ops:health
npm run test:x-api
```

## Content Rules

- Voice: Taiwanese, direct, funny, useful, and plain-language.
- Posts need a real topic, source, hook, and reason to exist.
- Avoid empty slogans, fake urgency, ecommerce layouts, product props, and generic model poses.
- Finance content must stay informational and avoid investment-advice language.
- Preserve existing public data if automation fails.
- Keep `sourceUrl` for sourced items.

## X Visual Direction

- X uses a real-person Auntie character.
- Character lock: short dark curly hair, gold hoops, leopard-pattern outer layer, black outfit/apron, pink heart accent, curvy body, confident and intelligent mood.
- Graphic style: yellow halftone background, black pill label, heavy black headline, thick white stroke, black shadow, pink keyword emphasis.
- X can be sexier than other platforms, but it must stay tasteful, editorial, and topic-driven.
- Never collage the user reference images. Generate or design new assets while preserving the same character identity.
- Do not use the rejected video experiment as a content direction.

## X Operations

- Use API only.
- Verified account: `@auntienomad`.
- Current profile bio: `熱搜翻譯、科技八卦、荷包避雷。真人版阿姨，用成熟一點的眼神，把新聞講到你會想轉發。尺度大一點，腦袋也要在線。`
- Current profile assets:
  - `social/x-profile-generated-20260529/x-profile-avatar-generated-20260529.jpg`
  - `social/x-profile-generated-20260529/x-profile-cover-generated-20260529.jpg`
- X content queue: `data/x-content-queue.json`
- Recent verified posts:
  - `https://x.com/auntienomad/status/2060318220754763933`
  - `https://x.com/auntienomad/status/2060202163700396065`
- X credentials are local in `x-bot/.env.local` and remote in GitHub Secrets. Do not print or commit values.

Useful commands:

```powershell
npm run test:x-api
npm run test:x-profile
npm run test:x-queue
npm run post:x
npm run delete:x-posts
```

## Automation

- `daily-update.yml`: site content update.
- `live-news-update.yml`: live news refresh.
- `pages.yml`: GitHub Pages deploy.
- `x-daily-post.yml`: scheduled X post.
- `x-api-smoke-test.yml`: X API check.
- `x-manual-post.yml`: manual X post.
- `x-delete-posts.yml`: API deletion helper.
- `ops-health-check.yml`: daily health check.

Codex heartbeat:

- Daily patrol at 08:15 Asia/Taipei.
- Checks Actions, tests, X API, review report, latest X state, and public site availability.

## Known State

- X API credentials were verified on 2026-05-29.
- X avatar and banner were updated to a newly AI-generated real-person visual direction.
- Bad old X posts were deleted.
- `ops-health-check.mjs` exists and has passed.
- `post-x-manual.mjs` can use approved raster fallback images when OpenAI image generation is unavailable.
- OpenAI Images API may hit billing hard limit; use approved raster fallback until billing is restored.
- Local video assets were rejected by the user and removed from the working tree.

## Deployment Flow

1. Inspect relevant files and `git status`.
2. Make focused changes.
3. Run `npm test`.
4. Run X/API checks if X behavior changed.
5. Review `git diff`.
6. Commit and push to `main` when deployment is requested or operationally needed.
7. Verify GitHub Actions or the public page.
