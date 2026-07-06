"use client";

import * as React from "react";
import Link from "next/link";
import { LayoutGrid, Rows3 } from "lucide-react";

import type { Program } from "@/lib/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProgramCard } from "@/components/marketing/program-card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { formatUsd, cn } from "@/lib/utils";

const categoryLabels: Record<string, string> = {
  all: "All categories",
  offensive: "Offensive security",
  defensive: "Defensive security",
  cloud: "Cloud security",
  advanced: "Advanced specialization",
};

const levelLabels: Record<string, string> = {
  all: "All levels",
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const formatLabels: Record<string, string> = {
  all: "All formats",
  cohort: "Cohort-based",
  "self-paced": "Self-paced",
};

export function ProgramsExplorer({ programs }: { programs: Program[] }) {
  const [category, setCategory] = React.useState("all");
  const [level, setLevel] = React.useState("all");
  const [format, setFormat] = React.useState("all");
  const [view, setView] = React.useState<"grid" | "table">("grid");

  const filtered = programs.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      (level === "all" || p.level === level) &&
      (format === "all" || p.format === format)
  );

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-border-muted pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.entries(categoryLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.entries(levelLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={format} onValueChange={setFormat}>
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.entries(formatLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-1 self-start rounded-[var(--radius-sm)] border border-border p-1">
          <button
            type="button"
            onClick={() => setView("grid")}
            aria-pressed={view === "grid"}
            className={cn(
              "flex items-center gap-1.5 rounded-[calc(var(--radius-sm)-2px)] px-3 py-1.5 text-xs font-medium transition-colors",
              view === "grid" ? "bg-surface-raised text-text-primary" : "text-text-muted hover:text-text-primary"
            )}
          >
            <LayoutGrid className="size-3.5" aria-hidden="true" /> Cards
          </button>
          <button
            type="button"
            onClick={() => setView("table")}
            aria-pressed={view === "table"}
            className={cn(
              "flex items-center gap-1.5 rounded-[calc(var(--radius-sm)-2px)] px-3 py-1.5 text-xs font-medium transition-colors",
              view === "table" ? "bg-surface-raised text-text-primary" : "text-text-muted hover:text-text-primary"
            )}
          >
            <Rows3 className="size-3.5" aria-hidden="true" /> Compare
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-text-secondary">
          No programs match those filters.{" "}
          <button
            type="button"
            className="font-medium text-accent underline underline-offset-4"
            onClick={() => {
              setCategory("all");
              setLevel("all");
              setFormat("all");
            }}
          >
            Reset filters
          </button>
        </p>
      ) : view === "grid" ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Program</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Outcome</TableHead>
                <TableHead>Tuition</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((program) => (
                <TableRow key={program.slug}>
                  <TableCell className="font-medium text-text-primary">
                    <Link href={`/programs/${program.slug}`} className="hover:text-accent hover:underline">
                      {program.name}
                    </Link>
                  </TableCell>
                  <TableCell className="capitalize">{program.level}</TableCell>
                  <TableCell>{program.format === "cohort" ? "Cohort-based" : "Self-paced"}</TableCell>
                  <TableCell>{program.durationWeeks} weeks</TableCell>
                  <TableCell className="font-mono">{program.outcomeStat}</TableCell>
                  <TableCell className="font-mono">{formatUsd(program.priceUsd)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
