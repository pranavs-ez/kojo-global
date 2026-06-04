'use client'

import Link from 'next/link'
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
  { value: '10 MIN',  label: 'FIRST RESPONSE SLA' },
  { value: '1,000+', label: 'SUBJECT MATTER EXPERTS' },
  { value: '7 YRS',  label: 'DELIVERY INFRASTRUCTURE' },
  { value: '99.8%',  label: 'SLA COMPLIANCE' },
]

export default function HeroSection() {
  const tickerContent = TICKER_ITEMS.join('  ·  ') + '  ·  '

  return (
    <section className="relative overflow-hidden" style={{ background: '#1e1e1e' }} aria-label="Hero">

      {/* Dot grid — transparent at centre, visible at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(80,80,96,0.45) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.4) 55%, black 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.4) 55%, black 85%)',
        }}
      />

      {/* Hero frame — exactly 900px, matches Figma bg-texture height */}
      <div className="relative z-10 kj-container h-[900px] flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">

          {/* Left column — copy */}
          <div className="flex flex-col items-start lg:w-[580px] shrink-0">

            {/* Eyebrow — Label/Eyebrow style: Mono Regular 10px, Lime, 3px tracking, uppercase */}
            <p
              className="font-mono font-normal text-kj-lime uppercase mb-6"
              style={{ fontSize: '10px', letterSpacing: '3px' }}
            >
              AI · HUMAN · DONE
            </p>

            <h1
              className="font-sans font-semibold text-kj-light leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Not a draft
              <CaretMotif size="desktop" className="hidden lg:inline-block" />
              <CaretMotif size="mobile" className="inline-block lg:hidden" />
              <br />
              The finished thing.
            </h1>

            <p
              className="font-sans text-[18px] leading-[1.62] mt-6 max-w-[480px]"
              style={{ color: 'rgba(248,248,242,0.36)' }}
            >
              AI drafts. Human experts verify. Business-ready output in hours, not weeks.
            </p>

            {/* CTAs — Primary + Secondary with 12px gap matching Figma */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 h-[46px] bg-kj-lime text-kj-dark font-mono font-medium text-[14px] rounded-[2px] hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap"
              >
                Start free — 100,000 Kojo on us →
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center h-[46px] font-mono text-[13px] transition-colors"
                style={{ color: 'rgba(248,248,242,0.22)' }}
              >
                See how it works ↓
              </Link>
            </div>
          </div>

          {/* Right column — flow diagram (from System Foundations) */}
          <div className="hidden lg:flex flex-1 justify-end items-center pl-12">
            <div className="flex flex-col items-center w-[396px] gap-0">
              <FlowCard type="input" />
              {/* Connector */}
              <div className="flex flex-col items-center">
                <div className="w-px h-7" style={{ background: 'rgba(222,255,0,0.75)' }} />
                <div className="w-[7px] h-[7px] rounded-[1px]" style={{ background: 'rgba(222,255,0,0.75)' }} />
              </div>
              <FlowCard type="expert" />
              {/* Connector */}
              <div className="flex flex-col items-center">
                <div className="w-px h-7" style={{ background: 'rgba(222,255,0,0.75)' }} />
                <div className="w-[7px] h-[7px] rounded-[1px]" style={{ background: 'rgba(222,255,0,0.75)' }} />
              </div>
              <FlowCard type="output" />
            </div>
          </div>
        </div>
      </div>

      {/* Status ticker — 32px, #191915 */}
      <div
        className="relative z-10 overflow-hidden"
        style={{
          background: '#191915',
          borderTop: '1px solid rgba(248,248,242,0.06)',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Delivery metrics"
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'kj-ticker 50s linear infinite' }}
          aria-hidden="true"
        >
          <span
            className="font-mono shrink-0"
            style={{ fontSize: '11px', color: 'rgba(222,255,0,0.70)', padding: '0 32px' }}
          >
            {tickerContent}{tickerContent}
          </span>
        </div>
      </div>

      {/* Metrics bar — 96px, #212121 */}
      <div
        className="relative z-10"
        style={{
          background: '#212121',
          borderTop: '1px solid rgba(248,248,242,0.08)',
          height: '96px',
        }}
      >
        <div className="kj-container h-full">
          <div className="grid grid-cols-2 md:grid-cols-4 h-full">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="flex flex-col justify-center gap-1"
                style={i > 0 ? {
                  borderLeft: '1px solid rgba(80,80,96,0.22)',
                  paddingLeft: '32px',
                } : {}}
              >
                <p className="font-mono font-medium text-[28px] text-kj-light leading-[1.2]">
                  {m.value}
                </p>
                <p
                  className="font-mono text-[9px] tracking-[1.5px]"
                  style={{ color: 'rgba(80,80,96,0.85)' }}
                >
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
