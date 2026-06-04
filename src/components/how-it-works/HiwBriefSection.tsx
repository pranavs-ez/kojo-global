// HIW F3 — The Brief Wizard | bg #1e1e1e
// Two-column: questions list (left) + UI mockup (right)

const QUESTIONS = [
  { q: 'What do you need?',                      a: 'Determines service category and expert type.' },
  { q: 'Who is it for?',                          a: 'Audience specificity is the biggest driver of output relevance.' },
  { q: 'What tone?',                              a: 'Your stored brand voice pre-populates. Confirm or adjust.' },
  { q: 'What format?',                            a: 'A board memo and an investor update require different structures.' },
  { q: "What's the deadline?",                    a: 'Determines standard vs. express routing.' },
  { q: 'What key messages must be included?',     a: 'Non-negotiables. Expert review confirms each appears.' },
  { q: 'What should it not say or do?',           a: 'Guardrails are as important as direction.' },
  { q: 'Are there examples to reference?',        a: "Optional. Informs the expert's quality calibration." },
]

// Brief Wizard UI mockup — matches Figma F3 spec (480×380px)
function BriefWizardMockup() {
  return (
    <div
      className="shrink-0 rounded-[6px] overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '480px',
        background: '#1A1A1A',
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center justify-between"
        style={{ height: '36px', background: '#252525', borderBottom: '1px solid #333', padding: '0 16px' }}
      >
        <div className="flex items-center gap-2">
          {['#555','#555','#555'].map((c, i) => (
            <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />
          ))}
        </div>
        <span className="font-mono" style={{ fontSize: '10px', color: '#666' }}>kojo.global/brief</span>
        <span style={{ width: 40 }} />
      </div>

      {/* Progress bar row */}
      <div style={{ padding: '16px 20px 8px' }}>
        <span className="font-mono" style={{ fontSize: '10px', color: '#888', display: 'block', marginBottom: '6px' }}>Question 3 of 8</span>
        <div style={{ height: '4px', background: '#333', borderRadius: '2px' }}>
          <div style={{ width: '37.5%', height: '100%', background: '#C8FA64', borderRadius: '2px' }} />
        </div>
      </div>

      {/* Question area */}
      <div style={{ padding: '20px' }}>
        <p className="font-sans" style={{ fontSize: '18px', color: '#F5F5F0', fontWeight: 600, marginBottom: '6px' }}>
          Who is this for?
        </p>
        <p className="font-sans" style={{ fontSize: '11px', color: '#888', marginBottom: '20px', lineHeight: '1.5' }}>
          Audience specificity drives output relevance.
        </p>

        {/* Answer input */}
        <div style={{ width: '100%', height: '80px', background: '#252525', border: '1px solid #444', borderRadius: '8px', padding: '12px' }}>
          <p className="font-sans" style={{ fontSize: '11px', color: '#555', lineHeight: '1.5' }}>
            e.g. Our board of directors — 6 members, mix of operators and investors
          </p>
        </div>

        {/* Helper text */}
        <p className="font-mono" style={{ fontSize: '10px', color: '#C8FA64', marginTop: '8px' }}>
          Be specific — 'our board' produces better output than 'investors'
        </p>

        {/* Button row */}
        <div className="flex justify-between items-center" style={{ marginTop: '20px' }}>
          <span className="font-sans" style={{ fontSize: '11px', color: '#888', cursor: 'pointer' }}>← Previous</span>
          <div style={{ background: '#C8FA64', borderRadius: '6px', padding: '10px 20px' }}>
            <span className="font-sans" style={{ fontSize: '12px', color: '#1A1A1A', fontWeight: 600 }}>Next question →</span>
          </div>
        </div>
      </div>

      {/* Brand context chip */}
      <div
        className="flex items-center gap-2"
        style={{ padding: '8px 20px', background: '#222', borderTop: '1px solid #333' }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8FA64', flexShrink: 0 }} />
        <span className="font-mono" style={{ fontSize: '10px', color: '#666' }}>Brand context: loaded · 3 previous briefs</span>
      </div>
    </div>
  )
}

export default function HiwBriefSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="hiw-brief-heading"
    >
      <div className="kj-container">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1 lg:max-w-[560px]">

            {/* Eyebrow */}
            <p
              className="font-mono font-normal text-kj-lime uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
            >
              THE BRIEF
            </p>

            {/* H2 */}
            <h2
              id="hiw-brief-heading"
              className="font-sans font-normal text-kj-light mb-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              The brief that determines output quality
            </h2>

            {/* Sub */}
            <p
              className="font-sans font-normal mb-8"
              style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)' }}
            >
              Eight questions. Each maps to a specific quality variable in the output.
            </p>

            {/* Question list */}
            <div className="flex flex-col gap-0">
              {QUESTIONS.map((item, i) => (
                <div key={i} className="py-3" style={{ borderTop: '1px solid rgba(80,80,96,0.18)' }}>
                  <p
                    className="font-sans font-semibold text-kj-light"
                    style={{ fontSize: '14px', lineHeight: '1.5' }}
                  >
                    {i + 1}. {item.q}
                  </p>
                  <p
                    className="font-sans font-light"
                    style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(248,248,242,0.36)' }}
                  >
                    — {item.a}
                  </p>
                </div>
              ))}
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.18)' }} />
            </div>

            {/* Footer note */}
            <p
              className="font-sans font-normal mt-8"
              style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)', maxWidth: '500px' }}
            >
              Most brief anxiety is about getting it wrong. The wizard makes that impossible — if a question is unclear, the expert resolves it, not you.
            </p>

          </div>

          {/* Right — mockup */}
          <div className="flex lg:justify-end lg:flex-1">
            <BriefWizardMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
