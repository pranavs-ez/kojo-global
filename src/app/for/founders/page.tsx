import type { Metadata } from 'next'
import FoundersHeroSection       from '@/components/founders/FoundersHeroSection'
import FoundersProblemSection    from '@/components/founders/FoundersProblemSection'
import FoundersWhatToSection     from '@/components/founders/FoundersWhatToSection'
import FoundersProcessSection    from '@/components/founders/FoundersProcessSection'
import FoundersAnchorSection     from '@/components/founders/FoundersAnchorSection'
import FoundersProofSection      from '@/components/founders/FoundersProofSection'
import FoundersPricingSection    from '@/components/founders/FoundersPricingSection'
import FoundersFaqSection        from '@/components/founders/FoundersFaqSection'
import FoundersCtaSection        from '@/components/founders/FoundersCtaSection'

export const metadata: Metadata = {
  title: 'Post-Raise Execution for Series B Founders — Brief In, Done in Hours | Kojo',
  description:
    '0–90 days post-raise is the most output-intensive stretch of your company\'s life. Kojo delivers business-ready content, research, and materials — brief in, done in hours.',
  alternates: { canonical: 'https://kojo.global/for/founders' },
  openGraph: {
    title: 'Post-Raise Execution for Series B Founders — Kojo',
    description: '0–90 days post-raise is the most output-intensive stretch of your company\'s life. Brief in, done in hours.',
    url: 'https://kojo.global/for/founders',
    siteName: 'Kojo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Post-Raise Execution for Series B Founders — Kojo',
    description: '0–90 days post-raise is the most output-intensive stretch of your company\'s life.',
  },
}

export default function ForFoundersPage() {
  return (
    <>
      <FoundersHeroSection />
      <FoundersProblemSection />
      <FoundersWhatToSection />
      <FoundersProcessSection />
      <FoundersAnchorSection />
      <FoundersProofSection />
      <FoundersPricingSection />
      <FoundersFaqSection />
      <FoundersCtaSection />
    </>
  )
}
