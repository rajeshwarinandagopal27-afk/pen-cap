import { Check, Minus, X } from "lucide-react";

import { cn } from "@/lib/utils";

interface ComparisonRow {
  label: string;
  pencap: string;
  selfStudy: string;
  genericBootcamp: string;
}

function Cell({ value }: { value: string }) {
  if (value === "N/A") {
    return (
      <span className="flex items-center gap-2 type-body-sm text-[var(--color-text-muted)]">
        <Minus className="size-4 shrink-0" /> N/A
      </span>
    );
  }
  const negative = /rarely|often|absent|vague|uncapped|unpublished|static|anonymized/i.test(value);
  return (
    <span className="flex items-start gap-2 type-body-sm text-[var(--color-text-primary)]">
      {negative ? (
        <X className="size-4 shrink-0 mt-0.5 text-[var(--color-text-muted)]" />
      ) : (
        <Check className="size-4 shrink-0 mt-0.5 text-[var(--risk-success)]" />
      )}
      {value}
    </span>
  );
}

function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)]">
      <table className="w-full min-w-[720px] border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
            <th className="sticky left-0 z-10 bg-[var(--color-surface-raised)] p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]">
              &nbsp;
            </th>
            <th className="p-4 text-left type-body-sm font-semibold text-[var(--color-text-primary)]">PenCap</th>
            <th className="p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]">Self-study</th>
            <th className="p-4 text-left type-body-sm font-medium text-[var(--color-text-muted)]">Generic bootcamp</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={cn(i !== rows.length - 1 && "border-b border-[var(--color-border-muted)]")}>
              <td className="sticky left-0 z-10 bg-[var(--color-surface)] p-4 type-body-sm font-medium text-[var(--color-text-primary)] whitespace-nowrap">
                {row.label}
              </td>
              <td className="p-4">
                <Cell value={row.pencap} />
              </td>
              <td className="p-4">
                <Cell value={row.selfStudy} />
              </td>
              <td className="p-4">
                <Cell value={row.genericBootcamp} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { ComparisonTable };
export type { ComparisonRow };
