import React from 'react';
import { Gem, ShieldAlert, Globe, Ship, Mail, Phone, Calendar } from 'lucide-react';
import { Category } from '../types';
import { FaInstagram } from 'react-icons/fa';

interface FooterProps {
  categories: Category[];
  setActiveTab: (tab: string) => void;
  setSelectedCategory: (catId: string | null) => void;
}

export default function Footer({ categories, setActiveTab, setSelectedCategory }: FooterProps) {
  const handleCategoryNav = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab: string) => {
    setSelectedCategory(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-emerald-950 border-t-2 border-[#D4AF37]/35 text-slate-300 font-sans' id='footer-navigation'>
      {/* 1. SEO & Trust Bar */}
      <div className='bg-emerald-900/40 border-b border-[#D4AF37]/10 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl grid gap-6 md:grid-cols-3 text-left'>
          <div className='flex gap-3'>
            <Globe className='h-6 w-6 text-[#D4AF37] shrink-0' />
            <div>
              <h4 className='text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]'>
                Global Exporter Compliance
              </h4>
              <p className='text-[11px] text-slate-300 mt-1 leading-normal'>
                Strict adherence to international gemstone import standards and customs declarations across NAFTA,
                European Union, UAE, and APAC regions.
              </p>
            </div>
          </div>

          <div className='flex gap-3'>
            <Ship className='h-6 w-6 text-cyan-400 shrink-0' />
            <div>
              <h4 className='text-xs font-mono font-bold uppercase tracking-wider text-cyan-400'>
                ISPM-15 Secured Packing
              </h4>
              <p className='text-[11px] text-slate-300 mt-1 leading-normal'>
                Multiple layer bubble-stabilization, and fumigated solid timber pallet boxing surviving severe
                multi-ocean container transfers.
              </p>
            </div>
          </div>

          <div className='flex gap-3'>
            <ShieldAlert className='h-6 w-6 text-purple-400 shrink-0' />
            <div>
              <h4 className='text-xs font-mono font-bold uppercase tracking-wider text-purple-400'>
                Verifiable Lapidary Assay
              </h4>
              <p className='text-[11px] text-slate-300 mt-1 leading-normal'>
                Genuine certified natural crystals with full geological mineral authentication, certified testing
                laboratories, and custom sorting reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Primary Navigation Content Grid */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left'>
        {/* Brand block */}
        <div className='space-y-4'>
          <div className='flex items-center gap-2.5'>
            <Gem className='h-6 w-6 text-[#D4AF37]' />
            <span className='font-serif text-lg font-bold tracking-widest text-[#D4AF37]'>EARTH TREASURE</span>
          </div>
          <p className='text-xs text-slate-300 leading-relaxed'>
            Leading B2B crystal lapidary manufacturer and consolidated worldwide mineral exporter. We supply premium
            custom cutting and raw gemstone orders direct to wholesalers.
          </p>
          <p className='text-[10.5px] text-slate-400 italic'>Established 1998 • Registered Export Board.</p>
        </div>

        {/* Directory Links */}
        <div className='space-y-4'>
          <h4 className='font-serif text-sm font-bold text-white tracking-widest uppercase'>Company Hub</h4>
          <ul className='space-y-2 text-xs'>
            <li>
              <button onClick={() => handleNavClick('home')} className='hover:text-[#D4AF37] transition'>
                Home (Landing Console)
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className='hover:text-[#D4AF37] transition'>
                Full Collection Catalog
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className='hover:text-[#D4AF37] transition'>
                Manufacturing story
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className='hover:text-[#D4AF37] transition'>
                Contact &amp; Custom Quote
              </button>
            </li>
          </ul>
        </div>

        {/* Product Categories links */}
        <div className='space-y-4'>
          <h4 className='font-serif text-sm font-bold text-white tracking-widest uppercase'>Export Collections</h4>
          <ul className='space-y-2 text-xs grid grid-cols-1 gap-1'>
            {categories.slice(0, 5).map((cat) => (
              <li key={cat.id}>
                <button onClick={() => handleCategoryNav(cat.id)} className='hover:text-[#D4AF37] text-left transition'>
                  {cat.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setActiveTab('products');
                }}
                className='hover:text-[#D4AF37] text-[#D4AF37] text-left transition font-semibold'
              >
                View All Categories...
              </button>
            </li>
          </ul>
        </div>

        {/* Corporate details and SEO tag words */}
        <div className='space-y-4'>
          <h4 className='font-serif text-sm font-bold text-white tracking-widest uppercase'>Verified B2B Hotlinks</h4>
          <div className='space-y-2.5 text-xs text-slate-300'>
            <p className='flex items-center gap-1.5'>
              <Mail className='h-3.5 w-3.5 text-[#D4AF37]' />
              <a href='mailto:smitbhavsar23@gmail.com'>smitbhavsar23@gmail.com</a>
            </p>
            <p className='flex items-center gap-1.5'>
              <Phone className='h-3.5 w-3.5 text-cyan-400' />
              <a href='tel:+919023473345'>B2B Desk: +91 9023473345</a>
            </p>
            <p className='flex items-center gap-1.5'>
              <FaInstagram className='h-4 w-4' />
              <a
                href='https://www.instagram.com/earthtreasure_export?igsh=dWVpanMwbXEycnB0'
                target='_blank'
                rel='noopener noreferrer'
              >
                earthtreasure_export
              </a>
            </p>
          </div>
          {/* SEO keyword cloud requested by user */}
          <div className='pt-2'>
            <p className='text-[10px] font-mono text-slate-400 leading-normal uppercase'>
              Crystal Manufacturer • Crystal Exporter • Wholesale Crystals • Gemstone Supplier • Healing Stones
              Manufacturer • Crystal Wholesale Supplier
            </p>
          </div>
        </div>
      </div>

      {/* 3. STRICTLY SPECIFIED CUSTOMS / SHIPPING CHARGES LEGAL NOTIFICATION */}
      <div className='bg-emerald-950 border-t border-emerald-900 px-4 sm:px-6 lg:px-8 py-6 text-center'>
        <div className='mx-auto max-w-5xl space-y-3'>
          <div className='inline-flex items-center gap-2 rounded bg-amber-500/10 border border-[#D4AF37]/30 px-3 py-1 text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider font-mono'>
            CRITICAL EXPORT LOGISTICS DISCLAIMER
          </div>
          <p className='text-[10px] text-slate-400 max-w-4xl mx-auto leading-relaxed'>
            Important Notice: Prices indicated across our digital mineral inventory list are wholesale product prices
            (FOB) only. Export fumigation certifications (ISPM-15), sea or air freight transport, customs clearance,
            import tariffs, regional goods and services taxes, local duties, and terminal handling charges are billed
            separately and calculated based on order weights and custom destination countries. Contact our export desk
            for guaranteed calculations.
          </p>
        </div>
      </div>

      {/* 4. Licensing bar */}
      <div
        className='bg-emerald-950 py-4 px-4 sm:px-6 lg:px-8 border-t border-emerald-900 text-center text-xs text-slate-500'
        id='licensing-credits-bar'
      >
        <div className='mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-2'>
          <p>© 2026 Earth Treasure Export Board. All rights reserved.</p>
          <p className='font-mono text-[10px] tracking-widest text-[#D4AF37]/60'>ISO 9001:2015 AUDITED FACTORY</p>
        </div>
      </div>
    </footer>
  );
}
