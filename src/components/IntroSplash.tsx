import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Feather } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';
import athuLogo from '../assets/athu.png';

type Stage = 'closed' | 'tilting' | 'opening' | 'writing' | 'zooming' | 'revealing' | 'done';

const TILT_DEG = 56;
// 2D approximation of the "lying flat, viewed from above" tilt — a vertical squash
// instead of a real 3D rotateX, since react-pageflip injects its own internal
// perspective/transform contexts that visibly conflict with an ancestor's 3D transform.
const TILT_SCALE_Y = Math.cos((TILT_DEG * Math.PI) / 180);
const ZOOM_SCALE = 2.6;

// BOOK_W is the full open-book spread width (two pages side by side); BOOK_H is a single page's height.
const BOOK_W = 'clamp(300px, 92vw, 1400px)';
// react-pageflip always renders a page at HALF of the container width it's given in
// landscape/spread mode, even for a single "hard cover" page — it assumes a 2-page
// stage exists even when only showing one side of it. So to get a cover that actually
// *visually* measures COVER_VISIBLE_W, the container fed to the library must be double
// that, and the resulting left-shift (the page sits in the container's left half) needs
// a compensating negative margin to look centered.
const COVER_VISIBLE_W = 'clamp(240px, 70vw, 700px)';
const COVER_W = `calc(${COVER_VISIBLE_W} * 2)`;
const COVER_MARGIN = `calc(-1 * (${COVER_VISIBLE_W}) / 2)`;
const BOOK_H = 'clamp(320px, 72vh, 760px)';

// Cover + 5 inner pages. We flip through to the middle page (index 3), then pause there to write.
const WRITING_PAGE_INDEX = 3;

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
  { top: '4%', left: '18%', size: 20, delay: 1.4, duration: 7.6, rotate: -8 },
  { top: '4%', left: '70%', size: 24, delay: 0.3, duration: 8.2, rotate: 18 },
  { top: '96%', left: '20%', size: 16, delay: 2.0, duration: 6.9, rotate: -16 },
  { top: '94%', left: '65%', size: 22, delay: 1.7, duration: 8.7, rotate: 22 },
  { top: '12%', left: '62%', size: 14, delay: 2.9, duration: 7.1, rotate: 10 },
  { top: '58%', left: '96%', size: 18, delay: 0.9, duration: 7.5, rotate: -20 },
  { top: '62%', left: '0%', size: 16, delay: 2.4, duration: 8.9, rotate: 14 },
  { top: '20%', left: '0%', size: 20, delay: 0.2, duration: 7.3, rotate: -12 },
  { top: '85%', left: '6%', size: 24, delay: 1.3, duration: 8.4, rotate: 26 },
  { top: '48%', left: '8%', size: 12, delay: 2.1, duration: 6.7, rotate: -6 },
  { top: '2%', left: '92%', size: 18, delay: 0.5, duration: 7.9, rotate: 16 },
  { top: '70%', left: '98%', size: 26, delay: 1.8, duration: 8.1, rotate: -24 },
  { top: '36%', left: '48%', size: 10, delay: 2.7, duration: 6.4, rotate: 12 },
];

