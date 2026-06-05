import type { Metadata } from 'next'
import SecurityHeroSection       from '@/components/security/SecurityHeroSection'
import SecurityIsoSection        from '@/components/security/SecurityIsoSection'
import SecurityDataSection       from '@/components/security/SecurityDataSection'
import SecurityEnterpriseSection from '@/components/security/SecurityEnterpriseSection'
import SecurityFaqSection        from '@/components/security/SecurityFaqSection'
import SecurityCtaSection        from '@/components/security/SecurityCtaSection'

export const metadata: Metadata = {
  title: 'Security & Data Privacy — ISO 27001:2022 Certified — Kojo',
  description:
    'Kojo is ISO 27001:2022 certified. Your data is never used to train AI models without consent. Enterprise-grade security from day one. Download the security overview.',
  alternates: { canonical: 'https://kojo.global/security' },
  openGraph: {
    title: 'Security & Data Privacy — ISO 27001:2022 Certified — Kojo',
    description: 'Kojo is ISO 27001:2022 certified. Your data is never used to train AI models without consent.',
    url: 'https://kojo.global/security',
    siteName: 'Kojo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & Data Privacy — ISO 27001:2022 Certified — Kojo',
    description: 'Kojo is ISO 27001:2022 certified. Your data is never used to train AI models without consent.',
  },
}

export default function SecurityPage() {
  return (
    <>
      <SecurityHeroSection />
      <SecurityIsoSection />
      <SecurityDataSection />
      <SecurityEnterpriseSection />
      <SecurityFaqSection />
      <SecurityCtaSection />
    </>
  )
}
