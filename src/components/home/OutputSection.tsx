'use client'
// Output / The Standard (S4) — "What business-ready looks like"
// Figma nodes 167:2555–167:2590 | Background: #1e1e1e

import { useState } from 'react'
import Link from 'next/link'

// ─── Tab data ────────────────────────────────────────────────────────────────

const TABS = [
  {
    label: 'Board memo',
    desc: 'Structured board update covering strategic progress, financial summary, and key decisions required. Formatted for direct submission — no editing needed.',
    agencyPrice: '$4,800',
    agencyTime: '2 weeks',
    kojoPrice: '$490',
    kojoTime: '24 hours',
    // Document preview data — 4 distinct designs per tab
    doc: {
      title: 'BOARD MEMO — Q2 2026',
      sections: ['STRATEGIC PROGRESS', 'FINANCIAL SUMMARY', 'DECISIONS REQUIRED'],
      widths: [460, 460, 200], // short bar widths
    },
  },
  {
    label: 'Competitive landscape',
    desc: 'Full competitive analysis covering market positioning, feature comparison, pricing benchmarks, and strategic recommendations. Sourced and verified.',
    agencyPrice: '$8,000–$15,000',
    agencyTime: '3–4 weeks',
    kojoPrice: '$250',
    kojoTime: '24 hours',
    doc: {
      title: 'COMPETITIVE LANDSCAPE — Q2 2026',
      sections: ['EXECUTIVE SUMMARY', 'COMPETITOR MATRIX', 'STRATEGIC RECOMMENDATIONS'],
      widths: [380, 460, 240],
    },
  },
  {
    label: 'Press release',
    desc: 'News-ready press release formatted for wire distribution. Structured lead, supporting quotes, boilerplate, and contact block. No editing required.',
    agencyPrice: '$1,200',
    agencyTime: '1 week',
    kojoPrice: '$80',
    kojoTime: '4 hours',
    doc: {
      title: 'PRESS RELEASE — FOR IMMEDIATE RELEASE',
      sections: ['HEADLINE & DATELINE', 'BODY COPY', 'BOILERPLATE & CONTACT'],
      widths: [420, 460, 200],
    },
  },
  {
    label: 'Email sequence',
    desc: '3–5 email campaign sequence with subject lines, preview text, and body copy. Brand voice applied throughout. Configured for your email platform.',
    agencyPrice: '$2,400',
    agencyTime: '1–2 weeks',
    kojoPrice: '$120',
    kojoTime: '8 hours',
    doc: {
      title: 'EMAIL SEQUENCE — 3-PART CAMPAIGN',
      sections: ['EMAIL 01 — WELCOME', 'EMAIL 02 — VALUE PROP', 'EMAIL 03 — CTA'],
      widths: [400, 460, 260],
    },
  },
]

// ─── Document Preview — exact Figma 167:2573 structure, adapted per tab ──────
// Container: 540×320px, #232323 bg, rgba(222,255,0,0.35) border
// Header: 44px lime tint bg | title Mono 11px #DEFF00 | ✓ VERIFIED badge

