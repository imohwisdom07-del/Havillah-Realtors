import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react'
import { BRAND, MAP_LOCATIONS } from '../data/listings'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      {/* Pre-footer CTA bar */}
      <div className="bg-forest-700 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-display italic text-white text-2xl mb-1">
              Ready to invest in Lagos?
            </p>
            <p className="font-sans text-sm text-stone-400">Speak with a Havillah agent today. Free consultation available.</p>
          </div>
          <div className="flex flex-col xs:flex-row gap-3 flex-shrink-0">
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.72rem] font-600 tracking-[0.14em] uppercase text-forest-900 bg-terra-500 hover:bg-terra-400 px-7 py-3 rounded-full text-center transition-all duration-200 shadow-terra"
            >
              Book Free Consultation
            </a>
            <a
              href={BRAND.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.72rem] font-600 tracking-[0.14em] uppercase text-white border border-white/20 hover:border-white/50 px-7 py-3 rounded-full text-center transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-5">
              <span className="font-display italic text-white text-2xl font-medium">Havillah</span>
              <span className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-terra-500 mt-0.5">Realtors · Lagos</span>
            </div>
            <p className="font-sans text-sm text-stone-400 leading-relaxed mb-6">
              Bespoke real estate solutions for the discerning investor. Serving Lagos's
              premium corridors since {BRAND.established}.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-stone-400 hover:text-terra-400 hover:border-terra-500/40 transition-all duration-200 rounded-lg">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-sans text-[0.68rem] font-600 tracking-[0.2em] uppercase text-stone-500 mb-5 pb-2 border-b border-white/5">Areas We Cover</h4>
            <ul className="space-y-2.5">
              {MAP_LOCATIONS.map(loc => (
                <li key={loc.id}>
                  <a href="#map" className="font-sans text-sm text-stone-400 hover:text-terra-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-terra-600 group-hover:bg-terra-400 transition-colors" />
                    {loc.name}
                    <span className="font-sans text-[0.6rem] text-stone-600 ml-auto">{loc.count} listings</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-[0.68rem] font-600 tracking-[0.2em] uppercase text-stone-500 mb-5 pb-2 border-b border-white/5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                ['Properties', '#listings'],
                ['Property Map', '#map'],
                ['Why Havillah', '#why'],
                ['Client Reviews', '#reviews'],
                ['Contact Us', '#contact'],
                ['All Listings', BRAND.website],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-stone-400 hover:text-terra-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-600 group-hover:bg-terra-400 transition-colors" />
                    {label}
                    {href.startsWith('http') && <ArrowUpRight size={10} className="ml-auto text-stone-600 group-hover:text-terra-400 transition-colors" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[0.68rem] font-600 tracking-[0.2em] uppercase text-stone-500 mb-5 pb-2 border-b border-white/5">Get In Touch</h4>
            <ul className="space-y-4">
              {[
                { icon: Phone,  label: '+234 903 807 4516',       href: `tel:${BRAND.whatsapp}` },
                { icon: Mail,   label: 'info@havillahrealtors.com', href: 'mailto:info@havillahrealtors.com' },
                { icon: MapPin, label: 'Lagos, Nigeria',           href: null },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon size={14} className="text-terra-500 mt-0.5 flex-shrink-0" />
                  {href
                    ? <a href={href} className="font-sans text-sm text-stone-400 hover:text-terra-400 transition-colors">{label}</a>
                    : <span className="font-sans text-sm text-stone-400">{label}</span>
                  }
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-white/3 border border-white/6 rounded-xl">
              <p className="font-sans text-[0.68rem] font-600 tracking-[0.14em] uppercase text-stone-500 mb-1">Office Hours</p>
              <p className="font-sans text-sm text-stone-300">Mon – Sat: 8am – 7pm</p>
              <p className="font-sans text-xs text-stone-500 mt-0.5">WhatsApp available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-stone-600">
            © {year} Havillah Realtors. All rights reserved. Lagos, Nigeria.
          </p>
          
        </div>
      </div>
    </footer>
  )
}
