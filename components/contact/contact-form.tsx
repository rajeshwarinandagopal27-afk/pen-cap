"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/validations/contact";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  function onSubmit() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        toast.success("Message sent — we typically reply within one business day.");
        reset();
        resolve();
      }, 700);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input id="contact-name" {...register("name")} />
        {errors.name && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input id="contact-email" type="email" {...register("email")} />
        {errors.email && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" rows={5} {...register("message")} />
        {errors.message && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.message.message}</p>}
      </div>
      <Button type="submit" size="lg" loading={isSubmitting} className="w-fit">
        Send message
      </Button>
    </form>
  );
}

export { ContactForm };
