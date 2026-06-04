// VC Section (S9) — "Backed by a leading VC?"
// Figma nodes 167:2526–167:2527 | Background: #1e1e1e
// Plain section: no card wrapper. Heading + body (Light 14px, 0.36) + text link CTA.

import Link from 'next/link'

export default function VcSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="vc-heading"
    >
      <div className="kj-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-[960px]">

          <div className="flex flex-col gap-4">
            {/* H2 — 167:2526: Sans Regular 28px, tracking -0.02em */}
            <h2
              id="vc-heading"
              className="font-sans font-normal text-kj-light"
              style={{ fontSize: '28px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              Backed by a leading VC?
            </h2>
            {/* Body — 167:2527: Sans Light 14px, rgba(248,248,242,0.36), leading 1.6 */}
            <p
              className="font-sans font-light"
              style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.36)', maxWidth: '560px' }}
            >
              Portfolio companies backed by our VC partners get 500,000 Kojo ($500) on first signup and a dedicated onboarding session — five times the standard allocation.
            </p>
          </div>

          <Link
            href="/vc-partners"
            className="shrink-0 inline-flex items-center font-mono font-normal text-kj-lime hover:opacity-70 transition-opacity whitespace-nowrap"
            style={{ fontSize: '13px' }}
          >
            Check partner status →
          </Link>

        </div>
      </div>
    </section>
  )
}
