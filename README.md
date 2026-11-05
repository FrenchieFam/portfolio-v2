# Frenchie Familia - Shellfolio portfolio

## Purpose
A separate Astro/Shellfolio portfolio for Bryfry / Frenchie Familia. The existing frenchiefam.github.io repository and frenchiefam.dev deployment are unchanged.

## Current State
Customized local checkout of https://github.com/fajremvp/shellfolio (MIT license retained). Original content comes from https://github.com/frenchiefam/frenchiefam.github.io. Full original bio is retained; service descriptions, case studies, clip samples, contact links, and booking link are preserved under /legacy/ and linked from the new profile. See docs/content-migration.md and docs/migration-manifest.json.

Branding: Frenchie Familia | Homelab & Automation; author Bryfry; canonical site https://frenchiefam.dev; prompt bryfry@frenchiefam. Wallets, Portuguese switcher, and fictional template education/employment are disabled. The three requested homelab projects are included. Baddies is accurately marked paused, with imports/notifications described as separate integrations. Gitea is explicitly a private/tailnet link.

## Local development
Requires Node24 (or a version supported by the installed Astro release).

```powershell
Set-Location C:\homelab\05_Code\portfolio-shellfolio
npm ci
npm run dev -- --host 127.0.0.1
```

Open http://127.0.0.1:4321/en/. Build with `npm run build`, then run `npm run verify:migration`. `npm run preview -- --host 127.0.0.1` serves the built output.

## Push to a new empty repository
Create an EMPTY GitHub repository named portfolio-v2 under frenchiefam. Do not initialize it with a README or license. The template remote is retained as upstream; origin is intentionally absent.

```powershell
git remote add origin https://github.com/frenchiefam/portfolio-v2.git
git push -u origin main
```

No force push is needed. No push or GitHub repository creation was performed during local setup.

## Safe GitHub Pages preview
In the NEW repository, select Settings > Pages > Source: GitHub Actions. Run the manual Deploy portfolio preview workflow from Actions. It uses official withastro/action@v6 and actions/deploy-pages@v5 and sets PAGES_BASE_PATH=/portfolio-v2. Deployment is manual-only so pushing cannot publish unexpectedly. Use the URL reported by the Pages action (normally https://frenchiefam.github.io/portfolio-v2/; GitHub may inherit/redirect through the existing user-site custom domain).

The default astro.config.mjs site remains https://frenchiefam.dev as requested. PAGES_BASE_PATH provides the project-path preview; local builds use /. Fonts, template links and migrated project links account for this base.

## Future custom-domain cutover - separate approval required
There is NO public/CNAME in this repo. Do not move the live domain now. Once the preview is approved:
1. Verify the existing handyman booking project still resolves, and plan a compatible route if changing the parent custom-domain association would affect it.
2. Coordinate removing frenchiefam.dev from the OLD Pages repository and assigning it to the NEW one; do not run two competing custom-domain deployments.
3. Set the new deployment base to / by removing PAGES_BASE_PATH from deploy.yml. Keep Astro site https://frenchiefam.dev. Add public/CNAME containing frenchiefam.dev only at this cutover stage and update GitHub Pages custom-domain settings.
4. Verify domain/DNS/TLS, all original legacy links, booking flow, and media before retiring the old deployment. Retain the old repo as a rollback source.

No DNS, live repo, custom-domain settings, or existing deployment was changed.

## Key files
- src/config/site.config.ts: identity, terminal prompt, feature flags.
- src/data/shellfolio.ts: bio, projects, skills, contacts.
- public/legacy/: original pages/assets, preserved byte-for-byte.
- docs/migration-manifest.json: original commit and SHA256 receipts.
- .github/workflows/deploy.yml: manual project-path Pages preview.
- astro.config.mjs: canonical domain and optional preview base.
- scripts/verify-migration.mjs: content and build preservation checks.
- .migration/: ignored local source checkout and template backups; not exported or committed.

## Next steps
Review locally, create the new empty repo, push using the commands above, and enable/run its Pages workflow. Custom-domain cutover remains a later phase.

## Template and deployment references
- https://github.com/fajremvp/shellfolio
- https://docs.astro.build/en/guides/deploy/github/
