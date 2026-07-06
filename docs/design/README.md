# PenCap Institute of Excellence — Design System & UI Specification

This is a complete, implementation-ready design system and page-by-page UI
specification for the PenCap Institute of Excellence website — a premium
cybersecurity education brand. It is written for a senior frontend engineer
to build from directly. It contains **no code** — only decisions, rationale,
tokens, component anatomy, and page specs.

## How this is organized

| File | Contents |
|---|---|
| [`01-brand-strategy.md`](./01-brand-strategy.md) | Positioning, audiences, tone of voice, the visual point of view, and the explicit list of cybersecurity design clichés we are rejecting and why. |
| [`02-design-tokens.md`](./02-design-tokens.md) | The literal token tables: spacing, radius, elevation, borders, breakpoints, z-index, motion durations/easings. Source of truth for implementation. |
| [`03-typography.md`](./03-typography.md) | Typeface selection and pairing rationale, full type scale, usage rules. |
| [`04-color-system.md`](./04-color-system.md) | Primitive → semantic → component token architecture, light/dark modes, contrast rationale, data-viz and risk-level colors. |
| [`05-component-system.md`](./05-component-system.md) | Full component inventory: anatomy, states, variants, and the reasoning behind each. |
| [`06-motion-system.md`](./06-motion-system.md) | Motion principles, the signature "resolve" text effect, scroll choreography, per-component animation specs, reduced-motion behavior. |
| [`07-page-specifications.md`](./07-page-specifications.md) | Section-by-section, top-to-bottom specs for every page, with the conversion rationale for each section. |
| [`08-admissions-funnel.md`](./08-admissions-funnel.md) | The full admissions funnel: every step, the psychology behind it, and drop-off mitigation. |
| [`09-conversion-optimization.md`](./09-conversion-optimization.md) | CRO principles applied site-wide: trust signal taxonomy, CTA hierarchy, urgency ethics, instrumentation. |
| [`10-responsive-mobile.md`](./10-responsive-mobile.md) | Mobile-first strategy, breakpoint behavior, thumb-zone rules, performance budgets. |

## How to use this if you're implementing

Read in this order: **01 → 04 → 02/03 → 05 → 06 → 07 → 08 → 09 → 10**.
Brand strategy tells you *why*; tokens and typography give you the raw
material; the component system tells you *what* to build once; the page
specs tell you how to *assemble* it; funnel and CRO tell you what's
non-negotiable for the business outcome.

Every section in every page spec answers three questions: **what job does
this section do, why does it sit where it sits, and what happens if it's
removed.** If you can't answer all three for a section you're building,
stop and re-read the rationale before shipping it.
