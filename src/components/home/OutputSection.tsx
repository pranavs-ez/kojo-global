'use client'

import { useState } from 'react'
import Link from 'next/link'

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
          className="font-sans font-normal text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-3"
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

        {/* Content: left = prices, right = document preview */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — selected tab + prices */}
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
              {/* Agency — Figma 167:2565: rgba(80,80,96,0.1) bg, 0.5px rgba(80,80,96,0.25) border */}
              <div
                className="flex flex-col gap-2 p-5 rounded-[2px] flex-1"
                style={{
                  background: 'rgba(80,80,96,0.10)',
                  border: '0.5px solid rgba(80,80,96,0.25)',
                }}
              >
                <p className="font-mono text-[9px] tracking-[2px] uppercase" style={{ color: 'rgba(248,248,242,0.35)' }}>
                  AGENCY EQUIVALENT
                </p>
                <p className="font-mono font-medium text-[22px] text-kj-light leading-none">
                  {tab.agencyPrice}
                </p>
                <p className="font-sans font-light text-[12px] leading-[1.6]" style={{ color: 'rgba(248,248,242,0.35)' }}>
                  {tab.agencyTime}
                </p>
              </div>

              {/* Kojo — Figma 167:2569: rgba(222,255,0,0.06) bg, rgba(222,255,0,0.6) border, LIME price */}
              <div
                className="flex flex-col gap-2 p-5 rounded-[2px] flex-1"
                style={{
                  background: 'rgba(222,255,0,0.06)',
                  border: '1px solid rgba(222,255,0,0.60)',
                }}
              >
                <p className="font-mono text-[9px] tracking-[2px] uppercase text-kj-lime">
                  KOJO
                </p>
                {/* Price value is lime per Figma 167:2571 */}
                <p className="font-mono font-medium text-[22px] text-kj-lime leading-none">
                  {tab.kojoPrice}
                </p>
                <p className="font-sans font-light text-[12px] leading-[1.6]" style={{ color: 'rgba(222,255,0,0.36)' }}>
                  {tab.kojoTime}
                </p>
              </div>
            </div>
          </div>

          {/* Right — Document Preview (Figma 167:2573: exact recreation) */}
          <div
            className="lg:w-[540px] shrink-0 rounded-[2px] relative overflow-hidden"
            style={{
              background: '#232323',
              border: '1px solid rgba(222,255,0,0.35)',
              height: '320px',
            }}
          >
            {/* Header background */}
            <div
              className="absolute left-0 right-0 top-0"
              style={{ height: '44px', background: 'rgba(222,255,0,0.06)' }}
            />
            {/* Title */}
            <p className="absolute font-mono font-normal text-kj-lime text-[11px] leading-[1.4]" style={{ left: '19px', top: '15px' }}>
              BOARD MEMO — Q2 2026
            </p>
            {/* Verified badge */}
            <p className="absolute font-mono text-[9px]" style={{ right: '19px', top: '17px', color: 'rgba(222,255,0,0.36)' }}>
              ✓ VERIFIED
            </p>

            {/* STRATEGIC PROGRESS */}
            <p className="absolute font-mono text-[8px]" style={{ left: '19px', top: '59px', color: 'rgba(222,255,0,0.36)' }}>
              STRATEGIC PROGRESS
            </p>
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '75px', width: '460px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '89px', width: '460px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '103px', width: '200px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />

            {/* FINANCIAL SUMMARY */}
            <p className="absolute font-mono text-[8px]" style={{ left: '19px', top: '139px', color: 'rgba(222,255,0,0.36)' }}>
              FINANCIAL SUMMARY
            </p>
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '155px', width: '460px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '169px', width: '460px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '183px', width: '200px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />

            {/* DECISIONS REQUIRED */}
            <p className="absolute font-mono text-[8px]" style={{ left: '19px', top: '219px', color: 'rgba(222,255,0,0.36)' }}>
              DECISIONS REQUIRED
            </p>
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '235px', width: '460px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '249px', width: '460px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />
            <div className="absolute rounded-[1px]" style={{ left: '19px', top: '263px', width: '200px', height: '6px', background: 'rgba(248,248,242,0.10)' }} />

            {/* Footer divider + text */}
            <div className="absolute left-0 right-0" style={{ top: '289px', height: '1px', background: 'rgba(248,248,242,0.08)' }} />
            <p className="absolute font-mono text-[9px]" style={{ left: '19px', top: '299px', color: '#505060' }}>
              Delivered via Kojo · SME reviewed · Business-ready
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 font-sans text-[12px]" style={{ color: 'rgba(248,248,242,0.30)' }}>
          Agency equivalent shown for comparison. Kojo estimates are calculated in real time as you brief — you see the full cost before approving anything.
        </p>

        {/* CTA — Figma F4 Start Free CTA (600:85): Mono SemiBold 15px, lime bg */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-[15px] text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all"
            style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '15px', paddingBottom: '15px' }}
          >
            Start free →
          </Link>
        </div>
      </div>
    </section>
  )
}
