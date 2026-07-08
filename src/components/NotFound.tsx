import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-emerald-950 flex flex-col items-center justify-center text-white px-6 text-center"
    >
      <p className="text-8xl sm:text-9xl font-serif font-bold text-amber-400 mb-4 select-none">
        404
      </p>
      <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-3">
        {t.notFound.title}
      </h1>
      <p className="text-emerald-100/60 text-base sm:text-lg max-w-sm leading-relaxed mb-10">
        {t.notFound.message}
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-3 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold rounded-full transition-colors duration-200 text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        {t.notFound.goHome}
      </Link>
    </motion.div>
  );
}
