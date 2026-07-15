import Link from "next/link";
import { Upload, FileText, ArrowRight, ClipboardList, Search, PackageCheck } from "lucide-react";

import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit your RFQ or BOM",
    body: "Send a single part number or upload a full bill of materials — no account required.",
  },
  {
    icon: Search,
    title: "We source & verify",
    body: "Our engineers quote from authorized lines, confirm authenticity and flag lifecycle risks.",
  },
  {
    icon: PackageCheck,
    title: "Quoted with lead times",
    body: "A consolidated, line-item quote with pricing, availability and committed delivery dates.",
  },
];

export function RfqProcess() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface/50">
        <div className="grid lg:grid-cols-2">
          {/* Left — process */}
          <div className="border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 max-w-md text-balance font-display text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
              From part number to committed quote — in hours, not weeks.
            </h2>
            <ol className="mt-8 flex flex-col gap-6">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={i * 0.06}>
                    <li className="flex gap-4">
                      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand">
                        <Icon className="size-5" />
                        <span className="absolute -left-1 -top-1 font-mono text-[10px] text-text-muted">
                          0{i + 1}
                        </span>
                      </span>
                      <div>
                        <h3 className="font-semibold text-text-primary">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">{s.body}</p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          {/* Right — BOM upload teaser (UI preview) */}
          <div className="relative flex flex-col justify-center gap-5 p-8 sm:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Upload a BOM</p>
              <div className="mt-3 rounded-xl border-2 border-dashed border-border bg-surface/60 p-8 text-center transition-colors hover:border-brand/50">
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Upload className="size-6" />
                </span>
                <p className="mt-4 font-medium text-text-primary">Drag &amp; drop your bill of materials</p>
                <p className="mt-1 text-sm text-text-muted">or browse to upload</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  {[".csv", ".xlsx", ".xls"].map((ext) => (
                    <span
                      key={ext}
                      className="inline-flex items-center gap-1 rounded-md border border-border-muted px-2 py-0.5 font-mono text-[11px] text-text-muted"
                    >
                      <FileText className="size-3" /> {ext}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild variant="brand" size="lg" className="mt-5 w-full">
                <Link href="/request-rfq">
                  Start your RFQ <ArrowRight className="size-4" />
                </Link>
              </Button>
              <p className="mt-3 text-center text-xs text-text-muted">
                Preview only — secure upload &amp; parsing live on the RFQ page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
