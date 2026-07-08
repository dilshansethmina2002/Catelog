import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import spicesData from '../data/spices.json';
import { productTranslations } from '../data/productTranslations';

// Fallback පින්තූරය (JSON එකේ image එකක් නැති වුණොත් පමණක් මෙය පෙන්වයි)
import roseTeaImg from '../assets/rosetea.jpeg';

export function HeroSection() {
  const { t, language } = useLanguage();
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const { id } = useParams();

  // 1. JSON එකෙන් Data ගැනීම
  const featuredProduct = productsData.find((p) => p.id === id) || spicesData.find((p) => p.id === id) || productsData.find((p) => p.id === 'tea-001') || productsData[0];
  const isSpicePage = !!spicesData.find((p) => p.id === id);

  // 2. Per-product translation lookup
  const productKey = id || 'tea-001';
  const translated = productTranslations[productKey]?.[language];

  // 3. Data Mapping (නම, විස්තරය, පින්තූරය සහ පැකට් වර්ගය)
  const productName = translated?.name || featuredProduct.name || t.hero.title;
  const displayImage = featuredProduct.image || roseTeaImg;
  const description = translated?.description || featuredProduct.description || t.hero.tagline;

  // CJK languages have no spaces — no letter-spacing on badge
  const isCJK = language === 'ja' || language === 'zh';
  const badgeTracking = isCJK ? 'tracking-normal' : 'tracking-[0.2em] sm:tracking-[0.3em]';

  // CJK characters are full-width so they need a much smaller font than Latin
  const titleSize = isCJK
    ? 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'
    : productName.length > 34
      ? 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'
      : productName.length > 24
        ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'
        : productName.length > 15
          ? 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'
          : 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl';

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Subtle parallax for the text content
  const yLead = useTransform(scrollY, [0, 500], [0, 100]);
  // Subtle zoom for the background image on scroll
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.05]);

  // Framer Motion variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative min-h-[100svh] flex flex-col md:flex-row overflow-hidden bg-emerald-950 font-sans pt-16 md:pt-0">
      
      {/* ======================================= */}
      {/* LEFT SIDE: Deep Green Typography Panel  */}
      {/* ======================================= */}
      {/* ✅ Mobile Responsive Padding: Mobile වලදී py-16 සහ Desktop වලදී py-0 */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-16 md:py-0 relative z-10 order-2 md:order-1 bg-emerald-950">
        
        {/* Subtle background texture/pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_left,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <motion.div
          style={isMobile ? {} : { y: yLead }}
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="relative z-20 w-full max-w-xl mx-auto md:mx-0"
        >
          {/* Label / Overline - JSON එකෙන් එන Pack Type එක පෙන්නයි */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="h-[1px] w-8 sm:w-12 bg-amber-400/60 block"></span>
            <span className={`text-amber-400/90 uppercase ${badgeTracking} text-[10px] sm:text-xs font-bold`}>
              {t.hero.exportQuality}
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-amber-400/60 block"></span>
          </motion.div>

          {/* Main Headline - Mobile වල text-5xl දක්වා කුඩා වේ */}
          <motion.h1 variants={itemVariants} className={`${titleSize} font-serif text-white leading-[1.05] tracking-tight mb-6 sm:mb-8`}>
            <span className="font-medium">{productName}</span>
          </motion.h1>

          {/* Description - JSON එකෙන් Map වේ */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-emerald-100/70 leading-relaxed font-light mb-6 sm:mb-8 max-w-md">
            {description}
          </motion.p>

          {/* Let's Make Tea CTA */}
          {!isSpicePage && (
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' })}
                animate={{
                  boxShadow: [
                    '0 0 0 0px rgba(251, 191, 36, 0)',
                    '0 0 0 8px rgba(251, 191, 36, 0.12)',
                    '0 0 0 0px rgba(251, 191, 36, 0)',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full max-w-md flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-sm sm:text-base font-bold uppercase tracking-[0.15em]">{t.hero.cta}</span>
                <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-amber-400 text-emerald-950 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          )}

        </motion.div>
      </div>

      {/* ======================================= */}
      {/* RIGHT SIDE: Full Bleed Image            */}
      {/* ======================================= */}
      {/* ✅ Mobile Responsive Height: Mobile වලදී 45vh පමණක් ගෙන අකුරු වලට ඉඩ ලබා දේ */}
      <div className="w-full md:w-1/2 h-[45vh] min-h-[200px] sm:h-[50vh] md:h-screen relative overflow-hidden order-1 md:order-2 lg:mt-10">
        {/* Product image — eager loaded so it appears immediately on navigation */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ scale: isMobile ? 1 : scaleImage }}
        >
          <img
            src={displayImage}
            alt={productName}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Very subtle inner shadow to frame the image nicely against the hard split */}
        <div className="absolute inset-0 shadow-[inset_20px_0_40px_rgba(0,0,0,0.15)] md:block hidden pointer-events-none"></div>
      </div>

    </div>
  );
}