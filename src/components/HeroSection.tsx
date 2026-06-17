import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json'; 

// Fallback පින්තූරය (JSON එකේ image එකක් නැති වුණොත් පමණක් මෙය පෙන්වයි)
import roseTeaImg from '../assets/rosetea.jpeg'; 

export function HeroSection() {
  const { t } = useLanguage(); 
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const { id } = useParams(); 

  // 1. JSON එකෙන් Data ගැනීම
  const featuredProduct = productsData.find((p) => p.id === id) || productsData[0]; 
  
  // 2. Data Mapping (නම, විස්තරය, පින්තූරය සහ පැකට් වර්ගය)
  const productName = featuredProduct.name || t.hero.title || "Ceylon Green Tea";
  const displayImage = featuredProduct.image || roseTeaImg; // ✅ JSON පින්තූරය මෙතනින් ගනී
  const packType = featuredProduct.pack || "Premium Collection"; // ✅ Pack Type එක
  const description = featuredProduct.description || "Experience the pure essence of Sri Lanka. Hand-plucked leaves blended with natural botanicals for a deeply refreshing cup.";

  // නම වචන වලට කැඩීම (Styling සඳහා)
  const nameParts = productName.split(' ');
  const firstWord = nameParts[0]; 
  const restOfName = nameParts.slice(1).join(' '); 

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
    <div className="relative min-h-[100vh] flex flex-col md:flex-row overflow-hidden bg-emerald-950 font-sans pt-16 md:pt-0">
      
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
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full max-w-xl mx-auto md:mx-0" 
        >
          {/* Label / Overline - JSON එකෙන් එන Pack Type එක පෙන්නයි */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mt-20">
            <span className="h-[1px] w-8 sm:w-12 bg-amber-400/60 block"></span>
            <span className="text-amber-400/90 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-bold">
              Export Quality
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-amber-400/60 block"></span>
          </motion.div>

          {/* Main Headline - Mobile වල text-5xl දක්වා කුඩා වේ */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-6 sm:mb-8">
            <span className="block font-medium">
              {firstWord}
            </span>
            <span 
              className="block italic text-emerald-200 mt-1 sm:mt-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {restOfName}
            </span>
          </motion.h1>

          {/* Description - JSON එකෙන් Map වේ */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-emerald-100/70 leading-relaxed font-light mb-10 sm:mb-12 max-w-md">
            {description}
          </motion.p>

          {/* Call to Action Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-4 sm:gap-6 px-6 sm:px-8 py-3 sm:py-4 bg-emerald-800/40 hover:bg-emerald-800 border border-emerald-700/50 rounded-full transition-all duration-300 overflow-hidden w-full sm:w-auto justify-center sm:justify-start"
            >
              <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-white">
                {t.hero.cta || "Let's Make Tea"}
              </span>
              
              {/* Arrow Icon */}
              <span className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-amber-400 text-emerald-950 rounded-full transition-transform duration-300 group-hover:translate-x-2 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* ======================================= */}
      {/* RIGHT SIDE: Full Bleed Image            */}
      {/* ======================================= */}
      {/* ✅ Mobile Responsive Height: Mobile වලදී 45vh පමණක් ගෙන අකුරු වලට ඉඩ ලබා දේ */}
      <div className="w-full md:w-1/2 h-[45vh] sm:h-[50vh] md:h-screen relative overflow-hidden order-1 md:order-2 ">
        {/* Animated background image - JSON එකෙන් එන පින්තූරය මෙතනට වැටේ */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ 
            backgroundImage: `url(${displayImage})`,
            scale: isMobile ? 1 : scaleImage
          }}
        />
        
        {/* Very subtle inner shadow to frame the image nicely against the hard split */}
        <div className="absolute inset-0 shadow-[inset_20px_0_40px_rgba(0,0,0,0.15)] md:block hidden pointer-events-none"></div>
      </div>

    </div>
  );
}