import { useEffect } from 'react';
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

<HeroSection />
      <IngredientsSection />
      <BenefitsSection />
      <BrewingSection />
      <PriceSection />
    </motion.div>
  );
}


