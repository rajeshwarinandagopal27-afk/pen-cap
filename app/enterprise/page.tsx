import type { Metadata } from "next";

import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { InitialsAvatar } from "@/components/ui/avatar";
import { NetworkGraph } from "@/components/motion/network-graph";
import { ScheduleCallDialog } from "@/components/enterprise/schedule-call-dialog";
import { DownloadOverviewDialog } from "@/components/enterprise/download-overview-dialog";
import { FaqSection } from "@/components/sections/faq-section";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { employerLogos } from "@/lib/data/outcomes";
import { enterpriseCaseStudies, complianceMappings, enterpriseContact } from "@/lib/data/enterprise";
import { enterpriseFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Enterprise & Team Training",
  description:
    "Close your security team's offensive and defensive skills gap with PenCap's enterprise training — on-site or blended cohorts, compliance mapping to ISO 27001/NIST/RBI, and a named account team.",
  alternates: { canonical: "/enterprise" },
};

export default function EnterprisePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
        <NetworkGraph className="absolute inset-0 -z-10 opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[var(--color-canvas)]" />
        <div className="container-page">
          <span className="eyebrow">Enterprise & team training</span>
          <h1 className="type-display-xl mt-3 max-w-2xl text-[var(--color-text-primary)]">
            Close your team&rsquo;s offensive security skills gap.
          </h1>
          <p className="type-body-xl mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            On-site or blended cohorts for engineering and security teams, mapped to your compliance
            requirements, run by the same faculty who teach our individual programs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ScheduleCallDialog />
            <DownloadOverviewDialog />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] py-10">
        <div className="container-page">
          <p className="type-body-xs text-[var(--color-text-muted)] mb-5">
            Security and engineering teams we&rsquo;ve trained at
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {employerLogos.slice(0, 8).map((name) => (
              <span key={name} className="type-display-sm text-[var(--color-text-muted)] opacity-70 grayscale">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Case studies</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              What this looks like once it&rsquo;s running.
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {enterpriseCaseStudies.map((cs) => (
              <div key={cs.industry} className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
                <div>
                  <Badge variant="neutral">{cs.teamSize}</Badge>
                  <h3 className="type-display-sm mt-3 text-[var(--color-text-primary)]">{cs.industry}</h3>
                </div>
                <div>
                  <p className="type-body-xs text-[var(--color-text-muted)]">Challenge</p>
                  <p className="type-body-sm mt-1 text-[var(--color-text-secondary)]">{cs.challenge}</p>
                </div>
                <div>
                  <p className="type-body-xs text-[var(--color-text-muted)]">Approach</p>
                  <p className="type-body-sm mt-1 text-[var(--color-text-secondary)]">{cs.approach}</p>
                </div>
                <div className="mt-auto border-t border-[var(--color-border-muted)] pt-4">
                  <p className="type-body-xs text-[var(--color-text-muted)]">Result</p>
                  <p className="type-body-sm mt-1 text-[var(--color-text-primary)]">{cs.result}</p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Compliance mapping</span>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">
              Documentation your auditors can actually use.
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {complianceMappings.map((c) => (
                <li key={c.framework} className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
                  <p className="type-body-sm font-medium text-[var(--color-text-primary)]">{c.framework}</p>
                  <p className="type-body-sm mt-1 text-[var(--color-text-secondary)]">{c.mapping}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <span className="eyebrow">Delivery options</span>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">
              On-site, blended, or fully remote.
            </h2>
            <ul className="mt-6 flex flex-col gap-4 type-body-md text-[var(--color-text-secondary)]">
              <li>On-site delivery in Chennai, Bengaluru, and Hyderabad — other cities scoped for 15+ engineers.</li>
              <li>Blended cohorts combining self-paced content with live, instructor-led lab sessions.</li>
              <li>Integration with existing L&D platforms and single sign-on for enrollment tracking.</li>
              <li>Custom curricula built against your own tech stack, with legal-approved scoping.</li>
            </ul>

            <div className="mt-8 flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5">
              <InitialsAvatar name={enterpriseContact.name} initials="MV" size="md" />
              <div>
                <p className="type-body-md font-medium text-[var(--color-text-primary)]">{enterpriseContact.name}</p>
                <p className="type-body-sm text-[var(--color-text-secondary)]">{enterpriseContact.title}</p>
                <p className="type-body-xs text-[var(--color-accent)] mt-1">{enterpriseContact.email}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection items={enterpriseFaq} eyebrow="Enterprise FAQ" title="Questions procurement will ask" />

      <section className="bg-[var(--color-text-primary)] py-20 lg:py-28">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="type-display-xl max-w-2xl text-[var(--color-canvas)]">
            Most engagements start with a single pilot cohort.
          </h2>
          <p className="type-body-lg max-w-xl text-[var(--color-canvas)]/70">
            8–15 engineers, one quarter, a joint review before you scale further.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ScheduleCallDialog />
            <DownloadOverviewDialog />
          </div>
        </div>
      </section>

      <StickyMobileCta label="Talk to our team" href="/contact" />
    </>
  );
}
