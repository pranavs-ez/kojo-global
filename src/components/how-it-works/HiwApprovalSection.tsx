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

// Approval screen mockup — matches Figma F7 spec (520×440px)
function ApprovalMockup() {
  return (
    <div
      className="shrink-0 rounded-[12px] overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '480px',
        background: '#F5F5F0',
        border: '1px solid #DDD',
        boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{ background: '#1A1A1A', height: '48px', padding: '0 20px' }}
      >
        <span className="font-sans" style={{ fontSize: '12px', color: '#F5F5F0', fontWeight: 600 }}>Brief approval</span>
        <span className="font-mono" style={{ fontSize: '10px', color: '#888' }}>Step 2 of 2</span>
      </div>

      {/* Scope row */}
      <div style={{ padding: '14px 20px', background: '#FAFAFA', borderBottom: '1px solid #EEE' }}>
        <span className="font-sans" style={{ fontSize: '12px', color: '#444' }}>
          Board memo · Financial communications · 1,200 words
        </span>
      </div>

      {/* Cost section */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #EEE' }}>
        <div className="flex justify-between items-baseline mb-1">
          <span className="font-sans" style={{ fontSize: '11px', color: '#888' }}>Kojo cost</span>
          <span className="font-sans" style={{ fontSize: '20px', color: '#1A1A1A', fontWeight: 700 }}>60,000 Kojo</span>
        </div>
        <div className="flex justify-between items-baseline mb-1">
          <span className="font-sans" style={{ fontSize: '11px', color: '#888' }}>USD equivalent</span>
          <span className="font-sans" style={{ fontSize: '16px', color: '#1A1A1A' }}>$60</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="font-sans" style={{ fontSize: '11px', color: '#888' }}>Agency equivalent</span>
          <span className="font-sans" style={{ fontSize: '12px', color: '#AAA', textDecoration: 'line-through' }}>$2,000–$5,000 · 1–2 weeks</span>
        </div>
      </div>

      {/* Expert role */}
      <div style={{ padding: '12px 20px', background: '#F8F8F8', borderBottom: '1px solid #EEE' }}>
        <span className="font-sans" style={{ fontSize: '11px', color: '#888' }}>Expert role: </span>
        <span className="font-sans" style={{ fontSize: '12px', color: '#1A1A1A' }}>Financial communications writer</span>
      </div>

      {/* AI/human split */}
      <div style={{ padding: '12px 20px', borderBottom: '1px solid #EEE' }}>
        <p className="font-sans" style={{ fontSize: '11px', color: '#888', marginBottom: '6px' }}>AI / Human split</p>
        <div style={{ height: '8px', borderRadius: '4px', overflow: 'hidden', display: 'flex', marginBottom: '4px' }}>
          <div style={{ width: '65%', background: '#C8FA64' }} />
          <div style={{ width: '35%', background: '#FF3CAC' }} />
        </div>
        <p className="font-sans" style={{ fontSize: '10px', color: '#888' }}>65% AI draft · 35% expert review</p>
      </div>

      {/* Delivery options */}
      <div style={{ padding: '12px 20px', borderBottom: '1px solid #EEE' }}>
        <div className="flex gap-3">
          <div style={{ background: '#1A1A1A', borderRadius: '6px', padding: '8px 12px', flex: 1 }}>
            <div className="flex justify-between items-center">
              <span className="font-sans" style={{ fontSize: '11px', color: '#F5F5F0' }}>Standard · 8 hours</span>
              <span style={{ fontSize: '10px', color: '#C8FA64' }}>✓</span>
            </div>
          </div>
          <div style={{ border: '1px solid #DDD', borderRadius: '6px', padding: '8px 12px', flex: 1 }}>
            <span className="font-sans" style={{ fontSize: '11px', color: '#888' }}>Fast Track · 4 hrs · +$30</span>
          </div>
        </div>
      </div>

      {/* Assurance row */}
      <div
        className="flex justify-between items-center"
        style={{ padding: '12px 20px', background: '#F0FAF0', borderBottom: '1px solid #E0EEE0' }}
      >
        <span className="font-sans" style={{ fontSize: '11px', color: '#2A7A2A', fontWeight: 600 }}>Delivery Assurance</span>
        <span className="font-sans" style={{ fontSize: '11px', color: '#2A7A2A' }}>Included free — first project</span>
      </div>

      {/* CTA */}
      <div style={{ background: '#C8FA64', padding: '14px 20px', textAlign: 'center' }}>
        <span className="font-sans" style={{ fontSize: '13px', color: '#1A1A1A', fontWeight: 700 }}>Approve and begin →</span>
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
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1 lg:max-w-[520px]">

            {/* Eyebrow */}
            <p
              className="font-mono font-normal text-kj-lime uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
            >
              TRANSPARENCY
            </p>

            {/* H2 */}
            <h2
              id="hiw-approval-heading"
              className="font-sans font-normal text-kj-light mb-6"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              You approve before work begins. You always know the cost.
            </h2>

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
          <div className="flex lg:justify-end lg:flex-1 lg:pt-10">
            <ApprovalMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
