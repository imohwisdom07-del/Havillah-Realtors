import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDown, MapPin, TrendingUp } from 'lucide-react'
import { BRAND } from '../data/listings'

export default function Hero() {
  const badgeRef  = useRef(null)
  const line1Ref  = useRef(null)
  const line2Ref  = useRef(null)
  const subRef    = useRef(null)
  const ctaRef    = useRef(null)
  const statsRef  = useRef(null)
  const imgRef    = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Image fade-in
      tl.from(imgRef.current,    { opacity: 0, scale: 1.05, duration: 1.6 }, 0)
      tl.from(overlayRef.current,{ opacity: 0, duration: 1 }, 0.2)

      // Badge drop
      tl.from(badgeRef.current,  { opacity: 0, y: -20, duration: 0.6 }, 0.6)

      // Word-by-word stagger on headline
      const words1 = line1Ref.current?.querySelectorAll('.word')
      const words2 = line2Ref.current?.querySelectorAll('.word')
      if (words1?.length) tl.from(words1, { opacity: 0, y: 40, stagger: 0.08, duration: 0.7 }, 0.8)
      if (words2?.length) tl.from(words2, { opacity: 0, y: 40, stagger: 0.08, duration: 0.7 }, 1.0)

      tl.from(subRef.current,   { opacity: 0, y: 22, duration: 0.65 }, 1.4)
      tl.from(ctaRef.current,   { opacity: 0, y: 18, duration: 0.55 }, 1.6)
      tl.from(statsRef.current?.children, { opacity: 0, y: 14, stagger: 0.1, duration: 0.5 }, 1.75)

      // Subtle Ken Burns on image (performance-conscious)
      gsap.to(imgRef.current, {
        scale: 1.04,
        duration: 14,
        ease: 'none',
        yoyo: true,
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85"
          alt="Luxury property in Lagos"
          className="w-full h-full object-cover object-center"
          style={{ transformOrigin: 'center center' }}
        />
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-hero-overlay"
        style={{
          background: 'linear-gradient(110deg, rgba(28,59,42,0.95) 0%, rgba(28,59,42,0.82) 50%, rgba(28,59,42,0.25) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-24 pb-16 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <MapPin size={12} className="text-terra-400" />
            <span className="font-sans text-[0.68rem] font-500 tracking-[0.2em] uppercase text-stone-200">
              Lagos · Lekki · Ikoyi · Victoria Island
            </span>
            <span className="w-2 h-2 rounded-full bg-terra-500 animate-pulse" />
          </div>

          {/* Headline — word-split for GSAP stagger */}
          <h1 className="font-display font-medium text-white leading-tight mb-4" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.2rem)' }}>
            <div ref={line1Ref} aria-label="Invest in the Future of Lagos.">
              {['Invest', 'in', 'the'].map((w, i) => (
                <span key={i} className="word inline-block mr-[0.22em]">{w}</span>
              ))}
              <br />
              {['Future', 'of'].map((w, i) => (
                <span key={i} className="word inline-block mr-[0.22em]">{w}</span>
              ))}
              <span className="word inline-block text-terra-400">Lagos.</span>
            </div>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="font-sans font-300 text-stone-300 text-lg leading-relaxed mb-10 max-w-xl"
          >
            {BRAND.tagline}. Your trusted guide to
            premium residential and investment properties across the Lagos Island axis.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col xs:flex-row gap-4 mb-14">
            <a
              href="#contact"
              className="font-sans text-[0.75rem] font-600 tracking-[0.16em] uppercase text-forest-900 bg-terra-500 hover:bg-terra-400 px-8 py-4 rounded-full text-center shadow-terra hover:shadow-lg hover:-translate-y-px transition-all duration-200"
            >
              Book Private Viewing
            </a>
            <a
              href="#listings"
              className="font-sans text-[0.75rem] font-600 tracking-[0.16em] uppercase text-white border border-white/30 hover:border-terra-400 hover:text-terra-400 px-8 py-4 rounded-full text-center transition-all duration-200"
            >
              View Listings
            </a>
            <a
              href={BRAND.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.75rem] font-600 tracking-[0.16em] uppercase text-white bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 px-8 py-4 rounded-full text-center transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Quick stats */}
          <div ref={statsRef} className="flex gap-8 pt-8 border-t border-white/15">
            {[
              { val: '₦15B+',  lbl: 'Transactions' },
              { val: '200+',   lbl: 'Families Housed' },
              { val: '5+ Yrs', lbl: 'Excellence' },
            ].map(({ val, lbl }) => (
              <div key={lbl}>
                <span className="font-display italic text-terra-400 text-2xl font-600 block leading-none">{val}</span>
                <span className="font-sans text-[0.63rem] font-500 tracking-[0.16em] uppercase text-stone-400 mt-1 block">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating urgency card (distress sale teaser) */}
      <div className="absolute right-6 bottom-16 lg:right-12 lg:bottom-20 z-10 hidden md:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 max-w-[220px]">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={14} className="text-terra-400" />
            <span className="font-sans text-[0.62rem] font-600 tracking-widest uppercase text-terra-400">Hot Deal</span>
          </div>
          <p className="font-display italic text-white text-base leading-tight mb-1">4-Bed Maisonette</p>
          <p className="font-sans text-xs text-stone-400 mb-2">Lekki Phase 1</p>
          <p className="font-sans text-xs text-stone-400 line-through mb-1">₦450,000,000</p>
          <p className="font-display italic text-terra-400 text-xl font-600">₦350,000,000</p>
          <p className="font-sans text-[0.62rem] font-600 text-red-400 uppercase tracking-wider mt-1">🔥 Distress Sale</p>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#listings"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity z-10"
      >
        <span className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-stone-400">Scroll</span>
        <ArrowDown size={14} className="text-stone-400 animate-bounce" />
      </a>
    </section>
  )
}
