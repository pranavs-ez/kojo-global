// VC Section (S9) — "Backed by a leading VC?"
// Figma nodes 167:2526–167:2527 | Background: #1e1e1e
// Heading uses Mobile/Smaller H2 style (28px) — a callout, not a main section

import Link from 'next/link'

export default function VcSection() {
  return (
    <section
      className="kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="vc-heading"
    >
      <div className="kj-container py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex flex-col gap-3 max-w-[760px]">
            {/* H2 — 167:2526: Sans Regular 28px, tracking -0.02em */}
            {/* Uses Mobile H2 size (28px) — intentionally smaller, callout style */}
            <h2
              id="vc-heading"
              className="font-sans font-normal text-kj-light"
              style={{ fontSize: '28px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              Backed by a leading VC?
            </h2>
            {/* Description — 167:2527 */}
            <p
              className="font-sans font-normal text-[15px] leading-[1.6]"
              style={{ color: 'rgba(248,248,242,0.55)' }}
            >
              Portfolio companies backed by our VC partners get 500,000 Kojo ($500) on first signup and a dedicated onboarding session — five times the standard allocation.
            </p>
          </div>

          <Link
            href="/vc-partners"
            className="shrink-0 inline-flex items-center gap-1 font-mono font-normal text-kj-lime hover:opacity-70 transition-opacity whitespace-nowrap"
            style={{ fontSize: '13px' }}
          >
            Check if your VC is a Kojo partner →
          </Link>

        </div>
      </div>
    </section>
  )
}
