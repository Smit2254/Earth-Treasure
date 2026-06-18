import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryShowcase from './components/CategoryShowcase';
import ProductsSection from './components/ProductsSection';
import InquiryModal from './components/InquiryModal';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import { CATEGORIES, PRODUCTS, REVIEWS, EXPORT_REGIONS } from './data/crystals';
import { Product, SelectedInquiryItem } from './types';
import {
  ShieldCheck,
  Globe2,
  Coins,
  HelpCircle,
  Truck,
  Layers,
  CheckCircle2,
  Star,
  Building2,
  Compass,
  ChevronRight,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import FAQChatBot from './components/FAQChatBot';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Custom quotation builder (Inquiry Cart state)
  const [inquiryBag, setInquiryBag] = useState<SelectedInquiryItem[]>([]);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // State for quick direct product inquiry
  const [directQueryProduct, setDirectQueryProduct] = useState<Product | null>(null);

  // Scroll to top on page tab switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handle addition of item inside the B2B inquiry bag
  const handleAddToInquiry = (product: Product, quantity: number) => {
    setInquiryBag((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleRemoveInquiryItem = (productId: string) => {
    setInquiryBag((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleUpdateInquiryQuantity = (productId: string, quantity: number) => {
    setInquiryBag((prev) => prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item)));
  };

  const handleClearInquiryBag = () => {
    setInquiryBag([]);
  };

  const handleSelectCategoryFromGrid = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('products');
  };

  // Direct Quote Modal trigger
  const handleQuickInquiry = (product: Product) => {
    setDirectQueryProduct(product);
    setIsInquiryModalOpen(true);
  };

  const handleOpenInquiryBagModal = () => {
    setDirectQueryProduct(null);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className='min-h-screen bg-emerald-950 font-sans text-slate-100 flex flex-col justify-between selection:bg-[#D4AF37] selection:text-emerald-950'>
      {/* 1. Header Navigation Block */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        categories={CATEGORIES}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 2. Main Selected Tab View rendering */}
      <main className='flex-grow'>
        {activeTab === 'home' && (
          <div className='animate-fade-in space-y-0 text-slate-800'>
            {/* HEROS SECTION */}
            <Hero
              onExploreClick={() => handleSelectCategoryFromGrid('crystal-towers')}
              onRequestQuoteClick={() => setActiveTab('contact')}
            />

            {/* WHY CHOOSE EARTH TREASURE (B2B features) */}
            <section className='py-16 bg-white border-b border-slate-100' id='why-choose-us'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='text-center max-w-2xl mx-auto space-y-3 mb-12'>
                  <p className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                    Secure Export Infrastructure
                  </p>
                  <h2 className='font-serif text-2xl md:text-3.5xl font-bold text-emerald-950 tracking-tight'>
                    Why Wholesalers Partner With Earth Treasure
                  </h2>
                  <div className='h-[2px] w-12 bg-[#D4AF37] mx-auto opacity-75' />
                  <p className='text-xs text-slate-500'>
                    A multi-national supply chain requires complete accountability. We eliminate trade discrepancies at
                    every stage.
                  </p>
                </div>

                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3' id='features-board'>
                  {/* Card 1 */}
                  <div className='p-6 rounded-2xl border border-slate-100 bg-slate-50/70 hover:border-[#D4AF37]/35 hover:shadow-lg transition flex gap-4 text-left'>
                    <div className='rounded-xl bg-teal-100/50 p-3 h-12 w-12 flex items-center justify-center shrink-0 text-emerald-900 border border-teal-200'>
                      <Building2 className='h-6 w-6' />
                    </div>
                    <div className='space-y-1.5'>
                      <h4 className='font-serif text-sm font-bold text-emerald-950'>Direct Manufacturer</h4>
                      <p className='text-xs text-slate-500 leading-relaxed'>
                        We operate fully integrated private mines and lapidary cutting facilities, bypassing middle
                        trading brokers to secure absolute lowest wholesale margins.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className='p-6 rounded-2xl border border-slate-100 bg-slate-50/70 hover:border-[#D4AF37]/35 hover:shadow-lg transition flex gap-4 text-left'>
                    <div className='rounded-xl bg-[#D4AF37]/10 p-3 h-12 w-12 flex items-center justify-center shrink-0 text-[#D4AF37] border border-[#D4AF37]/25'>
                      <Globe2 className='h-6 w-6' />
                    </div>
                    <div className='space-y-1.5'>
                      <h4 className='font-serif text-sm font-bold text-emerald-950'>Global Export Services</h4>
                      <p className='text-xs text-slate-500 leading-relaxed'>
                        Full customs assistance, marine transport bookings, Certificates of Origin, and SGS lapidary
                        assay reports structured properly for global jurisdictions.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className='p-6 rounded-2xl border border-slate-100 bg-slate-50/70 hover:border-[#D4AF37]/35 hover:shadow-lg transition flex gap-4 text-left'>
                    <div className='rounded-xl bg-purple-100 p-3 h-12 w-12 flex items-center justify-center shrink-0 text-purple-900 border border-purple-200'>
                      <ShieldCheck className='h-6 w-6' />
                    </div>
                    <div className='space-y-1.5'>
                      <h4 className='font-serif text-sm font-bold text-emerald-950'>Premium Quality Crystals</h4>
                      <p className='text-xs text-slate-500 leading-relaxed'>
                        Every container load undergoes specialized gemological verification to ensure 100% natural
                        mineral authenticity. We never accept synthetic materials.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className='p-6 rounded-2xl border border-slate-100 bg-slate-50/70 hover:border-[#D4AF37]/35 hover:shadow-lg transition flex gap-4 text-left'>
                    <div className='rounded-xl bg-[#D4AF37]/10 p-3 h-12 w-12 flex items-center justify-center shrink-0 text-[#D4AF37] border border-[#D4AF37]/25'>
                      <Coins className='h-6 w-6' />
                    </div>
                    <div className='space-y-1.5'>
                      <h4 className='font-serif text-sm font-bold text-emerald-950'>Competitive Wholesale Pricing</h4>
                      <p className='text-xs text-slate-500 leading-relaxed'>
                        Generous bulk price-tier structures. Scaled bulk container-loads secure exclusive discounts with
                        tailored payment plans for verified trade partners.
                      </p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className='p-6 rounded-2xl border border-slate-100 bg-slate-50/70 hover:border-[#D4AF37]/35 hover:shadow-lg transition flex gap-4 text-left'>
                    <div className='rounded-xl bg-cyan-100 p-3 h-12 w-12 flex items-center justify-center shrink-0 text-cyan-900 border border-cyan-250'>
                      <Layers className='h-6 w-6' />
                    </div>
                    <div className='space-y-1.5'>
                      <h4 className='font-serif text-sm font-bold text-emerald-950'>Custom Orders Available</h4>
                      <p className='text-xs text-slate-500 leading-relaxed'>
                        Our master artisans carve any dimensional specification, geode slice alignment, branded
                        packaging, or custom wellness tools according to your specifications.
                      </p>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className='p-6 rounded-2xl border border-slate-100 bg-slate-50/70 hover:border-[#D4AF37]/35 hover:shadow-lg transition flex gap-4 text-left'>
                    <div className='rounded-xl bg-amber-100 p-3 h-12 w-12 flex items-center justify-center shrink-0 text-amber-900 border border-amber-200'>
                      <Truck className='h-6 w-6' />
                    </div>
                    <div className='space-y-1.5'>
                      <h4 className='font-serif text-sm font-bold text-emerald-950'>Secure Worldwide Shipping</h4>
                      <p className='text-xs text-slate-500 leading-relaxed'>
                        Shock-insulated foam packaging and custom-fumigated timber pallets. We maintain contract
                        agreements with elite global freight forwarding networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DYNAMIC PRODUCT CATEGORIES GRID SHOWCASE */}
            <CategoryShowcase categories={CATEGORIES} onSelectCategory={handleSelectCategoryFromGrid} />

            {/* BEST SELLER FEATURED PRODUCT CAROUSEL */}
            <section className='py-16 bg-slate-50 border-t border-b border-slate-200' id='featured-carousel-block'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left'>
                  <div className='space-y-2'>
                    <p className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                      Curated Hot Sellers
                    </p>
                    <h2 className='font-serif text-2xl md:text-3.5xl font-bold text-emerald-950 tracking-tight'>
                      BBest Selling Wholesale Products
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setActiveTab('products');
                    }}
                    className='flex items-center gap-1.5 text-xs font-mono text-emerald-900 uppercase font-bold tracking-wider hover:text-emerald-700 transition'
                  >
                    <span>View Full 4,000+ Catalog List</span>
                    <ChevronRight className='h-4 w-4' />
                  </button>
                </div>

                {/* Horizontal flow product scroll */}
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4' id='carousel-grid'>
                  {PRODUCTS.slice(0, 4).map((prod) => (
                    <div
                      key={prod.id}
                      className='group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#D4AF37]/50 transition duration-300 flex flex-col justify-between text-left'
                    >
                      <div className='relative aspect-square bg-slate-50'>
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className='w-full h-full object-cover object-center transition group-hover:scale-105'
                          referrerPolicy='no-referrer'
                        />
                        <span className='absolute top-2.5 left-2.5 rounded bg-emerald-950 text-white font-mono text-[9px] font-bold px-2 py-0.5 tracking-wider uppercase'>
                          {prod.availability}
                        </span>
                      </div>

                      <div className='p-4 space-y-2 flex-grow flex flex-col justify-between'>
                        <div className='space-y-1'>
                          <h4 className='font-serif text-sm font-bold text-slate-800 line-clamp-1'>{prod.name}</h4>
                          <p className='text-[11px] text-slate-500 line-clamp-2 leading-relaxed'>{prod.description}</p>
                        </div>

                        <div className='pt-2.5 border-t border-slate-100 mt-2 space-y-3'>
                          <div className='flex justify-between items-baseline'>
                            <span className='text-[9px] text-slate-400 font-mono uppercase'>Wholesale Price:</span>
                            <span className='text-xs font-bold text-[#D4AF37] font-mono'>
                              ${prod.priceUSD.toFixed(2)} USD
                            </span>
                          </div>

                          {/* Required Export Logistics Note inside carousel too */}
                          <p className='text-[8px] text-slate-400 leading-normal italic'>
                            Shipping and export packaging calculate on request based on destination.
                          </p>

                          <button
                            onClick={() => handleQuickInquiry(prod)}
                            className='w-full rounded-lg bg-emerald-950 hover:bg-emerald-900 text-white py-2 text-[10px] font-bold uppercase tracking-wider text-center transition'
                          >
                            Quick Inquiry
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* EXPORT & MANUFACTURING PROFILE GRID (QC, ISO details with imagery) */}
            <section className='py-16 bg-white border-b border-slate-100' id='manufacturing-export-profile'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
                  {/* Narrative details */}
                  <div className='space-y-6 text-left' id='mfc-narrative'>
                    <div className='space-y-2'>
                      <span className='text-xs font-mono text-emerald-900 font-bold uppercase tracking-widest block'>
                        Authorized Trade Unit
                      </span>
                      <h2 className='font-serif text-2xl md:text-3.5xl font-bold text-emerald-950 tracking-tight'>
                        Meticulous Lapidary Standards Built For Global Distribution
                      </h2>
                    </div>

                    <p className='text-xs md:text-sm text-slate-600 leading-relaxed'>
                      Custom wholesale crystal procurement requires deep technical compliance. At our certified
                      polishing lines, skilled master craftsmen inspect raw stone structures to prevent structural
                      micro-fractures prior to tooling.
                    </p>

                    {/* Step criteria rows */}
                    <div className='space-y-4' id='mfc-bullet-matrix'>
                      <div className='flex gap-3'>
                        <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 shrink-0 mt-0.5'>
                          ✓
                        </div>
                        <div className='space-y-0.5'>
                          <h5 className='font-bold text-sm text-emerald-950'>Ultrasonic Geode Cleaning</h5>
                          <p className='text-xs text-slate-500'>
                            All specimens clear mud, clay deposits, and carbon contaminants beautifully without chemical
                            residue.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-3'>
                        <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 shrink-0 mt-0.5'>
                          ✓
                        </div>
                        <div className='space-y-0.5'>
                          <h5 className='font-bold text-sm text-emerald-950'>Fumigated ISPM-15 Wooden Pallets</h5>
                          <p className='text-xs text-slate-500'>
                            Every sea freight load is housed in certified secure solid container timber, avoiding
                            quarantine delays.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-3'>
                        <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 shrink-0 mt-0.5'>
                          ✓
                        </div>
                        <div className='space-y-0.5'>
                          <h5 className='font-bold text-sm text-emerald-950'>SGS Mineral Certificate Assistance</h5>
                          <p className='text-xs text-slate-500'>
                            Full chemical grading documentation verifying natural origin properties for rapid custom
                            clearance desk audits.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image side */}
                  <div className='relative'>
                    <div className='relative border-2 border-[#D4AF37]/30 rounded-2xl p-[3px] bg-slate-50 shadow-xl overflow-hidden'>
                      <img
                        src='/src/assets/images/factory_export_1781424069102.jpg'
                        alt='Master craftsman examining large raw geode for shipping'
                        className='rounded-xl w-full object-cover aspect-[4/3] pointer-events-none'
                        referrerPolicy='no-referrer'
                      />

                      <div className='absolute top-4 left-4 rounded-md bg-emerald-950/90 text-[#D4AF37] text-[10px] font-mono border border-[#D4AF37]/20 px-3 py-1 uppercase font-bold'>
                        ISO 9001:2015 Approved
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* GLOBAL REACH SECTION (Served countries with high-end statistics maps visualizer) */}
            <section className='py-16 bg-emerald-950 text-white relative overflow-hidden' id='global-map-reach'>
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none' />
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='grid gap-12 lg:grid-cols-12 lg:items-center'>
                  {/* Left statistic columns */}
                  <div className='lg:col-span-4 space-y-6 text-left'>
                    <div className='space-y-2'>
                      <p className='text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold'>
                        Consolidated Logistical Footprint
                      </p>
                      <h2 className='font-serif text-2xl md:text-3.5xl font-bold tracking-tight'>
                        Serving Premium Brands Worldwide
                      </h2>
                    </div>

                    <p className='text-xs md:text-sm text-slate-300 leading-relaxed'>
                      Trusted by wholesale distributors, luxury spas, architectural firms, and holistic wellness brands
                      across over 48 countries. We coordinate all container shipments securely.
                    </p>

                    {/* Regional lists */}
                    <div className='space-y-3 text-xs' id='geographic-market-list'>
                      {EXPORT_REGIONS.map((region) => (
                        <div
                          key={region.name}
                          className='flex justify-between items-center border-b border-emerald-900 pb-1.5'
                        >
                          <span className='font-semibold text-slate-200'>{region.name}</span>
                          <div className='flex gap-3 text-right font-mono'>
                            <span className='text-[#D4AF37]'>{region.count}</span>
                            <span className='text-slate-400'>({region.share})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right simulated vector wireframe global grid map */}
                  <div className='lg:col-span-8 bg-emerald-900/20 border border-emerald-800 p-4 sm:p-6 rounded-2xl relative shadow-inner overflow-hidden flex flex-col justify-center min-h-[350px]'>
                    {/* Simulated visual dots of the target map */}
                    <div
                      className='absolute inset-0 opacity-15 pointer-events-none'
                      style={{
                        backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    />

                    {/* Glowing coordinate labels referencing actual clients */}
                    <div className='relative space-y-4 max-w-lg mx-auto w-full'>
                      <div className='flex items-center justify-between text-xs font-mono text-[#D4AF37]'>
                        <span>[PORT REGISTRATION ACTIVE: SG-EXP-01]</span>
                        <span className='text-cyan-400'>ONLINE TRAFFIC LIVE</span>
                      </div>

                      <div className='grid gap-3 sm:grid-cols-2 text-left' id='active-cargo-blocks'>
                        <div className='p-3.5 rounded-lg bg-emerald-950 border border-emerald-900 space-y-1 hover:border-cyan-500 duration-200'>
                          <p className='text-[10px] text-cyan-400 font-mono'>USA CUSTOMS CLEARANCE DECLARED</p>
                          <h4 className='text-xs font-bold font-serif text-white'>Consignment 781-A (12 Tons)</h4>
                          <p className='text-[10px] text-slate-400'>
                            Raw Geode matrices and towers bound for New York Harbor.
                          </p>
                        </div>

                        <div className='p-3.5 rounded-lg bg-emerald-950 border border-emerald-900 space-y-1 hover:border-[#D4AF37] duration-200'>
                          <p className='text-[10px] text-[#D4AF37] font-mono'>HAMBURG PORT COMPLIANT</p>
                          <h4 className='text-xs font-bold font-serif text-white'>Consignment 841-K (5,000 sets)</h4>
                          <p className='text-[10px] text-slate-400'>
                            Polished amethyst chakra boxes locked with ISPM-15 packaging.
                          </p>
                        </div>
                      </div>

                      <div className='border border-emerald-800 p-3 rounded-lg bg-emerald-950/60 flex items-center justify-between text-[11px] font-mono'>
                        <span className='text-slate-300'>Target ETA European Depot dispatch:</span>
                        <span className='text-teal-400 font-bold'>11 Business Days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TESTIMONIALS SLIDER SECTION */}
            <section className='py-16 bg-white border-b border-slate-100' id='testimonials-block'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='text-center max-w-2xl mx-auto space-y-3 mb-12'>
                  <p className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                    Verified Trade Reviews
                  </p>
                  <h2 className='font-serif text-2xl md:text-3.5xl font-bold text-emerald-950 tracking-tight'>
                    Endorsements From Corporate Importers
                  </h2>
                </div>

                <div className='grid gap-6 md:grid-cols-3' id='testimonials-grid'>
                  {REVIEWS.map((rev) => (
                    <div
                      key={rev.id}
                      className='p-6 rounded-2xl border border-slate-200 bg-slate-50 relative flex flex-col justify-between text-left hover:shadow-md transition'
                    >
                      <div className='space-y-4'>
                        {/* Core star counts */}
                        <div className='flex gap-1 text-[#D4AF37]'>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className='h-4 w-4 fill-[#D4AF37]' />
                          ))}
                        </div>
                        <p className='text-xs text-slate-600 italic leading-relaxed font-sans'>"{rev.text}"</p>
                      </div>

                      {/* Author card footer */}
                      <div className='flex gap-3 items-center pt-4 border-t border-slate-200/60 mt-4'>
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className='h-10 w-10 rounded-full object-cover border border-[#D4AF37]/45'
                          referrerPolicy='no-referrer'
                        />
                        <div>
                          <h4 className='text-xs font-bold text-emerald-950'>{rev.author}</h4>
                          <p className='text-[10px] text-slate-500 font-mono leading-none mt-0.5'>{rev.role}</p>
                          <p className='text-[9px] text-[#D4AF37] font-semibold tracking-wide uppercase mt-1'>
                            {rev.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* INQUIRY GIGANTIC CTA ACTION CALL */}
            <section
              className='py-16 bg-gradient-to-tr from-emerald-950 via-emerald-900 to-emerald-950 border-t border-b border-[#D4AF37]/15 relative overflow-hidden'
              id='mega-cta-section'
            >
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none' />
              <div className='mx-auto max-w-4xl px-4 text-center space-y-6 relative z-10'>
                <span className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                  Authorized OEM/ODM Manufacturing
                </span>
                <h2 className='font-serif text-3xl md:text-5xl font-bold tracking-tight text-white'>
                  Looking For Premium Wholesale Crystal Supplies?
                </h2>
                <p className='text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed'>
                  Join our verified business circle today. Contact Earth Treasure for bespoke container shipments,
                  customized polishing shapes, branded gemstone accessories, and custom customs brokerage.
                </p>
                <div className='pt-2'>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className='rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-amber-400 hover:brightness-110 text-emerald-950 font-bold uppercase tracking-wider text-xs px-10 py-4 transition hover:shadow-lg hover:shadow-amber-500/20 active:scale-95'
                    id='massive-cta-btn'
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'products' && (
          <ProductsSection
            products={PRODUCTS}
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onAddToInquiry={handleAddToInquiry}
            onQuickInquiry={handleQuickInquiry}
            inquiryItemsCount={inquiryBag.reduce((acc, current) => acc + current.quantity, 0)}
            onOpenInquiryBag={handleOpenInquiryBagModal}
          />
        )}

        {activeTab === 'about' && <AboutUs />}

        {activeTab === 'contact' && <ContactUs categories={CATEGORIES} />}
      </main>

      {/* 3. Footer Block */}
      <Footer categories={CATEGORIES} setActiveTab={setActiveTab} setSelectedCategory={setSelectedCategory} />

      {/* 4. Inquiry / RFQ Modal Panel Overlay */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        selectedItems={inquiryBag}
        onRemoveItem={handleRemoveInquiryItem}
        onUpdateQuantity={handleUpdateInquiryQuantity}
        directInquiryProduct={directQueryProduct}
        onClearInquiryBag={handleClearInquiryBag}
      />

      {/* 5. Floating Pulsing WhatsApp Support Service */}
      <WhatsAppButton />

      {/* 6. FAQ Chat Bot */}
      <FAQChatBot />
    </div>
  );
}
