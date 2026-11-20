import Link from "next/link";
import Container from "@/components/ui/Container";
import { LEGAL_LINKS, NAV_LINKS, SITE } from "@/lib/constants";

// Ink footer: a compact links row, the giant cropped wordmark, then the legal
// bar. Champagne hairline on top separates it from the ivory CtaBand above.
const link = "text-sm text-ivory/75 transition-colors hover:text-champagne";
const mono = "font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/45";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-champagne/30 bg-ink pt-10 text-ivory lg:pt-13">
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <p className="font-voice text-[17px] italic text-ivory/75">{SITE.subTagline}.</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={link}>
              {l.label}
            </Link>
          ))}
          <a href={SITE.academyUrl} target="_blank" rel="noopener noreferrer" className={link}>
            Coach academy ↗
          </a>
          <span aria-hidden className="h-3.5 w-px bg-champagne/40" />
          <a href={`mailto:${SITE.email}`} className={link}>
            {SITE.email}
          </a>
          <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className={link}>
            {SITE.phone}
          </a>
        </nav>
      </Container>

      {/* Giant cropped wordmark — the editorial signature */}
      <div aria-hidden className="pointer-events-none mt-[clamp(28px,4vw,56px)] select-none overflow-hidden">
        <p className="whitespace-nowrap text-center font-heading text-[23vw] uppercase leading-[0.8] text-ivory/10">
          Innergiz
        </p>
      </div>

      <Container className="flex flex-wrap justify-between gap-3 border-t border-ivory/12 py-5">
        <span className={mono}>
          © {new Date().getFullYear()} {SITE.legalName}
        </span>
        <span className={mono}>{SITE.address}</span>
        <span className="flex gap-5">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`${mono} hover:text-ivory`}>
              {l.label}
            </Link>
          ))}
        </span>
      </Container>
    </footer>
  );
}
