import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import { useParams } from 'react-router-dom';

// Import the JSON file to access product data and benefits
import productsData from '../data/products.json';
import spicesData from '../data/spices.json';
import { benefitTranslations } from '../data/benefitTranslations';

// --- CUSTOM SVG ILLUSTRATIONS ---
const ShieldIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M50 15L80 25V50C80 70 50 85 50 85C50 85 20 70 20 50V25L50 15Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
    <motion.path d="M40 50L47 57L60 43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} />
  </svg>
);

const HeartIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M50 80C50 80 20 65 20 40C20 25 35 15 50 30C65 15 80 25 80 40C80 65 50 80 50 80Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
    <path d="M35 40H65M50 25V55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
  </svg>
);

const ZapIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M60 15L35 50H65L40 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" animate={{ filter: ["drop-shadow(0 0 0px currentColor)", "drop-shadow(0 0 8px currentColor)", "drop-shadow(0 0 0px currentColor)"], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
  </svg>
);

const BrainIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M50 25C35 25 25 35 25 50C25 65 35 75 50 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    <path d="M50 25C65 25 75 35 75 50C75 65 65 75 50 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <motion.path d="M50 35V65M35 50H65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

const AntioxidantIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="3" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <motion.circle
        key={angle}
        cx={50 + 28 * Math.cos((angle * Math.PI) / 180)}
        cy={50 + 28 * Math.sin((angle * Math.PI) / 180)}
        r="6"
        stroke="currentColor"
        strokeWidth="2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </svg>
);

const DigestiveIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M38 18C30 25 28 35 32 45C36 55 26 58 26 68C26 78 36 84 48 82C60 80 66 70 62 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
    <motion.path d="M62 60C70 58 76 50 74 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
  </svg>
);

const SleepIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M65 22C50 26 40 40 40 55C40 72 54 85 71 82C58 92 38 90 27 76C15 61 18 38 34 26C44 18 56 17 65 22Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} />
    <motion.circle cx="72" cy="30" r="2.5" fill="currentColor" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="80" cy="42" r="1.8" fill="currentColor" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
  </svg>
);

const WarmingIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M50 18C50 18 32 38 32 55C32 68 40 78 50 78C60 78 68 68 68 55C68 48 65 44 62 40C62 48 57 52 53 48C49 44 52 38 50 30C48 34 44 38 44 44C44 38 46 30 50 18Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
  </svg>
);

const BoneJointIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M28 72L72 28" stroke="currentColor" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
    <circle cx="24" cy="76" r="9" stroke="currentColor" strokeWidth="3" />
    <circle cx="76" cy="24" r="9" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const RespiratoryIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M18 35C30 30 42 32 48 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1 }} />
    <motion.path d="M18 50C33 44 48 47 56 57" stroke="currentColor" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} />
    <motion.path d="M18 65C36 58 54 62 62 73" stroke="currentColor" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} />
  </svg>
);

const SkinIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {[0, 72, 144, 216, 288].map((angle, i) => (
      <motion.ellipse
        key={angle}
        cx={50 + 18 * Math.cos((angle * Math.PI) / 180)}
        cy={50 + 18 * Math.sin((angle * Math.PI) / 180)}
        rx="12"
        ry="18"
        stroke="currentColor"
        strokeWidth="2.2"
        transform={`rotate(${angle + 90} ${50 + 18 * Math.cos((angle * Math.PI) / 180)} ${50 + 18 * Math.sin((angle * Math.PI) / 180)})`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
      />
    ))}
    <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.8" />
  </svg>
);

const MetabolismIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M22 60C22 44 34 32 50 32C66 32 78 44 78 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
    <motion.path d="M50 60L62 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" animate={{ rotate: [0, 20, -10, 0] }} style={{ transformOrigin: '50px 60px' }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
    <circle cx="50" cy="60" r="4" fill="currentColor" />
  </svg>
);

const HydrationIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M50 18C50 18 28 46 28 63C28 76 38 84 50 84C62 84 72 76 72 63C72 46 50 18 50 18Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4 }} />
    <motion.path d="M38 62C38 68 43 72 49 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

const DetoxIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M50 20C64 20 76 30 79 43C82 57 74 70 62 76" stroke="currentColor" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
    <motion.path d="M50 80C36 80 24 70 21 57C18 43 26 30 38 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
    <motion.path d="M60 68L62 76L70 74" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
    <motion.path d="M40 32L38 24L30 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
  </svg>
);

const WellnessIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <motion.path d="M50 20C50 20 30 32 30 50C30 68 50 80 50 80C50 80 70 68 70 50C70 32 50 20 50 20Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4 }} />
    <motion.path d="M50 30V70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }} />
  </svg>
);

