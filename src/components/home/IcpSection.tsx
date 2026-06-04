// ICP (S8) — "Find your fit"
// Figma nodes 167:2509–167:2525 | Background: #212121
// ONE CTA per card only — the role-specific link

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

        {/* ── ICP cards — 4-column grid ─────────────────────────────────── */}
        {/* 167:2510: rgba(80,80,96,0.12) bg, 0.5px rgba(248,248,242,0.07)  */}
        {/* title top=19.5, desc top=51.5 w=242 h=100, cta top=218.5        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ICP_CARDS.map((card) => (
            <div
              key={card.href}
              className="relative rounded-[2px] overflow-hidden"
              style={{
                background: 'rgba(80,80,96,0.12)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                minHeight: '250px',
              }}
            >
              {/* Title — Sans SemiBold 16px, top=19.5 */}
              <p
                className="absolute font-sans font-semibold text-kj-light"
                style={{ fontSize: '16px', lineHeight: '1.2', left: '19.5px', top: '19.5px' }}
              >
                {card.label}
              </p>

              {/* Description — Sans Light 13px, rgba(248,248,242,0.36), leading 1.55 */}
              {/* w=242, h=100 (clipped) per Figma 167:2512                  */}
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

              {/* CTA — Mono Regular 12px, rgba(222,255,0,0.85), top=218.5  */}
              {/* ONE CTA only per Figma 167:2513                            */}
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

      </div>
    </section>
  )
}
