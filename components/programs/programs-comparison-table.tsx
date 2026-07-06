import Link from "next/link";

import type { Program } from "@/lib/data/programs";

function ProgramsComparisonTable({ programs }: { programs: Program[] }) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)]">
      <table className="w-full min-w-[900px] border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
            <th className="sticky left-0 z-10 bg-[var(--color-surface-raised)] p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]">
              &nbsp;
            </th>
            {programs.map((p) => (
              <th key={p.slug} className="p-4 text-left type-body-sm font-semibold text-[var(--color-text-primary)] whitespace-nowrap">
                <Link href={`/programs/${p.slug}`} className="hover:underline underline-offset-4">
                  {p.shortName}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="type-body-sm text-[var(--color-text-secondary)]">
          <Row label="Outcome stat" values={programs.map((p) => `${p.outcomeStat} ${p.outcomeLabel.replace(/^\d+%\s*/, "")}`)} />
          <Row label="Level" values={programs.map((p) => p.level)} />
          <Row label="Focus" values={programs.map((p) => p.focus)} />
          <Row label="Duration" values={programs.map((p) => `${p.durationWeeks} weeks`)} />
          <Row label="Format" values={programs.map((p) => p.format.join(" / "))} />
          <Row label="Tuition" values={programs.map((p) => `₹${p.tuition.toLocaleString("en-IN")}`)} />
          <Row label="EMI from" values={programs.map((p) => `₹${p.emiFrom.toLocaleString("en-IN")}/mo`)} />
          <Row label="Certifications" values={programs.map((p) => p.certifications.join(", "))} />
          <Row label="Next cohort" values={programs.map((p) => p.nextCohort)} last />
        </tbody>
      </table>
    </div>
  );
}

function Row({ label, values, last }: { label: string; values: string[]; last?: boolean }) {
  return (
    <tr className={last ? "" : "border-b border-[var(--color-border-muted)]"}>
      <td className="sticky left-0 z-10 bg-[var(--color-surface)] p-4 type-body-sm font-medium text-[var(--color-text-primary)] whitespace-nowrap">
        {label}
      </td>
      {values.map((v, i) => (
        <td key={i} className="p-4 align-top">
          {v}
        </td>
      ))}
    </tr>
  );
}

export { ProgramsComparisonTable };
