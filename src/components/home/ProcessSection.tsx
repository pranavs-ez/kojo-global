import Link from 'next/link'
import Image from 'next/image'

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
        {/* Eyebrow */}
        <p className="font-mono font-normal text-kj-lime uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '3px' }}>
          THE PROCESS
        </p>
        {/* H2 */}
        <h2
          id="process-heading"
          className="font-sans font-normal text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] max-w-[640px] mb-12"
        >
          Brief in. Business-ready output out.
        </h2>

        {/* 4 steps — horizontal row with arrows between */}
        <div className="flex flex-col md:flex-row gap-0 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex md:flex-col flex-1 gap-4 md:gap-0">
              <div className="flex flex-col gap-3 flex-1 md:pr-6">
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
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex items-start pt-8 px-1 shrink-0">
                  <span className="font-sans text-[14px]" style={{ color: 'rgba(248,248,242,0.20)' }}>→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sankey — exact Figma graphic using saved connector images */}
        {/* Container is 1200px wide × 210px tall, matching Figma dimensions */}
        <div className="w-full overflow-x-auto mb-10">
          <div
            className="relative"
            style={{ width: '1200px', height: '210px' }}
            aria-label="Process flow: Brief → AI Processing → Human Expert Review → Finished Deliverable"
            role="img"
          >
            {/* Connector curve 1a: brief top → AI (264×100, starts x=16) */}
            <Image
              src="/images/sankey/conn-1a.png"
              alt=""
              width={264}
              height={100}
              className="absolute"
              style={{ left: 16, top: 0 }}
              aria-hidden="true"
            />
            {/* Connector curve 1b: brief bottom → human (554×110, starts x=16, y=100) */}
            <Image
              src="/images/sankey/conn-1b.png"
              alt=""
              width={554}
              height={110}
              className="absolute"
              style={{ left: 16, top: 100 }}
              aria-hidden="true"
            />
            {/* Connector curve 2: AI → human (274×100, starts x=296) */}
            <Image
              src="/images/sankey/conn-2.png"
              alt=""
              width={274}
              height={100}
              className="absolute"
              style={{ left: 296, top: 0 }}
              aria-hidden="true"
            />
            {/* Connector 3: human → finished (gradient fade) */}
            <div
              className="absolute rounded-[2px]"
              style={{
                left: 586,
                top: 20,
                width: 344,
                height: 160,
                background: 'linear-gradient(to right, rgba(164,72,250,0.35), rgba(30,30,30,0.35))',
              }}
              aria-hidden="true"
            />

            {/* Vertical bars — the 4 nodes */}
            {/* Brief node */}
            <div className="absolute rounded-[2px]" style={{ left: 0, top: 20, width: 16, height: 160, background: '#30303c', border: '1px solid rgba(80,80,96,0.6)' }} />
            {/* AI node */}
            <div className="absolute rounded-[2px]" style={{ left: 280, top: 0, width: 16, height: 80, background: '#DEFF00' }} />
            {/* Human node */}
            <div className="absolute rounded-[2px]" style={{ left: 570, top: 20, width: 16, height: 160, background: '#A448FA' }} />
            {/* Finished node */}
            <div className="absolute rounded-[2px]" style={{ left: 930, top: 20, width: 16, height: 160, background: '#1e1e1e', border: '1px solid rgba(248,248,242,0.22)' }} />

            {/* Labels */}
            <p className="absolute font-mono text-[10px] text-kj-light" style={{ left: 24, top: 74, letterSpacing: '3px' }}>BRIEF</p>
            <p className="absolute font-mono text-[10px] text-kj-light" style={{ left: 304, top: 34, letterSpacing: '3px' }}>AI PROCESSING</p>
            <p className="absolute font-mono text-[10px] text-kj-light" style={{ left: 594, top: 94, letterSpacing: '3px' }}>HUMAN EXPERT REVIEW</p>
            <p className="absolute font-mono text-[10px] text-kj-light" style={{ left: 954, top: 78, letterSpacing: '3px' }}>FINISHED DELIVERABLE</p>

            {/* Annotations */}
            <p className="absolute font-mono text-[9px]" style={{ left: 954, top: 108, color: 'rgba(248,248,242,0.4)' }}>
              Kojo: 4–24 hrs · Agency equiv: 2–4 wks
            </p>
            <p className="absolute font-mono text-[9px]" style={{ left: 954, top: 123, color: 'rgba(248,248,242,0.4)' }}>
              Kojo: from $40 · Agency: from $1,200
            </p>
          </div>
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
