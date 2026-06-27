import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'raw-crystals',
    name: 'Raw Crystals',
    description:
      'Unpolished, direct-from-mine premium mineral specimens in their organic structures, preserving ultimate natural energy.',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 'crystal-towers',
    name: 'Crystal Towers',
    description:
      'Symmetrically custom-carved crystal points and elegant generator obelisks designed to elevate luxury environments.',
    image: '/images/crystal_towers_1781424039362.jpg',
    featured: true,
  },
  {
    id: 'crystal-spheres',
    name: 'Crystal Spheres',
    description:
      'Flawlessly polished, high-purity crystalline globes showcasing breathtaking internal fractures and cosmic banding patterns.',
    image: '/images/crystal_spheres_1781424052980.jpg',
    featured: true,
  },
  {
    id: 'crystal-clusters',
    name: 'Crystal Clusters',
    description:
      'Dazzling geode matrices and multi-point mineral formations that act as high-end decorative and vibrational centerpieces.',
    image: 'https://images.unsplash.com/photo-1596414704044-fcd6115984fe?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 'healing-stones',
    name: 'Healing Stones',
    description:
      'Specially calibrated tumbled stones, chakra sets, and holistic therapeutic massage utensils for premium wellness brands.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 'crystal-jewelry',
    name: 'Crystal Jewelry',
    description:
      'Master-crafted sterling silver, gold-plated, and high-quality gemstone rings, luxury necklaces, and crystal charms.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 'crystal-carvings',
    name: 'Crystal Carvings',
    description:
      'Detailed zoomorphic sculptures, sacred geometric figures, and customized designer crystal alignments.',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 'crystal-home-decor',
    name: 'Crystal Home Decor',
    description:
      'Gilded crystal bookends, agate-slice luxury coasters, tealight holders, and majestic table centerpieces.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 'gemstone-products',
    name: 'Gemstone Products',
    description:
      'Bespoke beauty tools, structural rollers, facial gua sha plates, and functional high-class polished minerals.',
    image: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 'custom-crystal-products',
    name: 'Custom Crystal Products',
    description:
      'Tailor-made bulk dimensions, unique architectural panels, and mineral cutting specified entirely by your design team.',
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
];

