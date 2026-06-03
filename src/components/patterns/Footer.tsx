import Link from 'next/link'
import { FOOTER_LINKS } from '@/data/navigation'
import Divider from '@/components/atoms/Divider'

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-surface-footer"
      aria-label="Footer navigation"
    >
      <Divider type="footer-rule" />

      {/* Footer body */}
      <div className="kj-container py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">

          {/* Brand column */}
          <div className="md:w-[260px] shrink-0">
            <p className="font-mono text-[16px] text-kj-light mb-3">KOJO</p>
            <p className="font-sans text-[13px] font-light text-kj-light/35 leading-relaxed max-w-[200px]">
              Brief in. Business-ready output out. Every time.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block flex-1" />

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
            {(Object.entries(FOOTER_LINKS) as [string, readonly { label: string; href: string }[]][]).map(
              ([columnHeader, links]) => (
                <div key={columnHeader}>
                  <p className="font-mono text-[10px] text-kj-lime mb-5">
                    {columnHeader}
                  </p>
                  <ul className="list-none m-0 p-0 flex flex-col gap-[14px]">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-sans font-light text-[13px] text-kj-light/55 hover:text-kj-light/80 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <Divider type="footer-rule" />
      <div className="kj-container py-5">
        <p className="font-sans text-[11px] text-kj-light">
          © {new Date().getFullYear()} Kojo. All rights reserved. Backed by EZ Works.
        </p>
        <p className="font-sans text-[11px] text-kj-light mt-1">
          ISO 27001:2022 certified · Privacy Policy · Terms of Service
        </p>
      </div>
    </footer>
  )
}
