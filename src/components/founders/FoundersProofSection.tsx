// Founders F6 — Social Proof | bg #212121
// 3 testimonial cards

const TESTIMONIALS = [
  {
    quote: 'We needed a competitive landscape for the board deck. I briefed it on Monday afternoon. It was in my inbox Tuesday morning — formatted, sourced, and ready to present.',
    attr: 'CMO, Series B SaaS company',
  },
  {
    quote: "I've tried agencies and freelancers. Kojo is the first time I've submitted a brief and not had to think about it again.",
    attr: 'Co-founder, Series C fintech',
  },
  {
    quote: 'Our investor update goes out the same day I brief it. I used to spend the morning writing it. Now I spend ten minutes briefing and two minutes reviewing.',
    attr: 'CEO, Series B marketplace',
  },
]

export default function FoundersProofSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="founders-proof-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          WHAT FOUNDERS SAY
        </p>

        <h2
          id="founders-proof-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          From Series B founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-6 flex flex-col"
              style={{
                background: 'rgba(80,80,96,0.10)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                borderRadius: '2px',
              }}
            >
              <p className="font-sans font-normal text-kj-light flex-1 mb-4"
                style={{ fontSize: '14px', lineHeight: '1.7' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-mono font-normal"
                style={{ fontSize: '11px', color: 'rgba(248,248,242,0.35)' }}>
                {t.attr}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
