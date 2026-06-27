import React, { useState } from 'react';
import { Gem, Menu, X, Search, Globe, ChevronDown } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  categories: Category[];
  setSelectedCategory: (catId: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  categories,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCatDropdown, setShowCatDropdown] = useState(false);

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('products');
    setShowCatDropdown(false);
    setMobileMenuOpen(false);
  };

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (tab !== 'products') {
      setSelectedCategory(null);
    }
  };

  return (
    <header className='sticky top-0 z-40 w-full border-b border-[#D4AF37]/20 bg-emerald-950/90 backdrop-blur-md'>
      {/* Top Banner: Global Business Credibility */}
      <div className='bg-emerald-900/60 py-1.5 px-4 text-center text-[10px] md:text-xs font-mono tracking-wider text-[#D4AF37] border-b border-[#D4AF37]/10 flex items-center justify-between mx-auto max-w-7xl'>
        <div className='flex items-center gap-1.5'>
          <Globe className='h-3 w-3 animate-spin-slow text-[#D4AF37]' />
          <span>GLOBAL EXPORTER • MULTI-REGIONAL CUSTOMS ACCREDITED</span>
        </div>
        <div className='hidden sm:flex items-center gap-4'>
          <span>REGULATION COMPLIANT</span>
          <span>EST. 1998</span>
        </div>
      </div>

      <div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Brand Identity / Elegant Logo Representation */}
        <div onClick={() => handleNavClick('home')} className='flex cursor-pointer items-center'>
          <img
            src='/images/Logo.png'
            alt='Earth Treasure'
            className='h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]'
          />
          <div>
            <h1 className='font-serif text-xl font-semibold tracking-[0.12em] text-[#D4AF37]'>EARTH TREASURE</h1>
            <p className='text-[10px] uppercase tracking-[0.25em] text-slate-400'>Premium Crystals</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide'>
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors hover:text-[#D4AF37] text-left relative py-2 ${
              activeTab === 'home' ? 'text-[#D4AF37]' : 'text-slate-200'
            }`}
            id='nav-home'
          >
            Home
            {activeTab === 'home' && (
              <span className='absolute bottom-0 left-0 h-[2px] w-full bg-[#D4AF37] rounded-full animate-fade-in' />
            )}
          </button>

          {/* Categories Dropdown triggers listing on click */}
          <div className='relative'>
            <button
              onClick={() => {
                setShowCatDropdown(!showCatDropdown);
              }}
              onMouseEnter={() => setShowCatDropdown(true)}
              className={`flex items-center gap-1 transition-colors hover:text-[#D4AF37] py-2 ${
                activeTab === 'products' ? 'text-[#D4AF37]' : 'text-slate-200'
              }`}
              id='nav-products'
            >
              Catalog
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${showCatDropdown ? 'rotate-180' : ''}`}
              />
              {activeTab === 'products' && (
                <span className='absolute bottom-0 left-0 h-[2px] w-full bg-[#D4AF37] rounded-full' />
              )}
            </button>

            {showCatDropdown && (
              <div
                className='absolute left-0 mt-1 w-64 rounded-xl border border-[#D4AF37]/30 bg-emerald-950 p-2 shadow-2xl ring-1 ring-black/5 animate-slide-up'
                onMouseLeave={() => setShowCatDropdown(false)}
              >
                <div className='py-1'>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setActiveTab('products');
                      setShowCatDropdown(false);
                    }}
                    className='flex w-full items-center px-4 py-2 text-xs font-mono tracking-wider text-[#D4AF37] uppercase hover:bg-emerald-900/40 rounded-lg text-left'
                  >
                    View Full Catalog
                  </button>
                  <div className='my-1 border-b border-emerald-900/60' />
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className='block w-full rounded-lg px-4 py-2 text-left text-xs text-slate-300 hover:bg-emerald-900/60 hover:text-white transition-all'
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors hover:text-[#D4AF37] relative py-2 ${
              activeTab === 'about' ? 'text-[#D4AF37]' : 'text-slate-200'
            }`}
            id='nav-about'
          >
            About Us
            {activeTab === 'about' && (
              <span className='absolute bottom-0 left-0 h-[2px] w-full bg-[#D4AF37] rounded-full' />
            )}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors hover:text-[#D4AF37] relative py-2 ${
              activeTab === 'contact' ? 'text-[#D4AF37]' : 'text-slate-200'
            }`}
            id='nav-contact'
          >
            Contact Us
            {activeTab === 'contact' && (
              <span className='absolute bottom-0 left-0 h-[2px] w-full bg-[#D4AF37] rounded-full' />
            )}
          </button>
        </nav>

        {/* Global Catalog Search Tool */}
        <div className='hidden lg:flex items-center gap-3 relative max-w-xs w-full'>
          <div className='relative w-full'>
            <input
              type='text'
              placeholder='Search wholesale crystal...'
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== 'products') {
                  setActiveTab('products');
                }
              }}
              className='w-full rounded-full border border-[#D4AF37]/20 bg-emerald-900/30 py-2 pl-9 pr-4 text-xs tracking-wide text-white placeholder-emerald-100/50 outline-none focus:border-[#D4AF37]/60 focus:bg-emerald-900/50 focus:ring-1 focus:ring-[#D4AF37]/50'
            />
            <Search className='absolute left-3 top-2.5 h-4 w-4 text-[#D4AF37]/80' />
          </div>
        </div>

        {/* Request Call CTA Button */}
        <div className='hidden md:flex items-center gap-4'>
          <button
            onClick={() => handleNavClick('contact')}
            className='rounded-full border border-[#D4AF37] bg-gradient-to-r from-amber-500/10 to-amber-600/15 hover:from-[#D4AF37] hover:to-amber-500 hover:text-emerald-950 hover:scale-105 active:scale-95 px-5 py-2.5 text-xs font-semibold tracking-wider text-[#D4AF37] transition-all'
            id='header-cta'
          >
            Get B2B Quote
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className='flex items-center gap-3 md:hidden'>
          <button
            onClick={() => handleNavClick('contact')}
            className='rounded-full border border-[#D4AF37]/50 bg-emerald-900/40 px-3 py-1.5 text-[10px] font-mono uppercase text-[#D4AF37] hover:bg-[#D4AF37] hover:text-emerald-950 transition-all font-bold'
          >
            Quote
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='rounded-lg p-2 text-slate-200 hover:bg-emerald-900/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50'
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? <X className='h-6 w-6 text-[#D4AF37]' /> : <Menu className='h-6 w-6 text-[#D4AF37]' />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className='md:hidden border-t border-[#D4AF37]/15 bg-emerald-950 divide-y divide-emerald-900/40 animate-slide-down'>
          <div className='px-4 py-3'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search collection catalog...'
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'products') {
                    setActiveTab('products');
                  }
                }}
                className='w-full rounded-lg border border-[#D4AF37]/20 bg-emerald-900/40 py-2 pl-9 pr-4 text-xs text-white placeholder-emerald-100/40 outline-none'
              />
              <Search className='absolute left-3 top-2.5 h-4 w-4 text-[#D4AF37]/70' />
            </div>
          </div>

          <div className='space-y-1 px-3 py-3'>
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium ${
                activeTab === 'home' ? 'bg-emerald-900/80 text-[#D4AF37]' : 'text-slate-300 hover:bg-emerald-900/20'
              }`}
            >
              Home
            </button>
            <div className='rounded-lg bg-emerald-900/10 px-2 py-1.5 space-y-1'>
              <p className='px-2 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase'>
                Gemstone Collections
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setActiveTab('products');
                  setMobileMenuOpen(false);
                }}
                className='block w-full rounded-lg px-2 py-1 text-left text-[13px] text-slate-300 hover:bg-emerald-900/40 font-semibold'
              >
                All Products (Catalog)
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className='block w-full rounded-lg px-4 py-1 text-left text-xs text-slate-400 hover:bg-emerald-900/30'
                >
                  ✓ {cat.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium ${
                activeTab === 'about' ? 'bg-emerald-900/80 text-[#D4AF37]' : 'text-slate-300 hover:bg-emerald-900/20'
              }`}
            >
              Manufacturing Story
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium ${
                activeTab === 'contact' ? 'bg-emerald-900/80 text-[#D4AF37]' : 'text-slate-300 hover:bg-emerald-900/20'
              }`}
            >
              Contact & Quote Request
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
