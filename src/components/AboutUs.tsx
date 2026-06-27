import React from 'react';
import { Compass, HeartHandshake, Eye, Target, CheckCircle2, Factory, ShieldCheck, Download } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className='bg-emerald-950 text-white' id='about-us-page'>
      {/* 1. Header Banner */}
      <section className='relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900/40 to-emerald-950 py-16 border-b border-[#D4AF37]/10'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_50%)] pointer-events-none' />
        <div className='mx-auto max-w-4xl px-4 text-center space-y-4'>
          <p className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase'>
            Established 1998 • Registered Global Exporter
          </p>
          <h1 className='font-serif text-3xl md:text-5xl font-bold tracking-tight text-white'>
            Our Manufacturing &amp; Export Legacy
          </h1>
          <div className='h-[2px] w-20 bg-[#D4AF37] mx-auto' />
          <p className='text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto'>
            Earth Treasure is an internationally acclaimed manufacturer and consolidated exporter of high-grade natural
            crystal and architectural gemstone specimens, trusted by wholesalers, importers, and luxury wellness
            collectives globally.
          </p>
        </div>
      </section>

      {/* 2. Visual Storytellers with Generated Factory / Craftsman Inspection Image */}
      <section className='py-16 bg-white text-slate-800' id='story-craftsmanship-section'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-12 lg:items-center'>
            {/* Left Graphics Grid */}
            <div className='lg:col-span-5 relative'>
              <div className='relative border-4 border-[#D4AF37]/15 p-2 rounded-2xl bg-slate-50 shadow-2xl'>
                <img
                  src='images/factory_export_1781424069102.jpg'
                  alt='Earth Treasure artisans auditing raw quartz geode for export compliance'
                  className='rounded-xl w-full object-cover aspect-[4/3] shadow-inner'
                  referrerPolicy='no-referrer'
                />

                <div className='absolute -bottom-4 -right-4 rounded-lg bg-emerald-950 text-white p-4 border border-[#D4AF37]/30 shadow-xl max-w-xs text-left'>
                  <div className='flex items-center gap-1'>
                    <Factory className='h-4.5 w-4.5 text-[#D4AF37] shrink-0' />
                    <span className='text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider'>
                      QC Certification Desk
                    </span>
                  </div>
                  <p className='text-[11px] text-slate-300 mt-1'>
                    Multi-stage ultrasonic cleansing &amp; mineral safety inspection.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Storyline details */}
            <div className='lg:col-span-7 text-left space-y-6'>
              <div className='space-y-2'>
                <span className='text-xs font-mono text-[#D4AF37] bg-emerald-950/90 py-1 px-3.5 rounded-full uppercase tracking-widest font-semibold inline-block'>
                  Our Story
                </span>
                <h2 className='font-serif text-2xl md:text-3.5xl font-bold text-emerald-950 tracking-tight'>
                  Purity Excavated with Meticulous Honor
                </h2>
              </div>

              <div className='space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed'>
                <p>
                  Founded near the turn of the millennium, Earth Treasure began as a small boutique curating unique
                  geological formations from certified local deposits. As our partnerships with miners across South
                  America, Madagascar, and East Asia deepened, we established a dedicated state-of-the-art lapidary
                  design workshop.
                </p>
                <p>
                  Today, we process over 50 metric tons of raw crystals annually. Every slice, facet, and bevel is
                  custom-tooled by hand. This beautiful synthesis of ancient mineral legacy and modern European
                  machinery allows Earth Treasure to consistently deliver flawless bulk consignments with strict
                  ISO-9001 quality audits.
                </p>
              </div>

              {/* Core Mission and Vision cards */}
              <div className='grid gap-4 sm:grid-cols-2 pt-2' id='mission-vision-grid'>
                <div className='p-5 border border-slate-100 rounded-xl bg-slate-50/80 space-y-2 hover:border-[#D4AF37]/35 duration-200'>
                  <div className='flex items-center gap-2'>
                    <div className='rounded-lg bg-emerald-900/10 p-2 text-emerald-900'>
                      <Target className='h-5 w-5' />
                    </div>
                    <h3 className='font-serif text-sm font-bold text-emerald-950'>Our Mission</h3>
                  </div>
                  <p className='text-xs text-slate-500 leading-normal'>
                    Deliver premium crystal products with exceptional, verifiable mineral quality and completely
                    transparent, stress-free B2B exporting services.
                  </p>
                </div>

                <div className='p-5 border border-slate-100 rounded-xl bg-slate-50/80 space-y-2 hover:border-[#D4AF37]/34 duration-200'>
                  <div className='flex items-center gap-2'>
                    <div className='rounded-lg bg-emerald-900/10 p-2 text-emerald-900'>
                      <Eye className='h-5 w-5' />
                    </div>
                    <h3 className='font-serif text-sm font-bold text-emerald-950'>Our Vision</h3>
                  </div>
                  <p className='text-xs text-slate-500 leading-normal'>
                    To become the global gold-standard benchmark in sustainable mining, crystal lapidary craftsmanship,
                    and dependable multi-national mineral trade logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Manufacturing & Export Excellence Grid */}
      <section
        className='py-16 bg-emerald-900/20 text-white border-t border-b border-[#D4AF37]/10'
        id='manufacturing-excellence'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-2xl mx-auto space-y-3 mb-12'>
            <span className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase'>
              The Earth Treasure Safeguard
            </span>
            <h2 className='font-serif text-2xl md:text-3xl font-bold'>Uncompromising Quality Compliance</h2>
            <div className='h-[2px] w-12 bg-[#D4AF37] mx-auto' />
            <p className='text-xs text-slate-300'>
              Bulk mineral shipments require highly calculated safety procedures. Because of this, Earth Treasure
              maintains complete oversight over four distinct structural pillars of excellence.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4' id='pillars-grid'>
            {/* Pillar 1 */}
            <div className='p-6 rounded-2xl bg-emerald-950 border border-emerald-800 space-y-3 flex flex-col justify-between'>
              <div className='space-y-3'>
                <div className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500/10 to-amber-500/20 text-[#D4AF37] border border-[#D4AF37]/20'>
                  <HeartHandshake className='h-5 w-5' />
                </div>
                <h3 className='font-serif text-sm font-bold text-slate-100'>1. Ethical Mine Sourcing</h3>
              </div>
              <p className='text-xs text-slate-400 mt-2 leading-relaxed'>
                We work directly with authorized, eco-conscious cooperatives near mineral veins, verifying fair-wage
                conditions and carbon-conscious earth extraction procedures.
              </p>
              <div className='text-[10px] font-mono text-emerald-400 pt-3 border-t border-emerald-900 uppercase'>
                Minerals audited and compliant
              </div>
            </div>

            {/* Pillar 2 */}
            <div className='p-6 rounded-2xl bg-emerald-950 border border-emerald-800 space-y-3 flex flex-col justify-between'>
              <div className='space-y-3'>
                <div className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500/10 to-cyan-500/20 text-cyan-400 border border-cyan-500/20'>
                  <ShieldCheck className='h-5 w-5' />
                </div>
                <h3 className='font-serif text-sm font-bold text-slate-100'>2. Lapidary Inspection</h3>
              </div>
              <p className='text-xs text-slate-400 mt-2 leading-relaxed'>
                Each shipment is certified by advanced gemological specialists using refractive testing. This guarantees
                that only authentic gemstones reach your distribution depots.
              </p>
              <div className='text-[10px] font-mono text-cyan-400 pt-3 border-t border-emerald-900 uppercase'>
                100% genuine guaranteed
              </div>
            </div>

            {/* Pillar 3 */}
            <div className='p-6 rounded-2xl bg-emerald-950 border border-emerald-800 space-y-3 flex flex-col justify-between'>
              <div className='space-y-3'>
                <div className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500/10 to-purple-500/20 text-purple-400 border border-purple-500/20'>
                  <Factory className='h-5 w-5' />
                </div>
                <h3 className='font-serif text-sm font-bold text-slate-100'>3. Safe Protective Packing</h3>
              </div>
              <p className='text-xs text-slate-400 mt-2 leading-relaxed'>
                Every single piece is bubble-wrapped, layered with high-impact foam, and shipped inside certified
                ISPM-15 wooden storage structures that survive multi-port ship transfers.
              </p>
              <div className='text-[10px] font-mono text-purple-400 pt-3 border-t border-emerald-900 uppercase'>
                Zero-breakage ocean shipping
              </div>
            </div>

            {/* Pillar 4 */}
            <div className='p-6 rounded-2xl bg-emerald-950 border border-emerald-800 space-y-3 flex flex-col justify-between'>
              <div className='space-y-3'>
                <div className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500/10 to-amber-500/20 text-[#D4AF37] border border-[#D4AF37]/20'>
                  <Compass className='h-5 w-5' />
                </div>
                <h3 className='font-serif text-sm font-bold text-slate-100'>4. Customs &amp; Documentation</h3>
              </div>
              <p className='text-xs text-slate-400 mt-2 leading-relaxed'>
                Our logistics experts manage ocean freight, certificates of origin, SGS test reports, and customs
                documentation tailored precisely to any importing nation.
              </p>
              <div className='text-[10px] font-mono text-[#D4AF37] pt-3 border-t border-emerald-900 uppercase'>
                Hassle-free customs broker
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Work With Us (Visual grids) */}
      <section className='relative py-24 overflow-hidden'>
        {/* Background Glow */}
        <div className='absolute inset-0 bg-emerald-900/20 border-t border-b border-[#D4AF37]/10' />

        <div className='relative max-w-7xl mx-auto px-6'>
          {/* Heading */}
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2'>
              <ShieldCheck className='h-4 w-4 text-[#D4AF37]' />
              <span className='text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono'>Verified Business</span>
            </div>

            <h2 className='mt-6 text-4xl md:text-5xl font-serif font-bold text-white'>Why Trust Earth Treasure?</h2>

            <p className='mt-5 max-w-3xl mx-auto text-slate-400 leading-relaxed'>
              We operate with complete transparency and compliance. Our government-issued registrations and
              certifications ensure secure, reliable, and professional business transactions worldwide.
            </p>
          </div>

          {/* Certificate Cards */}
          <div className='grid gap-8 lg:grid-cols-3'>
            {/* IEC */}
            <div className='group rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1'>
              <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-2xl'>
                🌍
              </div>

              <h3 className='text-xl font-semibold text-[#D4AF37]'>Import Export Code (IEC)</h3>

              <p className='mt-4 text-slate-300 leading-relaxed text-sm'>
                Official authorization from the Directorate General of Foreign Trade enabling Earth Treasure to conduct
                international exports and imports with confidence and legal compliance.
              </p>

              <div className='mt-4 text-xs text-slate-500'>IEC: CDOPV1894A</div>

              <div className='mt-6 flex gap-3'>
                <a
                  href='/images/CDOPV1894A.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all'
                >
                  <Eye className='h-4 w-4' />
                  View
                </a>

                <a
                  href='/images/CDOPV1894A.pdf'
                  download='EarthTreasure-IEC-Certificate.pdf'
                  className='inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-medium text-emerald-950 hover:bg-amber-400 transition-all'
                >
                  <Download className='h-4 w-4' />
                  Download
                </a>
              </div>
            </div>

            {/* GST */}
            <div className='group rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1'>
              <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-2xl'>
                📜
              </div>

              <h3 className='text-xl font-semibold text-[#D4AF37]'>GST Registered</h3>

              <p className='mt-4 text-slate-300 leading-relaxed text-sm'>
                Registered under India's Goods and Services Tax system, ensuring transparent invoicing, regulatory
                compliance, and professional business operations.
              </p>

              <div className='mt-4 text-xs text-slate-500'>GSTIN: 24CDOPV1894A1ZA</div>

              <div className='mt-6 flex gap-3'>
                <a
                  href='/images/GST Certificate.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all'
                >
                  <Eye className='h-4 w-4' />
                  View
                </a>

                <a
                  href='/images/GST Certificate.pdf'
                  download='EarthTreasure-GST-Certificate.pdf'
                  className='inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-medium text-emerald-950 hover:bg-amber-400 transition-all'
                >
                  <Download className='h-4 w-4' />
                  Download
                </a>
              </div>
            </div>

            {/* UDYAM */}
            <div className='group rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1'>
              <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-2xl'>
                🏆
              </div>

              <h3 className='text-xl font-semibold text-[#D4AF37]'>Udyam MSME Registered</h3>

              <p className='mt-4 text-slate-300 leading-relaxed text-sm'>
                Recognized under the Government of India's MSME framework, demonstrating legitimacy, accountability, and
                commitment to long-term business excellence.
              </p>

              <div className='mt-4 text-xs text-slate-500'>UDYAM-GJ-03-0071183</div>

              <div className='mt-6 flex gap-3'>
                <a
                  href='/images/Udyam Registration Certificate.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all'
                >
                  <Eye className='h-4 w-4' />
                  View
                </a>

                <a
                  href='/images/Udyam Registration Certificate.pdf'
                  download='EarthTreasure-Udyam-Certificate.pdf'
                  className='inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-medium text-emerald-950 hover:bg-amber-400 transition-all'
                >
                  <Download className='h-4 w-4' />
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Trust Banner */}
          <div className='mt-16 rounded-3xl border border-[#D4AF37]/10 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 p-8'>
            <div className='grid md:grid-cols-3 gap-8 text-center'>
              <div>
                <h4 className='text-2xl font-bold text-[#D4AF37]'>IEC Verified</h4>
                <p className='text-sm text-slate-400 mt-2'>Authorized for International Trade</p>
              </div>

              <div>
                <h4 className='text-2xl font-bold text-[#D4AF37]'>GST Registered</h4>
                <p className='text-sm text-slate-400 mt-2'>Tax Compliant & Transparent</p>
              </div>

              <div>
                <h4 className='text-2xl font-bold text-[#D4AF37]'>MSME Certified</h4>
                <p className='text-sm text-slate-400 mt-2'>Government Recognized Enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Work With Us (Visual grids) */}
      <section className='py-16 bg-white text-slate-800' id='benefits-section'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-2xl mx-auto space-y-3 mb-10'>
            <h2 className='font-serif text-2xl md:text-3.5xl font-bold text-emerald-950 tracking-tight'>
              A Strategic B2B Ally for Your Business
            </h2>
            <p className='text-xs text-slate-500'>
              Why international distributors form decadal contracts with Earth Treasure.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/85'>
              <CheckCircle2 className='h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5' />
              <div className='text-left space-y-1'>
                <h4 className='font-bold text-emerald-950 text-sm font-serif'>Direct Mine Pricing</h4>
                <p className='text-xs text-slate-500'>
                  By completely removing intermediate trading partners, we offer margins that are up to 35% lower than
                  normal wholesale brokers.
                </p>
              </div>
            </div>

            <div className='flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/85'>
              <CheckCircle2 className='h-5 w-5 text-cyan-500 shrink-0 mt-0.5' />
              <div className='text-left space-y-1'>
                <h4 className='font-bold text-emerald-950 text-sm font-serif'>Verifiable Certifications</h4>
                <p className='text-xs text-slate-500'>
                  Authentic materials backed by certified lab reports, mineral audits, and certificates of origin for
                  all countries served.
                </p>
              </div>
            </div>

            <div className='flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/85'>
              <CheckCircle2 className='h-5 w-5 text-purple-500 shrink-0 mt-0.5' />
              <div className='text-left space-y-1'>
                <h4 className='font-bold text-emerald-950 text-sm font-serif'>Low B2B Minimums</h4>
                <p className='text-xs text-slate-500'>
                  Flexible starter test consignments allow emerging spas and wellness organizations to test user
                  reception before larger bulk orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
