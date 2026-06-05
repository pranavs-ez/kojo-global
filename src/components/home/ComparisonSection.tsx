// Comparison (S7) — "Why Kojo instead of the alternatives"
// Figma nodes 167:2506, 167:2593–167:2641 | Background: #181818

import Link from 'next/link'

const ROWS = [
  { label: 'First output',     kojo: 'Hours',             freelancer: 'Days–weeks',            agency: '2–4 weeks',           ai: 'Minutes (needs editing)' },
  { label: 'Price vs. agency', kojo: '35–40% lower',      freelancer: 'Variable',              agency: 'Baseline',            ai: 'Cheap (needs editing)' },
  { label: 'Revision rate',    kojo: 'Near zero',         freelancer: '3× average',            agency: '1–2 rounds',          ai: 'Heavy editing required' },
  { label: 'Reliability',      kojo: 'Platform SLA',      freelancer: 'Depends on individual', agency: 'Contract-dependent',  ai: 'Consistent, unverified' },
  { label: 'Brand voice',      kojo: 'Held by platform',  freelancer: 'Held by one person',    agency: 'Held by account team',ai: 'Off by default' },
  { label: 'Data security',    kojo: 'ISO 27001:2022',    freelancer: 'Unverified',            agency: 'Contract-dependent',  ai: 'Varies' },
]

const COL_HEADERS = ['KOJO', 'FREELANCER', 'AGENCY', 'AI TOOL ALONE']

export default function ComparisonSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="comparison-heading"
    >
      <div className="kj-container">

        {/* Eyebrow — 199:10 "WHY KOJO" */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          WHY KOJO
        </p>

        {/* H2 */}
        <h2
          id="comparison-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Why Kojo instead of the alternatives
        </h2>

        {/* ── Comparison table ─────────────────────────────────────────── */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                {/* Label column header — empty */}
                <th className="text-left pb-0 w-[200px]" />
                {/* KOJO — highlighted with lime accent top bar */}
                <th className="pb-0 text-left">
                  <div
                    className="px-4 pt-3 pb-3"
                    style={{
                      background: 'rgba(222,255,0,0.05)',
                      borderTop: '3px solid #DEFF00',
                    }}
                  >
                    <span className="font-mono font-semibold text-kj-lime" style={{ fontSize: '13px' }}>KOJO</span>
                  </div>
                </th>
                {/* Other columns */}
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
                  {/* Row label */}
                  <td className="py-3 pr-4">
                    <span className="font-sans text-[13px]" style={{ color: 'rgba(248,248,242,0.40)' }}>
                      {row.label}
                    </span>
                  </td>
                  {/* KOJO value — lime dot + semibold text + tinted bg */}
                  <td className="py-3 px-4" style={{ background: 'rgba(222,255,0,0.05)' }}>
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded-full shrink-0"
                        style={{ width: '6px', height: '6px', background: '#DEFF00' }}
                      />
                      <span className="font-sans font-semibold text-[13px] text-kj-light">{row.kojo}</span>
                    </div>
                  </td>
                  {/* Competitor values */}
                  {[row.freelancer, row.agency, row.ai].map((val, i) => (
                    <td key={i} className="py-3 px-4">
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

        {/* CTA — Figma 601:86 centred "Start free →" */}
        <div className="mt-8 flex justify-center">
          <Link
            href="https://app.kojo.global"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all"
            style={{ fontSize: '15px', paddingLeft: '32px', paddingRight: '32px', paddingTop: '15px', paddingBottom: '15px' }}
          >
            Start free →
          </Link>
        </div>

      </div>
    </section>
  )
}
