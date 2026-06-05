// Pricing F4 — Free Tiers | bg #212121
import Link from 'next/link'

const TIERS = [
  {
    amount: '100,000 Kojo',
    usd: '$100',
    name: 'Standard signup',
    desc: 'No card required. Enough for a blog post, a press release, or a 3-competitor snapshot.',
    cta: { label: 'Sign up free →', href: 'https://app.kojo.global' },
  },
  {
    amount: '250,000 Kojo',
    usd: '$250',
    name: 'Referred by a Kojo client',
    desc: '2.5× the standard allocation. Ask a current Kojo client for their referral link — credits apply automatically on signup.',
    cta: null,
  },
  {
    amount: '500,000 Kojo',
    usd: '$500',
    name: 'VC portfolio company',
    desc: '5× the standard allocation plus a 30-minute dedicated onboarding session. Check if your VC is a Kojo partner.',
    cta: { label: 'Check VC partnership →', href: '/vc-partners' },
  },
]

export default function PricingFreeTiersSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="pricing-tiers-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          GET STARTED
        </p>

        <h2
          id="pricing-tiers-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Start for free. Prove the quality before you pay.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-6"
              style={{
                background: 'rgba(80,80,96,0.12)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                borderRadius: '2px',
              }}
            >
              {/* Amount + sub */}
              <p className="font-mono" style={{ fontSize: '26px', color: '#DEFF00', fontWeight: 600, lineHeight: 1.1, marginBottom: '4px' }}>
                {t.amount}
              </p>
              <p className="font-sans font-light" style={{ fontSize: '13px', color: '#DEFF00', opacity: 0.65, marginBottom: '16px' }}>
                ({t.usd}) free
              </p>

              {/* Separator */}
              <div style={{ height: '1px', background: 'rgba(80,80,96,0.30)', marginBottom: '16px' }} />

              {/* Name + desc */}
              <p className="font-sans font-semibold text-kj-light mb-2" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                {t.name}
              </p>
              <p className="font-sans font-light flex-1" style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.50)', marginBottom: t.cta ? '16px' : '0' }}>
                {t.desc}
              </p>

              {/* CTA */}
              {t.cta && (
                <Link
                  href={t.cta.href}
                  className="font-mono font-normal text-kj-lime hover:opacity-70 transition-opacity"
                  style={{ fontSize: '12px' }}
                >
                  {t.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
