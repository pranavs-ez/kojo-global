'use client'

import Link from 'next/link'
import Badge from '@/components/atoms/Badge'
import CaretMotif from '@/components/atoms/CaretMotif'
import FlowCard from '@/components/home/FlowCard'

const TICKER_ITEMS = [
  '5.2M+ slides delivered',
  '12,000+ research reports',
  '8,000+ legal drafts',
  '6,000+ investor decks',
  '9,000+ competitive landscapes',
  '14,000+ press releases',
  '11,000+ email campaigns',
  '7,000+ board memos',
  '5,000+ job descriptions',
  '10,000+ translations delivered',
  '40+ languages',
  '7 years of delivery',
]

const METRICS = [
  { value: '10 MIN', label: 'AVERAGE BRIEF TIME' },
  { value: '1,000+', label: 'EXPERT NETWORK' },
  { value: '7 YRS', label: 'DELIVERY INFRASTRUCTURE' },
  { value: '99.8%', label: 'ON-TIME DELIVERY' },
]

export default function HeroSection() {
  const tickerText = TICKER_ITEMS.join('  ·  ') + '  ·  '

  return (
    <section className="relative bg-surface-hero overflow-hidden" aria-label="Hero">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(80,80,96,0.25) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(30,30,30,0.85) 100%)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 kj-container pt-24 pb-0">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0">

          {/* Left column — copy */}
          <div className="flex flex-col items-start lg:w-[580px] shrink-0 pt-8">
            <Badge variant="brand" className="mb-6">AI · Human · Done</Badge>

            <h1 className="font-sans font-semibold text-kj-light leading-[1.08] tracking-[-0.02em] mb-2"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
              Not a draft.<CaretMotif size="desktop" className="hidden lg:inline-block" />
              <CaretMotif size="mobile" className="inline-block lg:hidden" />
              <br />The finished thing.
            </h1>

            <p className="font-sans text-[18px] text-kj-light/36 leading-[1.62] mt-6 max-w-[480px]">
              AI drafts. Human experts verify. Business-ready output in hours, not weeks.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center gap-1.5 px-6 h-[52px] bg-kj-lime text-kj-dark font-mono font-medium text-[14px] rounded-[2px] hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all"
              >
                Start free — 100,000 Kojo on us →
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center h-[52px] font-mono font-regular text-[13px] text-kj-light/22 hover:text-kj-light/50 transition-colors"
              >
                See how it works ↓
              </Link>
            </div>
          </div>

          {/* Right column — flow diagram */}
          <div className="hidden lg:flex flex-1 flex-col items-end justify-start pt-4 pl-12">
            <div className="flex flex-col items-center w-full max-w-[396px]">
              <FlowCard type="input" />
              <div className="flex flex-col items-center py-1">
                <div className="w-px h-7 bg-kj-lime/75" />
                <div className="w-[7px] h-[7px] rounded-[1px] bg-kj-lime/75" />
              </div>
              <FlowCard type="expert" />
              <div className="flex flex-col items-center py-1">
                <div className="w-px h-7 bg-kj-lime/75" />
                <div className="w-[7px] h-[7px] rounded-[1px] bg-kj-lime/75" />
              </div>
              <FlowCard type="output" />
            </div>
          </div>
        </div>
      </div>

      {/* Status ticker */}
      <div
        className="relative z-10 mt-16 overflow-hidden h-8 flex items-center"
        style={{ background: '#191915', borderTop: '1px solid rgba(248,248,242,0.06)' }}
        aria-label="Delivery metrics"
      >
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: 'kj-ticker 40s linear infinite' }}
          aria-hidden="true"
        >
          {[0, 1].map((i) => (
            <span key={i} className="font-mono text-[11px] text-kj-lime/70 shrink-0 px-8">
              {tickerText}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics bar */}
      <div
        className="relative z-10 kj-section-border"
        style={{ background: '#212121' }}
      >
        <div className="kj-container">
          <div className="grid grid-cols-2 md:grid-cols-4 py-6 gap-6 md:gap-0">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`flex flex-col gap-1 ${i > 0 ? 'md:pl-8 md:border-l md:border-kj-slate/30' : ''}`}
              >
                <p className="font-mono font-medium text-[28px] text-kj-light leading-none">
                  {m.value}
                </p>
                <p className="font-mono text-[9px] text-kj-slate/85 tracking-wide">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
