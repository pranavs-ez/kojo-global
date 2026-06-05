// Pricing F6 — Delivery Assurance | bg #121212

const COVERS = [
  'Factual accuracy',
  'Brand voice alignment',
  'Format compliance',
  'Completeness relative to brief',
]

export default function PricingAssuranceSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#121212' }}
      aria-labelledby="pricing-assurance-heading"
    >
      <div className="kj-container flex flex-col items-center text-center">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          THE GUARANTEE
        </p>

        <h2
          id="pricing-assurance-heading"
          className="font-sans font-normal text-kj-light mb-6"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '760px' }}
        >
          Not what you expected? We fix it or refund it.
        </h2>

        <p className="font-sans font-normal mb-10"
          style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(248,248,242,0.55)', maxWidth: '680px' }}>
          Every brief is covered by our output guarantee. If the deliverable does not meet the standard described in your brief, we fix it at no additional cost. If we cannot fix it, we refund the Kojo you spent. No arguments. No review process. No conditions.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-10">
          <div className="text-left">
            <p className="font-mono font-normal text-kj-lime uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '2px' }}>
              THE GUARANTEE COVERS
            </p>
            <div className="flex flex-col gap-2">
              {COVERS.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <span className="text-kj-lime font-mono" style={{ fontSize: '12px' }}>✓</span>
                  <span className="font-sans font-normal text-kj-light" style={{ fontSize: '14px', lineHeight: '1.5' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-left" style={{ maxWidth: '320px' }}>
            <p className="font-mono font-normal text-kj-lime uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '2px' }}>
              COVERAGE
            </p>
            <p className="font-sans font-normal text-kj-light mb-1" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <strong>First project:</strong> Delivery Assurance included free.
            </p>
            <p className="font-sans font-normal" style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}>
              <strong className="text-kj-light">Subsequent briefs:</strong> Available as add-on at +15% of base Kojo cost.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
