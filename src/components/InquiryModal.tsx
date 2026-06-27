import React, { useState } from 'react';
import { SelectedInquiryItem, InquiryFormData, Product } from '../types';
import { X, Trash2, Mail, MessageSquare, AlertCircle, Sparkles, Building, Globe, Check } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: SelectedInquiryItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, qty: number) => void;
  directInquiryProduct: Product | null;
  onClearInquiryBag: () => void;
}

export default function InquiryModal({
  isOpen,
  onClose,
  selectedItems,
  onRemoveItem,
  onUpdateQuantity,
  directInquiryProduct,
  onClearInquiryBag,
}: InquiryModalProps) {
  // Setup forms
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    categoryInterested: directInquiryProduct ? directInquiryProduct.category : 'raw-crystals',
    quantityRequirement: directInquiryProduct ? `${directInquiryProduct.moq}` : '',
    message: directInquiryProduct
      ? `Hello, I want to request a wholesale quotation for ${directInquiryProduct.name}. We require custom shipping terms.`
      : '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phoneType, setPhoneType] = useState<'whatsapp' | 'email'>('email');

  if (!isOpen) return null;

  // Compile list text for WhatsApp / Email
  const getCompiledQuoteString = (itemsList: SelectedInquiryItem[], directProduct: Product | null) => {
    let text = `*Earth Treasure B2B Inquiry*\n\n`;
    text += `*Buyer Corporate Details:*\n`;
    text += `- Name: ${formData.fullName || 'Not Specified'}\n`;
    text += `- Company: ${formData.companyName || 'Not Specified'}\n`;
    text += `- Country: ${formData.country || 'Not Specified'}\n`;
    text += `- Contact: ${formData.email} | ${formData.phone}\n\n`;

    text += `*Requested Product Lines:*\n`;
    if (directProduct) {
      text += `- 1x *${directProduct.name}* (ID: ${directProduct.id})\n`;
      text += `  Target Qty: ${formData.quantityRequirement || directProduct.moq} units\n`;
      text += `  Estimated FOB Price: $${(directProduct.priceUSD * Number(formData.quantityRequirement || directProduct.moq)).toFixed(2)} USD\n\n`;
    } else {
      itemsList.forEach((item) => {
        text += `- *${item.product.name}* (Qty: ${item.quantity} units)\n`;
        text += `  FOB price/unit: $${item.product.priceUSD.toFixed(2)} USD | Total: $${(item.product.priceUSD * item.quantity).toFixed(2)} USD\n`;
      });

      const totalPrice = itemsList.reduce((acc, current) => acc + current.product.priceUSD * current.quantity, 0);
      text += `\n*Total Estimated FOB Cargo Value:* $${totalPrice.toFixed(2)} USD\n\n`;
    }

    text += `*Buyer Notes:* ${formData.message || 'Requesting full catalog sheets.'}\n\n`;
    text += `_Please provide custom freight, export documentation, and duties calculation._`;
    return encodeURIComponent(text);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent, submitType: 'whatsapp' | 'email') => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.companyName || !formData.country) {
      alert('Please premium-fill the mandatory corporate fields: Name, Email, Company, and Country.');
      return;
    }

    const compiledText = getCompiledQuoteString(selectedItems, directInquiryProduct);

    if (submitType === 'whatsapp') {
      // Direct WhatsApp dispatch with prefilled corporate details
      // Using standard phone template prefilled with earth treasure details
      const encodedUrl = `https://wa.me/919724472079?text=${compiledText}`;
      window.open(encodedUrl, '_blank');
    } else {
      // Simulate highly secure email notification dispatch
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        onClearInquiryBag();
        onClose();
        alert(
          'Thank you! Your wholesale RFQ has been successfully registered. Our export desk will dispatch our price lists and shipping calculations within 12 business hours.',
        );
      }, 2000);
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-sm animate-fade-in'
      id='inquiry-system-overlay'
    >
      {/* Scrollable Container Panel */}
      <div className='relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#D4AF37]/40 bg-zinc-900 text-white shadow-2xl flex flex-col md:grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-zinc-800'>
        {/* Left Side: Summary / Cart Selection Items (Col span 5) */}
        <div className='p-6 md:col-span-5 flex flex-col justify-between' id='inquiry-cart-sidebar'>
          <div className='space-y-4 text-left'>
            <div className='flex items-center justify-between'>
              <h3 className='font-serif text-lg font-bold text-[#D4AF37]'>RFQ Manifest</h3>
              <span className='rounded bg-emerald-900/40 border border-emerald-800 px-2 py-0.5 text-[10px] font-mono text-[#D4AF37]'>
                EST. FOB TRADING
              </span>
            </div>

            {directInquiryProduct ? (
              // Direct product query showing clear item
              <div className='border border-[#D4AF37]/20 rounded-xl p-4 bg-emerald-950/20 space-y-3'>
                <p className='text-[10px] font-mono text-cyan-400 uppercase tracking-widest'>
                  Single Direct Product Query
                </p>
                <div className='flex gap-3'>
                  <img
                    src={directInquiryProduct.image}
                    alt={directInquiryProduct.name}
                    className='h-12 w-12 rounded object-cover'
                    referrerPolicy='no-referrer'
                  />
                  <div>
                    <h4 className='text-xs font-bold font-serif text-white'>{directInquiryProduct.name}</h4>
                    <p className='text-[10px] text-slate-400'>Min. wholesale MOQ: {directInquiryProduct.moq} units</p>
                  </div>
                </div>
              </div>
            ) : selectedItems.length === 0 ? (
              // Empty cart block
              <div className='py-12 text-center text-slate-500 space-y-2'>
                <Sparkles className='h-8 w-8 text-slate-600 mx-auto' />
                <p className='text-xs font-serif italic'>Your inquiry compilation is currently empty.</p>
                <p className='text-[10px] max-w-xs mx-auto'>
                  Select wholesale products from our catalog to build an estimated shipping invoice.
                </p>
              </div>
            ) : (
              // Multi-item carts
              <div className='space-y-3 animate-fade-in max-h-[40vh] overflow-y-auto pr-1'>
                {selectedItems.map((item) => (
                  <div
                    key={item.product.id}
                    className='flex justify-between items-center gap-3 p-2 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:border-emerald-900 duration-200'
                  >
                    <div className='flex items-center gap-3'>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className='h-10 w-10 rounded object-cover'
                        referrerPolicy='no-referrer'
                      />
                      <div className='text-left'>
                        <h4 className='text-[11px] font-bold text-slate-200 line-clamp-1'>{item.product.name}</h4>
                        <div className='flex items-center gap-2 mt-0.5'>
                          <span className='text-[9px] text-[#D4AF37] font-mono'>
                            ${item.product.priceUSD.toFixed(2)} FOB
                          </span>
                          <span className='text-[9px] text-slate-500'>MOQ: {item.product.moq}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity adjust block */}
                    <div className='flex items-center gap-2'>
                      <input
                        type='number'
                        min={item.product.moq}
                        value={item.quantity}
                        onChange={(e) =>
                          onUpdateQuantity(item.product.id, Math.max(item.product.moq, Number(e.target.value)))
                        }
                        className='w-14 rounded border border-zinc-700 bg-zinc-850 px-1 py-0.5 text-center text-xs font-mono text-[#D4AF37]'
                      />
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className='text-red-400 hover:text-red-500 p-1'
                        title='Remove product'
                      >
                        <Trash2 className='h-3.5 w-3.5' />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total summary calculations line if list active */}
            {!directInquiryProduct && selectedItems.length > 0 && (
              <div className='border-t border-zinc-800 pt-3 flex justify-between text-xs font-mono'>
                <span className='text-slate-400'>Total Est. FOB Goods cost:</span>
                <span className='text-[#D4AF37] font-bold'>
                  $
                  {selectedItems
                    .reduce((acc, current) => acc + current.product.priceUSD * current.quantity, 0)
                    .toFixed(2)}{' '}
                  USD
                </span>
              </div>
            )}
          </div>

          {/* Export compliance warnings strictly outlined inside the panel */}
          <div className='mt-8 rounded-lg bg-zinc-950 p-4 border border-zinc-800 text-left space-y-2'>
            <div className='flex items-start gap-1.5 text-red-400'>
              <AlertCircle className='h-4 w-4 shrink-0 mt-0.5' />
              <p className='text-[9px] font-semibold uppercase tracking-wider font-mono'>
                International Customs &amp; Packaging Notice
              </p>
            </div>
            <p className='text-[9px] text-zinc-400 leading-normal'>
              Final wholesale shipping and packaging estimates will include custom heavy-duty shockproof wooden pallet
              crates, marine insurance, certificates of origin, and custom tariffs depending on your specified port of
              delivery.
            </p>
          </div>
        </div>

        {/* Right Side: The Corporate Custom Contact & RFQ Form (Col span 7) */}
        <div className='p-6 md:col-span-7 text-left flex flex-col justify-between' id='inquiry-form-container'>
          <div className='flex items-center justify-between border-b border-zinc-800 pb-3 mb-4'>
            <div>
              <h3 className='font-serif text-lg font-bold text-white flex items-center gap-2'>
                <Building className='h-5 w-5 text-[#D4AF37]' />
                <span>B2B Quotation Desk</span>
              </h3>
              <p className='text-[10px] text-zinc-400'>Registered Corporate Exporters Under Earth Treasure Licensing</p>
            </div>

            <button
              onClick={onClose}
              className='rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white p-1'
            >
              <X className='h-5 w-5' />
            </button>
          </div>

          {formSubmitted ? (
            <div className='flex flex-col items-center justify-center py-16 text-center space-y-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900 border border-emerald-700 text-emerald-400'>
                <Check className='h-6 w-6 animate-pulse' />
              </div>
              <h4 className='font-serif text-lg font-bold text-[#D4AF37]'>Secure RFQ Dispatched</h4>
              <p className='text-xs text-slate-300 max-w-sm'>
                Authenticating credentials. Writing trade entries to secure dispatch queues. Please hold...
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, 'email')} className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <label className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                    Full Name <span className='text-cyan-400'>*</span>
                  </label>
                  <input
                    type='text'
                    name='fullName'
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder='e.g. John Doe'
                    className='w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-700 outline-none focus:border-[#D4AF37]'
                  />
                </div>
                <div className='space-y-1'>
                  <label className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                    Company Name <span className='text-cyan-400'>*</span>
                  </label>
                  <input
                    type='text'
                    name='companyName'
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder='e.g. Gemstones Retail LLC'
                    className='w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-700 outline-none focus:border-[#D4AF37]'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <label className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                    Corporate Email <span className='text-cyan-400'>*</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='e.g. buyer@company.com'
                    className='w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-700 outline-none focus:border-[#D4AF37]'
                  />
                </div>
                <div className='space-y-1'>
                  <label className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                    Phone &amp; WhatsApp <span className='text-cyan-400'>*</span>
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='e.g. +1 (555) 234-5678'
                    className='w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-700 outline-none focus:border-[#D4AF37]'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <label className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                    Destination Country <span className='text-cyan-400'>*</span>
                  </label>
                  <input
                    type='text'
                    name='country'
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder='e.g. Germany'
                    className='w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-700 outline-none focus:border-[#D4AF37]'
                  />
                </div>

                {/* Fallback category selection if direct entry was empty */}
                <div className='space-y-1'>
                  <label className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                    Estimated Shipment Size
                  </label>
                  <input
                    type='text'
                    name='quantityRequirement'
                    value={formData.quantityRequirement}
                    onChange={handleInputChange}
                    placeholder='e.g. 500 lbs / 100 sets / 1 Container'
                    className='w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-700 outline-none focus:border-[#D4AF37]'
                  />
                </div>
              </div>

              <div className='space-y-1'>
                <label className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold'>
                  Custom Regulatory / Sorting Requirements
                </label>
                <textarea
                  name='message'
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Specify custom sizing, requested certificate of authenticity, pallet stacking conditions, or special port-of-entry custom broker requirements...'
                  className='w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-700 outline-none focus:border-[#D4AF37]'
                />
              </div>

              {/* Direct CTA action row utilizing real WhatsApp link compile alongside simulated secure dispatch */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2'>
                <button
                  type='button'
                  onClick={(e) => handleSubmit(e, 'whatsapp')}
                  className='flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md'
                >
                  <MessageSquare className='h-4.5 w-4.5 text-white' />
                  <span>WhatsApp Trade Inquiry</span>
                </button>
                <button
                  type='submit'
                  className='flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 px-4 py-3 text-xs font-bold uppercase tracking-wider text-emerald-950 transition-all font-sans shadow-md'
                >
                  <Mail className='h-4.5 w-4.5' />
                  <span>Submit Corporate RFQ</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
