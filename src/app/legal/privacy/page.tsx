import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How PenCap Institute of Excellence collects, uses, and protects your data.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <div className="container-reading">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary">Privacy policy</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated January 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">What we collect</h2>
            <p className="mt-3">
              When you use the eligibility quiz, submit an application, request enterprise
              information, subscribe to our newsletter, or use the Cyber Range, we collect the
              information you provide directly (name, email, location, employment background,
              application responses) along with basic technical data (browser type, device type,
              and pages visited) used to keep the site working correctly and secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">How we use it</h2>
            <p className="mt-3">
              Application and eligibility-quiz data is used to evaluate admissions fit, schedule
              interviews, and communicate with you about your application. Newsletter signups are
              used solely to send outcomes reports and cohort-date updates, and you can
              unsubscribe at any time. We do not sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Outcomes reporting</h2>
            <p className="mt-3">
              Alumni placement and salary data referenced on our Outcomes page is aggregated and,
              where individual stories are shared as testimonials, published only with the named
              alumnus&rsquo;s explicit consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Data retention</h2>
            <p className="mt-3">
              Application data for candidates who are not admitted is retained for 24 months and
              then deleted, unless you ask us to remove it sooner. Enrolled-student records are
              retained per our accreditation body&rsquo;s record-keeping requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Your rights</h2>
            <p className="mt-3">
              You can request a copy of the data we hold about you, ask us to correct it, or ask us
              to delete it, by emailing{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-accent hover:underline">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
