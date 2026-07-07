import Link from "next/link";
import { ArrowRightIcon, ClockIcon, TrendingUpIcon, UsersIcon } from "lucide-react";

import type { Program } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Reveal } from "@/components/marketing/reveal";

const accentMap = {
  royal: "from-royal-500/10 to-transparent text-royal-600 dark:text-royal-400",
  navy: "from-navy-700/15 to-transparent text-navy-700 dark:text-white",
  red: "from-red-500/10 to-transparent text-red-600 dark:text-red-400",
} as const;

export function ProgramCard({ program, delay = 0 }: { program: Program; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card className="group relative h-full overflow-hidden transition-shadow hover:shadow-lg">
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b",
            accentMap[program.accentColor]
          )}
        />
        <CardHeader className="relative">
          <Badge variant="accent" className="w-fit">
            {program.level}
          </Badge>
          <h3 className="mt-3 text-xl font-semibold text-foreground">{program.shortName}</h3>
          <p className="text-sm text-muted-foreground">{program.tagline}</p>
        </CardHeader>
        <CardContent className="relative flex flex-1 flex-col gap-5">
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex flex-col gap-1 rounded-lg bg-secondary/60 p-2.5">
              <ClockIcon className="size-3.5 text-muted-foreground" />
              <span className="font-medium text-foreground">{program.duration}</span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-secondary/60 p-2.5">
              <UsersIcon className="size-3.5 text-muted-foreground" />
              <span className="font-medium text-foreground">{program.batchSize}</span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-secondary/60 p-2.5">
              <TrendingUpIcon className="size-3.5 text-muted-foreground" />
              <span className="font-medium text-foreground">{program.averageSalaryRange}</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Who it&rsquo;s for</p>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
              {program.whoFor.slice(0, 2).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-royal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {program.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="outline" className="text-[11px]">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-2">
            <Button asChild className="flex-1">
              <Link href={`/courses/${program.slug}`}>
                Explore Program
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}
