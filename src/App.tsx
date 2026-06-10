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
    </>
  );
}

function AppContent() {
  return (
    // මුළු App එකම Router එකකින් ආවරණය කරනවා
    <Router>
      {/* flex සහ flex-col පාවිච්චි කළේ පිටුවේ content අඩු වුණත් Footer එක යටින්ම තියාගන්න */}
      <div className="min-h-screen flex flex-col bg-[#faf9f6] font-sans text-emerald-950 selection:bg-emerald-200 selection:text-emerald-950">
        
        {/* Header එක හැම පිටුවකම පේන්න ඕනේ නිසා Routes වලට උඩින් දානවා */}
        <Header />
        
        {/* flex-grow දාන්නේ මැද කොටසට ඉතුරු ඉඩ ඔක්කොම ගන්න */}
        <main className="flex-grow pt-20 md:pt-24"> 
          {/* Header එක පාවෙන (fixed) නිසා main එකට පොඩි padding top එකක් දුන්නා */}
          <Routes>
            {/* සාමාන්‍යයෙන් වෙබ්සයිට් එකට ආවම පේන Main Page එක */}
            <Route path="/" element={<Home />} />
            
            {/* QR කේතය Scan කරාම යන Product Page එක */}
            <Route path="/product/:id" element={<ProductDetails />} />
            
            {/* අනාගතයේ QR ප්‍රින්ට් කරන්න ඕනේ නම් මේක පාවිච්චි කරන්න පුළුවන් (දැනට comment කරලා තියෙන්නේ) */}
            <Route path="/admin/qr" element={<QRMaker />} />
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