function DocumentPreview({ doc }: { doc: typeof TABS[0]['doc'] }) {
  // 3 section groups with 3 bars each (full, full, short)
  const sections = doc.sections
  const tops = [59, 139, 219]
  const barTops = [
    [75, 89, 103],
    [155, 169, 183],
    [235, 249, 263],
  ]

  return (
    <div
      className="relative rounded-[2px] overflow-hidden shrink-0"
      style={{
        width: '540px',
        height: '320px',
        background: '#232323',
        border: '1px solid rgba(222,255,0,0.35)',
      }}
    >
      {/* Header tint */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{ height: '44px', background: 'rgba(222,255,0,0.06)' }}
      />

      {/* Document title */}
      <p
        className="absolute font-mono font-normal text-kj-lime"
        style={{ fontSize: '11px', lineHeight: '1.4', left: '19px', top: '15px' }}
      >
        {doc.title}
      </p>

      {/* Verified badge */}
      <p
        className="absolute font-mono font-normal"
        style={{ fontSize: '9px', right: '19px', top: '17px', color: 'rgba(222,255,0,0.36)' }}
      >
        ✓ VERIFIED
      </p>

      {/* Sections */}
      {sections.map((label, si) => (
        <div key={label}>
          {/* Section label */}
          <p
            className="absolute font-mono font-normal"
            style={{ fontSize: '8px', left: '19px', top: `${tops[si]}px`, color: 'rgba(222,255,0,0.36)' }}
          >
            {label}
          </p>
          {/* Content bars: full, full, short */}
          {barTops[si].map((barTop, bi) => (
            <div
              key={bi}
              className="absolute rounded-[1px]"
              style={{
                left: '19px',
                top: `${barTop}px`,
                width: `${bi === 2 ? doc.widths[si] : 460}px`,
                height: '6px',
                background: 'rgba(248,248,242,0.10)',
              }}
            />
          ))}
        </div>
      ))}

      {/* Footer divider */}
      <div
        className="absolute left-0 right-0"
        style={{ top: '289px', height: '1px', background: 'rgba(248,248,242,0.08)' }}
      />

      {/* Footer text */}
      <p
        className="absolute font-mono font-normal"
        style={{ fontSize: '9px', left: '19px', top: '299px', color: '#505060' }}
      >
        Delivered via Kojo · SME reviewed · Business-ready
      </p>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

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

        {/* Eyebrow — 199:6 "THE STANDARD" */}
        <p
          className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}
        >
          THE STANDARD
        </p>

        {/* H2 */}
        <h2
          id="output-heading"
          className="font-sans font-normal text-kj-light mb-3"
          style={{ fontSize: '48px', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          What business-ready looks like
        </h2>

        {/* Subtitle */}
        <p
          className="font-sans text-[15px] mb-8"
          style={{ color: 'rgba(248,248,242,0.45)' }}
        >
          We show you the agency equivalent before you see any Kojo price. Every time.
        </p>

        {/* ── Tab row ─────────────────────────────────────────────────────── */}
        {/* Active: rgba(222,255,0,0.08) bg, #deff00 border + text            */}
        {/* Inactive: rgba(80,80,96,0.12) bg, rgba(80,80,96,0.35) border,     */}
        {/*           rgba(248,248,242,0.45) text  — per 167:2555/2557         */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist">
          {TABS.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className="rounded-[2px] font-mono font-normal transition-all"
              style={{
                fontSize: '12px',
                lineHeight: '1.4',
                padding: '9px 13px',
                background: active === i ? 'rgba(222,255,0,0.08)' : 'rgba(80,80,96,0.12)',
                color: active === i ? '#DEFF00' : 'rgba(248,248,242,0.45)',
                border: active === i
                  ? '1px solid #DEFF00'
                  : '1px solid rgba(80,80,96,0.35)',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Content row ─────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — title + desc + price cards */}
          <div className="flex flex-col gap-6 lg:flex-1">

            {/* Tab title — 167:2563: Sans SemiBold 20px */}
            <div>
              <p
                className="font-sans font-semibold text-kj-light mb-3"
                style={{ fontSize: '20px', lineHeight: '1.2' }}
              >
                {tab.label}
              </p>
              <p
                className="font-sans font-light text-[14px] leading-[1.7]"
                style={{ color: 'rgba(248,248,242,0.55)' }}
              >
                {tab.desc}
              </p>
            </div>

            {/* Price comparison — Agency first (167:2565), then Kojo (167:2569) */}
            <div className="flex flex-col sm:flex-row gap-3">

              {/* Agency — rgba(80,80,96,0.10) bg, 0.5px rgba(80,80,96,0.25) border */}
              <div
                className="flex flex-col gap-2 p-5 rounded-[2px] flex-1"
                style={{
                  background: 'rgba(80,80,96,0.10)',
                  border: '0.5px solid rgba(80,80,96,0.25)',
                }}
              >
                <p
                  className="font-mono font-normal"
                  style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(248,248,242,0.35)' }}
                >
                  AGENCY EQUIVALENT
                </p>
                <p className="font-mono font-medium text-kj-light leading-none" style={{ fontSize: '22px' }}>
                  {tab.agencyPrice}
                </p>
                <p className="font-sans font-light text-[12px] leading-[1.6]" style={{ color: 'rgba(248,248,242,0.35)' }}>
                  {tab.agencyTime}
                </p>
              </div>

              {/* Kojo — rgba(222,255,0,0.06) bg, rgba(222,255,0,0.6) border, LIME prices */}
              <div
                className="flex flex-col gap-2 p-5 rounded-[2px] flex-1"
                style={{
                  background: 'rgba(222,255,0,0.06)',
                  border: '1px solid rgba(222,255,0,0.60)',
                }}
              >
                <p className="font-mono font-normal text-kj-lime" style={{ fontSize: '9px', letterSpacing: '2px' }}>
                  KOJO
                </p>
                <p className="font-mono font-medium text-kj-lime leading-none" style={{ fontSize: '22px' }}>
                  {tab.kojoPrice}
                </p>
                <p className="font-sans font-light text-[12px] leading-[1.6]" style={{ color: 'rgba(222,255,0,0.36)' }}>
                  {tab.kojoTime}
                </p>
              </div>
            </div>
          </div>

          {/* Right — Document Preview (changes per tab) */}
          <div className="hidden lg:block">
            <DocumentPreview doc={tab.doc} />
          </div>
        </div>

        {/* CTA — Figma 600:85: Mono SemiBold 15px, lime bg */}
        <div className="mt-8 flex justify-start">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-[2px] font-mono font-semibold text-kj-dark bg-kj-lime hover:bg-kj-lime-hover hover:drop-shadow-lime-cta transition-all"
            style={{ fontSize: '15px', paddingLeft: '32px', paddingRight: '32px', paddingTop: '15px', paddingBottom: '15px' }}
          >
            Start free →
          </Link>
        </div>

      </div>
    </section>
  )
}
