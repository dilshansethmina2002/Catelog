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
import SnapScroll from './components/ui/SnapScroll';


// --- New Pages (QR System) ---

// ප්‍රධාන පිටුවේ (Home Page) අන්තර්ගතය
function Home() {
  return (
    <>
      <HeroSection />
      <IngredientsSection />
      <BenefitsSection />
      <BrewingSection />
      <PriceSection />
      <SnapScroll />

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

            <Route path="/snap-scroll" element={<SnapScroll />} />
          </Routes>
        </main>

        {/* Footer එක හැම පිටුවකම පේන්න ඕනේ නිසා Routes වලට පහළින් දානවා */}
        <Footer />
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