"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldHalf } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { primaryNavLinks } from "@/lib/data/nav";
import { ProgramsMenu } from "@/components/nav/programs-menu";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The homepage opens on a full-bleed cinematic hero that stays dark
  // regardless of the site's light/dark theme — while the header floats
  // transparently over it, its text needs to match that hero, not the
  // ambient theme.
  const overHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-sticky-nav w-full transition-[background-color,border-color,box-shadow,padding] duration-200 ease-[var(--ease-standard)]",
        scrolled
          ? "border-b border-border bg-canvas/85 py-2.5 shadow-[0_1px_2px_rgba(16,21,26,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-4"
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 font-display text-lg font-semibold tracking-tight transition-colors",
            overHero ? "text-ink-50" : "text-text-primary"
          )}
        >
          <ShieldHalf className="size-6 text-accent" aria-hidden="true" />
          PenCap Institute
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <ProgramsMenu triggerClassName={overHero ? "text-ink-300 hover:text-ink-50" : undefined} />
          {primaryNavLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                overHero ? "text-ink-300 hover:text-ink-50" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className={overHero ? "text-ink-50 hover:bg-ink-50/10" : undefined} />
          <Link
            href="/login"
            className={cn(
              "hidden text-sm font-medium transition-colors sm:block",
              overHero ? "text-ink-300 hover:text-ink-50" : "text-text-secondary hover:text-text-primary"
            )}
          >
            Log in
          </Link>
          <Button
            asChild
            size="md"
            className={cn("hidden sm:inline-flex", overHero && "bg-ink-50 text-ink-950 hover:bg-ink-100")}
          >
            <Link href="/admissions">Apply Now</Link>
          </Button>
          <MobileNav triggerClassName={overHero ? "text-ink-50 hover:bg-ink-50/10" : undefined} />
        </div>
      </div>
    </header>
  );
}
