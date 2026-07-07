"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon, PhoneCallIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { mainNav } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full lg:hidden" aria-label="Open menu">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="text-left text-lg">
            Pen<span className="text-royal-500">Cap</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {mainNav.map((item) => (
            <div key={item.href}>
              <SheetClose asChild>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              </SheetClose>
              {"children" in item && item.children && (
                <div className="ml-3 flex flex-col border-l border-border pl-3">
                  {item.children.map((child) => (
                    <SheetClose asChild key={child.href}>
                      <Link
                        href={child.href}
                        className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-col gap-3 border-t border-border pt-4">
          <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-2 text-sm text-muted-foreground">
            <PhoneCallIcon className="size-4" />
            {siteConfig.contact.phone}
          </a>
          <SheetClose asChild>
            <Button asChild variant="accent" size="lg" className="w-full">
              <Link href="/contact?intent=consultation">Book Free Career Consultation</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/contact?intent=apply">Apply Now</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
