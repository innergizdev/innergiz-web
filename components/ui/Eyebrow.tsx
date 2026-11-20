// Mono section label — a signature of the editorial direction; every major
// section starts with one. Format the children like "SERVICES — 01".
// Teal on light backgrounds; champagne on ink (where it passes contrast).
export default function Eyebrow({
  onInk = false,
  children,
}: {
  onInk?: boolean;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-mono ${
        onInk ? "text-champagne" : "text-teal"
      }`}
    >
      {children}
    </p>
  );
}
