import { NextResponse } from "next/server";
import { eligibilitySchema } from "@/lib/validations";
import { getProgramBySlug } from "@/lib/data/programs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = eligibilitySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { experienceLevel, goal } = parsed.data;

  let recommendedSlug = "offensive-security-program";
  if (goal === "cloud") {
    recommendedSlug = "cloud-security-devsecops";
  } else if (goal === "defensive") {
    recommendedSlug = "soc-analyst-accelerator";
  } else if (goal === "advance-existing-career" || experienceLevel === "experienced") {
    recommendedSlug = "advanced-red-team-certificate";
  } else if (goal === "offensive") {
    recommendedSlug = "offensive-security-program";
  }

  // An experienced applicant aiming at web/network offense who hasn't
  // explicitly said "advance existing career" should still see the
  // advanced track surfaced as a strong fit signal.
  if (experienceLevel === "experienced" && goal === "offensive") {
    recommendedSlug = "advanced-red-team-certificate";
  }

  const program = getProgramBySlug(recommendedSlug);

  console.info("[eligibility] submission", parsed.data, "-> recommended", recommendedSlug);

  return NextResponse.json({
    ok: true,
    recommendedProgram: program
      ? {
          slug: program.slug,
          name: program.name,
          tagline: program.tagline,
          outcomeStat: program.outcomeStat,
          outcomeStatLabel: program.outcomeStatLabel,
          durationWeeks: program.durationWeeks,
          nextCohort: program.nextCohort,
        }
      : null,
  });
}
