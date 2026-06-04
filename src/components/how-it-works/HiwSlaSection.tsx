// HIW F6 — Delivery SLAs | bg #1e1e1e
// SLA table: Brief type | Standard | Fast Track

const SLA_ROWS = [
  { type: 'Blog post (800–1,500 words)',           standard: '4 hours',  fast: '2 hours'  },
  { type: 'Press release',                         standard: '4 hours',  fast: '2 hours'  },
  { type: 'Email campaign (3-part)',               standard: '8 hours',  fast: '4 hours'  },
  { type: 'Competitive snapshot (3 competitors)',  standard: '8 hours',  fast: '4 hours'  },
  { type: 'Full competitive landscape',            standard: '24 hours', fast: '12 hours' },
  { type: 'Investor deck (copy only)',             standard: '24 hours', fast: '12 hours' },
  { type: 'Full investor deck (design + copy)',    standard: '48 hours', fast: '24 hours' },
  { type: 'NDA or legal document',                 standard: '4 hours',  fast: '2 hours'  },
  { type: 'Employment agreement',                  standard: '6 hours',  fast: '3 hours'  },
]

export default function HiwSlaSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="hiw-sla-heading"
    >
      <div className="kj-container">

        {/* Eyebrow */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          SPEED
        </p>

        {/* H2 */}
        <h2
          id="hiw-sla-heading"
          className="font-sans font-normal text-kj-light mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Fast isn't a promise. It's an SLA.
        </h2>

        {/* SLA statement */}
        <p
          className="font-sans font-normal mb-10"
          style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}
        >
          10-minute acknowledgement SLA on every brief.
        </p>

        {/* Table — horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full border-collapse" style={{ minWidth: '560px' }}>
            <thead>
              <tr style={{ background: 'rgba(80,80,96,0.12)' }}>
                <th
                  className="text-left font-mono font-normal"
                  style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(248,248,242,0.35)', padding: '14px 16px', borderBottom: '1px solid rgba(80,80,96,0.25)' }}
                >
                  BRIEF TYPE
                </th>
                <th
                  className="text-left font-mono font-normal"
                  style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(248,248,242,0.35)', padding: '14px 16px', borderBottom: '1px solid rgba(80,80,96,0.25)' }}
                >
                  STANDARD
                </th>
                <th
                  className="text-left font-mono font-normal"
                  style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(248,248,242,0.35)', padding: '14px 16px', borderBottom: '1px solid rgba(80,80,96,0.25)' }}
                >
                  FAST TRACK
                </th>
              </tr>
            </thead>
            <tbody>
              {SLA_ROWS.map((row) => (
                <tr key={row.type} style={{ borderBottom: '1px solid rgba(80,80,96,0.14)' }}>
                  <td className="font-sans" style={{ fontSize: '14px', color: 'rgba(248,248,242,0.70)', padding: '14px 16px' }}>
                    {row.type}
                  </td>
                  <td className="font-mono font-normal text-kj-light" style={{ fontSize: '13px', padding: '14px 16px' }}>
                    {row.standard}
                  </td>
                  <td className="font-mono font-normal text-kj-lime" style={{ fontSize: '13px', padding: '14px 16px' }}>
                    {row.fast}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fast Track note */}
        <p
          className="font-sans font-light mt-6"
          style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.36)', maxWidth: '760px' }}
        >
          <span className="text-kj-light font-normal">Fast Track:</span> Parallel processing — your brief routes to multiple experts simultaneously, compressing the delivery window. Available as an add-on at brief approval (+50% on the base Kojo cost).
        </p>

      </div>
    </section>
  )
}
