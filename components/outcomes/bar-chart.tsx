"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface BarChartRow {
  label: string;
  value: number;
  displayValue: string;
}

interface BarChartProps {
  rows: BarChartRow[];
  max?: number;
  barClassName?: string;
}

/**
 * Plain-HTML horizontal bar chart: single sequential hue, direct value
 * labels (so identity/magnitude never depends on reading bar length or
 * color alone), per dataviz skill guidance.
 */
function BarChart({ rows, max, barClassName = "bg-[var(--color-accent)]" }: BarChartProps) {
  const shouldReduceMotion = useReducedMotion();
  const maxValue = max ?? Math.max(...rows.map((r) => r.value));

  return (
    <ul className="flex flex-col gap-4">
      {rows.map((row) => (
        <li key={row.label} className="flex items-center gap-4">
          <span className="w-40 shrink-0 type-body-sm text-[var(--color-text-secondary)]">{row.label}</span>
          <div className="relative h-3 flex-1 overflow-hidden rounded-[var(--radius-full)] bg-[var(--color-border-muted)]">
            <motion.div
              className={`h-full rounded-[var(--radius-full)] ${barClassName}`}
              initial={{ width: shouldReduceMotion ? `${(row.value / maxValue) * 100}%` : 0 }}
              whileInView={{ width: `${(row.value / maxValue) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="w-16 shrink-0 text-right type-mono-sm text-[var(--color-text-primary)]">
            {row.displayValue}
          </span>
        </li>
      ))}
    </ul>
  );
}

export { BarChart };
export type { BarChartRow };
