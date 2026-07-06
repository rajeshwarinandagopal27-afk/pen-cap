"use client";

import * as React from "react";

const GLYPH_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&$*";
const CYCLES_PER_CHAR = 3;
const CYCLE_INTERVAL_MS = 35;
const STAGGER_MS = 15;

function randomGlyph() {
  return GLYPH_POOL[Math.floor(Math.random() * GLYPH_POOL.length)];
}

/**
 * The homepage-only hero "resolve" effect from /docs/design/06-motion-system.md:
 * characters briefly cycle through nearby glyphs before settling on the real
 * word, left to right, staggered ~15ms per character. Fires once on mount.
 */
export function HeroResolveText({ text, className }: { text: string; className?: string }) {
  const characters = React.useMemo(() => text.split(""), [text]);
  const [display, setDisplay] = React.useState<string[]>(() => characters.map((c) => (c === " " ? " " : c)));
  const [settled, setSettled] = React.useState(false);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(characters);
      setSettled(true);
      return;
    }

    setDisplay(characters.map((c) => (c === " " ? " " : randomGlyph())));

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    characters.forEach((char, index) => {
      if (char === " ") return;
      const startDelay = index * STAGGER_MS;

      for (let cycle = 0; cycle < CYCLES_PER_CHAR; cycle++) {
        const t = setTimeout(() => {
          setDisplay((prev) => {
            const next = [...prev];
            next[index] = randomGlyph();
            return next;
          });
        }, startDelay + cycle * CYCLE_INTERVAL_MS);
        timeouts.push(t);
      }

      const settleTimeout = setTimeout(() => {
        setDisplay((prev) => {
          const next = [...prev];
          next[index] = char;
          return next;
        });
      }, startDelay + CYCLES_PER_CHAR * CYCLE_INTERVAL_MS);
      timeouts.push(settleTimeout);
    });

    const finalTimeout = setTimeout(
      () => setSettled(true),
      characters.length * STAGGER_MS + CYCLES_PER_CHAR * CYCLE_INTERVAL_MS + 40
    );
    timeouts.push(finalTimeout);

    return () => timeouts.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className={className} aria-label={text}>
      {display.map((char, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={settled ? undefined : "text-accent"}
          style={{ transition: "color 200ms ease" }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
