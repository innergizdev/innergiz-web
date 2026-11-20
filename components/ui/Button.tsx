import Link from "next/link";

// Buttons per the style guide: mono uppercase labels, near-square corners.
// primary = the crimson CTA (one per viewport, max); secondary = teal outline
// on light sections, champagne outline on ink sections (tone="ink").
const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200";

const variants = {
  primary: "bg-primary text-ivory hover:bg-primary-hover",
  secondary: "border border-secondary text-secondary hover:bg-secondary hover:text-ivory",
  secondaryInk: "border border-champagne text-champagne hover:bg-champagne hover:text-ink",
} as const;

export default function Button({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
  ...rest
}: {
  href?: string;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
