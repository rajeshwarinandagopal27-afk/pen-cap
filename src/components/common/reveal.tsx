"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  once?: boolean;
};

/**
 * Fade + rise into view. Always upgrades to the visible state via whileInView
 * (so reduced-motion users still receive the content, just without the motion).
 */
export function Reveal({ children, delay = 0, y = 16, once = true, ...props }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -80px 0px" }}
      transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
