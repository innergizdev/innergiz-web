import Image from "next/image";
import { CLIENTS } from "@/content/site-data";

// Logos only — no boxes, no names. Grayscale, CSS-only marquee (the track holds
// two copies; the -50% translate loops seamlessly). Edge mask fades both ends.
export default function LogoWall() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-champagne/50 bg-ivory-deep py-11">
      <p className="mx-auto mb-6 max-w-[1600px] px-[clamp(20px,5vw,60px)] font-mono text-[10px] uppercase tracking-[0.28em] text-teal">
        Trusted by leadership teams at
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee-track flex w-max items-center">
          {loop.map((c, i) => (
            <li
              key={c.file + i}
              className="relative mx-7 h-12 w-[132px] shrink-0"
              aria-hidden={i >= CLIENTS.length}
            >
              <Image
                src={`/clients/${c.file}.png`}
                alt={i < CLIENTS.length ? c.name : ""}
                fill
                sizes="132px"
                className="object-contain opacity-80 grayscale"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
