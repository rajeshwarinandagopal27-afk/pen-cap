# 07 — Page Specifications

Every section below states **its job, why it's positioned where it is, and
what breaks if it's cut.** All sections compose the primitives from
`05-component-system.md`. Mobile stacking behavior follows the general
rules in `10-responsive-mobile.md` unless a page-specific override is
noted.

---

## 1. Homepage

**Page goal:** get a qualified individual learner to either start the
free Cyber Range challenge (low-friction) or begin the eligibility check
(the funnel's true entry point). Everything above the fold must answer
"what is this, is it credible, is it for me" within ~3 seconds.

1. **Sticky nav** — see `05-component-system.md`. Always present.
2. **Hero** — eyebrow ("CYBERSECURITY EDUCATION, VERIFIED") · H1 using the
   resolve-effect (`display.2xl`) — e.g. *"Trained by operators. Proven by
   outcomes."* · subhead (`text.xl`, one sentence, states the concrete
   offer: cohort-based offensive security training with a published
   placement rate) · dual CTA: `primary` "Apply Now" + `secondary`
   "Try a free challenge" (routes to Cyber Range demo, not the funnel —
   this is the low-commitment escape valve for hero-stage skeptics) ·
   below the fold-line, a slim trust strip: 4–6 hiring-partner logos,
   grayscale, no "as seen on" framing (framing implies press mentions,
   which these aren't — be precise). Background: the isometric
   network-graph motif at low opacity, subtle parallax.
   *Why dual CTA:* a single "Apply Now" forces every visitor into a
   high-commitment action before they trust you; the free-challenge path
   captures the large segment that's curious but not ready to apply,
   feeding them into the Cyber Range funnel instead of bouncing.
3. **Proof strip (stat tiles)** — 3–4 tiles: placement rate, median
   time-to-placement, average salary lift, alumni count. Each with a
   methodology footnote link. *Position rationale:* this sits immediately
   after the hero, before any "why us" copy, because in this category
   numbers must precede narrative — skeptical visitors won't read
   qualitative claims until they've seen the brand is willing to publish
   numbers.
4. **"Why PenCap" differentiators** — 4-column (stacks to 1 on mobile):
   Cyber Range, Practitioner Faculty, Audited Outcomes, Small Cohorts —
   each a short claim + the one number that proves it (mentor ratio,
   faculty CVE count, etc.), not adjectives. *Cut test:* if this became
   generic ("expert instructors, hands-on learning, career support") it
   would be interchangeable with any bootcamp — the numbers are what
   make it non-generic, so no differentiator ships without one.
5. **Programs preview** — 3 featured program cards (see component spec) +
   "View all programs →" link. *Why only 3, not all programs:* homepage is
   a decision funnel, not a catalog; forcing a choice of 3 keeps cognitive
   load low and pushes the "I want to compare everything" user to a
   dedicated listing page built for comparison.
6. **Cyber Range interactive teaser** — the signature card component,
   full-width feature treatment, mid-page placement. *Why mid-page, not
   just in the hero:* re-engages users who scrolled past the hero CTA
   without converting — a second, different-shaped conversion opportunity
   rather than repeating "Apply Now" verbatim.
7. **Outcomes proof: testimonials** — 3-card carousel (or grid on
   desktop), attributable per the component rule, at least one video.
   Paired with a single supporting stat ("Average salary increase: 41%").
8. **Faculty spotlight** — 4–6 faculty cards in a row/grid, "Meet the full
   faculty →" link to About page.
9. **How admissions works** — 4-step visual summary (Apply → Assess →
   Interview → Enroll), each step one line, linking to the full funnel
   entry (`primary` CTA "Start your application"). *Why this exists on the
   homepage at all, not just on the Admissions page:* uncertainty about
   process length/effort is a major hidden objection — showing the whole
   path up front, before asking for the first click, measurably reduces
   the "what am I getting into" hesitation.
10. **Enterprise teaser band** — visually distinct (different background
    tone), single line + "Training your security team? Talk to us →"
    (routes to Enterprise page, never mixes with the individual-learner
    CTA). Kept to one compact band — enterprise gets its full pitch on its
    own page.
11. **FAQ accordion** — 6–8 objection-handling questions (cost, time
    commitment, prerequisites, job guarantee/refund policy, financing,
    "what if I don't get placed"). *Why FAQ sits this late, not right
    after hero:* by this point the visitor has seen proof and differentiation;
    FAQ here resolves final objections right before the last CTA rather
    than front-loading doubt before trust is established.
12. **Final CTA band** — full-width, high-contrast (inverted surface
    color), restates the core promise in one line, `primary` "Apply Now,"
    plus real, current urgency ("Fall cohort starts Sept 14 — 12 of 40
    seats remaining") sourced from live data, never a fake/static
    countdown.
13. **Footer** — see component spec.

---

## 2. Programs listing page

**Page goal:** let a visitor who wants to compare options self-select the
right program without needing to talk to anyone.

- Header: H1 + one-line framing, no hero imagery needed (this is a
  utility page, not a persuasion page — hero real estate is spent on
  filtering, not brand storytelling).
- **Filter/sort bar:** by format (cohort/self-paced), experience level,
  duration, outcome focus (offensive/defensive/GRC). Sticky on desktop
  scroll, collapses to a "Filters" sheet trigger on mobile.
- **Program card grid** (3-col desktop / 1-col mobile), same card as
  homepage but the full catalog.
- **Comparison table toggle:** "Compare programs" switches the grid to
  the comparison-table component (curriculum length, price, format,
  outcome stat side by side) — this view exists because career-changers
  evaluating multiple programs behave like enterprise software buyers:
  they want a spec-sheet comparison, not more cards.
- Closing: FAQ + CTA band (shared partial with homepage sections 11–12).

---

## 3. Program detail page

**Page goal:** convert a visitor who's already interested in *this
specific* program — the highest-intent page on the site besides the
funnel itself.

- **Hero:** program name (`display.xl`) · one-line outcome stat specific
  to *this* program · format/duration/next cohort date · `primary` "Apply
  to this program" + `secondary` "Download syllabus" (email-gated,
  feeds a nurture sequence for not-yet-ready visitors).
- **Sticky sidebar (desktop, 4-col) / summary bar (mobile, becomes the
  sticky bottom CTA bar):** tuition, financing options link, next cohort
  date, seats remaining, apply button — persists as the user reads the
  long-form content below, since program pages are long and the CTA must
  never be more than one scroll away.
- **Tabs:** Curriculum (timeline component) / Outcomes (program-specific
  stats + testimonials) / Faculty (instructors teaching *this* program) /
  Tuition & Financing.
- **"Is this program right for you" checklist:** a short self-assessment
  list (prerequisites, time commitment, ideal background) presented
  plainly, including honest disqualifiers ("not ideal if you want purely
  defensive/GRC work — see [other program]"). *Why include disqualifiers:*
  counterintuitively increases trust and conversion quality — a page that
  only ever says "yes, this is for you" reads as a sales page; naming who
  it's *not* for makes every other claim more credible, and reduces costly
  mismatched applications downstream in the funnel.
- **Program-specific testimonials + a compact comparison** ("vs.
  self-study," "vs. a generic bootcamp").
- **FAQ (program-specific)** + final CTA band.

---

## 4. Admissions / Apply funnel

Full specification in `08-admissions-funnel.md` — this page is the funnel
shell itself (progress bar, one-step-per-screen form, autosave). No
marketing sections here: once a user is in the funnel, the job is to
remove friction, not to keep persuading.

---

## 5. Outcomes / Career results page

**Page goal:** be the single most-linked, most-trusted page on the site —
the destination for "prove it" traffic (shared links, comparison-shopping
visitors, skeptical Reddit/forum readers).

- **Header:** H1 ("Our outcomes, published in full") + **methodology
  disclosure module** placed prominently near the top, not buried in a
  footnote — how placement is defined (e.g., "full-time or contract role
  in security within 180 days of graduating, self-reported and
  spot-audited by [third party] annually"), sample size, and what's
  excluded. *Why methodology goes near the top on this page specifically:*
  this page exists entirely to defeat the "bootcamps lie about stats"
  objection — burying the methodology would defeat the page's purpose.
- **Interactive stat dashboard:** filterable by program/cohort/year —
  placement rate, time-to-placement distribution (not just an average —
  show the spread), salary before/after, employer-type breakdown. Charts
  per the data-viz palette in `04-color-system.md`.
- **Employer logo wall** — companies that have hired alumni, larger and
  more complete than the homepage trust strip.
- **Alumni story grid** — filterable by background ("career changers,"
  "military transition," "self-taught") so visitors can find someone with
  a similar starting point — relatability drives conversion more than
  volume of testimonials.
- **CTA band** — "See if you qualify" → funnel entry.

---

## 6. About / Faculty page

**Page goal:** carry the "practitioner faculty" differentiator in full
depth for visitors doing deeper diligence before applying.

- Institute origin/mission short-form narrative (kept brief — this is a
  credibility page, not a storytelling page).
- **Full faculty grid** — every instructor, full credibility line each
  plus an expandable bio (accordion or link to a full profile) with real
  credentials: CVEs, publications, conference talks, prior employers.
- **Accreditation / partner logos**, advisory board if applicable.
- Optional: leadership team, physical campus info if relevant.

---

## 7. Enterprise / Corporate training page

**Page goal:** a completely separate funnel with a different psychology —
B2B buyers want ROI framing, risk mitigation, and a human contact point,
not a self-serve "Apply Now."

- **Hero:** different register — "Close your team's offensive security
  skills gap" — `primary` CTA is **"Talk to our team"** (opens a
  scheduling widget), never "Apply Now."
- **ROI framing:** case studies with named client outcomes where
  permitted (breach reduction, audit pass rates, retention improvement),
  or anonymized-industry case studies if client NDAs require it (the one
  place anonymization is acceptable, because the *company* — not an
  individual learner — is the trust subject).
- **Custom cohort / on-site options**, integration with existing L&D
  systems, compliance-mapping (e.g., alignment to NIST/ISO training
  requirements) — the content B2B security buyers actually search for.
- **Logos of enterprise clients**, a named enterprise contact/sales
  lead (not a generic contact form alone) — B2B buyers convert better
  when they can see who they'd be working with.
- **CTA band:** scheduling widget again, plus a secondary "Download the
  enterprise overview" (gated PDF) for buyers still in research mode.

---

## 8. Cyber Range (product) page

**Page goal:** function as a lightweight product marketing page for the
practice platform itself — the strongest top-of-funnel acquisition lever
(shareable, low-friction, demonstrates value before any ask).

- **Hero:** live/looping demo (the signature terminal component, larger
  treatment than the homepage teaser) · `primary` "Start free challenge —
  no signup required" (removing the signup wall from the *first* challenge
  is a deliberate friction-removal decision; require account creation only
  to save progress past challenge one).
- **Challenge categories grid** (web exploitation, network, cloud, social
  engineering simulations, etc.) each with difficulty tag (`risk.*`
  component) and challenge count.
- **Gamification elements:** leaderboard, badges/streaks — used tastefully,
  small module, not the page's dominant visual language (gamification
  chrome everywhere would undercut the premium positioning).
- **Bridge to enrollment:** "Solved 3 challenges? You're ready for
  [Program] →" — a contextual, earned upsell rather than a generic CTA,
  which converts markedly better than a repeated static banner.

---

## 9. Pricing & financing page

**Page goal:** remove cost-related funnel abandonment by being radically
transparent before the applicant is emotionally invested in an
application, not after.

- **Transparent tuition table** per program, no "contact us for pricing"
  anywhere in this system — hidden pricing is a trust-destroying pattern
  in a category already fighting a credibility deficit.
- **Financing options** presented as neutral options, not upsells: pay in
  full (discount incentive), installment plan, income-share agreement (if
  offered) with a plain-language explainer of how ISAs work and their
  trade-offs (again: naming trade-offs builds trust), employer sponsorship
  path (routes to a simple "get a sponsorship letter template" tool).
- **Refund / guarantee policy**, stated in plain language, prominently —
  this is one of the highest-leverage trust elements on the entire site
  and should never be a legal-page-only disclosure.
- **Comparison table** vs. self-study and generic bootcamps (cost,
  outcome data if available, support level).
- CTA: "Check what you'd pay" (a 2-field estimator: program + financing
  preference) rather than a bare "Apply Now" — pricing-stage visitors
  want a calculation, not a generic push.

---

## 10. Contact / Book a call page

**Page goal:** catch the two audiences who need a human before they'll
convert — enterprise buyers and undecided individual prospects — without
looking like a generic "contact us" dead end.

- Two clearly separated paths at the top: **"I want to talk about
  enrolling"** vs. **"I'm exploring team/enterprise training"** — routes to
  different scheduling flows/forms so the visitor never has to guess
  which queue they're in.
- Scheduling widget embed (instant booking beats "we'll email you back" —
  every added step here is a drop-off point).
- Direct chat/email fallback, office info if physical locations exist.
