import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import { useParams } from 'react-router-dom';

// JSON ෆයිල් එක import කරගන්න
import productsData from '../data/products.json'; 

// --- CUSTOM SVG ILLUSTRATIONS ---
const ShieldIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M50 15L80 25V50C80 70 50 85 50 85C50 85 20 70 20 50V25L50 15Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
    <motion.path d="M40 50L47 57L60 43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} />
  </svg>
);

const HeartIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M50 80C50 80 20 65 20 40C20 25 35 15 50 30C65 15 80 25 80 40C80 65 50 80 50 80Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" whileInView={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
    <path d="M35 40H65M50 25V55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
  </svg>
);

const ZapIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M60 15L35 50H65L40 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" whileInView={{ filter: ["drop-shadow(0 0 0px currentColor)", "drop-shadow(0 0 8px currentColor)", "drop-shadow(0 0 0px currentColor)"], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
  </svg>
);

const BrainIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M50 25C35 25 25 35 25 50C25 65 35 75 50 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    <path d="M50 25C65 25 75 35 75 50C75 65 65 75 50 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <motion.path d="M50 35V65M35 50H65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" whileInView={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

const customIcons = [ShieldIcon, HeartIcon, ZapIcon, BrainIcon];

export const BenefitsSection: React.FC = () => {
  const { t } = useLanguage(); 

  const { id } = useParams(); 
  const featuredProduct = productsData.find((p) => p.id === id) || productsData[0];
  const benefitsList = featuredProduct.benefits || t.benefits.items;

  return (
    <Section id="benefits" className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-emerald-950">
      
      {/* --- THE ANIMATED GRADIENT BACKGROUND --- */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(-45deg, #041914, #264a40, #022e221b, #022920)',
          backgroundSize: '300% 300%'
        }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 md:mb-24 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              {t.benefits.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-emerald-100/80 text-base sm:text-lg md:text-xl font-light max-w-md leading-relaxed"
          >
            {t.benefits.subtitle}
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          
          {benefitsList.map((item: any, index: number) => {
            const Icon = customIcons[index % customIcons.length]; 
            const isMain = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
                className={`
                  group relative rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 overflow-hidden flex flex-col transition-all duration-700
                  ${isMain
                    ? 'md:col-span-8 bg-black/30 backdrop-blur-lg border border-white/10 text-white min-h-[280px] sm:min-h-[400px]'
                    // Replaced bg-white with dark translucent glassmorphism
                    : 'md:col-span-4 bg-black/15 backdrop-blur-lg border border-white/10 text-white shadow-xl hover:bg-black/25'
                  }
                `}
              >
                {/* Background Decor Circles */}
                {isMain ? (
                  <>
                    <div className="absolute top-0 right-0 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] bg-emerald-500/20 rounded-full blur-[10px] sm:blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-white/10 rounded-full pointer-events-none hidden sm:block" />
                  </>
                ) : (
                  // Darkened the secondary card decor circle
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className={`
                    w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 md:mb-10 transition-transform duration-500 group-hover:scale-110
                    ${isMain 
                      ? 'bg-white/10 text-emerald-400 backdrop-blur-[4px] border border-white/10' 
                      // Updated secondary icon container for dark mode
                      : 'bg-white/5 text-emerald-300 border border-white/5'}
                  `}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  </div>

                  {/* Card Title - Now explicitly white for all cards */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 sm:mb-4 tracking-tight text-white">
                    {item.title}
                  </h3>

                  {/* Card Description - Now light emerald/white for all cards */}
                  <p className={`
                    text-base sm:text-lg md:text-xl font-medium leading-relaxed
                    ${isMain ? 'text-emerald-100/90 max-w-xl' : 'text-emerald-100/60'}
                  `}>
                    {item.description}
                  </p>
                </div>

                {/* Optimized pattern overlay (only on main card) */}
                {isMain && (
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden"
                    style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}