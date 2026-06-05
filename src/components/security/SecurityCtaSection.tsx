// Security F6 — CTA | bg #121212
import Link from 'next/link'
import CaretMotif from '@/components/atoms/CaretMotif'

export default function SecurityCtaSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#121212' }}
      aria-labelledby="security-cta-heading"
    >
      <div className="kj-container flex flex-col items-center text-center">

        <h2
          id="security-cta-heading"
          className="font-sans font-normal text-kj-light text-center"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '720px' }}
        >
          Questions about our security posture?<CaretMotif />
        </h2>

        <p className="font-sans font-light mt-5 text-center"
          style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)', maxWidth: '600px' }}>
          Our security overview covers certification scope, data handling in detail, and the enterprise controls available for Series C–D accounts.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Link
            href="/security-overview.pdf"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[12px] sm:text-[14px] px-6 sm:px-8 py-[15px]"
          >
            Download security overview →
          </Link>
          <a
            href="mailto:security@kojo.global"
            className="inline-flex items-center font-mono font-normal text-[13px] transition-opacity hover:opacity-60"
            style={{ color: 'rgba(248,248,242,0.35)' }}
          >
            Talk to us about enterprise requirements
          </a>
        </div>


      </div>
    </section>
  )
}
