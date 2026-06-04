'use client'

import Link from 'next/link'
import CaretMotif from '@/components/atoms/CaretMotif'
import FlowCard from '@/components/home/FlowCard'

// Ticker text — matches Figma 167:2442 (placeholder numbers replaced with actuals)
const TICKER = [
  '5.2M+ slides delivered', '12,000+ research reports', '8,000+ legal drafts',
  '6,000+ investor decks', '9,000+ competitive landscapes', '14,000+ press releases',
  '11,000+ email campaigns', '7,000+ board memos', '5,000+ job descriptions',
  '10,000+ translations delivered', '40+ languages', '7 years of delivery',
].join('  ·  ') + '  ·  '

// Metrics — Figma 167:2333, values at 28px Mono Medium / labels at 9px Mono Regular
const METRICS = [
  { value: '10 MIN',  label: 'FIRST RESPONSE SLA' },
  { value: '1,000+', label: 'SUBJECT MATTER EXPERTS' },
  { value: '7 YRS',  label: 'DELIVERY INFRASTRUCTURE' },
  { value: '99.8%',  label: 'SLA COMPLIANCE' },
]

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#1e1e1e' }}
      aria-label="Hero"
    >

      {/* ── Dot grid ──────────────────────────────────────────────────────── */}
      {/* Figma bg-texture 167:94: uniform 2×2 dots on 24px grid, no mask   */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(80,80,96,0.45) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── Gradient overlay ──────────────────────────────────────────────── */}
      {/* Figma 167:2315 hero-gradient-overlay: dark at centre, transparent  */}
      {/* at edges — rgba(30,30,30,0.8) → 0.4 at 50% → 0 at 100%            */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 72% 58% at 50% 50%, rgba(30,30,30,0.80) 0%, rgba(30,30,30,0.40) 50%, rgba(30,30,30,0) 100%)',
        }}
      />

      {/* ── Hero content frame ────────────────────────────────────────────── */}
      {/* Desktop: exactly 900px tall (Figma bg-texture height), vertically  */}
      {/* centred. Mobile: natural height with 96px top/bottom padding.       */}
      <div
        className="relative z-10 kj-container flex flex-col justify-center py-20 lg:py-0"
        style={{ minHeight: 'min(900px, calc(100vh - 200px))' }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center">

          {/* ── Left column — copy ──────────────────────────────────────── */}
          <div className="flex flex-col items-start lg:w-[620px] shrink-0">

            {/* Eyebrow — Figma 199:2 "EXPERT AI" */}
            {/* Mono Regular 10px, #DEFF00, tracking 3px, leading 1.2       */}
            <p
              className="font-mono font-normal text-kj-lime uppercase mb-6"
              style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
            >
              EXPERT AI
            </p>

            {/* H1 — Figma 167:2327: SemiBold 72px, leading 1.08, tracking -1.44px */}
            {/* Caret 167:2328 sits inline after "Not a draft" on same line  */}
            <h1
              className="font-sans font-semibold text-kj-light"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}
            >
              Not a draft<CaretMotif />
              <br />
              The finished thing.
            </h1>

            {/* Subtitle — Figma 167:2329: Regular 18px, rgba(248,248,242,0.36), leading 1.62 */}
            {/* 148px gap from H1 bottom on desktop — aligns with Expert AI card bottom */}
            <p
              className="font-sans text-[18px] mt-8 lg:mt-[148px] max-w-[480px]"
              style={{ color: 'rgba(248,248,242,0.36)', lineHeight: '1.62' }}
            >
              AI drafts. Human experts verify. Business-ready output in hours, not weeks.
            </p>

            {/* CTAs — Figma 201:92 primary + 201:66 text link              */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8">

              {/* Primary — bg #DEFF00, Mono Medium 14px, px-[32px] py-[14px] */}
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-[2px] font-mono font-medium text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all whitespace-nowrap"
                style={{ fontSize: '14px', lineHeight: '1.4', paddingLeft: '32px', paddingRight: '32px', paddingTop: '14px', paddingBottom: '14px' }}
              >
                Start free — 100,000 Kojo on us →
              </Link>

              {/* Text link — Mono Regular 13px, rgba(248,248,242,0.22)      */}
              <Link
                href="#how-it-works"
                className="inline-flex items-center font-mono text-[13px] whitespace-nowrap transition-opacity hover:opacity-70"
                style={{ color: 'rgba(248,248,242,0.22)', lineHeight: '1.4' }}
              >
                See how it works ↓
              </Link>
            </div>
          </div>

          {/* ── Right column — FlowCards ─────────────────────────────────── */}
          {/* Width 396px (Figma card width), hidden on mobile               */}
          <div className="hidden lg:flex flex-1 justify-end items-center">
            <div className="flex flex-col items-center" style={{ width: '396px' }}>

              <FlowCard type="input" />

              {/* Connector: 2px×28px vertical line + 8×7px dot, overlapping 2px = 33px total */}
              {/* Figma 167:2351/2352: line rgba(222,255,0,0.75), dot #DEFF00 */}
              <div className="flex flex-col items-center shrink-0" style={{ height: '33px' }}>
                <div style={{ width: '2px', height: '28px', background: 'rgba(222,255,0,0.75)', flexShrink: 0 }} />
                <div style={{ width: '8px', height: '7px', background: '#DEFF00', marginTop: '-2px', flexShrink: 0 }} />
              </div>

              <FlowCard type="expert" />

              {/* Connector: same pattern */}
              <div className="flex flex-col items-center shrink-0" style={{ height: '33px' }}>
                <div style={{ width: '2px', height: '28px', background: 'rgba(222,255,0,0.75)', flexShrink: 0 }} />
                <div style={{ width: '8px', height: '7px', background: '#DEFF00', marginTop: '-2px', flexShrink: 0 }} />
              </div>

              <FlowCard type="output" />
            </div>
          </div>

        </div>
      </div>

      {/* ── Status Ticker ─────────────────────────────────────────────────── */}
      {/* Figma 167:2441: #1e1e1e bg, 32px tall, Mono Regular 11px           */}
      {/* text rgba(222,255,0,0.36), borderTop rgba(248,248,242,0.06)         */}
      <div
        className="relative z-10 overflow-hidden"
        style={{
          background: '#1e1e1e',
          borderTop: '1px solid rgba(248,248,242,0.06)',
          height: '32px',
        }}
        aria-hidden="true"
      >
        <div
          className="flex items-center h-full whitespace-nowrap"
          style={{ animation: 'kj-ticker 50s linear infinite' }}
        >
          <span
            className="font-mono shrink-0"
            style={{ fontSize: '11px', color: '#DEFF00', padding: '0 32px' }}
          >
            {TICKER}{TICKER}
          </span>
        </div>
      </div>

      {/* ── Metrics Bar ───────────────────────────────────────────────────── */}
      {/* Figma 167:2333: #212121 bg, 96px tall                              */}
      {/* Values: Mono Medium 28px #f8f8f2 | Labels: Mono Regular 9px        */}
      {/* rgba(80,80,96,0.85) tracking 1.5px                                 */}
      {/* Dividers: rgba(80,80,96,0.22), 50px tall, between each metric      */}
      <div
        className="relative z-10"
        style={{
          background: '#212121',
          borderTop: '1px solid rgba(248,248,242,0.08)',
        }}
      >
        <div className="kj-container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={[
                  'flex flex-col justify-center py-6',
                  i === 1 || i === 3
                    ? 'border-l border-[rgba(80,80,96,0.22)] pl-8'
                    : i === 2
                    ? 'md:border-l md:border-[rgba(80,80,96,0.22)] md:pl-8'
                    : '',
                ].join(' ')}
              >
                <p
                  className="font-mono font-medium text-kj-light leading-[1.2]"
                  style={{ fontSize: '28px' }}
                >
                  {m.value}
                </p>
                <p
                  className="font-mono font-normal mt-1"
                  style={{ fontSize: '9px', color: 'rgba(80,80,96,0.85)', letterSpacing: '1.5px' }}
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
