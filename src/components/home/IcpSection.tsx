import Link from 'next/link'

const ICP_CARDS = [
  {
    label: 'Scaling Founder',
    desc: '0–90 days post-raise. Everything your investors expect, without hiring for it.',
    primaryCta: "I'm a founder →",
    href: '/for/founders',
  },
  {
    label: 'First CMO',
    desc: 'Content, campaigns, and research at volume. Consistent quality whether you brief once or fifty times.',
    primaryCta: "I'm a CMO →",
    href: '/for/cmos',
  },
  {
    label: 'Chief of Staff',
    desc: "Ad-hoc tasks across any function. Brief it the way you'd brief your CEO.",
    primaryCta: "I'm a Chief of Staff →",
    href: '/for/chiefs-of-staff',
  },
  {
    label: 'COO / VP Operations',
    desc: 'One vendor. One SLA. ISO 27001 certified. Replace up to 12 vendor relationships.',
    primaryCta: "I'm a COO →",
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
        <h2
          id="icp-heading"
          className="font-sans font-normal text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-12"
        >
          Find your fit
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ICP_CARDS.map((card) => (
            <div
              key={card.href}
              className="relative flex flex-col overflow-hidden rounded-[2px]"
              style={{
                background: 'rgba(80,80,96,0.12)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                minHeight: '228px',
              }}
            >
              {/* Title */}
              <p
                className="absolute font-sans font-semibold text-[16px] text-kj-light leading-[1.2]"
                style={{ top: '19.5px', left: '19.5px' }}
              >
                {card.label}
              </p>

              {/* Description */}
              <p
                className="absolute font-sans font-light text-[13px] leading-[1.55]"
                style={{
                  color: 'rgba(248,248,242,0.36)',
                  top: '51.5px',
                  left: '19.5px',
                  right: '19.5px',
                }}
              >
                {card.desc}
              </p>

              {/* Primary CTA — ICP specific */}
              <Link
                href={card.href}
                className="absolute font-mono font-normal text-[12px] leading-[1.4] hover:opacity-70 transition-opacity"
                style={{
                  color: 'rgba(222,255,0,0.85)',
                  top: '183.5px',
                  left: '19.5px',
                }}
              >
                {card.primaryCta}
              </Link>

              {/* Secondary CTA — Start free */}
              <Link
                href="/signup"
                className="absolute font-sans font-semibold text-[13px] leading-[1.4] hover:opacity-60 transition-opacity"
                style={{
                  color: 'rgba(248,248,242,0.40)',
                  top: '208.5px',
                  left: '27.5px',
                }}
              >
                Start free →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
