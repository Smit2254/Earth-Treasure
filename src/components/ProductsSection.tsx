import React, { useState, useMemo } from 'react';
import { Product, Category } from '../types';
import {
  Filter,
  SlidersHorizontal,
  ShoppingBag,
  MessageSquare,
  Plus,
  Check,
  MapPin,
  Layers,
  RotateCcw,
  Volume2,
} from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (catId: string | null) => void;
  searchQuery: string;
  onAddToInquiry: (product: Product, quantity: number) => void;
  onQuickInquiry: (product: Product) => void;
  inquiryItemsCount: number;
  onOpenInquiryBag: () => void;
}

export default function ProductsSection({
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  onAddToInquiry,
  onQuickInquiry,
  inquiryItemsCount,
  onOpenInquiryBag,
}: ProductsSectionProps) {
  // Navigation states
  const [selectedCrystalType, setSelectedCrystalType] = useState<string>('All');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(2500);
  const [sortBy, setSortBy] = useState<string>('default');

  // Get all unique crystal types in dataset for filter option
  const crystalTypes = useMemo(() => {
    const types = new Set<string>();
    products.forEach((p) => {
      if (p.crystalType) types.add(p.crystalType);
    });
    return ['All', ...Array.from(types)];
  }, [products]);

  // States to animate added feedbacks
  const [addedProductIds, setAddedProductIds] = useState<Record<string, boolean>>({});

  const handleAddToInquiry = (product: Product) => {
    onAddToInquiry(product, product.moq);
    setAddedProductIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedProductIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  // Reset all filters easily
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedCrystalType('All');
    setSelectedAvailability('All');
    setMaxPrice(2500);
    setSortBy('default');
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category Filter
        if (selectedCategory && p.category !== selectedCategory) return false;
        // Search Filter
        if (
          searchQuery &&
          !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !p.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !p.crystalType.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return false;
        }
        // Crystal Type Filter
        if (selectedCrystalType !== 'All' && p.crystalType !== selectedCrystalType) return false;
        // Availability Filter
        if (selectedAvailability !== 'All' && p.availability !== selectedAvailability) return false;
        // Price Filter
        if (p.priceUSD > maxPrice) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
        if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
        if (sortBy === 'moq-asc') return a.moq - b.moq;
        return 0; // Default ordering
      });
  }, [products, selectedCategory, searchQuery, selectedCrystalType, selectedAvailability, maxPrice, sortBy]);

  return (
    <section className='py-12 bg-white text-slate-800' id='products-catalog-section'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Secondary floating-like top bar with catalog stats and Inquiry Bag trigger */}
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 mb-8 bg-emerald-950 text-white rounded-2xl border border-[#D4AF37]/35 shadow-xl'>
          <div className='space-y-1 text-left'>
            <span className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase'>
              Custom Wholesale Procurement Block
            </span>
            <h3 className='font-serif text-lg font-bold'>Earth Treasure Master Catalog</h3>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <button
              onClick={resetFilters}
              className='flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-900 text-xs text-[#D4AF37] font-semibold border border-[#D4AF37]/25 transition'
            >
              <RotateCcw className='h-3.5 w-3.5' />
              Reset All Filters
            </button>

            <button
              onClick={onOpenInquiryBag}
              className='relative flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-[#D4AF37] hover:brightness-110 text-emerald-950 font-bold text-xs px-4 py-2.5 transition-all shadow-md shadow-amber-500/10'
              id='view-inquiry-bag-btn'
            >
              <ShoppingBag className='h-4 w-4' />
              <span>Inquiry Cart ({inquiryItemsCount})</span>
              {inquiryItemsCount > 0 && (
                <span className='absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-bold text-white ring-2 ring-emerald-950'>
                  {inquiryItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Filters and Product Content Layout */}
        <div className='grid gap-8 lg:grid-cols-4'>
          {/* LEFT COLUMN: FILTER CONTROLS */}
          <aside className='lg:col-span-1 space-y-6' id='catalog-sidebar'>
            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-6 text-left'>
              <div className='flex items-center justify-between border-b border-slate-200 pb-3'>
                <div className='flex items-center gap-2'>
                  <Filter className='h-4 w-4 text-emerald-900' />
                  <span className='font-serif text-base font-bold text-emerald-950'>Wholesale Filters</span>
                </div>
                <SlidersHorizontal className='h-4 w-4 text-slate-400' />
              </div>

              {/* Category Filter Group */}
              <div className='space-y-2'>
                <span className='text-xs font-mono font-bold uppercase text-emerald-900 tracking-wider'>
                  Crystal Categories
                </span>
                <div className='space-y-1'>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition ${
                      selectedCategory === null ? 'bg-emerald-900 text-white' : 'text-slate-600 hover:bg-slate-200/60'
                    }`}
                  >
                    All Categories ({categories.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition ${
                        selectedCategory === cat.id
                          ? 'bg-emerald-900 text-white'
                          : 'text-slate-600 hover:bg-slate-200/50'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Crystal Type Filter Group */}
              <div className='space-y-2'>
                <span className='text-xs font-mono font-bold uppercase text-emerald-900 tracking-wider'>
                  Crystal Type
                </span>
                <select
                  value={selectedCrystalType}
                  onChange={(e) => setSelectedCrystalType(e.target.value)}
                  className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-emerald-800'
                >
                  {crystalTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Availability Filter Group */}
              <div className='space-y-2'>
                <span className='text-xs font-mono font-bold uppercase text-emerald-900 tracking-wider'>
                  Manufacturing Availability
                </span>
                <div className='flex flex-col gap-1.5'>
                  {['All', 'In Stock', 'Made to Order', 'Limited Capacity'].map((status) => (
                    <label
                      key={status}
                      className='flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-600'
                    >
                      <input
                        type='radio'
                        name='availability'
                        checked={selectedAvailability === status}
                        onChange={() => setSelectedAvailability(status)}
                        className='rounded border-slate-300 text-emerald-900 focus:ring-emerald-800'
                      />
                      <span>{status === 'All' ? 'All Formats' : status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter (USD per Unit) */}
              <div className='space-y-2'>
                <div className='flex justify-between items-center text-xs font-mono font-bold text-emerald-900 uppercase'>
                  <span>Max Price Unit:</span>
                  <span className='text-emerald-700'>${maxPrice} USD</span>
                </div>
                <input
                  type='range'
                  min='5'
                  max='2500'
                  step='5'
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className='w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-900'
                />
                <div className='flex justify-between text-[10px] font-mono text-slate-400'>
                  <span>$5</span>
                  <span>$2500</span>
                </div>
              </div>

              {/* Sort filter */}
              <div className='space-y-2 border-t border-slate-200 pt-4'>
                <span className='text-xs font-mono font-bold uppercase text-emerald-900 tracking-wider'>
                  Sort Listing
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 outline-none'
                >
                  <option value='default'>Default Order</option>
                  <option value='price-asc'>Price: Low to High</option>
                  <option value='price-desc'>Price: High to Low</option>
                  <option value='moq-asc'>Wholesale MOQ: Low to High</option>
                </select>
              </div>

              {/* Support Hotline Widget */}
              <div className='rounded-xl bg-emerald-950 p-4 border border-[#D4AF37]/30 text-white space-y-2'>
                <p className='text-[10px] font-mono text-[#D4AF37] tracking-wider uppercase'>Procurement Lead</p>
                <p className='text-xs text-slate-200'>Got an architectural or high-volume project specification?</p>
                <div className='text-xs font-mono bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded p-1.5 text-center text-[#D4AF37]'>
                  smitbhavsar23@gmail.com
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: MAIN PRODUCTS LISTING */}
          <main className='lg:col-span-3 space-y-6'>
            {/* Filter tags header info */}
            <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl'>
              <div className='text-left'>
                <p className='text-xs text-slate-500'>
                  Showing <span className='font-semibold text-slate-800'>{filteredProducts.length}</span> luxury export
                  items
                </p>
                {selectedCategory && (
                  <p className='text-xs font-mono text-emerald-800 mt-0.5'>
                    Category: {categories.find((c) => c.id === selectedCategory)?.name}
                  </p>
                )}
              </div>
              <div className='text-xs text-slate-400 font-serif italic'>
                Free export trade counsel on custom bulk weights
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className='text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50'>
                <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-3'>
                  <SlidersHorizontal className='h-6 w-6' />
                </div>
                <h3 className='font-serif text-lg font-bold text-slate-800'>No Matching Crystals Found</h3>
                <p className='text-xs text-slate-500 mt-1 max-w-sm mx-auto'>
                  Broaden your filters or adjust the price slider to view Earth Treasure’s extensive raw and finished
                  gemstone catalogue.
                </p>
                <button
                  onClick={resetFilters}
                  className='mt-4 px-4 py-2 bg-emerald-950 text-white rounded-lg text-xs font-semibold hover:bg-emerald-900 transition'
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3' id='products-catalog-grid'>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className='group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition duration-300 hover:border-[#D4AF37]/45 hover:shadow-lg'
                    id={`product-card-${product.id}`}
                  >
                    {/* Badge Indicator overlays */}
                    <div className='absolute top-3 left-3 z-10 flex flex-col gap-1'>
                      <span
                        className={`rounded-md px-2 py-1 text-[9px] font-bold text-white tracking-widest uppercase ${
                          product.availability === 'In Stock'
                            ? 'bg-emerald-900'
                            : product.availability === 'Made to Order'
                              ? 'bg-amber-600'
                              : 'bg-purple-800'
                        }`}
                      >
                        {product.availability}
                      </span>
                      {product.purity && (
                        <span className='rounded-md bg-emerald-950/80 backdrop-blur-sm border border-[#D4AF37]/30 px-2 py-0.5 text-[8px] font-mono text-[#D4AF37]'>
                          {product.purity}
                        </span>
                      )}
                    </div>

                    {/* Image Area */}
                    <div className='relative aspect-square overflow-hidden bg-slate-50 border-b border-slate-100'>
                      <img
                        src={product.image}
                        alt={product.name}
                        className='h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105'
                        referrerPolicy='no-referrer'
                      />

                      {/* Hover action Quick Add */}
                      <button
                        onClick={() => handleAddToInquiry(product)}
                        className='absolute bottom-3 right-3 rounded-full bg-emerald-950/90 text-[#D4AF37] p-2.5 shadow-lg border border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 duration-300 translate-y-2 group-hover:translate-y-0 text-xs font-bold hover:bg-emerald-900 transition-all flex items-center justify-center'
                        title='Add to wholesale inquiry list'
                      >
                        {addedProductIds[product.id] ? (
                          <Check className='h-4 w-4 text-cyan-400 stroke-[3]' />
                        ) : (
                          <Plus className='h-4 w-4 text-[#D4AF37] stroke-[3]' />
                        )}
                      </button>
                    </div>

                    {/* Product Specs Description Area */}
                    <div className='p-4 space-y-2 flex-grow text-left'>
                      <p className='text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1'>
                        <MapPin className='h-3 w-3 text-cyan-500' />
                        <span>Origin: {product.origin}</span>
                      </p>

                      <h4 className='font-serif text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-950'>
                        {product.name}
                      </h4>
                      <p className='text-xs text-slate-500 line-clamp-3 leading-relaxed'>{product.description}</p>

                      {/* Technical Specs Detail Rows */}
                      <div className='grid grid-cols-2 gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100 text-[10px] font-mono mt-2'>
                        <div>
                          <p className='text-slate-400'>Spec / Size</p>
                          <p className='text-slate-700 font-bold line-clamp-1'>{product.size}</p>
                        </div>
                        <div>
                          <p className='text-slate-400'>Wholesale MOQ</p>
                          <p className='text-slate-700 font-bold'>{product.moq} units</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Section with Price Notice block */}
                    <div className='border-t border-slate-100 p-4 space-y-3 bg-slate-50/50'>
                      {/* Price Block */}
                      <div className='flex items-baseline justify-between'>
                        <span className='text-[10px] font-mono text-slate-400 uppercase'>Unit Price:</span>
                        <div className='text-right'>
                          <span className='text-sm font-bold text-emerald-900 font-serif'>
                            ${product.priceUSD.toFixed(2)}
                          </span>
                          <span className='text-[10px] text-slate-500 font-mono'> / FOB USD</span>
                        </div>
                      </div>

                      {/* Explicit required export legal notice directly inside the product card footer */}
                      <div className='text-[8px] leading-tight text-slate-400 font-sans border-t border-slate-200/50 pt-2.5 italic'>
                        Export, shipping, customs duties, taxes, and handling charges are additional and will be quoted
                        separately based on destination country and order quantity.
                      </div>

                      {/* Call Action Row */}
                      <div className='grid grid-cols-2 gap-2'>
                        <button
                          onClick={() => handleAddToInquiry(product)}
                          className={`rounded-lg py-2 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 ${
                            addedProductIds[product.id]
                              ? 'bg-cyan-900 text-white border border-cyan-700'
                              : 'bg-emerald-950 text-white hover:bg-emerald-900'
                          }`}
                        >
                          {addedProductIds[product.id] ? (
                            <>
                              <Check className='h-3 w-3 text-cyan-400' />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className='h-3 w-3' />
                              <span>Custom Quote</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onQuickInquiry(product)}
                          className='rounded-lg border border-[#D4AF37]/50 bg-white hover:bg-emerald-50 text-emerald-950 hover:border-[#D4AF37] py-2 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1'
                        >
                          <MessageSquare className='h-3 w-3 text-[#D4AF37]' />
                          <span>Direct Query</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
