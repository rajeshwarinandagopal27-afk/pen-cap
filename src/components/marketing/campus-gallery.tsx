import { ImageIcon } from "lucide-react";

import { campusGallery } from "@/lib/data/campus";
import { Reveal } from "@/components/marketing/reveal";

export function CampusGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {campusGallery.map((item, index) => (
        <Reveal key={item.alt} delay={index * 0.06} className={index === 0 ? "col-span-2 row-span-2" : ""}>
          <figure
            className={`group relative flex h-full min-h-40 flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-navy-900 to-navy-700 text-white ${
              index === 0 ? "min-h-full" : ""
            }`}
          >
            <ImageIcon className="size-8 text-white/30 transition-transform group-hover:scale-110" />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/90 to-transparent p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-royal-400">{item.tag}</span>
              <p className="mt-1 text-sm text-white/90">{item.alt}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
