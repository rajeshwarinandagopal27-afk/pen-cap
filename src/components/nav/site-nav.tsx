"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ShieldCheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/data/nav";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProgramsMenu } from "@/components/nav/programs-menu";
import { MobileNav } from "@/components/nav/mobile-nav";

export function SiteNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-background/0"
      )}
    >
      <div className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-navy-900 text-white dark:bg-white dark:text-navy-950">
            <ShieldCheckIcon className="size-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Pen<span className="text-royal-500">Cap</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            "children" in item && item.children ? (
              <ProgramsMenu key={item.href} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-navy-900/80 transition-colors hover:bg-secondary hover:text-navy-900 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white",
                  pathname === item.href && "bg-secondary text-navy-900 dark:bg-white/10 dark:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/contact?intent=consultation">Free Consultation</Link>
          </Button>
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact?intent=apply">Apply Now</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
