// LP Post-Raise F4 — The Anchor | bg #1e1e1e
// Comparison graphic + table

const COMPARISONS = [
  {
    label: 'Board memo',
    agency: { price: '$2,000–$5,000', time: '1–2 weeks' },
    kojo:   { price: '$60',           time: '8 hours'   },
  },
  {
    label: 'Competitive landscape',
    agency: { price: '$8,000–$15,000', time: '3–4 weeks' },
    kojo:   { price: '$250',           time: '24 hours'  },
  },
  {
    label: 'Press release',
    agency: { price: '$800–$1,500', time: '3–5 days' },
    kojo:   { price: '$40',         time: '4 hours'  },
  },
]

function ComparisonGraphic() {
  return (
    <div
      className="overflow-x-auto mb-10"
      style={{
        background: '#F5F5F0',
        border: '1px solid #DDD',
        borderRadius: '2px',
        padding: '20px',
        maxWidth: '680px',
        margin: '0 auto 40px',
      }}
    >
      <div className="flex flex-col gap-4">
        {COMPARISONS.map((c) => (
          <div key={c.label}>
            <p className="font-mono uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '1px', color: '#888' }}>
              {c.label}
            </p>
            <div className="flex items-center gap-4">
              {/* Agency */}
              <div
                className="flex-1 p-3"
                style={{ background: '#EBEBEB', border: '1px solid #CCC', borderRadius: '2px' }}
              >
                <p className="font-mono uppercase mb-1" style={{ fontSize: '10px', color: '#888' }}>AGENCY</p>
                <p className="font-sans" style={{ fontSize: '18px', color: '#888', fontWeight: 700, textDecoration: 'line-through' }}>
                  {c.agency.price}
                </p>
                <p className="font-sans font-light" style={{ fontSize: '12px', color: '#AAA' }}>{c.agency.time}</p>
              </div>

              <span className="font-sans" style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 700, flexShrink: 0 }}>vs</span>

              {/* Kojo */}
              <div
                className="flex-1 p-3"
                style={{ background: '#1A1A1A', borderRadius: '2px' }}
              >
                <p className="font-mono uppercase mb-1" style={{ fontSize: '10px', color: '#DEFF00' }}>KOJO</p>
                <p className="font-sans" style={{ fontSize: '22px', color: '#F5F5F0', fontWeight: 700 }}>
                  {c.kojo.price}
                </p>
                <p className="font-mono" style={{ fontSize: '12px', color: '#DEFF00' }}>{c.kojo.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LpAnchorSection() {
  return (
    <section
      style={{ background: '#1e1e1e', padding: '72px 0' }}
      aria-labelledby="lp-anchor-heading"
    >
      <div className="kj-container">

        <h2
          id="lp-anchor-heading"
          className="font-sans font-normal text-kj-light mb-10"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          What you&apos;ve been paying for instead.
        </h2>

        <ComparisonGraphic />

        {/* Plain table for SEO */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 mb-6">
          <table className="w-full border-collapse" style={{ minWidth: '400px' }}>
            <thead>
              <tr style={{ background: 'rgba(80,80,96,0.10)' }}>
                {['', 'AGENCY', 'KOJO'].map((h, i) => (
                  <th key={h} className="text-left font-mono font-normal"
                    style={{ fontSize: '10px', letterSpacing: '2px', color: i === 2 ? '#DEFF00' : 'rgba(248,248,242,0.35)', padding: '12px 16px', borderBottom: '1px solid rgba(80,80,96,0.25)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((r) => (
                <tr key={r.label} style={{ borderBottom: '1px solid rgba(80,80,96,0.14)' }}>
                  <td className="font-sans font-semibold text-kj-light" style={{ fontSize: '13px', padding: '13px 16px' }}>{r.label}</td>
                  <td className="font-sans font-light" style={{ fontSize: '13px', color: 'rgba(248,248,242,0.35)', padding: '13px 16px', textDecoration: 'line-through' }}>
                    {r.agency.price} · {r.agency.time}
                  </td>
                  <td className="font-sans font-normal text-kj-light" style={{ fontSize: '13px', padding: '13px 16px' }}>
                    {r.kojo.price} · {r.kojo.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-sans font-normal" style={{ fontSize: '14px', color: 'rgba(248,248,242,0.40)' }}>
          No retainer. No kickoff call. Pay for the deliverable.
        </p>

      </div>
    </section>
  )
}
