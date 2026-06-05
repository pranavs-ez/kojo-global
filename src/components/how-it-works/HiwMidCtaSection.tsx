// HIW F5B — Mid-page CTA band | bg #121212
// Compact centred CTA — after expert layer, before SLAs

import Link from 'next/link'

export default function HiwMidCtaSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#121212', paddingTop: '72px', paddingBottom: '72px' }}
      aria-labelledby="hiw-midcta-heading"
    >
      <div className="kj-container flex flex-col items-center text-center">

        <h3
          id="hiw-midcta-heading"
          className="font-sans font-normal text-kj-light text-center"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Ready to brief your first project?
        </h3>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Link
            href="https://app.kojo.global"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[12px] sm:text-[14px] px-6 sm:px-8 py-[15px]"
          >
            Start free — 100,000 Kojo on us →
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center font-mono font-normal text-[13px] transition-opacity hover:opacity-60"
            style={{ color: 'rgba(248,248,242,0.35)' }}
          >
            See pricing first
          </Link>
        </div>

      </div>
    </section>
  )
}
