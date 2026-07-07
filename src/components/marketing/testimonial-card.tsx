import { PlayCircleIcon, StarIcon } from "lucide-react";

import type { Testimonial } from "@/lib/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/marketing/reveal";

export function TestimonialCard({ testimonial, delay = 0 }: { testimonial: Testimonial; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <StarIcon key={i} className="size-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Badge variant="outline" className="text-[11px]">
            {testimonial.source === "Video" ? (
              <span className="flex items-center gap-1">
                <PlayCircleIcon className="size-3" /> Video
              </span>
            ) : (
              testimonial.source
            )}
          </Badge>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">&ldquo;{testimonial.quote}&rdquo;</p>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
          <Avatar>
            <AvatarFallback>{testimonial.avatarInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
