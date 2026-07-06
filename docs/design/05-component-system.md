# 05 — Component System

Every component below lists: **anatomy**, **variants/states**, and **why it
exists in this form**. Build each once as a shared primitive; page specs in
`07-page-specifications.md` only ever compose these.

## Navigation

### Primary nav (sticky)
- **Anatomy:** logo (left) · nav links (center-left: Programs, Cyber Range,
  Outcomes, Enterprise, Resources) · utility cluster (right: Log in ·
  primary CTA button "Apply Now").
- **Behavior:** transparent-over-hero on page load (blends with hero
  background), transitions to solid `color.surface` + `elevation.1` /
  bottom hairline once scrolled past the hero (~80px) — `duration.fast`,
  `easing.standard`. On scroll-down past 200px, nav height compresses
  ~20% (logo/link size step down one notch) to reclaim vertical space
  without disappearing — never hide the nav entirely on desktop.
- **"Apply Now" is always the single button in the nav** — no secondary nav
  button competing with it. "Log in" is a text link, not a button, to keep
  visual weight on the one conversion action.
- **Why it exists:** the CTA must be reachable from anywhere on the site
  at all times — the nav is the site's conversion safety net for users who
  scroll past every in-page CTA without clicking.
- **Dropdown (Programs):** on hover/focus (desktop) or tap (mobile),
  reveals a 2-column mega-panel: left column lists programs by name with
  one-line outcome stat each ("Offensive Security Program — 89% placed"),
  right column is a single promo card (Cyber Range teaser or current
  cohort deadline). This turns a navigation dropdown into a secondary
  conversion surface instead of a plain link list.

### Mobile nav
See `10-responsive-mobile.md` for full behavior — summary: hamburger menu
opens a full-screen slide-in panel (not a small dropdown), plus a
persistent bottom-anchored CTA bar that is *not* part of the top nav.

### Footer
- **Anatomy:** 4-column sitemap (Programs / Company / Resources / Legal) ·
  accreditation & partner logo row · newsletter signup (single email field
  + submit, framed as "Get outcomes reports and cohort dates") · social
  links · legal line (copyright, privacy, terms) · language/region if
  applicable.
- **Why the newsletter field sits in the footer and nowhere else:** it's
  the lowest-commitment conversion available, positioned as the "not
  ready yet" exit path for users who've scrolled the entire page without
  converting — every page should have exactly one such low-friction
  fallback CTA.

## Buttons

- **Variants:** `primary` (solid neutral, see `04-color-system.md`
  rationale), `secondary` (1px `color.border` outline, transparent fill),
  `ghost` (no border, text + hover background tint), `link` (inline text,
  `color.accent`, underlined).
- **Sizes:** `sm` (36px height), `md` (44px height — default, meets mobile
  tap-target minimum), `lg` (52px height — hero/funnel CTAs only).
- **States:** default / hover (subtle lift: `translateY(-1px)` +
  `elevation.2`, `duration.fast`) / active-press (`translateY(0)`, opacity
  0.92, `duration.instant`) / focus-visible (2px `color.focus-ring` ring,
  2px offset) / disabled (opacity 0.4, no pointer events) / loading
  (label replaced by a small inline spinner, button width locked to
  prevent layout shift).
- **Icon usage:** trailing arrow icon (→) permitted only on primary CTAs
  that advance the funnel (Apply Now, Continue, Start Free Challenge) —
  it's a directional affordance, not decoration, so it's earned only by
  buttons that actually move the user forward.
- **Rule:** exactly one `primary` button visible per viewport section.
  Every other action in that section is `secondary`, `ghost`, or `link`.
  This is enforced in `09-conversion-optimization.md`'s CTA hierarchy rule.

## Badges & tags

- **Status badge** (pill, `radius.full`, `text.xs`, uppercase-free):
  used for cohort status ("Enrolling now," "Waitlist"), difficulty
  (`risk.*` colors + icon, never color alone), certification names.
- **Skill tag** (rounded-rect, `radius.sm`): used in curriculum module
  lists and program "skills you'll gain" grids — neutral `ink` fill, not
  colored, so a wall of 20 tags doesn't turn into visual noise.
- **Eyebrow label:** small pill or plain uppercase-letterspaced text in
  `color.accent`, sits directly above a section H2 (e.g. "ADMISSIONS" above
  "How the funnel works"). One per section max.

## Cards

### Program card
- **Anatomy:** category eyebrow · program name (`display.sm`) · one-line
  outcome stat (bold, mono numerals) · 3–4 skill tags · duration + format
  (self-paced/cohort) · price or "from $X/mo" · `secondary` button "View
  program."
- **States:** rest (`elevation.1`) → hover (`elevation.2`, border shifts to
  `color.accent` at 40% opacity, `duration.fast`) — the whole card is a
  click target, not just the button.
- **Why the outcome stat sits above the skill tags, not below:** eye-tracking
  on card grids reads top-to-bottom in under a second — the single most
  persuasive fact (a number) must be seen even by users who don't read the
  whole card.

