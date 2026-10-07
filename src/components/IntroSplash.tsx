import React, { useState } from 'react';
import { motion } from 'framer-motion';
import athuLogo from '../assets/athu.png';

const SESSION_KEY = 'athukorala_intro_seen';

type Stage = 'closed' | 'opening' | 'closing' | 'done';

export function IntroSplash({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<Stage>(() =>
    sessionStorage.getItem(SESSION_KEY) === 'true' ? 'done' : 'closed'
  );

  const handleOpen = () => {
    if (stage !== 'closed') return;
    setStage('opening');
  };

  const bookOpen = stage === 'opening' || stage === 'closing';

  return (
    <>
      {children}

      {stage !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-emerald-950"
          style={{ perspective: 1800 }}
          animate={{ opacity: stage === 'closing' ? 0 : 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            if (stage === 'closing') {
              sessionStorage.setItem(SESSION_KEY, 'true');
              setStage('done');
            }
          }}
        >
          {/* Cream page revealed as the cover opens */}
          <motion.div
            className="absolute w-[300px] h-[420px] sm:w-[340px] sm:h-[470px] rounded-[2px] bg-[#f3e9d2] shadow-[inset_0_0_40px_rgba(0,0,0,0.15)]"
            animate={{ opacity: bookOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          />

          {/* Book cover */}
          <motion.button
            type="button"
            aria-label="Enter the Athukorala Tea catalog"
            onClick={handleOpen}
            className="relative w-[300px] h-[420px] sm:w-[340px] sm:h-[470px] cursor-pointer focus:outline-none"
            style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
            animate={{ rotateY: bookOpen ? -115 : 0, opacity: bookOpen ? 0 : 1 }}
            transition={{ duration: 0.9, delay: stage === 'opening' ? 0.15 : 0, ease: [0.45, 0, 0.2, 1] }}
            whileHover={stage === 'closed' ? { scale: 1.015 } : {}}
            onAnimationComplete={() => {
              if (stage === 'opening') setStage('closing');
            }}
          >
            {/* Leather texture */}
            <div
              className="absolute inset-0 rounded-[2px]"
              style={{
                background:
                  'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.05), transparent 40%), radial-gradient(circle at 80% 85%, rgba(0,0,0,0.3), transparent 45%), linear-gradient(135deg, #5a3620 0%, #3c2414 55%, #2a1a0e 100%)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(0,0,0,0.4)',
              }}
            />

            {/* Embossed border frame */}
            <div className="absolute inset-[14px] border border-amber-200/20 rounded-[1px]" />
            <div className="absolute inset-[20px] border border-amber-200/10 rounded-[1px]" />

            {/* Spine shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 to-transparent" />

            {/* Straps */}
            <div className="absolute left-[-6px] top-[70px] w-[70px] h-[14px] bg-[#1d130b] rounded-sm shadow-md rotate-[1deg]" />
            <div className="absolute left-[-6px] bottom-[70px] w-[70px] h-[14px] bg-[#1d130b] rounded-sm shadow-md -rotate-[1deg]" />
            <div className="absolute right-[18px] top-[70px] w-[22px] h-[22px] -translate-y-[4px] rounded-full border-2 border-amber-300/50" />
            <div className="absolute right-[18px] bottom-[70px] w-[22px] h-[22px] translate-y-[4px] rounded-full border-2 border-amber-300/50" />

            {/* Emblem */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f3e9d2] border-[3px] border-amber-300/70 shadow-[0_0_25px_rgba(0,0,0,0.4)] flex items-center justify-center">
                <img src={athuLogo} alt="Athukorala Tea" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
              </div>
              <span className="text-amber-200/80 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans">
                Athukorala Tea
              </span>
            </div>

            {stage === 'closed' && (
              <motion.span
                className="absolute bottom-7 left-0 right-0 text-center text-amber-100/60 text-[10px] uppercase tracking-[0.25em] font-sans"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                Tap to open
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      )}
    </>
  );
}
