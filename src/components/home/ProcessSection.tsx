// Process (S3) — "Brief in. Business-ready output out."
// Figma nodes 167:2390–167:2413 + Sankey 184:5214
// Background: #181818

import Link from 'next/link'

const STEPS = [
  {
    num: '01',
    title: 'Brief',
    desc: 'Describe what you need. The guided brief wizard asks the right questions — audience, purpose, format, deadline, brand context.',
    tag: 'INPUT',
    // Steps 01, 02, 04 have subtle border; step 03 has lime border
    highlight: false,
  },
  {
    num: '02',
    title: 'Route and draft',
    desc: 'AI processes your brief against your brand context. A subject matter expert — matched by specialism — reviews, corrects, and approves every section.',
    tag: 'AI DRAFT',
    highlight: false,
  },
  {
    num: '03',
    title: 'Expert review',
    desc: 'A subject matter expert — matched by specialism — reviews, corrects, and approves every section before it leaves the system.',
    tag: 'SME VERIFIED',
    // Step 03: lime border (the highlighted step)
    highlight: true,
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Business-ready output in your inbox. Formatted to spec. No chasing. No revision cycles. Done.',
    tag: 'DELIVERED',
    highlight: false,
  },
]

export default function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="process-heading"
    >
      <div className="kj-container">

        {/* Eyebrow — 199:4 "THE PROCESS" */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          THE PROCESS
        </p>

        {/* H2 — 167:2390: Sans Regular 48px, tracking -0.02em */}
        <h2
          id="process-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Brief in. Business-ready output out.
        </h2>

        {/* ── Step cards ──────────────────────────────────────────────────── */}
        {/* 4 equal-width cards in a horizontal row, with → arrows between   */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 mb-10">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-start flex-1">

              {/* Card — 167:2391/2397/2403/2409                             */}
              {/* bg rgba(80,80,96,0.12), border subtle or lime for step 03  */}
              {/* Absolute positioning matches Figma pixel values             */}
              <div
                className="relative flex-1 rounded-[2px] overflow-hidden"
                style={{
                  background: 'rgba(80,80,96,0.12)',
                  border: `1px solid ${step.highlight ? '#DEFF00' : 'rgba(248,248,242,0.07)'}`,
                  minHeight: '280px',
                }}
              >
                {/* Step number — Mono Light 28px, top=19px */}
                <p
                  className="absolute font-mono text-kj-lime"
                  style={{
                    fontWeight: 300,
                    fontSize: '28px',
                    lineHeight: '1.2',
                    left: '19px',
                    top: '19px',
                  }}
                >
                  {step.num}
                </p>

                {/* Title — Sans SemiBold 16px, top=65px */}
                <p
                  className="absolute font-sans font-semibold text-kj-light"
                  style={{ fontSize: '16px', lineHeight: '1.2', left: '19px', top: '65px' }}
                >
                  {step.title}
                </p>

                {/* Description — Sans Light 13px, top=95px, w=200px, h=50px (clips) */}
                <p
                  className="absolute font-sans font-light overflow-hidden"
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: 'rgba(248,248,242,0.36)',
                    left: '19px',
                    top: '95px',
                    width: '200px',
                    maxHeight: '130px',
                  }}
                >
                  {step.desc}
                </p>

                {/* Tag — Mono Regular 10px, top=251px, lime, tracking 3px */}
                <p
                  className="absolute font-mono font-normal text-kj-lime uppercase"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '3px',
                    lineHeight: '1.2',
                    left: '19px',
                    top: '251px',
                  }}
                >
                  {step.tag}
                </p>
              </div>

              {/* Arrow connector between cards */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center shrink-0 px-2 self-stretch"
                  style={{ color: 'rgba(248,248,242,0.20)', fontSize: '14px' }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Sankey diagram ──────────────────────────────────────────────── */}
        {/* Node 184:5214 — SVG for crisp rendering at all screen sizes */}
        <div className="w-full overflow-x-auto mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sankey/sankey.svg"
            alt="Flow: Brief → AI Processing → Human Expert Review → Finished Deliverable"
            width={1224}
            height={210}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Note */}
        <p
          className="font-sans text-[14px] leading-[1.6] mb-5"
          style={{ color: 'rgba(248,248,242,0.45)', maxWidth: '720px' }}
        >
          AI handles the drafting. A content strategist, research analyst, or legal writer reviews everything before it reaches you. That&apos;s not a wrapper — that&apos;s a quality system.
        </p>

        {/* CTA link */}
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-1 font-mono text-[13px] text-kj-lime hover:opacity-70 transition-opacity"
        >
          See the full process →
        </Link>

      </div>
    </section>
  )
}
