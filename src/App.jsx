import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Ticker          from './components/Ticker'
import Stats           from './components/Stats'
import FeaturedListings from './components/FeaturedListings'
import PropertyMap     from './components/PropertyMap'
import MoreListings    from './components/MoreListings'
import WhyHavillah    from './components/WhyHavillah'
import Testimonials    from './components/Testimonials'
import ContactSection  from './components/ContactSection'
import Footer          from './components/Footer'
import WhatsAppFloat   from './components/WhatsAppFloat'

export default function App() {
  // Single IntersectionObserver wired once — no per-component instances
  useScrollReveal()

  return (
    <div className="min-h-screen bg-parchment text-ink font-sans overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Ticker />
        <Stats />
        <FeaturedListings />
        <PropertyMap />
        <MoreListings />
        <WhyHavillah />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
