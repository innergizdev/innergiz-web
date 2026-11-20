// Display typography. level 1 is the oversized editorial headline (Anton, caps,
// tight leading); 2 and 3 step down per the style guide's type scale.
// level 2 uses the large section scale so editorial type-contrast carries down
// the whole page, not just the hero (design elevation, 2026-07-08).
const levels = {
  1: "text-display",
  2: "text-section",
  3: "text-2xl",
} as const;

export default function Heading({
  level = 2,
  className = "",
  children,
}: {
  level?: keyof typeof levels;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={`font-heading uppercase leading-[0.92] ${levels[level]} ${className}`}>
      {children}
    </Tag>
  );
}
