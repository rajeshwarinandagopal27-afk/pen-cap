import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="max-w-3xl text-balance font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </Heading>
      {description && (
        <p className={cn("max-w-2xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
