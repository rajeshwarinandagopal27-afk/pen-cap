"use client";

import * as React from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * docs/design/08-admissions-funnel.md: never a hard block, never
 * confirm-shaming — just an offer to email a link to resume.
 */
function ExitIntentDialog({ enabled }: { enabled: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [shown, setShown] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (!enabled || shown) return;

    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        setOpen(true);
        setShown(true);
      }
    }

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [enabled, shown]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
    toast.success("We've emailed you a link to pick up right where you left off.");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leaving already?</DialogTitle>
          <DialogDescription>
            Your progress is saved. We can email you a link so you can finish this later on any
            device — no pressure, no discount tricks.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSend} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="exit-email">Email address</Label>
            <Input
              id="exit-email"
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Keep going now
            </Button>
            <Button type="submit">Email me a link</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { ExitIntentDialog };
