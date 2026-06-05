// LP Post-Raise F4 — Anchor | bg #1e1e1e
// Row-based agency vs Kojo comparison

const ROWS = [
  {
    label: 'BOARD MEMO',
    agency: { price: '$2,000–$5,000', time: '1–2 weeks' },
    kojo:   { price: '$60',           time: '8 hours'   },
  },
  {
    label: 'COMPETITIVE LANDSCAPE',
    agency: { price: '$8,000–$15,000', time: '3–4 weeks' },
    kojo:   { price: '$250',           time: '24 hours'  },
  },
  {
    label: 'PRESS RELEASE',
    agency: { price: '$800–$1,500', time: '3–5 days' },
    kojo:   { price: '$40',         time: '4 hours'  },
  },
]

export default function LpAnchorSection() {
  return (
    <section
      className="kj-section-border"
      style={{ background: "#1e1e1e", padding: "72px 0" }}
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

        <div className="flex flex-col gap-5">
          {ROWS.map((row) => (
            <div key={row.label}>
              {/* Row label */}
              <p className="font-mono uppercase mb-3"
                style={{ fontSize: '11px', letterSpacing: '1.5px', color: 'rgba(248,248,242,0.35)' }}>
                {row.label}
              </p>
              {/* Two panels + vs */}
              <div className="flex items-stretch gap-4">
                {/* Agency panel */}
                <div
                  className="flex-1 p-4 sm:p-5"
                  style={{
                    background: 'rgba(80,80,96,0.08)',
                    border: '0.5px solid rgba(248,248,242,0.07)',
                    borderRadius: '2px',
                  }}
                >
                  <p className="font-mono uppercase mb-2"
                    style={{ fontSize: '9px', letterSpacing: '1.5px', color: 'rgba(248,248,242,0.30)' }}>
                    AGENCY
                  </p>
                  <p className="font-sans font-semibold"
                    style={{ fontSize: 'clamp(16px, 3vw, 22px)', color: 'rgba(248,248,242,0.35)', textDecoration: 'line-through', lineHeight: 1.2, marginBottom: '4px' }}>
                    {row.agency.price}
                  </p>
                  <p className="font-sans font-light"
                    style={{ fontSize: '12px', color: 'rgba(248,248,242,0.25)' }}>
                    {row.agency.time}
                  </p>
                </div>

                {/* vs */}
                <div className="flex items-center shrink-0">
                  <span className="font-sans font-semibold"
                    style={{ fontSize: '13px', color: 'rgba(248,248,242,0.30)' }}>
                    vs
                  </span>
                </div>

                {/* Kojo panel */}
                <div
                  className="flex-1 p-4 sm:p-5"
                  style={{
                    background: '#1A1A1A',
                    border: '0.5px solid rgba(248,248,242,0.08)',
                    borderTop: '1px solid #DEFF00',
                    borderRadius: '2px',
                  }}
                >
                  <p className="font-mono uppercase mb-2"
                    style={{ fontSize: '9px', letterSpacing: '1.5px', color: '#DEFF00' }}>
                    KOJO
                  </p>
                  <p className="font-sans font-semibold"
                    style={{ fontSize: 'clamp(20px, 4vw, 32px)', color: '#F5F5F0', lineHeight: 1.2, marginBottom: '4px' }}>
                    {row.kojo.price}
                  </p>
                  <p className="font-mono font-normal"
                    style={{ fontSize: '12px', color: '#DEFF00' }}>
                    {row.kojo.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-sans font-light mt-8"
          style={{ fontSize: '13px', color: 'rgba(248,248,242,0.35)' }}>
          No retainer. No kickoff call. Pay for the deliverable.
        </p>

      </div>
    </section>
  )
}
