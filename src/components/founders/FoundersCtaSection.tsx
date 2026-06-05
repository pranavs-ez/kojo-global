// Founders F9 — Final CTA | bg #121212
import Link from 'next/link'
import CaretMotif from '@/components/atoms/CaretMotif'

export default function FoundersCtaSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#121212' }}
      aria-labelledby="founders-cta-heading"
    >
      <div className="kj-container flex flex-col items-center text-center">

        <h2
          id="founders-cta-heading"
          className="font-sans font-normal text-kj-light text-center"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '800px' }}
        >
          Your next board meeting<br /><span className="whitespace-nowrap">is in three weeks<CaretMotif /></span><br />Brief it today.
        </h2>

        <p className="font-sans font-light mt-5 text-center"
          style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)', maxWidth: '520px' }}>
          100,000 Kojo ($100) free on your first signup. No card required.
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
