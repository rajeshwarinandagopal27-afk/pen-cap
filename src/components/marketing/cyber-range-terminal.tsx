"use client";

import * as React from "react";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

type ScriptLine = { type: "input" | "output" | "note"; text: string };

const SCRIPT: ScriptLine[] = [
  { type: "input", text: "curl -s https://portal.internal.test/api/invoice/1042" },
  { type: "output", text: '{"tenant_id": 1042, "vendor": "Solace Financial", "amount": "14,900.00"}' },
  { type: "input", text: "curl -s https://portal.internal.test/api/invoice/1041" },
  { type: "output", text: '{"tenant_id": 1041, "vendor": "Northgate Health Systems", "amount": "8,900.00"}' },
  { type: "note", text: "Finding: sequential tenant IDs, no ownership check on GET /invoice/:id." },
];

const CHAR_MS = 18;
const LINE_PAUSE_MS = 700;
const LOOP_PAUSE_MS = 2200;

export function CyberRangeTerminal({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [manualPlay, setManualPlay] = React.useState(false);
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charCount, setCharCount] = React.useState(0);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const playing = (inView || manualPlay) && !hovered && (!reducedMotion || manualPlay);

  React.useEffect(() => {
    if (!playing) return;

    const currentLine = SCRIPT[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (charCount < currentLine.text.length) {
      timeout = setTimeout(() => setCharCount((c) => c + 1), CHAR_MS);
    } else {
      const isLast = lineIndex === SCRIPT.length - 1;
      timeout = setTimeout(
        () => {
          if (isLast) {
            setLineIndex(0);
            setCharCount(0);
          } else {
            setLineIndex((i) => i + 1);
            setCharCount(0);
          }
        },
        isLast ? LOOP_PAUSE_MS : LINE_PAUSE_MS
      );
    }

    return () => clearTimeout(timeout);
  }, [playing, lineIndex, charCount]);

  if (reducedMotion && !manualPlay) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "flex flex-col justify-center gap-2 rounded-[var(--radius-lg)] border border-border bg-ink-950 p-6 font-mono text-sm text-ink-100",
          className
        )}
      >
        {SCRIPT.map((line, i) => (
          <TerminalLine key={i} line={line} />
        ))}
        <button
          type="button"
          onClick={() => setManualPlay(true)}
          className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-signal-500/40 px-3 py-1.5 text-xs font-sans text-signal-300 transition-colors hover:border-signal-400"
        >
          <Play className="size-3.5" aria-hidden="true" /> Watch demo
        </button>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="img"
      aria-label="Animated terminal demo: finding a broken access control vulnerability in a simulated invoice portal by requesting sequential invoice IDs."
      className={cn(
        "flex min-h-[14rem] flex-col gap-2 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-ink-950 p-6 font-mono text-sm text-ink-100",
        className
      )}
    >
      <div className="mb-2 flex gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-ink-700" />
        <span className="size-2.5 rounded-full bg-ink-700" />
        <span className="size-2.5 rounded-full bg-ink-700" />
      </div>
      <div aria-hidden="true">
        {SCRIPT.slice(0, lineIndex).map((line, i) => (
          <TerminalLine key={i} line={line} />
        ))}
        <TerminalLine line={{ ...SCRIPT[lineIndex], text: SCRIPT[lineIndex].text.slice(0, charCount) }} caret />
      </div>
    </div>
  );
}

function TerminalLine({ line, caret }: { line: ScriptLine; caret?: boolean }) {
  if (line.type === "input") {
    return (
      <p className="text-ink-100">
        <span className="text-signal-400">$</span> {line.text}
        {caret && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-signal-400 align-middle" />}
      </p>
    );
  }
  if (line.type === "output") {
    return (
      <p className="pl-4 text-ink-300">
        {line.text}
        {caret && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-signal-400 align-middle" />}
      </p>
    );
  }
  return (
    <p className="mt-1 text-ember-400">
      # {line.text}
      {caret && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-signal-400 align-middle" />}
    </p>
  );
}
