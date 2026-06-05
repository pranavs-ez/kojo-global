// Security F3 — Data Handling Principles | bg #181818
// Data flow graphic + 5 principles expanded by default (AEO requirement)

const PRINCIPLES = [
  {
    title: 'Your data is never used to train AI models.',
    body: 'Your briefs, deliverables, and brand context are not used to train, fine-tune, or improve AI models — by Kojo, our AI providers, or any third party — without your explicit written consent. This is contractual and audited.',
  },
  {
    title: 'All content is encrypted at rest and in transit.',
    body: 'Brief inputs, in-progress drafts, and final deliverables are encrypted using AES-256 at rest and TLS 1.3 in transit — from submission to download.',
  },
  {
    title: 'Brief data is isolated per client. No cross-contamination.',
    body: "Your brief content, brand context, and deliverables are stored in an isolated environment. No content from one client's account is accessible to another client's processing session.",
  },
  {
    title: 'Expert access is need-to-know only, logged, and audited.',
    body: 'Assigned experts access only what they need to complete your brief. All access events are logged with timestamp and expert identifier. Logs are retained for 12 months and available on request for enterprise accounts.',
  },
  {
    title: 'Data residency options available for EU and UK clients.',
    body: 'For clients under GDPR or UK GDPR, Kojo offers EU-based data residency. A Data Processing Agreement (DPA) is available on request and is standard for enterprise accounts.',
  },
]

// Data flow diagram — 4 stages
function DataFlowDiagram() {
  const stages = [
    { label: 'YOUR BRIEF',       bg: '#F5F5F0', textCol: '#888', innerText: 'Your Brief',         subText: null,          isLight: true  },
    { label: 'AI PROCESSING',    bg: '#DEFF00', textCol: '#1A1A1A', innerText: 'Isolated session', subText: 'No data retained', isLight: false },
    { label: 'EXPERT REVIEW',    bg: '#FF3CAC', textCol: '#F5F5F0', innerText: 'Logged + audited',  subText: 'Access controlled', isLight: false },
    { label: 'YOUR DELIVERABLE', bg: '#F5F5F0', textCol: '#888', innerText: 'Deliverable',       subText: '● Encrypted',   isLight: true  },
  ]
  const arrows = ['TLS 1.3 + AES-256', 'Need-to-know', 'TLS 1.3 + AES-256']

  return (
    <div
      className="overflow-x-auto mb-12"
      style={{ background: '#1A1A1A', borderRadius: '2px', padding: '32px 24px', border: '0.5px solid rgba(248,248,242,0.08)' }}
    >
      <div className="flex items-center justify-center" style={{ minWidth: '560px', gap: '0' }}>
        {stages.map((s, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <p className="font-mono uppercase text-center mb-2"
                style={{ fontSize: '8px', letterSpacing: '1.5px', color: '#888', width: '110px' }}>
                {s.label}
              </p>
              <div
                style={{
                  width: '110px', height: '60px',
                  background: s.bg, borderRadius: '2px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '8px',
                }}
              >
                {s.isLight ? (
                  <div className="flex flex-col gap-1 items-center w-full">
                    {[70, 50, 60].map((w, j) => (
                      <div key={j} style={{ width: `${w}%`, height: '5px', background: '#DDD', borderRadius: '1px' }} />
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="font-sans font-semibold text-center" style={{ fontSize: '10px', color: s.textCol, lineHeight: 1.2 }}>{s.innerText}</p>
                    {s.subText && <p className="font-sans text-center" style={{ fontSize: '8px', color: s.textCol, opacity: 0.75, marginTop: '3px' }}>{s.subText}</p>}
                  </>
                )}
              </div>
            </div>

            {i < stages.length - 1 && (
              <div className="flex flex-col items-center mx-2">
                <p className="font-mono" style={{ fontSize: '7px', color: '#666', marginBottom: '3px', whiteSpace: 'nowrap' }}>{arrows[i]}</p>
                <div style={{ width: '28px', height: '2px', background: '#DEFF00', position: 'relative' }}>
                  <div style={{ position: 'absolute', right: '-4px', top: '-3px', width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #DEFF00' }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="font-sans text-center mt-6" style={{ fontSize: '10px', color: '#F5F5F0' }}>
        ISO 27001:2022 certified
      </p>
    </div>
  )
}

export default function SecurityDataSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="security-data-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          YOUR DATA
        </p>

        <h2
          id="security-data-heading"
          className="font-sans font-normal text-kj-light mb-10"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Five principles that govern how we handle your data
        </h2>

        <DataFlowDiagram />

        {/* Principles — expanded by default (AEO requirement) */}
        <div itemScope itemType="https://schema.org/FAQPage">
          {PRINCIPLES.map((p, i) => (
            <div key={i} itemScope itemType="https://schema.org/Question">
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.25)' }} />
              <div className="py-7">
                <p className="font-sans font-semibold text-kj-light mb-3"
                  style={{ fontSize: '15px', lineHeight: '1.5' }}
                  itemProp="name">
                  {i + 1}. {p.title}
                </p>
                <div itemScope itemType="https://schema.org/Answer">
                  <p className="font-sans font-light"
                    style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(248,248,242,0.60)' }}
                    itemProp="text">
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div style={{ height: '1px', background: 'rgba(80,80,96,0.25)' }} />
        </div>

      </div>
    </section>
  )
}
