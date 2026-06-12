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

  const yLead = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div 
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${roseTeaImg})` }}
    >
      
      {/* ======================================= */}
      {/* LEFT SIDE: Dark Overlay & Text Content  */}
      {/* ======================================= */}
      <div className="w-full md:w-1/2 flex items-center px-8 sm:px-12 md:px-16 py-24 relative z-10">
        
        {/* Darker, highly opaque green overlay for the strict left-side cut */}
        <div className="absolute inset-0 bg-[#162a20]/90 backdrop-blur-md"></div>
        
        <motion.div
          style={isMobile ? {} : { y: yLead }}
          className="relative z-20 flex flex-col items-start w-full max-w-md mt-10" 
        >
          {/* Main Headline - Constrained width forces the stacking */}
          <div className="mb-8 w-full max-w-[320px]">
            <h1 className="text-6xl sm:text-7xl font-normal tracking-tight text-white font-serif flex flex-col">
              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block text-white"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {firstWord}
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="block italic text-[#8be0b6] leading-[1.15]"
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
            className="text-[15px] sm:text-base text-gray-300 font-light leading-relaxed mb-10 max-w-[340px]"
          >
            {featuredProduct.description || "A refreshing blend of Ceylon Green Tea and zesty Lemongrass. Expertly crafted for a calming afternoon experience."} 
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-stretch rounded-full overflow-hidden active:scale-[0.97] transition-all shadow-lg"
            >
              <span className="px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#5a9c7c] hover:bg-[#4b8a6b] transition-colors flex items-center justify-center">
                {t.hero.cta || "LET'S MAKE TEA"}
              </span>
              
              <span className="w-10 flex items-center justify-center bg-[#8be0b6] text-emerald-950 flex-shrink-0">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
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
      {/* RIGHT SIDE: Clear Image View            */}
      {/* ======================================= */}
      <div className="hidden md:block w-1/2 h-full relative z-0">
        {/* Transparent container to maintain flex layout while showing the background image */}
      </div>

    </div>
  );
}