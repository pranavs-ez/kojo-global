import Link from 'next/link'

const STEPS = [
  {
    num: '01',
    title: 'Brief',
    body: 'Describe what you need. The guided brief wizard asks the right questions — audience, purpose, format, deadline, brand context. Eight questions. Ten minutes.',
  },
  {
    num: '02',
    title: 'Route & draft',
    body: 'AI processes your brief against your brand context and domain requirements. A subject matter expert — matched by specialism, not availability — routes and drafts.',
  },
  {
    num: '03',
    title: 'Expert reviews',
    body: 'A subject matter expert reviews, corrects, and approves every section against your brief before it leaves the system.',
  },
  {
    num: '04',
    title: 'Deliver',
    body: 'Business-ready output in your inbox. Formatted to spec. No chasing. No revision cycles. Done.',
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
        {/* Eyebrow + heading */}
        <p className="font-mono text-[10px] text-kj-lime tracking-[3px] uppercase mb-4">
          THE PROCESS
        </p>
        <h2
          id="process-heading"
          className="font-sans font-regular text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] max-w-[640px] mb-12"
        >
          Brief in. Business-ready output out.
        </h2>

        {/* 4 steps — horizontal row with arrows */}
        <div className="flex flex-col md:flex-row items-start gap-0 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-row md:flex-col md:flex-1 items-start gap-4 md:gap-0">
              {/* Step card */}
              <div className="flex flex-col gap-3 md:pr-8 flex-1">
                <p className="font-mono font-light text-[28px] text-kj-lime leading-none">
                  {step.num}
                </p>
                <p className="font-sans font-semibold text-[16px] text-kj-light leading-[1.3]">
                  {step.title}
                </p>
                <p className="font-sans text-[13px] leading-[1.65]" style={{ color: 'rgba(248,248,242,0.55)' }}>
                  {step.body}
                </p>
              </div>
              {/* Arrow between steps */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex items-start pt-9 px-2 shrink-0">
                  <span className="font-sans text-[16px]" style={{ color: 'rgba(248,248,242,0.25)' }}>→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sankey diagram */}
        <div
          className="w-full rounded-[2px] overflow-hidden mb-10"
          style={{ background: '#121212' }}
        >
          <svg
            viewBox="0 0 1200 200"
            className="w-full"
            style={{ height: 'clamp(100px, 12vw, 200px)' }}
            aria-label="Process flow diagram: Brief goes through AI draft and human expert review to become a business-ready deliverable"
          >
            {/* BRIEF node */}
            <rect x="0" y="50" width="160" height="100" fill="#232323" rx="2" />
            <text x="80" y="101" textAnchor="middle" fill="rgba(80,80,96,0.7)" fontSize="10" fontFamily="IBM Plex Mono, monospace">BRIEF</text>

            {/* AI DRAFT band — Electric Lime */}
            <path d="M160,50 C240,50 260,40 380,40 L380,110 C260,110 240,150 160,150 Z"
              fill="rgba(222,255,0,0.12)" />
            <path d="M160,50 C240,50 260,40 380,40"
              fill="none" stroke="rgba(222,255,0,0.4)" strokeWidth="1" />
            <text x="270" y="80" textAnchor="middle" fill="rgba(222,255,0,0.75)" fontSize="9" fontFamily="IBM Plex Mono, monospace">AI DRAFT</text>

            {/* HUMAN EXPERT band — Magenta */}
            <path d="M380,40 C520,40 560,20 720,20 L720,180 C560,180 520,160 380,110 Z"
              fill="rgba(164,72,250,0.12)" />
            <path d="M380,40 C520,40 560,20 720,20"
              fill="none" stroke="rgba(164,72,250,0.5)" strokeWidth="1" />
            <text x="550" y="60" textAnchor="middle" fill="rgba(164,72,250,0.9)" fontSize="9" fontFamily="IBM Plex Mono, monospace">SME REVIEW</text>

            {/* Converge to output */}
            <path d="M720,20 C840,20 880,60 1000,60 L1000,140 C880,140 840,180 720,180 Z"
              fill="rgba(248,248,242,0.05)" />

            {/* DELIVERABLE node */}
            <rect x="1000" y="50" width="200" height="100" fill="#232323" rx="2" />
            <text x="1100" y="97" textAnchor="middle" fill="rgba(248,248,242,0.5)" fontSize="10" fontFamily="IBM Plex Mono, monospace">DELIVERABLE</text>

            {/* Time/cost annotations */}
            <text x="998" y="170" textAnchor="end" fill="rgba(248,248,242,0.25)" fontSize="8" fontFamily="IBM Plex Mono, monospace">Kojo: 4–24 hrs · from $40</text>
            <text x="998" y="185" textAnchor="end" fill="rgba(248,248,242,0.15)" fontSize="8" fontFamily="IBM Plex Mono, monospace">Agency: 2–4 weeks · from $1,200</text>
          </svg>
        </div>

        {/* Note + CTA */}
        <p className="font-sans text-[14px] leading-[1.6] max-w-[720px]" style={{ color: 'rgba(248,248,242,0.45)' }}>
          AI handles the drafting. A content strategist, research analyst, or legal writer reviews everything before it reaches you. That's not a wrapper — that's a quality system.
        </p>
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-1 mt-5 font-mono text-[13px] text-kj-lime hover:opacity-70 transition-opacity"
        >
          See the full process →
        </Link>
      </div>
    </section>
  )
}
