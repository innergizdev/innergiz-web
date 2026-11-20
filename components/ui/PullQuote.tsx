// The single serif moment per page: Fraunces italic, used for
// the philosophy statement or a founder quote — never more than once per page.
export default function PullQuote({
  onInk = false,
  children,
}: {
  onInk?: boolean;
  children: React.ReactNode;
}) {
  return (
    <blockquote
      className={`max-w-[28ch] font-voice text-2xl italic leading-snug lg:text-3xl ${
        onInk ? "text-ivory" : "text-ink"
      }`}
    >
      {children}
    </blockquote>
  );
}
