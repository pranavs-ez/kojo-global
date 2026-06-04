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

        {/* Sankey — direct Figma export (node 184:5214), 1224×210px */}
        <div className="w-full overflow-x-auto mb-10">
          <Image
            src="/images/sankey/sankey-full.png"
            alt="Process flow: Brief → AI Processing → Human Expert Review → Finished Deliverable"
            width={1224}
            height={210}
            className="block"
            style={{ maxWidth: '100%', height: 'auto' }}
            priority
          />
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
