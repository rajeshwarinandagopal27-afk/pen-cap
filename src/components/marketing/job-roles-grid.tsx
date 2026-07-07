import { jobRoles } from "@/lib/data/placements";
import { Reveal } from "@/components/marketing/reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function JobRolesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {jobRoles.map((role, index) => (
        <Reveal key={role.title} delay={index * 0.05}>
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
              <Badge variant="accent" className="mt-1 w-fit">
                {role.salaryRange}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{role.description}</p>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
