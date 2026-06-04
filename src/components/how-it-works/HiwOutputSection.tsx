// HIW F4 — What "Business-Ready" Means | bg #212121
// 3 cards with checklist items + contrast statement

const CARDS = [
  {
    title: 'Board memo',
    checks: [
      'Financial narrative internally consistent',
      'Structure matches what your investors expect',
      'Executive summary stands alone',
      'Formatted and ready to attach',
    ],
  },
  {
    title: 'Competitive landscape',
    checks: [
      'Named competitors with sourced intelligence',
      'Specific claims with references cited',
      'Analyst-grade formatting',
      'Summary your board can read in 3 minutes',
    ],
  },
  {
    title: 'Email campaign',
    checks: [
      'Subject lines written to be testable',
      'Body copy on-brand throughout',
      'CTAs specific and action-oriented',
      'Sequence structure logical from awareness to action',
    ],
  },
]

export default function HiwOutputSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="hiw-output-heading"
    >
      <div className="kj-container">

        {/* Eyebrow */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          THE STANDARD
        </p>

        {/* H2 */}
        <h2
          id="hiw-output-heading"
          className="font-sans font-normal text-kj-light mb-3"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Not a draft. Not a starting point. The finished thing.
        </h2>

        {/* Sub */}
        <p
          className="font-sans font-normal mb-10"
          style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)', maxWidth: '600px' }}
        >
          Business-ready means the deliverable meets the standard required for external use — without further editing.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[2px] p-6"
              style={{
                background: 'rgba(80,80,96,0.12)',
                border: '0.5px solid rgba(248,248,242,0.07)',
              }}
            >
              {/* Card title */}
              <p
                className="font-sans font-semibold text-kj-light mb-5"
                style={{ fontSize: '16px', lineHeight: '1.2' }}
              >
                {card.title}
              </p>

              {/* Checklist */}
              <div className="flex flex-col gap-3">
                {card.checks.map((check) => (
                  <div key={check} className="flex items-start gap-2">
                    <span className="text-kj-lime shrink-0 font-mono" style={{ fontSize: '12px', lineHeight: '1.6' }}>✓</span>
                    <span
                      className="font-sans font-light"
                      style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.55)' }}
                    >
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contrast statement */}
        <p
          className="font-sans font-normal"
          style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(248,248,242,0.55)', maxWidth: '900px' }}
        >
          86% of marketers edit AI-generated content before publishing (AllAboutAI, 2025).{' '}
          <span className="text-kj-light">
            At Kojo, that editing happens before the output reaches you — it is not your job.
          </span>
        </p>

      </div>
    </section>
  )
}