export const PRODUCTS: Product[] = [
  // Raw Crystals
  {
    id: 'raw-01',
    name: 'Imperial Madagascar Emerald Geode Specimen',
    category: 'raw-crystals',
    crystalType: 'Emerald',
    size: '15 - 25 cm (custom sorting)',
    moq: 100,
    priceUSD: 145.0,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
    description:
      'Stunning direct-source raw emerald crystals embedded in their native quartz matrix. Features a rich, deep hue highly prized by B2B curators and premium collectors.',
    availability: 'In Stock',
    purity: 'A++ Export Grade',
    origin: 'Madagascar',
  },
  {
    id: 'raw-02',
    name: 'Sunset Golden Citrine Raw Cluster Matrix',
    category: 'raw-crystals',
    crystalType: 'Citrine',
    size: '10 - 18 cm',
    moq: 100,
    priceUSD: 78.5,
    image: 'https://images.unsplash.com/photo-1596414704044-fcd6115984fe?auto=format&fit=crop&q=80&w=800',
    description:
      'Exquisite unheated raw golden citrine matrices with deep fiery honey-amber points. Ideal for high-end boutique retail and wellness distribution.',
    availability: 'In Stock',
    purity: 'A+ Premium Grade',
    origin: 'Brazil',
  },
  {
    id: 'raw-03',
    name: 'Siberian Deep Purple Amethyst Druzy Block',
    category: 'raw-crystals',
    crystalType: 'Amethyst',
    size: '20 - 35 cm',
    moq: 100,
    priceUSD: 110.0,
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800',
    description:
      'Raw sliced crystals of Siberian Amethyst displaying stunning deep purple micro-crystalline clusters. Excellent light diffusion and high density.',
    availability: 'In Stock',
    purity: 'AAA Extra Dark Violet',
    origin: 'Uruguay',
  },

  // Crystal Towers
  {
    id: 'tower-01',
    name: 'Apex Clear Quartz Generator Tower',
    category: 'crystal-towers',
    crystalType: 'Clear Quartz',
    size: '12 - 20 cm height',
    moq: 100,
    priceUSD: 45.0,
    image: '/images/crystal_towers_1781424039362.jpg',
    description:
      'Symmetrically hand-cut generator tower of highest clear quartz optical purity. Designed with standard 6-facet terminations for perfect light refraction.',
    availability: 'In Stock',
    purity: 'Stellar Optical Grade',
    origin: 'Brazil',
  },
  {
    id: 'tower-02',
    name: 'Luxury Rainbow Fluorite Double-Point Tower',
    category: 'crystal-towers',
    crystalType: 'Fluorite',
    size: '10 - 15 cm height',
    moq: 100,
    priceUSD: 32.0,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    description:
      'Magnificent banding patterns featuring alternating bands of deep emerald green, royal violet, and crystal blue. Precision-tooled polished surfaces.',
    availability: 'In Stock',
    purity: 'A+ Gem Grade',
    origin: 'China',
  },
  {
    id: 'tower-03',
    name: 'Midnight Obsidian Protective Tower Set',
    category: 'crystal-towers',
    crystalType: 'Obsidian',
    size: '8 - 18 cm height',
    moq: 100,
    priceUSD: 24.5,
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800',
    description:
      'High-sheen black volcanic glass obelisks with sharp architectural lines. Perfect uniform color with subtle gold-sheen under direct sunlight.',
    availability: 'In Stock',
    purity: 'Jet-Black Uniform Grade',
    origin: 'Mexico',
  },

  // Crystal Spheres
  {
    id: 'sphere-01',
    name: 'Cerulean Blue Lace Agate Celestial Sphere',
    category: 'crystal-spheres',
    crystalType: 'Blue Lace Agate',
    size: '8 - 12 cm diameter',
    moq: 100,
    priceUSD: 95.0,
    image: '/images/crystal_spheres_1781424052980.jpg',
    description:
      'Exquisite, perfectly round lapidary-grade sphere displaying hypnotic concentric wavy lines of crystal blue and winter white. Highly calming aesthetic.',
    availability: 'In Stock',
    purity: 'AAAA Ultra-Rare',
    origin: 'Namibia',
  },
  {
    id: 'sphere-02',
    name: 'Luminous Star Rose Quartz Sphere',
    category: 'crystal-spheres',
    crystalType: 'Rose Quartz',
    size: '10 - 15 cm diameter',
    moq: 100,
    priceUSD: 64.0,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    description:
      'Dazzling spheres showcasing a distinctive 6-ray star asterism under single light sources. Beautiful translucent soft pink hue with rich internal dimensions.',
    availability: 'In Stock',
    purity: 'Translucent Pink Grade',
    origin: 'Madagascar',
  },

  // Crystal Clusters
  {
    id: 'cluster-01',
    name: 'Supreme Golden Pyrite Multi-Cube Cluster',
    category: 'crystal-clusters',
    crystalType: 'Pyrite',
    size: '15 - 22 cm width',
    moq: 100,
    priceUSD: 85.0,
    image: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&q=80&w=800',
    description:
      'Impressive interlocking cubic structures resembling raw golden treasure. Exhibits brilliant brassy luster and pristine geometric shapes formed naturally.',
    availability: 'In Stock',
    purity: 'AAA Mirror Luster',
    origin: 'Peru',
  },
  {
    id: 'cluster-02',
    name: 'Exquisite Velvet Malachite Radiating Rosette',
    category: 'crystal-clusters',
    crystalType: 'Malachite',
    size: '10 - 18 cm',
    moq: 100,
    priceUSD: 145.0,
    image: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&q=80&w=800',
    description:
      'Velvety fibrous rosettes with deep circular emerald green bands. Selected for high aesthetic curation in architectural designs.',
    availability: 'Limited Capacity',
    purity: 'A++ Collectible Grade',
    origin: 'DR Congo',
  },

  // Healing Stones
  {
    id: 'healing-01',
    name: 'Amethyst, Lapis & Quartz Luxury Wellness Set',
    category: 'healing-stones',
    crystalType: 'Multi-Stones',
    size: 'Standard 7-piece boxes',
    moq: 100,
    priceUSD: 18.5,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    description:
      'Premium wholesale boxed collections featuring highly polished, hand-picked chakra stones. Packaged in elegant gold-gilded, customizable luxury cardboard drawers.',
    availability: 'In Stock',
    purity: 'Certified Natural Gemstones',
    origin: 'Global Curated',
  },

  // Crystal Jewelry
  {
    id: 'jewelry-01',
    name: 'Sterling Silver Crown Amethyst Solitaire Ring',
    category: 'crystal-jewelry',
    crystalType: 'Amethyst',
    size: 'US Sizes 5 - 9 (bulk assortments)',
    moq: 100,
    priceUSD: 28.0,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    description:
      'Breathtaking facetted violet amethyst mounted elegantly in .925 sterling silver bands. Hand-set with luxury gold highlights along the gemstone bezel.',
    availability: 'Made to Order',
    purity: 'AA Facetted Gemstone',
    origin: 'India',
  },

  // Crystal Carvings
  {
    id: 'carve-01',
    name: 'Clear Quartz Archangel Sacred Sculpture',
    category: 'crystal-carvings',
    crystalType: 'Clear Quartz',
    size: '15 cm height',
    moq: 100,
    priceUSD: 120.0,
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800',
    description:
      'Exceptionally detailed angel sculpture, hand-carved over 32 hours by our master artisans. Features a brilliant high-transparency shine and zero visual cloudiness.',
    availability: 'Made to Order',
    purity: 'VVS Transparency',
    origin: 'Madagascar',
  },

  // Crystal Home Decor
  {
    id: 'decor-01',
    name: 'Gilded Rim Agate Plate Coaster Set',
    category: 'crystal-home-decor',
    crystalType: 'Agate',
    size: '9 - 11 cm diameter (4pcs set)',
    moq: 100,
    priceUSD: 35.0,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    description:
      'Luxurious dining accessories, crafted from natural agate slices and electro plated with brilliant 24K yellow gold paint finish. Eye-catching banding patterns.',
    availability: 'In Stock',
    purity: 'Grade A Banded Agate',
    origin: 'Brazil',
  },

  // Gemstone Products
  {
    id: 'gem-01',
    name: 'Premium Aventurine Jade Cooling Face Roller',
    category: 'gemstone-products',
    crystalType: 'Green Aventurine',
    size: '14 cm length',
    moq: 100,
    priceUSD: 8.5,
    image: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&q=80&w=800',
    description:
      'Double-sided premium rolling facial massager. Integrated with noiseless soft silicone inserts and zinc alloy frames plated in copper-gold. Ergonomic and elegant.',
    availability: 'In Stock',
    purity: '100% Brazilian Aventurine',
    origin: 'Brazil',
  },

  // Custom Products
  {
    id: 'custom-01',
    name: 'Bespoke Architectural Amethyst Cave Slab',
    category: 'custom-crystal-products',
    crystalType: 'Amethyst',
    size: 'Custom heights (up to 2.2 meters)',
    moq: 100,
    priceUSD: 2400.0,
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800',
    description:
      'Majestic monumental freestanding amethyst display pieces designed for hotel lobbies, elite commercial headquarters, or premium residences. Customized framing.',
    availability: 'Limited Capacity',
    purity: 'Elite Display Specimen',
    origin: 'Uruguay',
  },
];

