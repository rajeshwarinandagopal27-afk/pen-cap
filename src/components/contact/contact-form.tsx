"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";

const defaultValues: ContactFormValues = { name: "", company: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      toast.success("Message sent", { description: "Our team will respond shortly." });
      form.reset(defaultValues);
    } catch {
      toast.error("Something went wrong", { description: "Please try again, or email us directly." });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="size-7" />
        </span>
        <h2 className="font-display text-xl font-bold tracking-tight text-text-primary">Message sent.</h2>
        <p className="max-w-sm text-text-secondary">We&apos;ll get back to you shortly.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Company name" autoComplete="organization" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@company.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+91 98XXX XXXXX" autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us what you're sourcing, or how we can help." rows={6} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="brand" size="lg" disabled={form.formState.isSubmitting} className="self-start">
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send message <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
