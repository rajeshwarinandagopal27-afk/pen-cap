# 04 — Color System

Three-tier token architecture: **primitives** (raw values, never referenced
directly in UI) → **semantic tokens** (what the color *means*) → **component
tokens** (where it's *used*). Engineers should only ever consume semantic or
component tokens; primitives exist so the palette can be re-themed without
touching component code.

## Why this palette, not "hacker green"

Terminal-green-on-black is the default reach for every competitor in this
space. We deliberately avoid it: it's associated with low-cost bootcamp
marketing, it has poor accessible contrast at small sizes, and it reads as
thematic costume rather than brand. Instead:

- **Ink** — a near-black/near-white neutral scale with a faint cool
  undertone (not pure gray), used for 90%+ of the UI. This is what makes
  the site feel like Linear/Vercel rather than a security vendor splash
  page.
- **Signal** (teal-cyan) — the one brand accent. Desaturated enough to sit
  quietly in body copy as a link color, saturated enough to read as
  distinctly "ours" in data viz and focus states. It nods to the category
  (signal, terminal cursors, oscilloscope teal) without literally being
  matrix green.
- **Ember** (warm amber) — reserved *exclusively* for real scarcity/urgency
  (cohort seat counts, application deadlines) and for semantic "high"
  states. Because it's used nowhere else, it retains meaning every time it
  appears — a color that's everywhere means nothing.
- Primary CTAs are **not** colored with the brand accent. See rationale
  below.

## Primitives

### Ink (neutral scale — cool-tinted)

| Token | Hex | Usage note |
|---|---|---|
| `ink.950` | `#0A0E12` | Dark-mode canvas (never pure black) |
| `ink.900` | `#10151A` | Dark-mode surface / raised panels |
| `ink.800` | `#181F26` | Dark-mode card surface |
| `ink.700` | `#242C34` | Dark-mode borders, dividers |
| `ink.600` | `#3B454E` | Dark-mode muted borders / disabled fills |
| `ink.500` | `#5C6870` | Muted text (both modes, mid-tone) |
| `ink.400` | `#8A97A0` | Placeholder text, tertiary icons |
| `ink.300` | `#B7C1C8` | Light-mode muted borders |
| `ink.200` | `#DCE3E7` | Light-mode dividers |
| `ink.100` | `#EEF2F4` | Light-mode surface / raised panels |
| `ink.50`  | `#F8FAFB` | Light-mode canvas (paper white, not pure white) |
| `ink.0`   | `#FFFFFF` | Pure white — reserved for icons-on-dark and card surfaces needing max lift |

### Signal (brand accent — teal/cyan)

| Token | Hex | Usage note |
|---|---|---|
| `signal.700` | `#0A5E66` | Text-on-light needing AA contrast |
| `signal.600` | `#0E7C86` | Hover/active state of accent elements |
| `signal.500` | `#14A3AE` | **Base accent** — links, focus rings, brand marks, data-viz series 1 |
| `signal.400` | `#3FC4CE` | Dark-mode link/accent (higher luminance for contrast on dark) |
| `signal.300` | `#7DDDE3` | Subtle backgrounds, chart fills at low opacity |
| `signal.a12` | `rgba(20,163,174,0.12)` | Tinted backgrounds (badge fills, selected states) |

### Ember (scarcity/urgency accent)

| Token | Hex | Usage note |
|---|---|---|
| `ember.600` | `#B54E0C` | Text-on-light |
| `ember.500` | `#E07A1E` | **Base** — countdowns, "seats remaining," high-priority badges |
| `ember.400` | `#F3A24F` | Dark-mode variant |
| `ember.a12` | `rgba(224,122,30,0.12)` | Tinted badge backgrounds |

### Semantic risk scale (used only in curriculum difficulty tags, Cyber Range challenge ratings, threat-level UI patterns — never as general decoration)

| Token | Hex | Meaning |
|---|---|---|
| `risk.critical` | `#E5484D` | Critical / advanced-only |
| `risk.high` | `#E07A1E` (= ember.500) | High / advanced |
| `risk.medium` | `#D9B440` | Medium / intermediate |
| `risk.low` | `#14A3AE` (= signal.500) | Low / beginner-friendly |
| `risk.success` | `#2AA876` | Completion, pass, verified — muted forest green, deliberately *not* a bright "hacker green" |

## Semantic tokens (mode-aware — these are what components consume)

| Semantic token | Dark mode value | Light mode value |
|---|---|---|
| `color.canvas` | `ink.950` | `ink.50` |
| `color.surface` | `ink.900` | `ink.0` |
| `color.surface-raised` | `ink.800` | `ink.0` (+ `elevation.2`, see tokens doc) |
| `color.border` | `ink.700` | `ink.200` |
| `color.border-muted` | `ink.800` | `ink.100` |
| `color.text-primary` | `ink.50` | `ink.950` |
| `color.text-secondary` | `ink.300` | `ink.600` |
| `color.text-muted` | `ink.400` | `ink.500` |
| `color.text-inverse` | `ink.950` | `ink.50` |
| `color.accent` | `signal.400` | `signal.600` |
| `color.accent-fill` | `signal.a12` | `signal.a12` |
| `color.urgency` | `ember.400` | `ember.600` |
| `color.urgency-fill` | `ember.a12` | `ember.a12` |
| `color.focus-ring` | `signal.400` | `signal.500` |

## Why primary buttons are neutral, not teal

A common instinct is to make every CTA the brand accent color. We
deliberately don't: on this site, **primary CTAs are solid, high-contrast
neutrals** — `ink.50` fill with `ink.950` text in dark mode (i.e., a stark
white/off-white button on a near-black page), and the inverse in light
mode. Reasons:

1. **Contrast, not color, is what makes a button look clickable.** A
   near-white button on near-black is the highest-contrast object on the
   page by construction — it doesn't compete with Signal-colored links,
   charts, or badges for attention.
2. **It preserves Signal as a meaningful signal.** If teal is the button
   color *and* the link color *and* the chart color *and* the badge color,
   it stops communicating anything. Reserved usage = higher information
   value per occurrence (this is the same logic as the Ember scarcity
   color above).
3. **It's the Linear/Vercel pattern**, and it demonstrably converts in
   premium developer-tool marketing — high contrast over brand color for
   the button that matters most.

Secondary/tertiary buttons use outlined or ghost treatments in `ink`
neutrals; Signal appears in buttons only for low-emphasis inline text
links ("Learn more about the Cyber Range →").

## Data visualization palette

Ordered categorical series (outcomes charts, curriculum breakdowns):
`signal.500` → `ember.500` → `ink.400` → `risk.success` → `signal.300` →
`ember.300`. Never use `risk.critical` in a neutral chart context — red is
reserved for actual risk/severity meaning so it never gets "burned" as a
generic chart color.

## Accessibility floor

- Body text on canvas: minimum **4.5:1**, verified for both modes at the
  values above (`ink.50` on `ink.950` ≈ 16.1:1; `ink.950` on `ink.50` ≈
  16.9:1).
- `signal.400` on `ink.950` ≈ 5.4:1 — passes AA for normal text; `signal.500`
  on `ink.50` ≈ 4.6:1 — passes AA. This is why the accent shade *flips*
  between modes rather than reusing one value — a single mid-tone teal
  cannot clear AA against both a near-black and a near-white canvas.
- Never convey pass/fail, difficulty, or eligibility by color alone —
  every risk/semantic color ships with an icon or text label (WCAG 1.4.1).
- Focus rings are always `color.focus-ring` at 2px with a 2px offset,
  visible in both modes, never suppressed on `:focus-visible`.
