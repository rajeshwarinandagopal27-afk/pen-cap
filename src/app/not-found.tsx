import Link from "next/link";
import { ArrowRightIcon, ShieldAlertIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-px mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center text-center">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-royal-500/10 text-royal-600 dark:text-royal-400">
        <ShieldAlertIcon className="size-8" />
      </span>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" variant="accent">
          <Link href="/">
            Back to Home
            <ArrowRightIcon />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}
