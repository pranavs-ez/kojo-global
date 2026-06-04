'use client'

import { useState } from 'react'

const TABS = [
  {
    label: 'Board memo',
    desc: 'Structured board update covering strategic progress, financial summary, and key decisions required. Formatted for direct submission — no editing needed.',
    agencyPrice: '$4,800',
    agencyTime: '2 weeks',
    kojoPrice: '$490',
    kojoTime: '24 hours',
  },
  {
    label: 'Competitive landscape',
    desc: 'Full competitive analysis covering market positioning, feature comparison, pricing benchmarks, and strategic recommendations. Sourced and verified.',
    agencyPrice: '$8,000–$15,000',
    agencyTime: '3–4 weeks',
    kojoPrice: '$250',
    kojoTime: '24 hours',
  },
  {
    label: 'Press release',
    desc: 'News-ready press release formatted for wire distribution. Structured lead, supporting quotes, boilerplate, and contact block. No editing required.',
    agencyPrice: '$1,200',
    agencyTime: '1 week',
    kojoPrice: '$80',
    kojoTime: '4 hours',
  },
  {
    label: 'Email sequence',
    desc: '3–5 email campaign sequence with subject lines, preview text, and body copy. Brand voice applied throughout. Configured for your email platform.',
    agencyPrice: '$2,400',
    agencyTime: '1–2 weeks',
    kojoPrice: '$120',
    kojoTime: '8 hours',
  },
]

export default function OutputSection() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="output-heading"
    >
      <div className="kj-container">
        {/* Eyebrow + heading */}
        <p className="font-mono text-[10px] text-kj-lime tracking-[3px] uppercase mb-4">
          THE STANDARD
        </p>
        <h2
          id="output-heading"
          className="font-sans font-regular text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-3"
        >
          What business-ready looks like
        </h2>
        <p className="font-sans text-[15px] mb-8" style={{ color: 'rgba(248,248,242,0.45)' }}>
          We show you the agency equivalent before you see any Kojo price. Every time.
        </p>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist">
          {TABS.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-[2px] font-mono text-[12px] transition-all"
              style={{
                background: active === i ? 'rgba(222,255,0,0.08)' : 'transparent',
                color: active === i ? '#DEFF00' : 'rgba(248,248,242,0.40)',
                border: active === i ? '1px solid rgba(222,255,0,0.35)' : '1px solid rgba(80,80,96,0.30)',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content: left = tab detail + prices, right = document preview */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — selected tab content */}
          <div className="flex flex-col gap-6 lg:flex-1">
            <div>
              <p className="font-sans font-semibold text-[20px] text-kj-light mb-3">
                {tab.label}
              </p>
              <p className="font-sans text-[14px] leading-[1.7]" style={{ color: 'rgba(248,248,242,0.55)' }}>
                {tab.desc}
              </p>
            </div>

            {/* Price comparison — Agency first, always */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Agency */}
              <div
                className="flex flex-col gap-2 p-5 rounded-[2px] flex-1"
                style={{ background: '#232323', border: '0.3px solid rgba(248,248,242,0.07)' }}
              >
                <p className="font-mono text-[9px] tracking-[2px] uppercase" style={{ color: 'rgba(80,80,96,0.7)' }}>
                  AGENCY EQUIVALENT
                </p>
                <p className="font-mono font-medium text-[22px] text-kj-light leading-none">
                  {tab.agencyPrice}
                </p>
                <p className="font-sans text-[12px]" style={{ color: 'rgba(248,248,242,0.40)' }}>
                  {tab.agencyTime}
                </p>
              </div>
              {/* Kojo */}
              <div
                className="flex flex-col gap-2 p-5 rounded-[2px] flex-1"
                style={{
                  background: 'rgba(222,255,0,0.05)',
                  border: '0.3px solid rgba(222,255,0,0.25)',
                  borderTop: '3px solid #DEFF00',
                }}
              >
                <p className="font-mono text-[9px] tracking-[2px] uppercase text-kj-lime">
                  KOJO
                </p>
                <p className="font-mono font-medium text-[22px] text-kj-light leading-none">
                  {tab.kojoPrice}
                </p>
                <p className="font-sans text-[12px]" style={{ color: 'rgba(248,248,242,0.40)' }}>
                  {tab.kojoTime}
                </p>
              </div>
            </div>
          </div>

          {/* Right — document preview */}
          <div
            className="lg:w-[540px] shrink-0 rounded-[2px] flex items-center justify-center"
            style={{
              background: '#232323',
              border: '0.3px solid rgba(248,248,242,0.07)',
              minHeight: '320px',
            }}
          >
            <div className="flex flex-col items-center gap-3 p-8">
              {/* Mock document lines */}
              <div className="w-full max-w-[400px] flex flex-col gap-3">
                <div className="h-4 rounded-[1px] w-2/3" style={{ background: 'rgba(248,248,242,0.08)' }} />
                <div className="h-2 rounded-[1px] w-full" style={{ background: 'rgba(248,248,242,0.05)' }} />
                <div className="h-2 rounded-[1px] w-5/6" style={{ background: 'rgba(248,248,242,0.05)' }} />
                <div className="h-2 rounded-[1px] w-full" style={{ background: 'rgba(248,248,242,0.05)' }} />
                <div className="mt-2 h-2 rounded-[1px] w-3/4" style={{ background: 'rgba(248,248,242,0.05)' }} />
                <div className="h-2 rounded-[1px] w-full" style={{ background: 'rgba(248,248,242,0.05)' }} />
                <div className="h-2 rounded-[1px] w-4/5" style={{ background: 'rgba(248,248,242,0.05)' }} />
                <div className="mt-2 h-2 rounded-[1px] w-full" style={{ background: 'rgba(248,248,242,0.05)' }} />
                <div className="h-2 rounded-[1px] w-2/3" style={{ background: 'rgba(248,248,242,0.05)' }} />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 font-sans text-[12px]" style={{ color: 'rgba(248,248,242,0.30)' }}>
          Agency equivalent shown for comparison. Kojo estimates are calculated in real time as you brief — you see the full cost before approving anything.
        </p>
      </div>
    </section>
  )
}
