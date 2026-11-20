"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";

// Fixed header: transparent over the hero, ivory + blur + champagne hairline
// once scrollY > 40. Nav is minimal (About, Services). Coach academy is the
// single button, opening the external academy in a new tab.
// TODO: hamburger-menu improvisation pass (open/close animation, staggered link
// reveal, focus trap) — deferred by owner decision 2026-07-08.
const academyBtn =
  "inline-flex items-center rounded-sm bg-primary px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-primary-hover";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // reflect current position on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop the page scrolling behind the open mobile overlay.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color] duration-[400ms] ${
        scrolled && !menuOpen
          ? "border-champagne/40 bg-ivory/92 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link href="/" aria-label={`${SITE.brandName} — home`} onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt={SITE.brandName}
            width={125}
            height={36}
            priority
            className={menuOpen ? "brightness-0 invert" : ""}
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-teal"
            >
              {l.label}
            </Link>
          ))}
          <a href={SITE.academyUrl} target="_blank" rel="noopener noreferrer" className={academyBtn}>
            Coach academy ↗
          </a>
        </nav>

        <button
          type="button"
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
            menuOpen ? "text-ivory" : "text-ink"
          }`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`h-px w-6 bg-current transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-current transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="fixed inset-0 top-16 z-40 flex flex-col justify-between bg-ink px-5 pb-10 pt-12 lg:hidden"
        >
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-4xl uppercase text-ivory"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <a href={SITE.academyUrl} target="_blank" rel="noopener noreferrer" className={`${academyBtn} w-fit`}>
              Coach academy ↗
            </a>
            <a href={`mailto:${SITE.email}`} className="font-mono text-xs tracking-mono text-ivory/60">
              {SITE.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
