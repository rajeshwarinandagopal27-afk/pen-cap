"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarClock } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  workEmail: z.string().email("Enter a valid work email"),
  company: z.string().min(2, "Enter your company name"),
  teamSize: z.string().min(1, "Roughly how many engineers?"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

function ScheduleCallDialog({
  triggerLabel = "Talk to our team",
  variant = "primary",
  size = "lg",
}: {
  triggerLabel?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}) {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        toast.success("Request received — our enterprise team will reach out within 1 business day.");
        reset();
        setOpen(false);
        resolve();
      }, 700);
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size}>
          {triggerLabel} <CalendarClock />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Talk to our enterprise team</DialogTitle>
          <DialogDescription>
            Tell us about your team and we&rsquo;ll set up a 30-minute call — no automated
            scheduling loop, a real person follows up within 1 business day.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ent-name">Full name</Label>
              <Input id="ent-name" {...register("name")} />
              {errors.name && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ent-email">Work email</Label>
              <Input id="ent-email" type="email" {...register("workEmail")} />
              {errors.workEmail && (
                <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.workEmail.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ent-company">Company</Label>
              <Input id="ent-company" {...register("company")} />
              {errors.company && (
                <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.company.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ent-team">Team size</Label>
              <Input id="ent-team" placeholder="e.g. 15 engineers" {...register("teamSize")} />
              {errors.teamSize && (
                <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.teamSize.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="ent-message">What are you looking to solve? (optional)</Label>
            <Textarea id="ent-message" rows={3} {...register("message")} />
          </div>
          <DialogFooter>
            <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
              Request a call
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { ScheduleCallDialog };
