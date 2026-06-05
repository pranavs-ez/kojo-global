import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import Nav from '@/components/patterns/Nav'
import Footer from '@/components/patterns/Footer'
import RevealObserver from '@/components/layout/RevealObserver'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Not a draft. The finished thing. — Kojo',
  description:
    'AI drafts. Experts verify. Business-ready output in hours, not weeks. 100,000 Kojo ($100) free on signup.',
  metadataBase: new URL('https://kojo.global'),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const isLp = headersList.get('x-kojo-is-lp') === '1'

  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <a href="#main-content" className="kj-skip-link">
          Skip to main content
        </a>
        {!isLp && <Nav />}
        <main id="main-content">{children}</main>
        {!isLp && <Footer />}
        <RevealObserver />
      </body>
    </html>
  )
}
