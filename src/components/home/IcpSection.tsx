// ICP + VC (S8/S9) — "Find your fit" + "Backed by a leading VC?"
// Figma: ICP BG y=4915 h=679 | Cards: 282×256px | VC content below cards
// VC heading at y=5375 (36px below cards bottom), body at y=5413, CTA at y=5489

import Link from 'next/link'

const ICP_CARDS = [
  {
    label: 'Scaling Founder',
    desc: '0–90 days post-raise. Everything your investors expect, without hiring for it.',
    cta: "I'm a founder →",
    href: '/for/founders',
  },
  {
    label: 'First CMO',
    desc: 'Content, campaigns, and research at volume. Consistent quality whether you brief once or fifty times.',
    cta: "I'm a CMO →",
    href: '/for/cmos',
  },
  {
    label: 'Chief of Staff',
    desc: "Ad-hoc tasks across any function. Brief it the way you'd brief your CEO.",
    cta: "I'm a Chief of Staff →",
    href: '/for/chiefs-of-staff',
  },
  {
    label: 'COO / VP Operations',
    desc: 'One vendor. One SLA. ISO 27001 certified. Replace up to 12 vendor relationships.',
    cta: "I'm a COO →",
    href: '/for/coos',
  },
]

export default function IcpSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="icp-heading"
    >
      <div className="kj-container">

        {/* H2 */}
        <h2
          id="icp-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Find your fit
        </h2>

        {/* ── ICP cards — 4-column grid, 282×256px each ────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ICP_CARDS.map((card) => (
            <div
              key={card.href}
              className="relative rounded-[2px] overflow-hidden"
              style={{
                background: 'rgba(80,80,96,0.12)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                height: '256px',
              }}
            >
              {/* Title — Sans SemiBold 16px, top=19.5 */}
              <p
                className="absolute font-sans font-semibold text-kj-light"
                style={{ fontSize: '16px', lineHeight: '1.2', left: '19.5px', top: '19.5px' }}
              >
                {card.label}
              </p>

              {/* Description — Sans Light 13px, top=51.5, w=242, h=100 */}
              <p
                className="absolute font-sans font-light overflow-hidden"
                style={{
                  fontSize: '13px',
                  lineHeight: '1.55',
                  color: 'rgba(248,248,242,0.36)',
                  left: '19.5px',
                  top: '51.5px',
                  width: '242px',
                  maxHeight: '100px',
                }}
              >
                {card.desc}
              </p>

              {/* CTA — Mono Regular 12px, top=218.5 */}
              <Link
                href={card.href}
                className="absolute font-mono font-normal hover:opacity-70 transition-opacity"
                style={{
                  fontSize: '12px',
                  lineHeight: '1.4',
                  color: 'rgba(222,255,0,0.85)',
                  left: '19.5px',
                  top: '218.5px',
                }}
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* ── VC Section — "Backed by a leading VC?" ────────────────────────── */}
        {/* Figma 167:2526–2527 + 201:72: 36px below cards, same section BG    */}
        <div className="mt-9">
          <h3
            className="font-sans font-normal text-kj-light mb-3"
            style={{ fontSize: '28px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
          >
            Backed by a leading VC?
          </h3>

          <p
            className="font-sans font-light mb-6"
            style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.36)', maxWidth: '760px' }}
          >
            Portfolio companies backed by our VC partners get 500,000 Kojo ($500) on first signup and a dedicated onboarding session — five times the standard allocation.
          </p>

          <Link
            href="/vc-partners"
            className="inline-flex items-center font-mono font-normal text-kj-lime hover:opacity-70 transition-opacity"
            style={{ fontSize: '13px' }}
          >
            Check partner status →
          </Link>
        </div>

      </div>
    </section>
  )
}
