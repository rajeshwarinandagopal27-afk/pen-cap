import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { testimonials } from "@/lib/data/testimonials";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Student Testimonials & Success Stories",
  description:
    "Read verified Google Reviews, LinkedIn recommendations, and video testimonials from PenCap Institute graduates now working in cybersecurity roles.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Testimonials", url: "/testimonials" }]} />

      <section className="border-b border-border bg-secondary/30">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 text-center">
          <Reveal>
            <SectionEyebrow className="mx-auto">Testimonials</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Students who became security professionals
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Real reviews from our Google Business profile, LinkedIn recommendations, and video
              stories recorded with graduates across every program track.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} delay={index * 0.06} />
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-5xl pb-20">
        <Reveal className="rounded-3xl bg-navy-950 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Write the next success story
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Book a free consultation and find out which program fits your background and goals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact?intent=consultation">
                Book Free Career Consultation
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
