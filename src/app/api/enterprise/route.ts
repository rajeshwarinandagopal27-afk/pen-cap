import { NextResponse } from "next/server";
import { enterpriseSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = enterpriseSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.info("[enterprise] request received", parsed.data);

  return NextResponse.json({
    ok: true,
    message: "Thanks — our enterprise team will reach out within one business day to schedule a call.",
  });
}
