import { cn } from "@/lib/utils";

function hueFromString(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 360;
}

interface InitialsAvatarProps {
  name: string;
  initials: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "size-10 type-body-sm",
  md: "size-14 type-body-lg",
  lg: "size-20 type-display-sm",
  xl: "size-28 type-display-md",
};

/**
 * Deliberately not a photo. Consistent hue-per-person, low-saturation,
 * ink-toned gradient so faculty/testimonial grids stay editorial instead
 * of reaching for stock "hacker" portraiture — see docs/design/01.
 */
function InitialsAvatar({ name, initials, size = "md", className }: InitialsAvatarProps) {
  const hue = hueFromString(name);
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-[var(--radius-lg)] font-medium text-white",
        sizeClasses[size],
        className,
      )}
      style={{
        background: `linear-gradient(155deg, hsl(${hue} 28% 24%), hsl(${(hue + 40) % 360} 22% 14%))`,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export { InitialsAvatar };
