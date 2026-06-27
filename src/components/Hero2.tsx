import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, Ship, Award } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onRequestQuoteClick: () => void;
}

export default function Hero({ onExploreClick, onRequestQuoteClick }: HeroProps) {
  const heroImages = [
    '/images/crystal_spheres_1781424052980.jpg',
    '/images/crystal_towers_1781424039362.jpg',
    '/images/factory_export_1781424069102.jpg',
    '/images/hero_crystal_banner_1781424019643.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className='relative overflow-hidden py-16 md:py-24 border-b border-[#D4AF37]/10' id='hero-section'>
      {/* Background Slideshow */}
      <div className='absolute inset-0 z-0'>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt='' className='h-full w-full object-cover scale-110 animate-slowZoom' />

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/65' />
          </div>
        ))}
      </div>

      {/* Decorative Glow Effects */}
      <div className='absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none' />
      <div className='absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid gap-12 lg:grid-cols-12 lg:items-center'>
          {/* Hero Content */}
          <div className='lg:col-span-7 space-y-6 text-left' id='hero-narrative'>
            <div className='inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/35 bg-amber-500/10 px-4 py-1.5 text-xs text-[#D4AF37] tracking-wider font-mono'>
              <span className='h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse' />
              TOP-TIER VERIFIED MANUFACTURER & WORLDWIDE EXPORTER
            </div>

            <h1 className='font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_3px_20px_rgba(0,0,0,0.8)]'>
              Premium Crystal Manufacturer
              <br />
              <span className='bg-gradient-to-r from-yellow-100 via-[#FFD700] to-amber-200 bg-clip-text text-transparent italic font-normal drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]'>
                &amp; Global Exporter
              </span>
            </h1>

            <p className='text-sm md:text-base text-slate-100 max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]'>
              Supplying high-quality natural crystals, gemstone products, healing stones, custom carvings, home decor
              items, and bespoke gemstone carvings to wholesalers, retailers, wellness salons, and brands worldwide.
              Direct-from-source mining and meticulous ISO-standards inspection.
            </p>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 max-w-xl' id='hero-trust-grids'>
              <div className='flex items-center gap-2 text-xs text-white font-mono drop-shadow-md'>
                <ShieldCheck className='h-4.5 w-4.5 text-[#D4AF37]' />
                <span>100% Certified Natural</span>
              </div>

              <div className='flex items-center gap-2 text-xs text-white font-mono drop-shadow-md'>
                <Ship className='h-4.5 w-4.5 text-cyan-400' />
                <span>Global Customs & Freight</span>
              </div>

              <div className='flex items-center gap-2 text-xs text-white font-mono drop-shadow-md'>
                <Award className='h-4.5 w-4.5 text-purple-400' />
                <span>ISO 9001 Audited</span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                onClick={onExploreClick}
                className='group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-[#D4AF37] to-amber-400 hover:brightness-110 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-950 transition-all hover:shadow-lg hover:shadow-amber-500/20 active:scale-95'
              >
                Explore Categories
                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
              </button>

              <button
                onClick={onRequestQuoteClick}
                className='rounded-full border border-slate-300 bg-transparent hover:bg-white/10 hover:border-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all active:scale-95'
              >
                Request Wholesale Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
