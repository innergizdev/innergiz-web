# Innergiz Consulting — Website

Marketing website for **Innergiz Consulting** — executive coaching, corporate training, and
organizational development (New Delhi). A fast, statically-generated **Next.js** site deployed
on **Vercel**.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** — design tokens live in `app/globals.css` (`:root` + `@theme`).
  There is **no `tailwind.config.ts`** (v4 moved theme config into CSS).
- **Motion** (the framer-motion successor) for scroll/reveal animation
- Fonts via `next/font`: **Anton** (display), **Inter** (body), **IBM Plex Mono** (eyebrows/labels),
  **Fraunces** (pull quotes)
- Hosting: **Vercel is not currently in use** — `vercel.json` is kept for a possible future switch.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
app/                      # App Router — pages + route handlers
  layout.tsx              # fonts, Header, Footer
  page.tsx                # home
  globals.css             # ALL design tokens — edit here to re-theme the whole site
  about/                  # About / team
  services/               # Services overview
  organisations/          # B2B hub + [slug] service pages
  individuals/            # B2C hub + [slug] service pages
  events/                 # Events listing
  contact/                # Contact page
  team/[slug]/            # Individual team bio pages
  [legal]/                # Legal pages (terms, privacy, refund, ...)
  api/contact/route.ts    # PLACEHOLDER — returns mock JSON (see "Backend status")
components/
  ui/                     # shared primitives (Container, Section, Button, Heading, Text, Eyebrow, ArrowLink, ...)
  layout/                 # Header (responsive), Footer
  hero/PageHero.tsx       # page hero (photo slot)
  sections/               # ChooseYourPath, TopicExplorer, TeamMasthead, LogoWall,
                          #   StatsBand, Principles, CtaBand, ServiceArticle
  motion/                 # Reveal, CountUp — scroll animations, prefers-reduced-motion aware
content/                  # typed content data: services.ts, team.ts, legal.ts, site-data.ts (+ types.ts)
lib/                      # constants.ts (brand facts), api.ts (typed data access)
public/                   # logo, client logos, team photos
site-audit/               # archive of the previous site (content + screenshots) — reference only, not deployed
```

## Theming

All design tokens (brand colors, typography, spacing, radii) live in **`app/globals.css`**.
Change a `--color-*`, `--font-*`, `--space-*`, or `--radius-*` value and the entire site
updates — no component edits needed.

Brand palette: crimson `#CD0026` (CTAs / spark accents only), teal `#195B70`,
ivory canvas `#F4EFE7`, ink `#0C2A33`.

## Conventions

- **Mobile-first** — build for the smallest screen, scale up with `md:` / `lg:` utilities.
- **Tokens before hardcoded values** — add a token, then use it; no raw style values in components.
- **Data access through `lib/api.ts`** (typed functions), never a direct `fetch` in a component —
  so swapping the mock backend for a real one is a one-file change.
- **Accessibility baseline** — semantic HTML, keyboard nav, visible focus, `prefers-reduced-motion`.

## Backend status

The site is frontend-complete with a **placeholder backend**. `app/api/contact/route.ts`
returns mock JSON (`// TODO: replace mock with real implementation`). The next step is wiring
the contact form to a real destination (email / CRM).

## Brand facts

Single source of truth: **`lib/constants.ts`** (brand name, email, phone, address, academy URL).
Don't hardcode these in pages.
