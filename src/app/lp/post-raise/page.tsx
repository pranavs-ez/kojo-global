import type { Metadata } from 'next'
import LpHeroSection      from '@/components/lp-post-raise/LpHeroSection'
import Lp90DaySection     from '@/components/lp-post-raise/Lp90DaySection'
import LpHowItWorks       from '@/components/lp-post-raise/LpHowItWorks'
import LpAnchorSection    from '@/components/lp-post-raise/LpAnchorSection'
import LpProofSection     from '@/components/lp-post-raise/LpProofSection'
import LpFinalCta         from '@/components/lp-post-raise/LpFinalCta'

export const metadata: Metadata = {
  title: 'Congrats on the Raise. Here\'s What the Next 90 Days Look Like. — Kojo',
  robots: { index: false, follow: false },
}

// Isolated LP — no site nav, no footer nav
export default function LpPostRaisePage() {
  return (
    <div style={{ background: '#1e1e1e' }}>
      <LpHeroSection />
      <Lp90DaySection />
      <LpHowItWorks />
      <LpAnchorSection />
      <LpProofSection />
      <LpFinalCta />
    </div>
  )
}
