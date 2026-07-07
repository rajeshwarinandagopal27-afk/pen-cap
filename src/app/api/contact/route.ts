import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  console.log("New contact submission:", parsed.data);

  return NextResponse.json({ success: true });
}
