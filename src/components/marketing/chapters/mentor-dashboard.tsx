"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/marketing/reveal";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";

const skills = [
  { label: "Networking", value: 82 },
  { label: "Linux", value: 91 },
  { label: "Python", value: 68 },
  { label: "SOC", value: 74 },
];

export function MentorDashboard() {
  return (
    <section id="mentor" className="relative overflow-hidden border-y border-border-muted bg-canvas py-28 sm:py-36">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-20">
        <div>
          <SectionEyebrow>Chapter Three — The Mentor</SectionEyebrow>
          <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
            Someone is actually watching your growth.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
            Every student is reviewed, one-on-one, every two weeks — not by a chatbot, by a mentor
            who has done the job. Confidence is tracked like a skill, because it is one.
          </p>
        </div>

        <Reveal>
          <MentorCard />
        </Reveal>
      </div>
    </section>
  );
}

function MentorCard() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-border bg-surface-raised/90 p-6 shadow-[0_24px_64px_rgba(8,11,16,0.14)] backdrop-blur-sm sm:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-border-muted pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Week 8 Review</p>
          <p className="mt-1 font-display text-lg font-semibold text-text-primary">Riya Sharma</p>
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-accent-fill font-mono text-sm font-medium text-accent">
          RS
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {skills.map((skill, i) => (
          <div key={skill.label}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-text-secondary">{skill.label}</span>
              <span className="font-mono text-xs text-text-muted">{skill.value}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-muted">
              <motion.div
                className="h-full origin-left rounded-full bg-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: skill.value / 100 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[var(--radius-md)] border border-border-muted bg-canvas p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Mentor notes — Priya Raman</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
          “Riya's log analysis is already interview-ready. Push her on incident write-ups next —
          that's the last gap before SOC-ready.”
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-text-muted">Confidence level</p>
          <p className="mt-1 font-mono text-2xl font-medium text-text-primary">78%</p>
        </div>
        <div>
          <p className="text-xs text-text-muted">Interview readiness</p>
          <Badge variant="success" className="mt-1.5">On track</Badge>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="text-xs text-text-muted">Next review</p>
          <p className="mt-1 text-sm font-medium text-text-primary">Aug 4, 2026</p>
        </div>
      </div>
    </div>
  );
}
