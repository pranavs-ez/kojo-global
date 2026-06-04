// HIW F5 — The Expert Layer | bg #181818
// 3 columns: Who, What, Why + infrastructure note

const COLS = [
  {
    title: 'Who reviews your brief',
    body: 'Every brief routes to a subject matter expert by specialism. A financial communications brief routes to someone who has written board memos and investor materials. A competitive intelligence brief routes to an analyst trained in structured intelligence frameworks. Routing is based on brief type and complexity — not on who is available.',
  },
  {
    title: 'What the expert does',
    body: 'The expert does not write from scratch. They review the AI draft against your brief, correct any section that does not meet standard, verify factual claims, align to your brand voice, and approve the final deliverable. This review — typically 20–90 minutes depending on complexity — is what creates the quality gap between Kojo and AI used alone.',
  },
  {
    title: 'Why your quality compounds',
    body: "Your relationship is with the platform, not one person. Brand context — tone, preferred formats, past outputs, key messages — lives in Kojo's platform. A different qualified expert on your next brief has full context and delivers at identical quality. The platform gets better the more you use it.",
  },
]

export default function HiwExpertSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="hiw-expert-heading"
    >
      <div className="kj-container">

        {/* Eyebrow */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          THE HUMAN LAYER
        </p>

        {/* H2 */}
        <h2
          id="hiw-expert-heading"
          className="font-sans font-normal text-kj-light mb-8"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '760px' }}
        >
          The human layer is the product, not a feature
        </h2>

        {/* Infrastructure note */}
        <p
          className="font-sans font-light mb-10"
          style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(248,248,242,0.45)', maxWidth: '740px' }}
        >
          Built on EZ Works' seven-year delivery infrastructure — 1,000+ subject matter experts across five continents, 70+ service categories, serving McKinsey and BCG-calibre client standards. Kojo is the startup-market product of that infrastructure.
        </p>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLS.map((col) => (
            <div key={col.title}>
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)', marginBottom: '20px' }} />
              <p
                className="font-sans font-semibold text-kj-light mb-4"
                style={{ fontSize: '16px', lineHeight: '1.3' }}
              >
                {col.title}
              </p>
              <p
                className="font-sans font-light"
                style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(248,248,242,0.55)' }}
              >
                {col.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
