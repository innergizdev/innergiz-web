// Faint champagne vertical hairlines that run behind a section, making
// whitespace read as a designed grid rather than empty space.
// Decorative: aria-hidden, absolutely positioned, non-interactive.
// Place inside a `relative` container; lines sit behind content (-z-10).
export default function GridGhosts({
  columns = 4,
  className = "",
}: {
  columns?: number;
  className?: string;
}) {
  // Interior dividers only (columns - 1), evenly spaced.
  const lines = Array.from({ length: columns - 1 }, (_, i) => ((i + 1) / columns) * 100);
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
      {lines.map((left) => (
        <span
          key={left}
          className="absolute top-0 bottom-0 w-px bg-champagne-faint"
          style={{ left: `${left}%` }}
        />
      ))}
    </div>
  );
}
