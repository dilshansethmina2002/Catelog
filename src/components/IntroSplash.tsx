import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import athuLogo from '../assets/athu.png';

type Stage = 'closed' | 'opening' | 'revealing' | 'done';

// Cover fills almost the entire screen, capped so it doesn't look absurd on huge monitors.
const COVER_W = 'min(94vw, 1100px)';
const COVER_H = 'min(92vh, 900px)';

const FLOATING_LEAVES = [
  { top: '10%', left: '8%', size: 30, delay: 0, duration: 7, rotate: -18 },
  { top: '16%', left: '88%', size: 22, delay: 0.8, duration: 8.5, rotate: 24 },
  { top: '66%', left: '5%', size: 26, delay: 1.6, duration: 7.8, rotate: 12 },
  { top: '78%', left: '90%', size: 32, delay: 0.4, duration: 9, rotate: -26 },
  { top: '42%', left: '2%', size: 18, delay: 2.2, duration: 6.5, rotate: 8 },
  { top: '34%', left: '95%', size: 24, delay: 1.2, duration: 7.2, rotate: -14 },
  { top: '6%', left: '45%', size: 16, delay: 1.9, duration: 6.8, rotate: 20 },
  { top: '90%', left: '38%', size: 20, delay: 0.6, duration: 8, rotate: -10 },
  { top: '55%', left: '15%', size: 14, delay: 2.6, duration: 7.4, rotate: 16 },
  { top: '28%', left: '75%', size: 18, delay: 1.0, duration: 7.9, rotate: -22 },
];

function CoverPage({ showHint }: { showHint: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Leather base — aged, mottled, uneven, dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 15%, rgba(255,255,255,0.04), transparent 35%), radial-gradient(circle at 85% 10%, rgba(0,0,0,0.4), transparent 40%), radial-gradient(circle at 75% 90%, rgba(0,0,0,0.5), transparent 45%), radial-gradient(circle at 10% 80%, rgba(35,50,38,0.3), transparent 40%), radial-gradient(circle at 60% 55%, rgba(0,0,0,0.2), transparent 55%), linear-gradient(135deg, #3c2819 0%, #2a1a0e 50%, #180d05 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.6), inset 0 0 60px rgba(0,0,0,0.6)',
        }}
      />
      {/* Worn scuff patches */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90px 60px at 30% 22%, rgba(210,175,120,0.4), transparent 70%), radial-gradient(ellipse 70px 110px at 88% 60%, rgba(210,175,120,0.32), transparent 70%), radial-gradient(ellipse 100px 70px at 15% 85%, rgba(90,115,90,0.4), transparent 70%), radial-gradient(ellipse 60px 60px at 60% 45%, rgba(0,0,0,0.3), transparent 70%), radial-gradient(ellipse 40px 90px at 45% 75%, rgba(0,0,0,0.25), transparent 70%)',
        }}
      />
      {/* Fine leather grain + cracks, strongly visible */}
      <div
        className="absolute inset-0 opacity-70 mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(0,0,0,0.45) 0px, transparent 1.5px, transparent 4px), repeating-linear-gradient(25deg, rgba(255,255,255,0.12) 0px, transparent 1px, transparent 5px), repeating-linear-gradient(72deg, rgba(0,0,0,0.25) 0px, transparent 1px, transparent 9px), repeating-linear-gradient(8deg, rgba(0,0,0,0.2) 0px, transparent 1px, transparent 14px)',
        }}
      />
      {/* Cracked patches — jagged hairline cracks in a few spots */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'repeating-linear-gradient(118deg, transparent 0 18px, rgba(0,0,0,0.5) 18px 19px, transparent 19px 40px)',
          maskImage:
            'radial-gradient(ellipse 90px 60px at 25% 30%, black, transparent 70%), radial-gradient(ellipse 70px 90px at 82% 70%, black, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90px 60px at 25% 30%, black, transparent 70%), radial-gradient(ellipse 70px 90px at 82% 70%, black, transparent 70%)',
        }}
      />
      {/* Worn vignette edges */}
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 80px 14px rgba(0,0,0,0.5)' }} />

      {/* Embossed border frame, tarnished bronze */}
      <div className="absolute inset-[18px] sm:inset-[28px] border border-[#a88b52]/30 rounded-[1px]" />
      <div className="absolute inset-[26px] sm:inset-[38px] border border-[#a88b52]/15 rounded-[1px]" />

      {/* Tarnished bronze corner ornaments */}
      {[
        'top-[30px] left-[30px] border-t border-l',
        'top-[30px] right-[30px] border-t border-r',
        'bottom-[30px] left-[30px] border-b border-l',
        'bottom-[30px] right-[30px] border-b border-r',
      ].map((pos, i) => (
        <div key={i} className={`absolute w-6 h-6 border-[#9c8249]/55 ${pos}`} />
      ))}

      {/* Spine shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Straps, worn leather */}
      <div className="absolute left-[-6px] top-[14%] w-[80px] h-[16px] bg-[#140d07] rounded-sm shadow-md rotate-[1deg]" style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.08), 0 2px 3px rgba(0,0,0,0.5)' }} />
      <div className="absolute left-[-6px] bottom-[14%] w-[80px] h-[16px] bg-[#140d07] rounded-sm shadow-md -rotate-[1deg]" style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.08), 0 2px 3px rgba(0,0,0,0.5)' }} />
      <div className="absolute right-[22px] top-[14%] w-[26px] h-[26px] -translate-y-[4px] rounded-full border-2 border-[#9c8249]/55" />
      <div className="absolute right-[22px] bottom-[14%] w-[26px] h-[26px] translate-y-[4px] rounded-full border-2 border-[#9c8249]/55" />

      {/* Emblem */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-7 px-3">
        <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-[#e8dcb8] border-[3px] border-[#9c8249]/70 shadow-[0_0_25px_rgba(0,0,0,0.5)] flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(0,0,0,0.5), inset 0 0 20px rgba(100,80,40,0.25)' }}>
          <img src={athuLogo} alt="Athukorala Tea" className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain opacity-90" />
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-full">
          <span className="h-[1px] w-5 sm:w-10 bg-[#9c8249]/50 block shrink-0" />
          <span className="text-[#c9b483]/90 text-base sm:text-xl lg:text-2xl uppercase tracking-[0.25em] sm:tracking-[0.3em] font-sans whitespace-nowrap">
            Athukorala Tea
          </span>
          <span className="h-[1px] w-5 sm:w-10 bg-[#9c8249]/50 block shrink-0" />
        </div>
        <span className="text-[#c9b483]/55 text-base sm:text-xl italic font-serif tracking-wide">
          The Tea Collection
        </span>
      </div>

      {showHint && (
        <motion.span
          className="absolute bottom-10 sm:bottom-14 left-0 right-0 text-center text-[#c9b483]/60 text-xs sm:text-sm uppercase tracking-[0.25em] font-sans"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Tap to open
        </motion.span>
      )}
    </div>
  );
}

