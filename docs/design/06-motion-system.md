# 06 — Motion System

## Principles

1. **Motion explains, it doesn't decorate.** Every animation either
   reveals hierarchy (staggered entrance shows reading order), confirms an
   action (button press feedback), or shows continuity (a card expanding
   into a detail view). If an animation can be removed without losing
   information, remove it.
2. **Fast in, gentle out.** UI feedback (hover, press, toggle) uses
   `easing.standard` and sits under 240ms — it must never feel laggy.
   Content reveals (scroll-ins, hero entrance) use `easing.emphasized`
   (expo-out) — quick initial motion that settles gently, which reads as
   confident rather than bouncy/playful.
3. **Restraint is the premium signal.** Apple/Stripe/Linear-tier sites
   animate less than mid-tier sites, not more — every element does not
   need to fly in. Default to a single fade+8px-rise on scroll-entry for
   most content; reserve bespoke motion for the 2–3 signature moments
   below.
4. **Respect `prefers-reduced-motion` everywhere, no exceptions.** All
   durations collapse to `0`–`40ms` opacity-only crossfades; parallax,
   auto-playing loops, and the hero resolve effect fall back to their
   static end-state immediately. This is a hard requirement, not a nice-to-have.

## Signature moments (the only "bespoke" animations in the system)

### 1. Hero headline "resolve" effect
On the homepage hero only, the H1 characters briefly cycle through 2–3
nearby glyphs/characters before settling on the real word, left to right,
staggered ~15ms per character, total resolve time ~560ms
(`duration.slow`, `easing.emphasized`). This is the one place we nod to
the "decryption" metaphor of the category — done typographically and
subtly (glyph substitution, not a full glitch/RGB-split effect) so it
reads as refined, not gimmicky. Fires once on first load only (not on
every scroll-back-to-top). **Reduced motion:** headline renders in final
state immediately, no cycling.

### 2. Stat counters (count-up on scroll-into-view)
Numerals animate from 0 (or a lower anchor) to the final value over
~900ms once the tile crosses 60% into viewport, eased with
`easing.emphasized`, using `mono` tabular figures so digit width never
shifts the layout. Fires once per session per tile (not on every
scroll-past). **Reduced motion:** value renders final immediately.

### 3. Cyber Range terminal loop
The only continuous/looping animation permitted on the site. A scripted,
captioned command-in/output-out sequence, ~6–8s loop, pause-on-hover so
users can read a frozen frame, and pauses entirely when scrolled out of
view (performance + reduced-motion both require this). **Reduced
motion:** loop replaced by a static "after" frame with a manual "▶ Watch
demo" control.

## Scroll choreography (applies to every marketing page)

- Default section entrance: content fades in + rises 8px, `duration.base`,
  `easing.emphasized`, triggered at 20% into viewport, **staggered by
  60ms** across siblings in a grid (card 1, then card 2, etc.) so grids
  feel sequenced rather than popping in as a block.
- Section dividers (the isometric network-graph motif, see
  `01-brand-strategy.md`) drift at a subtle parallax rate (~0.15x scroll
  speed) — background only, never applied to foreground text/CTAs, and
  disabled entirely under reduced motion.
- Sticky elements (nav, mobile CTA bar, program-detail tuition sidebar)
  transition their own state changes (transparent→solid, hide→show) with
  `duration.fast`/`easing.standard` — these are functional transitions, not
  scroll-reveals, and should feel closer to instant.

## Per-component animation reference

| Component | Trigger | Motion | Duration/Easing |
|---|---|---|---|
| Button | hover | lift 1px + elevation step | `duration.fast` / `standard` |
| Button | press | scale/opacity feedback | `duration.instant` / `standard` |
| Card | hover | border→accent, elevation step | `duration.fast` / `standard` |
| Accordion | expand/collapse | height auto-animate | `duration.base` / `standard` |
| Tabs | switch | underline slides to new tab, content crossfades | `duration.base` / `standard` |
| Modal | open | backdrop fade + panel scale 0.98→1 + rise 8px | `duration.moderate` / `emphasized` |
| Modal | close | reverse, faster | `duration.fast` / `in` |
| Mobile nav drawer | open/close | slide from edge, backdrop fade | `duration.moderate` / `emphasized` / `in` |
| Toast | enter/exit | slide up + fade in; fade out only on exit | `duration.base` / `emphasized` |
| Funnel step transition | next/back | current step slides out, next slides in (direction-aware) | `duration.base` / `standard` |
| Sticky mobile CTA bar | appear | slide up from bottom | `duration.fast` / `emphasized` |

## Performance guardrails

- Animate only `transform` and `opacity` wherever possible — never
  `width`/`height`/`top`/`left` for anything triggered on scroll (layout
  thrash kills the "premium feel" faster than any visual misstep).
- The Cyber Range loop and any hero background motif must be paused via
  `IntersectionObserver` when off-screen — no animation runs unseen.
- Cap simultaneous scroll-triggered animations per viewport — if a grid
  has more than ~8 staggered items, cut the stagger and fade the group in
  as one unit instead; excessive stagger on long grids reads as slow, not
  premium.
