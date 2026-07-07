import type { RiskLevel } from "@/lib/types";

export interface SocAlert {
  time: string;
  severity: RiskLevel | "success";
  title: string;
  source: string;
}

export const socAlerts: SocAlert[] = [
  { time: "02:14:07", severity: "critical", title: "Multiple failed auth attempts", source: "edge-gateway-03" },
  { time: "02:14:22", severity: "high", title: "Anomalous outbound data transfer", source: "db-replica-02" },
  { time: "02:15:01", severity: "medium", title: "New admin role assigned", source: "iam-console" },
  { time: "02:16:40", severity: "low", title: "TLS certificate expiring in 14 days", source: "api-gateway" },
  { time: "02:17:12", severity: "success", title: "Session terminated, source IP blocked", source: "soc-response" },
];

export type SegmentStatus = "healthy" | "monitored" | "alert";

export interface NetworkNode {
  id: string;
  label: string;
  x: number;
  y: number;
  status: SegmentStatus;
}

export interface NetworkSegments {
  nodes: NetworkNode[];
  edges: [string, string][];
}

export const networkSegments: NetworkSegments = {
  nodes: [
    { id: "internet", label: "Internet", x: 6, y: 50, status: "monitored" },
    { id: "firewall", label: "Edge Firewall", x: 27, y: 50, status: "healthy" },
    { id: "dmz", label: "DMZ", x: 48, y: 22, status: "monitored" },
    { id: "lb", label: "Load Balancer", x: 48, y: 78, status: "healthy" },
    { id: "app", label: "App Tier", x: 69, y: 50, status: "monitored" },
    { id: "data", label: "Data Tier", x: 92, y: 22, status: "healthy" },
    { id: "iam", label: "Cloud IAM", x: 92, y: 78, status: "alert" },
  ],
  edges: [
    ["internet", "firewall"],
    ["firewall", "dmz"],
    ["firewall", "lb"],
    ["dmz", "app"],
    ["lb", "app"],
    ["app", "data"],
    ["app", "iam"],
  ],
};

export interface KillChainStep {
  stage: string;
  detail: string;
  status: "detected" | "blocked" | "observed";
  offset: string;
}

export const killChain: KillChainStep[] = [
  { stage: "Reconnaissance", detail: "Port scan against public IP range", status: "observed", offset: "T+0:00" },
  { stage: "Initial Access", detail: "Credential-stuffing attempt on VPN portal", status: "detected", offset: "T+0:41" },
  { stage: "Execution", detail: "Suspicious PowerShell spawned from Office process", status: "detected", offset: "T+1:12" },
  { stage: "Persistence", detail: "Scheduled task created under system context", status: "detected", offset: "T+1:58" },
  { stage: "Lateral Movement", detail: "SMB traffic to finance subnet, off-hours", status: "blocked", offset: "T+2:33" },
  { stage: "Exfiltration Attempt", detail: "Outbound transfer to unrecognized host", status: "blocked", offset: "T+3:05" },
];

export const blueTeamPlaybook = [
  "Correlate signal across 40+ log sources before the analyst ever sees an alert.",
  "Write the detection rule that catches what the last one missed.",
  "Own an incident end-to-end — from first ping to closed ticket.",
];

export const redTeamPlaybook = [
  "Chain three low-severity findings into one critical path to domain admin.",
  "Move laterally through a network without tripping EDR.",
  "Deliver a report a client's engineering team can act on by Monday morning.",
];

export interface CloudFinding {
  resource: string;
  issue: string;
  status: "fail" | "pass";
}

export const cloudFindings: CloudFinding[] = [
  { resource: "s3://client-uploads-prod", issue: "Public read access enabled", status: "fail" },
  { resource: "iam::role/deploy-bot", issue: "AdministratorAccess policy attached", status: "fail" },
  { resource: "sg-0a12cd", issue: "Port 22 open to 0.0.0.0/0", status: "fail" },
  { resource: "kms/key-7f2e", issue: "Automatic key rotation enabled", status: "pass" },
  { resource: "rds/prod-primary", issue: "Encryption at rest enabled", status: "pass" },
];
