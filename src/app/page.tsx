import type { Metadata } from 'next'
import HeroSection      from '@/components/home/HeroSection'
import RecognitionSection from '@/components/home/RecognitionSection'
import ProcessSection   from '@/components/home/ProcessSection'
import ServicesSection  from '@/components/home/ServicesSection'
import SocialProofSection from '@/components/home/SocialProofSection'
import ComparisonSection from '@/components/home/ComparisonSection'
import IcpSection       from '@/components/home/IcpSection'
import VcSection        from '@/components/home/VcSection'
import FaqSection       from '@/components/home/FaqSection'
import FinalCtaSection  from '@/components/home/FinalCtaSection'

export const metadata: Metadata = {
  title: 'Not a draft. The finished thing. — Kojo',
  description:
    'Expert AI platform for Series B–D startups. AI drafts. Human experts verify. Business-ready output in hours, not weeks. $100 free on signup — no card required.',
  alternates: {
    canonical: 'https://kojo.global',
  },
  openGraph: {
    title: 'Not a draft. The finished thing. — Kojo',
    description:
      'Expert AI platform for Series B–D startups. AI drafts. Human experts verify. Business-ready output in hours, not weeks.',
    url: 'https://kojo.global',
    siteName: 'Kojo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Not a draft. The finished thing. — Kojo',
    description:
      'Expert AI platform for Series B–D startups. AI drafts. Human experts verify. Business-ready output in hours, not weeks.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RecognitionSection />
      <ProcessSection />
      <ServicesSection />
      <SocialProofSection />
      <ComparisonSection />
      <IcpSection />
      <VcSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}
