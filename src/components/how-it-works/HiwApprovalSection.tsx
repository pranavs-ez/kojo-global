// HIW F7 — The Approval Moment | bg #212121
// Two-column: text left, approval screen mockup right

const ITEMS = [
  { label: 'Scope',             detail: 'what the brief covers, output type, word count' },
  { label: 'Cost',              detail: 'Kojo amount and USD equivalent' },
  { label: 'AI/human split',    detail: 'estimated percentage for this brief type' },
  { label: 'Expert role',       detail: 'the specialism routing to your brief' },
  { label: 'Agency equivalent', detail: 'cost and time comparison' },
  { label: 'Delivery window',   detail: 'standard and express options' },
]

// Approval screen mockup — Figma F7 spec: 480×420, r:2, stroke #f8f8f1/0.5
// Single dark canvas — no dividers, no light panels
function ApprovalMockup() {
  return (
    <div
      className="shrink-0 overflow-hidden flex flex-col"
      style={{
        width: '100%',
        maxWidth: '480px',
        background: '#1E1E1E',
        border: '0.5px solid rgba(248,248,241,0.50)',
        borderRadius: '2px',
      }}
    >
      {/* Content area */}
      <div className="flex flex-col flex-1" style={{ padding: '20px 20px 24px', gap: '14px' }}>

        {/* Header row */}
        <div className="flex justify-between items-baseline">
          <span className="font-sans" style={{ fontSize: '12px', color: 'rgba(248,248,241,0.85)', fontWeight: 300 }}>Brief approval</span>
          <span className="font-sans" style={{ fontSize: '12px', color: 'rgba(248,248,241,0.40)', fontWeight: 300 }}>Step 2 of 2</span>
        </div>

        {/* Scope */}
        <p className="font-sans" style={{ fontSize: '12px', color: 'rgba(248,248,241,0.70)', fontWeight: 300 }}>
          Board memo · Financial communications · 1,200 words
        </p>

        {/* Cost */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <span className="font-sans" style={{ fontSize: '11px', color: 'rgba(248,248,241,0.40)' }}>Kojo cost</span>
            <span className="font-mono" style={{ fontSize: '28px', color: '#DDFF00', fontWeight: 500, letterSpacing: '-0.01em' }}>60,000 Kojo</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="font-sans" style={{ fontSize: '11px', color: 'rgba(248,248,241,0.40)' }}>Agency equivalent</span>
            <span className="font-sans" style={{ fontSize: '12px', color: 'rgba(248,248,241,0.50)', fontWeight: 300 }}>$2,000–$5,000 · 1–2 weeks</span>
          </div>
        </div>

        {/* AI / Human split */}
        <div>
          <p className="font-sans" style={{ fontSize: '11px', color: 'rgba(248,248,241,0.40)', marginBottom: '6px' }}>AI / Human split</p>
          <div style={{ height: '3px', background: '#DEFF00', borderRadius: '1px', marginBottom: '5px' }} />
          <p className="font-sans" style={{ fontSize: '10px', color: 'rgba(248,248,241,0.45)' }}>65% AI draft · 35% expert review</p>
        </div>

        {/* Delivery window */}
        <div>
          <p className="font-sans" style={{ fontSize: '11px', color: 'rgba(248,248,241,0.40)', marginBottom: '6px' }}>Delivery window</p>
          <span className="font-sans" style={{ fontSize: '12px', color: 'rgba(248,248,241,0.75)', fontWeight: 300 }}>Standard · 8 hours</span>
        </div>

      </div>

      {/* CTA — full-width 48px lime bar */}
      <div style={{ height: '48px', background: '#DEFF00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="font-sans" style={{ fontSize: '13px', color: '#1F1F1F', fontWeight: 600 }}>Approve and begin →</span>
      </div>
    </div>
  )
}

export default function HiwApprovalSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="hiw-approval-heading"
    >
      <div className="kj-container">

        {/* Eyebrow + H2 — full width above the two-column layout */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          TRANSPARENCY
        </p>
        <h2
          id="hiw-approval-heading"
          className="font-sans font-normal text-kj-light mb-10"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          You approve before work begins. You always know the cost.
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1 lg:max-w-[520px]">

            {/* Lead */}
            <p
              className="font-sans font-normal mb-5"
              style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}
            >
              The approval screen — shown before any work starts — includes:
            </p>

            {/* Item list */}
            <div className="flex flex-col gap-3 mb-6">
              {ITEMS.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span
                    className="font-sans font-semibold text-kj-light shrink-0"
                    style={{ fontSize: '14px', lineHeight: '1.6' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="font-sans font-light"
                    style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)' }}
                  >
                    — {item.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* AI split note */}
            <p
              className="font-sans font-light mb-6"
              style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.36)', maxWidth: '480px' }}
            >
              We show the AI/human split because transparency is how trust is built. The split varies by brief type — research briefs have a higher human percentage than templated legal documents. You see the breakdown before you approve.
            </p>

            {/* Delivery Assurance */}
            <div
              className="rounded-[2px] p-5"
              style={{ background: 'rgba(80,80,96,0.12)', border: '0.5px solid rgba(248,248,242,0.07)' }}
            >
              <p className="font-mono font-normal text-kj-lime mb-2" style={{ fontSize: '10px', letterSpacing: '2px' }}>
                DELIVERY ASSURANCE
              </p>
              <p
                className="font-sans font-light"
                style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}
              >
                If the deliverable does not meet your brief, we fix it at no additional cost. If we cannot fix it, we refund the Kojo you spent. First project: included free.
              </p>
            </div>

          </div>

          {/* Right — mockup */}
          <div className="flex lg:justify-end lg:flex-1 lg:pt-8">
            <ApprovalMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
