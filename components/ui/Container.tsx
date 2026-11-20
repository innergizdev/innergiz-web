// Horizontal bound for all section content: 1600px max, fluid gutters
// (clamp 20px→60px) per the redesign spec.
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,60px)] ${className}`}>
      {children}
    </div>
  );
}
