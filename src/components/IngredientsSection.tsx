import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import logoImg from '../assets/tea.jpg'; // මේක හැම එකටම පොදුයි
import { useParams } from 'react-router-dom';

// JSON ෆයිල් එක import කරගන්නවා
import productsData from '../data/products.json';

export function IngredientsSection() {
  const { t, language } = useLanguage();

  const { id } = useParams();
  const featuredProduct = productsData.find((p) => p.id === id) || productsData[0];

  const isTea001 = !id || id === 'tea-001';
  const ingredientsList = (isTea001 || language !== 'en') ? t.ingredients.items : (featuredProduct.ingredients || t.ingredients.items);

  // JSON එකෙන් යට පින්තූරය ගන්නවා. ඒක නැත්නම් පරණ Unsplash පින්තූරය දානවා (Fallback)
  const dynamicIngredientImage = featuredProduct.ingredientImage || "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop";

  return (
    <Section
      id="ingredients"
      className="bg-emerald-950 text-white relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* Editorial Background Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-serif font-bold leading-none whitespace-nowrap absolute top-10 left-0">
          PURE NATURE
        </span>
      </div>

      {/* මොබයිල් වලදී px-4 කිනුත්, ලොකු ස්ක්‍රීන්වලදී px-6 කිනුත් පෑඩින් පාලනය කර ඇත */}
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Image Collage (මොබයිල් වලදී 'hidden' එක අයින් කර උස ප්‍රමාණය ස්වයංක්‍රීයව හැඩගැසෙන්න හැදුවා) */}
        <div className="lg:col-span-5 relative h-[320px] sm:h-[450px] lg:h-[600px] w-full order-1 lg:order-none">
          
          {/* ප්‍රධාන පින්තූරය (logoImg) - මොබයිල් වලදී border radius එක rounded-[40px] කර ඇත */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 w-3/4 h-3/4 rounded-t-[40px] sm:rounded-t-[100px] overflow-hidden z-10 border-r-4 border-t-4 border-amber-500/30"
          >
            <img
              src={logoImg}
              alt="Tea Ingredients"
              decoding="async"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
          
          {/* වෙනස් වන පින්තූරය (JSON එකෙන් එන පින්තූරය) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-emerald-900 rounded-b-[40px] sm:rounded-b-[100px] overflow-hidden z-20 border-l-4 border-b-4 border-emerald-700"
          >
            <img
              src={dynamicIngredientImage}
              alt="Tea Leaves"
              decoding="async"
              className="w-full h-full object-cover hover:scale-110 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 lg:pl-12 order-2 lg:order-none">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              {t.ingredients.composition}
            </span>
            
            {/* මොබයිල්වලදී text-3xl/leading-tight ලෙසත් ලොකු තිරවලදී text-7xl/leading-none ලෙසත් හැරේ */}
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 sm:mb-12 leading-tight lg:leading-none">
              {t.ingredients.title}
            </h2>

            {/* මොබයිල් එකේදී කරුණු අතර පරතරය space-y-6/8 දක්වා අඩු කර ඇත */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {ingredientsList.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group border-b border-emerald-800 pb-6 sm:pb-8 last:border-0"
                >
                  <div className="flex items-baseline gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <span className="text-amber-500 font-serif text-lg sm:text-xl italic">
                      0{index + 1}
                    </span>
                    {/* මොබයිල් මාතෘකා text-xl කර ඇත */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  {/* iPhone SE වැනි කුඩා තිරවලදී text එක තෙරපෙන්නේ නැති වෙන්න pl-6 දුන්නා */}
                  <p className="text-emerald-200/60 text-base sm:text-lg pl-6 sm:pl-10 leading-relaxed font-light max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}