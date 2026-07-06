import type { Metadata } from "next";

import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PenCap Institute of Excellence collects, uses, and protects your data.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40">
      <div className="container-page">
        <span className="eyebrow">Legal</span>
        <h1 className="type-display-xl mt-3 text-[var(--color-text-primary)]">Privacy Policy</h1>
        <p className="type-body-sm mt-2 text-[var(--color-text-muted)]">Last updated: January 2026</p>

        <div className="reading-measure mt-10 flex flex-col gap-8 type-body-md text-[var(--color-text-secondary)]">
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">What we collect</h2>
            <p className="mt-3">
              When you use the eligibility check, apply to a program, download a syllabus, or
              contact us, we collect the information you provide directly: name, email, phone
              number, location, education/employment background, resume file (if uploaded), and
              any message content you submit. We also collect standard technical data (IP address,
              browser type, pages visited) via server logs and analytics tooling to understand site
              usage and diagnose issues.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">How we use it</h2>
            <p className="mt-3">
              We use your data to process applications, communicate about admissions and
              enrollment, deliver program content, provide career services, calculate and audit our
              published outcomes statistics (in aggregated, de-identified form unless you&rsquo;ve
              agreed to be named as a testimonial), and send opt-in communications like cohort
              updates or outcomes reports. We do not sell your personal data to third parties.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Who we share it with</h2>
            <p className="mt-3">
              We share data with service providers who help us operate (payment processors,
              lending partners for EMI/financing, email delivery, scheduling, and analytics
              providers) under contractual confidentiality obligations, with our independent
              outcomes-audit partner (in aggregated form), and with hiring partners only where you
              have explicitly opted in to have your profile shared for placement purposes.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Your rights</h2>
            <p className="mt-3">
              You can request a copy of the personal data we hold about you, ask us to correct
              inaccurate data, request deletion (subject to record-keeping obligations for enrolled
              students), and withdraw consent for marketing communications at any time by using the
              unsubscribe link in any email or writing to {site.email}.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Data retention & security</h2>
            <p className="mt-3">
              We retain application and enrollment data for as long as needed to deliver your
              program, provide ongoing career services (up to 12 months post-graduation, or longer
              at your request), and meet legal/accreditation record-keeping requirements.
              We use industry-standard technical and organizational safeguards, including encryption
              in transit, to protect your data.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Contact</h2>
            <p className="mt-3">
              Questions about this policy or your data can be sent to {site.email} or {site.address}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
