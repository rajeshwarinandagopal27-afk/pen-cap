"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { getFeaturedPrograms } from "@/lib/data/programs";
import { primaryNav } from "@/lib/data/nav";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const featured = getFeaturedPrograms();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[300] bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-[310] flex w-full max-w-sm flex-col overflow-y-auto bg-[var(--color-canvas)] lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
              <Logo />
              <button
                className="flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]"
                onClick={() => onOpenChange(false)}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-8 px-6 py-8">
              <div>
                <span className="eyebrow">Programs</span>
                <ul className="mt-3 flex flex-col gap-1">
                  {featured.map((program) => (
                    <li key={program.slug}>
                      <Link
                        href={`/programs/${program.slug}`}
                        className="block rounded-[var(--radius-sm)] py-3"
                        onClick={() => onOpenChange(false)}
                      >
                        <span className="block type-body-md font-medium text-[var(--color-text-primary)]">
                          {program.name}
                        </span>
                        <span className="block type-body-xs text-[var(--color-accent)] normal-case tracking-normal">
                          {program.outcomeStat} {program.outcomeLabel.replace(/^of /i, "")}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/programs"
                      className="block py-3 type-body-md text-[var(--color-accent)] underline underline-offset-4"
                      onClick={() => onOpenChange(false)}
                    >
                      View all programs →
                    </Link>
                  </li>
                </ul>
              </div>

              <nav className="flex flex-col border-t border-[var(--color-border)] pt-6">
                {primaryNav
                  .filter((l) => l.label !== "Programs")
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-3 type-body-md font-medium text-[var(--color-text-primary)]"
                      onClick={() => onOpenChange(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                <Link
                  href="/contact"
                  className="py-3 type-body-md font-medium text-[var(--color-text-primary)]"
                  onClick={() => onOpenChange(false)}
                >
                  Log in
                </Link>
              </nav>
            </div>

            <div className="sticky bottom-0 border-t border-[var(--color-border)] bg-[var(--color-canvas)] px-6 py-5">
              <Button asChild size="lg" className="w-full">
                <Link href="/admissions" onClick={() => onOpenChange(false)}>
                  Apply Now <ArrowRight />
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export { MobileNav };
