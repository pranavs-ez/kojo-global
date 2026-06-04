import Link from 'next/link'
import CaretMotif from '@/components/atoms/CaretMotif'

export default function FinalCtaSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#121212' }}
      aria-labelledby="final-cta-heading"
    >
      <div className="kj-container flex flex-col items-center text-center">
        <h2
          id="final-cta-heading"
          className="font-sans font-regular text-[48px] md:text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] max-w-[560px]"
        >
          Your next deliverable.
          <CaretMotif size="desktop" className="hidden md:inline-block" />
          <br />Brief it today.
        </h2>
        <p className="font-sans font-light text-[16px] text-kj-light/35 leading-[1.6] mt-4">
          100,000 Kojo ($100) free on your first signup. No card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-1.5 w-[200px] h-[48px] bg-kj-lime text-kj-dark font-sans font-semibold text-[15px] rounded-[2px] hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all"
          >
            Start free →
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center h-[48px] font-mono text-[13px] text-kj-light/35 hover:text-kj-light/60 transition-colors"
          >
            Talk to us first
          </Link>
        </div>
      </div>
    </section>
  )
}
