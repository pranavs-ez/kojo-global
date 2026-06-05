// LP Post-Raise F1 — Hero | bg #1e1e1e | no nav | left-aligned
import Link from 'next/link'

const CTA_HREF = '/signup'

export default function LpHeroSection() {
  return (
    <section
      style={{ background: '#1e1e1e', padding: '80px 0 72px' }}
      aria-labelledby="lp-hero-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-5"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          FOR SERIES B AND C FOUNDERS
        </p>

        <h1
          id="lp-hero-heading"
          className="font-sans font-semibold text-kj-light"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em', maxWidth: '900px' }}
        >
          Congrats on the raise. Here&apos;s what the next 90 days look like.
        </h1>

        <p className="font-sans font-normal mt-5 mb-8"
          style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)', maxWidth: '680px' }}>
          0–90 days post-raise is the most output-intensive stretch of your company&apos;s life. Every item on this list needs to look like you raised a Series B. Your team is still twelve people.
        </p>

        <Link
          href={CTA_HREF}
          className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all text-[13px] sm:text-[14px] px-6 sm:px-8 py-[15px]"
        >
          Claim your 100,000 Kojo ($100) and brief your first project →
        </Link>

        <p className="font-mono font-normal mt-5"
          style={{ fontSize: '11px', color: 'rgba(248,248,242,0.25)', letterSpacing: '0.5px' }}>
          ISO 27001 certified  ·  10-minute brief  ·  Business-ready output in hours
        </p>

      </div>
    </section>
  )
}
