import React, { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { ProcessSection } from './ProcessSection';
import { IngredientsSection } from './IngredientsSection';
import { BenefitsSection } from './BenefitsSection';
import { BrewingSection } from './BrewingSection';
import { PriceSection } from './PriceSection';

export default function ProductDetails() {
  
  // පිටුවට ආවම මුලටම (Top එකට) Scroll වෙන්න හදනවා
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* අර ලස්සන Sections ඔක්කොම මෙතනට දානවා */}
      <HeroSection />
      <IngredientsSection />
      <BenefitsSection />
      <BrewingSection />
      <PriceSection />
    </div>
  );
}