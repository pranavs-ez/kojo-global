import Link from 'next/link'

const COL_PRODUCT = {
  header: 'PRODUCT',
  links: [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Pricing',      href: '/pricing' },
    { label: 'Security',     href: '/security' },
    { label: 'Brief wizard', href: '/signup' },
  ],
}

const COL_SERVICES = {
  header: 'SERVICES',
  links: [
    { label: 'Content & Copy',          href: '/services/content-and-copy' },
    { label: 'Research & Intelligence', href: '/services/research' },
    { label: 'Presentations',           href: '/services/presentations' },
    { label: 'Design',                  href: '/services/design' },
    { label: 'HR & Legal',              href: '/services/hr-and-legal' },
    { label: 'Language',                href: '/services/language' },
  ],
}

const COL_COMPANY = {
  header: 'COMPANY',
  links: [
    { label: 'About',        href: '/about' },
    { label: 'Blog',         href: '/blog' },
    { label: 'Case studies', href: '/case-studies' },
    { label: 'Glossary',     href: '/glossary' },
    { label: 'FAQ',          href: '/faq' },
  ],
}

const COL_FOR_YOU = {
  header: 'FOR YOU',
  links: [
    { label: 'For founders',        href: '/for/founders' },
    { label: 'For CMOs',            href: '/for/cmos' },
    { label: 'For chiefs of staff', href: '/for/chiefs-of-staff' },
    { label: 'For COOs',            href: '/for/coos' },
    { label: 'VC partners',         href: '/vc-partners' },
  ],
}

function LinkColumn({ col }: { col: typeof COL_PRODUCT }) {
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-mono text-[10px] text-kj-lime leading-normal">
        {col.header}
      </p>
      {col.links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-sans font-light text-[13px] text-kj-light/55 hover:text-kj-light/80 transition-colors whitespace-nowrap"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-surface-footer w-full">

      {/* Top border */}
      <div className="h-px bg-kj-light/[0.08]" />

      {/* ── Desktop body ───────────────────────────────────────────────── */}
      <div className="hidden md:flex items-start px-[120px] py-16 w-full max-w-[1440px] mx-auto">

        {/* Brand column */}
        <div className="flex flex-col gap-[10px] w-[260px] shrink-0">
          <p className="font-mono text-[16px] text-kj-light leading-normal">KOJO</p>
          <div className="font-sans font-light text-[13px] text-kj-light/35 leading-[1.6]">
            <p>Expert AI. Human verified.</p>
            <p>Business-ready.</p>
          </div>
        </div>

        {/* Spacer — pushes link columns to the right */}
        <div className="flex-1 min-w-0" />

        {/* 4 link columns with 56px gaps */}
        <LinkColumn col={COL_PRODUCT} />
        <div className="w-14 shrink-0" />
        <LinkColumn col={COL_SERVICES} />
        <div className="w-14 shrink-0" />
        <LinkColumn col={COL_COMPANY} />
        <div className="w-14 shrink-0" />
        <LinkColumn col={COL_FOR_YOU} />
      </div>

      {/* ── Mobile body ────────────────────────────────────────────────── */}
      <div className="flex md:hidden flex-col gap-8 px-6 py-12 w-full">

        {/* Brand column */}
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[16px] text-kj-light leading-normal">KOJO</p>
          <p className="font-sans font-light text-[13px] text-kj-light/35 leading-normal">
            Expert AI. Human verified. Business-ready.
          </p>
        </div>

        {/* Row 1: PRODUCT + COMPANY */}
        <div className="flex gap-0 w-full">
          <div className="w-[175px] shrink-0">
            <LinkColumn col={COL_PRODUCT} />
          </div>
          <div className="flex-1">
            <LinkColumn col={COL_COMPANY} />
          </div>
        </div>

        {/* Row 2: SERVICES + FOR YOU */}
        <div className="flex gap-0 w-full">
          <div className="w-[175px] shrink-0">
            <LinkColumn col={COL_SERVICES} />
          </div>
          <div className="flex-1">
            <LinkColumn col={COL_FOR_YOU} />
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="h-px bg-kj-light/[0.08]" />

      {/* ── Desktop legal bar ──────────────────────────────────────────── */}
      <div className="hidden md:flex flex-col gap-1 px-[120px] py-5 w-full max-w-[1440px] mx-auto">
        <p className="font-sans text-[11px] text-kj-light leading-normal whitespace-nowrap">
          © {new Date().getFullYear()} Kojo. All rights reserved. · Privacy policy · Terms of service · Cookie settings
        </p>
        <p className="font-sans text-[11px] text-kj-light/35 leading-normal whitespace-nowrap">
          ISO 27001:2022 certified. Your data is never used to train AI models without your consent.
        </p>
      </div>

      {/* ── Mobile legal bar ───────────────────────────────────────────── */}
      <div className="flex md:hidden flex-col gap-1 px-6 py-4 w-full">
        <p className="font-sans text-[11px] text-kj-light leading-normal">
          © {new Date().getFullYear()} Kojo. All rights reserved.
        </p>
        <p className="font-sans text-[11px] text-kj-light/35 leading-[1.5]">
          ISO 27001:2022 certified. Your data is never used to train AI models without your consent.
        </p>
      </div>

    </footer>
  )
}
