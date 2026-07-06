import { Check, Minus, X } from "lucide-react";

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface ComparisonTableProps {
  columns: string[];
  rows: { label: string; values: (boolean | string)[] }[];
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 text-risk-success">
        <Check className="size-4" aria-hidden="true" />
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-1.5 text-text-muted">
        <X className="size-4" aria-hidden="true" />
        <span className="sr-only">No</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-text-secondary">
      <Minus className="size-3.5 shrink-0" aria-hidden="true" />
      {value}
    </span>
  );
}

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>&nbsp;</TableHead>
          {columns.map((column, i) => (
            <TableHead key={column} className={i === 0 ? "text-accent" : undefined}>
              {column}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.label}>
            <TableCell className="font-medium text-text-primary">{row.label}</TableCell>
            {row.values.map((value, i) => (
              <TableCell key={i}>
                <Cell value={value} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
