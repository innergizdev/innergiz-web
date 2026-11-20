import Link from "next/link";

// Two full-bleed cards, no gap: ivory-deep "Organisations" beside ink
// "Individuals". The landing's route into the two audience journeys.
const paths = [
  {
    href: "/organisations",
    eyebrow: "For your team",
    title: "Organisations",
    tone: "light",
    blurb:
      "Executive coaching, corporate excellence, consulting, assessments, and well-being — capability-building for the whole organisation.",
    chips: ["Executive coaching", "Corporate excellence", "+3 more"],
    cta: "Explore for organisations",
  },
  {
    href: "/individuals",
    eyebrow: "For you",
    title: "Individuals",
    tone: "ink",
    blurb:
      "Coach education toward your ICF credential, life coaching, and trainer certification — for your own growth and career.",
    chips: ["Coach education", "Life coaching", "Trainer certification"],
    cta: "Explore for individuals",
  },
] as const;

export default function ChooseYourPath() {
  return (
    <section id="paths" className="grid bg-ivory md:grid-cols-2">
      {paths.map((p) => {
        const ink = p.tone === "ink";
        return (
          <Link
            key={p.href}
            href={p.href}
            className={`flex flex-col justify-between gap-[clamp(32px,5vw,64px)] border-t px-[clamp(28px,5vw,60px)] py-[clamp(56px,8vw,96px)] transition-colors duration-300 ${
              ink
                ? "border-champagne/30 bg-ink text-ivory hover:bg-ink-soft"
                : "border-champagne/50 bg-ivory-deep text-ink hover:bg-[#e2d9c6]"
            }`}
          >
            <div className="flex flex-col gap-5">
              <span
                className={`font-mono text-[11px] uppercase tracking-[0.24em] ${ink ? "text-champagne" : "text-teal"}`}
              >
                {p.eyebrow}
              </span>
              <h2 className="font-heading text-[clamp(2.2rem,4.6vw,3.8rem)] uppercase leading-[0.92]">
                {p.title}
              </h2>
              <p
                className={`max-w-[38ch] text-[clamp(15px,1.2vw,17px)] leading-[1.6] ${ink ? "text-ivory/65" : "text-ink/70"}`}
              >
                {p.blurb}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2.5">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className={`rounded-sm border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
                      ink ? "border-champagne/40 text-champagne" : "border-teal/30 text-teal"
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em]">
                {p.cta} <span className="font-heading text-base text-champagne">↗</span>
              </span>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
