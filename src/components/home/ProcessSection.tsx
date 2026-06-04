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
    body: 'AI processes your brief against your brand context and domain requirements. A subject matter expert — matched by specialism, not availability — routes and reviews.',
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
          className="font-sans font-regular text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] max-w-[640px]"
        >
          Brief in. Business-ready output out.
        </h2>
        <p className="font-sans text-[18px] text-kj-light/36 leading-[1.62] mt-4 mb-12">
          Here's exactly what happens between the two.
        </p>

        {/* Simplified Sankey */}
        <div className="w-full mb-14 rounded-[2px] overflow-hidden" style={{ background: '#121212' }}>
          <svg
            viewBox="0 0 1200 220"
            className="w-full"
            style={{ height: 'clamp(120px, 15vw, 220px)' }}
            aria-label="Process flow: Brief goes through AI processing and Human expert review to become a finished deliverable"
          >
            {/* BRIEF node */}
            <rect x="0" y="60" width="180" height="100" fill="#232323" rx="2" />
            <text x="90" y="108" textAnchor="middle" fill="rgba(248,248,242,0.5)" fontSize="11" fontFamily="IBM Plex Mono">BRIEF</text>

            {/* AI band */}
            <path d="M180,60 C300,60 300,50 420,50 L420,130 C300,130 300,160 180,160 Z" fill="rgba(222,255,0,0.15)" />
            <text x="300" y="98" textAnchor="middle" fill="#DEFF00" fontSize="10" fontFamily="IBM Plex Mono" opacity="0.8">AI DRAFT</text>

            {/* Human Expert band */}
            <path d="M420,50 C560,50 560,30 700,30 L700,170 C560,170 560,150 420,130 Z" fill="rgba(164,72,250,0.18)" />
            <text x="560" y="103" textAnchor="middle" fill="#A448FA" fontSize="10" fontFamily="IBM Plex Mono" opacity="0.9">SME REVIEW</text>

            {/* Converge to output */}
            <path d="M700,30 C820,30 860,70 1000,70 L1000,150 C860,150 820,170 700,170 Z" fill="rgba(248,248,242,0.08)" />

            {/* OUTPUT node */}
            <rect x="1000" y="60" width="200" height="100" fill="#232323" rx="2" />
            <text x="1100" y="104" textAnchor="middle" fill="rgba(248,248,242,0.5)" fontSize="11" fontFamily="IBM Plex Mono">DELIVERABLE</text>

            {/* Annotations */}
            <text x="1000" y="180" textAnchor="end" fill="rgba(248,248,242,0.3)" fontSize="9" fontFamily="IBM Plex Mono">Kojo: 4–24 hrs · from $40</text>
            <text x="1000" y="194" textAnchor="end" fill="rgba(248,248,242,0.2)" fontSize="9" fontFamily="IBM Plex Mono">Agency: 2–4 weeks · from $1,200</text>
          </svg>
        </div>

        {/* 4 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col gap-3">
              <p className="font-mono font-light text-[28px] text-kj-lime leading-none">
                {step.num}
              </p>
              <p className="font-sans font-semibold text-[16px] text-kj-light leading-[1.3]">
                {step.title}
              </p>
              <p className="font-sans text-[13px] text-kj-light/55 leading-[1.65]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Below steps note */}
        <p className="mt-10 font-sans text-[14px] text-kj-light/45 leading-[1.6] max-w-[720px]">
          AI handles the drafting. A content strategist, research analyst, or legal writer reviews everything before it reaches you. That's not a wrapper — that's a quality system.
        </p>

        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-1 mt-6 font-mono text-[13px] text-kj-lime hover:opacity-70 transition-opacity"
        >
          See the full process →
        </Link>
      </div>
    </section>
  )
}
