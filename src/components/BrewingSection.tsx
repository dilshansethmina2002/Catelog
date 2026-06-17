import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';

// --- CUSTOM SVG ILLUSTRATIONS ---

const KettleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M30 80H70C75 80 80 75 80 70V50C80 40 70 30 60 30H40C30 30 20 40 20 50V70C20 75 25 80 30 80Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 30V25C40 20 45 15 50 15C55 15 60 20 60 25V30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M80 55L90 45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <motion.path
      d="M85 35Q90 25 85 15M92 38Q97 28 92 18"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      whileInView={{ y: [0, -5, 0], opacity: [0, 0.6, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

const SpoonIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M80 20L55 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M55 45C50 40 30 40 25 55C20 70 30 85 45 80C60 75 60 55 55 45Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 55Q32 60 35 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <motion.g
      whileInView={{ y: [0, 25], opacity: [1, 0] }}
      transition={{ duration: 1.8, repeat: Infinity }}
    >
      <circle cx="35" cy="75" r="2" fill="currentColor" />
      <path d="M45 70Q47 67 49 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </motion.g>
    <motion.g
      whileInView={{ y: [0, 30], opacity: [1, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
    >
      <circle cx="40" cy="82" r="1.5" fill="currentColor" />
      <path d="M30 78Q32 75 34 78" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </motion.g>
  </svg>
);

const TimerIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.2" />
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="220" />
    <motion.path
      d="M50 50L50 25"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      initial={{ rotate: 0 }}
      whileInView={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{ originX: "50px", originY: "50px" }}
    />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
);

const CupIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M25 40H75C75 60 60 75 50 75C40 75 25 60 25 40Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M75 50C82 50 88 56 88 62.5C88 69 82 75 75 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 75H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <motion.path
      d="M45 30Q50 20 45 10M55 30Q60 20 55 10"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      whileInView={{ y: [0, -5, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </svg>
);

const customIcons = [KettleIcon, SpoonIcon, TimerIcon, CupIcon];

export const BrewingSection: React.FC = () => {
  const { t } = useLanguage();

  const { id } = useParams(); 
  const featuredProduct = productsData.find((p) => p.id === id) || productsData[0];
  const brewingSteps = featuredProduct.brewing || t.brewing.steps;

  return (
    // Changed bg to dark emerald-950 to match the dark theme
    <Section id="brewing" className="bg-emerald-950 relative overflow-hidden py-16 sm:py-24 md:py-32">
      
      {/* --- THE ANIMATED GRADIENT BACKGROUND --- */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(-45deg, #022c22, #064e3b, #047857, #022c22)',
          backgroundSize: '300% 300%'
        }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      />

      {/* Background Orbs adapted for dark mode */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0" />
      <div className="absolute right-0 bottom-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#d4af37]/10 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20 lg:mb-24 max-w-2xl mx-auto space-y-3 sm:space-y-4"
        >
          {/* Updated text colors to white and light emerald for dark background */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            {t.brewing.title}
          </h2>
          <p className="text-emerald-100/80 text-base sm:text-lg font-light leading-relaxed px-2">
            {t.brewing.subtitle}
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          {brewingSteps.map((step: any, index: number) => {
            const Icon = customIcons[index % customIcons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="group relative"
              >
                {/* Card Wrapper */}
                <div className="relative group-hover:transform group-hover:-translate-y-2 transition-transform duration-500">
                  
                  {/* Converted solid white background to Translucent Dark Glassmorphism */}
                  <div className="w-full min-h-[260px] md:aspect-[4/5] bg-black/20 backdrop-blur-md rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-white/10 flex flex-col items-center justify-center overflow-hidden relative group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:bg-black/30 group-hover:border-white/20 transition-all duration-700">

                    {/* Step Indicator - Adjusted opacity for dark background */}
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 text-4xl md:text-6xl font-serif font-bold text-white/5 select-none">
                      0{index + 1}
                    </div>

                    {/* Icon Container - Green default, transitioning to Gold on hover */}
                    <div className="w-14 h-14 md:w-24 md:h-24 mb-4 md:mb-10 flex items-center justify-center text-emerald-400 group-hover:text-[#d4af37] transition-colors duration-500">
                      <Icon className="w-full h-full" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 md:mb-4 tracking-tight text-center">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-emerald-100/60 text-sm md:text-base leading-relaxed font-medium px-1 text-center group-hover:text-emerald-100/80 transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Vertical Divider (Mobile only) */}
                {index < brewingSteps.length - 1 && (
                  <div className="flex justify-center md:hidden my-4">
                    <div className="w-[1px] h-6 bg-white/10" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}