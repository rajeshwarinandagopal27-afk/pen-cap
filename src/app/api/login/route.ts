import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.info("[login] magic link requested", parsed.data.email);

  // Intentionally generic: never confirm or deny whether an account exists
  // for the submitted address — this is standard login-flow practice, not
  // an unfinished feature.
  return NextResponse.json({
    ok: true,
    message: "If that email matches an enrolled student or applicant, a sign-in link is on its way.",
  });
}
