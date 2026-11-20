import Button from "@/components/ui/Button";
import GridGhosts from "@/components/ui/GridGhosts";

// Shared hero for Landing / Organisations / Individuals. Two-column split:
// editorial headline + CTAs on the left, a framed image placeholder on the
// right (real photography drops in later). Faint grid ghosts sit behind.
export default function PageHero({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  imageLabel,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  imageLabel: string;
}) {
  return (
    <section className="relative flex min-h-screen items-center bg-ivory px-[clamp(20px,5vw,60px)] pb-14 pt-32">
      <GridGhosts />
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-[clamp(36px,5vw,72px)] lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="mb-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">
            <span className="h-px w-8 bg-champagne" />
            {eyebrow}
          </span>
          <h1 className="font-heading text-[clamp(2.8rem,7vw,6.6rem)] uppercase leading-[0.88] text-ink">
            {title}
          </h1>
          <p className="mt-7 max-w-[44ch] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-ink/70">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href={primary.href}>{primary.label}</Button>
            <a
              href={secondary.href}
              className="rounded-sm border border-ink/30 px-7 py-4 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:border-teal hover:text-teal"
            >
              {secondary.label}
            </a>
          </div>
        </div>
        <div className="relative">
          {/* Offset champagne frame behind the image */}
          <div className="absolute -right-3.5 -top-3.5 h-[62%] w-[62%] rounded-sm border border-champagne" />
          {/* Placeholder until photography arrives */}
          <div className="relative flex aspect-[4/5] items-center justify-center rounded-sm bg-ivory-deep shadow-[0_30px_70px_-30px_rgba(12,42,51,0.45)]">
            <span className="px-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
              {imageLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
