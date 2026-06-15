import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json'; 
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
    <div className="relative min-h-[100vh] flex flex-col md:flex-row overflow-hidden bg-white">
      
      {/* ======================================= */}
      {/* LEFT SIDE: Text Content (White Background) */}
      {/* ======================================= */}
      <div 
        className="w-full md:w-1/2 flex justify-center items-center px-6 sm:px-10 md:px-16 py-20 md:py-0 relative z-10 order-2 md:order-1 bg-white ml-10"
      >
        
        <motion.div
          style={isMobile ? {} : { y: yLead }}
          className="text-left space-y-6 relative w-full flex flex-col items-start max-w-lg lg:max-w-2xl z-20" 
        >
          {/* Main Headline */}
          <div className="relative lg:pt-20">
            {/* සුදු පසුබිමට ගැළපෙන පරිදි තද කොළ පැහැති අකුරු (text-emerald-950) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.1] md:leading-[1.1] font-serif">
              <span className="block overflow-hidden pb-1 sm:pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block text-emerald-950"
                >
                  {firstWord} 
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  // ඉතිරි කොටස සඳහා ලස්සන කොළ පැහැයක් (text-emerald-600)
                  className="block italic text-emerald-600 font-[family-name:var(--font-serif-italic)] pb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {restOfName}
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Description (JSON එකෙන් Map වේ) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            // Description එක කියවීමට පහසු තද අළු පැහැයක් (text-slate-600)
            className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-light pr-4"
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
              className="group inline-flex items-center border border-emerald-600/30 rounded-full overflow-hidden active:scale-[0.97] transition-all hover:border-emerald-600 bg-emerald-600 shadow-xl shadow-emerald-900/10 w-full sm:w-auto"
            >
              <span className="flex-1 px-8 py-3.5 sm:py-3 text-sm font-bold tracking-widest uppercase text-white bg-transparent text-center sm:text-left">
                {t.hero.cta}
              </span>
              
              <span className="w-12 h-12 flex items-center justify-center bg-emerald-100 text-emerald-950 transition-colors group-hover:bg-amber-400 group-hover:text-emerald-950 flex-shrink-0">
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
      {/* RIGHT SIDE: Background Image (JSON එකෙන් Map වේ) */}
      {/* ======================================= */}
      <div 
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-cover bg-center bg-no-repeat order-1 md:order-2"
        style={{ backgroundImage: `url(${featuredProduct.image || roseTeaImg})` }}
      >
        {/* ✅ 1. Color Fade: වම් පස ඇති සුදු වර්ණය දකුණට ක්‍රමයෙන් මැකී යාම (Blend into white) */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/20 to-transparent pointer-events-none"></div>
        
        {/* ✅ 2. Blur Fade: වම් පස ඇති Blur එක දකුණට ක්‍රමයෙන් මැකී යාම */}
        <div className="absolute inset-0 backdrop-blur-[15px] [mask-image:linear-gradient(to_top,black_0%,transparent_15%)] md:[mask-image:linear-gradient(to_right,black_0%,transparent_30%)] pointer-events-none"></div>
      </div>

    </div>
  );
}