export function IntroSplash({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<Stage>('closed');

  const handleOpen = () => {
    if (stage !== 'closed') return;
    setStage('opening');
  };

  // Lock body scroll while the intro overlay is up.
  useEffect(() => {
    if (stage === 'done') return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [stage]);

  const bookOpen = stage !== 'closed';

  return (
    <>
      {children}

      {stage !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-emerald-950 overflow-hidden"
          animate={{ opacity: stage === 'revealing' ? 0 : 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            if (stage === 'revealing') {
              setStage('done');
            }
          }}
        >
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:34px_34px]" />

          {/* Giant faint watermark title filling the backdrop, book-cover/poster style */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-serif font-bold text-amber-100 whitespace-nowrap"
              style={{ fontSize: 'clamp(32px, 13vw, 380px)', opacity: 0.045, letterSpacing: '0.02em' }}
            >
              ATHUKORALA
            </span>
          </div>

          {/* Floating tea leaves drifting around the scene */}
          {FLOATING_LEAVES.map((leaf, i) => (
            <motion.div
              key={i}
              className="absolute text-amber-300/40 pointer-events-none"
              style={{ top: leaf.top, left: leaf.left }}
              initial={{ opacity: 0, y: 0, rotate: leaf.rotate }}
              animate={
                bookOpen
                  ? { opacity: 0 }
                  : { opacity: 1, y: [-12, 12, -12], rotate: [leaf.rotate, leaf.rotate + 10, leaf.rotate] }
              }
              transition={
                bookOpen
                  ? { duration: 0.4 }
                  : { duration: leaf.duration, delay: leaf.delay, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <Leaf size={leaf.size} strokeWidth={1.1} />
            </motion.div>
          ))}

          <div style={{ perspective: 2200 }}>
            <motion.button
              type="button"
              aria-label="Enter the Athukorala Tea catalog"
              onClick={handleOpen}
              className={`relative block p-0 m-0 border-0 bg-transparent appearance-none ${stage === 'closed' ? 'cursor-pointer' : ''}`}
              style={{
                width: COVER_W,
                height: COVER_H,
                transformOrigin: 'left center',
              }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={
                stage === 'closed'
                  ? { opacity: 1, scale: 1, y: 0, rotateY: 0 }
                  : { opacity: [1, 1, 0], scale: 1, y: [0, -18, -18], rotateY: [0, 0, -112] }
              }
              transition={
                stage === 'closed'
                  ? { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                  : { duration: 1.1, times: [0, 0.2, 1], ease: 'easeInOut' }
              }
              onAnimationComplete={() => {
                if (stage === 'opening') setStage('revealing');
              }}
            >
              {/* Grounded soft shadow beneath the book */}
              <div
                className="absolute rounded-[50%] bg-black/50 blur-2xl"
                style={{ width: '85%', height: '40px', bottom: '-3%', left: '50%', transform: 'translateX(-50%)' }}
              />
              <CoverPage showHint={stage === 'closed'} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
