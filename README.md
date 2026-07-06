# PenCap Institute of Excellence — Marketing Site

The production website for PenCap Institute of Excellence, a cybersecurity
training institute in Chennai (EC-Council Accredited Training Center, CompTIA
Authorized Training Partner). Built to the design system specified in
[`docs/design`](./docs/design).

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens — see `app/globals.css`)
- **Framer Motion** for the motion system (scroll reveals, the hero "resolve"
  effect, count-up stats, the Cyber Range terminal loop)
- **React Hook Form + Zod** for every form, including the multi-step
  admissions funnel
- Hand-built UI primitives on **Radix UI** primitives (no shadcn CLI — the
  components in `components/ui` are authored directly against this project's
  design tokens)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                   Route segments (App Router)
  admissions/           Multi-step admissions funnel
  programs/[slug]/       Program detail pages
  ...
components/
  ui/                   Design-system primitives (button, card, dialog, ...)
  layout/               Header, mobile nav, footer, sticky mobile CTA
  motion/               Reveal, resolve-text, count-up, network-graph
  sections/             Shared marketing sections (FAQ, final CTA, ...)
  cards/                Program/faculty/testimonial cards, comparison table
  admissions/           The admissions funnel's steps and shell
  programs/, pricing/, outcomes/, enterprise/, about/, contact/
                        Page-specific components
lib/
  data/                 All site content (programs, faculty, testimonials,
                        outcomes data, FAQ, pricing) — no CMS, plain TS
  validations/          Zod schemas for every form
docs/design/            The design system spec this site is built from
```

## Content

All copy and data lives in `lib/data/*.ts` as typed TypeScript — there is no
CMS. To change a program, instructor, testimonial, or stat, edit the relevant
file in `lib/data`; every page that references it updates automatically.

## Build

```bash
npm run build
npm run start
```
