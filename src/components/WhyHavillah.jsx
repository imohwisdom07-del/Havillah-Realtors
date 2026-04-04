import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, TrendingUp, Users, Headphones, FileCheck, Building2 } from 'lucide-react'
import { BRAND } from '../data/listings'

gsap.registerPlugin(ScrollTrigger)

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Local Expertise',
    body: 'Deep knowledge of Lekki, Chevron, Ikoyi, and Victoria Island. We know every estate, every road, and every title document that matters in Lagos.',
  },
  {
    icon: Users,
    title: 'Personalised Service',
    body: 'Every client is different. We match you with properties that fit your lifestyle, investment horizon, and budget — not just whatever is available.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    body: 'Over ₦15 billion in successful transactions. 200+ families in their dream homes. 5+ years of navigating Lagos\'s dynamic property market.',
  },
  {
    icon: FileCheck,
    title: 'Verified Titles Only',
    body: 'We exclusively deal in properties with clean, verifiable documentation — C of O, Governor\'s Consent, Registered Survey. Zero title risk.',
  },
  {
    icon: Building2,
    title: 'Land Banking Expertise',
    body: 'We help clients secure strategic land assets for long-term capital appreciation. Insure your finances with the safest store of value: Lagos real estate.',
  },
  {
    icon: Headphones,
    title: 'Comprehensive Support',
    body: 'From your first enquiry to keys-in-hand and beyond — legal referrals, facility management, re-sale support. We are your long-term property partner.',
  },
]

export default function WhyHavillah() {
  const lineRef = useRef(null)

  useEffect(() => {
    if (!lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 85%',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="why" className="py-24 lg:py-32 bg-parchment relative overflow-hidden">
      {/* Decorative background image — blended */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">

        {/* Top split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — copy */}
          <div>
            <p className="reveal font-sans text-[0.68rem] font-600 tracking-[0.24em] uppercase text-terra-500 mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-terra-500 inline-block" />
              Why Havillah
            </p>
            <h2 className="reveal font-display font-light text-forest-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Not just agents.
              <br />
              <em className="italic text-terra-500">True partners.</em>
            </h2>
            {/* GSAP-animated expanding line */}
            <div ref={lineRef} className="w-full h-px bg-gradient-to-r from-terra-500 to-transparent mb-6" />
            <p className="reveal font-sans text-stone-600 leading-relaxed mb-6">
              Havillah Realtors is all about giving top-notch service to every prospect.
              We have been the best guide in the real estate industry for over 5 years —
              enlightening investors on the best properties to buy.
            </p>
            <p className="reveal font-sans text-stone-600 leading-relaxed mb-8">
              Take advantage of our{' '}
              <span className="font-600 text-forest-700">free consultation</span>{' '}
              to get started. Whether you're a first-time buyer, a seasoned investor,
              or a diaspora client looking to put roots down in Lagos — we handle
              every step with precision.
            </p>
            <div className="reveal flex flex-col xs:flex-row gap-3">
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.75rem] font-600 tracking-[0.16em] uppercase text-white bg-forest-700 hover:bg-forest-600 px-8 py-4 rounded-full text-center transition-all duration-200 shadow-luxury hover:shadow-luxury-lg hover:-translate-y-px"
              >
                Free Consultation →
              </a>
              <a
                href={BRAND.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.75rem] font-600 tracking-[0.16em] uppercase text-forest-700 border border-forest-300 hover:border-terra-500 hover:text-terra-600 px-8 py-4 rounded-full text-center transition-all duration-200"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — image with overlay card */}
          <div className="reveal-right relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
                alt="Havillah Realtors team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-forest-800/40 to-transparent" />
            </div>
            {/* Stat badge floating */}
            <div className="absolute -bottom-5 -left-5 bg-forest-700 rounded-xl p-5 shadow-luxury-lg">
              <p className="font-display italic text-terra-400 text-3xl font-600 leading-none">5+</p>
              <p className="font-sans text-[0.65rem] font-500 tracking-[0.16em] uppercase text-stone-300 mt-1">Years of Trust</p>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-xl p-4 shadow-luxury border border-stone-100">
              <p className="font-display italic text-forest-700 text-2xl font-600 leading-none">₦15B+</p>
              <p className="font-sans text-[0.62rem] font-500 tracking-widest uppercase text-stone-500 mt-0.5">Transacted</p>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`reveal delay-${Math.min(i + 1, 6)} group bg-white/70 backdrop-blur-sm border border-stone-200 rounded-xl p-6 hover:border-terra-300 hover:shadow-luxury transition-all duration-300`}
              >
                <div className="w-11 h-11 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center mb-4 group-hover:bg-forest-700 group-hover:border-forest-700 transition-all duration-300">
                  <Icon size={20} className="text-forest-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display italic text-forest-800 text-lg mb-2">{pillar.title}</h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">{pillar.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
