"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Hero3D = dynamic(() => import("@/components/home/hero-3d"), {
  ssr: false,
  loading: () => null,
});

/** Static, instant, elegant top-view IC — the LCP-safe poster + fallback. */
function HeroPoster() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 240 240" className="h-[min(60vh,460px)] w-auto" aria-hidden="true">
        <defs>
          <radialGradient id="hp-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#2e86ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2e86ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="20" y="20" width="200" height="200" fill="url(#hp-glow)" />
        {/* pins */}
        <g className="stroke-titanium-500" strokeWidth="3" strokeLinecap="round">
          {Array.from({ length: 7 }).map((_, i) => {
            const p = 78 + i * 14;
            return (
              <g key={i}>
                <line x1={p} y1="62" x2={p} y2="74" />
                <line x1={p} y1="166" x2={p} y2="178" />
                <line x1="62" y1={p} x2="74" y2={p} />
                <line x1="166" y1={p} x2="178" y2={p} />
              </g>
            );
          })}
        </g>
        {/* body */}
        <rect x="74" y="74" width="92" height="92" rx="10" fill="#0a0f18" stroke="#1b2230" strokeWidth="1.5" />
        {/* die circuit */}
        <g className="stroke-accent-500" strokeWidth="1" opacity="0.85">
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`v${i}`} x1={88 + i * 16} y1="86" x2={88 + i * 16} y2="154" />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`h${i}`} x1="86" y1={88 + i * 16} x2="154" y2={88 + i * 16} />
          ))}
        </g>
        <g className="fill-accent-300">
          {[0, 2, 4].map((a) =>
            [1, 3].map((b) => <circle key={`${a}-${b}`} cx={88 + a * 16} cy={88 + b * 16} r="2" />),
          )}
        </g>
        <circle cx="86" cy="86" r="3.5" className="fill-accent-500" />
      </svg>
    </div>
  );
}

function useCanRender3D() {
  const [ok, setOk] = React.useState(false);
  React.useEffect(() => {
    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fine = window.matchMedia("(pointer: fine)").matches;
      const cores = navigator.hardwareConcurrency || 4;
      const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
      let webgl = false;
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
      setOk(!reduce && fine && webgl && cores >= 4 && !saveData);
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}

export function HeroScene() {
  const canRender = useCanRender3D();

  return (
    <div className="absolute inset-0">
      <HeroPoster />
      {canRender && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
        >
          <Hero3D />
        </motion.div>
      )}
    </div>
  );
}
