# Content gap list — for owner review

Findings from the Phase 0 audit of interaxis.in (41 pages archived). Items marked ⚠️ need
an answer before or during Phase 2; the rest are observations for the rebuild.

## ⚠️ Inconsistencies to resolve

1. **Two different emails** — footer says `connect@innergiz.com`, contact page says
   `info@Innergiz.com`. Which is the real inbox?
2. **Three different brand names** — "Innergiz Consulting Solutions" (most pages),
   "Innergiz Consulting Group" (contact page), "interaxis-solutions" (browser title).
   New site should use exactly one. Assumed: **Innergiz Consulting Solutions**.
3. **Team links broken/missing** — 10 team members shown ("The Innergizers"), only 6 have
   bio pages. Hira Jethanandani's "Read More" points to `/joypreet-singh/` (someone not on
   the team grid). Sanjay Rai, Greg Chapman, Ritika Bhandari, Sonia Kararha have no pages.
   Confirm the current team list and who gets a bio.
4. **Event dates look placeholder** — all events are "July 25, 2026" or "August 25, 2026",
   and ICAP Level 2 appears twice. Real schedule needed (or events launch as "contact us
   for dates").

## ⚠️ Decisions needed

5. **Team photos vs the no-humans rule** — the design direction bans people photography.
   Proposal: keep the no-humans rule for homepage/heroes; on the About page show the team
   as a styled directory (names, roles, credentials, line-art accents) with photos allowed
   in a uniform duotone (ink/ivory) treatment so they feel art-directed. Approve?
6. **Blog posts are thin** — 10 posts, ~200 words each, generic titles. Options: migrate
   as-is, rewrite later, or launch without the blog.
7. **Referral program page** — keep, update, or drop?
8. **Stats** (recovered from the animated counters): **32,000+ individuals · 11,000+
   coaching hours · 65+ organisations · 120+ program topics**. Confirm these are current.

## Missing content the new design wants

9. **Testimonials** — none exist on the old site. Even 2–3 client quotes would carry the
   new design's social-proof section. (Old site leans entirely on the logo wall.)
10. **SEO basics absent** — meta descriptions are empty on every page; titles are
    auto-generated ("interaxis-solutions"). New site writes proper ones per page (Phase 2).
11. **Service one-liners** — hub pages link to services with images only, no descriptions.
    New arrow-link lists want a one-sentence summary per service (I can draft from the
    service pages' own copy for review).
12. **Founder story** — About mentions Surbhee Singh (Founder & CEO) with a bio page;
    a short founder quote could be the Fraunces pull-quote moment on the homepage.

## Assets recovered ✓

- Both logos (3000px+ PNGs) → `site-audit/assets/`
- All 20 client logos → `site-audit/assets/client-logos/` (Accenture, Barco, Blue Star,
  Dana, Ericsson, Flipkart, Google, HDFC, Hero, ICICI, Mahindra, MUFG, Olympus, PepsiCo,
  Perfetti, Pernod, Sapient, Sony, Tata Steel, VE)
- Full copy of all 41 pages → `site-audit/content/*.md`
- Vision & Mission statements (About page) — good, reusable
- FAQ content (6 Q&As) — reusable
- Operating philosophy (4 principles with descriptions) — reusable
