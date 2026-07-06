import { NextResponse } from "next/server";
import { applicationFullSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = applicationFullSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const referenceId = `PC-${Date.now().toString(36).toUpperCase()}`;

  console.info("[application] submitted", referenceId, parsed.data);

  return NextResponse.json({
    ok: true,
    referenceId,
    message: "Your application has been received. Check your email to schedule your admissions interview.",
  });
}
