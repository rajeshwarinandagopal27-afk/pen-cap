import type { Testimonial } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col gap-4 p-6">
      <p className="text-lg leading-relaxed text-text-primary text-balance">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-auto flex items-center gap-3 border-t border-border-muted pt-4">
        <Avatar aria-hidden="true">
          <AvatarFallback>{initials(testimonial.name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-sm font-medium text-text-primary">{testimonial.name}</p>
          <p className="text-xs text-text-secondary">
            {testimonial.currentRole} at {testimonial.currentCompany}
          </p>
        </div>
        {testimonial.outcomeChip && <Badge variant="success">{testimonial.outcomeChip}</Badge>}
      </div>
    </Card>
  );
}
