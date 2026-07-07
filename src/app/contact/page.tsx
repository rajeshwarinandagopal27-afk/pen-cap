import type { Metadata } from "next";
import { Suspense } from "react";
import { MailIcon, MapPinIcon, PhoneCallIcon, ClockIcon } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { ContactForm } from "@/components/marketing/contact-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Contact Us & Book a Campus Visit",
  description:
    "Book a free career consultation, apply to a program, or plan a visit to PenCap Institute's Chennai campus. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

const contactDetails = [
  {
    icon: MapPinIcon,
    label: "Campus Address",
    value: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.pincode}`,
  },
  {
    icon: PhoneCallIcon,
    label: "Call Us",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneRaw}`,
  },
  {
    icon: MailIcon,
    label: "Email Us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: ClockIcon,
    label: "Campus Hours",
    value: `Weekdays ${siteConfig.hours.weekday} · Weekends ${siteConfig.hours.weekend}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />

      <section className="container-px mx-auto max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionEyebrow>Contact</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Let&rsquo;s plan your next move
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                Book a free career consultation, apply to a program, or plan a visit to our Chennai
                campus. Our admissions team responds within 24 hours.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {contactDetails.map((item, index) => (
                <Reveal key={item.label} delay={0.15 + index * 0.05}>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-royal-500/10 text-royal-600 dark:text-royal-400">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4} className="mt-10 overflow-hidden rounded-2xl border border-border">
              <a href={siteConfig.contact.mapUrl} target="_blank" rel="noreferrer noopener">
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-navy-900 to-navy-700 text-white">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <MapPinIcon className="size-4" />
                    View campus location on Google Maps
                  </span>
                </div>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold text-foreground">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill this in and an admissions counselor will call you back.
              </p>
              <div className="mt-6">
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
