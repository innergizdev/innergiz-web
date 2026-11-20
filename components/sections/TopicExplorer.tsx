"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Service } from "@/content/types";

type RailFooter =
  | { kind: "quote"; text: string; attribution: string }
  | { kind: "stats"; stats: { value: string; label: string }[] };

// Master–detail: a sticky rail of services (≥lg) beside a pane that swaps
// without a page reload. Replaces the old list → /[slug] hop; ?topic=slug keeps
// deep links working. Wrap in <Suspense> (useSearchParams) at the page level.
export default function TopicExplorer({
  services,
  audienceLabel,
  ctaSuffix,
  railFooter,
}: {
  services: Service[];
  audienceLabel: string; // "Organisations" | "Individuals"
  ctaSuffix: string; // "for your team?" | "for yourself?"
  railFooter: RailFooter;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const initial = services.find((s) => s.slug === params.get("topic"))?.slug ?? services[0].slug;
  const [active, setActive] = useState(initial);
  const pane = useRef<HTMLDivElement>(null);
  const s = services.find((x) => x.slug === active)!;

  const select = (slug: string) => {
    setActive(slug);
    router.replace(`${pathname}?topic=${slug}`, { scroll: false });
    // On mobile the rail sits above the pane, so bring the pane into view.
    if (window.matchMedia("(max-width: 1023px)").matches && pane.current) {
      window.scrollTo({
        top: pane.current.getBoundingClientRect().top + window.scrollY - 90,
        behavior: "smooth",
      });
    }
  };

  // Soft fade/rise on the pane each time the topic changes.
  useEffect(() => {
    pane.current?.animate(
      [
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 450, easing: "cubic-bezier(.22,1,.36,1)" },
    );
  }, [active]);

  return (
    <section id="topics" className="border-t border-champagne/50 bg-ivory py-[clamp(64px,10vh,120px)]">
      <div className="mx-auto grid max-w-[1600px] gap-[clamp(32px,5vw,80px)] px-[clamp(20px,5vw,60px)] lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)]">
        <nav aria-label="Services" className="flex flex-col gap-2 self-start lg:sticky lg:top-[100px]">
          <span className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">Browse services</span>
          {services.map((t) => {
            const on = t.slug === active;
            return (
              <button
                key={t.slug}
                onClick={() => select(t.slug)}
                aria-current={on}
                className={`grid grid-cols-[1fr_20px] items-start gap-3 rounded-sm border-l-2 px-4 py-4 text-left transition-colors hover:bg-champagne/10 ${
                  on ? "border-champagne bg-champagne/10" : "border-transparent"
                }`}
              >
                <span className="flex min-w-0 flex-col gap-1.5">
                  <span className={`font-heading text-[clamp(1rem,1.4vw,1.3rem)] uppercase leading-[1.08] ${on ? "text-ink" : "text-ink/55"}`}>
                    {t.title}
                  </span>
                  {t.railDesc && <span className="text-[13px] leading-[1.45] text-ink/60">{t.railDesc}</span>}
                </span>
                <span className={on ? "text-champagne" : "text-ink/30"}>↗</span>
              </button>
            );
          })}
          {railFooter.kind === "quote" ? (
            <figure className="mt-6 border-t border-champagne/50 pt-6">
              <blockquote className="font-voice text-lg italic leading-[1.35] text-ink">
                &ldquo;{railFooter.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                {railFooter.attribution}
              </figcaption>
            </figure>
          ) : (
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-champagne/50 pt-6">
              {railFooter.stats.map((st) => (
                <div key={st.label}>
                  <dt className="font-heading text-2xl">{st.value}</dt>
                  <dd className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/60">{st.label}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-ink/10 pt-4">
            <span className="text-sm text-ink/65">Not sure where to start?</span>
            <a href="#contact" className="font-mono text-[11px] uppercase tracking-[0.16em] text-teal">Talk to us ↗</a>
          </div>
        </nav>

        <div ref={pane} className="min-w-0">
          <div className="grid items-start gap-[clamp(28px,4vw,64px)] border-b border-champagne/50 pb-[clamp(28px,3vw,44px)] md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-teal">{audienceLabel}</span>
              <h2 className="max-w-[14ch] font-heading text-[clamp(2.2rem,4vw,3.6rem)] uppercase leading-[0.92]">{s.title}</h2>
              <p className="max-w-[32ch] font-voice text-[clamp(1.2rem,2vw,1.75rem)] italic leading-[1.25] text-teal">{s.oneLiner}</p>
            </div>
            <div className="flex flex-col gap-4">
              {s.intro.map((p) => (
                <p key={p.slice(0, 32)} className="text-base leading-[1.7] text-ink/80">{p}</p>
              ))}
            </div>
          </div>

          {s.sections?.map((sec, i) => (
            <div key={sec.heading ?? i} className="flex flex-col gap-5 border-b border-ink/10 py-[clamp(28px,3vw,44px)]">
              {sec.heading && <h3 className="font-heading text-[clamp(1.3rem,2vw,1.8rem)] uppercase">{sec.heading}</h3>}
              {sec.body?.map((b) => (
                <p key={b.slice(0, 32)} className="max-w-[70ch] leading-[1.7] text-ink/80">{b}</p>
              ))}
              {sec.bullets && (
                <div className="grid gap-5 md:grid-cols-2">
                  {sec.bullets.map((bl) => (
                    <div key={bl.text.slice(0, 32)} className="flex flex-col gap-1.5 border-t border-champagne/50 pt-4">
                      {bl.title && <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-teal">{bl.title}</span>}
                      <p className="text-[15px] leading-[1.65] text-ink/80">{bl.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {s.programs && s.programs.length > 0 && (
            <div className="mt-[clamp(28px,3vw,44px)] rounded-sm bg-ink p-[clamp(24px,3vw,40px)] text-ivory">
              <h3 className="font-heading text-[clamp(1.3rem,2vw,1.8rem)] uppercase">{s.programsHeading}</h3>
              <div className="mt-4 grid gap-x-8 md:grid-cols-2">
                {s.programs.map((pr) => (
                  <div key={pr.title} className="flex flex-col gap-1.5 border-b border-champagne/20 py-4">
                    <h4 className="font-heading text-[clamp(1rem,1.5vw,1.25rem)] uppercase leading-[1.05]">{pr.title}</h4>
                    {pr.blurb && <p className="text-sm leading-[1.6] text-ivory/65">{pr.blurb}</p>}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-ivory/60">
                Program details, schedules, and fees on request — reach out and we&rsquo;ll guide you to the right fit.
              </p>
            </div>
          )}

          <div className="mt-[clamp(28px,3.5vw,44px)] flex flex-wrap items-center justify-between gap-5 border-t border-ink/10 pt-[clamp(24px,3vw,36px)]">
            <p className="max-w-[24ch] font-voice text-[clamp(1.1rem,1.8vw,1.5rem)] italic">
              Ready to explore {s.title} {ctaSuffix}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border-b border-teal/35 pb-1 font-mono text-xs uppercase tracking-[0.16em] text-teal hover:border-ink hover:text-ink"
            >
              Talk to us <span className="text-champagne">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
