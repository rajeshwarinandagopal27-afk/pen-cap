"use client";

import { Shield, Crosshair, Radar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/marketing/reveal";
import {
  blueTeamPlaybook,
  cloudFindings,
  killChain,
  redTeamPlaybook,
  socAlerts,
  threatNodes,
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
      className="dark relative overflow-hidden border-y border-border bg-canvas py-24 text-text-primary sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--color-signal-500) 30%, transparent) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Chapter Four — Mission Control</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Not a curriculum. An operations center.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-text-secondary">
            This is the environment you train inside every day — the same telemetry, the same
            playbooks, the same pressure a real SOC or red team runs on.
          </p>
        </div>

        <Reveal className="mt-10">
          <div className="rounded-[var(--radius-xl)] border border-border bg-surface-raised p-3 shadow-[0_24px_64px_rgba(16,21,26,0.24)] sm:p-6">
            <Tabs defaultValue="soc">
              <TabsList>
                <TabsTrigger value="soc">SOC Dashboard</TabsTrigger>
                <TabsTrigger value="threat-map">Threat Map</TabsTrigger>
                <TabsTrigger value="timeline">Attack Timeline</TabsTrigger>
                <TabsTrigger value="blue">Blue Team</TabsTrigger>
                <TabsTrigger value="red">Red Team</TabsTrigger>
                <TabsTrigger value="cloud">Cloud Security</TabsTrigger>
              </TabsList>

              <TabsContent value="soc">
                <SocPanel />
              </TabsContent>
              <TabsContent value="threat-map">
                <ThreatMapPanel />
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

        <p className="mt-8 text-center font-mono text-xs text-text-muted">
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
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-risk-critical opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-risk-critical" />
        </span>
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">Live alert feed</p>
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

function ThreatMapPanel() {
  return (
    <div className="relative min-h-[20rem] overflow-hidden rounded-[var(--radius-md)] border border-border-muted bg-canvas p-3">
      <div className="relative aspect-[16/8] w-full">
        {threatNodes.map((node) => (
          <div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span className="relative flex" style={{ width: 8 + node.count / 20, height: 8 + node.count / 20 }}>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal-400 opacity-40" />
              <span className="relative inline-flex size-full rounded-full bg-signal-400" />
            </span>
            <span className="mt-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-text-muted">
              {node.label}
            </span>
            <span className="font-mono text-xs text-text-primary">{node.count}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-text-muted">
        Simulated telemetry from the Cyber Range — illustrative of the traffic students triage daily.
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
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">Misconfiguration scan</p>
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
