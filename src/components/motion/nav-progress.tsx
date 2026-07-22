"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * A thin top progress bar that flashes on route change — a lightweight,
 * honest loading affordance for client navigations.
 */
export function NavProgress() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(false);
  const first = React.useRef(true);

  React.useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setActive(true);
    const id = setTimeout(() => setActive(false), 650);
    return () => clearTimeout(id);
  }, [pathname]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="navprogress"
          className="fixed inset-x-0 top-0 z-[400] h-0.5 origin-left bg-gradient-to-r from-accent-400 to-accent-600"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
