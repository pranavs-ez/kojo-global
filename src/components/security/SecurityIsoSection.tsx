// Security F2 — ISO 27001 Certification | bg #212121
// Two-column: text left (40%), checklist right (60%)

const CHECKS = [
  'Annual third-party audit of our information security management system',
  'Documented risk assessment and treatment processes',
  'Access control, encryption, and incident response at standard',
  'Continuous monitoring and improvement obligations',
]

export default function SecurityIsoSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="security-iso-heading"
    >
      <div className="kj-container">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">

          {/* Left — text */}
          <div className="lg:w-[40%]">
            <p className="font-mono font-normal text-kj-lime uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
              CERTIFICATION
            </p>
            <h2
              id="security-iso-heading"
              className="font-sans font-normal text-kj-light mb-5"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              ISO 27001:2022 certified
            </h2>
            <p className="font-sans font-normal"
              style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(248,248,242,0.55)' }}>
              ISO 27001:2022 is the international standard for information security management. It is the certification enterprise procurement and Series D security reviews look for first. Kojo is certified from founding — not as a milestone, but as a requirement.
            </p>
          </div>

          {/* Right — checklist */}
          <div className="lg:flex-1">
            <p className="font-mono font-normal text-kj-light uppercase mb-5"
              style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(248,248,242,0.40)' }}>
              WHAT CERTIFICATION MEANS
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {CHECKS.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="text-kj-lime font-mono shrink-0 mt-0.5" style={{ fontSize: '12px' }}>✓</span>
                  <span className="font-sans font-normal text-kj-light" style={{ fontSize: '14px', lineHeight: '1.6' }}>{c}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1 pt-4" style={{ borderTop: '1px solid rgba(80,80,96,0.20)' }}>
              <p className="font-sans font-normal" style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}>
                <strong className="text-kj-light">Scope:</strong> Kojo's platform operations, client data processing, and the EZ Works delivery infrastructure powering the expert layer.
              </p>
              <p className="font-sans font-normal" style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}>
                <strong className="text-kj-light">Recertification:</strong> Annual. Certification status is current and confirmed by the issuing body.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
