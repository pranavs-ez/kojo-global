// Process (S3) — "Brief in. Business-ready output out."
// Figma nodes 167:2391–167:2413 | Background: #181818
// Cards: 240×280px fixed | Connectors: 74×2px horizontal line + 8×7px dot
// Callout (599:85): "That's not a wrapper — that's a quality system."

import Link from 'next/link'

const STEPS = [
  {
    num: '01',
    title: 'Brief',
    desc: 'Describe what you need. The guided brief wizard asks the right questions — audience, purpose, format, deadline, brand context.',
    tag: 'INPUT',
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

// Horizontal connector between process cards
// Figma 612:4731/4732: 74×2px line + 8×7px dot, color rgba(222,255,0,0.75)
function ProcessConnector() {
  return (
    <div
      className="hidden md:flex items-center shrink-0"
      style={{ width: '79px', alignSelf: 'stretch' }}
    >
      <div style={{ position: 'relative', width: '74px', height: '2px', background: 'rgba(222,255,0,0.75)' }}>
        <div style={{
          position: 'absolute',
          width: '8px',
          height: '7px',
          background: '#DEFF00',
          left: '66px',
          top: '-2.5px',
        }} />
      </div>
    </div>
  )
}

export default function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="process-heading"
    >
      <div className="kj-container">

        {/* Eyebrow */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          THE PROCESS
        </p>

        {/* H2 */}
        <h2
          id="process-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Brief in. Business-ready output out.
        </h2>

        {/* ── Step cards row ──────────────────────────────────────────────── */}
        {/* Desktop: 4 cards × 240px + 3 connectors × 79px = 1197px          */}
        {/* Mobile: stacked, full-width                                        */}
        <div className="flex flex-col md:flex-row md:items-stretch mb-12">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex md:contents">

              {/* Card — 240×280px fixed on desktop */}
              <div
                className="relative w-full md:w-[240px] rounded-[2px] overflow-hidden shrink-0 mb-4 md:mb-0"
                style={{
                  height: '280px',
                  background: 'rgba(80,80,96,0.12)',
                  border: `1px solid ${step.highlight ? '#DEFF00' : 'rgba(248,248,242,0.07)'}`,
                }}
              >
                {/* Step number — Mono Light 28px, top=19 */}
                <p
                  className="absolute font-mono text-kj-lime"
                  style={{ fontWeight: 300, fontSize: '28px', lineHeight: '1.2', left: '19px', top: '19px' }}
                >
                  {step.num}
                </p>

                {/* Title — Sans SemiBold 16px, top=65 */}
                <p
                  className="absolute font-sans font-semibold text-kj-light"
                  style={{ fontSize: '16px', lineHeight: '1.2', left: '19px', top: '65px' }}
                >
                  {step.title}
                </p>

                {/* Description — Sans Light 13px, top=95, w=200, h=50 clipped */}
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

                {/* Tag — Mono Regular 10px, top=251 */}
                <p
                  className="absolute font-mono font-normal text-kj-lime uppercase"
                  style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2', left: '19px', top: '251px' }}
                >
                  {step.tag}
                </p>
              </div>

              {/* Horizontal connector (desktop only) */}
              {i < STEPS.length - 1 && <ProcessConnector />}
            </div>
          ))}
        </div>

        {/* ── Sankey diagram ──────────────────────────────────────────────── */}
        <div className="w-full overflow-x-auto mb-[10px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sankey/sankey.svg"
            alt="Flow: Brief → AI Processing → Human Expert Review → Finished Deliverable"
            width={1224}
            height={210}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* ── Callout — 599:85: Sans Regular, full width, 26px tall ─────── */}
        <p
          className="font-sans font-normal text-kj-light mb-6"
          style={{ fontSize: '15px', lineHeight: '1.6' }}
        >
          That's not a wrapper — that's a quality system.
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
