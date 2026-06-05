'use client'

/**
 * RevealObserver — site-wide scroll reveal + hero entrance.
 *
 * Re-runs on every pathname change so animations fire on every page
 * after client-side navigation in Next.js App Router.
 *
 * Uses setTimeout(0) so only the final effect invocation runs the setup —
 * React StrictMode double-invokes effects in development, and the cleanup
 * calls clearTimeout, ensuring the first run's setup is always cancelled.
 *
 * CSS contract (globals.css):
 *   .kj-enter              → opacity:0, translateY(20px) — instant hide
 *   .kj-enter.is-visible   → opacity:1, translateY(0) WITH transition
 *   --reveal-delay         → CSS variable for per-child stagger delay
 */

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const STAGGER_MS  = 120  // delay increment per child
const MAX_STAGGER = 5    // cap stagger at 5 children
const HERO_BASE   = 150  // base delay for above-fold children (ms)

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let observer: IntersectionObserver | null = null

    // setTimeout(0) defers to next macrotask so React StrictMode's
    // cleanup+re-run cycle completes before we touch the DOM.
    const timer = setTimeout(() => {
      // Clean up any classes left over from the previous page
      document.querySelectorAll('.kj-enter').forEach(el => {
        el.classList.remove('kj-enter', 'is-visible')
        ;(el as HTMLElement).style.removeProperty('--reveal-delay')
      })

      const vh = window.innerHeight
      const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
      const toWatch: HTMLElement[] = []

      sections.forEach(section => {
        const { top } = section.getBoundingClientRect()
        const container = section.querySelector<HTMLElement>('.kj-container')
        if (!container) return

        const children = Array.from(container.children) as HTMLElement[]

        if (top < vh * 0.9) {
          // ── Above-fold: animate in on page load ─────────────────────────
          children.forEach((child, i) => {
            const delay = HERO_BASE + Math.min(i, MAX_STAGGER - 1) * STAGGER_MS
            child.style.setProperty('--reveal-delay', `${delay}ms`)
            child.classList.add('kj-enter')
          })

          // Double-rAF: paint one opacity:0 frame, then trigger transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              children.forEach(child => child.classList.add('is-visible'))
            })
          })
        } else {
          // ── Below-fold: reveal on scroll ────────────────────────────────
          children.forEach((child, i) => {
            const delay = Math.min(i, MAX_STAGGER - 1) * STAGGER_MS
            if (delay > 0) child.style.setProperty('--reveal-delay', `${delay}ms`)
            child.classList.add('kj-enter')
          })
          toWatch.push(section)
        }
      })

      if (toWatch.length === 0) return

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            const section = entry.target as HTMLElement
            const container = section.querySelector<HTMLElement>('.kj-container')
            if (container) {
              ;(Array.from(container.children) as HTMLElement[]).forEach(child => {
                child.classList.add('is-visible')
              })
            }
            observer?.unobserve(section)
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )

      toWatch.forEach(s => observer!.observe(s))
    }, 0)

    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [pathname])

  return null
}
