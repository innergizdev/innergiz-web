# Project Status — Innergiz Consulting Website

A record of what has been implemented and what remains. For stack, structure, and
how to run the project, see [README.md](README.md).

**Snapshot:** the **frontend is complete** (all pages, content, design, responsive,
accessible, animated). What remains is the **backend/data layer** (Phase 3) and a few
deploy-time decisions (Phase 4).

---

## ✅ Done

### Phase 0 — Content archive
The previous WordPress site (interaxis.in) was captured for reference before the rebuild.
- All ~20 old pages saved as markdown + raw HTML → `site-audit/content/`, `site-audit/raw/`
- Full-page screenshots (desktop + mobile) → `site-audit/screenshots/`
- Client logos and assets → `site-audit/assets/`
- Content-gap notes → `site-audit/content-gaps.md`

### Phase 1 — Foundation & design system
- Next.js 16 (App Router) + React 19 + TypeScript project shell
- **Design tokens** (colors, type scale, spacing, radii) centralised in `app/globals.css`
  (Tailwind v4 `@theme`) — re-theme the whole site from one file
- Fonts via `next/font`: Anton, Inter, IBM Plex Mono, Fraunces (self-hosted, no layout shift)
- UI primitives in `components/ui/`: Container, Section, Button, Card, Heading, Text,
  Eyebrow, ArrowLink, PullQuote, GridGhosts
- Responsive `Header` (mobile menu) and `Footer`

### Phase 2 — Pages & content
Every page built and content-complete, driven by typed data in `content/`.
- **Home** (`app/page.tsx`)
- **About / team** (`app/about`, `app/team/[slug]`)
- **Services** overview (`app/services`)
- **Organisations** hub + service pages (`app/organisations`, `app/organisations/[slug]`)
- **Individuals** hub + service pages (`app/individuals`, `app/individuals/[slug]`)
- **Events** (`app/events`)
- **Contact** page + `ContactForm` (submits to the API — currently mocked, see Pending)
- **Legal** pages (`app/[legal]` — terms, privacy, refund, etc.)
- **SEO:** per-page metadata, `app/sitemap.ts`, 301 redirect map from old WordPress URLs
  (`next.config.ts`), favicon/icon
- **Accessibility:** semantic HTML, keyboard nav, focus states, `prefers-reduced-motion`
- **Motion:** scroll reveals and count-ups (`components/motion/Reveal`, `CountUp`)

### Design elevation (handoff redesign)
The external design handoff was implemented on top of Phase 2:
- Reworked landing, shared shell, and service hubs
- New sections: `PageHero` (photo hero), `TopicExplorer` (master-detail explorer),
  `TeamMasthead`, `ChooseYourPath`, `StatsBand`, `LogoWall`, `Principles`, `CtaBand`
- About masthead, services page, and Events / Contact / Legal restyle

---

## ⏳ Pending

### Phase 3 — Backend activation (the main open work)
- **Contact form is a placeholder.** `app/api/contact/route.ts` validates input and has a
  honeypot, but **sends/stores nothing** — it returns a mock success.
  Next step: wire it to a real destination. Planned route: **form → Odoo CRM lead sync**
  (name/email/phone/program + source/UTM), with email notification.
- **Blog / FAQ / Events content system** not built yet (markdown/MDX vs CMS — decision pending).
  The Events page currently uses placeholder data; real dates come from the client.

### Phase 4 — Deploy (partially done)
- Done: motion polish, accessibility
- **Vercel is not currently in use** — `vercel.json` is kept for a possible future switch,
  but nothing deploys to it right now.
- Pending: set the real production origin in `app/sitemap.ts`, custom-domain cutover,
  analytics decision (GA4 / Vercel Analytics / none)

---

## Quick reference

| Area | State |
|---|---|
| Design system / tokens | ✅ Done |
| All pages + content | ✅ Done |
| Responsive + a11y + motion | ✅ Done |
| SEO (metadata, sitemap, redirects) | ✅ Done |
| Contact form **delivery** | ⏳ Mock — needs Phase 3 (→ Odoo) |
| Blog / FAQ / Events system | ⏳ Not built |
| Analytics + custom domain | ⏳ Deploy-time decisions |
