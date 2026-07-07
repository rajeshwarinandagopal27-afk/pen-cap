export const chapters = [
  { id: "feeling", index: "01", label: "The Feeling" },
  { id: "fear", index: "02", label: "The Fear" },
  { id: "mentor", index: "03", label: "The Mentor" },
  { id: "mission-control", index: "04", label: "Mission Control" },
  { id: "journey", index: "05", label: "The Journey" },
  { id: "campus", index: "06", label: "The Campus" },
  { id: "people", index: "07", label: "The People" },
  { id: "future", index: "08", label: "The Future" },
] as const;

export type ChapterId = (typeof chapters)[number]["id"];
