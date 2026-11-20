"use client";

import { useEffect, useRef, useState } from "react";
import type { TeamMember } from "@/content/types";

// Editorial "credits page": each member is a row of [role label] [small grayscale
// photo] [big name + credentials]. Clicking a member with a bio opens a right-hand
// drawer with their large portrait behind it. Numbering intentionally absent.
const label = "flex-[0_0_180px] pt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-teal";
const row = "flex flex-wrap items-start gap-x-[clamp(24px,4vw,56px)] gap-y-5 border-b border-ink/20";
const cred = "font-voice text-[clamp(16px,1.4vw,20px)] italic leading-[1.4] text-ink/80";

function Thumb({ m }: { m: TeamMember }) {
  return (
    <span
      role="img"
      aria-label={m.name}
      className="h-[120px] w-24 flex-none rounded-sm bg-ivory-deep bg-cover bg-top grayscale contrast-105"
      style={{ backgroundImage: `url(${m.photo})` }}
    />
  );
}

function Entry({
  m,
  nameClass,
  credClass = cred,
  onOpen,
}: {
  m: TeamMember;
  nameClass: string;
  credClass?: string;
  onOpen: (m: TeamMember) => void;
}) {
  const clickable = m.bio.length > 0;
  return (
    <button
      type="button"
      disabled={!clickable}
      onClick={() => onOpen(m)}
      className={`flex min-w-0 flex-[1_1_420px] items-start gap-[clamp(18px,2.4vw,32px)] text-left text-ink ${
        clickable ? "cursor-pointer hover:text-teal" : "cursor-default"
      }`}
    >
      <Thumb m={m} />
      <span className="flex min-w-0 flex-1 flex-col gap-3.5">
        <span className={nameClass}>{m.name}</span>
        <span className={credClass}>{m.credentials}</span>
      </span>
    </button>
  );
}

export default function TeamMasthead({
  team,
  portrait = "photo",
}: {
  team: TeamMember[];
  portrait?: "photo" | "sketch";
}) {
  const [open, setOpen] = useState<TeamMember | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const [founder, partner, ...rest] = team;
  const coaches = rest.slice(0, 3);
  const last = rest[3];

  // While the drawer is open: lock body scroll, close on Esc, trap Tab within
  // the dialog, and restore focus to the opener on close.
  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocused.current?.focus?.();
    };
  }, [open]);

  const portraitClass =
    portrait === "sketch"
      ? "grayscale invert contrast-[2.4] brightness-[1.15] mix-blend-screen opacity-55"
      : "grayscale contrast-110 mix-blend-luminosity opacity-85";

  return (
    <section
      id="team"
      className="border-t border-champagne/50 bg-ivory px-[clamp(20px,5vw,60px)] py-[clamp(80px,12vh,150px)]"
    >
      <div className="mx-auto flex max-w-[1500px] flex-col">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink pb-3.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-teal">Meet the team</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink/60">Masthead · New Delhi</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-[clamp(40px,6vw,80px)] pt-4">
          <h2 className="font-voice text-[clamp(3rem,8vw,7rem)] font-light italic leading-[0.95] tracking-[-0.02em]">
            The Innergizers
          </h2>
          <p className="max-w-[30ch] text-sm leading-[1.5] text-ink/65">
            Six coaches and facilitators. Select a name to read their story.
          </p>
        </div>

        <div className={`${row} py-[clamp(40px,5vw,64px)]`}>
          <span className={label}>Founder &amp; CEO</span>
          <Entry m={founder} onOpen={setOpen} nameClass="font-heading text-[clamp(3rem,9vw,8rem)] uppercase leading-[0.86]" />
        </div>
        <div className={`${row} py-[clamp(32px,4vw,52px)]`}>
          <span className={label}>Managing Partner</span>
          <Entry
            m={partner}
            onOpen={setOpen}
            nameClass="font-voice text-[clamp(2.4rem,5.4vw,4.6rem)] font-light italic leading-none tracking-[-0.015em]"
          />
        </div>
        <div className={`${row} py-[clamp(32px,4vw,52px)]`}>
          <span className={label}>Coaches &amp; facilitators</span>
          <div className="grid min-w-0 flex-[1_1_520px] gap-x-[clamp(24px,3vw,40px)] gap-y-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {coaches.map((m) => (
              <Entry
                key={m.slug}
                m={m}
                onOpen={setOpen}
                nameClass="font-heading text-[clamp(1.6rem,2.4vw,2.2rem)] uppercase leading-[0.95]"
                credClass="font-voice text-[15px] italic leading-[1.4] text-ink/80"
              />
            ))}
          </div>
        </div>
        {last && (
          <div className={`${row} border-b-0 py-[clamp(32px,4vw,52px)]`}>
            <span className={label}>Partner</span>
            <Entry
              m={last}
              onOpen={setOpen}
              nameClass="font-voice text-[clamp(1.8rem,3.4vw,2.8rem)] font-light italic leading-none"
              credClass="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/70"
            />
          </div>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end" role="presentation">
          <div
            onClick={() => setOpen(null)}
            className="absolute inset-0 animate-[ig-fade_.3s_ease] cursor-pointer bg-ink/94 backdrop-blur-[8px]"
          />
          {/* Large portrait fills the space left of the drawer (md+) */}
          <div
            aria-hidden
            onClick={() => setOpen(null)}
            className="absolute inset-y-0 left-0 right-[min(580px,100%)] hidden cursor-pointer items-center justify-center p-[clamp(24px,5vw,80px)] md:flex"
          >
            <div className="relative aspect-[4/5] h-[min(78vh,720px)] max-w-full">
              <div
                className={`absolute inset-0 bg-cover bg-top [mask-image:radial-gradient(ellipse_70%_75%_at_50%_42%,#000_55%,transparent_100%)] ${portraitClass}`}
                style={{ backgroundImage: `url(${open.photo})` }}
              />
              <span className="absolute -bottom-7 left-0 font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/55">
                {open.name}
              </span>
            </div>
          </div>
          <aside
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={open.name}
            className="relative flex h-full w-[min(580px,100%)] animate-[ig-drawer_.45s_cubic-bezier(.22,1,.36,1)] flex-col gap-5 overflow-y-auto bg-ivory p-[clamp(28px,4vw,48px)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">{open.role}</span>
              <button
                autoFocus
                onClick={() => setOpen(null)}
                className="rounded-sm border border-ink/30 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em]"
              >
                Close ✕
              </button>
            </div>
            <h3 className="font-heading text-[clamp(2.2rem,4vw,3rem)] uppercase leading-[0.92]">{open.name}</h3>
            <p className="border-b border-champagne/50 pb-5 font-voice text-lg italic leading-[1.4]">
              {open.credentials}
            </p>
            {open.bio.map((p) => (
              <p key={p.slice(0, 32)} className="text-[15px] leading-[1.7] text-ink/80">
                {p}
              </p>
            ))}
            {open.certifications.length > 0 && (
              <div className="flex flex-col">
                <span className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-teal">Certifications</span>
                {open.certifications.map((c) => (
                  <p key={c.slice(0, 40)} className="border-b border-champagne/50 py-2.5 text-sm leading-[1.6]">
                    {c}
                  </p>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}
    </section>
  );
}
