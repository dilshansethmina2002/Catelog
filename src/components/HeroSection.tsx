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

  const featuredProduct = productsData.find((p) => p.id === id) || productsData[0]; 
  const productName = featuredProduct.name || t.hero.title || "Ceylon Green Tea with Lemongrass";
  
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
    <div className="relative min-h-[100vh] flex flex-col md:flex-row overflow-hidden bg-emerald-950 font-sans">
      
      {/* ======================================= */}
      {/* LEFT SIDE: Deep Green Typography Panel  */}
      {/* ======================================= */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-24 md:py-0 relative z-10 order-2 md:order-1 bg-emerald-950">
        
        {/* Subtle background texture/pattern (Optional) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_left,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <motion.div
          style={isMobile ? {} : { y: yLead }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full max-w-xl" 
        >
          {/* Label / Overline */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-amber-400/60 block"></span>
            <span className="text-amber-400/90 uppercase tracking-[0.3em] text-xs font-bold">
              Premium Collection
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-8">
            <span className="block font-medium">
              {firstWord}
            </span>
            <span 
              className="block italic text-emerald-200 mt-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {restOfName}
            </span>
          </motion.h1>

          {/* Description (Uncommented and styled for dark background) */}
          <motion.p variants={itemVariants} className="text-base md:text-lg text-emerald-100/70 leading-relaxed font-light mb-12 max-w-md">
            {featuredProduct.description || "Experience the pure essence of Sri Lanka. Hand-plucked leaves blended with natural botanicals for a deeply refreshing cup."}
          </motion.p>

          {/* Call to Action Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-6 px-8 py-4 bg-emerald-800/40 hover:bg-emerald-800 border border-emerald-700/50 rounded-full transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-sm font-bold tracking-widest uppercase text-white">
                {t.hero.cta || "Let's Make Tea"}
              </span>
              
              {/* Arrow Icon */}
              <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-amber-400 text-emerald-950 rounded-full transition-transform duration-300 group-hover:translate-x-2">
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
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden order-1 md:order-2">
        {/* Animated background image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${roseTeaImg})`,
            scale: isMobile ? 1 : scaleImage
          }}
        />
        
        {/* Very subtle inner shadow to frame the image nicely against the hard split */}
        <div className="absolute inset-0 shadow-[inset_20px_0_40px_rgba(0,0,0,0.15)] md:block hidden pointer-events-none"></div>
      </div>

    </div>
  );
}