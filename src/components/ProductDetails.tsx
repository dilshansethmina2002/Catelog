import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { IngredientsSection } from './IngredientsSection';
import { BenefitsSection } from './BenefitsSection';
import { BrewingSection } from './BrewingSection';
import { PriceSection } from './PriceSection';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="w-full">
      <HeroSection />
      <FadeInSection><IngredientsSection /></FadeInSection>
      <FadeInSection><BenefitsSection /></FadeInSection>
      <FadeInSection><BrewingSection /></FadeInSection>
      <FadeInSection><PriceSection /></FadeInSection>
    </div>
  );
}
