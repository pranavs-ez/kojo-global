// Security F1 — Hero | bg #1e1e1e
import Link from 'next/link'
import CaretMotif from '@/components/atoms/CaretMotif'

export default function SecurityHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="security-hero-heading"
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
          SECURITY
        </p>

        <h1
          id="security-hero-heading"
          className="font-sans font-semibold text-kj-light"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em', maxWidth: '1000px' }}
        >
          <span className="whitespace-nowrap">Enterprise-grade security<CaretMotif /></span><br />From day one.
        </h1>

        <p className="font-sans font-normal mt-5 mb-8"
          style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)', maxWidth: '720px' }}>
          ISO 27001:2022 certified. Your data is never used to train AI models without explicit written consent. What goes in, stays yours.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link
            href="/security-overview.pdf"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[13px] sm:text-[14px] px-6 sm:px-8 py-[14px]"
          >
            Download security overview (PDF) →
          </Link>
          <Link
            href="mailto:security@kojo.global"
            className="inline-flex items-center font-mono font-normal text-[13px] py-[14px] transition-opacity hover:opacity-60"
            style={{ color: 'rgba(248,248,242,0.40)' }}
          >
            Talk to us about enterprise requirements
          </Link>
        </div>

      </div>

      {/* Section bottom border */}
      <div style={{ height: '1px', background: 'rgba(248,248,242,0.08)' }} />
    </section>
  )
}
