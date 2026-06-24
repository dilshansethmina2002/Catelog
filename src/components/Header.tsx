import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg12 from '.././assets/athu.png';
import { LanguageSelector } from './LanguageSelector';
import productsData from '../data/products.json';
import { useLanguage } from '../context/LanguageContext';
import { productTranslations } from '../data/productTranslations';

export const Header: React.FC = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = /^\/product\//.test(location.pathname);
  const isQRPage = location.pathname === '/admin/qr';

  const filteredProducts = searchQuery.trim()
    ? productsData.filter(p => {
        const query = searchQuery.toLowerCase();
        const localizedName = (productTranslations[p.id]?.[language]?.name || p.name).toLowerCase();
        const englishName = (productTranslations[p.id]?.['en']?.name || p.name).toLowerCase();
        return localizedName.includes(query) || englishName.includes(query);
      })
    : isProductPage ? productsData : [];

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    if (isQRPage) {
      document.getElementById(`qr-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      navigate(`/product/${id}`);
    }
    setSearchOpen(false);
    setSearchQuery('');
  };

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
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 pointer-events-none">
        <div
          className="h-full bg-amber-400/70 transition-all duration-100 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Fixed height ensures a sleek, uniform bar. pointer-events-auto re-enables clicks inside the glass */}
      <div className="w-full px-4 sm:px-6 h-14 sm:h-16 flex items-center pointer-events-auto">

        {/* Brand Area */}
        <div className="flex-1 flex items-center gap-3 sm:gap-4 group cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-300 min-w-0">

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

        {/* Center: Home + Let's Make Tea */}
        <div className="hidden sm:flex items-center gap-2">
          <Link
            to="/catalog"
            className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 hover:bg-white/20 transition-colors text-xs font-bold uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            {t.nav.home}
          </Link>
          {isProductPage && (
            <button
              onClick={() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 hover:bg-white/20 transition-colors text-xs font-bold uppercase"
            >
              {t.hero.cta}
              <span className="w-4 h-4 flex items-center justify-center bg-amber-400 text-emerald-950 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          )}
        </div>

        {/* Right: Language Selector + Search */}
        <div className="flex-1 flex items-center justify-end gap-2">
          {!isQRPage && <LanguageSelector />}

          {/* Search */}
          <div className="relative hidden sm:block" ref={searchRef}>
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 hover:bg-white/20 transition-colors text-xs font-bold uppercase"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                {t.nav.search}
              </button>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 flex-shrink-0">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={t.nav.searchPlaceholder}
                  className="w-36 text-xs text-white/90 bg-transparent outline-none placeholder:text-white/40 font-medium"
                />
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="text-white/50 hover:text-white/90 transition-colors flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            )}

            {/* Dropdown */}
            {searchOpen && (searchQuery.trim() || isProductPage) && (
              <div className="absolute right-0 mt-2 w-64 bg-black/50 backdrop-blur-xl rounded-xl shadow-xl border border-white/15 z-50 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent max-h-60 overflow-hidden">
                <div className="max-h-60 overflow-y-auto py-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-amber-400/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                      <button
                        key={product.id}
                        onClick={() => handleSelect(product.id)}
                        className="group w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-amber-400/10 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 flex-shrink-0">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                        </svg>
                        <span className="text-xs text-amber-400 font-semibold truncate hover:text-amber-300 transition-colors">{productTranslations[product.id]?.[language]?.name || product.name}</span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-xs text-emerald-300/70">{t.nav.noProductsFound}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};
