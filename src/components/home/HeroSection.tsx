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
  const tickerContent = TICKER_ITEMS.join('  ·  ') + '  ·  '

  return (
    <section className="relative bg-surface-hero overflow-hidden" aria-label="Hero">

      {/* Dot grid — visible at edges, fades to transparent at centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(80,80,96,0.35) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, black 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, black 75%)',
        }}
      />

      {/* Hero content — min-height matches Figma 900px hero frame */}
      <div className="relative z-10 kj-container min-h-[900px] flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0 py-20 lg:py-0">

          {/* Left column — copy */}
          <div className="flex flex-col items-start lg:w-[580px] shrink-0">
            <Badge variant="brand" className="mb-6">AI · Human · Done</Badge>

            <h1
              className="font-sans font-semibold text-kj-light leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Not a draft<CaretMotif size="desktop" className="hidden lg:inline-block" /><CaretMotif size="mobile" className="inline-block lg:hidden" />
              <br />The finished thing.
            </h1>

            <p className="font-sans text-[18px] leading-[1.62] mt-6 max-w-[480px]"
              style={{ color: 'rgba(248,248,242,0.36)' }}>
              AI drafts. Human experts verify. Business-ready output in hours, not weeks.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 h-[52px] bg-kj-lime text-kj-dark font-mono font-medium text-[14px] rounded-[2px] hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap"
              >
                Start free — 100,000 Kojo on us →
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center h-[52px] font-mono text-[13px] transition-colors"
                style={{ color: 'rgba(248,248,242,0.22)' }}
              >
                See how it works ↓
              </Link>
            </div>
          </div>

          {/* Right column — flow diagram */}
          <div className="hidden lg:flex flex-1 justify-end items-center pl-16">
            <div className="flex flex-col items-center w-[396px]">
              <FlowCard type="input" />
              <div className="flex flex-col items-center">
                <div className="w-px h-7" style={{ background: 'rgba(222,255,0,0.75)' }} />
                <div className="w-[7px] h-[7px] rounded-[1px]" style={{ background: 'rgba(222,255,0,0.75)' }} />
              </div>
              <FlowCard type="expert" />
              <div className="flex flex-col items-center">
                <div className="w-px h-7" style={{ background: 'rgba(222,255,0,0.75)' }} />
                <div className="w-[7px] h-[7px] rounded-[1px]" style={{ background: 'rgba(222,255,0,0.75)' }} />
              </div>
              <FlowCard type="output" />
            </div>
          </div>
        </div>
      </div>

      {/* Status ticker */}
      <div
        className="relative z-10 overflow-hidden h-8 flex items-center"
        style={{ background: '#191915', borderTop: '1px solid rgba(248,248,242,0.06)' }}
        aria-label="Delivery metrics ticker"
      >
        <div
          className="flex whitespace-nowrap shrink-0"
          style={{ animation: 'kj-ticker 50s linear infinite' }}
          aria-hidden="true"
        >
          <span className="font-mono text-[11px] px-8" style={{ color: 'rgba(222,255,0,0.70)' }}>
            {tickerContent}{tickerContent}
          </span>
        </div>
      </div>

      {/* Metrics bar */}
      <div
        className="relative z-10"
        style={{ background: '#212121', borderTop: '1px solid rgba(248,248,242,0.08)' }}
      >
        <div className="kj-container">
          <div className="grid grid-cols-2 md:grid-cols-4 py-6">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="flex flex-col gap-1 py-2 md:py-0"
                style={i > 0 ? { borderLeft: '1px solid rgba(80,80,96,0.30)', paddingLeft: '32px' } : {}}
              >
                <p className="font-mono font-medium text-[28px] text-kj-light leading-none">
                  {m.value}
                </p>
                <p className="font-mono text-[9px] tracking-wide" style={{ color: 'rgba(80,80,96,0.85)' }}>
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
