import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Bed, Bath, MapPin, Shield, Flame, ArrowUpRight, CheckCircle } from 'lucide-react'
import { LISTINGS, BRAND } from '../data/listings'

function ListingCard({ listing, priority }) {
  const priceRef = useRef(null)
  const cardRef  = useRef(null)

  // GSAP pulse on distress price
  useEffect(() => {
    if (!listing.distress || !priceRef.current) return
    gsap.to(priceRef.current, {
      color: '#D48656',
      textShadow: '0 0 22px rgba(196,113,74,0.6)',
      duration: 0.9,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    })
    return () => gsap.killTweensOf(priceRef.current)
  }, [listing.distress])

  // Hover lift
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const onEnter = () => gsap.to(card, { y: -8, duration: 0.4, ease: 'power2.out' })
    const onLeave = () => gsap.to(card, { y:  0, duration: 0.5, ease: 'power2.inOut' })
    card.addEventListener('mouseenter', onEnter)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mouseenter', onEnter)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const waMsg = encodeURIComponent(
    `Hello Havillah Realtors! I'm interested in the ${listing.label} at ${listing.location} priced at ${listing.priceLabel}. Please send more details.`
  )

  return (
    <div
      ref={cardRef}
      className={`prop-card bg-white rounded-2xl overflow-hidden shadow-card border transition-shadow duration-300 hover:shadow-card-hover ${
        listing.distress
          ? 'border-terra-200 ring-2 ring-terra-500/20'
          : priority
          ? 'border-forest-200'
          : 'border-stone-200'
      }`}
    >
      {/* Image */}
      <div className="prop-img relative h-56 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.label}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

        {/* Tag */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {listing.distress ? (
            <span className="flex items-center gap-1 font-sans text-[0.65rem] font-600 tracking-wide uppercase bg-red-500 text-white px-2.5 py-1 rounded-full">
              <Flame size={11} /> Distress Sale
            </span>
          ) : (
            <span className={`font-sans text-[0.65rem] font-600 tracking-wide uppercase px-2.5 py-1 rounded-full ${
              listing.tagColor === 'terra'
                ? 'bg-terra-500 text-white'
                : 'bg-forest-700 text-white'
            }`}>
              {listing.tag}
            </span>
          )}
        </div>

        {/* Saving badge */}
        {listing.saving && (
          <div className="absolute top-3 right-3">
            <span className="font-sans text-[0.65rem] font-700 bg-red-500 text-white px-2.5 py-1 rounded-full">
              {listing.saving}
            </span>
          </div>
        )}

        {/* Location pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
          <MapPin size={11} className="text-terra-400" />
          <span className="font-sans text-[0.68rem] text-white">{listing.location}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Type label */}
        <p className="font-sans text-[0.65rem] font-600 tracking-[0.18em] uppercase text-forest-500 mb-1.5">
          {listing.type} · {listing.status}
        </p>

        {/* Name */}
        <h3 className="font-display italic font-light text-forest-800 text-xl leading-tight mb-4">
          {listing.label}
        </h3>

        {/* Beds / Baths */}
        <div className="flex items-center gap-5 mb-4 pb-4 border-b border-stone-100">
          <div className="flex items-center gap-1.5 text-stone-500">
            <Bed size={14} className="text-forest-500" />
            <span className="font-sans text-sm">{listing.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-500">
            <Bath size={14} className="text-forest-500" />
            <span className="font-sans text-sm">{listing.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-500">
            <Shield size={14} className="text-forest-500" />
            <span className="font-sans text-sm">{listing.amenities[2]}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {listing.amenities.slice(0, 4).map((a) => (
            <span key={a} className="font-sans text-[0.65rem] font-500 bg-stone-100 text-stone-600 border border-stone-200 px-2 py-0.5 rounded">
              {a}
            </span>
          ))}
        </div>

        {/* Price row */}
        <div className="flex items-end justify-between pt-4 border-t border-stone-100">
          <div>
            {listing.oldPrice && (
              <p className="font-sans text-xs text-stone-400 line-through mb-0.5">{listing.oldPriceLabel}</p>
            )}
            <p
              ref={priceRef}
              className={`font-display italic font-600 leading-none ${
                listing.distress ? 'text-terra-500' : 'text-forest-700'
              }`}
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)' }}
            >
              {listing.priceLabel}
            </p>
          </div>

          <a
            href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-sans text-[0.7rem] font-600 tracking-wide uppercase text-white bg-forest-700 hover:bg-forest-600 px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-luxury group"
          >
            Enquire
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Urgency strip */}
        {listing.urgency && (
          <div className="mt-4 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 flex items-center gap-2">
            <Flame size={14} className="text-red-500 flex-shrink-0" />
            <p className="font-sans text-xs text-red-600 font-500">
              <strong>Price drop of ₦100M.</strong> Motivated seller. Act immediately.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function FeaturedListings() {
  return (
    <section id="listings" className="py-24 lg:py-32 bg-parchment">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <p className="font-sans text-[0.68rem] font-600 tracking-[0.24em] uppercase text-terra-500 mb-3 flex items-center gap-3">
              <span className="w-8 h-px bg-terra-500 inline-block" />
              2026 Live Inventory
            </p>
            <h2 className="font-display font-light text-forest-800 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Priority Listings
              <em className="italic text-terra-500"> This Month</em>
            </h2>
            <p className="font-sans text-stone-600 mt-3 max-w-xl leading-relaxed">
              Hand-selected by our agents. Verified titles. Each property comes with
              a full documentation review and private viewing.
            </p>
          </div>

          <div className="reveal flex items-center gap-3">
            <CheckCircle size={15} className="text-forest-500" />
            <span className="font-sans text-sm text-stone-500">All titles verified · C of O or Gov's Consent</span>
          </div>
        </div>

        {/* Cards grid — distress card first on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {LISTINGS.map((listing, i) => (
            <div key={listing.id} className={`reveal delay-${i + 1}`}>
              <ListingCard listing={listing} priority={i === 0} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href={BRAND.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.75rem] font-600 tracking-[0.16em] uppercase text-forest-700 border border-forest-300 hover:border-forest-600 hover:bg-forest-700 hover:text-white px-8 py-3.5 rounded-full transition-all duration-200"
          >
            View All 16 Listings →
          </a>
        </div>
      </div>
    </section>
  )
}
