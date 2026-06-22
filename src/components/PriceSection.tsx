import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import { Check, Package, Star, MessageSquare } from 'lucide-react';
import { useParams } from 'react-router-dom';

// JSON ෆයිල් එක import කරගන්නවා
import productsData from '../data/products.json';

export function PriceSection() {
  const { t } = useLanguage();

  const { id } = useParams(); // URL එකෙන් ID එක ගන්නවා (උදා: tea-002)
  
  // URL එකේ ID එකක් තියෙනවා නම් ඒකට අදාළ product එක ගන්නවා, නැත්නම් default විදිහට පළවෙනි එක ගන්නවා
  const featuredProduct = productsData.find((p) => p.id === id) || productsData[0];

  // JSON එකෙන් මිල ගන්නවා, නැත්නම් Translation එකේ තියෙන default මිල ගන්නවා
  const displayPrice = featuredProduct.price || t.price.price;

  // ✅ අලුතින් එකතු කළ කොටස: JSON එකෙන් බර (weight) ගන්නවා, නැත්නම් default එක ගන්නවා
  const displayWeight = featuredProduct.weight || t.price.weight;

  // Checkmarks වලට එන්න ඕනේ දේවල් ටික ලේසියෙන් හදාගන්නවා (භාෂාව මාරු වෙන්න පහසු වෙන්න)
  const checklistItems = [
    t.ingredients.items[0].name,
    t.benefits.items[0].title,
    t.benefits.items[3].title
  ];

  return (
    // Changed to dark background with relative and overflow-hidden for the gradient
    <Section id="price" className="relative bg-emerald-950 py-16 sm:py-24 md:py-32 overflow-hidden">
      
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

      {/* Content Container positioned above the background */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Transformed to dark frosted glass
          className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl sm:rounded-[3rem] p-6 sm:p-10 md:p-16 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] group"
        >

          {/* Very subtle inner glass reflection replacing the old solid gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
          
          {/* Background Orb - Changed to Gold/Emerald mix */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-[#d4af37]/20 rounded-full blur-[60px] sm:blur-[100px] transform translate-x-1/3 -translate-y-1/3 z-0 pointer-events-none" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Product Info */}
            <div className="text-white space-y-6 sm:space-y-8">
              <div>
                <div className="flex items-center gap-1.5 text-[#d4af37] mb-3 sm:mb-4">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
                  {t.price.title}
                </h2>
                <p className="text-emerald-100/80 text-base sm:text-lg max-w-md font-light">
                  {t.price.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                {checklistItems.map((text, i) =>
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 border border-[#d4af37]/30">
                      <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-emerald-50 text-sm sm:text-base font-medium">
                      {text}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Pricing Card */}
            <motion.div
              whileHover={{ y: -10, rotateX: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              // Deepened the glass effect to contrast against the parent container
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden w-full shadow-2xl"
            >
              {/* Premium Gold to Green top border highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-emerald-500 to-[#d4af37]" />

              {/* ✅ JSON එකෙන් පැකට් වර්ගය ගන්නවා නම් මෙතන featuredProduct.pack දෙන්න පුළුවන්. දැනට default තියෙනවා */}
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[#d4af37]/20 backdrop-blur-sm">
                {featuredProduct.pack || t.price.pack} 
              </div>

              <div className="flex items-baseline justify-center gap-1 mb-1 sm:mb-2">
                <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {displayPrice}
                </span>
                <span className="text-emerald-200/70 text-sm sm:text-base">/ pack</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-emerald-200/50 mb-2 sm:mb-4 text-xs sm:text-sm">
                <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {/* ✅ මෙතනට JSON එකෙන් ගන්න Weight එක (displayWeight) ලබා දුන්නා */}
                {displayWeight}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Bespoke Review Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          // Transformed to dark frosted glass
          className="mt-12 sm:mt-20 relative px-4 sm:px-6 py-12 sm:py-16 md:py-24 rounded-3xl sm:rounded-[3rem] overflow-hidden text-center bg-black/20 backdrop-blur-md border border-white/5"
        >
          {/* Decorative Floating Leaf (Faded for dark mode) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 text-white/[0.02] pointer-events-none select-none z-0">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full rotate-45">
              <path d="M50,5 C20,25 5,55 50,95 C95,55 80,25 50,5 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 w-full">
            <div className="space-y-2 sm:space-y-3 max-w-xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[#d4af37] font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.3em]"
              >
                Trusted Excellence
              </motion.div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-medium text-white tracking-tight italic leading-tight">
                {t.price.videoTitle}
              </h3>
            </div>

            {/* Elegant Shimmering Stars */}
            <div className="flex gap-1.5 sm:gap-2" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((s) => (
                <motion.div
                  key={s}
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: s * 0.15 }}
                >
                  <Star className="w-5 h-5 sm:w-7 sm:h-7 fill-[#d4af37] text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                </motion.div>
              ))}
            </div>

            {/* Editorial Style CTA Link */}
            <motion.a
              href="https://reviewthis.biz/Athu-rev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ gap: "1.5rem" }}
              className="group flex items-center justify-center gap-3 sm:gap-4 text-emerald-100/90 hover:text-[#d4af37] font-bold uppercase tracking-widest text-xs sm:text-sm transition-all border-b-2 border-white/10 pb-2 hover:border-[#d4af37] text-center px-2 max-w-full"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="leading-relaxed">{t.price.videoDescription}</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="inline-block"
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}