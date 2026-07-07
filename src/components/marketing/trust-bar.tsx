import { ActivitySquareIcon, AwardIcon, GraduationCapIcon, ShieldCheckIcon, UsersIcon, LifeBuoyIcon } from "lucide-react";

import { trustBadges } from "@/lib/data/stats";
import { Reveal } from "@/components/marketing/reveal";

const icons = [ShieldCheckIcon, AwardIcon, GraduationCapIcon, UsersIcon, ActivitySquareIcon, LifeBuoyIcon];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {trustBadges.map((badge, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={badge.title} delay={index * 0.05} className="flex flex-col items-center gap-2 text-center">
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy-900 text-white dark:bg-white dark:text-navy-950">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-semibold text-foreground">{badge.title}</span>
                <span className="text-xs text-muted-foreground">{badge.subtitle}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
