import { MapPin, ArrowUpRight } from 'lucide-react'
import { MORE_LISTINGS, BRAND } from '../data/listings'

function MiniCard({ listing, delay }) {
  const waMsg = encodeURIComponent(
    `Hello Havillah Realtors! I'm interested in ${listing.label} at ${listing.location} (${listing.priceLabel}). Please send details.`
  )
  return (
    <div className={`reveal delay-${delay} group bg-white rounded-xl overflow-hidden shadow-card border border-stone-100 hover:border-forest-200 hover:shadow-card-hover transition-all duration-400`}>
      <div className="relative h-44 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <span className="absolute top-2.5 left-2.5 font-sans text-[0.62rem] font-600 tracking-wide uppercase bg-forest-700 text-white px-2 py-0.5 rounded-full">
          {listing.tag}
        </span>
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
          <MapPin size={10} className="text-terra-400" />
          <span className="font-sans text-[0.62rem] text-white">{listing.location}</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-display italic text-forest-800 text-base leading-tight mb-3">{listing.label}</h4>
        <div className="flex items-center justify-between">
          <span className="font-display italic text-terra-500 text-lg font-600">{listing.priceLabel}</span>
          <a
            href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g,'')}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-forest-50 border border-forest-200 flex items-center justify-center text-forest-600 hover:bg-forest-700 hover:border-forest-700 hover:text-white transition-all duration-200 group/btn"
          >
            <ArrowUpRight size={13} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function MoreListings() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div className="reveal">
            <p className="font-sans text-[0.68rem] font-600 tracking-[0.24em] uppercase text-terra-500 mb-2 flex items-center gap-3">
              <span className="w-8 h-px bg-terra-500 inline-block" />
              Also Available
            </p>
            <h2 className="font-display font-light text-forest-800 leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              More from our <em className="italic text-terra-500">portfolio</em>
            </h2>
          </div>
          <a
            href={BRAND.website}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal font-sans text-[0.72rem] font-600 tracking-[0.14em] uppercase text-forest-700 hover:text-terra-600 transition-colors flex items-center gap-1.5"
          >
            All 16 listings <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MORE_LISTINGS.map((l, i) => (
            <MiniCard key={l.id} listing={l} delay={Math.min(i + 1, 6)} />
          ))}
        </div>
      </div>
    </section>
  )
}
