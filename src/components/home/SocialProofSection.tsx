// Social Proof (S6) — "What Series B and C teams say"
// Figma nodes 167:2493–167:2502 | Background: #212121
// Card (18:23): flex col gap-[12px] p-[20px], quote + 1px divider + attribution

const QUOTES = [
  {
    quote: '"We needed a competitive landscape for the board deck. I briefed it Monday afternoon. It was in my inbox Tuesday morning — formatted, sourced, and ready to present."',
    attribution: 'CMO, Series B SaaS company',
  },
  {
    quote: '"I\'ve tried agencies and freelancers. Kojo is the first time I\'ve submitted a brief and not had to think about it again. The output just arrived."',
    attribution: 'Co-founder, Series C fintech',
  },
  {
    quote: '"Our content volume went from two pieces a month to eight. Same headcount. The brief is the only thing that changed."',
    attribution: 'Head of Marketing, Series B climate tech',
  },
]

export default function SocialProofSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="social-proof-heading"
    >
      <div className="kj-container">

        {/* H2 */}
        <h2
          id="social-proof-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          What Series B and C teams say
        </h2>

        {/* ── Quote cards — 3-column grid ───────────────────────────────────── */}
        {/* 18:23: flex col gap-[12px] p-[20px], rgba(80,80,96,0.18) bg, 0.3px border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-[2px]"
              style={{
                background: 'rgba(80,80,96,0.18)',
                border: '0.3px solid rgba(248,248,242,0.07)',
                padding: '20px',
              }}
            >
              {/* Quote text — Sans Regular 14px, rgba(248,248,242,0.80), leading 1.6 */}
              <p
                className="font-sans font-normal"
                style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.80)' }}
              >
                {q.quote}
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)' }} />

              {/* Attribution — Mono Regular 11px, #505060 */}
              <p
                className="font-mono font-normal"
                style={{ fontSize: '11px', color: '#505060', lineHeight: '1.4' }}
              >
                — {q.attribution}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
