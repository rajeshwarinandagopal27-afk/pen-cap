"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface StickyMobileCtaProps {
  label: string;
  href: string;
  showAfter?: number;
}

/**
 * Distinct from the top nav (docs/design/05, 10): the page's single primary
 * CTA, reachable in the mobile thumb zone once the hero CTA has scrolled
 * out of view. Never shown alongside a conflicting primary action.
 */
function StickyMobileCta({ label, href, showAfter = 480 }: StickyMobileCtaProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > showAfter);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-[110] border-t border-[var(--color-border)] bg-[var(--color-canvas)]/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] elevation-3 backdrop-blur-md lg:hidden"
        >
          <Button asChild size="lg" className="w-full">
            <Link href={href}>
              {label} <ArrowRight />
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { StickyMobileCta };
