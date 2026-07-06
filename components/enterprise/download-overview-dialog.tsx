"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
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

const schema = z.object({ workEmail: z.string().email("Enter a valid work email") });
type FormValues = z.infer<typeof schema>;

function DownloadOverviewDialog() {
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
        toast.success("The enterprise overview is on its way to your inbox.");
        reset();
        setOpen(false);
        resolve();
      }, 700);
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg">
          Download the enterprise overview <Download />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get the enterprise overview</DialogTitle>
          <DialogDescription>
            A short PDF covering program formats, compliance mapping, and pricing bands — useful
            for building an internal case.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="overview-email">Work email</Label>
            <Input id="overview-email" type="email" placeholder="you@company.com" {...register("workEmail")} />
            {errors.workEmail && (
              <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.workEmail.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
              Send me the overview
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { DownloadOverviewDialog };
