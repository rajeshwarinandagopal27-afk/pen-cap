"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:text-text-primary hover:bg-accent lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[86%]">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <Logo />
        <nav className="mt-2 flex flex-col" aria-label="Mobile">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between border-b border-border-muted py-3.5 text-[15px] font-medium transition-colors",
                  active ? "text-brand" : "text-text-secondary hover:text-text-primary",
                )}
              >
                {item.title}
                <ArrowRight className="size-4 opacity-40" />
              </Link>
            );
          })}
        </nav>
        <Button asChild variant="brand" size="lg" className="mt-2">
          <Link href="/request-rfq" onClick={() => setOpen(false)}>
            Request an RFQ
          </Link>
        </Button>
        <p className="mt-auto font-mono text-xs text-text-muted">{siteConfig.contact.email}</p>
      </SheetContent>
    </Sheet>
  );
}
