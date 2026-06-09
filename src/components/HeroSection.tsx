import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Award } from 'lucide-react';
import logoImg from '../assets/purl.png';


const PRODUCT_IMAGE_URL = logoImg;

// --- COMPONENTS ---

// Custom Tea Leaf SVG
const TeaLeafSvg = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Main Leaf Body - Lanceolate shape with slight asymmetry */}
    <path d="M50,5 C20,25 5,55 50,95 C95,55 80,25 50,5 Z" />
    {/* Veins - Central and branching */}
    <path d="M50,5 Q45,50 50,95 M50,25 Q70,35 80,30 M50,45 Q75,55 80,50 M50,65 Q70,75 75,70 M50,25 Q30,35 20,30 M50,45 Q25,55 20,50 M50,65 Q30,75 25,70"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
  </svg>
);

const FloatingLeaf = ({ delay = 0, className = "" }: { delay?: number, className?: string }) => (
  <motion.div
    className={`absolute ${className} pointer-events-none opacity-90 z-10`}
    whileInView={{
      rotate: [0, 5, -5, 0],
      y: [0, -15, 0]
    }}
    viewport={{ once: false }}
    transition={{
      duration: 8,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <TeaLeafSvg className="w-full h-full text-amber-500 drop-shadow-md" />
  </motion.div>
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

const GlassBadge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-[2px] bg-white/60 border border-emerald-500/20 shadow-sm ${className}`}>
    {children}
  </div>
);

export function HeroSection() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const yLead = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#f0fdf4] pt-12 md:pt-12 lg:pt-32"> {/* Light Mint/Green Base */}

      {/* 1. LIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-emerald-50 to-teal-50">
        {/* Soft Orbs */}
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[80px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10"> {/* Removed redundant vertical padding */}
        <div className="grid lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center"> {/* Reduced gap on mobile */}

          {/* LEFT: Content */}
          <motion.div
            style={isMobile ? {} : { y: yLead }}
            className="lg:col-span-6 text-center lg:text-left space-y-4 sm:space-y-6 relative order-2 lg:order-1 pb-1 lg:pb-0" // Added bottom padding for mobile safety, reduced space-y
          >
            {/* Main Headline */}
            <div className="relative">
              <h1 className="text-4xl sm:text-7xl xl:text-8xl font-medium tracking-tight leading-[0.95] text-emerald-950 font-serif">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="block text-emerald-950"
                  >
                    {t.hero.title.split(' ')[0]} {/* "Royal" */}
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="block italic text-emerald-600 font-[family-name:var(--font-serif-italic)]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {t.hero.title.split(' ').slice(1).join(' ')} {/* "Purple Tea" */}
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light"
            >
              {t.hero.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <button
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/20 rounded-sm"
              >
                {t.hero.cta}
              </button>
            </motion.div>
          </motion.div>


          {/* RIGHT: Product Stage - AMBIENT & VISUALLY STABLE */}
          <div className="lg:col-span-6 relative h-[340px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">

            {/* Ambient Animated Rings - ABSOLUTELY CENTERED & RESPONSIVE */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">

              {/* Layer 1: Deep Slow Spin */}
              <motion.div
                whileInView={{ rotate: 360 }}
                viewport={{ once: false }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80vw] h-[80vw] max-w-[350px] max-h-[350px] sm:max-w-[550px] sm:max-h-[550px] rounded-full border-[1px] border-emerald-900/5"
              />

              {/* Layer 2: Reverse Dashed Spin */}
              <motion.div
                whileInView={{ rotate: -360 }}
                viewport={{ once: false }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[70vw] h-[70vw] max-w-[300px] max-h-[300px] sm:max-w-[480px] sm:max-h-[480px] rounded-full border border-dashed border-emerald-800/20 opacity-60"
              />

              {/* Layer 3: Main Structural Ring */}
              <div className="absolute w-[60vw] h-[60vw] max-w-[260px] max-h-[260px] sm:max-w-[420px] sm:max-h-[420px] rounded-full border-[2px] border-emerald-50/10 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                <div className="absolute inset-4 rounded-full border border-amber-500/20" />
              </div>

              {/* Layer 4: Front Glowing Track - Faster Spin */}
              <motion.div
                whileInView={{ rotate: 360 }}
                viewport={{ once: false }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[65vw] h-[65vw] max-w-[280px] max-h-[280px] sm:max-w-[440px] sm:max-h-[440px] rounded-full border-[1px] border-transparent border-t-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
              />
            </div>


            {/* Floating Particles - Simple Float */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <FloatingParticle className="top-[15%] right-[20%] w-2 h-2" delay={0} />
              <FloatingParticle className="bottom-[25%] left-[15%] w-3 h-3" delay={2} />
              <FloatingParticle className="top-[55%] left-[10%] w-1.5 h-1.5" delay={1.5} />
              <FloatingParticle className="top-[25%] right-[25%] opacity-50 w-1 h-1" delay={3} />
            </div>


            {/* Product Image - Centered & Floating */}
            <motion.div
              className="relative z-20 group"
              whileInView={{ y: [0, -10, 0] }}
              viewport={{ once: false }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* SPOTLIGHT BACKDROP */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[300px] h-[300px] sm:h-[400px] bg-white/60 blur-[60px] rounded-full z-0 pointer-events-none" />

              <img
                src={PRODUCT_IMAGE_URL}
                alt="Royal Purple Tea"
                loading="eager"
                decoding="async"
                className="w-[85%] h-auto max-w-[1120px] sm:max-w-[1120px] drop-shadow-2xl mx-auto relative z-10"
              />

              {/* REALISTIC UNDER-SHADOW - Pulsing with float */}
              <motion.div
                whileInView={{ scale: [1, 0.9, 1], opacity: [0.6, 0.4, 0.6] }}
                viewport={{ once: false }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-emerald-950/20 blur-lg rounded-[100%] z-[-1]"
              />
            </motion.div>

            {/* Verified Badge - Static Relative to Container */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute top-[0%] right-[5%] sm:top-[5%] sm:right-[15%] z-30 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center border border-emerald-50"
            >
              <div className="text-center">
                <Award className="w-5 h-5 sm:w-8 sm:h-8 text-amber-500 mx-auto mb-1" />
                <span className="block text-[6px] sm:text-[8px] font-bold text-slate-800 uppercase tracking-widest">Premium</span>
                <span className="block text-[6px] sm:text-[8px] font-bold text-slate-400 uppercase">Quality</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
}