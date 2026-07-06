# 09 — Conversion Optimization Principles

These rules apply across every page in `07-page-specifications.md`. Where
a page-specific decision conflicts with a rule here, the rule here wins
unless the page spec explicitly states why it's an exception.

## The 3-second clarity test

Every page must pass this before shipping: can a first-time visitor,
looking only at the content above the fold, correctly answer *what is
this, who is it for, and what am I being asked to do*? If any answer
requires scrolling, the hero content is wrong, not the visitor's
attention span. This is why every hero in this system (`07`) pairs a
concrete H1 with an equally concrete subhead stating the literal offer —
never two abstract lines stacked on each other.

## CTA hierarchy (hard rule)

**Exactly one `primary`-styled CTA per viewport section.** Every other
actionable element in that section is `secondary`, `ghost`, or `link`
weight (see `05-component-system.md`). Two primary buttons in the same
view split attention and measurably reduce click-through to *both* — this
is the most common self-inflicted CRO mistake and the rule exists
specifically to prevent it during implementation.

**CTA verb must match funnel intent per audience:**
- Individual learner funnel → "Apply Now," "Start your application,"
  "Check your eligibility," "Try a free challenge."
- Enterprise funnel → "Talk to our team," "Book a call," "Download the
  enterprise overview." Never "Apply Now" — there is no application, and
  using consumer-funnel language on a B2B page reads as generic and
  undercuts the dedicated-account-team positioning.

## Social proof taxonomy — use the right kind in the right place

| Proof type | Where it belongs | Why |
|---|---|---|
| Hard numbers (placement %, salary lift) | Hero-adjacent, every page's opening third | Fastest-parsing, highest-credibility proof for a skeptical category |
| Named testimonials | Mid-page, after differentiation copy | Emotional/relatable proof once the visitor is already engaged |
| Logos (hiring partners, accreditation) | Trust strips near hero and footer | Peripheral-vision credibility — doesn't require reading |
| Methodology disclosure | Outcomes page, and footnoted from every stat tile site-wide | Converts skeptics specifically, not general visitors — see `01-brand-strategy.md` |
| Press/awards (if earned) | About page only | Lowest relevance to the individual applicant's actual decision — don't let it crowd out outcome data anywhere else |

**Never stack more than one proof type in the same component** — a
testimonial card with a logo wall crammed underneath it dilutes both.

## Urgency — real only

Scarcity/urgency elements (seat counts, cohort deadlines) must always
source from live enrollment data. This is a hard constraint, not a style
preference: fabricated urgency is (a) an ethical line the brand doesn't
cross per `01-brand-strategy.md`'s "proof not promises" positioning, and
(b) a serious repeat-visitor trust risk — a "6 seats left!" counter that
still says "6 seats left!" three weeks later is one of the fastest ways to
lose a premium brand's credibility with exactly the return visitors most
likely to convert.

## Risk reversal (the highest-leverage lever in this category)

Cost and time commitment are the two largest objections for career-changer
education. Address both explicitly and visibly, never buried in terms:
- **Free, no-signup-required first Cyber Range challenge** — lets a
  visitor experience real value before any ask at all.
- **Published refund/guarantee policy**, stated in plain language on the
  Pricing page and referenced in the FAQ — not just in a legal document.
- **Transparent, no-"contact us" pricing** everywhere tuition is
  mentioned.
- **Downloadable syllabus** (email-gated) on program pages as a
  low-commitment research path for people not ready to apply.

## Instrumentation (what must be measurable to prove this design is working)

Every funnel step (`08-admissions-funnel.md`) and every primary CTA needs
step-level conversion tracking, specifically:
- Funnel step-to-step completion rate (identify the exact step causing
  drop-off, not just overall funnel conversion).
- CTA click-through rate segmented by page and by CTA copy variant.
- Scroll depth on long pages (program detail, outcomes) to verify sections
  are actually being seen before assuming a section's copy is the problem.
- Cyber-Range-to-application conversion rate specifically, since it's
  designed as a distinct top-of-funnel path and needs its own funnel view,
  not lumped into overall traffic-to-application numbers.

## A/B testing roadmap (priority order)

1. Hero CTA pairing (Apply Now + free challenge vs. Apply Now alone) —
   tests the core dual-CTA hypothesis in `07-page-specifications.md` §1.
2. Eligibility-quiz-first vs. direct-to-application funnel entry — tests
   the foot-in-the-door premise underlying the whole funnel design.
3. Stat-tile placement (immediately post-hero vs. after differentiators).
4. Program card information order (outcome stat above vs. below skill
   tags).
5. Sticky mobile CTA bar copy/verb per page type.

## What we will not do for conversion

- No dark patterns: no confirm-shaming, no forced continuity, no
  artificial scarcity, no disguised ads, no pre-checked opt-ins. Consistent
  with the brand's "proof not promises" stance — a bootcamp brand that
  needs manipurative CRO tactics to convert is implicitly admitting the
  underlying offer can't convert on its own merits, which is the opposite
  of the trust story this entire system is built to tell.
- No auto-playing audio anywhere, ever.
- No modal within the first 5 seconds of a page load (email capture
  popups on entry are a fast way to undercut the "premium, editorial"
  positioning established in `01-brand-strategy.md`).
