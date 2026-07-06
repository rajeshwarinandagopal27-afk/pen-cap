"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface StickyMobileCtaProps {
  label: string;
  href: string;
  eyebrow?: string;
}

export function StickyMobileCta({ label, href, eyebrow }: StickyMobileCtaProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-sticky-cta border-t border-border bg-surface/95 px-4 py-3 shadow-[0_-4px_16px_rgba(16,21,26,0.12)] backdrop-blur-md transition-transform duration-200 ease-[var(--ease-emphasized)] md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-between gap-3">
        {eyebrow && <p className="truncate text-xs text-text-secondary">{eyebrow}</p>}
        <Button asChild size="md" className="ml-auto shrink-0">
          <Link href={href}>{label}</Link>
        </Button>
      </div>
    </div>
  );
}
