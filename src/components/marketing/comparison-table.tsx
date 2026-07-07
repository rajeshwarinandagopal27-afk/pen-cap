import Link from "next/link";
import { CheckIcon } from "lucide-react";

import { programs } from "@/lib/data/programs";
import { Button } from "@/components/ui/button";

const rows: { label: string; key: keyof (typeof programs)[number] | "certifications" }[] = [
  { label: "Duration", key: "duration" },
  { label: "Format", key: "format" },
  { label: "Batch size", key: "batchSize" },
  { label: "Average salary", key: "averageSalaryRange" },
];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-secondary/50">
            <th className="p-4 font-semibold text-muted-foreground">Compare</th>
            {programs.map((program) => (
              <th key={program.slug} className="p-4">
                <p className="font-semibold text-foreground">{program.shortName}</p>
                <p className="mt-1 text-xs font-normal text-muted-foreground">{program.level}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-b-0">
              <td className="p-4 font-medium text-muted-foreground">{row.label}</td>
              {programs.map((program) => (
                <td key={program.slug} className="p-4 text-foreground">
                  {String(program[row.key])}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-b border-border">
            <td className="p-4 font-medium text-muted-foreground align-top">Certifications</td>
            {programs.map((program) => (
              <td key={program.slug} className="p-4 align-top">
                <ul className="space-y-1.5">
                  {program.certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-1.5 text-foreground">
                      <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-royal-500" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4" />
            {programs.map((program) => (
              <td key={program.slug} className="p-4">
                <Button asChild size="sm">
                  <Link href={`/courses/${program.slug}`}>View Program</Link>
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
