import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import InquiryModal from './components/InquiryModal';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { CATEGORIES, PRODUCTS } from './data/crystals';
import { Product, SelectedInquiryItem } from './types';
import FAQChatBot from './components/FAQChatBot';
import { Routes, Route, useLocation, useNavigate } from 'react-router';
import HomePage from './pages/HomePage';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Custom quotation builder (Inquiry Cart state)
  const [inquiryBag, setInquiryBag] = useState<SelectedInquiryItem[]>([]);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // State for quick direct product inquiry
  const [directQueryProduct, setDirectQueryProduct] = useState<Product | null>(null);

  // Scroll to top on page tab switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const selectedCategory = location.pathname.startsWith('/products/') ? location.pathname.split('/')[2] : null;

  const handleCategoryChange = (catId: string | null) => {
    if (catId) {
      navigate(`/products/${catId}`);
    } else {
      navigate('/products');
    }
  };

  // Handle addition of item inside the B2B inquiry bag
  const handleAddToInquiry = (product: Product, quantity: number) => {
    setInquiryBag((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleRemoveInquiryItem = (productId: string) => {
    setInquiryBag((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleUpdateInquiryQuantity = (productId: string, quantity: number) => {
    setInquiryBag((prev) => prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item)));
  };

  const handleClearInquiryBag = () => {
    setInquiryBag([]);
  };

  // Direct Quote Modal trigger
  const handleQuickInquiry = (product: Product) => {
    setDirectQueryProduct(product);
    setIsInquiryModalOpen(true);
  };

  const handleOpenInquiryBagModal = () => {
    setDirectQueryProduct(null);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className='min-h-screen bg-emerald-950 font-sans text-slate-100 flex flex-col justify-between selection:bg-[#D4AF37] selection:text-emerald-950'>
      {/* 1. Header Navigation Block */}
      <Header categories={CATEGORIES} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* 2. Main Selected Tab View rendering */}
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<HomePage onQuickInquiry={handleQuickInquiry} />} />

          <Route
            path='/products'
            element={
              <ProductsSection
                products={PRODUCTS}
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                searchQuery={searchQuery}
                onAddToInquiry={handleAddToInquiry}
                onQuickInquiry={handleQuickInquiry}
                inquiryItemsCount={inquiryBag.reduce((acc, current) => acc + current.quantity, 0)}
                onOpenInquiryBag={handleOpenInquiryBagModal}
              />
            }
          />

          <Route
            path='/products/:categoryId'
            element={
              <ProductsSection
                products={PRODUCTS}
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                searchQuery={searchQuery}
                onAddToInquiry={handleAddToInquiry}
                onQuickInquiry={handleQuickInquiry}
                inquiryItemsCount={inquiryBag.reduce((acc, current) => acc + current.quantity, 0)}
                onOpenInquiryBag={handleOpenInquiryBagModal}
              />
            }
          />

          <Route path='/about' element={<AboutUs />} />

          <Route path='/contact' element={<ContactUs categories={CATEGORIES} />} />
        </Routes>
      </main>

      {/* 3. Footer Block */}
      <Footer categories={CATEGORIES} />

      {/* 4. Inquiry / RFQ Modal Panel Overlay */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        selectedItems={inquiryBag}
        onRemoveItem={handleRemoveInquiryItem}
        onUpdateQuantity={handleUpdateInquiryQuantity}
        directInquiryProduct={directQueryProduct}
        onClearInquiryBag={handleClearInquiryBag}
      />

      {/* 5. Floating Pulsing WhatsApp Support Service */}
      <WhatsAppButton />

      {/* 6. FAQ Chat Bot */}
      <FAQChatBot />
    </div>
  );
}
