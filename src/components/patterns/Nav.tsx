'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/data/navigation'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop nav */}
      <header
        role="banner"
        className="sticky top-0 z-[1030] hidden md:block"
        style={{
          background: `
            radial-gradient(ellipse 70% 120% at 50% -20%, rgba(160,160,185,0.13) 0%, transparent 70%),
            rgba(48, 48, 60, 0.72)
          `,
          backdropFilter: 'blur(20px) saturate(1.5) brightness(1.05)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.5) brightness(1.05)',
          borderBottom: '1px solid rgba(48, 48, 60, 0.92)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18)',
        }}
      >
        <div className="flex items-center justify-between h-[64px] px-[120px] max-w-[1440px] mx-auto">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-mono text-[18px] text-kj-light tracking-[4px] uppercase hover:opacity-80 transition-opacity"
            aria-label="Kojo — home"
          >
            KOJO
          </Link>

          {/* Nav links */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-[52px] list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[14px] text-kj-light/50 hover:text-kj-light/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <Link
            href="/signup"
            className="inline-flex items-center justify-center w-[136px] h-[38px] bg-kj-lime text-kj-dark font-mono font-medium text-[13px] rounded-[2px] hover:bg-[#C8CC00] transition-colors"
          >
            Start free →
          </Link>
        </div>
      </header>

      {/* Mobile nav */}
      <header
        role="banner"
        className="sticky top-0 z-[1030] md:hidden"
        style={{
          background: 'rgba(30, 30, 30, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(48, 48, 60, 0.92)',
        }}
      >
        <div className="flex items-center justify-between h-[56px] px-6">
          <Link
            href="/"
            className="font-mono text-[16px] text-kj-light tracking-[3px] uppercase"
            aria-label="Kojo — home"
          >
            KOJO
          </Link>

          <button
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-[5px] p-2"
          >
            <span className={`block w-5 h-px bg-kj-light transition-all ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px bg-kj-light transition-all ${open ? 'opacity-0 w-5' : 'w-5'}`} />
            <span className={`block h-px bg-kj-light transition-all ${open ? '-rotate-45 -translate-y-[6px] w-5' : 'w-3'}`} />
          </button>
        </div>

        {/* Offcanvas */}
        {open && (
          <div
            id="mobile-nav"
            className="absolute top-full left-0 right-0 bg-kj-dark border-t border-kj-light/10 pb-6"
          >
            <nav aria-label="Mobile navigation">
              <ul className="list-none m-0 p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-[18px] font-sans text-[16px] text-kj-light/80 border-b border-kj-light/10 hover:text-kj-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="px-6 pt-5">
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-[142px] h-[41px] bg-kj-lime text-kj-dark font-mono font-medium text-[13px] rounded-[2px]"
              >
                Start free →
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
