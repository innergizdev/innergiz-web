"use client";

import { motion, useReducedMotion } from "motion/react";

// Scroll-triggered reveal: content rises 24px and fades in once when it enters
// the viewport. Honors prefers-reduced-motion — reduced users
// get the content immediately with no transform.
//
// `delay` staggers siblings; `as` lets a reveal be a <li>, <section>, etc.
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
