import React, { useState, useEffect } from 'react';
import logoImg12 from '.././assets/athu.png';
import { LanguageSelector } from './LanguageSelector'; // Ensure this path is correct for your project

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }

      if (currentScrollY < 20) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    // මොබයිල් එකේදී උඩින් තියෙන හිස් ඉඩ (pt-2 px-2) කර ස්ක්‍රීන් එක ආරක්ෂා කර ඇත
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-2 sm:pt-4 px-2 sm:px-4 md:px-8 pointer-events-none ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0'
      }`}
    >
      <div className="mx-auto max-w-8xl pointer-events-auto">
        
        {/* මොබයිල් එකේදී Pill එක ඇතුළේ padding (px-3 py-1.5) කර ඉඩකඩ ලබාගෙන ඇත */}
        <div className="bg-[#0f3824]/85 backdrop-blur-md border border-[#1b5e3d]/50 shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 flex justify-between items-center transition-all duration-500 hover:border-[#227a4f]/60">
          
          {/* Brand & Logo Area - මොබයිල් එකේදී gap-2 කර ඇත */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 group cursor-pointer min-w-0">
            
            {/* Refined Logo Container */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* මොබයිල් එකේදී ලෝගෝ එක w-8 h-8 (32px) දක්වා responsive කර ඇත */}
              <img
                src={logoImg12}
                alt="Athukorala Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-green-700/50 bg-white/5 shadow-inner object-contain relative z-10 transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            {/* Company Branding - 'min-w-0' යෙදීමෙන් පෙළ තෙරපීමේදී layout එක කැඩීම වළක්වයි */}
            <div className="flex flex-col justify-center min-w-0">
              {/* මොබයිල් එකේදී ප්‍රමාණය text-sm කර ඇත */}
              <span className="text-sm sm:text-base md:text-xl font-serif font-bold tracking-wide text-white transition-colors group-hover:text-green-50 truncate sm:whitespace-normal">
                Athukorala Group <span className="hidden lg:inline text-white/80 font-normal text-lg">(Pvt) Ltd</span>
              </span>
              
              {/* වැදගත්ම වෙනස: මොබයිල් එකේදී අකුරු පරතරය tracking-wider කර, ප්‍රමාණය text-[7px] දක්වා අඩු කර, පේළි කැඩී යන ලෙස (leading-none) responsive කළා */}
              <span className="text-[7px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider sm:tracking-[0.25em] text-green-300/80 transition-colors group-hover:text-lime-300 mt-0.5 leading-none sm:leading-normal truncate sm:whitespace-normal">
                MANUFACTURERS AND EXPORTERS OF TEA
              </span>
            </div>
          </div>

          {/* Actions Area */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5 shrink-0 ml-2">
            <div className="h-6 w-px bg-green-800/60 hidden sm:block" />
            <div className="scale-85 sm:scale-90 md:scale-100 origin-right transition-transform">
              <LanguageSelector />
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};