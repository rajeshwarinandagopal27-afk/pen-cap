import { Check, X } from "lucide-react";

function ProgramChecklist({ idealFor, notIdealFor }: { idealFor: string[]; notIdealFor: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h3 className="type-display-sm text-[var(--color-text-primary)]">This program is for you if</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {idealFor.map((item, i) => (
            <li key={i} className="flex items-start gap-3 type-body-md text-[var(--color-text-secondary)]">
              <Check className="mt-0.5 size-4 shrink-0 text-[var(--risk-success)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="type-display-sm text-[var(--color-text-primary)]">
          It&rsquo;s probably not, if
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          {notIdealFor.map((item, i) => (
            <li key={i} className="flex items-start gap-3 type-body-md text-[var(--color-text-secondary)]">
              <X className="mt-0.5 size-4 shrink-0 text-[var(--color-text-muted)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { ProgramChecklist };
