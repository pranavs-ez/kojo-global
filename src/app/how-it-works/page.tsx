import type { Metadata } from 'next'
import HiwHeroSection     from '@/components/how-it-works/HiwHeroSection'
import HiwPipelineSection from '@/components/how-it-works/HiwPipelineSection'
import HiwBriefSection    from '@/components/how-it-works/HiwBriefSection'
import HiwOutputSection   from '@/components/how-it-works/HiwOutputSection'
import HiwExpertSection   from '@/components/how-it-works/HiwExpertSection'
import HiwSlaSection      from '@/components/how-it-works/HiwSlaSection'
import HiwApprovalSection from '@/components/how-it-works/HiwApprovalSection'
import HiwFaqSection      from '@/components/how-it-works/HiwFaqSection'
import HiwCtaSection      from '@/components/how-it-works/HiwCtaSection'

export const metadata: Metadata = {
  title: 'How Kojo Works: Brief in, Business-Ready Output Out — Kojo',
  description:
    'Exactly what happens between your brief and your deliverable. AI drafts. Human experts verify. Business-ready output in hours. ISO 27001 certified.',
  alternates: {
    canonical: 'https://kojo.global/how-it-works',
  },
  openGraph: {
    title: 'How Kojo Works: Brief in, Business-Ready Output Out — Kojo',
    description:
      'Exactly what happens between your brief and your deliverable. AI drafts. Human experts verify. Business-ready output in hours.',
    url: 'https://kojo.global/how-it-works',
    siteName: 'Kojo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Kojo Works: Brief in, Business-Ready Output Out — Kojo',
    description:
      'Exactly what happens between your brief and your deliverable. AI drafts. Human experts verify. Business-ready output in hours.',
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <HiwHeroSection />
      <HiwPipelineSection />
      <HiwBriefSection />
      <HiwOutputSection />
      <HiwExpertSection />
      <HiwSlaSection />
      <HiwApprovalSection />
      <HiwFaqSection />
      <HiwCtaSection />
    </>
  )
}
