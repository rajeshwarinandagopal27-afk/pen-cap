"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

const variants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

/** Default section-entrance motion per docs/design/06-motion-system.md. */
function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? undefined : variants}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Component>
  );
}

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

/** Staggers direct children by ~60ms, capped to keep long grids feeling premium. */
function RevealGroup({ children, className, stagger = 0.06 }: RevealGroupProps) {
  const shouldReduceMotion = useReducedMotion();
  const items = React.Children.toArray(children);
  const cappedStagger = items.length > 8 ? 0 : stagger;

  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} delay={shouldReduceMotion ? 0 : i * cappedStagger}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

export { Reveal, RevealGroup };
