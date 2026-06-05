// Pricing F1 — Hero | bg #1e1e1e | left-aligned
import Link from 'next/link'

export default function PricingHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="pricing-hero-heading"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(80,80,96,0.45) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 72% 58% at 50% 50%, rgba(30,30,30,0.80) 0%, rgba(30,30,30,0.40) 50%, rgba(30,30,30,0) 100%)',
        }}
      />

      <div className="relative z-10 kj-container py-16 lg:py-24">

        {/* Eyebrow */}
        <p className="font-mono font-normal text-kj-lime uppercase mb-5"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          PRICING
        </p>

        {/* H1 */}
        <h1
          id="pricing-hero-heading"
          className="font-sans font-semibold text-kj-light"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em', maxWidth: '900px' }}
        >
          An agency charges $5,000 for a board memo. Kojo delivers the same output for $490.
        </h1>

        {/* Lead */}
        <p className="font-sans font-normal mt-5"
          style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)', maxWidth: '600px' }}>
          Pay for what you use. No retainer. No monthly minimum. No card required to start.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[13px] sm:text-[15px] px-8 py-[15px]"
          >
            Start free — 100,000 Kojo included →
          </Link>
        </div>

        {/* Trust bar */}
        <p className="font-mono font-normal mt-6"
          style={{ fontSize: '11px', color: 'rgba(248,248,242,0.28)', letterSpacing: '0.5px' }}>
          ISO 27001:2022 certified · 10-minute acknowledgement SLA · Fix or refund guarantee
        </p>

      </div>

      {/* Section bottom border */}
      <div style={{ height: '1px', background: 'rgba(248,248,242,0.08)' }} />
    </section>
  )
}
