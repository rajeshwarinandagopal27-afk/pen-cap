"use client";

import * as React from "react";
import { motion } from "framer-motion";

const FunnelDirectionContext = React.createContext<1 | -1>(1);
const FunnelDirectionProvider = FunnelDirectionContext.Provider;

interface StepShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

function StepShell({ eyebrow, title, description, children }: StepShellProps) {
  const direction = React.useContext(FunnelDirectionContext);
  return (
    <motion.div
      initial={{ opacity: 0, x: direction * 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -24 }}
      transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
      className="mx-auto w-full max-w-xl"
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className="type-display-lg mt-3 text-[var(--color-text-primary)]">{title}</h1>
      {description && <p className="type-body-lg mt-3 text-[var(--color-text-secondary)]">{description}</p>}
      <div className="mt-8">{children}</div>
    </motion.div>
  );
}

export { StepShell, FunnelDirectionProvider };
