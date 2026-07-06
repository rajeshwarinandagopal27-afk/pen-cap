"use client";

import { motion, useReducedMotion } from "framer-motion";

import { salaryByYear } from "@/lib/data/outcomes";

function formatInr(n: number) {
  return `₹${(n / 100000).toFixed(1)}L`;
}

function SalaryChart() {
  const shouldReduceMotion = useReducedMotion();
  const max = Math.max(...salaryByYear.map((y) => y.after));

  return (
    <div>
      <div className="mb-5 flex items-center gap-5">
        <span className="flex items-center gap-2 type-body-xs text-[var(--color-text-secondary)] normal-case tracking-normal">
          <span className="size-2.5 rounded-full bg-[var(--ink-400)]" /> Before PenCap
        </span>
        <span className="flex items-center gap-2 type-body-xs text-[var(--color-text-secondary)] normal-case tracking-normal">
          <span className="size-2.5 rounded-full bg-[var(--color-accent)]" /> First security role
        </span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {salaryByYear.map((y) => (
          <div key={y.year} className="flex flex-col items-center gap-1.5">
            <div className="flex h-44 w-full items-end justify-center gap-1.5">
              <div className="flex h-full w-full max-w-8 flex-col items-center justify-end gap-1">
                <span className="type-mono-sm text-[10px] text-[var(--color-text-muted)] sm:text-xs">
                  {formatInr(y.before)}
                </span>
                <motion.div
                  className="w-full rounded-t-[var(--radius-sm)] bg-[var(--ink-400)]"
                  initial={{ height: shouldReduceMotion ? `${(y.before / max) * 100}%` : 0 }}
                  whileInView={{ height: `${(y.before / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="flex h-full w-full max-w-8 flex-col items-center justify-end gap-1">
                <span className="type-mono-sm text-[10px] text-[var(--color-text-primary)] sm:text-xs">
                  {formatInr(y.after)}
                </span>
                <motion.div
                  className="w-full rounded-t-[var(--radius-sm)] bg-[var(--color-accent)]"
                  initial={{ height: shouldReduceMotion ? `${(y.after / max) * 100}%` : 0 }}
                  whileInView={{ height: `${(y.after / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
                />
              </div>
            </div>
            <span className="type-body-xs text-[var(--color-text-muted)]">{y.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { SalaryChart };
