"use client";

import { Shield, Crosshair, Radar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/marketing/reveal";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import {
  blueTeamPlaybook,
  cloudFindings,
  killChain,
  networkSegments,
  redTeamPlaybook,
  socAlerts,
} from "@/lib/data/mission-control";
import { siteStats } from "@/lib/data/stats";
import { cn } from "@/lib/utils";

const severityVariant: Record<string, "critical" | "high" | "medium" | "low" | "success"> = {
  critical: "critical",
  high: "high",
  medium: "medium",
  low: "low",
  success: "success",
};

export function MissionControl() {
  return (
    <section
      id="mission-control"
      className="dark relative overflow-hidden border-y border-border bg-canvas py-28 text-text-primary sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--color-ink-300) 14%, transparent) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-4">
          <SectionEyebrow>Chapter Four — Mission Control</SectionEyebrow>
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Not a curriculum. An operations center.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-text-secondary">
            This is the environment you train inside every day — the same telemetry, the same
            playbooks, the same architecture a real SOC or red team runs on.
          </p>
        </div>

        <Reveal className="mt-10">
          <div className="rounded-[var(--radius-xl)] border border-border bg-surface-raised/85 p-3 shadow-[0_24px_64px_rgba(8,11,16,0.28)] backdrop-blur-sm sm:p-6">
            <Tabs defaultValue="soc">
              <TabsList>
                <TabsTrigger value="soc">SOC Dashboard</TabsTrigger>
                <TabsTrigger value="topology">Network Topology</TabsTrigger>
                <TabsTrigger value="timeline">Attack Timeline</TabsTrigger>
                <TabsTrigger value="blue">Blue Team</TabsTrigger>
                <TabsTrigger value="red">Red Team</TabsTrigger>
                <TabsTrigger value="cloud">Cloud Security</TabsTrigger>
              </TabsList>

              <TabsContent value="soc">
                <SocPanel />
              </TabsContent>
              <TabsContent value="topology">
                <NetworkTopologyPanel />
              </TabsContent>
              <TabsContent value="timeline">
                <TimelinePanel />
              </TabsContent>
              <TabsContent value="blue">
                <PlaybookPanel icon={Shield} accent="text-signal-400" items={blueTeamPlaybook} />
              </TabsContent>
              <TabsContent value="red">
                <PlaybookPanel icon={Crosshair} accent="text-ember-400" items={redTeamPlaybook} />
              </TabsContent>
              <TabsContent value="cloud">
                <CloudPanel />
              </TabsContent>
            </Tabs>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-xs text-text-muted">
          {siteStats.mentorRatio.prefix}
          {siteStats.mentorRatio.value} mentor ratio &nbsp;·&nbsp; 144+ hands-on labs &nbsp;·&nbsp;{" "}
          {siteStats.facultyCves.value} CVEs credited to faculty
        </p>
      </div>
    </section>
  );
}

function SocPanel() {
  return (
    <div className="min-h-[20rem] p-3">
      <div className="mb-4 flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-risk-success" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Live alert feed</p>
      </div>
      <div className="flex flex-col divide-y divide-border-muted">
        {socAlerts.map((alert) => (
          <div key={alert.time} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-text-muted">{alert.time}</span>
              <Badge variant={severityVariant[alert.severity]}>{alert.severity}</Badge>
              <p className="text-sm text-text-primary">{alert.title}</p>
            </div>
            <span className="font-mono text-xs text-text-muted">{alert.source}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const segmentStatusDot: Record<string, string> = {
  healthy: "bg-risk-success",
  monitored: "bg-signal-400",
  alert: "bg-risk-high",
};

function NetworkTopologyPanel() {
  const { nodes, edges } = networkSegments;
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));

  return (
    <div className="min-h-[20rem] rounded-[var(--radius-md)] border border-border-muted bg-canvas p-4 sm:p-6">
      <div className="relative aspect-[16/7] w-full">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full text-border"
          aria-hidden="true"
        >
          <g stroke="currentColor" strokeWidth="0.5" fill="none">
            {edges.map(([a, b]) => {
              const from = nodeMap.get(a);
              const to = nodeMap.get(b);
              if (!from || !to) return null;
              return <line key={`${a}-${b}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />;
            })}
          </g>
        </svg>
        {nodes.map((node) => (
          <div
            key={node.id}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span className={cn("size-2.5 rounded-full ring-4 ring-canvas", segmentStatusDot[node.status])} />
            <span className="whitespace-nowrap text-[11px] text-text-secondary">{node.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-text-muted">
        A simplified view of the architecture students learn to defend — edge, application, and data tiers.
      </p>
    </div>
  );
}

function TimelinePanel() {
  return (
    <div className="min-h-[20rem] overflow-x-auto p-3">
      <ol className="flex min-w-max gap-0">
        {killChain.map((step, i) => (
          <li key={step.stage} className="flex items-center">
            <div className="w-52 shrink-0 px-3">
              <span className="font-mono text-[10px] text-text-muted">{step.offset}</span>
              <p className="mt-1 font-display text-sm font-semibold text-text-primary">{step.stage}</p>
              <p className="mt-1 text-xs leading-relaxed text-text-secondary">{step.detail}</p>
              <Badge
                variant={step.status === "blocked" ? "success" : step.status === "detected" ? "high" : "neutral"}
                className="mt-2"
              >
                {step.status}
              </Badge>
            </div>
            {i < killChain.length - 1 && <div className="h-px w-8 shrink-0 bg-border" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </div>
  );
}

function PlaybookPanel({
  icon: Icon,
  accent,
  items,
}: {
  icon: typeof Shield;
  accent: string;
  items: string[];
}) {
  return (
    <div className="min-h-[20rem] p-3">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <Icon className={cn("mt-0.5 size-4 shrink-0", accent)} aria-hidden="true" />
            <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudPanel() {
  return (
    <div className="min-h-[20rem] p-3">
      <div className="mb-3 flex items-center gap-2">
        <Radar className="size-4 text-signal-400" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Misconfiguration scan</p>
      </div>
      <div className="flex flex-col divide-y divide-border-muted">
        {cloudFindings.map((finding) => (
          <div key={finding.resource} className="flex items-center justify-between gap-3 py-3">
            <div>
              <p className="font-mono text-xs text-text-primary">{finding.resource}</p>
              <p className="mt-0.5 text-xs text-text-secondary">{finding.issue}</p>
            </div>
            <Badge variant={finding.status === "fail" ? "critical" : "success"}>{finding.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
