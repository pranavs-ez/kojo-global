import Link from 'next/link'

const COLUMNS = [
  {
    header: 'PRODUCT',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Pricing',      href: '/pricing' },
      { label: 'Security',     href: '/security' },
      { label: 'Brief wizard', href: '/signup' },
    ],
  },
  {
    header: 'SERVICES',
    links: [
      { label: 'Content & Copy',          href: '/services/content-and-copy' },
      { label: 'Research & Intelligence', href: '/services/research' },
      { label: 'Presentations',           href: '/services/presentations' },
      { label: 'Design',                  href: '/services/design' },
      { label: 'HR & Legal',              href: '/services/hr-and-legal' },
      { label: 'Language',                href: '/services/language' },
    ],
  },
  {
    header: 'COMPANY',
    links: [
      { label: 'About',        href: '/about' },
      { label: 'Blog',         href: '/blog' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Glossary',     href: '/glossary' },
      { label: 'FAQ',          href: '/faq' },
    ],
  },
  {
    header: 'FOR YOU',
    links: [
      { label: 'For founders',        href: '/for/founders' },
      { label: 'For CMOs',            href: '/for/cmos' },
      { label: 'For chiefs of staff', href: '/for/chiefs-of-staff' },
      { label: 'For COOs',            href: '/for/coos' },
      { label: 'VC partners',         href: '/vc-partners' },
    ],
  },
]

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-surface-footer w-full">

      {/* Top border */}
      <div className="h-px bg-kj-light/[0.08]" />

      {/* Footer body */}
      <div className="flex items-start px-[120px] py-16 w-full max-w-[1440px] mx-auto">

        {/* Brand column */}
        <div className="flex flex-col gap-[10px] w-[260px] shrink-0">
          <p className="font-mono text-[16px] text-kj-light leading-normal">
            KOJO
          </p>
          <div className="font-sans font-light text-[13px] text-kj-light opacity-35 leading-[1.6]">
            <p>Expert AI. Human verified.</p>
            <p>Business-ready.</p>
          </div>
        </div>

        {/* Spacer — pushes columns to the right */}
        <div className="flex-1 min-w-0" />

        {/* Link columns */}
        {COLUMNS.map((col, i) => (
          <>
            {i > 0 && <div key={`gap-${i}`} className="w-14 shrink-0" />}
            <div key={col.header} className="flex flex-col gap-[14px] shrink-0">
              <p className="font-mono text-[10px] text-kj-lime leading-normal">
                {col.header}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans font-light text-[13px] text-kj-light opacity-55 hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </>
        ))}
      </div>

      {/* Bottom rule */}
      <div className="h-px bg-kj-light/[0.08] mx-0" />

      {/* Legal bar */}
      <div className="flex flex-col gap-1 px-[120px] py-5 w-full max-w-[1440px] mx-auto">
        <p className="font-sans text-[11px] text-kj-light leading-normal whitespace-nowrap">
          © {new Date().getFullYear()} Kojo. All rights reserved. · Privacy policy · Terms of service · Cookie settings
        </p>
        <p className="font-sans text-[11px] text-kj-light opacity-35 leading-normal whitespace-nowrap">
          ISO 27001:2022 certified. Your data is never used to train AI models without your consent.
        </p>
      </div>

    </footer>
  )
}
