import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

// Ivory pre-footer band (never ink) so it separates from ink blocks above and
// the ink footer below. One crimson CTA; the email is a quiet outline link.
// `title` + `accent` form one headline, the accent clause set in teal.
export default function CtaBand({
  eyebrow = "Let's begin",
  title = "Ignite your potential.",
  accent = "Start the conversation.",
}: {
  eyebrow?: string;
  title?: string;
  accent?: string;
}) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-champagne/50 bg-ivory py-[clamp(90px,14vh,180px)] text-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] -top-[40%] h-[120%] w-[60vw] bg-[radial-gradient(closest-side,rgba(198,166,100,0.18),transparent_70%)]"
      />
      <Container className="relative flex flex-col items-center gap-10 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-teal">{eyebrow}</span>
        <h2 className="max-w-[18ch] font-heading text-[clamp(2.6rem,7vw,6rem)] uppercase leading-[0.9]">
          {title} <span className="text-teal">{accent}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button href="/contact">Book a call</Button>
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-sm border border-ink/30 px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:border-teal hover:text-teal"
          >
            {SITE.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
