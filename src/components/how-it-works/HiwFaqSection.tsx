'use client'
// HIW F8 — Process Questions | bg #181818
// Accordion FAQ — process-specific questions

import { useState } from 'react'

const FAQS = [
  {
    q: 'Can I brief in any language?',
    a: 'Yes. Kojo supports briefs in English, Arabic, French, German, Spanish, and Portuguese. For other languages, submit the brief in English and specify the required output language. The expert layer includes native-language reviewers for 40+ languages.',
  },
  {
    q: 'What if my brief is incomplete?',
    a: 'The wizard is designed to catch incompleteness before you submit. If a critical field is missing, the platform flags it. If an expert requires clarification after submission — which happens on fewer than 8% of briefs — they will message you via the platform and await your response before proceeding. Delivery SLAs pause during clarification windows.',
  },
  {
    q: 'Can I revise the output?',
    a: 'Yes. If the output does not meet your brief, raise a revision request in the platform. The same expert team reviews and corrects. Revisions are included in the Kojo cost for the brief. Delivery Assurance covers scenarios where the revision itself does not resolve the issue.',
  },
  {
    q: 'What if I want to change scope after the brief is approved?',
    a: 'Scope changes after approval require a new brief or a brief amendment. The estimator re-runs and you approve the revised cost. No work begins on the amended scope until you approve.',
  },
  {
    q: 'How does my brand context get stored?',
    a: "Brand context is built from three sources: (1) your brand guidelines uploaded during onboarding, (2) specific brief inputs you provide on each assignment, and (3) approved outputs from previous briefs. Each approved deliverable enriches the platform's understanding of your tone, preferred formats, and quality standards. The more you brief, the more precisely the platform calibrates.",
  },
]

export default function HiwFaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="hiw-faq-heading"
    >
      <div className="kj-container">

        {/* H2 */}
        <h2
          id="hiw-faq-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Process questions
        </h2>

        {/* Accordion */}
        <div itemScope itemType="https://schema.org/FAQPage" style={{ maxWidth: '760px' }}>
          {FAQS.map((faq, i) => (
            <div key={i} itemScope itemType="https://schema.org/Question">
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)' }} />
              <button
                className="w-full flex items-start justify-between gap-6 py-[27px] text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`hiw-faq-${i}`}
              >
                <span
                  className="font-sans font-semibold text-kj-light flex-1"
                  style={{ fontSize: '15px', lineHeight: '1.5' }}
                  itemProp="name"
                >
                  {faq.q}
                </span>
                <span
                  className="font-mono shrink-0 mt-0.5 select-none"
                  style={{ fontSize: '14px', color: 'rgba(222,255,0,0.70)' }}
                  aria-hidden="true"
                >
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div
                id={`hiw-faq-${i}`}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '400px' : '0px' }}
                itemScope
                itemType="https://schema.org/Answer"
              >
                <p
                  className="font-sans font-light text-[13px] leading-[1.6] pb-6"
                  style={{ color: 'rgba(248,248,242,0.60)' }}
                  itemProp="text"
                >
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
