import { employerLogos } from "@/lib/data/outcomes";

function EmployerLogoWall() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
      {employerLogos.map((name) => (
        <div
          key={name}
          className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] p-4"
        >
          <span className="type-body-sm text-[var(--color-text-secondary)] opacity-80 grayscale">{name}</span>
        </div>
      ))}
    </div>
  );
}

export { EmployerLogoWall };
