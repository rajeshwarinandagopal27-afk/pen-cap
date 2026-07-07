import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, TargetIcon, EyeIcon, HeartHandshakeIcon } from "lucide-react";

import { faculty } from "@/lib/data/faculty";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { FacultyCard } from "@/components/marketing/faculty-card";
import { StatTile } from "@/components/marketing/stat-tile";
import { heroStats } from "@/lib/data/stats";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "About PenCap Institute",
  description:
    "PenCap Institute of Excellence is Chennai's EC-Council accredited and CompTIA authorized cybersecurity training institute, built by industry practitioners.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: TargetIcon,
    title: "Our Mission",
    description:
      "To turn career changers, graduates and IT professionals into hire-ready cybersecurity practitioners through hands-on, mentor-led training.",
  },
  {
    icon: EyeIcon,
    title: "Our Vision",
    description:
      "To be recognized as India's most outcomes-driven cybersecurity institute — measured by graduate placements, not enrollment numbers.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Our Promise",
    description:
      "Small batches, practitioner mentors, and a placement team that stays engaged with every graduate until they're hired.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />

      <section className="border-b border-border bg-secondary/30">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24">
          <Reveal>
            <SectionEyebrow>About PenCap</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Built by practitioners, not just trainers
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              PenCap Institute of Excellence was founded in Chennai to close a specific gap: the
              distance between a certification syllabus and the skills employers actually test for
              in interviews. Every mentor on our faculty has worked penetration testing or SOC
              roles in production environments before teaching a single class.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {heroStats.map((stat, index) => (
              <StatTile key={stat.label} {...stat} delay={index * 0.05} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-royal-500/10 text-royal-600 dark:text-royal-400">
                  <value.icon className="size-5" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Faculty</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Learn from people who&rsquo;ve done the job
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((member, index) => (
              <FacultyCard key={member.id} faculty={member} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-5xl py-20">
        <Reveal className="rounded-3xl bg-navy-950 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Come see {siteConfig.shortName} for yourself
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            The best way to evaluate an institute is to visit it. Book a campus tour and meet the
            mentors who&rsquo;ll be training you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/campus">
                Explore the Campus
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
