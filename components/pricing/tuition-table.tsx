import Link from "next/link";

import { programs } from "@/lib/data/programs";

function TuitionTable() {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)]">
      <table className="w-full min-w-[720px] border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
            <th className="p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]">Program</th>
            <th className="p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]">Duration</th>
            <th className="p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]">Tuition</th>
            <th className="p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]">EMI from</th>
            <th className="p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]" />
          </tr>
        </thead>
        <tbody>
          {programs.map((p, i) => (
            <tr key={p.slug} className={i !== programs.length - 1 ? "border-b border-[var(--color-border-muted)]" : ""}>
              <td className="p-4 type-body-sm font-medium text-[var(--color-text-primary)] whitespace-nowrap">
                {p.name}
              </td>
              <td className="p-4 type-body-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                {p.durationWeeks} weeks
              </td>
              <td className="p-4 type-mono-sm text-[var(--color-text-primary)] whitespace-nowrap">
                ₹{p.tuition.toLocaleString("en-IN")}
              </td>
              <td className="p-4 type-mono-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                ₹{p.emiFrom.toLocaleString("en-IN")}/mo
              </td>
              <td className="p-4 text-right">
                <Link
                  href={`/programs/${p.slug}`}
                  className="type-body-sm text-[var(--color-accent)] underline underline-offset-4 whitespace-nowrap"
                >
                  View program
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { TuitionTable };
