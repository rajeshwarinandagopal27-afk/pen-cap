import { placementPartners } from "@/lib/data/placements";

export function EmployerStrip() {
  const loopedPartners = [...placementPartners, ...placementPartners];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-12 py-2">
        {loopedPartners.map((partner, index) => (
          <span
            key={`${partner.name}-${index}`}
            className="text-xl font-semibold tracking-tight text-muted-foreground/70"
          >
            {partner.name}
          </span>
        ))}
      </div>
    </div>
  );
}
