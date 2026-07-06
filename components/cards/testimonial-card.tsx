import { Play } from "lucide-react";

import { InitialsAvatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/lib/data/testimonials";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col gap-5 p-6">
      <div className="flex items-center gap-3">
        <div className="relative">
          <InitialsAvatar name={testimonial.name} initials={testimonial.initials} size="md" />
          {testimonial.video && (
            <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--ink-950)]">
              <Play className="size-3 fill-current" />
            </span>
          )}
        </div>
        <div>
          <p className="type-body-sm font-medium text-[var(--color-text-primary)]">{testimonial.name}</p>
          <p className="type-body-xs text-[var(--color-text-muted)] normal-case tracking-normal">
            {testimonial.program} grad, now {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      <p className="type-body-lg text-[var(--color-text-primary)] flex-1">“{testimonial.quote}”</p>

      <Badge variant="accent" className="w-fit">
        {testimonial.outcomeChip}
      </Badge>
    </Card>
  );
}

export { TestimonialCard };
