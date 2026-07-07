import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { TrustBar } from "@/components/marketing/trust-bar";
import { ProgramsSection } from "@/components/marketing/programs-section";
import { WhyPenCapSection } from "@/components/marketing/why-pencap-section";
import { CampusSection } from "@/components/marketing/campus-section";
import { PlacementsSection } from "@/components/marketing/placements-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cybersecurity Training Institute in Chennai",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProgramsSection />
      <WhyPenCapSection />
      <CampusSection />
      <PlacementsSection />
      <TestimonialsSection limit={3} />
      <FaqSection limit={6} />

      <section className="container-px mx-auto max-w-5xl py-20 lg:py-28">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-16 text-center text-white sm:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-royal-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-red-500/10 blur-3xl" />
          <h2 className="relative text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Your cybersecurity career starts with one campus visit
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/70">
            Walk through our live SOC lab, meet our mentors, and leave with a personalized
            roadmap — no obligation, no cost.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact?intent=consultation">
                Book Free Career Consultation
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link href="/contact">Visit Our Chennai Campus</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
