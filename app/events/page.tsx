import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/sections/CtaBand";
import { EVENTS } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Upcoming events",
  description: "ICF accreditation programs, mentoring cohorts, and exam preparation — upcoming dates.",
};

const eyebrow = "font-mono text-[11px] uppercase tracking-[0.24em]";

function formatDates(start: string | null, end: string | null): string {
  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  if (!start) return "";
  return end && end !== start ? `${fmt(start)} — ${fmt(end)}` : fmt(start);
}

export default function EventsPage() {
  return (
    <>
      {/* Intro — About-style pattern */}
      <section className="bg-ivory pb-[clamp(48px,7vh,88px)] pt-[clamp(140px,20vh,200px)]">
        <Container className="grid items-start gap-[clamp(36px,6vw,96px)] lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className={`${eyebrow} inline-flex items-center gap-3 text-teal`}>
              <span className="h-px w-8 bg-champagne" />
              Events
            </span>
            <h1 className="max-w-[12ch] font-heading text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.88]">
              Upcoming events
            </h1>
          </div>
          <p className="max-w-[52ch] text-[clamp(16px,1.3vw,19px)] leading-[1.65] text-ink/70 lg:pt-6">
            Cohorts run through the year — ICF accreditation programs, mentoring, and exam
            preparation. Register your interest and we&rsquo;ll confirm dates and details.
          </p>
        </Container>
      </section>

      {/* Event rows */}
      <section className="bg-ivory pb-[clamp(80px,12vh,150px)]">
        <div className="mx-auto max-w-[1100px] border-t border-ink/[0.18] px-[clamp(20px,5vw,60px)]">
          {EVENTS.map((event) => (
            <div
              key={event.slug}
              className="flex flex-col gap-4 border-b border-ink/[0.18] py-[clamp(24px,3vw,40px)] md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-[clamp(1.5rem,2.6vw,2.2rem)] uppercase leading-[1.02]">
                  {event.title}
                </h2>
                {event.startDate ? (
                  <p className={`${eyebrow} text-teal`}>
                    {formatDates(event.startDate, event.endDate)} · {event.mode}
                  </p>
                ) : (
                  <p className="flex flex-wrap items-baseline gap-3">
                    <span className="font-voice text-lg italic text-ink/70">Dates announced soon</span>
                    <span className={`${eyebrow} text-teal`}>{event.mode}</span>
                  </p>
                )}
              </div>
              {event.registrationUrl ? (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-sm border border-ink/30 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:border-teal hover:text-teal"
                >
                  Register interest
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="shrink-0 rounded-sm border border-ink/30 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:border-teal hover:text-teal"
                >
                  Register interest
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <CtaBand eyebrow="Reserve your place" title="Tell us you're interested —" accent="we'll hold you a seat." />
    </>
  );
}
