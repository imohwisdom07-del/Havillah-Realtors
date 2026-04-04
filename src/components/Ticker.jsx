// ─── Ticker.jsx ──────────────────────────────────────────────────────────────
import { LISTINGS } from '../data/listings'

const items = [
  '🏠 New: 5-Bed Duplex · Ikota Lekki · ₦400M',
  '📍 Premium: 5-Bed Duplex · Chevron · ₦420M',
  '🔥 DISTRESS: 4-Bed Maisonette · Lekki Phase 1 · ₦350M (was ₦450M)',
  '🌊 Waterfront: Ikoyi · ₦470M',
  '✅ Governor\'s Consent · Chevron Executive Duplex · ₦680M',
  '🏗️ New Build: Semi-Detached · Ikota · ₦280M',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="bg-forest-700 border-y border-white/5 overflow-hidden py-3">
      <div className="flex">
        <div className="marquee-track flex items-center gap-10 whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="font-sans text-[0.72rem] font-500 tracking-wide text-stone-300">
              {item}
              <span className="mx-5 text-terra-500 select-none">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
