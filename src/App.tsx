import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// --- Components ---
import { HeroSection } from './components/HeroSection';
import { IngredientsSection } from './components/IngredientsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BrewingSection } from './components/BrewingSection';
import { PriceSection } from './components/PriceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ProductDetails from './components/ProductDetails';
import { QRMaker } from './components/QRMaker';
// import SnapScroll from './components/ui/SnapScroll';


// --- New Pages (QR System) ---

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-amber-400 hover:bg-amber-300 text-emerald-950 shadow-lg flex items-center justify-center transition-colors duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  );
}

// ප්‍රධාන පිටුවේ (Home Page) අන්තර්ගතය
function Home() {
  return (
    <>
      <HeroSection />
      <IngredientsSection />
      <BenefitsSection />
      <BrewingSection />
      <PriceSection />
      {/* <SnapScroll /> */}

    </>
  );
}

function AppContent() {
  return (
    // මුළු App එකම Router එකකින් ආවරණය කරනවා
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-emerald-950 selection:bg-emerald-200 selection:text-emerald-950">
        
        {/* Header එක හැම පිටුවකම පේන්න ඕනේ නිසා Routes වලට උඩින් දානවා */}
        <Header />
        
        {/* ✅ වෙනස: pt-20 md:pt-24 ඉවත් කරන ලදී. එවිට Hero Section එක තිරයේ ඉහළම කෙළවරේ සිට ආරම්භ වේ */}
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/admin/qr" element={<QRMaker />} />

          </Routes>
        </main>

        {/* Footer එක හැම පිටුවකම පේන්න ඕනේ නිසා Routes වලට පහළින් දානවා */}
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}