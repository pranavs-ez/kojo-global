import Link from 'next/link'

const ROWS = [
  { label: 'First output',     kojo: 'Hours',             freelancer: 'Days–weeks',            agency: '2–4 weeks',           ai: 'Minutes (needs editing)' },
  { label: 'Price vs. agency', kojo: '35–40% lower',      freelancer: 'Variable',              agency: 'Baseline',            ai: 'Cheap (needs editing)' },
  { label: 'Revision rate',    kojo: 'Near zero',         freelancer: '3× average',            agency: '1–2 rounds',          ai: 'Heavy editing required' },
  { label: 'Reliability',      kojo: 'Platform SLA',      freelancer: 'Depends on individual', agency: 'Contract-dependent',  ai: 'Consistent, unverified' },
  { label: 'Brand voice',      kojo: 'Held by platform',  freelancer: 'Held by one person',    agency: 'Held by account team',ai: 'Off by default' },
  { label: 'Data security',    kojo: 'ISO 27001:2022',    freelancer: 'Unverified',            agency: 'Contract-dependent',  ai: 'Varies' },
]

export default function ComparisonSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="comparison-heading"
    >
      <div className="kj-container">
        <p className="font-mono font-normal text-kj-lime uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '3px' }}>
          WHY KOJO
        </p>
        <h2
          id="comparison-heading"
          className="font-sans font-normal text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-12"
        >
          Why Kojo instead of the alternatives
        </h2>

        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="text-left pb-0 w-[220px]" />
                {/* Kojo — highlighted with lime accent bar */}
                <th className="pb-0 text-left">
                  <div style={{ background: 'rgba(222,255,0,0.05)', borderTop: '3px solid #DEFF00' }} className="px-4 pt-3 pb-3">
                    <span className="font-mono font-semibold text-[13px] text-kj-lime">KOJO</span>
                  </div>
                </th>
                {['FREELANCER', 'AGENCY', 'AI TOOL ALONE'].map(h => (
                  <th key={h} className="text-left pb-3 px-4">
                    <span className="font-mono text-[13px]" style={{ color: 'rgba(248,248,242,0.35)' }}>{h}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} style={{ borderTop: '1px solid rgba(80,80,96,0.14)' }}>
                  <td className="py-3 pr-4">
                    <span className="font-sans text-[13px]" style={{ color: 'rgba(248,248,242,0.40)' }}>{row.label}</span>
                  </td>
                  <td className="py-3 px-4" style={{ background: 'rgba(222,255,0,0.05)' }}>
                    <div className="flex items-center gap-2">
                      <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: '#DEFF00' }} />
                      <span className="font-sans font-semibold text-[13px] text-kj-light">{row.kojo}</span>
                    </div>
                  </td>
                  {[row.freelancer, row.agency, row.ai].map((val, i) => (
                    <td key={i} className="py-3 px-4">
                      <span className="font-sans font-light text-[13px]" style={{ color: 'rgba(248,248,242,0.35)' }}>{val}</span>
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

        {/* CTA — Figma F7 Start Free CTA (601:86): Mono SemiBold 15px, lime bg, centred */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-[15px] text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all"
            style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '15px', paddingBottom: '15px' }}
          >
            Start free →
          </Link>
        </div>
      </div>
    </section>
  )
}
