import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { testimonials } from "@/lib/data/testimonials";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { TestimonialCard } from "@/components/marketing/testimonial-card";

export function TestimonialsSection({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Testimonials</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Students who became security professionals
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} delay={index * 0.08} />
          ))}
        </div>

        {limit && (
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <Button asChild variant="ghost" size="lg">
              <Link href="/testimonials">
                Read more student stories
                <ArrowRightIcon />
              </Link>
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
