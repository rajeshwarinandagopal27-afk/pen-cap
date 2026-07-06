"use client";

import type * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

function Toaster({ ...props }: ToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-right"
      style={
        {
          "--normal-bg": "var(--color-surface-raised)",
          "--normal-text": "var(--color-text-primary)",
          "--normal-border": "var(--color-border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster };
