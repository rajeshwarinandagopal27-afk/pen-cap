"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getFeaturedPrograms } from "@/lib/data/programs";
import { currentCohort } from "@/lib/data/site";
import { MobileNav } from "@/components/layout/mobile-nav";

const navLinks = [
  { label: "Cyber Range", href: "/cyber-range" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "About", href: "/about" },
];

function useScrollState() {
  const [scrolled, setScrolled] = React.useState(false);
  const [compact, setCompact] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
      setCompact(window.scrollY > 200);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, compact };
}

function ProgramsMegaMenu() {
  const [open, setOpen] = React.useState(false);
  const featured = getFeaturedPrograms();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="type-body-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)] rounded-sm py-2"
        onFocus={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Programs
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-1/2 z-[200] w-[560px] -translate-x-1/2 pt-3"
          >
            <div className="grid grid-cols-2 gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 elevation-2">
              <div className="flex flex-col gap-4">
                <span className="eyebrow">Programs</span>
                <ul className="flex flex-col gap-3">
                  {featured.map((program) => (
                    <li key={program.slug}>
                      <Link
                        href={`/programs/${program.slug}`}
                        className="block rounded-[var(--radius-sm)] p-2 -m-2 transition-colors hover:bg-[var(--color-accent-fill)]"
                        onClick={() => setOpen(false)}
                      >
                        <span className="block type-body-sm font-medium text-[var(--color-text-primary)]">
                          {program.name}
                        </span>
                        <span className="block type-body-xs text-[var(--color-accent)] normal-case tracking-normal">
                          {program.outcomeStat} {program.outcomeLabel.replace(/^of /i, "")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/programs"
                  className="type-body-sm text-[var(--color-accent)] underline underline-offset-4"
                  onClick={() => setOpen(false)}
                >
                  View all programs →
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <div>
                  <span className="eyebrow">Next cohort</span>
                  <p className="mt-2 type-body-md font-medium text-[var(--color-text-primary)]">
                    {currentCohort.program}
                  </p>
                  <p className="mt-1 type-body-sm text-[var(--color-text-secondary)]">
                    Starts {currentCohort.startDate}
                  </p>
                  <p className="mt-2 type-mono-sm text-[var(--color-urgency)]">
                    {currentCohort.seatsRemaining} of {currentCohort.totalSeats} seats remaining
                  </p>
                </div>
                <Button asChild size="sm" className="mt-4 w-full">
                  <Link href="/admissions" onClick={() => setOpen(false)}>
                    Start your application <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SiteHeader() {
  const { scrolled, compact } = useScrollState();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,box-shadow,padding] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-canvas)]/90 backdrop-blur-md elevation-1"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "container-page flex items-center justify-between transition-[height] duration-[var(--duration-fast)]",
            compact ? "h-16" : "h-20",
          )}
        >
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            <ProgramsMegaMenu />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="type-body-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)] rounded-sm py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <ThemeToggle />
            <Link
              href="/contact"
              className="type-body-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              Log in
            </Link>
            <Button asChild size="md">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}

export { SiteHeader };
