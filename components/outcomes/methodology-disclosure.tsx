import { ShieldCheck } from "lucide-react";

import { methodology } from "@/lib/data/outcomes";

function MethodologyDisclosure() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 lg:p-8">
      <div className="flex items-center gap-2 text-[var(--color-accent)]">
        <ShieldCheck className="size-5" />
        <span className="type-body-sm font-medium normal-case tracking-normal">Methodology, disclosed in full</span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <p className="type-body-xs text-[var(--color-text-muted)]">How we define &ldquo;placed&rdquo;</p>
          <p className="type-body-sm mt-1.5 text-[var(--color-text-secondary)]">{methodology.definition}</p>
        </div>
        <div>
          <p className="type-body-xs text-[var(--color-text-muted)]">Sample size</p>
          <p className="type-body-sm mt-1.5 text-[var(--color-text-secondary)]">{methodology.sampleSize}</p>
        </div>
        <div>
          <p className="type-body-xs text-[var(--color-text-muted)]">What&rsquo;s excluded</p>
          <p className="type-body-sm mt-1.5 text-[var(--color-text-secondary)]">{methodology.exclusions}</p>
        </div>
        <div>
          <p className="type-body-xs text-[var(--color-text-muted)]">Independent audit</p>
          <p className="type-body-sm mt-1.5 text-[var(--color-text-secondary)]">
            {methodology.audit} Last audited {methodology.lastAudited}.
          </p>
        </div>
      </div>
    </div>
  );
}

export { MethodologyDisclosure };
