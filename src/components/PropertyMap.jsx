import { useState } from 'react'
import { MapPin, Home, ChevronRight } from 'lucide-react'
import { MAP_LOCATIONS, LISTINGS } from '../data/listings'

export default function PropertyMap() {
  const [activePin, setActivePin] = useState(null)
  const activeListing = activePin
    ? LISTINGS.find((l) => l.location.toLowerCase().includes(activePin.toLowerCase()))
    : null

  return (
    <section id="map" className="py-24 lg:py-32 bg-forest-700 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E8E0D5 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terra-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="reveal">
            <p className="font-sans text-[0.68rem] font-600 tracking-[0.24em] uppercase text-terra-400 mb-3 flex items-center gap-3">
              <span className="w-8 h-px bg-terra-500 inline-block" />
              Property Discovery
            </p>
            <h2 className="font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Where We Operate
              <em className="italic text-terra-400"> in Lagos</em>
            </h2>
            <p className="font-sans text-stone-400 mt-3 max-w-lg leading-relaxed">
              From the exclusive lagoon-side homes of Lekki Phase 1 to the executive
              corridors of Chevron and Ikoyi waterfront — we cover Lagos's most
              valuable postcodes.
            </p>
          </div>
          <div className="reveal flex flex-col gap-2">
            {MAP_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActivePin(loc.id === activePin ? null : loc.id)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-left transition-all duration-200 ${
                  activePin === loc.id
                    ? 'bg-terra-500 text-white'
                    : 'bg-white/10 text-stone-300 hover:bg-white/15 hover:text-white'
                }`}
              >
                <MapPin size={12} className={activePin === loc.id ? 'text-white' : 'text-terra-400'} />
                <span className="font-sans text-xs font-500">{loc.name}</span>
                <span className={`font-sans text-[0.62rem] font-600 ml-auto px-2 py-0.5 rounded-full ${
                  activePin === loc.id ? 'bg-white/20 text-white' : 'bg-white/10 text-stone-400'
                }`}>
                  {loc.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Map container */}
        <div className="reveal relative rounded-2xl overflow-hidden shadow-luxury-lg border border-white/10" style={{ height: 'clamp(340px, 55vw, 540px)' }}>

          {/* Styled map image background */}
          <img
            src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1400&q=80"
            alt="Lagos area map"
            className="w-full h-full object-cover opacity-20"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-forest-800/70" />

          {/* Lagos island outline (SVG decorative) */}
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 500" fill="none">
            <path d="M100 280 Q200 220 350 200 Q500 180 600 220 Q700 260 720 320 Q740 380 680 400 Q600 420 500 410 Q400 400 300 420 Q200 440 150 400 Q100 360 100 280Z"
              stroke="#C4714A" strokeWidth="1.5" fill="rgba(196,113,74,0.05)" />
            {/* Road lines */}
            <line x1="150" y1="250" x2="680" y2="300" stroke="#E8E0D5" strokeWidth="0.5" strokeDasharray="8 6" />
            <line x1="200" y1="180" x2="650" y2="380" stroke="#E8E0D5" strokeWidth="0.5" strokeDasharray="8 6" />
          </svg>

          {/* Location pins */}
          {MAP_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActivePin(loc.id === activePin ? null : loc.id)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ top: loc.top, left: loc.left }}
            >
              {/* Pulse ring for active */}
              {(loc.priority || activePin === loc.id) && (
                <span className="absolute inset-0 rounded-full bg-terra-500/30 pin-pulse scale-150" />
              )}
              {/* Pin */}
              <div className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                activePin === loc.id
                  ? 'bg-terra-500 shadow-terra scale-125'
                  : loc.priority
                  ? 'bg-terra-500/80 shadow-terra'
                  : 'bg-forest-600 border border-terra-500/30'
              } shadow-lg`}>
                <MapPin size={16} className="text-white" />
              </div>
              {/* Label */}
              <div className={`map-label absolute -top-9 left-1/2 -translate-x-1/2 bg-forest-900/90 text-white text-[0.6rem] font-500 px-2.5 py-1 rounded-full whitespace-nowrap transition-opacity duration-200 ${
                activePin === loc.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                {loc.name} · {loc.count} listings
              </div>
            </button>
          ))}

          {/* Active listing preview card */}
          {activeListing && (
            <div className="absolute bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:w-72 bg-forest-900/95 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300">
              <div className="flex gap-3">
                <img
                  src={activeListing.image}
                  alt={activeListing.label}
                  className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-sans text-[0.65rem] text-terra-400 font-600 tracking-wide uppercase mb-0.5">{activeListing.area}</p>
                  <p className="font-display italic text-white text-sm leading-tight line-clamp-2 mb-1">{activeListing.label}</p>
                  <p className="font-display italic text-terra-400 text-base font-600">{activeListing.priceLabel}</p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-3 flex items-center justify-center gap-1.5 font-sans text-[0.7rem] font-600 tracking-wide uppercase text-white bg-terra-500 hover:bg-terra-400 py-2 rounded-lg transition-colors"
              >
                Book Viewing <ChevronRight size={12} />
              </a>
            </div>
          )}

          {/* Map legend */}
          <div className="absolute top-4 left-4 bg-forest-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex flex-col gap-2">
            <p className="font-sans text-[0.6rem] font-600 tracking-[0.14em] uppercase text-stone-400 mb-1">Map Legend</p>
            {[
              { color: 'bg-terra-500', label: 'Available listings' },
              { color: 'bg-forest-500', label: 'Coverage area'      },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                <span className="font-sans text-[0.62rem] text-stone-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location quick-links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8 reveal">
          {MAP_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActivePin(loc.id === activePin ? null : loc.id)}
              className={`flex flex-col items-center p-4 rounded-xl border transition-all duration-200 ${
                activePin === loc.id
                  ? 'bg-terra-500/20 border-terra-500/50 text-terra-400'
                  : 'bg-white/5 border-white/10 text-stone-400 hover:bg-white/10 hover:border-terra-500/30'
              }`}
            >
              <Home size={16} className="mb-1.5" />
              <p className="font-sans text-xs font-500 text-center leading-tight">{loc.name}</p>
              <p className="font-sans text-[0.6rem] mt-0.5 text-stone-500">{loc.count} listings</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
