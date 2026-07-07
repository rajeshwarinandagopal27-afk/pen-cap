import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircle2Icon,
  ClockIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

import { getProgramBySlug, programs } from "@/lib/data/programs";
import { testimonials } from "@/lib/data/testimonials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { CurriculumTimeline } from "@/components/marketing/curriculum-timeline";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { CourseJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};

  return {
    title: program.name,
    description: program.tagline,
    alternates: { canonical: `/courses/${program.slug}` },
    openGraph: { title: program.name, description: program.tagline },
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const relatedTestimonials = testimonials.filter((t) => t.program === program.name).slice(0, 3);
  const fallbackTestimonials = relatedTestimonials.length ? relatedTestimonials : testimonials.slice(0, 3);

  return (
    <>
      <CourseJsonLd name={program.name} description={program.tagline} slug={program.slug} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: program.shortName, url: `/courses/${program.slug}` },
        ]}
      />

      <section className="border-b border-border bg-secondary/30">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24">
          <Reveal>
            <Badge variant="accent">{program.level} Program</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {program.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{program.tagline}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact?intent=apply">
                Apply Now
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact?intent=consultation">Book Free Career Consultation</Link>
            </Button>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: ClockIcon, label: "Duration", value: program.duration },
              { icon: UsersIcon, label: "Batch size", value: program.batchSize },
              { icon: TrendingUpIcon, label: "Avg. salary", value: program.averageSalaryRange },
              { icon: BriefcaseIcon, label: "Format", value: program.format },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-border bg-card p-4">
                <Icon className="size-4 text-royal-500" />
                <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <SectionEyebrow>Curriculum</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">What you&rsquo;ll learn</h2>
            </Reveal>
            <div className="mt-8">
              <CurriculumTimeline modules={program.modules} />
            </div>
          </div>

          <div className="space-y-8">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Who it&rsquo;s for</h3>
                <ul className="mt-4 space-y-2.5">
                  {program.whoFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-royal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Career outcome</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{program.outcome}</p>
                <ul className="mt-4 space-y-2.5">
                  {program.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-royal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Job roles</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.jobRoles.map((role) => (
                    <Badge key={role} variant="outline">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Skills you&rsquo;ll master</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.skills.map((skill) => (
                  <Badge key={skill} variant="accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tools you&rsquo;ll use</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.tools.map((tool) => (
                  <Badge key={tool} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Success Stories</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                Graduates of {program.shortName}
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {fallbackTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-5xl py-20">
        <Reveal className="rounded-3xl bg-navy-950 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to start {program.shortName}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Book a free consultation or visit our Chennai campus to see the {program.shortName} labs
            in action before you enroll.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact?intent=apply">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link href="/contact?intent=consultation">Book Free Career Consultation</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