### Faculty / instructor card
- **Anatomy:** photo (real portrait, 1:1, no filter/treatment beyond
  consistent color grading across all faculty photos) · name · current
  title · one credibility line ("Former lead, [X] red team · DEF CON 31
  speaker") · optional CVE/publication count as a small stat.
- **Why a single credibility line, not a bio paragraph:** on a grid of 6–8
  faculty, a paragraph each becomes unscannable; one sharp credential does
  more trust work than three sentences of soft bio copy.

### Testimonial card
- **Anatomy:** photo · name · "[Program] grad, now [current role] at
  [company]" · quote (`text.lg`) · optional outcome stat chip ("Placed in
  6 weeks"). Video testimonials use the same card frame with a play
  affordance over the photo.
- **Rule:** every testimonial must be attributable (real name, real
  current employer, linkable LinkedIn where permitted) — anonymous or
  first-name-only testimonials are excluded from this system entirely;
  anonymized "social proof" is a credibility leak in a category this
  skeptical.

### Stat tile
- **Anatomy:** large mono numeral (`display.md`–`display.lg` sized but set
  in `mono`) with animated count-up on scroll-into-view · label below in
  `text.sm`/`color.text-secondary` · optional footnote link ("See
  methodology") in `text.xs`.
- **Why every stat tile gets a methodology footnote:** unverified stats
  are the top skepticism trigger for this audience; a visible link to
  "how we calculated this" converts skeptics precisely because most
  competitors never offer it. See `08`/`09` for the outcomes-transparency
  argument in full.

### Cyber Range preview card (signature component)
- **Anatomy:** a bounded terminal-style frame (the *only* place true
  terminal chrome appears in the whole system) showing a looping,
  auto-playing (silent, captioned) demo of a challenge being solved —
  command input types in, output resolves — inside a card with a headline
  ("Practice before you enroll"), a category tag ("Web exploitation ·
  Beginner"), and a `primary`-weight button "Start free challenge."
- **Why it's allowed to break the "no terminal aesthetic" rule:** this is
  the one place the visual metaphor is literally true — it's an actual
  practice tool, not decoration. Scarcity of the terminal motif elsewhere
  is what makes it land as substance here.

## Forms

- **Text input:** label above (never placeholder-as-label), `text.sm`
  helper text below when needed, `radius.sm`, 1px `color.border`, focus →
  `color.focus-ring` + subtle `signal.a12` background tint. Error state:
  `risk.critical` border + icon + inline message below (never color-only).
- **Select / combobox, checkbox, radio, file upload (resume):** consistent
  44px min tap/click target, consistent focus ring treatment across all
  input types.
- **Multi-step form (funnel) shell:** single question/group per screen
  (Typeform-style progressive disclosure) rather than one long scroll —
  full rationale and step list in `08-admissions-funnel.md`. Shell includes
  a persistent top progress bar with **labeled** steps ("1. Eligibility
  → 2. Profile → 3. Assessment → 4. Interview"), not just a percentage —
  labeled steps let users judge remaining effort, which measurably reduces
  abandonment versus an unlabeled bar.
- **Autosave indicator:** small, unobtrusive "Saved" text-fade near the
  continue button after each step — removes the fear of losing progress,
  a top cause of funnel abandonment in long applications.

## Structural / content components

- **Accordion (FAQ):** single-open-at-a-time by default on mobile (avoids
  runaway scroll), multi-open permitted on desktop. Chevron rotates
  180°, `duration.base`, content height-animates rather than opacity-cuts.
- **Tabs:** used for program curriculum ("Curriculum / Outcomes / Faculty /
  Tuition" within a program detail page) — underline-indicator style,
  not boxed/pill tabs, to match the editorial, low-chrome aesthetic.
- **Timeline / curriculum roadmap:** vertical on mobile, horizontal
  stepped-line on desktop, each module a node with week range, title,
  1-line description, and a skill-tag cluster — this is how curriculum
  depth is proven without a wall of paragraph text.
- **Comparison table:** used on Pricing and Outcomes pages ("PenCap vs.
  self-taught vs. generic bootcamp") — sticky first column on mobile
  horizontal scroll, checkmark/x icons paired with text (never icon-only).
- **Modal/dialog:** used sparingly — cohort deadline reminder, video
  testimonial lightbox, exit-intent save-progress prompt. Always
  dismissible via Esc, backdrop click, and an explicit close control;
  focus-trapped; returns focus to the trigger element on close.
- **Toast:** transient confirmation only ("Application saved," "Added to
  waitlist") — never used for errors that require user action (those are
  inline).

## Sticky mobile CTA bar

- **Anatomy:** fixed-bottom bar, `elevation.3`, containing the page's one
  primary action (e.g., "Apply Now" on program pages, "Book a call" on
  Enterprise, "Start free challenge" on Cyber Range) — appears after the
  user scrolls past the hero CTA, persists through the rest of the page.
- **Why:** on mobile, the in-page CTA scrolls out of the thumb zone almost
  immediately; without a persistent bar, mobile conversion drops sharply
  on long pages. Full rationale in `10-responsive-mobile.md`.
