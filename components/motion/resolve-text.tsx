"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

const GLYPH_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*01".split("");

function randomGlyph() {
  return GLYPH_POOL[Math.floor(Math.random() * GLYPH_POOL.length)];
}

interface ResolveTextProps {
  text: string;
  className?: string;
  as?: "h1" | "span";
}

/**
 * Homepage hero-only signature effect (docs/design/06-motion-system.md #1):
 * characters cycle through nearby glyphs before settling, left to right,
 * ~15ms stagger per character, ~560ms total. Fires once on first mount.
 * Reduced motion: renders final text immediately, no cycling.
 */
function ResolveText({ text, className, as = "h1" }: ResolveTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(() => (shouldReduceMotion ? text : ""));
  const [done, setDone] = React.useState(!!shouldReduceMotion);
  const Component = as;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(text);
      setDone(true);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const perCharMs = 15;
    const cyclesPerChar = 3;
    const cycleMs = 30;

    function tick(now: number) {
      const elapsed = now - start;
      let out = "";
      let allSettled = true;

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === " ") {
          out += " ";
          continue;
        }
        const charStart = i * perCharMs;
        const charElapsed = elapsed - charStart;
        const settleAt = cyclesPerChar * cycleMs;

        if (charElapsed < 0) {
          out += " ";
          allSettled = false;
        } else if (charElapsed < settleAt) {
          out += randomGlyph();
          allSettled = false;
        } else {
          out += char;
        }
      }

      setDisplay(out);

      if (!allSettled) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        setDone(true);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Component className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
      {!done && <span className="sr-only">{text}</span>}
    </Component>
  );
}

export { ResolveText };
