import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Standard preformed wholesale crystal query
    const message = encodeURIComponent(
      'Hello Earth Treasure B2B Desk! I am reviewing your crystal catalog and would like to request premium wholesale price lists and export freight estimates.',
    );
    window.open(`https://wa.me/9023473345?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className='fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 through-teal-600 to-emerald-500 text-white shadow-2xl hover:scale-110 active:scale-95 duration-200 border-2 border-white/60 focus:outline-none group hover:shadow-[#D4AF37]/20'
      id='floating-whatsapp-btn'
      title='Instant WhatsApp Export Support Support Line'
    >
      {/* Decorative ambient pulsing ring behind the widget */}
      <span className='absolute inset-0 rounded-full bg-teal-500/40 animate-ping group-hover:animate-none' />

      <MessageSquare className='h-6 w-6 stroke-[2.25] text-white relative z-10' />

      {/* Dynamic hover bubble label */}
      <span className='absolute right-16 scale-0 group-hover:scale-100 bg-emerald-950 border border-[#D4AF37]/35 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl duration-250 opacity-0 group-hover:opacity-100'>
        WhatsApp Trade Hotline
      </span>
    </button>
  );
}
