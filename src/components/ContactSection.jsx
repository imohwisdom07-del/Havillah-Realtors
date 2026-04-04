import { useState } from 'react'
import { Send, CheckCircle, Calendar, MessageSquare, Phone } from 'lucide-react'
import { BRAND } from '../data/listings'

const INTERESTS = ['Buy a Property', 'Sell My Property', 'Investment Advice', 'Land Banking', 'Property Valuation', 'Other']
const BUDGETS   = ['Under ₦100M', '₦100M – ₦300M', '₦300M – ₦500M', '₦500M – ₦1B', 'Above ₦1B', 'Flexible']
const LOCATIONS = ['Lekki Phase 1', 'Chevron', 'Ikota / Ajah', 'Ikoyi', 'Victoria Island', 'Flexible']

export default function ContactSection() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', interest:'', budget:'', location:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [errors, setErrors]       = useState({})

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = 'Name required'
    if (!form.phone.trim()) e.phone = 'Phone / WhatsApp required'
    if (!form.interest)     e.interest = 'Please select your interest'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1600)
  }

  const waMsg = encodeURIComponent(
    `Hello Havillah Realtors! My name is ${form.name || '[Name]'}. I'm interested in: ${form.interest || 'property enquiry'}. Budget: ${form.budget || 'TBD'}. Preferred area: ${form.location || 'TBD'}. ${form.message || ''}`
  )

  return (
    <section id="contact" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-terra-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-16">

          {/* Left — info panel */}
          <div className="lg:col-span-2">
            <p className="reveal font-sans text-[0.68rem] font-600 tracking-[0.24em] uppercase text-terra-500 mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-terra-500 inline-block" />
              Book a Viewing
            </p>
            <h2 className="reveal font-display font-light text-forest-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
              Start your
              <br />
              <em className="italic text-terra-500">property journey</em>
            </h2>
            <p className="reveal font-sans text-stone-500 leading-relaxed mb-8 text-sm">
              Fill in your details and a Havillah agent will be in touch within 24 hours.
              Prefer instant chat? WhatsApp or book directly via Calendly below.
            </p>

            {/* Contact options */}
            <div className="reveal space-y-4 mb-8">
              {[
                {
                  icon: Calendar,
                  label: 'Schedule via Calendly',
                  sub:   'Pick a time that suits you',
                  href:  BRAND.calendly,
                  color: 'text-forest-600 bg-forest-50 border-forest-100',
                },
                {
                  icon: MessageSquare,
                  label: 'WhatsApp Chat',
                  sub:   '+234 903 807 4516',
                  href:  `https://wa.me/${BRAND.whatsapp.replace(/\D/g,'')}?text=${waMsg}`,
                  color: 'text-green-600 bg-green-50 border-green-100',
                },
                {
                  icon: Phone,
                  label: 'Call Directly',
                  sub:   '+234 903 807 4516',
                  href:  `tel:${BRAND.whatsapp}`,
                  color: 'text-terra-600 bg-terra-50 border-terra-100',
                },
              ].map(({ icon: Icon, label, sub, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border ${color} hover:shadow-luxury transition-all duration-200`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon size={18} className="text-current" />
                  </div>
                  <div>
                    <p className="font-sans font-600 text-stone-800 text-sm">{label}</p>
                    <p className="font-sans text-xs text-stone-500 mt-0.5">{sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Promise */}
            <div className="reveal p-5 bg-forest-700 rounded-xl border border-forest-600">
              <p className="font-sans font-600 text-white text-sm mb-1.5">Our Promise to You</p>
              <ul className="space-y-1.5">
                {[
                  'No-obligation consultation',
                  'Response within 24 hours',
                  'Verified titles on all listings',
                  'Zero hidden fees',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-stone-300 font-sans text-xs">
                    <CheckCircle size={12} className="text-terra-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-stone-100 shadow-luxury p-12 text-center flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-16 h-16 bg-forest-50 border border-forest-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-forest-600" />
                </div>
                <h3 className="font-display italic text-forest-800 text-2xl mb-3">Enquiry Received!</h3>
                <p className="font-sans text-stone-500 text-sm max-w-sm leading-relaxed mb-8">
                  Thank you, {form.name.split(' ')[0]}. A Havillah agent will contact you within 24 hours.
                  For instant response, WhatsApp us now.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g,'')}?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[0.72rem] font-600 tracking-[0.14em] uppercase text-white bg-forest-700 hover:bg-forest-600 px-8 py-3 rounded-full transition-colors"
                  >
                    Follow Up on WhatsApp
                  </a>
                  <a
                    href={BRAND.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[0.72rem] font-600 tracking-[0.14em] uppercase text-forest-700 border border-forest-300 hover:border-terra-500 hover:text-terra-600 px-8 py-3 rounded-full transition-colors"
                  >
                    Book on Calendly
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-100 shadow-luxury p-7 lg:p-9" noValidate>
                <h3 className="font-display italic text-forest-800 text-xl mb-7">Request a Private Viewing</h3>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="font-sans text-[0.68rem] font-600 tracking-[0.14em] uppercase text-stone-500 block mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 border rounded-xl font-sans text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-400 transition-colors ${errors.name ? 'border-red-300 bg-red-50' : 'border-stone-200 bg-stone-50'}`}
                    />
                    {errors.name && <p className="font-sans text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="font-sans text-[0.68rem] font-600 tracking-[0.14em] uppercase text-stone-500 block mb-2">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      placeholder="+234 xxx xxxx xxx"
                      className={`w-full px-4 py-3 border rounded-xl font-sans text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-400 transition-colors ${errors.phone ? 'border-red-300 bg-red-50' : 'border-stone-200 bg-stone-50'}`}
                    />
                    {errors.phone && <p className="font-sans text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="font-sans text-[0.68rem] font-600 tracking-[0.14em] uppercase text-stone-500 block mb-2">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 rounded-xl font-sans text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-400 transition-colors"
                  />
                </div>

                {/* Interest */}
                <div className="mb-5">
                  <label className="font-sans text-[0.68rem] font-600 tracking-[0.14em] uppercase text-stone-500 block mb-2">I am interested in... *</label>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => set('interest', opt)}
                        className={`font-sans text-xs font-500 px-3 py-2 rounded-full border transition-all duration-200 ${
                          form.interest === opt
                            ? 'bg-forest-700 border-forest-700 text-white'
                            : 'border-stone-200 text-stone-600 hover:border-forest-300 hover:text-forest-700'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {errors.interest && <p className="font-sans text-xs text-red-500 mt-1">{errors.interest}</p>}
                </div>

                {/* Budget + Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="font-sans text-[0.68rem] font-600 tracking-[0.14em] uppercase text-stone-500 block mb-2">Budget Range</label>
                    <div className="flex flex-wrap gap-1.5">
                      {BUDGETS.map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => set('budget', b)}
                          className={`font-sans text-[0.65rem] font-500 px-2.5 py-1.5 rounded-lg border transition-all ${
                            form.budget === b
                              ? 'bg-terra-500 border-terra-500 text-white'
                              : 'border-stone-200 text-stone-500 hover:border-terra-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="font-sans text-[0.68rem] font-600 tracking-[0.14em] uppercase text-stone-500 block mb-2">Preferred Location</label>
                    <div className="flex flex-wrap gap-1.5">
                      {LOCATIONS.map(loc => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => set('location', loc)}
                          className={`font-sans text-[0.65rem] font-500 px-2.5 py-1.5 rounded-lg border transition-all ${
                            form.location === loc
                              ? 'bg-forest-700 border-forest-700 text-white'
                              : 'border-stone-200 text-stone-500 hover:border-forest-300'
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="font-sans text-[0.68rem] font-600 tracking-[0.14em] uppercase text-stone-500 block mb-2">Additional Notes</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    placeholder="Tell us more — specific amenities, timeline, financing needs..."
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 rounded-xl font-sans text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 font-sans text-[0.75rem] font-600 tracking-[0.16em] uppercase text-white bg-forest-700 hover:bg-forest-600 disabled:opacity-60 py-4 rounded-full transition-all duration-200 shadow-luxury hover:shadow-luxury-lg hover:-translate-y-px disabled:translate-y-0"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Enquiry
                    </>
                  )}
                </button>
                <p className="font-sans text-xs text-stone-400 text-center mt-3">
                  We respond within 24 hours · 100% confidential · No spam
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
