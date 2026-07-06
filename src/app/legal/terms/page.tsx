import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms governing use of the PenCap Institute website, Cyber Range, and enrolled programs.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <div className="container-reading">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary">Terms of service</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated January 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Acceptable use of the Cyber Range</h2>
            <p className="mt-3">
              The Cyber Range is a sandboxed environment provided for educational use only.
              Techniques practiced in the Cyber Range may only be used against systems you own or
              are explicitly authorized to test. Attempting to access, scan, or attack any system
              outside the provided lab environment — including PenCap&rsquo;s own production
              infrastructure — will result in immediate termination of access and, where
              applicable, removal from your enrolled program without a refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Enrollment agreement</h2>
            <p className="mt-3">
              Enrolling in a cohort program reserves your seat for the cohort start date selected
              during application. Seats are held for 7 days after an offer is extended pending a
              deposit or full payment; unpaid seats may be released to waitlisted applicants after
              that window.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Intellectual property</h2>
            <p className="mt-3">
              Curriculum materials, Cyber Range challenges, and recorded sessions are provided for
              your personal educational use during and after your enrollment period and may not be
              redistributed, resold, or used to train other individuals or automated systems
              without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Placement guarantee terms</h2>
            <p className="mt-3">
              The placement guarantee described on our Pricing page applies to students who
              complete every required module and attend every scheduled mentor session in their
              program. Eligibility is confirmed at graduation; the refund process, if triggered,
              begins automatically and does not require a formal appeal.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Changes to these terms</h2>
            <p className="mt-3">
              We may update these terms as our programs evolve. Material changes affecting
              currently enrolled students will be communicated by email at least 30 days before
              taking effect. Questions can be sent to{" "}
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
