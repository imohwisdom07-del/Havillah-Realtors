// ─────────────────────────────────────────────────────────────────────────────
//  HAVILLAH REALTORS — Site data
//  Source: havillahrealtors.com (verified 2025)
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name:       'Havillah Realtors',
  tagline:    'Bespoke Real Estate Solutions for the Discerning Investor',
  established: 2019,
  experience:  '5+ Years',
  location:   'Lagos, Nigeria',
  whatsapp:   '+2349038074516',
  waLink:     'https://wa.me/2349038074516?text=Hello%20Havillah%20Realtors%2C%20I%27m%20interested%20in%20a%20property%20and%20would%20like%20more%20information.',
  calendly:   'https://calendly.com/eskwitzbaby/30min',
  website:    'https://havillahrealtors.com',
}

export const STATS = [
  { value: '₦15B+',   label: 'In Transactions'      },
  { value: '5+',      label: 'Years of Excellence'   },
  { value: '200+',    label: 'Families Housed'        },
  { value: '16+',     label: 'Active Listings'        },
]

// ── 2026 Priority Listings (from client brief + live site) ───────────────────
export const LISTINGS = [
  {
    id: 1,
    type:     'Fully Detached Duplex',
    beds:     5,
    baths:    6,
    label:    '5 Bedroom Fully Detached Duplex',
    location: 'Ikota, Lekki',
    area:     'Lekki',
    price:    400000000,
    priceLabel: '₦400,000,000',
    status:   'For Sale',
    tag:      'New Listing',
    tagColor: 'forest',
    distress: false,
    amenities: ['Smart Home', 'Swimming Pool', 'Governor\'s Consent', 'BQ', 'Secured Estate', 'Ample Parking'],
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
    ],
    description: 'Luxury 5-bedroom fully detached duplex in the prestigious Ikota community, Lekki. Finished to international standards with smart home integration, swimming pool, and spacious BQ. Title: Governor\'s Consent.',
    mapPin: { top: '48%', left: '72%' },
  },
  {
    id: 2,
    type:     'Fully Detached Duplex',
    beds:     5,
    baths:    5,
    label:    'Well-Finished 5 Bedroom Duplex',
    location: 'Chevron, Lekki',
    area:     'Chevron',
    price:    420000000,
    priceLabel: '₦420,000,000',
    status:   'For Sale',
    tag:      'Premium',
    tagColor: 'terra',
    distress: false,
    amenities: ['Governor\'s Consent', 'Approved Building Plan', 'Finished Walk-in Closet', 'Roof Top Terrace', 'Motion Sensor Stairlights', 'Car Port'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80',
    ],
    description: 'Well-finished 5-bedroom duplex in the coveted Chevron Drive corridor. Features a spectacular rooftop terrace, motion-sensor stairlights, and finished walk-in closets. Title: Governor\'s Consent + Approved Building Plan.',
    mapPin: { top: '55%', left: '60%' },
  },
  {
    id: 3,
    type:     'Maisonette',
    beds:     4,
    baths:    4,
    label:    '4 Bedroom Maisonette',
    location: 'Lekki Phase 1',
    area:     'Lekki Phase 1',
    price:    350000000,
    priceLabel: '₦350,000,000',
    oldPrice: 450000000,
    oldPriceLabel: '₦450,000,000',
    status:   'For Sale',
    tag:      '🔥 Distress Sale',
    tagColor: 'distress',
    distress: true,
    saving:   '₦100,000,000 OFF',
    amenities: ['Swimming Pool', 'Registered Survey', 'C of O', 'Solar Panel', 'Water Treatment Plant', 'Security House'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80',
    ],
    description: 'DISTRESS SALE — price slashed by ₦100M for immediate settlement. A stunning 4-bedroom maisonette in Lekki Phase 1, fully finished with solar power, C of O title, and swimming pool. Act fast — this will not last.',
    mapPin: { top: '42%', left: '50%' },
    urgency: true,
  },
]

export const MORE_LISTINGS = [
  {
    id: 4,
    label:      '5 Bed Detached Duplex',
    location:   'Chevron, Lekki',
    priceLabel: '₦680,000,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=75',
    tag:   'Executive',
  },
  {
    id: 5,
    label:      'Waterfront Property',
    location:   'Osborne Foreshore, Ikoyi',
    priceLabel: '₦470,000,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=75',
    tag:   'Waterfront',
  },
  {
    id: 6,
    label:      '4 Bed Semi-Detached Duplex',
    location:   'Ikota, Lekki',
    priceLabel: '₦280,000,000',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=75',
    tag:   'New Build',
  },
  {
    id: 7,
    label:      '4 Bed Terrace',
    location:   'Orchid, Lekki',
    priceLabel: '₦125,000,000',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=75',
    tag:   'Affordable',
  },
]

// ── Testimonials ──────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name:    'Emeka Okonkwo',
    role:    'Real Estate Investor',
    avatar:  'https://randomuser.me/api/portraits/men/32.jpg',
    stars:   5,
    quote:   'As real estate investors, we\'ve worked with several agencies, but Havillah Realtors stands out. Their knowledge of the market and investment strategies has helped us make informed decisions that lead to profitable acquisitions. They are not just agents — they are true partners in our journey.',
  },
  {
    id: 2,
    name:    'Adaeze Nwosu',
    role:    'First-Time Homebuyer',
    avatar:  'https://randomuser.me/api/portraits/women/44.jpg',
    stars:   5,
    quote:   'Working with Havillah Realtors was a game-changer for me. As a first-time homebuyer, I had so many questions and concerns. My agent took the time to explain every step of the process and made sure I felt confident in my decisions. I found my dream home and couldn\'t be happier!',
  },
  {
    id: 3,
    name:    'Babatunde Fashola',
    role:    'Portfolio Investor, UK Diaspora',
    avatar:  'https://randomuser.me/api/portraits/men/67.jpg',
    stars:   5,
    quote:   'I\'ve been investing in Lagos real estate from London for 3 years. Havillah makes it seamless — from due diligence to keys in hand. The Lekki Phase 1 property they found me has already appreciated 30% in 18 months.',
  },
  {
    id: 4,
    name:    'Chisom Eze',
    role:    'Corporate Executive',
    avatar:  'https://randomuser.me/api/portraits/women/23.jpg',
    stars:   5,
    quote:   'They helped me navigate the Chevron area market perfectly. Transparent, professional, and always available. Closed my duplex purchase in record time with no drama. 10/10.',
  },
]

// ── Map location pins for the Property Discovery Map ─────────────────────────
export const MAP_LOCATIONS = [
  { id: 'lekki1', name: 'Lekki Phase 1',  count: 4, top: '42%', left: '50%', priority: true  },
  { id: 'chevron', name: 'Chevron',        count: 3, top: '55%', left: '40%', priority: false },
  { id: 'ikota',   name: 'Ikota, Lekki',  count: 3, top: '48%', left: '63%', priority: false },
  { id: 'ikoyi',   name: 'Ikoyi',         count: 2, top: '32%', left: '25%', priority: false },
  { id: 'vi',      name: 'Victoria Island',count: 1, top: '38%', left: '18%', priority: false },
  { id: 'orchid',  name: 'Orchid Road',   count: 2, top: '60%', left: '70%', priority: false },
]
