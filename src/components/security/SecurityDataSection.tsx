// Security F3 — Data Handling Principles | bg #181818
// 5 principles always fully visible (AEO requirement — no accordion)

const PRINCIPLES = [
  {
    n: '01',
    title: 'Your data is never used to train AI models.',
    body: 'Your briefs, deliverables, and brand context are not used to train, fine-tune, or improve AI models — by Kojo, our AI providers, or any third party — without your explicit written consent. This is contractual and audited.',
  },
  {
    n: '02',
    title: 'All content is encrypted at rest and in transit.',
    body: 'Brief inputs, in-progress drafts, and final deliverables are encrypted using AES-256 at rest and TLS 1.3 in transit — from submission to download.',
  },
  {
    n: '03',
    title: 'Brief data is isolated per client. No cross-contamination.',
    body: "Your brief content, brand context, and deliverables are stored in an isolated environment. No content from one client's account is accessible to another client's processing session.",
  },
  {
    n: '04',
    title: 'Expert access is need-to-know only, logged, and audited.',
    body: 'Assigned experts access only what they need to complete your brief. All access events are logged with timestamp and expert identifier. Logs are retained for 12 months and available on request for enterprise accounts.',
  },
  {
    n: '05',
    title: 'Data residency options available for EU and UK clients.',
    body: 'For clients under GDPR or UK GDPR, Kojo offers EU-based data residency. A Data Processing Agreement (DPA) is available on request and is standard for enterprise accounts.',
  },
]

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
          DATA HANDLING
        </p>

        <h2
          id="security-data-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Five principles that govern how we handle your data
        </h2>

        <div>
          {PRINCIPLES.map((p, i) => (
            <div key={p.n}>
              {i > 0 && (
                <div style={{ height: '1px', background: 'rgba(80,80,96,0.20)' }} />
              )}
              <div className="flex gap-6 md:gap-10 py-8">
                {/* Number */}
                <p
                  className="font-mono text-kj-lime shrink-0"
                  style={{ fontSize: '28px', fontWeight: 300, lineHeight: 1.1, minWidth: '40px' }}
                >
                  {p.n}
                </p>
                {/* Content */}
                <div>
                  <p
                    className="font-sans font-semibold text-kj-light mb-3"
                    style={{ fontSize: '16px', lineHeight: '1.45' }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="font-sans font-light"
                    style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(248,248,242,0.55)' }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
