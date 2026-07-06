# 10 — Responsive & Mobile-First Design

## Why mobile-first is non-negotiable here, specifically

Career-changer applicants disproportionately research and even begin
applications on mobile — during commutes, breaks, evenings on a phone
after a full-time job. Designing desktop-first and shrinking down (the
common failure mode) produces admissions funnels with tiny tap targets and
long forms that are hostile to exactly this behavior pattern. Every
component in `05-component-system.md` is specified mobile-first; desktop
layouts are the enhancement, not the baseline.

## Breakpoint strategy

Tokens defined in `02-design-tokens.md`. Behavior:

- **`<480px` (small phones):** single column everywhere, no exceptions.
  Nav is hamburger + sticky bottom CTA bar. Type scale uses the "mobile
  floor" values from `03-typography.md`.
- **`480–767px` (large phones):** same single-column structure; only
  change is more breathing room (padding steps up one notch) — never
  introduce a second column here, since two-up cards at this width are
  usually too cramped to read comfortably.
- **`768–1023px` (tablets):** 2-column grids for cards (program cards,
  faculty, testimonials), sidebar layouts (program detail tuition card)
  move below the main content rather than beside it — side-by-side
  sidebars need more than 768px of width to avoid squeezing both columns.
- **`≥1024px` (desktop):** full grid layouts (3–4 column card grids,
  8/4 sidebar splits), mega-menu nav dropdowns activate, parallax/hover
  states become relevant (hover has no mobile equivalent, so hover-only
  information must never be the *only* way to access that information —
  see tap-target rule below).

## Mobile navigation pattern

- **Top bar:** logo + hamburger only (utility-first, no crowded icon
  row). Tapping opens a **full-screen slide-in panel** (not a small
  dropdown) — full-screen because mobile nav on a marketing/funnel site
  needs room for the same mega-menu content (program list + outcome
  stats) that desktop gets in its dropdown; a cramped mobile menu that
  only shows link labels loses the outcome-stat trust signal entirely.
- **Sticky bottom CTA bar:** distinct from the top nav, appears once the
  user scrolls past the hero's own CTA, persists for the rest of the
  page, shows the page's single primary action. This exists because on
  mobile the hero CTA scrolls out of the thumb zone within one or two
  swipes — without a persistent bottom action, mobile conversion on long
  pages (program detail, outcomes) drops sharply purely from the CTA
  being physically unreachable without scrolling back up.
- The bottom CTA bar and the top nav are never visible with conflicting
  CTAs — the bottom bar's action always matches whatever the page's
  single primary CTA is (see `09-conversion-optimization.md`'s CTA
  hierarchy rule).

## Thumb-zone and tap-target rules

- Minimum tap target: **44×44px** for every interactive element,
  including icon-only buttons, accordion headers, and tag/badge filters —
  this is an accessibility floor (WCAG 2.5.5) as much as a UX one.
- Primary actions on mobile sit in the **bottom two-thirds** of the
  screen where possible (natural thumb reach on one-handed phone use) —
  this is why the sticky CTA bar is bottom-anchored rather than
  top-anchored, and why funnel "Continue" buttons sit at the bottom of
  each step screen, not the top.
- No hover-dependent information: anything revealed on desktop hover
  (e.g., a tooltip, a card's secondary detail) must have a tap-triggered
  equivalent on mobile — never information that's simply unavailable
  below the tablet breakpoint.

## Forms and the funnel on mobile

- One field group per screen (already the desktop pattern in
  `08-admissions-funnel.md`) matters even more on mobile — it's the
  difference between a form that fits one screen and one requiring
  scroll-and-lose-context.
- Native input types throughout (email, tel, date) to trigger the correct
  mobile keyboard — a small detail with an outsized effect on mobile form
  completion time.
- File upload (resume) must support direct camera/photo-library access on
  mobile, not just a desktop-style file browser.
- Autosave (see component spec) matters most on mobile, where
  interruption (a call, switching apps) mid-application is the norm, not
  the exception.

## Art direction per breakpoint

- Hero background motif (isometric network graph) simplifies on mobile —
  fewer nodes/edges, lower opacity — both for legibility behind headline
  text on a small viewport and for render performance on lower-end
  devices.
- Faculty/testimonial photography crops to portrait (4:5) on mobile
  single-column layouts rather than the 1:1 desktop crop, to use vertical
  space more naturally in a single-column feed.
- The Cyber Range terminal demo scales its font size up (not just the
  container) on mobile rather than shrinking to fit — a terminal demo
  that's technically visible but unreadable defeats its purpose as a
  trust/differentiation element.

## Performance budget (mobile is the binding constraint)

- **LCP < 2.5s, CLS < 0.1, INP < 200ms** on a throttled mobile profile,
  not just desktop — these targets are set for the median mobile
  applicant's connection, not the engineering team's office wifi.
- Hero media (background motif, any video) must not block LCP — text
  content renders first, decorative motion layers in after.
- The Cyber Range terminal loop and any other auto-playing content loads
  lazily and only initializes once scrolled into view, both for
  performance and per the motion system's "nothing animates unseen" rule
  in `06-motion-system.md`.
- Mono/display webfonts load with `font-display: swap` and are subset to
  required character sets — a flash of unstyled text is an acceptable,
  deliberate trade against blocking render on a slow mobile connection.

## Reduced motion and accessibility on mobile

- All motion fallbacks specified in `06-motion-system.md` apply
  identically on mobile — mobile users are not assumed to prefer more or
  less motion by default than desktop users; the `prefers-reduced-motion`
  media query, not device type, is the only signal used.
- Text reflows and remains legible up to 200% browser zoom on mobile
  without horizontal scrolling or clipped content, per WCAG 1.4.10.
