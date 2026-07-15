import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk to SLT Technology's sourcing and procurement team — email, phone, or send a message directly.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the procurement team."
        description="For a formal quote, use Request RFQ. For everything else — a question, a consultation, an ongoing sourcing relationship — reach us here."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <ContactForm />

          <aside className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-base font-bold tracking-tight text-text-primary">Contact details</h2>
              <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
                <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 hover:text-text-primary">
                  <Mail className="size-4 text-text-muted" /> {siteConfig.contact.email}
                </a>
                <a href={`mailto:${siteConfig.contact.salesEmail}`} className="inline-flex items-center gap-2 hover:text-text-primary">
                  <Mail className="size-4 text-text-muted" /> {siteConfig.contact.salesEmail}
                </a>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-text-primary">
                  <Phone className="size-4 text-text-muted" /> {siteConfig.contact.phone}
                </a>
                <p className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-text-muted" /> {siteConfig.contact.address}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border-muted bg-surface/60 p-6">
              <h2 className="font-display text-sm font-bold tracking-tight text-text-primary">Have an RFQ ready?</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Skip the queue — submit your requirement directly to our sourcing team.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link href="/request-rfq">
                  Request an RFQ <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
