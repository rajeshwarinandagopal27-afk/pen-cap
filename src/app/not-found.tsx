import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-28 text-center sm:py-36">
      <SectionEyebrow>404</SectionEyebrow>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
        That page returned a 404, not a finding.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-text-secondary">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Try the programs
        catalog, or head back home.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">
            Back to home <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/programs">View programs</Link>
        </Button>
      </div>
    </div>
  );
}
