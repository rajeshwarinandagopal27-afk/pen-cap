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

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

function DownloadSyllabusDialog({ programName }: { programName: string }) {
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
        toast.success(`The ${programName} syllabus is on its way to your inbox.`);
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
          Download syllabus <Download />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get the {programName} syllabus</DialogTitle>
          <DialogDescription>
            We&rsquo;ll email the full week-by-week syllabus and add you to occasional cohort-date
            updates for this program. No spam, unsubscribe anytime.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="syllabus-email">Email address</Label>
            <Input id="syllabus-email" type="email" placeholder="you@email.com" {...register("email")} />
            {errors.email && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.email.message}</p>}
          </div>
          <DialogFooter>
            <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
              Send me the syllabus
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { DownloadSyllabusDialog };
