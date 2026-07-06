export const siteStats = {
  placementRate: { value: 89, suffix: "%", label: "Graduates placed within 180 days" },
  medianTimeToPlacement: { value: 71, suffix: " days", label: "Median time to placement" },
  avgSalaryLift: { value: 41, suffix: "%", label: "Average salary increase after placement" },
  alumniCount: { value: 1240, suffix: "+", label: "Alumni working in security" },
  mentorRatio: { value: 12, prefix: "1:", suffix: "", label: "Mentor-to-student ratio" },
  facultyCves: { value: 38, suffix: "", label: "CVEs credited to PenCap faculty" },
};

export const methodology = {
  summary:
    "Placement is defined as a full-time, contract, or apprenticeship security role accepted within 180 days of a student's graduation date, self-reported by the graduate and cross-checked against LinkedIn employment records where public.",
  sampleSize: "Based on the 2024–2025 graduating cohorts (n = 612).",
  excluded:
    "Students who do not complete the program, or who accept a role outside of security within the tracking window, are excluded from the placement-rate numerator but remain in the denominator.",
  auditNote:
    "Outcomes are compiled internally and reviewed annually by Halvorsen & Cole, an independent accounting firm, for methodology consistency. The most recent review was completed in January 2026.",
};

export const employerLogos = [
  "Solace Financial",
  "Northgate Health Systems",
  "Vantage Cloud Partners",
  "Ferrous Advisory",
  "Cobalt Ridge Technologies",
  "Anchorpoint Bank",
];
