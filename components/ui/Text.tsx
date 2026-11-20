// Body copy. Max line length 65ch for readability; ink at reduced opacity is
// softer than pure ink and matches the lux tone. onInk flips for dark sections.
export default function Text({
  muted = false,
  onInk = false,
  className = "",
  children,
}: {
  muted?: boolean;
  onInk?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const color = onInk
    ? muted
      ? "text-ivory/60"
      : "text-ivory/85"
    : muted
      ? "text-ink/60"
      : "text-ink/90";
  return (
    <p className={`max-w-[65ch] text-base leading-[1.7] lg:text-lg ${color} ${className}`}>
      {children}
    </p>
  );
}
