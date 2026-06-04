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
          className="font-sans font-regular text-kj-light leading-[1.15] tracking-[-0.02em] max-w-[560px]"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
        >
          Your next deliverable
          <CaretMotif size="desktop" className="hidden md:inline-block" />
          <CaretMotif size="mobile" className="inline-block md:hidden" />
          <br />Brief it today.
        </h2>

        <p
          className="font-sans font-light text-[16px] leading-[1.6] mt-4"
          style={{ color: 'rgba(248,248,242,0.35)' }}
        >
          100,000 Kojo ($100) free on your first signup. No card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center w-[200px] h-[48px] bg-kj-lime text-kj-dark font-sans font-semibold text-[15px] rounded-[2px] hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all"
          >
            Start free →
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center h-[48px] font-mono text-[13px] transition-colors"
            style={{ color: 'rgba(248,248,242,0.35)' }}
          >
            Talk to us first
          </Link>
        </div>
      </div>
    </section>
  )
}
