const ROWS = [
  { label: 'First output',        kojo: 'Hours',              freelancer: 'Days–weeks',           agency: '2–4 weeks',            ai: 'Minutes (needs editing)' },
  { label: 'Price vs. agency',    kojo: '35–40% lower',       freelancer: 'Variable',             agency: 'Baseline',             ai: 'Cheap (needs editing)' },
  { label: 'Revision rate',       kojo: 'Near zero',          freelancer: '3× average',           agency: '1–2 rounds',           ai: 'Heavy editing required' },
  { label: 'Reliability',         kojo: 'Platform SLA',       freelancer: 'Depends on individual',agency: 'Contract-dependent',   ai: 'Consistent, unverified' },
  { label: 'Brand voice',         kojo: 'Held by platform',   freelancer: 'Held by one person',   agency: 'Held by account team', ai: 'Off by default' },
  { label: 'Data security',       kojo: 'ISO 27001:2022',     freelancer: 'Unverified',           agency: 'Contract-dependent',   ai: 'Varies' },
]

export default function ComparisonSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="comparison-heading"
    >
      <div className="kj-container">
        <p className="font-mono text-[10px] text-kj-lime tracking-[3px] uppercase mb-4">
          WHY KOJO
        </p>
        <h2
          id="comparison-heading"
          className="font-sans font-regular text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-12"
        >
          Why Kojo instead of the alternatives
        </h2>

        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                {/* Empty label column */}
                <th className="text-left pb-4 w-[220px]" />

                {/* Kojo — highlighted header */}
                <th className="pb-0 text-left">
                  <div
                    className="px-4 pt-3 pb-4 text-left"
                    style={{
                      background: 'rgba(222,255,0,0.05)',
                      borderTop: '3px solid #DEFF00',
                    }}
                  >
                    <span className="font-mono font-semibold text-[13px] text-kj-lime">KOJO</span>
                  </div>
                </th>

                {['FREELANCER', 'AGENCY', 'AI TOOL ALONE'].map((h) => (
                  <th key={h} className="text-left pb-4 px-4">
                    <span className="font-mono text-[13px]" style={{ color: 'rgba(248,248,242,0.35)' }}>{h}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} style={{ borderTop: '1px solid rgba(80,80,96,0.14)' }}>
                  {/* Row label */}
                  <td className="py-3 pr-4">
                    <span className="font-sans text-[13px]" style={{ color: 'rgba(248,248,242,0.40)' }}>
                      {row.label}
                    </span>
                  </td>

                  {/* Kojo value — highlighted */}
                  <td
                    className="py-3 px-4"
                    style={{ background: 'rgba(222,255,0,0.05)' }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-[6px] h-[6px] rounded-full shrink-0"
                        style={{ background: '#DEFF00' }}
                      />
                      <span className="font-sans font-semibold text-[13px] text-kj-light">
                        {row.kojo}
                      </span>
                    </div>
                  </td>

                  {/* Other columns */}
                  {[row.freelancer, row.agency, row.ai].map((val) => (
                    <td key={val} className="py-3 px-4">
                      <span className="font-sans font-light text-[13px]" style={{ color: 'rgba(248,248,242,0.35)' }}>
                        {val}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 font-sans text-[11px] italic" style={{ color: 'rgba(248,248,242,0.20)' }}>
          No competitor brand names appear in Kojo copy. Categories only.
        </p>
      </div>
    </section>
  )
}
