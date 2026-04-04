import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/listings'

function StarRow({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={13} className="fill-terra-500 text-terra-500" />
      ))}
    </div>
  )
}

function TestCard({ t, delay }) {
  return (
    <div className={`reveal delay-${delay} group bg-forest-800/50 border border-white/8 rounded-2xl p-7 hover:border-terra-500/25 hover:bg-forest-800/70 transition-all duration-400`}>
      <div className="flex items-start justify-between mb-5">
        <Quote size={28} className="text-terra-500/30 group-hover:text-terra-500/50 transition-colors" />
        <StarRow n={t.stars} />
      </div>
      <p className="font-sans font-300 text-stone-300 text-sm leading-relaxed italic mb-6 flex-1">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3 pt-5 border-t border-white/8">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-terra-500/30"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=1C3B2A&color=C4714A&size=40`
          }}
        />
        <div>
          <p className="font-display italic text-white text-base leading-tight">{t.name}</p>
          <p className="font-sans text-[0.65rem] text-stone-400 font-500 mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-forest-700 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #C4714A 0, #C4714A 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terra-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 reveal">
          <p className="font-sans text-[0.68rem] font-600 tracking-[0.24em] uppercase text-terra-400 mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terra-500 inline-block" />
            Client Testimonials
            <span className="w-8 h-px bg-terra-500 inline-block" />
          </p>
          <h2 className="font-display font-light text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What our clients
            <em className="italic text-terra-400"> say about us</em>
          </h2>
          <p className="font-sans text-stone-400 text-sm leading-relaxed">
            We have been in this game for over 5 years and have a wealth of client
            testimonials to back up our successful journey.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestCard key={t.id} t={t} delay={Math.min(i + 1, 4)} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-14 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
            <div className="flex -space-x-2">
              {TESTIMONIALS.slice(0, 3).map((t) => (
                <img
                  key={t.id}
                  src={t.avatar}
                  alt={t.name}
                  className="w-8 h-8 rounded-full border-2 border-forest-700 object-cover"
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=1C3B2A&color=C4714A&size=32` }}
                />
              ))}
            </div>
            <div className="text-left">
              <p className="font-sans font-600 text-white text-sm">Join 200+ happy families</p>
              <p className="font-sans text-xs text-stone-400">who found their Lagos dream property with us</p>
            </div>
            <a
              href="#contact"
              className="font-sans text-[0.72rem] font-600 tracking-[0.14em] uppercase text-forest-900 bg-terra-500 hover:bg-terra-400 px-6 py-2.5 rounded-full transition-all duration-200 shadow-terra whitespace-nowrap"
            >
              Start Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
