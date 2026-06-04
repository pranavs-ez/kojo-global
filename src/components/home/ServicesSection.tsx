// Services (S5) — "One brief. Any function."
// Figma nodes 167:2466–167:2486 | Background: #181818

import Link from 'next/link'

const SERVICES = [
  {
    name: 'Content & Copy',
    desc: 'Blog posts, case studies, email campaigns, press releases',
    price: 'From 40,000 Kojo ($40)',
    href: '/services/content-and-copy',
  },
  {
    name: 'Research & Intelligence',
    desc: 'Competitive landscapes, TAM/SAM/SOM, market entry analysis',
    price: 'From 95,000 Kojo ($95)',
    href: '/services/research',
  },
  {
    name: 'Presentations',
    desc: 'Investor decks, board presentations, sales decks',
    price: 'From 180,000 Kojo ($180)',
    href: '/services/presentations',
  },
  {
    name: 'Design',
    desc: 'Social graphics, infographics, email templates, brand assets',
    price: 'From 40,000 Kojo ($40)',
    href: '/services/design',
  },
  {
    name: 'HR & Legal',
    desc: 'Employment agreements, NDAs, privacy policy, handbooks',
    price: 'From 30,000 Kojo ($30)',
    href: '/services/hr-and-legal',
  },
  {
    name: 'Language',
    desc: 'Translation, localisation, transcription across 40+ languages',
    price: 'From 25,000 Kojo ($25)',
    href: '/services/language',
  },
]

export default function ServicesSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="services-heading"
    >
      <div className="kj-container">

        {/* Eyebrow — 199:8 "SERVICES" */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          SERVICES
        </p>

        {/* H2 */}
        <h2
          id="services-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          One brief. Any function.
        </h2>

        {/* ── Service cards — 3-column grid ─────────────────────────────── */}
        {/* Each card: absolute pixel positions per 167:2466                 */}
        {/* bg rgba(80,80,96,0.12), border 0.5px rgba(248,248,242,0.07)      */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="relative block rounded-[2px] overflow-hidden group transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(80,80,96,0.12)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                minHeight: '175px',
              }}
            >
              {/* Title — Sans SemiBold 16px, top=19.5 */}
              <p
                className="absolute font-sans font-semibold text-kj-light"
                style={{ fontSize: '16px', lineHeight: '1.2', left: '19.5px', top: '19.5px' }}
              >
                {s.name}
              </p>

              {/* Description — Sans Light 13px, rgba(248,248,242,0.36), leading 1.55, top=51.5 */}
              {/* w=334 in Figma but we let it flex to card width minus padding */}
              <p
                className="absolute font-sans font-light overflow-hidden"
                style={{
                  fontSize: '13px',
                  lineHeight: '1.55',
                  color: 'rgba(248,248,242,0.36)',
                  left: '19.5px',
                  top: '51.5px',
                  right: '19.5px',
                  maxHeight: '60px',
                }}
              >
                {s.desc}
              </p>

              {/* Price — Mono Regular 12px, rgba(222,255,0,0.85), top=143.5 */}
              <p
                className="absolute font-mono font-normal"
                style={{
                  fontSize: '12px',
                  lineHeight: '1.4',
                  color: 'rgba(222,255,0,0.85)',
                  left: '19.5px',
                  top: '143.5px',
                }}
              >
                {s.price}
              </p>
            </Link>
          ))}
        </div>

        {/* Footer link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-1 mt-8 font-mono font-normal text-kj-lime hover:opacity-70 transition-opacity"
          style={{ fontSize: '13px' }}
        >
          Explore all services →
        </Link>

      </div>
    </section>
  )
}
