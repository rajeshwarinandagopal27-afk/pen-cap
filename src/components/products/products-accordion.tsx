"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { TagList } from "@/components/common/tag-list";
import { productCategories, solutions, type ProductCategory } from "@/lib/content";

function relatedSolutionSlugs(category: ProductCategory): string[] {
  if (category.slug === "hard-to-find-long-lead-time") {
    return ["long-lead-time-sourcing", "alternative-part-sourcing"];
  }
  if (category.slug === "obsolete-component-sourcing") {
    return ["obsolete-component-procurement", "alternative-part-sourcing"];
  }
  return ["global-component-sourcing", "bom-fulfilment"];
}

export function ProductsAccordion() {
  return (
    <Accordion type="single" collapsible defaultValue={productCategories[0]?.slug} className="flex flex-col">
      {productCategories.map((cat) => {
        const Icon = cat.icon;
        const related = relatedSolutionSlugs(cat)
          .map((slug) => solutions.find((s) => s.slug === slug))
          .filter((s): s is (typeof solutions)[number] => Boolean(s));

        return (
          <AccordionItem key={cat.slug} value={cat.slug} id={cat.slug} className="scroll-mt-24">
            <AccordionTrigger>
              <span className="flex items-center gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </span>
                {cat.name}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-8 pl-0 sm:pl-14">
                <p className="max-w-2xl text-pretty leading-relaxed text-text-secondary">{cat.blurb}</p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <TagList label="Includes" items={cat.includes} />
                  <TagList label="Applications" items={cat.applications} />
                  <TagList label="Industries" items={cat.industries} />
                  <TagList label="Capabilities" items={cat.capabilities} />
                  <TagList label="Supply Options" items={cat.supplyOptions} />
                  <div className="flex flex-col gap-2.5">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted">
                      Related Solutions
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {related.map((sol) => (
                        <Link
                          key={sol.slug}
                          href={`/solutions#${sol.slug}`}
                          className="inline-flex items-center gap-1 text-sm text-brand hover:underline"
                        >
                          {sol.title} <ArrowRight className="size-3.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-border-muted pt-6">
                  <Button asChild variant="brand" size="sm">
                    <Link href="/request-rfq">Request RFQ</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/request-rfq#bom-upload">Upload BOM</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/contact">Talk to Sales</Link>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
