"use client";

import * as React from "react";

/**
 * A subtle augmenting cursor: a soft accent ring that trails the native
 * pointer and expands over interactive elements. The native cursor is kept
 * visible for usability. Renders only on fine-pointer, non-reduced-motion
 * devices; it never blocks pointer events.
 */
export function Cursor() {
  const ringRef = React.useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const ring = ringRef.current;
    if (!ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const interactive = (e.target as HTMLElement)?.closest(
        'a, button, [role="button"], input, textarea, select, label',
      );
      hovering = Boolean(interactive);
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      const scale = hovering ? 1.9 : 1;
      ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0) scale(${scale})`;
      ring.style.opacity = hovering ? "0.9" : "0.55";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[500] size-8 rounded-full border border-accent-400/70 mix-blend-screen transition-[opacity] duration-200 will-change-transform"
      style={{ opacity: 0 }}
    />
  );
}
