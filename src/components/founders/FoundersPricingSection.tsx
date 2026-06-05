// Founders F7 — Pricing | bg #181818
import Link from 'next/link'

const ITEMS = [
  { brief: 'Board memo',          kojo: '60,000', usd: '$60'  },
  { brief: 'Competitive snapshot', kojo: '95,000', usd: '$95'  },
  { brief: 'Press release',       kojo: '40,000', usd: '$40'  },
  { brief: 'Investor update',     kojo: '40,000', usd: '$40'  },
]

export default function FoundersPricingSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="founders-pricing-heading"
    >
      <div className="kj-container">

        <h2
          id="founders-pricing-heading"
          className="font-sans font-normal text-kj-light mb-3"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Your first 100,000 Kojo ($100) is free.
        </h2>

        <p className="font-sans font-normal mb-10"
          style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.50)' }}>
          No card required. Enough for a full competitive snapshot, a press release, or three investor update emails.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {ITEMS.map((item) => (
            <div
              key={item.brief}
              className="p-5 flex flex-col"
              style={{
                background: 'rgba(80,80,96,0.08)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                borderRadius: '2px',
              }}
            >
              <p className="font-sans font-semibold text-kj-light mb-3" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                {item.brief}
              </p>
              <p className="font-mono" style={{ fontSize: '20px', color: '#DEFF00', fontWeight: 600, lineHeight: 1, marginBottom: '2px' }}>
                {item.kojo}
              </p>
              <p className="font-mono font-light" style={{ fontSize: '12px', color: 'rgba(248,248,242,0.35)' }}>
                {item.usd}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap text-[13px] sm:text-[15px] px-8 py-[15px]"
          >
            Start free →
          </Link>
        </div>

      </div>
    </section>
  )
}
