// VC Section (S9) — "Backed by a leading VC?"
// Figma nodes 167:2526–167:2527 | Background: #1e1e1e

import Link from 'next/link'

export default function VcSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="vc-heading"
    >
      <div className="kj-container">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-8 py-8 rounded-[2px]"
          style={{
            background: 'rgba(80,80,96,0.08)',
            border: '0.5px solid rgba(248,248,242,0.07)',
          }}
        >
          <div className="flex flex-col gap-3 max-w-[720px]">
            {/* H2 — 167:2526: Sans Regular 28px, tracking -0.02em */}
            <h2
              id="vc-heading"
              className="font-sans font-normal text-kj-light"
              style={{ fontSize: '28px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              Backed by a leading VC?
            </h2>
            {/* Body — 167:2527 */}
            <p
              className="font-sans font-normal text-[15px] leading-[1.6]"
              style={{ color: 'rgba(248,248,242,0.55)' }}
            >
              Portfolio companies backed by our VC partners get 500,000 Kojo ($500) on first signup and a dedicated onboarding session — five times the standard allocation.
            </p>
          </div>

          <Link
            href="/vc-partners"
            className="shrink-0 inline-flex items-center justify-center rounded-[2px] font-mono font-normal text-kj-dark bg-kj-lime hover:bg-kj-lime-hover transition-all whitespace-nowrap"
            style={{ fontSize: '13px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '12px', paddingBottom: '12px' }}
          >
            Check partner status →
          </Link>
        </div>
      </div>
    </section>
  )
}
