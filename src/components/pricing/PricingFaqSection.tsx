'use client'
// Pricing F7 — FAQ | bg #181818

import { useState } from 'react'

const FAQS = [
  {
    q: 'Do Kojo credits expire?',
    a: 'Credits purchased in a volume pack expire 12 months from purchase. The free allocation on signup expires 30 days from your account creation date. Paid credits do not expire within 12 months.',
  },
  {
    q: 'Can I top up mid-brief?',
    a: 'Yes. If a brief estimate exceeds your current balance, you can purchase additional credits from the approval screen. The brief begins after the top-up is confirmed.',
  },
  {
    q: 'Is there a monthly minimum?',
    a: 'No. Kojo has no monthly minimum, no seat licence, and no retainer. You pay for completed deliverables. If you do not brief anything in a given month, you pay nothing.',
  },
  {
    q: 'Do you offer volume discounts?',
    a: 'Yes. Volume packs carry a percentage discount over the pay-as-you-go rate applied automatically at checkout. Enterprise accounts with high monthly volumes receive negotiated rates — contact us to discuss.',
  },
  {
    q: 'What counts as a revision?',
    a: 'A revision is a request to correct the output within the original brief scope — fixing a factual error, adjusting tone, reformatting a section, or addressing a missed key message. It does not include expanding scope (adding sections, increasing word count, changing format). Scope changes require a new brief.',
  },
  {
    q: 'Can I use my credits across service categories?',
    a: 'Yes. Your Kojo balance applies across all 70+ service categories. Brief a blog post on Monday and a competitive snapshot on Thursday from the same balance. No category-specific allocations.',
  },
  {
    q: 'What is Fast Track?',
    a: 'Fast Track routes your brief to parallel processing — multiple experts working simultaneously — compressing the delivery window by approximately 50%. Available at brief approval at +50% of the base Kojo cost.',
  },
  {
    q: 'What is Delivery Assurance?',
    a: 'Delivery Assurance is a guarantee add-on: if the output does not meet your brief, we fix it or refund the Kojo cost. Included free on your first project. Available as an add-on at +15% on subsequent briefs.',
  },
]

export default function PricingFaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="pricing-faq-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          PRICING QUESTIONS
        </p>

        <h2
          id="pricing-faq-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Pricing questions
        </h2>

        <div itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, i) => (
            <div key={i} itemScope itemType="https://schema.org/Question">
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)' }} />
              <button
                className="w-full flex items-start justify-between gap-6 py-[27px] text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`pricing-faq-${i}`}
              >
                <span className="font-sans font-semibold text-kj-light flex-1"
                  style={{ fontSize: '15px', lineHeight: '1.5' }}
                  itemProp="name">
                  {faq.q}
                </span>
                <span className="font-mono shrink-0 mt-0.5 select-none"
                  style={{ fontSize: '14px', color: 'rgba(222,255,0,0.70)' }}
                  aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div
                id={`pricing-faq-${i}`}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '400px' : '0px' }}
                itemScope itemType="https://schema.org/Answer"
              >
                <p className="font-sans font-light text-[13px] leading-[1.6] pb-6"
                  style={{ color: 'rgba(248,248,242,0.60)' }}
                  itemProp="text">
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
