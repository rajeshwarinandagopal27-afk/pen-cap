import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CyberRangeTerminal } from "@/components/cards/cyber-range-terminal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CyberRangeCard() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-5">
        <span className="eyebrow">The PenCap Cyber Range</span>
        <h2 className="type-display-lg text-[var(--color-text-primary)]">
          Practice before you enroll.
        </h2>
        <p className="type-body-lg text-[var(--color-text-secondary)] reading-measure">
          A live-fire practice environment with real vulnerable infrastructure — not slideshow
          labs. Solve your first challenge free, no signup required.
        </p>
        <div>
          <Badge variant="low">Web exploitation · Beginner</Badge>
        </div>
        <div>
          <Button asChild size="lg">
            <Link href="/cyber-range">
              Start free challenge <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
      <CyberRangeTerminal />
    </div>
  );
}

export { CyberRangeCard };
