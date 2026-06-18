import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

type Message = {
  sender: 'bot' | 'user';
  text: string;
};

const FAQS = {
  export:
    'Earth Treasure exports premium crystals, gemstone decor, geodes, towers, carvings, and wholesale mineral specimens worldwide.',

  shipping: 'We provide international shipping with complete export documentation and logistics support.',

  quote:
    'You can request a quotation through our Contact page or WhatsApp. Please mention the product and quantity required.',

  gst: 'Earth Treasure is GST registered and operates as a fully compliant business.',

  iec: 'Earth Treasure holds a valid Import Export Code (IEC) for international trade.',

  udyam: 'Earth Treasure is registered under the Government of India Udyam MSME program.',

  moq: 'Minimum order quantities depend on the product category and destination country. Please contact us for exact details.',

  crystals:
    'We offer quartz clusters, amethyst, citrine, agate products, crystal towers, spheres, carvings, geodes and custom wholesale crystal products.',

  default: 'I could not find a specific answer. Please contact our team through WhatsApp for personalized assistance.',
};

export default function FAQChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Welcome to Earth Treasure. How can I help you today?',
    },
  ]);

  const [input, setInput] = useState('');

  const getResponse = (question: string): string => {
    const q = question.toLowerCase();

    if (q.includes('product') || q.includes('crystal') || q.includes('gemstone')) return FAQS.crystals;

    if (q.includes('ship') || q.includes('delivery')) return FAQS.shipping;

    if (q.includes('quote') || q.includes('quotation') || q.includes('price') || q.includes('cost')) return FAQS.quote;

    if (q.includes('gst')) return FAQS.gst;

    if (q.includes('iec') || q.includes('export code')) return FAQS.iec;

    if (q.includes('udyam') || q.includes('msme')) return FAQS.udyam;

    if (q.includes('moq') || q.includes('minimum')) return FAQS.moq;

    if (q.includes('export') || q.includes('international')) return FAQS.export;

    return FAQS.default;
  };

  const sendMessage = (question?: string) => {
    const messageText = question || input;

    if (!messageText.trim()) return;

    const userMessage: Message = {
      sender: 'user',
      text: messageText,
    };

    const botMessage: Message = {
      sender: 'bot',
      text: getResponse(messageText),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button onClick={() => setIsOpen(!isOpen)} className='fixed bottom-24 right-6 z-50'>
        {/* Golden Pulse */}
        <span
          className='
      absolute
      inset-0
      rounded-full
      bg-[#D4AF37]
      opacity-25
      animate-ping
      [animation-duration:2s]
    '
        />

        {/* Gold Glow */}
        <span
          className='
      absolute
      inset-0
      rounded-full
      bg-[#D4AF37]/20
      blur-xl
    '
        />

        {/* Main Button */}
        <div
          className='
      relative
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-gradient-to-br
      from-[#E6C55A]
      via-[#D4AF37]
      to-[#B8860B]
      text-emerald-950
      shadow-[0_0_30px_rgba(212,175,55,0.55)]
      transition-all
      duration-300
      hover:scale-110
      hover:shadow-[0_0_40px_rgba(212,175,55,0.75)]
    '
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className='
            fixed
            bottom-44
            right-6
            z-50
            flex
            h-[560px]
            w-[380px]
            max-w-[calc(100vw-32px)]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-[#D4AF37]/20
            bg-slate-950
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          '
        >
          {/* Header */}
          <div
            className='
              border-b
              border-[#D4AF37]/20
              bg-gradient-to-r
              from-emerald-950
              via-emerald-900
              to-emerald-950
              p-5
            '
          >
            <h3 className='font-serif text-lg font-bold text-[#D4AF37]'>Earth Treasure Assistant</h3>

            <p className='mt-1 text-xs text-slate-300'>
              Ask about products, exports, MOQ, certificates, or quotations.
            </p>
          </div>

          {/* Messages */}
          <div className='flex-1 space-y-4 overflow-y-auto p-4'>
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`flex max-w-[85%] gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`
                      mt-1 flex h-8 w-8 items-center justify-center rounded-full
                      ${message.sender === 'user' ? 'bg-[#D4AF37] text-emerald-950' : 'bg-emerald-900 text-[#D4AF37]'}
                    `}
                  >
                    {message.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  <div
                    className={`
                      rounded-2xl px-4 py-3 text-sm leading-relaxed
                      ${
                        message.sender === 'user' ? 'bg-[#D4AF37] text-emerald-950' : 'bg-emerald-900/40 text-slate-200'
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className='border-t border-[#D4AF37]/10 px-4 py-3'>
            <div className='flex flex-wrap gap-2'>
              {['Products', 'MOQ', 'Shipping', 'Quotation', 'GST', 'IEC'].map((item) => (
                <button
                  key={item}
                  onClick={() => sendMessage(item)}
                  className='
                    rounded-full
                    border
                    border-[#D4AF37]/20
                    px-3
                    py-1
                    text-xs
                    text-[#D4AF37]
                    transition
                    hover:bg-[#D4AF37]/10
                  '
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className='border-t border-[#D4AF37]/20 p-4'>
            <div className='flex gap-2'>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage();
                  }
                }}
                placeholder='Ask a question...'
                className='
                  flex-1
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition
                  focus:border-[#D4AF37]
                '
              />

              <button
                onClick={() => sendMessage()}
                className='
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#D4AF37]
                  text-emerald-950
                  transition
                  hover:bg-amber-400
                '
              >
                <Send size={18} />
              </button>
            </div>

            <a
              href='https://wa.me/919023473345'
              target='_blank'
              rel='noopener noreferrer'
              className='
                mt-3
                block
                text-center
                text-xs
                text-slate-400
                hover:text-[#D4AF37]
              '
            >
              Need detailed assistance? Chat on WhatsApp →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
