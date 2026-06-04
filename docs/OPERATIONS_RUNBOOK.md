# Auntie NoMad Operations Runbook

Updated: 2026-06-04

Use this for routine site and X operations. Use API, CLI, local scripts, and GitHub Actions. Do not use browser automation for X.

## Daily Patrol

Run from `C:\Users\taiwa\Documents\阿姨別生氣\website`:

```powershell
npm run ops:health
npm test
npm run test:x-queue
npm run test:x-api
npm run test:x-profile
npm run test:x-readiness
```

Check:

- GitHub Actions are not repeatedly failing.
- Public site is reachable.
- `data/review-report.json` is approved; public daily images must not be stale fallbacks.
- X API resolves `@auntienomad`.
- X profile still matches the real-person, non-ecommerce positioning.
- `data/x-content-queue.json` has enough planned, sourced, real-person concepts.
- Latest X post is not generic, broken, or off-brand.

## Site Maintenance

- Edit source content in `data/site-content.json` or through the relevant update script.
- Keep `sourceUrl` for sourced content.
- Preserve existing public content if fetch/update fails.
- Do not break archive links.
- After content changes, run:

```powershell
npm test
npm run generate:seo
```

## X Posting Standards

Every X post needs:

- A real topic: current news, online discussion, useful warning, finance/life angle, or sharp social observation.
- A clear hook.
- A visual that matches the topic.
- Real-person Auntie character consistency.

Avoid:

- Ecommerce/product display style.
- Hand-held props or fake product poses.
- Empty captions without a topic.
- Reusing the same image or pose repeatedly.
- Collaging user reference images.
- Sexy-only images with no idea behind them.

## X Visual Checklist

- Yellow halftone background.
- Black pill label with white text.
- Heavy black headline with thick white stroke and black shadow.
- Pink keyword emphasis.
- Real-person character: curly short dark hair, gold hoops, leopard layer, black outfit/apron, pink heart accent.
- Pose should feel editorial, confident, and intelligent.
- X can be sexier, but keep it tasteful and brand-led.

## X API Commands

```powershell
npm run test:x-api
npm run test:x-profile
npm run test:x-queue
npm run test:x-readiness
npm run post:x
npm run delete:x-posts
```

Rules:

- Never print tokens.
- Never commit `.env.local`.
- Use dry-run or preview mode before publishing when available.
- Delete posts only when clearly wrong, broken, or user-approved for deletion.

## GitHub Actions

Useful commands:

```powershell
gh run list --repo taiwanape/auntie-no-mad --limit 10
gh run view <run-id> --repo taiwanape/auntie-no-mad --log-failed
```

Important workflows:

- `Daily Auntie Update`
- `Live News Update`
- `Deploy GitHub Pages`
- `X Daily Post`
- `X API Smoke Test`
- `Ops Health Check`

## Deployment

```powershell
git status --short
npm test
git diff
git add <files>
git commit -m "<clear message>"
git push origin HEAD:main
```

After push:

- Confirm Pages deploy succeeds.
- Check the public URL if the site changed.
- If X behavior changed, run or inspect X API smoke test.

## Failure Handling

OpenAI image generation unavailable:

- Do not publish stale fallback images as that day's public article art.
- Keep the previous public site online until fresh topic-specific images can be generated.
- Fix billing / API key / quota first, then rerun Daily Auntie Update.
- Keep X posts static and high quality.
- Do not force generic placeholder images.

X API failure:

- Run `npm run test:x-api`.
- Check app credentials and account identity.
- Do not switch to browser posting.
- Do not expose credential values.

Site validation failure:

- Fix `data/site-content.json` first.
- Regenerate SEO only after validation is clean.
- Do not deploy broken content.

GitHub Actions failure:

- Inspect failed step logs.
- Fix the root cause locally.
- Re-run tests before pushing.
