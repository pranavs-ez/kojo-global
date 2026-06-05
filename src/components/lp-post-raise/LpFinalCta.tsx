// LP Post-Raise F6 — Final CTA | bg #121212 | legal footer only, no site nav
import Link from 'next/link'

const CTA_HREF = '/signup'

export default function LpFinalCta() {
  return (
    <section
      style={{ background: '#121212', padding: '72px 0 0' }}
      aria-labelledby="lp-final-cta-heading"
    >
      <div className="kj-container flex flex-col items-center text-center">

        <h2
          id="lp-final-cta-heading"
          className="font-sans font-normal text-kj-light text-center"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '760px' }}
        >
          Your first deliverable. Brief it today.
        </h2>

        <p className="font-sans font-light mt-5 text-center"
          style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)', maxWidth: '520px' }}>
          100,000 Kojo ($100) free on your first signup. No card required. The brief wizard takes ten minutes.
        </p>

        <div className="mt-8 w-full sm:w-auto">
          <Link
            href={CTA_HREF}
            className="flex sm:inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[13px] sm:text-[15px] px-8 py-[15px]"
          >
            Claim your 100,000 Kojo →
          </Link>
        </div>

        {/* Legal footer — no site nav */}
        <div className="mt-16 pb-8 w-full" style={{ borderTop: '1px solid rgba(80,80,96,0.15)', paddingTop: '24px' }}>
          <p className="font-mono font-normal text-center"
            style={{ fontSize: '11px', color: 'rgba(248,248,242,0.20)' }}>
            <Link href="/privacy" className="hover:opacity-60 transition-opacity">Privacy policy</Link>
            {' · '}
            <Link href="/terms" className="hover:opacity-60 transition-opacity">Terms of service</Link>
            {' · '}
            © 2026 Kojo
          </p>
        </div>

      </div>
    </section>
  )
}
