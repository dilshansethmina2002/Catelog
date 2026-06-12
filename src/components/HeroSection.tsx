import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';

// JSON ෆයිල් එක import කරගන්නවා
import productsData from '../data/products.json'; 

// ✅ පින්තූරය import කරගන්නවා (Background එක සඳහා)
import roseTeaImg from '../assets/rosetea.jpeg'; 

export function HeroSection() {
  const { t } = useLanguage(); 
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const { id } = useParams(); 

  // URL එකට අදාළ product එක JSON එකෙන් ගන්නවා
  const featuredProduct = productsData.find((p) => p.id === id) || productsData[0]; 
  
  // JSON එකේ තියෙන featuredProduct.name එක ගන්නවා
  const productName = featuredProduct.name || t.hero.title;
  const nameParts = productName.split(' ');
  const firstWord = nameParts[0]; 
  const restOfName = nameParts.slice(1).join(' '); 

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax effect එක (Text එක සඳහා)
  const yLead = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="relative min-h-[100vh] flex flex-col md:flex-row overflow-hidden bg-emerald-950">
      
      {/* ======================================= */}
      {/* LEFT SIDE: Text Content                */}
      {/* ======================================= */}
      <div 
        className="w-full md:w-1/2 flex justify-center items-center px-6 sm:px-10 md:px-16 py-20 md:py-0 relative z-10 order-2 md:order-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${roseTeaImg})` }}
      >
        
        {/* වම් පස සඳහා වූ අඳුරු සහ Blur Overlay එක */}
        <div className="absolute inset-0 bg-emerald-950/50 backdrop-blur-[10px]"></div>
        
        <motion.div
          style={isMobile ? {} : { y: yLead }}
          className="text-left space-y-6 relative w-full flex flex-col items-start max-w-lg lg:max-w-2xl z-20" 
        >
          {/* Main Headline */}
          <div className="relative lg:pt-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.1] md:leading-[1.1] text-white font-serif drop-shadow-lg">
              <span className="block overflow-hidden pb-1 sm:pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block text-white"
                >
                  {firstWord} 
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="block italic text-emerald-300 font-[family-name:var(--font-serif-italic)] pb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {restOfName}
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed font-light pr-4 drop-shadow-md"
          >
            {featuredProduct.description || t.hero.tagline} 
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-start pt-6 w-full"
          >
            <button
              onClick={() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center border border-emerald-400/50 rounded-full overflow-hidden active:scale-[0.97] transition-all hover:border-emerald-400 bg-emerald-600 shadow-xl w-full sm:w-auto"
            >
              <span className="flex-1 px-8 py-3.5 sm:py-3 text-sm font-bold tracking-widest uppercase text-white bg-transparent text-center sm:text-left">
                {t.hero.cta}
              </span>
              
              <span className="w-12 h-12 flex items-center justify-center bg-emerald-300 text-emerald-950 transition-colors group-hover:bg-amber-400 group-hover:text-emerald-950 flex-shrink-0">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* ======================================= */}
      {/* RIGHT SIDE: Background Image           */}
      {/* ======================================= */}
      <div 
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-cover bg-center bg-no-repeat order-1 md:order-2"
        style={{ backgroundImage: `url(${roseTeaImg})` }}
      >
        {/* ✅ 1. Color Fade: වම් පස අඳුරු වර්ණය දකුණට ක්‍රමයෙන් මැකී යාම */}
        {/* Mobile වලදී පහළ සිට ඉහළටත් (to-t), Desktop වලදී වමේ සිට දකුණටත් (to-r) fade වේ */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-emerald-950/50 via-emerald-950/20 to-transparent pointer-events-none"></div>
        
        {/* ✅ 2. Blur Fade: වම් පස ඇති Blur එක දකුණට ක්‍රමයෙන් මැකී යාම */}
        {/* CSS mask-image භාවිතා කර blur එක මැදින් කපා නොපෙනෙන සේ සුමට කර ඇත */}
        <div className="absolute inset-0 backdrop-blur-[15px] [mask-image:linear-gradient(to_top,black_0%,transparent_15%)] md:[mask-image:linear-gradient(to_right,black_0%,transparent_30%)] pointer-events-none"></div>
      </div>

    </div>
  );
}