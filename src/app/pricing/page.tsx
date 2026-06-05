import type { Metadata } from 'next'
import PricingHeroSection      from '@/components/pricing/PricingHeroSection'
import PricingCreditSection    from '@/components/pricing/PricingCreditSection'
import PricingSampleSection    from '@/components/pricing/PricingSampleSection'
import PricingFreeTiersSection from '@/components/pricing/PricingFreeTiersSection'
import PricingVariablesSection from '@/components/pricing/PricingVariablesSection'
import PricingAssuranceSection from '@/components/pricing/PricingAssuranceSection'
import PricingFaqSection       from '@/components/pricing/PricingFaqSection'
import PricingCtaSection       from '@/components/pricing/PricingCtaSection'

export const metadata: Metadata = {
  title: 'Kojo Pricing: No Retainer. No Monthly Minimum. — Kojo',
  description:
    'Kojo is priced by what you use, not by the month. 100,000 Kojo ($100) free on signup. Competitive analysis for $250. Blog post for $40. See the full table.',
  alternates: { canonical: 'https://kojo.global/pricing' },
  openGraph: {
    title: 'Kojo Pricing: No Retainer. No Monthly Minimum. — Kojo',
    description: 'Kojo is priced by what you use, not by the month. 100,000 Kojo ($100) free on signup.',
    url: 'https://kojo.global/pricing',
    siteName: 'Kojo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kojo Pricing: No Retainer. No Monthly Minimum. — Kojo',
    description: 'Kojo is priced by what you use, not by the month. 100,000 Kojo ($100) free on signup.',
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingHeroSection />
      <PricingCreditSection />
      <PricingSampleSection />
      <PricingFreeTiersSection />
      <PricingVariablesSection />
      <PricingAssuranceSection />
      <PricingFaqSection />
      <PricingCtaSection />
    </>
  )
}
