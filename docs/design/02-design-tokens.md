# 02 — Design Tokens

Color is specified in `04-color-system.md` and type in `03-typography.md`.
This file covers everything else needed to implement pixel-accurate,
consistent UI: spacing, radius, elevation, borders, breakpoints, z-index,
and motion primitives (full motion *behavior* spec lives in
`06-motion-system.md`; this is just the raw duration/easing tokens).

## Spacing scale

4px base unit. This is deliberately a **tight base** (not 8px) so that
fine adjustments (icon-to-label gaps, badge padding) don't force awkward
jumps, while layout-level spacing still composes cleanly in multiples of 8.

| Token | Value | Typical use |
|---|---|---|
| `space.1` | 4px | Icon-to-text gap, tight badge padding |
| `space.2` | 8px | Compact stack gaps, chip padding |
| `space.3` | 12px | Form field internal padding |
| `space.4` | 16px | Default component padding, card internal gutter (mobile) |
| `space.5` | 20px | Button horizontal padding (md) |
| `space.6` | 24px | Card padding (desktop), stack gap between related elements |
| `space.8` | 32px | Gap between distinct content blocks within a section |
| `space.10` | 40px | Section internal top padding (mobile) |
| `space.12` | 48px | Gap between major section subgroups |
| `space.16` | 64px | Section vertical padding (mobile) |
| `space.20` | 80px | Section vertical padding (tablet) |
| `space.24` | 96px | Section vertical padding (desktop) |
| `space.32` | 128px | Hero vertical padding (desktop), major section separation |
| `space.40` | 160px | Rare — homepage hero top offset on large desktop only |

## Layout grid

- **Container max-width:** 1280px, with 24px (mobile) / 32px (tablet) /
  64px (desktop) side gutters (`container.padding`).
- **Reading container** (for long-form: blog, FAQ answers, program
  descriptions): 720px max-width, centered.
- **Grid:** 12-column at desktop (≥1024px), 8-column at tablet (768–1023px),
  4-column at mobile (<768px). Gutter: 24px desktop/tablet, 16px mobile.
- **Sidebar layouts** (program detail tuition card, docs-style pages):
  8/4 column split desktop, stacked (sidebar below content, or above as a
  sticky summary bar) below 1024px.

## Radius

Deliberately restrained — small, consistent radii read as precise and
engineered; large "bubbly" radii read as consumer/casual, which undercuts
the premium-technical positioning.

| Token | Value | Use |
|---|---|---|
| `radius.sm` | 6px | Inputs, small buttons, tags/chips (non-pill) |
| `radius.md` | 10px | Buttons (default), badges |
| `radius.lg` | 14px | Cards, modals, panels |
| `radius.xl` | 20px | Large feature cards, hero media frames |
| `radius.full` | 999px | Pills (status tags, avatar), the eyebrow-label capsule |

## Elevation (shadows)

Two parallel systems: a neutral elevation scale for dark mode (low-opacity
black shadows read poorly on near-black — dark mode elevation is built from
subtle **lightening + border**, not shadow) and a shadow-based scale for
light mode.

**Dark mode** (`ink.950` canvas): elevation is communicated by surface
color step-up (`ink.900` → `ink.800` → `ink.700`) plus a 1px `color.border`
hairline, plus — only at the highest elevation (modals, popovers) — a soft
`signal.500` glow at 6% opacity, 40px blur, as an accent rather than a
literal drop shadow (since black shadows don't read on black).

**Light mode** (`ink.50` canvas): true shadows.

| Token | Value (light mode) | Use |
|---|---|---|
| `elevation.0` | none | Flush content, canvas-level elements |
| `elevation.1` | `0 1px 2px rgba(16,21,26,0.06)` | Cards at rest |
| `elevation.2` | `0 4px 12px rgba(16,21,26,0.08)` | Hovered cards, dropdown menus |
| `elevation.3` | `0 12px 32px rgba(16,21,26,0.12)` | Modals, popovers, the sticky mobile CTA bar |
| `elevation.4` | `0 24px 64px rgba(16,21,26,0.16)` | Rare — full-screen overlays only |

## Borders

- `border.width.default`: 1px
- `border.width.emphasis`: 1.5px (used only for focus/selected states,
  never for decoration)
- Border color always references `color.border` / `color.border-muted`
  semantic tokens — never a raw ink primitive in component code.

## Breakpoints

(Full responsive behavior in `10-responsive-mobile.md` — these are the raw
values.)

| Token | Min-width | Device target |
|---|---|---|
| `bp.xs` | 0 | Small phones |
| `bp.sm` | 480px | Large phones |
| `bp.md` | 768px | Tablets / small laptops |
| `bp.lg` | 1024px | Laptops |
| `bp.xl` | 1280px | Desktop |
| `bp.2xl` | 1536px | Large desktop |

## Z-index scale

| Token | Value | Use |
|---|---|---|
| `z.base` | 0 | Default flow |
| `z.raised` | 10 | Cards with hover-lift |
| `z.sticky-nav` | 100 | Primary navigation |
| `z.sticky-cta` | 110 | Mobile bottom CTA bar (sits above nav on scroll-down) |
| `z.dropdown` | 200 | Nav dropdowns, select menus |
| `z.overlay` | 300 | Modal backdrop |
| `z.modal` | 310 | Modal/dialog content |
| `z.toast` | 400 | Toast notifications, always topmost |

## Motion primitives

Full behavioral spec (what animates, when, choreography) is in
`06-motion-system.md`. Raw tokens:

| Token | Value | Use |
|---|---|---|
| `duration.instant` | 100ms | Button press, checkbox toggle |
| `duration.fast` | 160ms | Hover states, tooltip |
| `duration.base` | 240ms | Default transitions (accordion, tab switch) |
| `duration.moderate` | 360ms | Modal open/close, drawer slide |
| `duration.slow` | 560ms | Hero text resolve effect, page-level reveals |
| `easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default for most UI transitions |
| `easing.emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll reveals, hero entrance (expo-out — fast start, gentle settle) |
| `easing.in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit transitions |

All durations/easings must be wrapped so they resolve to `0`/`linear` under
`prefers-reduced-motion: reduce` — see `06-motion-system.md` for the
component-by-component reduced-motion fallback table.
