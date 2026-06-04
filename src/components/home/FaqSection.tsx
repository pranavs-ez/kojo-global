'use client'

import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  {
    q: 'What is Kojo?',
    a: 'Kojo is an Expert AI platform that delivers business-ready professional outputs to Series B–D startups. AI produces the first draft; a subject matter expert reviews, corrects, and approves every output before it reaches the client. Kojo covers 70+ service categories — content, research, design, presentations, HR, legal, and language — all accessible through a single guided brief. Unlike AI writing tools, Kojo\'s quality standard is not a draft — it\'s a finished, verified deliverable.',
  },
  {
    q: 'How is Kojo different from AI writing tools like Jasper or ChatGPT?',
    a: 'AI writing tools produce a first draft and stop. That draft requires editing — 86% of marketers edit AI-generated content before publishing (AllAboutAI, 2025). Kojo uses AI to produce the first draft, then routes it to a subject matter expert who reviews, corrects, and approves the output against your brief before it reaches you. The expert review is the product — the AI is the infrastructure.',
  },
  {
    q: 'How is Kojo different from a freelance marketplace?',
    a: 'Kojo is a platform, not a marketplace. On a freelance marketplace, you browse profiles, vet candidates, communicate directly with individuals, and manage quality yourself. On Kojo, you submit a brief and receive a deliverable — you manage nothing in between. Your brand context lives in the platform, not in any one person\'s memory. There is no vetting, no chasing, and no ghosting.',
  },
  {
    q: 'What does "business-ready output" mean?',
    a: 'Business-ready means the deliverable meets the standard required for external use — submission to a board, publication on a website, delivery to an investor — without further editing. It is formatted to spec, factually accurate, on-brand in tone, and free of AI register. Kojo\'s quality standard is: would a senior professional publish this without changes? If not, it does not leave the system.',
  },
  {
    q: 'How much does a typical brief cost?',
    a: 'Kojo is priced in Kojo credits: 1,000 Kojo = $1. A standard blog post starts at 40,000 Kojo ($40). A press release starts at 40,000 Kojo ($40). A three-competitor competitive snapshot starts at 95,000 Kojo ($95). A full competitive landscape starts at 250,000 Kojo ($250). The actual cost is calculated in real time as you brief — you see the full estimate before approving anything.',
  },
  {
    q: 'Is my data secure?',
    a: 'Kojo is ISO 27001:2022 certified. Your data is never used to train AI models without your explicit written consent. Deliverable content is encrypted at rest and in transit. Brief data is isolated per client — no cross-contamination between accounts. Expert access to brief content is need-to-know only, logged and audited.',
  },
]

export default function FaqSection() {
  // First FAQ open by default
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="faq-heading"
    >
      <div className="kj-container">
        <h2
          id="faq-heading"
          className="font-sans font-normal text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-12"
        >
          Common questions
        </h2>

        <div itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, i) => (
            <div key={i} itemScope itemType="https://schema.org/Question">
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)' }} />
              <button
                className="w-full flex items-start justify-between gap-6 py-[27px] text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                <span className="font-sans font-semibold text-[15px] text-kj-light leading-[1.5] flex-1" itemProp="name">
                  {faq.q}
                </span>
                <span
                  className="font-mono text-[14px] shrink-0 mt-0.5 select-none"
                  style={{ color: 'rgba(222,255,0,0.70)' }}
                  aria-hidden="true"
                >
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-${i}`}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '400px' : '0px' }}
                itemScope itemType="https://schema.org/Answer"
              >
                <p
                  className="font-sans font-light text-[13px] leading-[1.6] pb-6 max-w-[840px]"
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

        <Link
          href="/faq"
          className="inline-flex items-center gap-1 mt-8 font-mono text-[13px] text-kj-lime hover:opacity-70 transition-opacity"
        >
          More questions answered →
        </Link>
      </div>
    </section>
  )
}
