export const NAV_LINKS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'Services',     href: '/services/content-and-copy' },
  { label: 'About',        href: '/about' },
] as const

export const FOOTER_LINKS = {
  PRODUCT: [
    { label: 'How it works',  href: '/how-it-works' },
    { label: 'Pricing',       href: '/pricing' },
    { label: 'Security',      href: '/security' },
    { label: 'Brief wizard',  href: '/signup' },
  ],
  SERVICES: [
    { label: 'Content & Copy',          href: '/services/content-and-copy' },
    { label: 'Research & Intelligence', href: '/services/research' },
    { label: 'Presentations',           href: '/services/presentations' },
    { label: 'Design',                  href: '/services/design' },
    { label: 'HR & Legal',              href: '/services/hr-and-legal' },
    { label: 'Language',                href: '/services/language' },
  ],
  COMPANY: [
    { label: 'About',         href: '/about' },
    { label: 'Blog',          href: '/blog' },
    { label: 'Case studies',  href: '/case-studies' },
    { label: 'Glossary',      href: '/glossary' },
    { label: 'FAQ',           href: '/faq' },
  ],
  'FOR YOU': [
    { label: 'For founders',        href: '/for/founders' },
    { label: 'For CMOs',            href: '/for/cmos' },
    { label: 'For chiefs of staff', href: '/for/chiefs-of-staff' },
    { label: 'For COOs',            href: '/for/coos' },
    { label: 'VC partners',         href: '/vc-partners' },
  ],
} as const
