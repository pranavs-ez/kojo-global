'use client'
// Founders F8 — FAQ | bg #181818

import { useState } from 'react'

const FAQS = [
  {
    q: 'Do I need to manage anyone?',
    a: 'No. You submit a brief and receive a deliverable. Nothing to manage in between. The platform routes the brief, the expert reviews the output, and you receive the finished thing. No vendors. No follow-ups. No status updates.',
  },
  {
    q: 'What if my brief is vague?',
    a: 'The wizard is designed to resolve vagueness before you submit. If a question is unclear, leave a note — the expert will contact you via the platform for clarification before proceeding. Delivery SLAs pause during any clarification window.',
  },
  {
    q: 'How fast can you turn around an investor update?',
    a: 'Standard delivery for an investor update email is 4 hours. With Fast Track, it can be delivered in 2 hours. Brief it in the morning; review it before the board call.',
  },
  {
    q: 'Is my fundraise data secure?',
    a: 'Yes. ISO 27001:2022 certified. Your brief content — including fundraise data, financial projections, and strategic information — is encrypted at rest and in transit, isolated per client, and never used to train AI models. Expert access is need-to-know only, logged and audited. Full detail at /security.',
  },
  {
    q: 'What if the output needs changes?',
    a: 'Raise a revision request in the platform. The expert team corrects within the brief scope at no additional cost. Delivery Assurance (included free on your first project) covers scenarios where the revision does not resolve the issue — fix or refund, no conditions.',
  },
  {
    q: 'Does Kojo work for my industry?',
    a: 'Yes. Kojo covers 70+ service categories across content, research, design, legal, HR, and language — all of which are industry-agnostic in delivery structure. Vertical context comes from your brief: when you specify your sector, competitive environment, and audience, the expert matched to your brief brings relevant domain knowledge. Series B companies across fintech, deep-tech, climate, health, B2B SaaS, and professional services have all briefed successfully on Kojo.',
  },
]

export default function FoundersFaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="founders-faq-heading"
    >
      <div className="kj-container">

        <h2
          id="founders-faq-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Questions founders ask
        </h2>

        <div itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, i) => (
            <div key={i} itemScope itemType="https://schema.org/Question">
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)' }} />
              <button
                className="w-full flex items-start justify-between gap-6 py-[27px] text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`founders-faq-${i}`}
              >
                <span className="font-sans font-semibold text-kj-light flex-1"
                  style={{ fontSize: '15px', lineHeight: '1.5' }} itemProp="name">
                  {faq.q}
                </span>
                <span className="font-mono shrink-0 mt-0.5 select-none"
                  style={{ fontSize: '14px', color: 'rgba(222,255,0,0.70)' }} aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div
                id={`founders-faq-${i}`}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '500px' : '0px' }}
                itemScope itemType="https://schema.org/Answer"
              >
                <p className="font-sans font-light text-[13px] leading-[1.6] pb-6"
                  style={{ color: 'rgba(248,248,242,0.60)' }} itemProp="text">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)' }} />
        </div>

      </div>
    </section>
  )
}
