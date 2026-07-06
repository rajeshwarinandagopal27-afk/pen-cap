import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Flame, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { CyberRangeTerminal } from "@/components/cards/cyber-range-terminal";
import { FaqSection } from "@/components/sections/faq-section";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { challengeCategories, leaderboard, badges } from "@/lib/data/cyber-range";
import { cyberRangeFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Cyber Range — Practice Before You Enroll",
  description:
    "The PenCap Cyber Range is a free, live-fire practice environment — web exploitation, network, cloud, and Active Directory challenges. Start your first challenge with no signup required.",
  alternates: { canonical: "/cyber-range" },
};

const difficultyVariant = { low: "low", medium: "medium", high: "high", critical: "critical" } as const;

export default function CyberRangePage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">PenCap Cyber Range</span>
            <h1 className="type-display-xl mt-3 text-[var(--color-text-primary)]">
              Practice before you enroll.
            </h1>
            <p className="type-body-xl mt-4 text-[var(--color-text-secondary)] reading-measure">
              Real vulnerable infrastructure, not slideshow labs — 130+ challenges across six
              categories, built and maintained by faculty who use these techniques professionally.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Start free challenge — no signup required <ArrowRight />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <CyberRangeTerminal />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Challenge categories</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              Six categories, 130+ challenges, new ones every week.
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challengeCategories.map((cat) => (
              <div key={cat.name} className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
                <div className="flex items-center justify-between">
                  <h3 className="type-display-sm text-[var(--color-text-primary)]">{cat.name}</h3>
                  <Badge variant={difficultyVariant[cat.difficulty]}>{cat.difficultyLabel}</Badge>
                </div>
                <p className="type-body-sm text-[var(--color-text-secondary)]">{cat.description}</p>
                <p className="type-mono-sm text-[var(--color-accent)] mt-1">{cat.count} challenges</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-2 text-[var(--color-accent)]">
              <Trophy className="size-5" />
              <span className="type-body-sm font-medium normal-case tracking-normal">Leaderboard</span>
            </div>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">This month&rsquo;s top solvers</h2>
            <ol className="mt-5 flex flex-col divide-y divide-[var(--color-border-muted)]">
              {leaderboard.map((row) => (
                <li key={row.rank} className="flex items-center justify-between py-3">
                  <span className="flex items-center gap-3">
                    <span className="type-mono-sm w-5 text-[var(--color-text-muted)]">{row.rank}</span>
                    <span className="type-body-sm text-[var(--color-text-primary)]">{row.handle}</span>
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="flex items-center gap-1 type-body-xs text-[var(--color-urgency)] normal-case tracking-normal">
                      <Flame className="size-3.5" /> {row.streak}d
                    </span>
                    <span className="type-mono-sm text-[var(--color-text-primary)]">{row.points.toLocaleString("en-IN")}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex items-center gap-2 text-[var(--color-accent)]">
              <Award className="size-5" />
              <span className="type-body-sm font-medium normal-case tracking-normal">Badges</span>
            </div>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">Earn recognition as you go</h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {badges.map((b) => (
                <div key={b.name} className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
                  <p className="type-body-sm font-medium text-[var(--color-text-primary)]">{b.name}</p>
                  <p className="type-body-xs mt-1 text-[var(--color-text-muted)] normal-case tracking-normal">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="flex flex-col items-center gap-5 text-center">
            <span className="eyebrow">Ready for more?</span>
            <h2 className="type-display-lg max-w-xl text-[var(--color-text-primary)]">
              Solved 3 challenges? You&rsquo;re ready for the Offensive Security Program.
            </h2>
            <p className="type-body-lg max-w-lg text-[var(--color-text-secondary)]">
              Everything you just practiced is week 4-8 material in our flagship cohort — with a
              mentor, a curriculum, and a placement track behind it.
            </p>
            <Button asChild size="lg">
              <Link href="/programs/offensive-security-program">
                Explore the program <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <FaqSection items={cyberRangeFaq} eyebrow="Cyber Range FAQ" title="Before you start" />

      <StickyMobileCta label="Start free challenge" href="/cyber-range" showAfter={300} />
    </>
  );
}
