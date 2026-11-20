// Used sparingly per style guide — prefer hairline rows and open grids.
// No shadows anywhere in this design; the deep-ivory surface does the lifting.
export default function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`rounded-lg bg-ivory-deep p-6 ${className}`}>{children}</div>;
}
