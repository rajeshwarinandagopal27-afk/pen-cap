import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.info("[contact] received", parsed.data);

  return NextResponse.json({
    ok: true,
    message:
      parsed.data.intent === "enterprise"
        ? "Thanks — a member of our enterprise team will reach out within one business day."
        : "Thanks — an admissions advisor will reach out within one business day.",
  });
}
