"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

interface ScriptLine {
  prompt?: boolean;
  text: string;
  tone?: "default" | "success" | "muted";
}

const SCRIPT: ScriptLine[] = [
  { prompt: true, text: "nmap -sV -p- 10.10.14.22" },
  { text: "PORT   STATE SERVICE   VERSION", tone: "muted" },
  { text: "22/tcp open  ssh", tone: "muted" },
  { text: "80/tcp open  http       nginx 1.24.0", tone: "muted" },
  { prompt: true, text: "curl -s http://10.10.14.22/api/user/1042/role" },
  { text: '{"role":"admin"}  // IDOR: no ownership check on user id', tone: "muted" },
  { prompt: true, text: "curl -s http://10.10.14.22/api/user/1042 -X PATCH -d role=admin" },
  { text: "[✓] Privilege escalation confirmed — IDOR to admin", tone: "success" },
  { text: "[✓] Challenge solved · Web Exploitation / Beginner", tone: "success" },
];

const CHAR_MS = 18;
const LINE_PAUSE_MS = 420;
const END_PAUSE_MS = 2600;

interface CyberRangeTerminalProps {
  className?: string;
  compact?: boolean;
}

function CyberRangeTerminal({ className, compact = false }: CyberRangeTerminalProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [manualPlay, setManualPlay] = React.useState(false);
  const [linesShown, setLinesShown] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.3,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const paused = !inView || hovered || shouldReduceMotion;

  React.useEffect(() => {
    if (paused) return;
    if (linesShown >= SCRIPT.length) {
      const t = setTimeout(() => {
        setLinesShown(0);
        setCharIndex(0);
      }, END_PAUSE_MS);
      return () => clearTimeout(t);
    }

    const currentLine = SCRIPT[linesShown];
    if (charIndex < currentLine.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLinesShown((l) => l + 1);
      setCharIndex(0);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(t);
  }, [paused, linesShown, charIndex]);

  const toneClass: Record<string, string> = {
    default: "text-[var(--ink-50)]",
    success: "text-[var(--risk-success,#2AA876)]",
    muted: "text-[var(--ink-400)]",
  };

  if (shouldReduceMotion && !manualPlay) {
    return (
      <div ref={containerRef} className={className}>
        <TerminalFrame compact={compact}>
          {SCRIPT.map((line, i) => (
            <TerminalLine key={i} line={line} toneClass={toneClass} />
          ))}
          <button
            onClick={() => setManualPlay(true)}
            className="mt-3 flex items-center gap-2 type-body-xs text-[var(--signal-400)] normal-case tracking-normal"
          >
            <Play className="size-3 fill-current" /> Watch demo
          </button>
        </TerminalFrame>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TerminalFrame compact={compact}>
        {SCRIPT.slice(0, linesShown).map((line, i) => (
          <TerminalLine key={i} line={line} toneClass={toneClass} />
        ))}
        {linesShown < SCRIPT.length && (
          <TerminalLine
            line={{ ...SCRIPT[linesShown], text: SCRIPT[linesShown].text.slice(0, charIndex) }}
            toneClass={toneClass}
            caret
          />
        )}
      </TerminalFrame>
    </div>
  );
}

function TerminalFrame({ children, compact }: { children: React.ReactNode; compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--ink-700)] bg-[var(--ink-950)] elevation-glow">
      <div className="flex items-center gap-1.5 border-b border-[var(--ink-800)] px-4 py-3">
        <span className="size-2.5 rounded-full bg-[var(--ink-700)]" />
        <span className="size-2.5 rounded-full bg-[var(--ink-700)]" />
        <span className="size-2.5 rounded-full bg-[var(--ink-700)]" />
        <span className="ml-3 type-body-xs text-[var(--ink-500)] normal-case tracking-normal">
          pencap-cyber-range — web-exploitation-01
        </span>
      </div>
      <div className={compact ? "p-4 min-h-[220px]" : "p-6 min-h-[320px]"}>
        <div className="type-mono-sm sm:text-sm flex flex-col gap-1.5">{children}</div>
      </div>
    </div>
  );
}

function TerminalLine({
  line,
  toneClass,
  caret,
}: {
  line: ScriptLine;
  toneClass: Record<string, string>;
  caret?: boolean;
}) {
  return (
    <div className={toneClass[line.tone ?? "default"]}>
      {line.prompt && <span className="text-[var(--signal-400)]">$ </span>}
      {line.text}
      {caret && <span className="ml-0.5 inline-block h-[1em] w-[0.5ch] animate-pulse bg-[var(--signal-400)] align-middle" />}
    </div>
  );
}

export { CyberRangeTerminal };
