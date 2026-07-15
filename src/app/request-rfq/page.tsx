import { Mail, Phone, Clock } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { TrustBadges } from "@/components/common/trust-badges";
import { RfqForm } from "@/components/rfq/rfq-form";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request an RFQ",
  description:
    "Submit an RFQ or upload a bill of materials to SLT Technology. Company details, required delivery date and part requirements — quoted by a sourcing engineer, not an online cart.",
  path: "/request-rfq",
});

export default function RequestRfqPage() {
  return (
    <>
      <PageHero
        eyebrow="Request RFQ"
        title="Tell us what you need sourced."
        description="A single part number or a complete bill of materials — every RFQ is reviewed by a sourcing engineer before it's quoted."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <div>
            <TrustBadges className="mb-10" />
            <RfqForm />
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-base font-bold tracking-tight text-text-primary">
                Prefer to talk directly?
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
                <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 hover:text-text-primary">
                  <Mail className="size-4 text-text-muted" /> {siteConfig.contact.email}
                </a>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-text-primary">
                  <Phone className="size-4 text-text-muted" /> {siteConfig.contact.phone}
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-border-muted bg-surface/60 p-6">
              <div className="flex items-center gap-2 text-text-primary">
                <Clock className="size-4 text-brand" />
                <h2 className="font-display text-sm font-bold tracking-tight">What happens next</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Your RFQ is reviewed by a sourcing engineer against specification and lifecycle status before a
                quote is prepared. Complex or multi-line BOMs may take longer than a single part number.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
