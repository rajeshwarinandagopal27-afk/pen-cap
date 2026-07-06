import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { testimonials } from "@/lib/data/testimonials";

function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Outcomes, in their words</span>
          <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
            Average salary increase: 41%. Here&rsquo;s what that looked like for six of them.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export { TestimonialsSection };
