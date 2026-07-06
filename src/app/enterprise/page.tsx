import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { EmployerStrip } from "@/components/marketing/employer-strip";
import { EnterpriseForm } from "@/components/marketing/enterprise-form";
import { enterpriseCaseStudies, enterpriseOfferings } from "@/lib/data/enterprise";

export const metadata: Metadata = {
  title: "Enterprise training",
  description:
    "Custom cybersecurity cohorts for enterprise security teams, taught by the same practitioner faculty and Cyber Range labs behind PenCap's public programs.",
  alternates: { canonical: "/enterprise" },
};

export default function EnterprisePage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Enterprise training</SectionEyebrow>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            Close your team&rsquo;s offensive security skills gap.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Custom cohorts for security, platform, and engineering teams — built around your
            existing tooling and threat model, taught by the same faculty who teach our public
            programs.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#talk-to-us">
              Talk to our team <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <div className="mt-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">Teams we&rsquo;ve trained</p>
            <EmployerStrip className="justify-start" />
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Results</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            What custom cohorts have changed
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {enterpriseCaseStudies.map((study) => (
              <Card key={study.company} className="flex flex-col gap-4 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{study.industry}</p>
                <h3 className="font-display text-lg font-semibold text-text-primary">{study.headline}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{study.result}</p>
                <p className="mt-auto border-t border-border-muted pt-4 text-sm italic leading-relaxed text-text-secondary">
                  &ldquo;{study.quote}&rdquo;
                </p>
                <p className="text-xs font-medium text-text-muted">— {study.attributedTo}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>What&rsquo;s included</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Built around how your team already works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {enterpriseOfferings.map((offering) => (
              <div key={offering.title}>
                <h3 className="font-display text-lg font-semibold text-text-primary">{offering.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talk-to-us" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container-page container-reading">
          <SectionEyebrow>Get started</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary">
            Talk to our enterprise team
          </h2>
          <p className="mt-3 text-sm text-text-secondary">
            Or email us directly at{" "}
            <a href="mailto:enterprise@pencapinstitute.edu" className="font-medium text-accent hover:underline">
              enterprise@pencapinstitute.edu
            </a>
            .
          </p>
          <div className="mt-8">
            <EnterpriseForm />
          </div>
        </div>
      </section>
    </div>
  );
}
