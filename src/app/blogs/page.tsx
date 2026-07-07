import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "lucide-react";

import { blogPosts } from "@/lib/data/blogs";
import { Badge } from "@/components/ui/badge";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Cybersecurity Insights & Career Guides",
  description:
    "Career guides, certification updates, and industry insights from PenCap's mentors — practical reading for anyone building a cybersecurity career.",
  alternates: { canonical: "/blogs" },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blogs", url: "/blogs" }]} />
      <section className="container-px mx-auto max-w-7xl py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Blog</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Insights from our mentors
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Career guides, certification breakdowns, and industry perspective — written by the
              same mentors who teach at PenCap.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06} className="h-full">
              <Link
                href={`/blogs/${post.slug}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <Badge variant="accent" className="w-fit">
                  {post.category}
                </Badge>
                <h2 className="mt-4 text-lg font-semibold text-foreground">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon className="size-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon className="size-3.5" />
                    {post.readingTime}
                  </span>
                </div>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-royal-500">
                  Read article
                  <ArrowRightIcon className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
