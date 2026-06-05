// Pricing F8 — Final CTA | bg #121212
import Link from 'next/link'
import CaretMotif from '@/components/atoms/CaretMotif'

export default function PricingCtaSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#121212' }}
      aria-labelledby="pricing-cta-heading"
    >
      <div className="kj-container flex flex-col items-center text-center">

        <h2
          id="pricing-cta-heading"
          className="font-sans font-normal text-kj-light text-center"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '760px' }}
        >
          Your first 100,000 Kojo are on <span className="whitespace-nowrap">us<CaretMotif /></span>
        </h2>

        <p className="font-sans font-light mt-5 text-center"
          style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)', maxWidth: '520px' }}>
          Enough for a full blog post, a press release, or a 3-competitor snapshot. No card required.
        </p>

        <div className="mt-10">
          <Link
            href="https://app.kojo.global"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[12px] sm:text-[15px] px-6 sm:px-8 py-[15px]"
          >
            Start free →
          </Link>
        </div>

      </div>
    </section>
  )
}
