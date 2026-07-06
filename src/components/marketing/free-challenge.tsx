"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Flag, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { freeChallenge } from "@/lib/data/cyber-range";

const CORRECT_FLAG = "pencap{sequential_tenant_ids_1041}";

export function FreeChallenge() {
  const [guess, setGuess] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "correct" | "incorrect">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(guess.trim().toLowerCase() === CORRECT_FLAG ? "correct" : "incorrect");
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="low">{freeChallenge.difficulty}</Badge>
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{freeChallenge.category}</p>
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold text-text-primary">{freeChallenge.title}</h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">{freeChallenge.description}</p>

      <div className="mt-5 rounded-[var(--radius-md)] border border-border-muted bg-ink-950 p-4 font-mono text-xs text-ink-100 dark:bg-ink-900">
        <p><span className="text-signal-400">$</span> curl -s https://portal.internal.test/api/invoice/1042</p>
        <p className="pl-4 text-ink-300">{"{"}&quot;tenant_id&quot;: 1042, &quot;vendor&quot;: &quot;Solace Financial&quot;{"}"}</p>
        <p className="mt-2 text-ink-400"># The endpoint doesn&apos;t check that invoice 1042 belongs to you. Try an adjacent ID and submit the flag format below.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="flag">Submit the flag</Label>
          <Input
            id="flag"
            placeholder="pencap{...}"
            value={guess}
            onChange={(e) => {
              setGuess(e.target.value);
              setStatus("idle");
            }}
            className="font-mono"
          />
        </div>
        <Button type="submit" size="md">
          <Flag className="size-4" aria-hidden="true" /> Submit
        </Button>
      </form>

      {status === "correct" && (
        <div className="mt-4 flex items-start gap-2.5 rounded-[var(--radius-sm)] border border-risk-success/30 bg-risk-success/10 p-4 text-sm text-text-primary">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-risk-success" aria-hidden="true" />
          <div>
            <p className="font-medium">Solved — that&rsquo;s a broken access control finding.</p>
            <p className="mt-1 text-text-secondary">
              Ready for 143 more like it?{" "}
              <Link href="/admissions" className="font-medium text-accent hover:underline">
                Check your eligibility
              </Link>{" "}
              for a full program.
            </p>
          </div>
        </div>
      )}
      {status === "incorrect" && (
        <div className="mt-4 flex items-start gap-2.5 rounded-[var(--radius-sm)] border border-destructive/30 bg-destructive/10 p-4 text-sm text-text-primary">
          <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <p>Not quite. Hint: request the invoice one ID below 1042 and format the flag as shown in the placeholder.</p>
        </div>
      )}
    </div>
  );
}
