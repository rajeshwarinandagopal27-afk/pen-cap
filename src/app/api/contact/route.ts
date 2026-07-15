import { NextResponse } from "next/server";
import { z } from "zod";

import { contactSchema } from "@/lib/validations/contact";

export const runtime = "nodejs";

/**
 * Contact intake endpoint. Validates and acknowledges the message; no
 * email or CRM integration is wired up yet — plug one in here.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "validation_failed", issues: z.treeifyError(parsed.error) },
        { status: 400 },
      );
    }

    // Integration point: forward `parsed.data` to a CRM, ticketing system
    // or notification email once one is configured for this environment.

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
