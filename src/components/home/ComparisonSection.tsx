const ROWS = [
  {
    label: 'First output',
    kojo: 'Hours',
    freelancer: 'Days–weeks',
    agency: '2–4 weeks',
    ai: 'Minutes (but unusable)',
  },
  {
    label: 'Price vs. agency',
    kojo: '35–40% lower',
    freelancer: 'Variable',
    agency: 'Baseline',
    ai: 'Cheap (but requires editing)',
  },
  {
    label: 'Revision rate',
    kojo: 'Near zero',
    freelancer: '3× average',
    agency: '1–2 rounds',
    ai: 'Heavy editing required',
  },
  {
    label: 'Reliability',
    kojo: 'Platform SLA',
    freelancer: 'Depends on individual',
    agency: 'Contract-dependent',
    ai: 'Consistent, unverified',
  },
  {
    label: 'Brand voice',
    kojo: 'Held by platform',
    freelancer: 'Held by one person',
    agency: 'Held by account team',
    ai: 'Off by default',
  },
  {
    label: 'Data security',
    kojo: 'ISO 27001:2022',
    freelancer: 'Unverified',
    agency: 'Contract-dependent',
    ai: 'Varies',
  },
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
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="text-left pb-3 w-[220px]">
                  <span className="font-sans text-[13px] text-kj-light/40">Feature</span>
                </th>
                {/* Kojo column header — highlighted */}
                <th className="pb-0 relative">
                  <div
                    className="relative px-4 pt-0 pb-3 text-left"
                    style={{
                      background: 'rgba(222,255,0,0.05)',
                      borderTop: '3px solid #DEFF00',
                    }}
                  >
                    <span className="font-mono font-medium text-[13px] text-kj-lime">KOJO</span>
                  </div>
                </th>
                <th className="text-left pb-3 px-4">
                  <span className="font-mono text-[13px] text-kj-light/40">FREELANCER</span>
                </th>
                <th className="text-left pb-3 px-4">
                  <span className="font-mono text-[13px] text-kj-light/40">AGENCY</span>
                </th>
                <th className="text-left pb-3 px-4">
                  <span className="font-mono text-[13px] text-kj-light/40">AI TOOL ALONE</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} style={{ borderTop: '1px solid rgba(80,80,96,0.14)' }}>
                  <td className="py-3 pr-4">
                    <span className="font-sans text-[13px] text-kj-light/40">{row.label}</span>
                  </td>
                  {/* Kojo value — highlighted column */}
                  <td
                    className="py-3 px-4"
                    style={{ background: 'rgba(222,255,0,0.05)' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-[6px] h-[6px] rounded-full bg-kj-lime shrink-0" />
                      <span className="font-sans font-semibold text-[13px] text-kj-light">
                        {row.kojo}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-sans font-light text-[13px] text-kj-light/40">{row.freelancer}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-sans font-light text-[13px] text-kj-light/40">{row.agency}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-sans font-light text-[13px] text-kj-light/40">{row.ai}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-sans text-[11px] text-kj-light/25 italic">
          No competitor brand names appear in Kojo copy. Categories only.
        </p>
      </div>
    </section>
  )
}
