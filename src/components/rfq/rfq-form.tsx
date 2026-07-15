"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BomUpload } from "@/components/rfq/bom-upload";
import { rfqSchema, type RfqFormValues } from "@/lib/validations/rfq";
import { countries, industryOptions } from "@/lib/site";

const defaultValues: RfqFormValues = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  country: "India",
  state: "",
  industry: "",
  requiredDeliveryDate: "",
  notes: "",
  bomFile: null,
  consent: false,
};

export function RfqForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const form = useForm<RfqFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (values: RfqFormValues) => {
    try {
      const payload = new FormData();
      Object.entries(values).forEach(([key, val]) => {
        if (key === "bomFile") return;
        if (val !== undefined && val !== null) payload.append(key, String(val));
      });
      if (values.bomFile) payload.append("bomFile", values.bomFile);

      const res = await fetch("/api/rfq", { method: "POST", body: payload });
      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
      toast.success("RFQ submitted", {
        description: "Our sourcing team will respond with a quote shortly.",
      });
      form.reset(defaultValues);
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again, or email rfq@slt.tech directly.",
      });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center sm:p-14">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="size-7" />
        </span>
        <h2 className="font-display text-2xl font-bold tracking-tight text-text-primary">RFQ received.</h2>
        <p className="max-w-md text-text-secondary">
          Your request has been logged with our sourcing team. We&apos;ll follow up by email with a quote or a
          clarifying question — typically within one business day.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Submit another RFQ
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Manufacturing Pvt. Ltd." autoComplete="organization" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact person</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" autoComplete="name" {...field} />
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
                <FormLabel>Work email</FormLabel>
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
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+91 98XXX XXXXX" autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State / region</FormLabel>
                <FormControl>
                  <Input placeholder="Karnataka" autoComplete="address-level1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {industryOptions.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="requiredDeliveryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Required delivery date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="bomFile"
          render={({ field, fieldState }) => (
            <FormItem id="bom-upload">
              <FormLabel>Upload BOM (Excel, CSV or PDF)</FormLabel>
              <FormControl>
                <BomUpload value={field.value} onChange={field.onChange} invalid={!!fieldState.error} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Part numbers, quantities, target pricing, or anything else our sourcing team should know."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          control={form.control}
          name="consent"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-row items-start gap-3 space-y-0">
              <FormControl>
                <Checkbox
                  id="consent"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-invalid={!!fieldState.error}
                />
              </FormControl>
              <div className="flex flex-col gap-1">
                <label htmlFor="consent" className="text-sm leading-relaxed text-text-secondary">
                  I confirm the details above are accurate and consent to being contacted by SLT Technology
                  regarding this request.
                </label>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" variant="brand" size="lg" disabled={form.formState.isSubmitting} className="self-start">
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Submitting...
            </>
          ) : (
            <>
              Submit RFQ <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
