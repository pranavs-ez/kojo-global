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

// Brief Wizard UI mockup — Figma F3 spec: 480×360, r:2, stroke #f8f8f2/0.5
function BriefWizardMockup() {
  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '480px',
        background: '#1A1A1A',
        border: '0.5px solid rgba(248,248,242,0.50)',
        borderRadius: '2px',
      }}
    >
      {/* Window chrome — #212121, 36px */}
      <div
        className="flex items-center justify-between"
        style={{ height: '36px', background: '#212121', padding: '0 16px' }}
      >
        <div className="flex items-center gap-[6px]">
          {[0,1,2].map(i => (
            <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(80,80,96,0.45)', display: 'inline-block' }} />
          ))}
        </div>
        <span className="font-mono" style={{ fontSize: '10px', color: 'rgba(80,80,96,0.45)' }}>kojo.global/brief</span>
        <span style={{ width: 44 }} />
      </div>

      {/* Progress row */}
      <div style={{ padding: '14px 20px 10px' }}>
        <span className="font-mono" style={{ fontSize: '10px', color: 'rgba(80,80,96,0.55)', display: 'block', marginBottom: '6px' }}>
          Question 3 of 8
        </span>
        <div style={{ height: '2px', background: 'rgba(80,80,96,0.25)', borderRadius: '1px' }}>
          <div style={{ width: '37.5%', height: '100%', background: '#DEFF00', borderRadius: '1px' }} />
        </div>
      </div>

      {/* Question area */}
      <div style={{ padding: '0 20px 20px' }}>
        {/* Question */}
        <p className="font-sans" style={{ fontSize: '20px', color: '#F8F8F2', fontWeight: 600, lineHeight: '1.3', marginBottom: '6px' }}>
          Who is this for?
        </p>
        <p className="font-sans" style={{ fontSize: '12px', color: 'rgba(80,80,96,0.60)', lineHeight: '1.5', marginBottom: '16px', fontWeight: 300 }}>
          Audience specificity drives output relevance.
        </p>

        {/* Input — #212121, stroke #505060/0.5, r:2 */}
        <div style={{ height: '72px', background: '#212121', border: '0.5px solid rgba(80,80,96,0.50)', borderRadius: '2px', padding: '12px 12px' }}>
          <p className="font-sans" style={{ fontSize: '12px', color: 'rgba(80,80,96,0.35)', lineHeight: '1.5', fontWeight: 300 }}>
            e.g. Our board of directors — 6 members, mix of operators and investors
          </p>
        </div>

        {/* Hint — #DEFF00 at 0.65 */}
        <p className="font-mono" style={{ fontSize: '10px', color: 'rgba(222,255,0,0.65)', marginTop: '8px' }}>
          Be specific — "our board" produces better output than "investors"
        </p>

        {/* Nav row */}
        <div className="flex justify-between items-center" style={{ marginTop: '18px' }}>
          <span className="font-sans" style={{ fontSize: '12px', color: 'rgba(80,80,96,0.55)', fontWeight: 300 }}>← Previous</span>
          <div style={{ background: '#DEFF00', borderRadius: '2px', padding: '8px 16px' }}>
            <span className="font-sans" style={{ fontSize: '12px', color: '#1E1E1E', fontWeight: 400 }}>Next question →</span>
          </div>
        </div>
      </div>

      {/* Brand context bar — #212121, 32px */}
      <div
        className="flex items-center gap-2"
        style={{ height: '32px', background: '#212121', padding: '0 20px' }}
      >
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(222,255,0,0.65)', flexShrink: 0 }} />
        <span className="font-mono" style={{ fontSize: '10px', color: 'rgba(80,80,96,0.45)' }}>Brand context: loaded  ·  3 previous briefs</span>
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

        {/* Eyebrow + H2 — full width above the two-column layout */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          THE BRIEF
        </p>
        <h2
          id="hiw-brief-heading"
          className="font-sans font-normal text-kj-light mb-10"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          The brief that determines output quality
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1 lg:max-w-[560px]">

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
          <div className="flex lg:justify-end lg:flex-1 lg:pt-[160px]">
            <BriefWizardMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
