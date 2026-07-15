import { NextResponse } from "next/server";
import { z } from "zod";

import { rfqServerSchema } from "@/lib/validations/rfq";

export const runtime = "nodejs";

/**
 * RFQ intake endpoint. Validates and acknowledges the request; no CRM,
 * email or storage integration is wired up yet. When one is available,
 * plug it in here — the request has already been validated by this point.
 */
export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const raw = {
      companyName: form.get("companyName"),
      contactPerson: form.get("contactPerson"),
      email: form.get("email"),
      phone: form.get("phone"),
      country: form.get("country"),
      state: form.get("state"),
      industry: form.get("industry"),
      requiredDeliveryDate: form.get("requiredDeliveryDate") ?? "",
      notes: form.get("notes") ?? "",
      bomFile: form.get("bomFile"),
      consent: form.get("consent") === "true",
    };

    const parsed = rfqServerSchema.safeParse(raw);

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
