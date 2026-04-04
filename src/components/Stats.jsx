import { useEffect, useRef } from 'react'
import { STATS } from '../data/listings'

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-forest-700 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C4714A 0, #C4714A 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Top terra line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terra-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-white/10">
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal delay-${i + 1} text-center lg:text-left lg:pl-8 first:pl-0`}>
              <span className="font-display italic text-terra-400 block leading-none mb-2" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
                {s.value}
              </span>
              <span className="font-sans text-[0.7rem] font-500 tracking-[0.16em] uppercase text-stone-400">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terra-500 to-transparent" />
    </section>
  )
}
