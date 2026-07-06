import { programs } from "@/lib/data/programs";
import type { EligibilityValues } from "@/lib/validations/admissions";

interface Recommendation {
  slug: string;
  fitNote: string;
}

/**
 * A deliberately honest recommendation: routes true beginners to
 * Foundations first rather than the flagship program, per
 * docs/design/08-admissions-funnel.md's "honest fit signal" requirement.
 */
export function recommendProgram(values: EligibilityValues): Recommendation {
  const { experienceLevel, careerGoal } = values;

  if (experienceLevel === "none") {
    return {
      slug: "security-plus-foundations",
      fitNote:
        "With no security background yet, Security+ Foundations is the honest starting point — most applicants without technical experience start here before moving to a specialization.",
    };
  }

  if (careerGoal === "grc") {
    return {
      slug: "grc-security-compliance",
      fitNote: "Your interest in governance and compliance work points to our GRC & Security Compliance track.",
    };
  }

  if (careerGoal === "cloud") {
    return {
      slug: "cloud-devsecops-program",
      fitNote: "Your cloud/DevOps background is exactly what the Cloud & DevSecOps Security Program is built for.",
    };
  }

  if (careerGoal === "defensive") {
    return {
      slug: "certified-network-defender",
      fitNote: "Blue-team and SOC-analyst goals map directly to the Certified Network Defender track.",
    };
  }

  if (careerGoal === "not-sure" && (experienceLevel === "some-it")) {
    return {
      slug: "certified-ethical-hacker",
      fitNote: "CEH is the widest-angle credential — a strong choice while you're still deciding on a specialization.",
    };
  }

  if (experienceLevel === "1-3-years" || experienceLevel === "3-plus-years") {
    return {
      slug: "offensive-security-program",
      fitNote:
        "With your technical background, the full Offensive Security Program is the fastest credible path to a red-team or vulnerability-management role.",
    };
  }

  return {
    slug: "certified-ethical-hacker",
    fitNote: "CEH is a strong, widely-recognized starting point given what you've told us.",
  };
}

export function getRecommendedProgram(values: EligibilityValues) {
  const rec = recommendProgram(values);
  return { program: programs.find((p) => p.slug === rec.slug)!, fitNote: rec.fitNote };
}
