import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';
const languages: {
  code: Language;
  label: string;
  flag: string;
}[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'zh', label: '中文', flag: '🇨🇳' }
  ];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showToast = useCallback((label: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(label);
    toastTimer.current = setTimeout(() => setToast(null), 2000);
  }, []);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="relative z-50" ref={containerRef}>
      <motion.button
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-emerald-100 text-emerald-800 hover:bg-white transition-colors">
        <span className="text-lg leading-none">{languages.find(l => l.code === language)?.flag}</span>
        <span className="text-xs font-bold uppercase">{language}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen &&
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.95
            }}
            transition={{
              duration: 0.2
            }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-emerald-100 overflow-hidden py-1">

            {languages.map((lang) =>
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  showToast(lang.label);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-emerald-50 transition-colors ${language === lang.code ? 'text-emerald-700 font-medium bg-emerald-50/50' : 'text-gray-600'}`}>
                <div className="flex items-center gap-3">
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <span>{lang.label}</span>
                </div>
                {language === lang.code && <Check className="w-4 h-4" />}
              </button>
            )}
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-emerald-900/90 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg z-[100] pointer-events-none whitespace-nowrap"
          >
            🌐 {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>);

}