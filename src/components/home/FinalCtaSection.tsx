// Final CTA (S11) — "Your next deliverable / Brief it today."
// Figma nodes 167:2437–167:2438 | Background: #121212

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

        {/* H2 — 167:2437: Sans Regular 48px, centred, tracking -0.02em */}
        {/* Caret sits inline after "Your next deliverable" per Figma style */}
        <h2
          id="final-cta-heading"
          className="font-sans font-normal text-kj-light text-center"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Your next deliverable
          <CaretMotif size="desktop" className="hidden md:inline-block" />
          <CaretMotif size="mobile" className="inline-block md:hidden" />
          <br />Brief it today.
        </h2>

        {/* Subtitle — 167:2438: Sans Light 16px, rgba(248,248,242,0.45), centred */}
        <p
          className="font-sans font-light text-[16px] leading-[1.6] mt-4 text-center"
          style={{ color: 'rgba(248,248,242,0.45)' }}
        >
          100,000 Kojo ($100) free on your first signup. No card required.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          {/* Primary — lime, Mono SemiBold 15px, matches all other CTAs */}
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all"
            style={{ fontSize: '15px', paddingLeft: '32px', paddingRight: '32px', paddingTop: '15px', paddingBottom: '15px' }}
          >
            Start free →
          </Link>
          {/* Secondary */}
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
