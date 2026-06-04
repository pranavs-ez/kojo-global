// HIW F2 — Step by Step | bg #181818
// Sankey pipeline viz + 5 detailed steps

const STEPS = [
  {
    num: '01',
    title: 'You submit a brief',
    body: 'The guided brief wizard walks you through eight questions that determine output quality: what you need, who it\'s for, tone, format, deadline, brand context, key messages, and reference examples. Most people finish in under ten minutes.\n\nBrief anxiety — the fear of not knowing how to explain what you need — is the most common reason people avoid using services like this. The wizard eliminates that. It asks exactly what the expert needs, and nothing more.',
  },
  {
    num: '02',
    title: 'The estimator runs',
    body: 'As you complete the brief, cost is calculated in real time. You see the full estimate — Kojo cost, USD equivalent, agency equivalent, and delivery window — before you approve anything. Nothing begins until you approve.',
  },
  {
    num: '03',
    title: 'AI drafts',
    body: 'Your brief is processed against your stored brand context, previous outputs, and domain requirements. The AI produces a structured first draft designed for expert review — not for direct publication. The draft is not sent to you.',
  },
  {
    num: '04',
    title: 'Expert reviews',
    body: 'A subject matter expert — matched by domain specialism, not availability — reviews every section. They correct factual errors, align to your brand voice, verify claims, check formatting, and approve the final output. The AI percentage for this brief is logged and shown in your delivery receipt.',
  },
  {
    num: '05',
    title: 'You receive the deliverable',
    body: 'Business-ready output delivered to your inbox. Formatted to spec. Your delivery receipt shows: what was produced, who reviewed it, time elapsed, AI/human split, and agency equivalent cost and time. No chasing. No editing. Done.',
  },
]

export default function HiwPipelineSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="hiw-pipeline-heading"
    >
      <div className="kj-container">

        {/* Eyebrow */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          STEP BY STEP
        </p>

        {/* H2 */}
        <h2
          id="hiw-pipeline-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em', maxWidth: '800px' }}
        >
          What happens from the moment you submit a brief
        </h2>

        {/* Sankey diagram */}
        <div className="w-full overflow-x-auto mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hiw-sankey/sankey-comparison.svg"
            alt="Two-track flow diagram: Kojo (AI draft → expert review → 4–24 hours) vs traditional agency (multiple handoffs → 2–4 weeks)"
            width={1224}
            height={210}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Steps */}
        <div>
          {STEPS.map((step) => (
            <div key={step.num}>
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.25)' }} />
              <div className="flex gap-8 md:gap-16 py-8">
                <p
                  className="font-mono text-kj-lime shrink-0"
                  style={{ fontWeight: 300, fontSize: '28px', lineHeight: '1.2', minWidth: '44px' }}
                >
                  {step.num}
                </p>
                <div className="flex-1">
                  <p
                    className="font-sans font-semibold text-kj-light mb-3"
                    style={{ fontSize: '18px', lineHeight: '1.3' }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="font-sans font-light whitespace-pre-line"
                    style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(248,248,242,0.55)' }}
                  >
                    {step.body}
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
