"use client";

import * as React from "react";
import { Calculator } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { programs } from "@/lib/data/programs";
import { financingOptions } from "@/lib/data/pricing";

function TuitionEstimator() {
  const [programSlug, setProgramSlug] = React.useState<string>(programs[0].slug);
  const [financing, setFinancing] = React.useState<string>(financingOptions[1].id);

  const program = programs.find((p) => p.slug === programSlug)!;

  const result = React.useMemo(() => {
    if (financing === "pay-in-full") {
      const discounted = Math.round(program.tuition * 0.94);
      return { headline: `₹${discounted.toLocaleString("en-IN")}`, sub: "one-time payment (6% discount applied)" };
    }
    if (financing === "emi") {
      return { headline: `₹${program.emiFrom.toLocaleString("en-IN")}/mo`, sub: "over 12 months, 0% markup from PenCap" };
    }
    if (financing === "isa" && program.slug === "offensive-security-program") {
      return { headline: "₹0 upfront", sub: "12% of income for 30 months once earning above ₹4,00,000/yr, capped at 1.4x tuition" };
    }
    if (financing === "isa") {
      return { headline: "Not available", sub: "the income-share agreement is only offered on the Offensive Security Program" };
    }
    return { headline: "Employer-billed", sub: "we invoice your employer directly against a sponsorship letter" };
  }, [program, financing]);

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 lg:p-8">
      <div className="flex items-center gap-2 text-[var(--color-accent)]">
        <Calculator className="size-5" />
        <span className="type-body-sm font-medium normal-case tracking-normal">Check what you&rsquo;d pay</span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label>Program</Label>
          <Select value={programSlug} onValueChange={setProgramSlug}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {programs.map((p) => (
                <SelectItem key={p.slug} value={p.slug}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Financing preference</Label>
          <Select value={financing} onValueChange={setFinancing}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {financingOptions.map((f) => (
                <SelectItem key={f.id} value={f.id}>
                  {f.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-accent)] bg-[var(--color-accent-fill)] p-5">
        <p className="type-mono-md text-2xl text-[var(--color-text-primary)]">{result.headline}</p>
        <p className="type-body-sm mt-1 text-[var(--color-text-secondary)]">{result.sub}</p>
      </div>
    </div>
  );
}

export { TuitionEstimator };
