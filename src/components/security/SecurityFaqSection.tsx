'use client'
// Security F5 — Security FAQ | bg #181818

import { useState } from 'react'

const FAQS = [
  {
    q: 'Who can see my brief content?',
    a: 'Brief content is visible to: (1) the subject matter expert assigned to your brief — need-to-know access, logged and audited; (2) Kojo\'s quality assurance team if a Delivery Assurance claim is raised; (3) Kojo\'s senior team if an escalation is required. No other parties have access. AI processing uses brief content in an isolated session; the brief is not retained by the AI model provider beyond the processing window.',
  },
  {
    q: 'Is Kojo compliant with GDPR?',
    a: 'Yes. Kojo processes personal data in accordance with GDPR for EU and EEA clients and UK GDPR for UK clients. Personal data contained in briefs is processed under a lawful basis. A Data Processing Agreement (DPA) is available on request and is standard for enterprise accounts.',
  },
  {
    q: 'Can I request a DPA?',
    a: 'Yes. A standard DPA is available for all accounts. Contact us to request it — standard accounts receive the DPA within 2 business days; enterprise accounts negotiate a custom DPA as part of the onboarding process.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Standard accounts: EU-based cloud infrastructure (EU West region). UK accounts: UK data residency available on request. US accounts: US-based infrastructure by default. Enterprise accounts can specify data residency during onboarding.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Brief data and deliverables are retained for 30 days after cancellation, during which you can export them. After 30 days, all data is permanently deleted from Kojo\'s systems. A deletion confirmation is issued on request.',
  },
]

export default function SecurityFaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="security-faq-heading"
    >
      <div className="kj-container">

        <h2
          id="security-faq-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Security questions
        </h2>

        <div itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, i) => (
            <div key={i} itemScope itemType="https://schema.org/Question">
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)' }} />
              <button
                className="w-full flex items-start justify-between gap-6 py-[27px] text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`sec-faq-${i}`}
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
                id={`sec-faq-${i}`}
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
