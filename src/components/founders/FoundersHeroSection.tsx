// Founders F1 — Hero | bg #1e1e1e
import Link from 'next/link'
import CaretMotif from '@/components/atoms/CaretMotif'

export default function FoundersHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="founders-hero-heading"
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

        <p className="font-mono font-normal text-kj-lime uppercase mb-5"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          FOR FOUNDERS
        </p>

        <h1
          id="founders-hero-heading"
          className="font-sans font-semibold text-kj-light"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em', maxWidth: '820px' }}
        >
          Congrats on the raise.<br />Now comes the <span className="whitespace-nowrap">war zone<CaretMotif /></span>
        </h1>

        <p className="font-sans font-normal mt-5 mb-8"
          style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)', maxWidth: '680px' }}>
          0–90 days post-raise is the most output-intensive stretch of your company&apos;s life. Kojo is how Series B teams produce that output without hiring for it.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[13px] sm:text-[15px] px-8 py-[15px]"
          >
            Start free — 100,000 Kojo on us →
          </Link>
        </div>

        <p className="font-mono font-normal" style={{ fontSize: '11px', color: 'rgba(248,248,242,0.25)' }}>
          Trusted by Series B founders
        </p>

      </div>

      {/* Section bottom border */}
      <div style={{ height: '1px', background: 'rgba(248,248,242,0.08)' }} />
    </section>
  )
}
