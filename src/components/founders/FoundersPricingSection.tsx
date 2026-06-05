// Founders F7 — Pricing | bg #181818
import Link from 'next/link'

const ITEMS = [
  { brief: 'Board memo',           kojo: '60,000 Kojo', usd: '$60' },
  { brief: 'Competitive snapshot', kojo: '95,000 Kojo', usd: '$95' },
  { brief: 'Press release',        kojo: '40,000 Kojo', usd: '$40' },
  { brief: 'Investor update',      kojo: '40,000 Kojo', usd: '$40' },
]

const TABLE_ROWS = [
  { brief: 'Board memo',           kojo: '60,000', usd: '$60' },
  { brief: 'Competitive snapshot', kojo: '95,000', usd: '$95' },
  { brief: 'Press release',        kojo: '40,000', usd: '$40' },
  { brief: 'Investor update',      kojo: '40,000', usd: '$40' },
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

        {/* 4 highlight cards */}
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

        {/* Pricing table */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 mb-10">
          <table className="w-full border-collapse" style={{ minWidth: '360px' }}>
            <thead>
              <tr style={{ background: 'rgba(80,80,96,0.10)' }}>
                {['BRIEF', 'KOJO', 'USD'].map((h, i) => (
                  <th key={h} className="text-left font-mono font-normal"
                    style={{
                      fontSize: '10px', letterSpacing: '2px',
                      color: i === 1 ? '#DEFF00' : 'rgba(248,248,242,0.35)',
                      padding: '12px 16px',
                      borderBottom: '1px solid rgba(80,80,96,0.25)',
                    }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((r) => (
                <tr key={r.brief} style={{ borderBottom: '1px solid rgba(80,80,96,0.12)' }}>
                  <td className="font-sans" style={{ fontSize: '13px', color: 'rgba(248,248,242,0.75)', padding: '13px 16px' }}>{r.brief}</td>
                  <td className="font-mono text-kj-lime font-normal" style={{ fontSize: '13px', padding: '13px 16px' }}>{r.kojo}</td>
                  <td className="font-mono font-light" style={{ fontSize: '13px', color: 'rgba(248,248,242,0.50)', padding: '13px 16px' }}>{r.usd}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
