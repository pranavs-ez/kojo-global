// Pricing F2 — Credit System | bg #212121
// Two-column: text + credit widget | pack table below

const PACKS = [
  { name: 'Starter',  kojo: '200,000',    usd: '$200',    best: 'One or two briefs to test quality',                          highlight: false },
  { name: 'Growth ✦', kojo: '500,000',    usd: '$500',    best: '6–8 briefs per month, mixed categories',                    highlight: true  },
  { name: 'Scale',    kojo: '1,500,000',  usd: '$1,500',  best: 'High-volume content or research teams',                     highlight: false },
  { name: 'Enterprise', kojo: 'Custom',   usd: 'Custom',  best: 'Dedicated capacity + custom SLAs',                         highlight: false },
]

function CreditWidget() {
  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '440px',
        background: '#1E1E1E',
        border: '0.5px solid rgba(248,248,242,0.12)',
        borderRadius: '2px',
        padding: '24px',
      }}
    >
      <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,248,242,0.40)', marginBottom: '8px' }}>KOJO CREDITS</p>
      <p className="font-sans" style={{ fontSize: '28px', color: '#F5F5F0', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>1,000 Kojo = $1</p>

      <div style={{ height: '1px', background: 'rgba(80,80,96,0.25)', marginBottom: '16px' }} />

      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="font-mono" style={{ fontSize: '10px', color: 'rgba(248,248,242,0.40)', marginBottom: '4px' }}>Current balance</p>
          <p className="font-mono" style={{ fontSize: '20px', color: '#DEFF00', fontWeight: 700, lineHeight: 1.1 }}>100,000 Kojo</p>
          <p className="font-mono" style={{ fontSize: '11px', color: 'rgba(80,80,96,0.60)', marginTop: '2px' }}>$100 equivalent</p>
        </div>
        <div className="text-right">
          <p className="font-mono" style={{ fontSize: '10px', color: 'rgba(248,248,242,0.40)', marginBottom: '4px' }}>USD value</p>
          <p className="font-sans" style={{ fontSize: '20px', color: '#F5F5F0', fontWeight: 700, lineHeight: 1.1 }}>$100</p>
          <p className="font-mono" style={{ fontSize: '11px', color: 'rgba(80,80,96,0.60)', marginTop: '2px' }}>No monthly minimum</p>
        </div>
      </div>

      <div style={{ height: '8px', background: 'rgba(80,80,96,0.20)', borderRadius: '1px', marginBottom: '6px' }} />
      <p className="font-mono" style={{ fontSize: '10px', color: 'rgba(80,80,96,0.60)' }}>0 Kojo spent · 100,000 Kojo remaining</p>

      <p className="font-mono text-center" style={{ fontSize: '10px', color: 'rgba(248,248,242,0.30)', marginTop: '12px' }}>
        Credits apply across all 70+ service categories
      </p>
    </div>
  )
}

export default function PricingCreditSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="pricing-credit-heading"
    >
      <div className="kj-container">

        {/* Two-column */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 mb-16">

          {/* Left */}
          <div className="flex-1 lg:max-w-[520px]">
            <p className="font-mono font-normal text-kj-lime uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
              HOW KOJO IS PRICED
            </p>
            <h2
              id="pricing-credit-heading"
              className="font-sans font-normal text-kj-light mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              One currency. Every service.
            </h2>
            <p className="font-sans font-normal mb-6"
              style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}>
              Kojo uses a single credit currency across all 70+ service categories. 1,000 Kojo = $1. Credits are spent when a brief is completed — nothing is charged until you approve the estimate.
            </p>
            <div className="flex flex-col gap-2">
              {[
                'No retainer. No monthly seat licence.',
                'Credits work across every service category.',
                'Unused paid credits valid for 12 months.',
              ].map((b) => (
                <p key={b} className="font-sans font-normal"
                  style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}>
                  — {b}
                </p>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex lg:justify-end lg:flex-1">
            <CreditWidget />
          </div>
        </div>

        {/* Pack table */}
        <div>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full border-collapse" style={{ minWidth: '560px' }}>
              <thead>
                <tr style={{ background: 'rgba(80,80,96,0.10)' }}>
                  {['PACK', 'KOJO', 'USD', 'BEST FOR'].map((h) => (
                    <th key={h} className="text-left font-mono font-normal"
                      style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(248,248,242,0.35)', padding: '14px 16px', borderBottom: '1px solid rgba(80,80,96,0.25)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PACKS.map((p) => (
                  <tr key={p.name}
                    style={{
                      borderBottom: '1px solid rgba(80,80,96,0.14)',
                      background: p.highlight ? 'rgba(222,255,0,0.03)' : 'transparent',
                    }}>
                    <td className="font-sans font-semibold" style={{ fontSize: '14px', color: p.highlight ? '#DEFF00' : 'rgba(248,248,242,0.90)', padding: '14px 16px' }}>
                      {p.name}
                    </td>
                    <td className="font-mono" style={{ fontSize: '13px', color: 'rgba(248,248,242,0.80)', padding: '14px 16px' }}>{p.kojo}</td>
                    <td className="font-mono" style={{ fontSize: '13px', color: 'rgba(248,248,242,0.80)', padding: '14px 16px' }}>{p.usd}</td>
                    <td className="font-sans font-light" style={{ fontSize: '13px', color: 'rgba(248,248,242,0.50)', padding: '14px 16px' }}>{p.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans font-light mt-4"
            style={{ fontSize: '12px', color: 'rgba(248,248,242,0.30)' }}>
            ✦ Most popular — recommended for teams briefing regularly across categories. Volume packs receive a percentage discount applied at checkout.
          </p>
        </div>

      </div>
    </section>
  )
}
