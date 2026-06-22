import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { IngredientsSection } from './IngredientsSection';
import { BenefitsSection } from './BenefitsSection';
import { BrewingSection } from './BrewingSection';
import { PriceSection } from './PriceSection';

export default function ProductDetails() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to="/"
        className="fixed top-16 left-4 z-40 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white/80 hover:text-white text-xs font-medium rounded-full border border-white/10 hover:bg-black/60 transition-all duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back
      </Link>

      <HeroSection />
      <IngredientsSection />
      <BenefitsSection />
      <BrewingSection />
      <PriceSection />
    </motion.div>
  );
}


