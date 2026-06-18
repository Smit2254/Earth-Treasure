import React from 'react';
import { Category } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryShowcaseProps {
  categories: Category[];
  onSelectCategory: (catId: string) => void;
}

export default function CategoryShowcase({ categories, onSelectCategory }: CategoryShowcaseProps) {
  return (
    <section className='py-16 bg-gradient-to-b from-emerald-950 to-emerald-900/50' id='categories-section'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Title */}
        <div className='text-center max-w-3xl mx-auto space-y-4 mb-12'>
          <p className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase'>Curated Global Export Lines</p>
          <h2 className='font-serif text-3xl md:text-4xl font-bold text-white tracking-tight'>
            Worldwide Crystal Products Curation
          </h2>
          <div className='h-[2px] w-16 bg-[#D4AF37] mx-auto opacity-80' />
          <p className='text-sm text-slate-300'>
            Select a raw mining category or polished gemstone classification below. Each batch is curated to secure
            export certification standards, complete with custom sizing, sorting, and wholesale pricing.
          </p>
        </div>

        {/* Dynamic Responsive Curation Grid */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3' id='categories-grid'>
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className='group relative overflow-hidden rounded-2xl border border-emerald-800/60 bg-emerald-950/40 p-1.5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[#D4AF37]/5 cursor-pointer'
              id={`cat-card-${category.id}`}
            >
              {/* Image box */}
              <div className='relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-emerald-900'>
                <img
                  src={category.image}
                  alt={category.name}
                  className='h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105'
                  referrerPolicy='no-referrer'
                />

                {/* Dark luxury gradient overlays */}
                <div className='absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent opacity-80' />

                {/* Top decorative gold corner */}
                <div className='absolute top-3 right-3 bg-emerald-950/80 border border-[#D4AF37]/30 text-[#D4AF37] p-2 rounded-lg transition-all group-hover:bg-[#D4AF37] group-hover:text-emerald-950 shadow-md'>
                  <ArrowUpRight className='h-4 w-4' />
                </div>
              </div>

              {/* Text content details */}
              <div className='p-4 space-y-2'>
                <h3 className='font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors'>
                  {category.name}
                </h3>
                <p className='text-xs text-slate-300 line-clamp-2 md:line-clamp-3 leading-relaxed'>
                  {category.description}
                </p>

                {/* Bottom line trigger */}
                <div className='pt-2 flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] border-t border-emerald-900/40 mt-3'>
                  <span>View Products Catalog</span>
                  <span className='text-slate-400 group-hover:translate-x-1.5 transition-transform duration-300'>
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
