export interface ChallengeCategory {
  name: string;
  description: string;
  count: number;
  difficulty: "low" | "medium" | "high" | "critical";
  difficultyLabel: string;
}

export const challengeCategories: ChallengeCategory[] = [
  {
    name: "Web exploitation",
    description: "IDOR, SQLi, auth bypass, SSRF, and business-logic flaws in realistic apps.",
    count: 38,
    difficulty: "low",
    difficultyLabel: "Beginner-friendly",
  },
  {
    name: "Network penetration",
    description: "Enumeration, exploitation, and privilege escalation across simulated networks.",
    count: 26,
    difficulty: "medium",
    difficultyLabel: "Intermediate",
  },
  {
    name: "Active Directory",
    description: "Kerberoasting, lateral movement, and domain privilege escalation.",
    count: 19,
    difficulty: "high",
    difficultyLabel: "Advanced",
  },
  {
    name: "Cloud security",
    description: "Misconfiguration hunting across simulated AWS and Azure environments.",
    count: 22,
    difficulty: "medium",
    difficultyLabel: "Intermediate",
  },
  {
    name: "Social engineering simulations",
    description: "Phishing pretext design and detection in a sandboxed, consequence-free environment.",
    count: 12,
    difficulty: "low",
    difficultyLabel: "Beginner-friendly",
  },
  {
    name: "Cryptography",
    description: "Broken implementations, weak randomness, and classic crypto attack patterns.",
    count: 15,
    difficulty: "high",
    difficultyLabel: "Advanced",
  },
];

export const leaderboard = [
  { rank: 1, handle: "r00t_kavya", points: 14820, streak: 61 },
  { rank: 2, handle: "sudo_arvind", points: 13990, streak: 44 },
  { rank: 3, handle: "null_ptr_deepak", points: 12310, streak: 29 },
  { rank: 4, handle: "hexnaveen", points: 11875, streak: 18 },
  { rank: 5, handle: "packet_priyanka", points: 10420, streak: 22 },
];

export const badges = [
  { name: "First Blood", description: "Solved your first challenge" },
  { name: "7-Day Streak", description: "Solved at least one challenge a day for a week" },
  { name: "AD Slayer", description: "Cleared every Active Directory challenge" },
  { name: "Full Stack Breaker", description: "Solved a challenge in every category" },
];
