'use client'

/**
 * PageTransition — elegant fade-up on every route change.
 *
 * Uses key={pathname} so React remounts the wrapper div on each
 * navigation, replaying the .kj-page-enter CSS animation fresh.
 * No JS animation libraries required.
 */

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div key={pathname} className="kj-page-enter">
      {children}
    </div>
  )
}
