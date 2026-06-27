import React from "react";
import { ArrowRight, ShieldCheck, Ship, Award, Users } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onRequestQuoteClick: () => void;
}

export default function Hero({ onExploreClick, onRequestQuoteClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900/40 to-emerald-950 py-16 md:py-24 border-b border-[#D4AF37]/10" id="hero-section">
      {/* Absolute Decorative Grid Backdrops & Ornaments */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Content Column (Left on Desktop, Full on Mobile) */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-narrative">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/35 bg-amber-500/10 px-4 py-1.5 text-xs text-[#D4AF37] tracking-wider font-mono">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
              TOP-TIER VERIFIED MANUFACTURER & WORLDWIDE EXPORTER
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              Premium Crystal Manufacturer <br />
              <span className="bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-300 bg-clip-text text-transparent font-serif italic font-normal drop-shadow-sm">
                &amp; Global Exporter
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">
              Supplying high-quality natural crystals, gemstone products, healing stones, custom carvings, home decor items, and bespoke gemstone carvings to wholesalers, retailers, wellness salons, and brands worldwide. Direct-from-source mining and meticulous ISO-standards inspection.
            </p>

            {/* B2B Trust Badges Inside Hero Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 max-w-xl" id="hero-trust-grids">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <ShieldCheck className="h-4.5 w-4.5 text-[#D4AF37]" />
                <span>100% Certified Natural</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <Ship className="h-4.5 w-4.5 text-cyan-400" />
                <span>Global Customs &amp; Freight</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <Award className="h-4.5 w-4.5 text-purple-400" />
                <span>ISO 9001 Audited</span>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-amber-400 hover:brightness-110 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-950 transition-all hover:shadow-lg hover:shadow-amber-500/20 active:scale-95"
                id="hero-cta-explore"
              >
                Explore Categories
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onRequestQuoteClick}
                className="rounded-full border border-slate-300 bg-transparent hover:bg-white/10 hover:border-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all active:scale-95"
                id="hero-cta-quote"
              >
                Request Wholesale Quote
              </button>
            </div>
          </div>

          {/* Hero Media Column (Right - Interactive 3D Frame style with Generated Beautiful Crystal Specimen) */}
          <div className="lg:col-span-5 relative" id="hero-graphics">
            {/* Ambient luxury backing ring */}
            <div className="absolute inset-x-0 -top-4 -bottom-4 mx-auto max-w-md border-2 border-[#D4AF37]/15 rounded-full rotate-12 scale-[1.05] pointer-events-none" />
            
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border-2 border-[#D4AF37]/30 bg-emerald-950/70 p-[3px] shadow-2xl shadow-emerald-950">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 pointer-events-none" />
              
              <figure className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full rounded-[14px] overflow-hidden">
                <img
                  src="/images/hero_crystal_banner_1781424019643.jpg"
                  alt="Premium Luxury Quartz and Emerald Crystals Earth Treasure Exporter Banner"
                  className="h-full w-full object-cover object-center transition-transform duration-10000 ease-out hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </figure>

              {/* Float badge overlays representing premium curation */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-[#D4AF37]/20 bg-emerald-900/95 p-4 shadow-xl text-left max-w-[200px]" id="hero-badge-overlay-1">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
                  <p className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase">Export Standard</p>
                </div>
                <p className="text-xs font-semibold text-white mt-1">Multi-layered shockproof protective boxing</p>
              </div>

              <div className="absolute -top-4 -right-4 rounded-xl border border-[#D4AF37]/20 bg-emerald-950/95 px-4 py-2.5 shadow-xl text-left" id="hero-badge-overlay-2">
                <p className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">Custom Slicing</p>
                <p className="text-[11px] text-teal-100 font-serif font-medium mt-0.5">Custom sizes available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
