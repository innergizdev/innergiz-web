import Link from "next/link";

// Hairline list row with a drifting arrow — the style guide's replacement for
// cards in service lists. Hover warms the hairline from faint to full champagne.
export default function ArrowLink({
  href,
  onInk = false,
  children,
}: {
  href: string;
  onInk?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center justify-between gap-4 border-b border-champagne-faint py-4 transition-colors duration-200 hover:border-champagne ${
        onInk ? "text-ivory/85 hover:text-ivory" : "text-ink/90 hover:text-ink"
      }`}
    >
      <span className="text-base lg:text-lg">{children}</span>
      <span
        aria-hidden="true"
        className="text-champagne transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </Link>
  );
}
