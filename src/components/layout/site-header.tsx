"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Magnetic } from "@/components/motion/magnetic";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // Reveal on scroll up, hide on scroll down (past the hero region).
      if (y > last && y > 240) setHidden(true);
      else if (y < last) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden && !reduce ? "-100%" : "0%" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-[100] w-full transition-colors duration-300",
        scrolled ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[200] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow-md"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="SLT Technology — home" className="shrink-0 rounded-md">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-text-primary" : "text-text-secondary hover:text-text-primary",
                )}
              >
                {item.title}
                {active && <span className="absolute inset-x-3 -bottom-px h-px bg-brand" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden sm:inline-flex">
            <Button asChild variant="brand" size="sm">
              <Link href="/request-rfq">Request RFQ</Link>
            </Button>
          </Magnetic>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