export const EXPORT_REGIONS = [
  { name: 'North America', count: '48 Businesses', share: '35%' },
  { name: 'Western Europe', count: '32 Businesses', share: '28%' },
  { name: 'East Asia & Japan', count: '21 Businesses', share: '18%' },
  { name: 'Middle East / UAE', count: '15 Businesses', share: '12%' },
  { name: 'Australia & Oceania', count: '9 Businesses', share: '7%' },
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    role: 'Procurement Director',
    company: 'Aurum Wellness & Spa Group, Germany',
    text: 'Working with Earth Treasure has transformed our luxury spa supply line. The custom crystal massage rollers and branded packaging exceed every quality standard in Europe. Impeccable export documentation, not a single customs delay across 12 bulk cargo containers.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'rev-2',
    author: 'Hiroto Tanaka',
    role: 'Senior Curator',
    company: 'Imperial Stone Imports, Japan',
    text: "In Japan, mineral purity is paramount. Earth Treasure's clear quartz generators and spheres are near optical flawless grade, precisely metered. Their packaging is highly secure, ensuring zero fractures. We consider them our top strategic B2B manufacturing partner.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'rev-3',
    author: 'David Vance',
    role: 'Founder',
    company: 'Crystal Haven Retail Group, USA',
    text: 'We purchase high-volume raw amethyst cluster matrices and towers. The wholesale wholesale pricing offered by Earth Treasure makes them highly competitive globally, while the beauty of their hand-finished pieces stands head-and-shoulders above local alternative wholesalers.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
];
