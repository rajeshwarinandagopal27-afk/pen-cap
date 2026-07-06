# 08 — Admissions Funnel

## Design premise

The funnel's biggest enemy is not "not wanting to enroll" — it's the gap
between mild interest and the perceived weight of a full application. Every
design decision here exists to shrink that gap by breaking one intimidating
form into a sequence of small, low-stakes commitments (the foot-in-the-door
principle), each of which increases investment before the next, larger ask.

## The full sequence

### Step 0 — Eligibility check (the true top-of-funnel entry point)
A 2-minute, 5–6 question quiz, not a form: current experience level, career
goal, time availability, target start date. No account required.
**Ends immediately** with a personalized result screen: recommended
program, an honest fit signal (including "you may be a stronger fit for
[other program]" when true), and a single CTA to continue into the real
application.

*Why this step exists:* it's the lowest-friction possible entry — no
email, no commitment — and it does real work for the user (a
recommendation), not just for the business. The IKEA effect applies: once
someone has answered 6 questions about themselves, continuing to an
application feels like finishing something rather than starting something.
This step also **pre-qualifies** traffic, so the admissions team spends
less time on poor-fit applicants later.

### Step 1 — Account creation
Email + magic link (no password) or SSO (Google). Two fields, nothing
more. Purpose is solely to persist progress — not a data-collection
opportunity.

*Why minimal:* every additional field here is pure abandonment risk before
the user has any investment in the account existing.

### Step 2 — Profile & application (progressive, one group per screen)
Broken into screens, each with 2–4 related fields, in this order:
1. Basic info (name, location, target cohort).
2. Background (current role/education — multiple choice + optional
   free text, not a required essay).
3. Motivation (one short prompt, optional voice/video response as an
   alternative to text — some applicants communicate motivation far better
   spoken than written, and offering the choice increases completion).
4. Resume/LinkedIn upload (optional at this stage, not blocking).

Persistent elements on every screen: labeled progress bar (see component
spec), autosave indicator, a back button that never loses data.

*Why one group per screen instead of a single long form:* long forms
create a visible, discouraging scroll length before the user starts;
short sequential screens make the *next* step always feel small, which is
what keeps completion rates up in every tested long-form-vs-stepped
comparison in this category.

### Step 3 — Skills assessment (adaptive)
A short technical baseline (logic/aptitude for true beginners; a light
technical challenge — pulled from the Cyber Range — for those with
some background). Enterprise-sponsored applicants can skip this step
(their employer relationship is the qualifying signal instead).

*Why adaptive rather than one fixed test:* a single test calibrated for
experienced applicants will scare off qualified beginners, and one
calibrated for beginners insults experienced applicants — branching by
the Step 2 background answer avoids both failure modes.

### Step 4 — Interview scheduling
Instant calendar booking (real-time availability, no "we'll be in touch"
email round-trip). Confirmation screen sets expectations for the call
(duration, what's covered, who they'll speak with, by name/photo where
possible — a named human lowers anxiety about the interview).

### Step 5 — Decision & offer
Decision delivered with a short personalized note or video from
admissions (not just a form-letter email) — this is a moment that
strongly affects both acceptance-to-enrollment conversion and how
accepted-but-hesitant applicants feel about the brand. Offer includes a
clear, real deposit deadline and exactly what happens at each next step.

### Step 6 — Enrollment & payment/financing selection
Financing options presented identically to the Pricing page (see
`07-page-specifications.md` #9) — consistency here matters; a funnel that
surfaces different numbers or options than the marketing page erodes
trust at the worst possible moment.

### Step 7 — Onboarding welcome
Immediate post-enrollment: a welcome sequence (what happens before day 1,
community/cohort introduction, calendar invite for orientation). This is
a retention/buyer's-remorse mitigation step, not a marketing step — cheap
to build, high leverage on early cancellations.

## Drop-off mitigation (applies across steps 1–6)

- **Exit-intent capture:** if a user attempts to leave mid-funnel (desktop
  exit-intent, or a mobile "are you sure" on back-navigation), show a
  lightweight modal offering to email a saved link to resume — never a
  hard block, never a discount-bait dark pattern.
- **Abandoned-application email sequence:** triggered after 24h/72h/7d of
  inactivity mid-funnel, each resuming at the exact step they left, with
  a specific reason to return (e.g., cohort deadline approaching) rather
  than a generic "come back!" nudge.
- **Cross-device persistence:** account creation in Step 1 exists
  specifically so progress isn't lost between "started on phone during
  commute, finished on laptop at home" — a very common real pattern for
  this audience.
- **Social proof embedded in the funnel itself**, not just on marketing
  pages: a small sidebar/footer note such as "78% of applicants who
  complete the assessment go on to enroll" — reduces anxiety about
  whether the effort will pay off, placed right before the step it
  references (assessment step) for maximum relevance.
- **Live chat availability** during the application and assessment steps
  specifically (not site-wide) — this is where real-time question-answering
  has the highest conversion leverage per contact.

## What this funnel deliberately does NOT do

- No fake countdown timers or manufactured scarcity — seat counts and
  deadlines shown anywhere in the funnel must reflect real data, full
  stop (see brand rationale in `01-brand-strategy.md` and CRO ethics in
  `09-conversion-optimization.md`).
- No forced account creation before the eligibility check — that check is
  the trust-building entry point and must stay frictionless.
- No dark-pattern "confirm shaming" on exit modals (e.g., "No thanks, I
  don't want a better career") — this undercuts the entire premium,
  confidence-based brand voice for a marginal recovery gain.
