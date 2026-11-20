import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/sections/CtaBand";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From ICF-accredited coach education to enterprise capability-building — the full range of Innergiz engagements for people and organisations.",
};

// Ink reference index: one row per service, linking into the right hub's
// ?topic= deep link. No numbering.
export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink pb-[clamp(80px,12vh,160px)] pt-[clamp(140px,20vh,200px)] text-ivory">
        <div className="mx-auto max-w-[1600px] px-[clamp(20px,5vw,60px)]">
          <div className="mb-[clamp(40px,6vw,72px)] flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-champagne">What we do</span>
              <h1 className="max-w-[16ch] font-heading text-[clamp(2.4rem,5.2vw,4.4rem)] uppercase leading-[0.94]">
                A practice for people <span className="text-champagne">&amp; organisations</span>
              </h1>
            </div>
            <p className="max-w-[40ch] text-[15px] leading-[1.6] text-ivory/65">
              From ICF-accredited coach education to enterprise capability-building — engagements
              designed to move the needle, not tick a box.
            </p>
          </div>
          <div className="border-t border-champagne/30">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.audience}?topic=${s.slug}`}
                className="group grid items-center gap-[clamp(14px,2.5vw,40px)] border-b border-champagne/30 py-[clamp(22px,2.8vw,36px)] md:grid-cols-[1.2fr_1.4fr_auto]"
              >
                <span className="font-heading text-[clamp(1.4rem,2.8vw,2.4rem)] uppercase leading-none transition-colors group-hover:text-champagne">
                  {s.title}
                </span>
                <span className="text-sm leading-[1.55] text-ivory/60">{s.oneLiner}</span>
                <span className="flex items-center gap-4">
                  <span className="rounded-sm border border-champagne/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-champagne">
                    {s.audience === "organisations" ? "Organisations" : "Individuals"}
                  </span>
                  <span className="font-heading text-xl text-champagne">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
