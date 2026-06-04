import Link from 'next/link'

const QUOTES = [
  {
    quote: '"We needed a competitive landscape for the board deck. I briefed it on Monday afternoon. It was in my inbox Tuesday morning — formatted, sourced, and ready to present."',
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
        <p className="font-mono text-[10px] text-kj-lime tracking-[3px] uppercase mb-4">
          WHAT SERIES B AND C TEAMS SAY
        </p>
        <h2
          id="social-proof-heading"
          className="font-sans font-regular text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-12"
        >
          What Series B and C teams say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-5 rounded-[2px] border-[0.3px] border-kj-light/[0.07] bg-kj-slate/[0.18]"
              style={{ boxShadow: '0 1px 1px rgba(0,0,0,0.05), 0 1px 1.5px rgba(0,0,0,0.08)' }}
            >
              <p className="font-sans text-[14px] text-kj-light/80 leading-[1.6] flex-1">
                {q.quote}
              </p>
              <div className="h-px bg-transparent" />
              <p className="font-mono text-[11px] text-kj-slate leading-normal">
                {q.attribution}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1 mt-8 font-mono text-[13px] text-kj-lime hover:opacity-70 transition-opacity"
        >
          Read case studies →
        </Link>
      </div>
    </section>
  )
}
