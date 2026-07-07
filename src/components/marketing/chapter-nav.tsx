"use client";

import * as React from "react";

import { chapters } from "@/lib/data/chapters";
import { cn } from "@/lib/utils";

export function ChapterNav() {
  const [active, setActive] = React.useState<string>(chapters[0].id);

  React.useEffect(() => {
    const elements = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Chapter navigation"
      className="fixed right-6 top-1/2 z-sticky-cta hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
    >
      {chapters.map((chapter) => {
        const isActive = chapter.id === active;
        return (
          <a key={chapter.id} href={`#${chapter.id}`} className="group flex items-center gap-3">
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                isActive && "text-accent opacity-100"
              )}
            >
              {chapter.index} — {chapter.label}
            </span>
            <span
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "size-1.5 rounded-full bg-text-muted/50 transition-all duration-300 ease-[var(--ease-emphasized)]",
                isActive && "size-2.5 bg-accent shadow-[0_0_0_4px_var(--color-accent-fill)]"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
