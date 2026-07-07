import {
  FlaskConicalIcon,
  UserRoundCheckIcon,
  UsersRoundIcon,
  CompassIcon,
  FileTextIcon,
  MessagesSquareIcon,
} from "lucide-react";

import { whyPenCap } from "@/lib/data/stats";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";

const icons = [FlaskConicalIcon, UserRoundCheckIcon, UsersRoundIcon, CompassIcon, FileTextIcon, MessagesSquareIcon];

export function WhyPenCapSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Why PenCap</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Built differently from every other institute
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPenCap.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-royal-500/10 text-royal-600 dark:text-royal-400">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
