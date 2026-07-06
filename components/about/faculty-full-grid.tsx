"use client";

import { InitialsAvatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RevealGroup } from "@/components/motion/reveal";
import { faculty } from "@/lib/data/faculty";

function FacultyFullGrid() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {faculty.map((person) => (
        <div key={person.id} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
          <div className="flex items-start gap-4">
            <InitialsAvatar name={person.name} initials={person.initials} size="lg" />
            <div>
              <h3 className="type-body-lg font-medium text-[var(--color-text-primary)]">{person.name}</h3>
              <p className="type-body-sm text-[var(--color-text-secondary)]">{person.title}</p>
              <p className="type-body-sm mt-2 text-[var(--color-text-primary)]">{person.credibilityLine}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {person.credentials.map((c) => (
                  <Badge key={c} variant="neutral">
                    {c}
                  </Badge>
                ))}
                {person.cveCount > 0 && <Badge variant="accent">{person.cveCount} CVEs</Badge>}
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem value="bio" className="border-b-0">
              <AccordionTrigger className="py-3 type-body-sm">Full bio</AccordionTrigger>
              <AccordionContent>
                <p>{person.bio}</p>
                <p className="mt-2 type-body-xs text-[var(--color-text-muted)] normal-case tracking-normal">
                  Previously: {person.formerEmployers.join(" · ")}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </RevealGroup>
  );
}

export { FacultyFullGrid };
