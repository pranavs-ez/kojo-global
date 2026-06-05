// Pricing F3 — Sample Brief Costs | bg #181818
// Estimator graphic + 15-row pricing table

const ROWS = [
  { brief: 'Blog post (1,000 words)',              kojo: '40,000',  usd: '$40',   agency: '$400–$800',        time: '3–5 days',    delivery: '4 hours'  },
  { brief: 'Thought leadership article (1,500w)',  kojo: '60,000',  usd: '$60',   agency: '$600–$1,200',      time: '5–7 days',    delivery: '6 hours'  },
  { brief: 'Email campaign (3-part sequence)',     kojo: '80,000',  usd: '$80',   agency: '$1,200–$2,400',    time: '1 week',      delivery: '8 hours'  },
  { brief: 'Press release',                        kojo: '40,000',  usd: '$40',   agency: '$800–$1,500',      time: '3–5 days',    delivery: '4 hours'  },
  { brief: 'Case study / customer story',          kojo: '80,000',  usd: '$80',   agency: '$1,000–$2,000',    time: '1–2 weeks',   delivery: '8 hours'  },
  { brief: 'Landing page copy',                    kojo: '50,000',  usd: '$50',   agency: '$800–$2,000',      time: '3–7 days',    delivery: '6 hours'  },
  { brief: 'Investor update email',                kojo: '40,000',  usd: '$40',   agency: '$500–$1,200',      time: '3–5 days',    delivery: '4 hours'  },
  { brief: 'Board memo',                           kojo: '60,000',  usd: '$60',   agency: '$2,000–$5,000',    time: '1–2 weeks',   delivery: '8 hours'  },
  { brief: 'Competitive snapshot (3 competitors)', kojo: '95,000',  usd: '$95',   agency: '$2,000–$4,000',    time: '1–2 weeks',   delivery: '8 hours'  },
  { brief: 'Full competitive landscape',           kojo: '250,000', usd: '$250',  agency: '$8,000–$15,000',   time: '3–4 weeks',   delivery: '24 hours' },
  { brief: 'Investor deck (copy only)',            kojo: '200,000', usd: '$200',  agency: '$3,000–$6,000',    time: '2 weeks',     delivery: '24 hours' },
  { brief: 'Full investor deck (design + copy)',   kojo: '500,000', usd: '$500',  agency: '$8,000–$20,000',   time: '3–4 weeks',   delivery: '48 hours' },
  { brief: 'NDA template',                         kojo: '30,000',  usd: '$30',   agency: '$500–$1,500',      time: '1–3 days',    delivery: '2 hours'  },
  { brief: 'Employment agreement',                 kojo: '50,000',  usd: '$50',   agency: '$800–$2,000',      time: '1–3 days',    delivery: '4 hours'  },
  { brief: 'Translation (1,000 words)',            kojo: '25,000',  usd: '$25',   agency: '$200–$500',        time: '2–3 days',    delivery: '4 hours'  },
]

function EstimatorWidget() {
  return (
    <div
      className="overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '680px',
        background: '#F5F5F0',
        border: '1px solid #DDD',
        borderRadius: '2px',
        padding: '20px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        margin: '0 auto',
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono uppercase" style={{ fontSize: '11px', letterSpacing: '1px', color: '#888' }}>Brief estimator</span>
        <span className="font-mono" style={{ fontSize: '10px', color: '#AAA' }}>Updates as you answer</span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="font-sans" style={{ fontSize: '11px', color: '#888' }}>Brief type:</span>
        <span className="font-sans"
          style={{ fontSize: '11px', color: '#1A1A1A', background: '#F0F0F0', borderRadius: '2px', padding: '4px 12px' }}>
          Competitive landscape (full)
        </span>
      </div>

      <div style={{ height: '1px', background: '#EEE', marginBottom: '4px' }} />

      {[
        { label: 'Kojo cost',         value: '250,000 Kojo', size: '18px', bold: true },
        { label: 'USD equivalent',    value: '$250',         size: '18px', bold: true },
        { label: 'Agency equivalent', value: '$8,000–$15,000 · 3–4 weeks', size: '13px', bold: false, muted: true },
      ].map((row) => (
        <div key={row.label} className="flex justify-between items-center" style={{ minHeight: '40px', padding: '0 4px' }}>
          <span className="font-sans" style={{ fontSize: '11px', color: '#888' }}>{row.label}</span>
          <span className="font-sans"
            style={{
              fontSize: row.size,
              color: row.muted ? '#AAA' : '#1A1A1A',
              fontWeight: row.bold ? 700 : 400,
              textDecoration: row.muted ? 'line-through' : 'none',
            }}>
            {row.value}
          </span>
        </div>
      ))}

      <div style={{ background: '#DEFF00', borderRadius: '2px', padding: '8px 12px', marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
        <span className="font-sans" style={{ fontSize: '11px', color: '#1A1A1A', fontWeight: 600 }}>Standard delivery:</span>
        <span className="font-sans" style={{ fontSize: '13px', color: '#1A1A1A', fontWeight: 700 }}>24 hours</span>
      </div>

      <p className="font-mono text-center" style={{ fontSize: '9px', color: '#AAA', marginTop: '8px' }}>
        Estimate updates with each question you answer
      </p>
    </div>
  )
}

export default function PricingSampleSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="pricing-sample-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          WHAT IT COSTS IN PRACTICE
        </p>

        <h2
          id="pricing-sample-heading"
          className="font-sans font-normal text-kj-light mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Representative brief costs
        </h2>

        <p className="font-sans font-normal mb-10"
          style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)', maxWidth: '860px' }}>
          Agency equivalent costs are based on published agency rate cards. Kojo estimates are starting prices — actual cost is calculated during your brief. You see the exact amount before approving.
        </p>

        {/* Estimator graphic */}
        <div className="mb-10">
          <EstimatorWidget />
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full border-collapse" style={{ minWidth: '780px' }}>
            <thead>
              <tr style={{ background: 'rgba(80,80,96,0.10)' }}>
                {['BRIEF TYPE', 'KOJO', 'USD', 'AGENCY COST', 'AGENCY TIME', 'KOJO DELIVERY'].map((h, i) => (
                  <th key={h} className="text-left font-mono font-normal"
                    style={{
                      fontSize: '10px', letterSpacing: '2px',
                      color: i === 1 ? '#DEFF00' : 'rgba(248,248,242,0.35)',
                      padding: '14px 12px',
                      borderBottom: '1px solid rgba(80,80,96,0.25)',
                    }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.brief} style={{ borderBottom: '1px solid rgba(80,80,96,0.12)' }}>
                  <td className="font-sans" style={{ fontSize: '13px', color: 'rgba(248,248,242,0.75)', padding: '13px 12px' }}>{r.brief}</td>
                  <td className="font-mono text-kj-light font-normal" style={{ fontSize: '12px', padding: '13px 12px' }}>{r.kojo}</td>
                  <td className="font-mono text-kj-light font-normal" style={{ fontSize: '12px', padding: '13px 12px' }}>{r.usd}</td>
                  <td className="font-sans font-light" style={{ fontSize: '12px', color: 'rgba(248,248,242,0.35)', padding: '13px 12px', textDecoration: 'line-through' }}>{r.agency}</td>
                  <td className="font-sans font-light" style={{ fontSize: '12px', color: 'rgba(248,248,242,0.35)', padding: '13px 12px' }}>{r.time}</td>
                  <td className="font-mono text-kj-lime font-normal" style={{ fontSize: '12px', padding: '13px 12px' }}>{r.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
