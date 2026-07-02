import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, Globe, CheckCircle2, Trophy } from 'lucide-react';
import { Category, InquiryFormData } from '../types';

interface ContactUsProps {
  categories: Category[];
}

export default function ContactUs({ categories }: ContactUsProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    categoryInterested: 'raw-crystals',
    quantityRequirement: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent, type: 'general' | 'pricing') => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.companyName) {
      alert('Please fill in the required corporate fields.');
      return;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        categoryInterested: 'raw-crystals',
        quantityRequirement: '',
        message: '',
      });
      alert(
        `Wholesale ${type === 'pricing' ? 'Pricing RFQ' : 'Trade Inquiry'} registered! Our export experts will process your country tariff requirements and dispatch our PDF catalogue and quotation sheets shortly.`,
      );
    }, 1500);
  };

  return (
    <section className='py-16 bg-white text-slate-800' id='contact-us-page'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Page Head */}
        <div className='text-center max-w-3xl mx-auto space-y-4 mb-16'>
          <p className='text-xs font-mono tracking-widest text-emerald-900 uppercase'>Start Export Collaboration</p>
          <h2 className='font-serif text-3xl md:text-5.5xl font-bold text-emerald-950 tracking-tight'>
            Connect With Our Export Desk
          </h2>
          <div className='h-[2px] w-16 bg-[#D4AF37] mx-auto' />
          <p className='text-sm text-slate-600'>
            Based in major international trading hubs, Earth Treasure partners with clients across 48+ nations. Fill out
            our formal quotation request form, or contact our WhatsApp trade hotline to initiate custom cutting.
          </p>
        </div>

        <div className='grid gap-12 lg:grid-cols-12 lg:items-start'>
          {/* LEFT 5 COLS: Contact Information & Mock map */}
          <div className='lg:col-span-5 space-y-8 text-left' id='contact-details-panel'>
            <div className='rounded-2xl bg-emerald-950 text-white p-6 sm:p-8 space-y-8 border border-[#D4AF37]/30 shadow-xl relative overflow-hidden'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none' />

              <div className='space-y-2'>
                <h3 className='font-serif text-xl font-bold'>Earth Treasure HQ</h3>
                <p className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase'>
                  Registered License: ET-78142-EXP
                </p>
              </div>

              {/* Info Rows */}
              <div className='space-y-6' id='contact-info-rows'>
                <div className='flex gap-4'>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-900/60 border border-emerald-800 text-[#D4AF37]'>
                    <MapPin className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase'>
                      Manufacturing Workshop
                    </h4>
                    <p className='text-sm text-slate-200 mt-1'>
                      Flat No.001, Kadm E Rasool, Jahangir Pur <br />
                      Khambhat, Anand, Gujarat, Pin Code-388620.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-900/60 border border-emerald-800 text-[#D4AF37]'>
                    <Phone className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase'>Registered Hotlines</h4>
                    <p className='text-sm text-slate-200 mt-1 flex flex-col'>
                      <span>WhatsApp B2B: +91 9023473345</span>
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-900/60 border border-emerald-800 text-[#D4AF37]'>
                    <Mail className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase'>Export Email Desk</h4>
                    <p className='text-sm text-slate-200 mt-1 font-mono'>smitbhavsar23@gmail.com</p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-900/60 border border-emerald-800 text-[#D4AF37]'>
                    <Clock className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='text-xs font-mono tracking-widest text-[#D4AF37] uppercase'>Business Hours</h4>
                    <p className='text-sm text-slate-200 mt-1'>
                      Monday - Sunday: 08:00 - 21:00 (EST / GMT-5) <br />
                      <span className='text-cyan-400 font-mono text-xs'>Online WhatsApp: 24/7 client dispatch</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Trade compliance metrics */}
              <div className='border-t border-emerald-900 pt-6 grid grid-cols-2 gap-4 text-center'>
                <div className='space-y-1'>
                  <p className='font-serif text-lg font-bold text-teal-400'>48+</p>
                  <p className='text-[10px] text-slate-300 font-mono uppercase tracking-widest'>Countries Supplied</p>
                </div>
                <div className='space-y-1'>
                  <p className='font-serif text-lg font-bold text-[#D4AF37]'>10M+</p>
                  <p className='text-[10px] text-slate-300 font-mono uppercase tracking-widest'>Crystals Exported</p>
                </div>
              </div>
            </div>

            {/* Custom high-contrast satellite/topological mock map */}
            <div className='relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-emerald-950 shadow-2xl group'>
              {/* Gold gradient border glow */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-emerald-700/20 pointer-events-none' />

              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4382.912037291475!2d72.6213181!3d22.3206312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f07a2646c73e5%3A0x865b43aeaa9669df!2sNazima%20Agate!5e1!3m2!1sen!2sin!4v1782819863934!5m2!1sen!2sin'
                className='w-full h-[420px] border-0 transition-transform duration-500 group-hover:scale-[1.02]'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                allowFullScreen
                title='Earth Treasure Manufacturing Workshop'
              />

              {/* Bottom info overlay */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-950 via-emerald-950/90 to-transparent p-5'>
                <p className='text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-mono'>Manufacturing Location</p>

                <h4 className='text-white font-serif text-lg font-semibold mt-1'>Earth Treasure Workshop</h4>

                <p className='text-slate-300 text-sm mt-1'>Khambhat, Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* RIGHT 7 COLS: Formal Quotation Form */}
          <div
            className='lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl text-left shadow-md'
            id='contact-form-panel'
          >
            <div className='space-y-4 mb-6 border-b border-slate-200 pb-4'>
              <h3 className='font-serif text-xl font-bold text-emerald-950'>Formal B2B Inquiry desk</h3>
              <p className='text-xs text-slate-600'>
                Are you placing a high-volume request or seeking architectural design components? Fill in our registered
                customs validation form below and our regional leads will make contact immediately.
              </p>
            </div>

            {formSubmitted ? (
              <div className='text-center py-16 space-y-4'>
                <div className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 mb-2 border border-emerald-300'>
                  <CheckCircle2 className='h-6 w-6' />
                </div>
                <h4 className='font-serif text-lg font-bold text-emerald-950'>Inquiry Authenticated</h4>
                <p className='text-xs text-slate-600 max-w-sm mx-auto'>
                  Your corporate details and crystal requirements have been queued onto our trading desk directory
                  catalog successfully.
                </p>
              </div>
            ) : (
              <form className='space-y-4'>
                {/* Form fields */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='space-y-1.5'>
                    <label className='text-xs font-mono font-bold uppercase text-emerald-900'>
                      Full Name <span className='text-amber-600'>*</span>
                    </label>
                    <input
                      type='text'
                      name='fullName'
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder='e.g. Elena Rostova'
                      className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 placeholder-slate-400 outline-none focus:border-[#D4AF37]'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-xs font-mono font-bold uppercase text-emerald-900'>
                      Company / Corporation <span className='text-amber-600'>*</span>
                    </label>
                    <input
                      type='text'
                      name='companyName'
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder='e.g. Aurum Spas GmbH'
                      className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 placeholder-slate-400 outline-none focus:border-[#D4AF37]'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='space-y-1.5'>
                    <label className='text-xs font-mono font-bold uppercase text-emerald-900'>
                      Country <span className='text-amber-600'>*</span>
                    </label>
                    <input
                      type='text'
                      name='country'
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder='e.g. Germany'
                      className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 placeholder-slate-400 outline-none focus:border-[#D4AF37]'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-xs font-mono font-bold uppercase text-emerald-900'>
                      WhatsApp / Corporate Phone <span className='text-amber-600'>*</span>
                    </label>
                    <input
                      type='text'
                      name='phone'
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder='e.g. +49 89 231121'
                      className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 placeholder-slate-400 outline-none focus:border-[#D4AF37]'
                    />
                  </div>
                </div>

                <div className='space-y-1.5'>
                  <label className='text-xs font-mono font-bold uppercase text-emerald-900'>
                    Corporate Email Address <span className='text-amber-600'>*</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='e.g. buyer@aurum-wellness.de'
                    className='w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs text-slate-700 outline-none'
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='space-y-1.5'>
                    <label className='text-xs font-mono font-bold uppercase text-emerald-900'>
                      Product Range of Interest
                    </label>
                    <select
                      name='categoryInterested'
                      value={formData.categoryInterested}
                      onChange={handleInputChange}
                      className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-700 outline-none'
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-xs font-mono font-bold uppercase text-emerald-900'>
                      Estimate Shipment Qty
                    </label>
                    <input
                      type='text'
                      name='quantityRequirement'
                      value={formData.quantityRequirement}
                      onChange={handleInputChange}
                      placeholder='e.g. 500 sets / 5 Tonnes'
                      className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 placeholder-slate-400 outline-none focus:border-[#D4AF37]'
                    />
                  </div>
                </div>

                <div className='space-y-1.5'>
                  <label className='text-xs font-mono font-bold uppercase text-emerald-900'>
                    Specific Port Requirements / Messages
                  </label>
                  <textarea
                    name='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder='Specify requested custom sizing, custom cardboard box branding, double-strength pallet boxing, customs declarations parameters...'
                    className='w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 placeholder-slate-400 outline-none'
                  />
                </div>

                {/* Important notice reminder directly on form footer */}
                <div className='rounded-lg bg-amber-500/10 border border-[#D4AF37]/35 p-4 text-xs text-amber-900 flex items-start gap-2.5'>
                  <ShieldCheck className='h-5 w-5 text-emerald-900 shrink-0 mt-0.5' />
                  <p className='leading-relaxed'>
                    <strong>Export Price Notice:</strong> Listed product catalog pricing represents FOB prices of
                    materials only. Customs validation, wood fumigation (ISPM-15), port-handling charges, and marine
                    cargo freight are extra and calculate dynamically.
                  </p>
                </div>

                {/* Actions row */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2'>
                  <button
                    type='button'
                    onClick={(e) => handleFormSubmit(e, 'general')}
                    className='rounded-lg bg-emerald-950 hover:bg-emerald-900 font-bold uppercase tracking-wider text-white text-xs px-5 py-3.5 transition active:scale-95 text-center'
                  >
                    Send Trade Inquiry
                  </button>
                  <button
                    type='button'
                    onClick={(e) => handleFormSubmit(e, 'pricing')}
                    className='rounded-lg border border-[#D4AF37] bg-gradient-to-r from-amber-500/10 to-amber-500/20 hover:from-[#D4AF37] hover:to-amber-500 hover:text-emerald-950 font-bold uppercase tracking-wider text-[#D4AF37] text-xs px-5 py-3.5 transition active:scale-95 text-center'
                  >
                    Request Wholesale Pricing
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
