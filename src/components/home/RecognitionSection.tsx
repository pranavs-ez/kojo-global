// Recognition (F2) — "Sound familiar?" — Figma nodes 167:2445–167:2460
// Background: #212121 (surface-recognition)

const COLUMNS = [
  {
    label: 'Freelancers',
    body: 'Ghosted. Flaked. Three times the revisions you expected.\n\nYou spent more time managing them than they saved you. They disappeared before the deadline. The invoice came anyway.',
    quote: '"You\'ll spend more time babysitting and managing them than you would stand to gain from their job."',
    attribution: '— Nomad Capitalist',
  },
  {
    label: 'Agencies',
    body: 'A retainer, a kickoff call, and three weeks later — you\'re still waiting. Then the deck arrived and you had to rewrite half of it yourself. The strategy you paid for was yours to begin with.',
    quote: '"I was the one leading the charge for my own business."',
    attribution: '— Richard Fleming, founder',
  },
  {
    label: 'AI tools',
    body: 'The tone was always off. Every output needed heavy editing. It felt like more work than writing it yourself. You spent an hour prompting. The post still needed rewriting.',
    quote: '"I felt like I had to do more editing than actually using what it generated."',
    attribution: '— Founder, Copy.ai user, Capterra',
  },
]

export default function RecognitionSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="recognition-heading"
    >
      <div className="kj-container">

        {/* H2 — Figma 167:2445: Sans Regular 48px, #f8f8f2, leading 1.15, tracking -0.02em */}
        <h2
          id="recognition-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Sound familiar?
        </h2>

        {/* grid items stretch to equal height; flex-1 spacer pushes quote+attr to bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {COLUMNS.map((col) => (
            <div key={col.label} className="flex flex-col">

              {/* Label — Sans Light 18px */}
              <p
                className="font-sans font-light mb-4"
                style={{ fontSize: '18px', color: 'rgba(248,248,242,0.55)' }}
              >
                {col.label}
              </p>

              {/* Divider */}
              <div className="mb-4" style={{ height: '1px', background: 'rgba(80,80,96,0.30)' }} />

              {/* Body — Sans Light 14px */}
              <p
                className="font-sans font-light whitespace-pre-line"
                style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.36)' }}
              >
                {col.body}
              </p>

              {/* Spacer — pushes quote + attribution to bottom */}
              <div className="flex-1" style={{ minHeight: '40px' }} />

              {/* Quote — Sans Regular 13px, lime */}
              <p
                className="font-sans font-normal text-kj-lime mb-2"
                style={{ fontSize: '13px', lineHeight: '1.6' }}
              >
                {col.quote}
              </p>

              {/* Attribution — Mono Regular 11px, #505060 */}
              <p
                className="font-mono font-normal"
                style={{ fontSize: '11px', lineHeight: '1.4', color: '#505060' }}
              >
                {col.attribution}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
