// HIW F9 — CTA | bg #121212
// Centred CTA block

import Link from 'next/link'
import CaretMotif from '@/components/atoms/CaretMotif'

export default function HiwCtaSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#121212' }}
      aria-labelledby="hiw-cta-heading"
    >
      <div className="kj-container flex flex-col items-center text-center">

        {/* H2 */}
        <h2
          id="hiw-cta-heading"
          className="font-sans font-normal text-kj-light text-center"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '760px' }}
        >
          Brief your first project<CaretMotif />
          <br />100,000 Kojo free on signup.
        </h2>

        {/* Lead */}
        <p
          className="font-sans font-light mt-5 text-center"
          style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)', maxWidth: '560px' }}
        >
          The brief wizard takes ten minutes. Your first deliverable will tell you everything you need to know.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Link
            href="https://app.kojo.global"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[12px] sm:text-[15px] px-6 sm:px-8 py-[15px]"
          >
            Start free →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center font-mono font-normal text-[13px] transition-opacity hover:opacity-60"
            style={{ color: 'rgba(248,248,242,0.35)' }}
          >
            Talk to us first
          </Link>
        </div>

      </div>
    </section>
  )
}
