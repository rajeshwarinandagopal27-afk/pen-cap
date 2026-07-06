import { InitialsAvatar } from "@/components/ui/avatar";
import type { Faculty } from "@/lib/data/faculty";
import { cn } from "@/lib/utils";

function FacultyCard({ person, className }: { person: Faculty; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <InitialsAvatar name={person.name} initials={person.initials} size="lg" />
      <div>
        <h3 className="type-body-lg font-medium text-[var(--color-text-primary)]">{person.name}</h3>
        <p className="type-body-sm text-[var(--color-text-secondary)]">{person.title}</p>
      </div>
      <p className="type-body-sm text-[var(--color-text-primary)]">{person.credibilityLine}</p>
      {person.cveCount > 0 && (
        <p className="type-mono-sm text-[var(--color-accent)]">{person.cveCount} CVEs credited</p>
      )}
    </div>
  );
}

export { FacultyCard };
