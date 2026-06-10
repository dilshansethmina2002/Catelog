import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Award } from 'lucide-react';
import { useParams } from 'react-router-dom';

// JSON ෆයිල් එක import කරගන්නවා
import productsData from '../data/products.json'; 

// --- COMPONENTS ---

const TeaLeafSvg = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    <path d="M50,5 C20,25 5,55 50,95 C95,55 80,25 50,5 Z" />
    <path d="M50,5 Q45,50 50,95 M50,25 Q70,35 80,30 M50,45 Q75,55 80,50 M50,65 Q70,75 75,70 M50,25 Q30,35 20,30 M50,45 Q25,55 20,50 M50,65 Q30,75 25,70"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
  </svg>
);

const FloatingParticle = ({ delay = 0, className = "" }: { delay?: number, className?: string }) => (
  <motion.div
    className={`absolute ${className} pointer-events-none z-10`}
    whileInView={{
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
    }}
    viewport={{ once: false }}
    transition={{
      duration: 5,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className="w-full h-full rounded-full bg-amber-400 blur-[1px] shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
  </motion.div>
);

export function HeroSection() {
  const { t } = useLanguage(); 
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const { id } = useParams(); 

  const featuredProduct = productsData.find((p) => p.id === id) || productsData[0]; 
  
  const nameParts = t.hero.title.split(' ');
  const firstWord = nameParts[0]; 
  const restOfName = nameParts.slice(1).join(' '); 

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const yLead = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    // මුලින්ම තිබ්බ 'pl-10' ඉවත් කර responsive padding (px-4 sm:px-6 lg:px-8) එකතු කළා
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#f0fdf4] py-12 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">

      {/* LIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-emerald-50 to-teal-50">
        {/* Soft Orbs - කුඩා screen වලදී ප්‍රමාණය සහ පිහිටීම responsive කළා */}
        <div className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-yellow-100/40 rounded-full blur-[50px] sm:blur-[80px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-emerald-100/40 rounded-full blur-[40px] sm:blur-[60px]" />
      </div>

      {/* Container එක මැදට ගන්න 'lg:ml-10' ඉවත් කරලා 'max-w-7xl mx-auto' දුන්නා */}
      <div className="w-full max-w-7xl mx-auto relative z-10 pt-12 md:pt-16 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT: Content (Mobile වලදී මේක පල්ලෙහාට යනවා, Image එක උඩට එනවා) */}
          <motion.div
            style={isMobile ? {} : { y: yLead }}
            className="lg:col-span-6 text-center lg:text-left space-y-5 sm:space-y-6 relative order-2 lg:order-1 max-w-xl mx-auto lg:mx-0"
          >
            {/* Main Headline */}
            <div className="relative">
              {/* Mobile වලදී අකුරු එක මත එක නොවැදෙන්න leading-[1.1] දීලා විශාල screen වලදී leading-[0.95] කළා */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.1] lg:leading-[0.95] text-emerald-950 font-serif">
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
                    className="block italic text-emerald-600 font-[family-name:var(--font-serif-italic)] pb-1"
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
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0 font-light px-2 sm:px-0"
            >
              {t.hero.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-start pt-2 px-4 sm:px-0"
            >
              {/* Mobile වලදී button එක thumb එකෙන් ඔබන්න ලේසි වෙන්න 'w-full sm:w-auto' (full width) කළා */}
              <button
                onClick={() => document.getElementById('brewing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto text-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/20 rounded-sm active:scale-[0.98]"
              >
                {t.hero.cta} 
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Product Stage (Mobile වලදී මේක උඩට එනවා - order-1) */}
          <div className="lg:col-span-6 relative h-[280px] sm:h-[420px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">

            {/* Ambient Animated Rings */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
              {/* Responsive Ring widths using layout limits */}
              <motion.div
                whileInView={{ rotate: 360 }}
                viewport={{ once: false }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[75vw] h-[75vw] max-w-[280px] max-h-[280px] sm:max-w-[450px] sm:max-h-[450px] lg:max-w-[550px] lg:max-h-[550px] rounded-full border-[1px] border-emerald-900/5"
              />
              <motion.div
                whileInView={{ rotate: -360 }}
                viewport={{ once: false }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[65vw] h-[65vw] max-w-[240px] max-h-[240px] sm:max-w-[380px] sm:max-h-[380px] lg:max-w-[480px] lg:max-h-[480px] rounded-full border border-dashed border-emerald-800/20 opacity-60"
              />
              <div className="absolute w-[55vw] h-[55vw] max-w-[200px] max-h-[200px] sm:max-w-[320px] sm:max-h-[320px] lg:max-w-[420px] lg:max-h-[420px] rounded-full border-[2px] border-emerald-50/10 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                <div className="absolute inset-2 sm:inset-4 rounded-full border border-amber-500/20" />
              </div>
              <motion.div
                whileInView={{ rotate: 360 }}
                viewport={{ once: false }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[60vw] h-[60vw] max-w-[220px] max-h-[220px] sm:max-w-[350px] sm:max-h-[350px] lg:max-w-[440px] lg:max-h-[440px] rounded-full border-[1px] border-transparent border-t-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
              />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <FloatingParticle className="top-[15%] right-[20%] w-1.5 h-1.5 sm:w-2 sm:h-2" delay={0} />
              <FloatingParticle className="bottom-[25%] left-[15%] w-2 h-2 sm:w-3 sm:h-3" delay={2} />
              <FloatingParticle className="top-[55%] left-[10%] w-1 h-1 sm:w-1.5 sm:h-1.5" delay={1.5} />
            </div>

            {/* Product Image - Centered & Floating */}
            <motion.div
              className="relative z-20 group flex items-center justify-center w-full"
              whileInView={{ y: [0, -8, 0] }}
              viewport={{ once: false }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* SPOTLIGHT BACKDROP */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[260px] lg:w-[300px] h-[220px] sm:h-[360px] lg:h-[400px] bg-white/60 blur-[40px] sm:blur-[60px] rounded-full z-0 pointer-events-none" />

              <img
                src={featuredProduct.image}
                alt={t.hero.title}
                loading="eager"
                decoding="async"
                className="w-[65%] sm:w-[55%] lg:w-[85%] h-auto max-w-[240px] sm:max-w-[380px] lg:max-w-[450px] drop-shadow-2xl mx-auto relative z-10"
              />

              {/* Pulsing Shadow */}
              <motion.div
                whileInView={{ scale: [1, 0.9, 1], opacity: [0.6, 0.4, 0.6] }}
                viewport={{ once: false }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 sm: -bottom-6 left-1/2 -translate-x-1/2 w-[50%] h-[12px] sm:h-[20px] bg-emerald-950/20 blur-md sm:blur-lg rounded-[100%] z-[-1]"
              />
            </motion.div>

            {/* Verified Badge - Mobile වලදී රින්ග්ස් වලට උඩින් ලස්සනට පේන්න responsive placement දුන්නා */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute top-[-4%] right-[8%] sm:top-[2%] sm:right-[18%] lg:top-[0%] lg:right-[5%] z-30 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/40 backdrop-blur-md shadow-xl flex items-center justify-center border border-white/40"
            >
              <div className="text-center">
                <Award className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-500 mx-auto mb-0.5" />
                <span className="block text-[5px] sm:text-[7px] lg:text-[8px] font-bold text-slate-800 uppercase tracking-widest">Export</span>
                <span className="block text-[5px] sm:text-[7px] lg:text-[8px] font-bold text-slate-400 uppercase">Quality</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
}