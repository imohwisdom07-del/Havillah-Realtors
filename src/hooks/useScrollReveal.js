import { useEffect } from 'react'

/**
 * Wires a single IntersectionObserver at the app level.
 * Adds `.visible` to any .reveal / .reveal-left / .reveal-right element
 * when it enters the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right'
    )
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
