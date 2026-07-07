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
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false); // Mobile Menu State

  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = /^\/product\//.test(location.pathname);
  const isQRPage = location.pathname === '/admin/qr';
  const isHomePage = location.pathname === '/';
  const isCatalogPage = location.pathname === '/catalog';

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
      setScrolled(currentScrollY > 12);

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setMobileMenuOpen(false); // Hide mobile menu on scroll down
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
    } else if (isCatalogPage) {
      setSearchOpen(false);
      setSearchQuery('');
      setMobileMenuOpen(false);
      setTimeout(() => {
        document.getElementById(`catalog-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return;
    } else {
      navigate(`/product/${id}`);
    }
    setSearchOpen(false);
    setSearchQuery('');
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none
        bg-[#0c1410]/80 backdrop-blur-2xl saturate-150
        ${scrolled ? 'border-b border-[#d4af6a]/15' : 'border-b border-transparent'}
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Signature hairline — gold thread that fills as you scroll, not a glowing bar */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#3d4f43]/40 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#d4af6a]/40 via-[#d4af6a] to-[#f0d99a] transition-all duration-150 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="w-full px-5 sm:px-8 h-16 sm:h-20 flex items-center pointer-events-auto justify-between">
        {/* Brand Area */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer min-w-0"
        >
          {/* Brass monogram seal — signature element, replaces the plain logo crop */}
          <div className="relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d4af6a]/50 bg-gradient-to-br from-[#1a2b22] to-[#0c1410] flex items-center justify-center transition-all duration-300 group-hover:border-[#d4af6a]/90">
            <div className="absolute inset-[3px] rounded-full border border-[#d4af6a]/20" />
            <img
              src={logoImg12}
              alt="Athukorala Logo"
              className="w-5 h-5 sm:w-[22px] sm:h-[22px] object-contain opacity-90"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span
              className="font-serif text-base sm:text-lg tracking-tight text-[#f5f0e6] truncate leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            >
              Athukorala Group
              <span className="hidden sm:inline font-normal text-[#f5f0e6]/60 italic"> (PVT) LTD.</span>
            </span>
            <span className="text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.25em] text-[#d4af6a]/70 truncate mt-1">
              {t.nav.tagline}
            </span>
          </div>
        </div>

        {/* Desktop: Home + Let's Make Tea, separated by a diamond divider */}
        <div className="hidden sm:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#f5f0e6]/75 hover:text-[#f5f0e6] transition-colors duration-300 text-[11px] font-semibold uppercase tracking-[0.18em]"
          >
            {t.nav.home}
          </Link>
          <span className="w-1 h-1 rotate-45 bg-[#d4af6a]/40" />
          <Link
            to="/spices"
            className="flex items-center gap-2 text-[#f5f0e6]/75 hover:text-[#f5f0e6] transition-colors duration-300 text-[11px] font-semibold uppercase tracking-[0.18em]"
          >
            {t.nav.spices}
          </Link>

          {isProductPage && (
            <>
              <span className="w-1 h-1 rotate-45 bg-[#d4af6a]/40" />
              <button
                onClick={() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full border border-[#d4af6a]/40 text-[#f0d99a] hover:border-[#d4af6a]/80 hover:bg-[#d4af6a]/5 transition-all duration-300 text-[11px] font-semibold uppercase tracking-[0.18em]"
              >
                {t.hero.cta}
                <span className="w-5 h-5 flex items-center justify-center bg-[#d4af6a] text-[#0c1410] rounded-full flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </>
          )}
        </div>

        {/* Right: Language Selector + Desktop Search + Hamburger */}
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          {/* Desktop Search */}
          {!isHomePage && <div className="relative hidden sm:block" ref={searchRef}>
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#3d4f43] text-[#f5f0e6]/70 hover:text-[#d4af6a] hover:border-[#d4af6a]/50 transition-all duration-300"
                aria-label={t.nav.search}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </button>
            ) : (
              <div className="flex items-center gap-2 pl-4 pr-2 py-2 rounded-full border border-[#d4af6a]/40 bg-[#1a2b22]/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af6a]/70 flex-shrink-0">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={t.nav.searchPlaceholder}
                  className="w-36 text-xs text-[#f5f0e6] bg-transparent outline-none placeholder:text-[#f5f0e6]/35 font-medium tracking-wide"
                />
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="text-[#f5f0e6]/40 hover:text-[#f5f0e6]/90 transition-colors flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            )}

            {/* Desktop Search Dropdown */}
            {searchOpen && (searchQuery.trim() || isProductPage) && (
              <div className="absolute right-0 mt-3 w-72 bg-[#0c1410]/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/40 border border-[#d4af6a]/15 z-50 max-h-64 overflow-hidden">
                <div className="max-h-64 overflow-y-auto py-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#d4af6a]/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, idx) => (
                      <button
                        key={product.id}
                        onClick={() => handleSelect(product.id)}
                        className="group w-full px-5 py-3 text-left flex items-center gap-3 hover:bg-[#d4af6a]/[0.06] transition-colors border-b border-[#3d4f43]/30 last:border-0"
                      >
                        <span className="text-[9px] text-[#7a8d80] tabular-nums w-4 flex-shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="text-xs text-[#f0d99a] font-medium tracking-wide truncate group-hover:text-[#d4af6a] transition-colors">
                          {productTranslations[product.id]?.[language]?.name || product.name}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="px-5 py-4 text-xs text-[#7a8d80] tracking-wide">{t.nav.noProductsFound}</div>
                  )}
                </div>
              </div>
            )}
          </div>}
          {!isQRPage && <LanguageSelector />}

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[#3d4f43] text-[#f5f0e6]/80 hover:border-[#d4af6a]/50 transition-colors"
            aria-label={t.common.toggleMenu}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-[#0c1410]/97 backdrop-blur-3xl border-b border-[#d4af6a]/10 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 flex flex-col gap-4">
          {/* Mobile Search */}
          {!isHomePage && <div className="flex items-center gap-2 px-4 py-3 bg-[#1a2b22]/60 border border-[#3d4f43]/50 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af6a]/60 flex-shrink-0">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.nav.searchPlaceholder}
              className="flex-1 text-sm text-[#f5f0e6] bg-transparent outline-none placeholder:text-[#f5f0e6]/35 font-medium tracking-wide"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-[#f5f0e6]/40 hover:text-[#f5f0e6]/90 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            )}
          </div>}

          {/* Mobile Search Results */}
          {!isHomePage && searchQuery.trim() && (
            <div className="max-h-48 overflow-y-auto bg-[#1a2b22]/40 rounded-2xl border border-[#3d4f43]/40">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product.id)}
                    className="w-full px-4 py-3.5 text-left flex items-center gap-3 border-b border-[#3d4f43]/30 last:border-0 active:bg-[#d4af6a]/5"
                  >
                    <span className="text-[9px] text-[#7a8d80] tabular-nums w-4">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-[#f0d99a] font-medium tracking-wide">
                      {productTranslations[product.id]?.[language]?.name || product.name}
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3.5 text-sm text-[#7a8d80]">{t.nav.noProductsFound}</div>
              )}
            </div>
          )}

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-2 mt-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3.5 text-[#f5f0e6]/90 border border-[#3d4f43]/50 rounded-2xl hover:border-[#d4af6a]/40 active:bg-[#d4af6a]/5 transition-colors font-semibold uppercase tracking-[0.18em] text-[11px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              {t.nav.home}
            </Link>

            <Link
              to="/spices"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3.5 text-[#f5f0e6]/90 border border-[#3d4f43]/50 rounded-2xl hover:border-[#d4af6a]/40 active:bg-[#d4af6a]/5 transition-colors font-semibold uppercase tracking-[0.18em] text-[11px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                <path d="M12 8v4l3 3"/>
              </svg>
              {t.nav.spices}
            </Link>

            {isProductPage && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-[#d4af6a] to-[#f0d99a] text-[#0c1410] rounded-2xl font-bold uppercase tracking-[0.18em] text-[11px] shadow-lg shadow-[#d4af6a]/10 active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                  {t.hero.cta}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};