// Ordered (priority-first) keyword categories used to pick a distinct icon per benefit type.
const ICON_CATEGORIES: { icon: typeof ShieldIcon; keywords: string[] }[] = [
  { icon: SleepIcon, keywords: ['sleep', 'calm', 'relax', 'tranquil', 'zen', 'soothing', 'soothe', 'stress', 'mood', 'emotional', 'headache', 'aromatic'] },
  { icon: WarmingIcon, keywords: ['warm'] },
  { icon: BoneJointIcon, keywords: ['bone', 'joint', 'muscle', 'aches'] },
  { icon: RespiratoryIcon, keywords: ['breath', 'congestion', 'respiratory', 'oral', 'throat'] },
  { icon: SkinIcon, keywords: ['skin', 'hair', 'glow', 'radian', 'complexion', 'collagen', 'wound', 'anti-aging', 'anti-ageing', 'ageing', 'aging', 'longevity'] },
  { icon: DigestiveIcon, keywords: ['digest', 'gut', 'stomach', 'nausea', 'appetite', 'nutrient', 'nutrition'] },
  { icon: DetoxIcon, keywords: ['detox', 'liver', 'kidney', 'urinary', 'cleanse'] },
  { icon: HydrationIcon, keywords: ['hydrat'] },
  { icon: MetabolismIcon, keywords: ['metabol', 'weight', 'craving', 'crav', 'blood sugar'] },
  { icon: BrainIcon, keywords: ['brain', 'memory', 'cognitive', 'mental', 'clarity', 'clears the mind', 'focus', 'eye', 'vision'] },
  { icon: AntioxidantIcon, keywords: ['antioxidant', 'catechin', 'curcumin', 'cellular', 'anthocyanin', 'inflammat'] },
  { icon: ShieldIcon, keywords: ['immun', 'defense', 'defence', 'antibacterial', 'antimicrobial', 'antiviral', 'anti-viral', 'fortification', 'vitamin c', 'cold'] },
  { icon: HeartIcon, keywords: ['heart', 'cardiovascular', 'blood pressure', 'vascular', 'circulat', 'iron'] },
  { icon: ZapIcon, keywords: ['energy', 'energiz', 'alert', 'morning', 'vitality', 'robust', 'steady', 'caffeine', 'refreshing', 'vibrant'] },
];

function getIconForBenefit(title: string) {
  const lower = (title || '').toLowerCase();
  for (const category of ICON_CATEGORIES) {
    if (category.keywords.some((kw) => lower.includes(kw))) return category.icon;
  }
  return WellnessIcon;
}

export const BenefitsSection: React.FC<{ showAll?: boolean }> = ({ showAll = false }) => {
  const { t, language } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const { id } = useParams();
  const featuredProduct = productsData.find((p) => p.id === id) || spicesData.find((p) => p.id === id) || productsData[0];
  const isTea001 = !id || id === 'tea-001';
  const rawBenefitsList = isTea001 ? t.benefits.items : (featuredProduct.benefits || t.benefits.items);
  const benefitsList = (isTea001 || language === 'en')
    ? rawBenefitsList
    : rawBenefitsList.map((item: any) => {
        const key = `${item.title}|||${item.description}`;
        return benefitTranslations[key]?.[language as keyof typeof benefitTranslations[string]] ?? item;
      });

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
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              {t.benefits.title}
            </h2>
          </div>

          <p className="text-emerald-100/80 text-base sm:text-lg md:text-xl font-light max-w-md leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Uniform Grid layout: 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">

          {benefitsList.map((item: any, index: number) => {
            const Icon = getIconForBenefit(rawBenefitsList[index]?.title || item.title);
            const hiddenOnMobile = !showAll && !expanded && index >= 2;

            return (
              <div
                key={index}
                className={`${hiddenOnMobile ? 'hidden sm:flex' : 'flex'} group relative rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 overflow-hidden flex-col transition-all duration-700 bg-black/15 backdrop-blur-lg border border-white/10 text-white shadow-xl hover:bg-black/25 min-h-[320px] sm:min-h-[380px] md:min-h-[420px]`}
              >
                {/* Background Decor Circles */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 md:mb-10 transition-transform duration-500 group-hover:scale-110 bg-white/5 text-emerald-300 border border-white/5">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 sm:mb-4 tracking-tight text-white">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-emerald-100/60">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && !expanded && (
          <div className="sm:hidden flex justify-center mt-8">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold rounded-full transition-colors duration-200 text-sm"
            >
              {t.benefits.viewAll}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        )}

        {!showAll && expanded && (
          <div className="sm:hidden flex justify-center mt-8">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-transparent border border-amber-400/60 hover:bg-amber-400/10 text-amber-400 font-bold rounded-full transition-colors duration-200 text-sm"
            >
              {t.benefits.hide}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
