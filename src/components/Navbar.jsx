import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { BRAND } from '../data/listings'

const NAV = [
  { label: 'Properties', href: '#listings'  },
  { label: 'Map',        href: '#map'        },
  { label: 'About',      href: '#why'        },
  { label: 'Reviews',    href: '#reviews'    },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-forest-700/97 backdrop-blur-md shadow-luxury border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none select-none group">
            <span className="font-display italic text-white text-xl lg:text-2xl font-medium tracking-wide group-hover:text-stone-300 transition-colors">
              Havillah
            </span>
            <span className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-terra-400 mt-0.5">
              Realtors · Lagos
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-[0.72rem] font-500 tracking-[0.12em] uppercase text-stone-300 hover:text-terra-400 transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-terra-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA row */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND.whatsapp}`}
              className="flex items-center gap-1.5 text-[0.72rem] font-500 text-stone-400 hover:text-terra-400 transition-colors"
            >
              <Phone size={13} className="text-terra-500" />
              +2349038074516
            </a>
            <a
              href="#contact"
              className="font-sans text-[0.72rem] font-600 tracking-[0.14em] uppercase text-forest-900 bg-terra-500 hover:bg-terra-400 px-6 py-2.5 rounded-full transition-all duration-200 shadow-terra hover:shadow-lg hover:-translate-y-px"
            >
              Book Viewing
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-stone-300 hover:text-terra-400 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-forest-700/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-all duration-400 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 55}ms` }}
            className="font-display italic text-4xl text-white hover:text-terra-400 transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 font-sans text-sm font-600 tracking-widest uppercase text-forest-900 bg-terra-500 px-10 py-4 rounded-full hover:bg-terra-400 transition-colors"
        >
          Book Private Viewing
        </a>
      </div>
    </>
  )
}
