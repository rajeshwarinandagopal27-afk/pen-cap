export type MotifVariant =
  | "chipgrid"
  | "orbits"
  | "scan"
  | "constellation"
  | "traces"
  | "waveform";

/**
 * Decorative, per-page hero motif. Pure SVG + CSS animation (zero JS), so
 * the global reduced-motion rule neutralises all movement automatically.
 */
export function PageHeroMotif({ variant }: { variant: MotifVariant }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 items-center justify-center [mask-image:linear-gradient(to_left,black,transparent)] md:flex"
    >
      <svg viewBox="0 0 220 220" className="h-[min(90%,420px)] w-auto text-accent-500">
        {variant === "chipgrid" && <ChipGrid />}
        {variant === "orbits" && <Orbits />}
        {variant === "scan" && <Scan />}
        {variant === "constellation" && <Constellation />}
        {variant === "traces" && <Traces />}
        {variant === "waveform" && <Waveform />}
      </svg>
    </div>
  );
}

function ChipGrid() {
  return (
    <g fill="none" stroke="currentColor" opacity={0.4}>
      <rect x="70" y="70" width="80" height="80" rx="8" strokeWidth={1.5} />
      {[0, 1, 2, 3].map((i) => {
        const p = 88 + i * 16;
        return (
          <g key={i} strokeWidth={1.2}>
            <line x1={p} y1="58" x2={p} y2="70" />
            <line x1={p} y1="150" x2={p} y2="162" />
            <line x1="58" y1={p} x2="70" y2={p} />
            <line x1="150" y1={p} x2="162" y2={p} />
          </g>
        );
      })}
      <g stroke="currentColor" strokeWidth={0.8} opacity={0.6}>
        {[0, 1, 2, 3, 4].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <circle key={`${r}-${c}`} cx={82 + c * 14} cy={82 + r * 14} r={1} fill="currentColor" />
          )),
        )}
      </g>
      <circle cx="110" cy="110" r="6" className="fill-accent-500" opacity={0.9} />
    </g>
  );
}

function Orbits() {
  return (
    <g fill="none" stroke="currentColor">
      {[36, 58, 80, 100].map((r, i) => (
        <circle key={r} cx="110" cy="110" r={r} strokeWidth={1} opacity={0.18 + i * 0.05} />
      ))}
      <g className="origin-center animate-spin-slow">
        <circle cx="210" cy="110" r="3.5" className="fill-accent-400" />
      </g>
      <g className="origin-center animate-spin-slow" style={{ animationDuration: "32s", animationDirection: "reverse" }}>
        <circle cx="52" cy="110" r="2.5" className="fill-accent-300" />
      </g>
      <circle cx="110" cy="110" r="4" className="fill-white" opacity={0.8} />
    </g>
  );
}

function Scan() {
  return (
    <g>
      <g stroke="currentColor" strokeWidth={0.8} opacity={0.25}>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`v${i}`} x1={40 + i * 24} y1="30" x2={40 + i * 24} y2="190" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`h${i}`} x1="40" y1={30 + i * 24} x2="184" y2={30 + i * 24} />
        ))}
      </g>
      <g stroke="currentColor" strokeWidth={1.5} fill="none" opacity={0.6}>
        <path d="M40 44V30h14" />
        <path d="M184 44V30h-14" />
        <path d="M40 176v14h14" />
        <path d="M184 176v14h-14" />
      </g>
      <line x1="40" y1="34" x2="184" y2="34" stroke="currentColor" strokeWidth={2} className="animate-scan" opacity={0.9} />
    </g>
  );
}

function Constellation() {
  const dots = Array.from({ length: 22 }, (_, i) => ({
    x: 30 + ((i * 47) % 160),
    y: 30 + ((i * 83) % 160),
    d: (i % 6) * 0.6,
  }));
  return (
    <g>
      <g stroke="currentColor" strokeWidth={0.6} opacity={0.2}>
        {dots.slice(0, 10).map((p, i) => {
          const q = dots[(i + 3) % dots.length];
          return <line key={i} x1={p.x} y1={p.y} x2={q.x} y2={q.y} />;
        })}
      </g>
      {dots.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i % 5 === 0 ? 2.4 : 1.4}
          className="fill-accent-400 animate-twinkle"
          style={{ animationDelay: `${p.d}s` }}
        />
      ))}
    </g>
  );
}

function Traces() {
  return (
    <g fill="none" stroke="currentColor">
      <g strokeWidth={1.2} opacity={0.28}>
        <path d="M20 60h60v40h50" />
        <path d="M20 110h40v50h70" />
        <path d="M30 170h50v-30h60" />
        <path d="M200 50h-40v40h-40" />
      </g>
      <g strokeWidth={1.6} strokeDasharray="4 8" className="animate-dash text-accent-300" opacity={0.9}>
        <path d="M20 60h60v40h50" />
        <path d="M200 50h-40v40h-40" />
      </g>
      {[
        [80, 100],
        [130, 100],
        [110, 160],
        [120, 90],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.4} className="fill-accent-400" opacity={0.9} />
      ))}
    </g>
  );
}

function Waveform() {
  return (
    <g fill="none" stroke="currentColor">
      {[30, 52, 74, 96].map((r, i) => (
        <circle
          key={r}
          cx="110"
          cy="110"
          r={r}
          strokeWidth={1.2}
          className="animate-twinkle"
          style={{ animationDelay: `${i * 0.5}s` }}
          opacity={0.5}
        />
      ))}
      <circle cx="110" cy="110" r="5" className="fill-white" opacity={0.85} />
    </g>
  );
}
