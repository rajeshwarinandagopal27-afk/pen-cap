"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function StickyMobileCta() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      className="glass fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-border p-3 md:hidden"
    >
      <Button asChild variant="outline" size="lg" className="flex-1">
        <Link href="/contact?intent=consultation">Free Consultation</Link>
      </Button>
      <Button asChild variant="accent" size="lg" className="flex-1">
        <Link href="/contact?intent=apply">Apply Now</Link>
      </Button>
    </motion.div>
  );
}
