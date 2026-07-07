import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "lucide-react";

import { blogPosts, getBlogBySlug } from "@/lib/data/blogs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/reveal";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blogs", url: "/blogs" },
          { name: post.title, url: `/blogs/${post.slug}` },
        ]}
      />
      <article className="container-px mx-auto max-w-3xl py-16 lg:py-24">
        <Reveal>
          <Button asChild variant="ghost" size="sm">
            <Link href="/blogs">
              <ArrowLeftIcon />
              Back to Blog
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.05}>
          <Badge variant="accent" className="mt-6 w-fit">
            {post.category}
          </Badge>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>By {post.author}</span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="size-3.5" />
              {post.readingTime}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.25} className="mt-14 rounded-2xl bg-navy-950 p-8 text-center text-white">
          <h2 className="text-xl font-semibold">Ready to build these skills hands-on?</h2>
          <p className="mt-2 text-white/70">Book a free career consultation with our admissions team.</p>
          <Button asChild variant="accent" size="lg" className="mt-6">
            <Link href="/contact?intent=consultation">Book Free Career Consultation</Link>
          </Button>
        </Reveal>
      </article>
    </>
  );
}
