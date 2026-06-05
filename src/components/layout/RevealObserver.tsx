'use client'

/**
 * RevealObserver — site-wide scroll reveal.
 *
 * Strategy:
 * - Targets the direct children of every .kj-container that lives inside a
 *   <section> element, but ONLY for sections below the fold on load (no FOUC).
 * - Applies .kj-reveal (opacity:0, translateY(20px)) to each child, with a
 *   staggered transition-delay (80 ms per child, capped at 5 children).
 * - An IntersectionObserver watches each qualifying section and adds
 *   .is-visible to all its .kj-container children when the section enters view.
 * - Cleans up inline transition-delay after the animation completes so it
 *   doesn't interfere with any future layout updates.
 * - Bails out entirely when prefers-reduced-motion is set.
 * - Returns null — renders nothing in the DOM.
 */

import { useEffect } from 'react'

const STAGGER_MS = 80   // delay increment per child
const MAX_STAGGER = 5   // cap at 5 children to avoid overly long chains
const CLEANUP_MS = 1200 // how long after reveal to remove inline delay

export default function RevealObserver() {
  useEffect(() => {
    // Respect user motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const vh = window.innerHeight

    // Collect all sections that have a .kj-container
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section')
    )

    const toWatch: HTMLElement[] = []

    sections.forEach(section => {
      // Skip sections already visible on load (hero, above-fold content)
      const { top } = section.getBoundingClientRect()
      if (top < vh * 0.9) return

      const container = section.querySelector<HTMLElement>('.kj-container')
      if (!container) return

      // Mark each direct child for reveal with a staggered delay
      const children = Array.from(container.children) as HTMLElement[]
      children.forEach((child, i) => {
        child.classList.add('kj-reveal')
        const delay = Math.min(i, MAX_STAGGER - 1) * STAGGER_MS
        if (delay > 0) child.style.transitionDelay = `${delay}ms`
      })

      toWatch.push(section)
    })

    if (toWatch.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          const section = entry.target as HTMLElement
          const container = section.querySelector<HTMLElement>('.kj-container')
          if (container) {
            const children = Array.from(container.children) as HTMLElement[]
            children.forEach(child => {
              child.classList.add('is-visible')
              // Clean up inline delay once the transition is done
              const delay = parseFloat(child.style.transitionDelay || '0') || 0
              setTimeout(
                () => { child.style.transitionDelay = '' },
                CLEANUP_MS + delay
              )
            })
          }

          observer.unobserve(section)
        })
      },
      {
        // Fire when 8 % of the section is visible, with a small bottom offset
        // so sections don't snap in right at the viewport edge
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    toWatch.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return null
}
