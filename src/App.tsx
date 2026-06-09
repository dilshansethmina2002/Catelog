import { LanguageProvider } from './context/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { HeroSection } from './components/HeroSection';
import { ProcessSection } from './components/ProcessSection';
import { IngredientsSection } from './components/IngredientsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BrewingSection } from './components/BrewingSection';
import { PriceSection } from './components/PriceSection';
import { Footer } from './components/Footer';
import logoImg12 from './assets/athu.png';
function AppContent() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-emerald-950 selection:bg-emerald-200 selection:text-emerald-950">
      {/* Vibrant Green Glassmorphic Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="mx-auto px-4 py-3 md:py-4 max-w-7xl">
          <div className="bg-emerald-900/90 backdrop-blur-none md:backdrop-blur-md border border-emerald-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-2xl md:rounded-[2rem] px-4 md:px-8 py-2 md:py-3 flex justify-between items-center transition-all">
            <div className="flex items-center gap-3 md:gap-5 group cursor-pointer">
              {/* Refined Logo Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={logoImg12}
                  alt="Athukorala Logo"
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-emerald-500/30 shadow-sm object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Company Branding */}
              <div className="flex flex-col">
                <span className="text-base md:text-2xl lg:text-2xl font-serif font-bold tracking-tight bg-gradient-to-r from-emerald-50 to-emerald-200 bg-clip-text text-transparent">
                  Athukorala Group (Pvt) Ltd
                </span>
                <span className="hidden sm:block text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 transition-colors group-hover:text-emerald-200">
                  Fine Ceylon Tea
                </span>
              </div>
            </div>

            {/* Actions Area */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="h-6 w-px bg-emerald-800 hidden sm:block" />
              <div className="pointer-events-auto scale-90 md:scale-100">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <HeroSection />
        <ProcessSection />
        <IngredientsSection />
        <BenefitsSection />
        <BrewingSection />
        <PriceSection />
      </main>

      <Footer />
    </div>);

}
export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>);

}