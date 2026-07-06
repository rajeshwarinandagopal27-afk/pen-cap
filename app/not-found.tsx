import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-20">
      <div className="container-page">
        <div className="max-w-xl">
          <span className="eyebrow">404</span>
          <h1 className="type-display-xl mt-3 text-[var(--color-text-primary)]">
            This page didn&rsquo;t make it into the curriculum.
          </h1>
          <p className="type-body-lg mt-4 text-[var(--color-text-secondary)]">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Try the homepage, or
            explore our programs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">
                Back to homepage <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/programs">View programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
