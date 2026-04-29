# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint (eslint-config-next core-web-vitals + typescript)
```

No test suite is configured.

## Architecture

A portfolio site for Siti Aisyah Adjie built with Next.js 16 App Router, Tailwind CSS v4, and Framer Motion v12.

**Routing:** The primary experience is a single-page scroll on `/` with anchor sections (`#home`, `#about`, `#experience`, `#skills`, `#gallery`, `#contact`). Sub-pages (`/about`, `/experience`, `/skills`, `/gallery`) exist as dedicated routes but largely duplicate content from the homepage. The Navbar links always point to homepage anchors (`/#section`), not the sub-pages.

**Layout:** `src/app/layout.tsx` wraps every page with a sticky `<Navbar>` and `<Footer>`. Main content gets `pt-8` to clear the floating navbar.

**Styling:** Tailwind v4 — configured via `postcss.config.mjs` using `@tailwindcss/postcss`. No `tailwind.config.js` exists; theme extensions go in `globals.css` under `@theme inline`. The global CSS imports with `@import "tailwindcss"` (not the v3 `@tailwind` directives).

**Design tokens (hardcoded inline, not CSS variables):**
- Forest Green: `#064E3B` (primary backgrounds, headings)
- Warm Stone: `#F5F5F4` (page background)
- Burnt Orange: `#EA580C` (accent, CTAs)

**Animation:** Framer Motion is used for the mobile navbar slide (`AnimatePresence`/`motion.div`), footer scroll reveal (`whileInView`), and gallery staggered entrance (`transition.delay`). Components that use Framer Motion or React state require `"use client"`.

**Images:** External images (`placehold.co`, `picsum.photos`, `unsplash.com`) are rendered with `unoptimized` to bypass Next.js image optimization. When replacing with real assets, put them in `public/` and remove `unoptimized`.

**Fonts:** Geist Sans and Geist Mono loaded via `next/font/google` in the root layout, exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`.
