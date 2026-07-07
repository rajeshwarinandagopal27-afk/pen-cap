export type JourneyPhase = "build" | "prove" | "launch";

export interface JourneyStage {
  title: string;
  description: string;
  phase: JourneyPhase;
}

export const journeyStages: JourneyStage[] = [
  { title: "Foundation", description: "The security mindset, the terminology, the map of the entire field.", phase: "build" },
  { title: "Networking", description: "How data actually moves between machines — and precisely where it breaks.", phase: "build" },
  { title: "Linux", description: "The command line stops being intimidating and starts being home.", phase: "build" },
  { title: "Python", description: "Automate the boring parts. Ship your first working tool.", phase: "build" },
  { title: "Web", description: "Where most real-world vulnerabilities actually live.", phase: "prove" },
  { title: "SOC", description: "Detection, triage, and what a 2 a.m. alert really looks like.", phase: "prove" },
  { title: "Cloud", description: "Misconfigurations, IAM sprawl, and the attack surface nobody patches.", phase: "prove" },
  { title: "Threat Hunting", description: "Finding the intrusion the alerts already missed.", phase: "prove" },
  { title: "Red Team", description: "Full-scope engagements. Think, move, and report like the adversary.", phase: "launch" },
  { title: "Interview", description: "Mock interviews run by people who used to hire for these roles.", phase: "launch" },
  { title: "Career", description: "Placed. Verified. Tracked for 180 days — not left to guess.", phase: "launch" },
];

export const journeyPhaseLabels: Record<JourneyPhase, string> = {
  build: "Build",
  prove: "Prove",
  launch: "Launch",
};
