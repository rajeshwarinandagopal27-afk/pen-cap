import type { FacultyMember } from "@/lib/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/marketing/reveal";

export function FacultyCard({ faculty, delay = 0 }: { faculty: FacultyMember; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-4">
          <Avatar className="size-14">
            <AvatarFallback className="text-base">{faculty.initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-semibold text-foreground">{faculty.name}</h3>
            <p className="text-sm text-muted-foreground">{faculty.title}</p>
          </div>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{faculty.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {faculty.credentials.map((cred) => (
            <Badge key={cred} variant="outline" className="text-[11px]">
              {cred}
            </Badge>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
