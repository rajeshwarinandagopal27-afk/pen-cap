"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, BadgeCheckIcon, PlayCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NetworkMotif } from "@/components/marketing/network-motif";
import { SocMonitorPanel } from "@/components/marketing/soc-monitor-panel";
import { StatTile } from "@/components/marketing/stat-tile";
import { heroStats } from "@/lib/data/stats";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NetworkMotif className="pointer-events-none absolute inset-0 -z-10" />

      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 pb-16 pt-16 lg:grid-cols-2 lg:pb-24 lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2"
          >
            {siteConfig.accreditations.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                <BadgeCheckIcon className="size-3.5 text-royal-500" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-[3.75rem]"
          >
            Become a <span className="text-royal-500">Cybersecurity</span> Professional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Train inside a live SOC lab and attack range at Chennai&rsquo;s most credentialed
            institute. Learn from industry mentors, earn EC-Council and CompTIA-aligned
            certifications, and get placement-ready in weeks — not years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" variant="accent">
              <Link href="/contact?intent=consultation">
                Book Free Career Consultation
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact?intent=apply">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/campus">
                <PlayCircleIcon />
                Explore the Campus
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {heroStats.map((stat, index) => (
              <StatTile key={stat.label} {...stat} delay={index * 0.05} />
            ))}
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <SocMonitorPanel />
        </div>
      </div>
    </section>
  );
}
