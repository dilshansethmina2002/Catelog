import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import { useParams } from 'react-router-dom';

// JSON ෆයිල් එක import කරගන්නවා
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

        {/* ✅ FIXED GRID LAYOUT: Stacks nicely on mobile, 2 columns on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {brewingSteps.map((step: any, index: number) => {
            const Icon = customIcons[index % customIcons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="group relative h-full"
              >
                {/* Card Wrapper - ensuring it takes full height of the grid cell */}
                <div className="relative h-full group-hover:transform group-hover:-translate-y-2 transition-transform duration-500">
                  
                  {/* ✅ FIXED CARD PADDING & SIZING: Removed hardcoded min-heights that break layout */}
                  <div className="h-full w-full bg-black/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-white/10 flex flex-col items-center justify-start overflow-hidden relative group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:bg-black/30 group-hover:border-white/20 transition-all duration-700">

                    {/* Step Indicator */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 text-4xl md:text-5xl font-serif font-bold text-white/5 select-none transition-all duration-500 group-hover:text-white/10">
                      0{index + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="w-16 h-16 md:w-20 md:h-20 mt-4 mb-6 flex items-center justify-center text-emerald-400 group-hover:text-[#d4af37] transition-colors duration-500 shrink-0">
                      <Icon className="w-full h-full" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-3 tracking-tight text-center">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-emerald-100/60 text-sm leading-relaxed font-medium text-center group-hover:text-emerald-100/80 transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}