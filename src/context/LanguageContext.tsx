import { useState, createContext, useContext, ReactNode } from 'react';
import { translations, Language } from '../data/translations';
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)['en'];
};
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
const LANGUAGE_STORAGE_KEY = 'athukorala-language';
function getInitialLanguage(): Language {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored && stored in translations ? (stored as Language) : 'en';
}
export function LanguageProvider({ children }: {children: ReactNode;}) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const setLanguage = (lang: Language) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    setLanguageState(lang);
  };
  const value = {
    language,
    setLanguage,
    t: translations[language]
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}