// Social Proof (S6) — "What Series B and C teams say"
// Figma nodes 167:2493–167:2502 | Background: #212121

import Link from 'next/link'

const QUOTES = [
  {
    quote: '"We needed a competitive landscape for the board deck. I briefed it on Monday afternoon. It was in my inbox Tuesday morning — formatted, sourced, and ready to present."',
    attribution: '— CMO, Series B SaaS company',
  },
  {
    quote: '"I\'ve tried agencies and freelancers. Kojo is the first time I\'ve submitted a brief and not had to think about it again. The output just arrived."',
    attribution: '— Co-founder, Series C fintech',
  },
  {
    quote: '"Our content volume went from two pieces a month to eight. Same headcount. The brief is the only thing that changed."',
    attribution: '— Head of Marketing, Series B climate tech',
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

        {/* H2 — no eyebrow, same style as all H2s */}
        <h2
          id="social-proof-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          What Series B and C teams say
        </h2>

        {/* ── Quote cards — 3-column grid ───────────────────────────────── */}
        {/* 167:2494: rgba(80,80,96,0.18) bg, 0.5px rgba(248,248,242,0.07)  */}
        {/* Quote: Sans Regular 14px rgba(248,248,242,0.80), abs top=19.5    */}
        {/* Attribution: Mono Regular 11px #505060, abs top=203.5            */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="relative rounded-[2px] overflow-hidden"
              style={{
                background: 'rgba(80,80,96,0.18)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                minHeight: '230px',
              }}
            >
              {/* Quote text — Sans Regular 14px, rgba(248,248,242,0.80), leading 1.6 */}
              {/* h=180 in Figma (absolute), top=19.5, w=334                  */}
              <p
                className="absolute font-sans font-normal"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'rgba(248,248,242,0.80)',
                  left: '19.5px',
                  top: '19.5px',
                  right: '19.5px',
                  maxHeight: '180px',
                  overflow: 'hidden',
                }}
              >
                {q.quote}
              </p>

              {/* Attribution — Mono Regular 11px, #505060, leading 1.4, top=203.5 */}
              <p
                className="absolute font-mono font-normal"
                style={{
                  fontSize: '11px',
                  lineHeight: '1.4',
                  color: '#505060',
                  left: '19.5px',
                  top: '203.5px',
                }}
              >
                {q.attribution}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