function PaperPage() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#f3e9d2]" style={{ boxShadow: 'inset -14px 0 30px rgba(0,0,0,0.1)' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-[0.12]">
        {[60, 44, 52].map((w, li) => (
          <span key={li} className="h-[2px] bg-[#3c2414] rounded-full" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function WritingPage({ active }: { active: boolean }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(180,150,90,0.3), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 85%, rgba(160,130,80,0.25), transparent 60%), linear-gradient(160deg, #e9dcb8 0%, #ddcc9f 50%, #d2bd8b 100%)',
        boxShadow: 'inset -14px 0 30px rgba(0,0,0,0.12), inset 0 0 70px rgba(90,65,30,0.25)',
      }}
    >
      {/* Parchment stains */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 50px 35px at 15% 70%, rgba(120,90,45,0.25), transparent 70%), radial-gradient(ellipse 40px 60px at 90% 25%, rgba(120,90,45,0.2), transparent 70%)',
        }}
      />

      {/* Quill + cursive writing */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="relative w-full flex justify-center">
          <motion.div
            className="relative"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={active ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: 2.3, delay: 0.3, ease: 'easeOut' }}
          >
            <span
              className="block text-center"
              style={{
                fontFamily: 'cursive',
                fontSize: 'clamp(16px, 4.2vw, 30px)',
                whiteSpace: 'nowrap',
                color: '#204a2d',
                textShadow: '0 1px 1px rgba(0,0,0,0.15)',
              }}
            >
              Athukorala
            </span>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -translate-y-1/2 text-[#3a2a16]"
            style={{ left: 0 }}
            initial={{ x: '0%', opacity: 0, rotate: -35 }}
            animate={
              active
                ? { x: ['0%', '110%', '230%', '340%'], opacity: [0, 1, 1, 0], rotate: [-35, -28, -38, -30] }
                : { x: '0%', opacity: 0 }
            }
            transition={{ duration: 2.3, delay: 0.3, ease: 'easeOut' }}
          >
            <Feather size={26} strokeWidth={1.4} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px 10px rgba(0,0,0,0.5)' }} />

      {/* Embossed border frame, tarnished bronze */}
      <div className="absolute inset-[14px] border border-[#a88b52]/30 rounded-[1px]" />
      <div className="absolute inset-[20px] border border-[#a88b52]/15 rounded-[1px]" />

      {/* Tarnished bronze corner ornaments */}
      {[
        'top-[22px] left-[22px] border-t border-l',
        'top-[22px] right-[22px] border-t border-r',
        'bottom-[22px] left-[22px] border-b border-l',
        'bottom-[22px] right-[22px] border-b border-r',
      ].map((pos, i) => (
        <div key={i} className={`absolute w-5 h-5 border-[#9c8249]/55 ${pos}`} />
      ))}

      {/* Spine shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Straps, worn leather */}
      <div className="absolute left-[-6px] top-[70px] w-[70px] h-[14px] bg-[#140d07] rounded-sm shadow-md rotate-[1deg]" style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.08), 0 2px 3px rgba(0,0,0,0.5)' }} />
      <div className="absolute left-[-6px] bottom-[70px] w-[70px] h-[14px] bg-[#140d07] rounded-sm shadow-md -rotate-[1deg]" style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.08), 0 2px 3px rgba(0,0,0,0.5)' }} />
      <div className="absolute right-[18px] top-[70px] w-[22px] h-[22px] -translate-y-[4px] rounded-full border-2 border-[#9c8249]/55" />
      <div className="absolute right-[18px] bottom-[70px] w-[22px] h-[22px] translate-y-[4px] rounded-full border-2 border-[#9c8249]/55" />

      {/* Emblem */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-5">
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-[#e8dcb8] border-[3px] border-[#9c8249]/70 shadow-[0_0_25px_rgba(0,0,0,0.5)] flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(0,0,0,0.5), inset 0 0 20px rgba(100,80,40,0.25)' }}>
          <img src={athuLogo} alt="Athukorala Tea" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain opacity-90" />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="h-[1px] w-6 sm:w-8 bg-[#9c8249]/50 block" />
          <span className="text-[#c9b483]/90 text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.3em] font-sans">
            Athukorala Tea
          </span>
          <span className="h-[1px] w-6 sm:w-8 bg-[#9c8249]/50 block" />
        </div>
        <span className="text-[#c9b483]/55 text-[9px] sm:text-[11px] italic font-serif tracking-wide">
          The Tea Collection
        </span>
      </div>

      {showHint && (
        <motion.span
          className="absolute bottom-7 left-0 right-0 text-center text-[#c9b483]/60 text-[10px] uppercase tracking-[0.25em] font-sans"
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
  const bookRef = useRef<any>(null);

  const handleOpen = () => {
    if (stage !== 'closed') return;
    setStage('tilting');
  };

  const handleFlip = (e: any) => {
    const current = e.data as number;
    if (current < WRITING_PAGE_INDEX) {
      setTimeout(() => bookRef.current?.pageFlip()?.flipNext(), 900);
    } else {
      setStage('writing');
    }
  };

  // Let the quill finish writing, then zoom in on the page
  useEffect(() => {
    if (stage !== 'writing') return;
    const timer = setTimeout(() => setStage('zooming'), 3000);
    return () => clearTimeout(timer);
  }, [stage]);

  // Mobile Safari/Chrome can let the page itself scroll behind a scaled-up
  // fixed-position element instead of clipping it — lock body scroll for
  // the whole intro so the zoom can't drag the viewport around.
  useEffect(() => {
    if (stage === 'done') return;
    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.position = prevPosition;
      document.body.style.width = '';
    };
  }, [stage]);

  const bookOpen = stage !== 'closed';
  const tilted = stage !== 'closed';
  const zoomed = stage === 'zooming' || stage === 'revealing';
  const showHint = stage === 'closed';
  const writingActive = stage === 'writing' || stage === 'zooming' || stage === 'revealing';

  // Memoized so the page elements keep a stable identity across re-renders —
  // react-pageflip reloads its whole page collection (resetting the flip state)
  // whenever the `children` it receives is a new object reference.
  const pages = useMemo(
    () => [
      <div key="cover" style={{ width: '100%', height: '100%' }}>
        <CoverPage showHint={showHint} />
      </div>,
      <div key="p1" style={{ width: '100%', height: '100%' }}>
        <PaperPage />
      </div>,
      <div key="p2" style={{ width: '100%', height: '100%' }}>
        <PaperPage />
      </div>,
      <div key="writing" style={{ width: '100%', height: '100%' }}>
        <WritingPage active={writingActive} />
      </div>,
      <div key="p4" style={{ width: '100%', height: '100%' }}>
        <PaperPage />
      </div>,
      <div key="p5" style={{ width: '100%', height: '100%' }}>
        <PaperPage />
      </div>,
    ],
    [showHint, writingActive]
  );

  return (
    <>
      {children}

      {stage !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-emerald-950 overflow-hidden"
          animate={{ opacity: stage === 'revealing' ? 0 : 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
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
              style={{ fontSize: '22vw', opacity: 0.045, letterSpacing: '0.02em' }}
            >
              ATHUKORALA
            </span>
          </div>

          {/* Full-width tagline strip near the bottom */}
          <div className="absolute bottom-10 sm:bottom-14 left-0 right-0 flex items-center justify-center gap-4 sm:gap-6 px-6 pointer-events-none">
            <span className="h-px flex-1 max-w-[120px] sm:max-w-[220px] bg-amber-200/20" />
            <span className="text-amber-100/40 text-[9px] sm:text-xs uppercase tracking-[0.35em] font-sans text-center whitespace-nowrap">
              Pure Ceylon &middot; Handcrafted &middot; Est. in Sri Lanka
            </span>
            <span className="h-px flex-1 max-w-[120px] sm:max-w-[220px] bg-amber-200/20" />
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

          <motion.div
            className={`relative flex items-center justify-center ${stage === 'closed' ? 'cursor-pointer' : ''}`}
            initial={{ opacity: 0, scaleX: 0.92, scaleY: 0.92 }}
            animate={{
              opacity: 1,
              scaleX: zoomed ? ZOOM_SCALE : 1,
              scaleY: (zoomed ? ZOOM_SCALE : 1) * (tilted ? TILT_SCALE_Y : 1),
            }}
            transition={{
              opacity: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
              scaleX: { duration: zoomed ? 1.6 : 0.7, ease: [0.45, 0, 0.2, 1] },
              scaleY: { duration: zoomed ? 1.6 : tilted ? 1.3 : 0.7, ease: [0.45, 0, 0.2, 1] },
            }}
            style={{
              width: stage === 'closed' ? COVER_W : BOOK_W,
              height: BOOK_H,
              marginLeft: stage === 'closed' ? COVER_MARGIN : '0px',
              transformOrigin: '50% 46%',
            }}
            onClick={stage === 'closed' ? handleOpen : undefined}
            onAnimationComplete={() => {
              if (stage === 'tilting') {
                setStage('opening');
                bookRef.current?.pageFlip()?.flipNext();
              } else if (stage === 'zooming') {
                setStage('revealing');
              }
            }}
          >
            {/* Grounded soft shadow beneath the book */}
            <div
              className="absolute rounded-[50%] bg-black/50 blur-2xl"
              style={{
                width: `calc(${stage === 'closed' ? COVER_VISIBLE_W : BOOK_W} * 0.85)`,
                height: '40px',
                bottom: `calc(-1 * ${BOOK_H} * 0.05)`,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />

            <HTMLFlipBook
              ref={bookRef}
              width={440}
              height={610}
              size="stretch"
              minWidth={140}
              maxWidth={700}
              minHeight={220}
              maxHeight={760}
              startPage={0}
              drawShadow
              flippingTime={2000}
              usePortrait={false}
              startZIndex={10}
              autoSize={false}
              maxShadowOpacity={0.5}
              showCover
              mobileScrollSupport={false}
              clickEventForward={false}
              useMouseEvents={false}
              swipeDistance={0}
              showPageCorners={false}
              disableFlipByClick={false}
              onFlip={handleFlip}
              className="athukorala-flipbook"
              style={{}}
            >
              {pages}
            </HTMLFlipBook>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
