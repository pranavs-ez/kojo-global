import Link from 'next/link'

const ICP_CARDS = [
  {
    label: 'Scaling Founder',
    desc: '0–90 days post-raise. Everything your investors expect, without hiring for it.',
    cta: "I'm a founder",
    href: '/for/founders',
  },
  {
    label: 'First CMO',
    desc: 'Content, campaigns, and research at volume. Consistent quality whether you brief once or fifty times.',
    cta: "I'm a CMO",
    href: '/for/cmos',
  },
  {
    label: 'Chief of Staff',
    desc: 'Ad-hoc tasks across any function. Brief it the way you\'d brief your CEO.',
    cta: "I'm a Chief of Staff",
    href: '/for/chiefs-of-staff',
  },
  {
    label: 'COO / VP Operations',
    desc: 'One vendor. One SLA. ISO 27001 certified. Replace up to 12 vendor relationships.',
    cta: "I'm a COO",
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
          className="font-sans font-regular text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-12"
        >
          Find your fit
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ICP_CARDS.map((card) => (
            <div
              key={card.href}
              className="flex flex-col justify-between gap-4 p-5 rounded-[2px] border-[0.3px] border-kj-light/[0.07] bg-kj-slate/[0.12] min-h-[220px]"
            >
              <div className="flex flex-col gap-3">
                <p className="font-sans font-semibold text-[16px] text-kj-light">
                  {card.label}
                </p>
                <p className="font-sans font-light text-[13px] text-kj-light/55 leading-[1.6]">
                  {card.desc}
                </p>
              </div>
              <Link
                href={card.href}
                className="inline-flex items-center gap-1 font-mono text-[13px] text-kj-lime hover:opacity-70 transition-opacity"
              >
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
