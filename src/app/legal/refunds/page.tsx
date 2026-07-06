import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { guarantee } from "@/lib/data/pricing";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund policy",
  description: "PenCap Institute's 14-day refund window and placement guarantee, explained in full.",
  alternates: { canonical: "/legal/refunds" },
};

export default function RefundsPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <div className="container-reading">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary">Refund policy</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated January 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">14-day refund window</h2>
            <p className="mt-3">
              Every enrollment includes a 14-day, no-questions-asked refund window starting from
              your enrollment date, regardless of how much of the program you&rsquo;ve started.
              To request a refund within this window, email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-accent hover:underline">
                {siteConfig.contactEmail}
              </a>{" "}
              — refunds are processed to your original payment method within 10 business days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">{guarantee.title}</h2>
            <p className="mt-3">{guarantee.body}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Withdrawal after the refund window</h2>
            <p className="mt-3">
              Students who withdraw after the 14-day window but before completing their program
              are not eligible for a tuition refund, but may request a one-time transfer to a
              future cohort of the same program within 12 months, subject to seat availability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-text-primary">Income share agreement withdrawals</h2>
            <p className="mt-3">
              Students enrolled under an income share agreement who withdraw before completing
              their program owe no payment, since payments are only triggered by graduation and
              subsequent placement above the income threshold described on our Pricing page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
