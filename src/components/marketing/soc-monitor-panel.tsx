"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ActivityIcon, ShieldAlertIcon, ShieldCheckIcon, TerminalSquareIcon } from "lucide-react";

const feed = [
  { label: "Brute-force attempt blocked", host: "10.20.4.18", level: "critical" },
  { label: "Anomalous outbound traffic flagged", host: "10.20.7.62", level: "warning" },
  { label: "Endpoint isolated automatically", host: "10.20.2.91", level: "critical" },
  { label: "Phishing payload quarantined", host: "mail-gw-02", level: "warning" },
  { label: "Patch compliance verified", host: "fleet-wide", level: "info" },
];

const levelStyles: Record<string, string> = {
  critical: "text-red-500 bg-red-500/10",
  warning: "text-amber-500 bg-amber-500/10",
  info: "text-royal-500 bg-royal-500/10",
};

export function SocMonitorPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="glow-royal glass relative w-full max-w-md overflow-hidden rounded-2xl p-5"
    >
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <TerminalSquareIcon className="size-4 text-royal-500" />
          Live SOC Monitor
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
          Monitoring
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { icon: ShieldAlertIcon, value: "12", label: "Active alerts" },
          { icon: ActivityIcon, value: "486", label: "Events / min" },
          { icon: ShieldCheckIcon, value: "99.8%", label: "Uptime" },
        ].map(({ icon: Icon, value, label }) => (
          <div key={label} className="rounded-xl bg-secondary/60 p-3">
            <Icon className="size-4 text-royal-500" />
            <p className="mt-1.5 text-lg font-semibold text-foreground">{value}</p>
            <p className="text-[11px] text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {feed.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.12, duration: 0.4 }}
            className="flex items-center justify-between rounded-lg px-2.5 py-2 text-xs hover:bg-secondary/60"
          >
            <span className="text-foreground/90">{item.label}</span>
            <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${levelStyles[item.level]}`}>
              {item.host}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
