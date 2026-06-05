// Pricing F5 — Pricing Variables | bg #212121

const VARS = [
  {
    num: '1',
    title: 'Service category',
    body: 'Research and intelligence briefs require more expert time per word than content briefs. Legal documents require jurisdiction-qualified reviewers — the category sets the base rate.',
  },
  {
    num: '2',
    title: 'Complexity tier',
    body: 'Standard, complex, and enterprise tiers. Your brief wizard categorises automatically — you see which tier applies before you approve anything.',
  },
  {
    num: '3',
    title: 'Delivery speed',
    body: 'Standard delivery is included in the base cost. Fast Track (50% shorter window) is available at +50% of the base Kojo cost, selected at brief approval.',
  },
  {
    num: '4',
    title: 'Output scope',
    body: 'Word count, sections, languages, competitors covered. The estimator updates in real time as you answer each brief question.',
  },
]

export default function PricingVariablesSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="pricing-vars-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          PRICING VARIABLES
        </p>

        <h2
          id="pricing-vars-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Four things determine what your brief costs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VARS.map((v) => (
            <div
              key={v.num}
              className="p-6"
              style={{
                background: 'rgba(80,80,96,0.08)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                borderRadius: '2px',
              }}
            >
              <p className="font-mono text-kj-lime mb-3" style={{ fontSize: '20px', fontWeight: 300 }}>{v.num}</p>
              <p className="font-sans font-semibold text-kj-light mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>{v.title}</p>
              <p className="font-sans font-light" style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.50)' }}>{v.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
