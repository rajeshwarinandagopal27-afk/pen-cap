"use client";

import * as React from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

/**
 * Stat-tile count-up (docs/design/06-motion-system.md #2): animates from 0
 * once the tile is 60% into viewport, ~900ms, tabular numerals so digit
 * width never shifts layout. Fires once per mount.
 */
function CountUp({ value, suffix = "", prefix = "", className, duration = 0.9 }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(shouldReduceMotion ? value : 0);

  React.useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export { CountUp };
