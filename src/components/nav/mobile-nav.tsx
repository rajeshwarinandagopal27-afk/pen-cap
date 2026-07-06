"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { primaryNavLinks } from "@/lib/data/nav";
import { programs } from "@/lib/data/programs";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2 md:hidden" aria-label="Open menu">
          <Menu className="size-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-full sm:max-w-full">
        <SheetHeader>
          <SheetTitle>PenCap Institute</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile">
          <p className="px-1 pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Programs</p>
          {programs.map((program) => (
            <SheetClose asChild key={program.slug}>
              <Link
                href={`/programs/${program.slug}`}
                className="flex items-center justify-between rounded-[var(--radius-sm)] px-1 py-3 text-base font-medium text-text-primary hover:text-accent"
              >
                {program.name}
                <ArrowRight className="size-4 text-text-muted" aria-hidden="true" />
              </Link>
            </SheetClose>
          ))}
          <div className="my-2 h-px bg-border" />
          {primaryNavLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="rounded-[var(--radius-sm)] px-1 py-3 text-base font-medium text-text-primary hover:text-accent"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="flex flex-col gap-3 border-t border-border pt-4">
          <SheetClose asChild>
            <Link href="/login" className="px-1 py-2 text-sm font-medium text-text-secondary">
              Log in
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild size="lg" className="w-full">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
