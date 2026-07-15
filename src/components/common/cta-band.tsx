import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Have a component requirement?",
  description = "Send an RFQ, upload a bill of materials, or talk directly with our sourcing team.",
  className,
  compact = false,
}: {
  title?: string;
  description?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <section className={cn("border-y border-border bg-surface/40", className)}>
      <div
        className={cn(
          "container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center",
          compact ? "py-10" : "py-16 sm:py-20",
        )}
      >
        <Reveal className="max-w-xl">
          <h2 className="text-balance font-display text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-text-secondary">{description}</p>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link href="/request-rfq">
              Request an RFQ <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/request-rfq#bom-upload">Upload BOM</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/contact">Talk to Sales</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
