// Vertical page band. Section rhythm per style guide: ivory, ivory, INK, ivory —
// dark sections are events, not alternation.
const tones = {
  ivory: "bg-ivory text-ink",
  deep: "bg-ivory-deep text-ink",
  ink: "bg-ink text-ivory",
} as const;

export type SectionTone = keyof typeof tones;

export default function Section({
  tone = "ivory",
  className = "",
  children,
}: {
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`${tones[tone]} py-[clamp(80px,12vh,160px)] ${className}`}>
      {children}
    </section>
  );
}
