import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "lucide-react";

import { campusHighlights } from "@/lib/data/campus";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { CampusGallery } from "@/components/marketing/campus-gallery";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Our Campus in Chennai",
  description:
    "Tour PenCap's Chennai campus — a live SOC lab, an isolated attack range, and premium classrooms built for hands-on cybersecurity training.",
  alternates: { canonical: "/campus" },
};

export default function CampusPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Campus", url: "/campus" }]} />

      <section className="border-b border-border bg-secondary/30">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24">
          <Reveal>
            <SectionEyebrow>Campus</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              A campus built like the enterprises you&rsquo;ll defend
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Located on OMR in Thoraipakkam, our campus is designed around one principle: every
              hour you spend here should feel like the job you&rsquo;re training for.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">
                Book a Campus Visit
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.contact.mapUrl} target="_blank" rel="noreferrer noopener">
                <MapPinIcon />
                Get Directions
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {campusHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h2 className="text-base font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Gallery</h2>
          </Reveal>
          <Reveal delay={0.05} className="mt-8">
            <CampusGallery />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="container-px mx-auto max-w-5xl text-center">
          <Reveal>
            <SectionEyebrow>Location</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Visit us on OMR, Thoraipakkam
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
              {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
              {siteConfig.contact.address.pincode}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Open {siteConfig.hours.weekday} on weekdays · {siteConfig.hours.weekend} on weekends
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">
                Schedule Your Visit
                <ArrowRightIcon />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
