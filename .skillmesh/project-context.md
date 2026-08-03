# Project context

## Domain
Academic blog ("Sociedad y Derecho") on sociology of law, built for a university course. Single author, six static content entries, no CMS, no database, no auth.

## Stack
- Next.js 16 (App Router), TypeScript, React 19.
- No CSS framework (plain CSS + CSS Modules).
- Content lives in `src/data/posts.ts` as an array of typed objects; no external API.
- Static generation only (`generateStaticParams` for `/entradas/[slug]`, `/etiquetas/[etiqueta]`, `/archivo/[periodo]`).

## Non-negotiable constraints
- `npm run build` must use `next build --webpack`: Turbopack crashes with SIGILL on this machine, so both `dev` and `build` scripts are pinned to `--webpack` in `package.json`. Do not remove that flag.
- Post body copy must keep the academic formatting rules already applied via the `.post-content` class in `src/app/globals.css`: Arial 12pt, line-height 1.5, justified text, 0.5cm first-line indent on `<p>`, no indent on headings/blockquotes/lists/tables.
- Images are local SVG illustrations under `public/images` and `public/author` (no photography, no external image hosts). `next.config.ts` enables `dangerouslyAllowSVG` for `next/image` — safe because all SVGs are authored in this repo, never user-uploaded.
- No test suite exists yet (no Jest/Vitest/Playwright configured).

## Commands
- `npm run dev` — dev server (webpack)
- `npm run build` — production build (webpack)
- `npm run lint` — ESLint (must stay clean)

## Deployment
- GitHub: `lreyesm1999/blog-sociologia-juridica` (public), branch `main`.
- Netlify: site `sociedad-y-derecho-lenier`, deployed via `netlify deploy --prod` (Next.js Runtime plugin auto-detected). Production URL: https://sociedad-y-derecho-lenier.netlify.app

## Ownership
Single author/maintainer: Lenier Reyes Morales. No other contributors.
