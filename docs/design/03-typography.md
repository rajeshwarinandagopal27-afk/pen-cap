# 03 — Typography

## Typeface selection & rationale

**Three-face system:**

| Role | Typeface | Why |
|---|---|---|
| Display / headlines | **General Sans** (or equivalent licensed alternative: Neue Haas Grotesk / Söhne) | A geometric-humanist grotesk with just enough personality in its curves to feel designed rather than default, while staying restrained enough not to compete with Signal-teal or data viz. Used at large sizes and negative tracking for an editorial, confident feel — the "Apple event headline" register. |
| Body / UI | **Inter** (variable) | The most battle-tested screen-legibility face available; using it for body/UI rather than display keeps the interface itself invisible and fast to scan, which is the point — chrome should never compete with content. Variable font means we ship one file and use weight as a real design lever (400/500/600). |
| Code / data / technical | **JetBrains Mono** | Used for the Cyber Range terminal component, code snippets, tuition numbers in tables, and stat counters. Monospace numerals prevent layout jitter in animated counters — a real functional reason, not just theming. |

Fallback stack (self-hosted/licensing risk mitigation): Display →
`"General Sans", "Neue Montreal", -apple-system, sans-serif`; Body →
`"Inter", -apple-system, "Segoe UI", sans-serif`; Mono → `"JetBrains Mono",
"IBM Plex Mono", ui-monospace, monospace`.

**What we explicitly avoid:** a "hacker" monospace used for headlines or
body copy. Monospace-everywhere is the single most common cybersecurity
marketing tell, and it hurts readability at body sizes. Monospace is a
technical-credibility signal precisely because we only spend it where code
or data actually lives.

## Type scale

Base size 16px (1rem). Scale is non-linear and hand-tuned per step (not a
strict ratio) — display sizes are pulled down slightly at the top end for
better line-length control on ultra-wide screens; small sizes are pulled up
slightly for legibility. All values in rem @ 16px root, with fluid clamp
ranges for the top three display steps so hero type scales with viewport
instead of jumping at breakpoints.

| Token | Size (desktop) | Size (mobile floor) | Line-height | Weight | Tracking | Use |
|---|---|---|---|---|---|---|
| `display.2xl` | `clamp(2.75rem, 4vw + 1rem, 5rem)` | 2.75rem | 1.02 | 600 | −0.02em | Homepage hero H1 only |
| `display.xl` | `clamp(2.25rem, 2.5vw + 1rem, 3.5rem)` | 2.25rem | 1.05 | 600 | −0.015em | Page hero H1 (non-home) |
| `display.lg` | 2.5rem | 1.875rem | 1.1 | 600 | −0.01em | Section H2 |
| `display.md` | 1.875rem | 1.5rem | 1.15 | 600 | −0.01em | Subsection H3, card group headers |
| `display.sm` | 1.5rem | 1.25rem | 1.2 | 500 | 0 | Card titles, modal headers |
| `text.xl` | 1.25rem | 1.125rem | 1.4 | 400 | 0 | Lede paragraphs, hero subhead |
| `text.lg` | 1.125rem | 1.0625rem | 1.5 | 400 | 0 | Emphasized body |
| `text.md` | 1rem | 1rem | 1.6 | 400 | 0 | Default body |
| `text.sm` | 0.875rem | 0.875rem | 1.5 | 400 | 0 | Secondary text, form labels |
| `text.xs` | 0.75rem | 0.75rem | 1.4 | 500 | 0.01em | Captions, eyebrow labels, timestamps |
| `mono.md` | 1rem | 1rem | 1.6 | 400 | 0 | Code blocks, terminal body |
| `mono.sm` | 0.8125rem | 0.8125rem | 1.5 | 500 | 0 | Stat counters, tuition figures, tags |

## Usage rules

- **One display size per viewport.** Never stack two `display.*` sizes in
  the same visual group competing for the eye — pick the dominant
  headline and let everything else drop to `display.sm` or `text.*`.
- **Eyebrow labels** (small caps-style labels above headings, e.g.
  "ADMISSIONS" above "How to apply") use `text.xs`, `color.accent`,
  `letter-spacing: 0.08em`, uppercase — this is the *only* place uppercase
  styling is permitted. Body copy is never set in all-caps (readability).
- **Line length:** body copy is constrained to 60–75 characters
  (`max-width: 38rem`–`42rem` depending on font size) regardless of
  container width — premium editorial sites never let paragraphs run
  full-bleed across a wide viewport.
- **Numerals:** all stat/data numerals (placement %, tuition, salary
  figures, countdown units) render in `mono.sm`/`mono.md` with tabular
  figures enabled, even inside otherwise-Inter paragraphs. This is what
  makes stat tiles feel like verified data rather than marketing copy —
  a deliberate, small typographic signal of rigor.
- **Links in body copy** are `color.accent`, underlined (not just
  colored — underline is an accessibility and premium-editorial cue, à la
  Stripe docs), with underline-offset for legibility.
- **Weight ceiling:** nothing above 600 (semibold). No 700/800/900 display
  weights anywhere — heavy black weights are another "trying too hard"
  tell in this category; confidence reads through scale and spacing, not
  boldness.
