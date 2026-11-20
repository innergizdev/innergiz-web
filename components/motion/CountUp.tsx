"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

// Counts from 0 to `value` when scrolled into view (the stats band). Reduced
// users see the final value immediately. Formats with the Indian locale so
// 32,000 groups correctly.
export default function CountUp({
  value,
  duration = 1600,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    if (reduced) {
      // Snap to the final value without animating (still via rAF so we don't
      // call setState synchronously inside the effect body).
      raf = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(raf);
    }
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic — fast then settling, reads as "arriving"
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value, duration]);

  return <span ref={ref}>{display.toLocaleString("en-IN")}</span>;
}
