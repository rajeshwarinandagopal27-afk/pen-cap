"use client";

import * as React from "react";
import Link from "next/link";
import { useInView, useReducedMotion, animate } from "framer-motion";

import { cn } from "@/lib/utils";

interface StatTileProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  footnoteHref?: string;
  footnoteLabel?: string;
  className?: string;
}

export function StatTile({ value, prefix = "", suffix = "", label, footnoteHref, footnoteLabel, className }: StatTileProps) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(reduceMotion ? value : 0);

  React.useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value, reduceMotion]);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <p ref={ref} className="font-mono text-4xl font-medium tabular-nums text-text-primary sm:text-5xl">
        {prefix}
        {display.toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="text-sm text-text-secondary">{label}</p>
      {footnoteHref && (
        <Link href={footnoteHref} className="text-xs font-medium text-accent underline underline-offset-4 hover:no-underline">
          {footnoteLabel ?? "See methodology"}
        </Link>
      )}
    </div>
  );
}
