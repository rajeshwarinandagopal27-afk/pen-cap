import type { FacultyMember } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <Card className="flex h-full flex-col gap-4 p-6">
      <Avatar className="size-16" aria-hidden="true">
        <AvatarFallback className="text-lg">{initials(member.name)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-display text-lg font-semibold text-text-primary">{member.name}</h3>
        <p className="text-sm text-text-secondary">{member.title}</p>
      </div>
      <p className="font-mono text-xs leading-relaxed text-accent">{member.credibilityLine}</p>
      <ul className="mt-auto flex flex-col gap-1.5 border-t border-border-muted pt-4">
        {member.credentials.slice(0, 3).map((credential) => (
          <li key={credential} className="text-xs text-text-muted">
            {credential}
          </li>
        ))}
      </ul>
    </Card>
  );
}
