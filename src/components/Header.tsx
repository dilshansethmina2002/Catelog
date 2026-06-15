import React, { useState, useEffect } from 'react';
import logoImg12 from '.././assets/athu.png';
import { LanguageSelector } from './LanguageSelector';

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
    <header 
      /* APPLE AESTHETIC: 
        Full width, high backdrop blur (frosted glass), 
        color saturation bump, and a hair-thin translucent border.
        Using a cubic-bezier easing for that buttery Apple animation.
      */
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none 
        bg-[#0a140f]/70 backdrop-blur-2xl saturate-150 border-b border-white/10
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Fixed height ensures a sleek, uniform bar. pointer-events-auto re-enables clicks inside the glass */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between pointer-events-auto">
        
        {/* Brand Area */}
        <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-300 min-w-0">
          
          {/* Logo - Minimalist, no glowing hover effects, just clean rendering */}
          <img
            src={logoImg12}
            alt="Athukorala Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm"
          />

          {/* Typography - System fonts, tight tracking for title, wide tracking for subtitle */}
          <div className="flex flex-col justify-center min-w-0">
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white/95 truncate">
              Athukorala Group <span className="hidden sm:inline font-normal text-white/70">Ltd.</span>
            </span>
            
            <span className="text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.15em] text-white/50 truncate mt-0.5">
              Manufacturers & Exporters of Tea
            </span>
          </div>
        </div>

        {/* Actions Area */}
        <div className="flex items-center shrink-0 ml-4">
          <div className="scale-90 sm:scale-100 origin-right opacity-80 hover:opacity-100 transition-opacity">
            <LanguageSelector />
          </div>
        </div>
        
      </div>
    </header>
  );
};