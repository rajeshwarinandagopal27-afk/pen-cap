import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { CyberRangeTerminal } from "@/components/marketing/cyber-range-terminal";
import { FreeChallenge } from "@/components/marketing/free-challenge";
import { cyberRangeCategories } from "@/lib/data/cyber-range";

export const metadata: Metadata = {
  title: "Cyber Range",
  description:
    "A live-fire cybersecurity practice environment with 144+ hands-on labs across web, network, cloud, and Active Directory attack paths. Try your first challenge free, no signup required.",
  alternates: { canonical: "/cyber-range" },
};

const totalChallenges = cyberRangeCategories.reduce((sum, c) => sum + c.challengeCount, 0);

const difficultyVariant = {
  low: "low",
  medium: "medium",
  high: "high",
  critical: "critical",
} as const;

export default function CyberRangePage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>Cyber Range</SectionEyebrow>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              Practice before you enroll.
            </h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-text-secondary">
              The Cyber Range is the same lab environment our students train in — {totalChallenges}+
              hands-on challenges across six categories. Not a marketing demo.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="#free-challenge">
                Start free challenge <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <CyberRangeTerminal />
        </div>
      </section>

      <section id="free-challenge" className="scroll-mt-24 border-b border-border-muted py-16 sm:py-20">
        <div className="container-page container-reading">
          <SectionEyebrow>Try it now</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary">
            Your first challenge — no signup required
          </h2>
          <div className="mt-8">
            <FreeChallenge />
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Categories</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {totalChallenges}+ challenges across six categories
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cyberRangeCategories.map((category) => (
              <Card key={category.slug} className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-text-primary">{category.name}</h3>
                  <Badge variant={difficultyVariant[category.difficulty]}>{category.difficulty}</Badge>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{category.description}</p>
                <p className="mt-auto font-mono text-xs text-text-muted">{category.challengeCount} challenges</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Progress</SectionEyebrow>
          <h2 className="mt-3 flex items-center gap-3 font-display text-2xl font-semibold text-text-primary">
            <Trophy className="size-6 text-accent" aria-hidden="true" /> Badges &amp; leaderboard
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Enrolled students track solved challenges, earn category badges, and see a cohort
            leaderboard inside the full Cyber Range — a small layer of structure on top of the labs
            themselves, not the main event.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page flex flex-col items-start gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Solved a few challenges?</p>
            <p className="mt-2 font-display text-xl font-semibold text-text-primary">
              You&rsquo;re ready to see which program fits.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/admissions">
              Check your eligibility <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
