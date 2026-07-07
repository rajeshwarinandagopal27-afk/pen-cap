"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon, ChevronDownIcon, ShieldCheckIcon } from "lucide-react";

import { mainNav } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

const coursesNav = mainNav.find((item) => item.label === "Courses");

export function ProgramsMenu() {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  if (!coursesNav || !("children" in coursesNav)) return null;

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className={cn(
          "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-navy-900/80 transition-colors hover:bg-secondary hover:text-navy-900 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white",
          open && "bg-secondary text-navy-900 dark:bg-white/10 dark:text-white"
        )}
        aria-expanded={open}
      >
        Courses
        <ChevronDownIcon className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-2 w-[560px] -translate-x-1/2 rounded-2xl border border-border bg-popover p-3 shadow-xl"
          >
            <div className="grid grid-cols-1 gap-1">
              {coursesNav.children.map((course) => (
                <Link
                  key={course.href}
                  href={course.href}
                  className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-secondary"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-royal-500/10 text-royal-600 dark:text-royal-400">
                    <ShieldCheckIcon className="size-4" />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      {course.label}
                      <ArrowRightIcon className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{course.description}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between rounded-xl bg-navy-950 p-4 text-white">
              <span className="text-sm">Not sure which program fits you?</span>
              <Link href="/contact" className="text-sm font-semibold text-royal-400 hover:underline">
                Talk to an advisor →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
