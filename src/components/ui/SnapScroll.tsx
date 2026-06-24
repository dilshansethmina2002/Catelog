import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface CinematicSection {
  id: number;
  title: string;
  image: string;
  productName: string;
  subtitle: string;
  url: string;
}

const sections: CinematicSection[] = [
  {
    id: 1,
    title: "Rose Tea",
    subtitle: "Aromatic & Delicate",
    image: "/images/RoseTeaBox.jpg",
    productName: "Botanical Infusions",
    url: "/product/tea-038"
  },
  {
    id: 2,
    title: "FBOP Tea",
    subtitle: "Premium & Aromatic",
    image: "/images/FBOPBox.jpg",
    productName: "Artisan Reserve",
    url: "/product/tea-019"
  },
  {
    id: 3,
    title: "Ceylon BOP Tea",
    subtitle: "Bold & Full-Bodied",
    image: "/images/CeylonteaBOP.jpg",
    productName: "Heritage Estates",
    url: "/product/tea-010"
  },
  {
    id: 4,
    title: "Cinnamon Tea",
    subtitle: "Warm & Invigorating",
    image: "/images/CinnamonTeaBox.jpg",
    productName: "Spiced Wellness",
    url: "/product/tea-015"
  },

];

// ── Accordion shutter slats that peel open ─────────────────────────────────
const ShutterOverlay = ({ isVisible, count = 6 }: { isVisible: boolean; count?: number }) => {
  const slats = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: 0.08 + i * 0.06,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {slats.current.map((slat) => (
        <div
          key={slat.id}
          style={{
            position: 'absolute',
            width: '100%',
            height: `${100 / count}%`,
            top: `${(100 / count) * slat.id}%`,
            background: 'rgba(250, 248, 245, 0.95)',
            transformOrigin: `50% ${slat.id < count / 2 ? '0%' : '100%'}`,
            transform: isVisible ? 'scaleY(0)' : 'scaleY(1)',
            transition: isVisible
              ? `transform 0.8s cubic-bezier(0.76, 0, 0.24, 1) ${slat.delay}s`
              : `transform 0.3s ease`,
            zIndex: 10,
          }}
        />
      ))}
    </div>
  );
};

// ── Spinning seal that breaks on reveal ────────────────────────────────────
const BreakingSeal = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    style={{
      zIndex: 15,
      opacity: isVisible ? 0 : 1,
      transition: 'opacity 0.5s ease 0.3s',
    }}
  >
    {/* Outer circle seal */}
    <div
      style={{
        position: 'absolute',
        width: '80px',
        height: '80px',
        border: '2px solid #d4ccc6',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.6,
      }}
    />
    {/* Inner decorative seal dot */}
    <div
      style={{
        position: 'absolute',
        width: '12px',
        height: '12px',
        background: '#d4ccc6',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.4,
      }}
    />
    {/* Rotating ribbon */}
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
      }}
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#d4ccc6"
        strokeWidth="1"
        strokeDasharray="282"
        strokeDashoffset="282"
        style={{
          animation: isVisible ? 'none' : 'spin 8s linear infinite',
        }}
      />
    </svg>
  </div>
);

// ── Zooming centered image ─────────────────────────────────────────────────
const ZoomingImage = ({
  src,
  alt,
  isVisible,
}: {
  src: string;
  alt: string;
  isVisible: boolean;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#faf8f5',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(1.8) rotate(-8deg)',
          filter: isVisible ? 'brightness(1)' : 'brightness(0.85)',
          transition: isVisible
            ? 'transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, filter 1.6s ease 0.3s'
            : 'transform 0.4s ease, filter 0.4s ease',
        }}
      />
    </div>
  );
};

// ── Text with Y-axis rotation (book opening) ───────────────────────────────
const TextContent = ({
  section,
  isVisible,
  isImageLeft,
}: {
  section: CinematicSection;
  isVisible: boolean;
  isImageLeft: boolean;
}) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const rotationDirection = isImageLeft ? -12 : 12;

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingLeft: 'clamp(2rem, 5vw, 6rem)',
        paddingRight: 'clamp(2rem, 5vw, 6rem)',
        transformStyle: 'preserve-3d',
        perspective: '1200px',
      }}
    >
      {/* Large watermark that spins into place */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: isImageLeft ? 'max(2rem, 5%)' : undefined,
          left: !isImageLeft ? 'max(2rem, 5%)' : undefined,
          transform: `translateY(-50%) rotate(${isVisible ? '0deg' : '180deg'})`,
          fontSize: 'clamp(8rem, 16vw, 16rem)',
          fontWeight: 900,
          fontFamily: 'Georgia, serif',
          color: 'rgba(120, 113, 108, 0.05)',
          letterSpacing: '-0.05em',
          opacity: isVisible ? 1 : 0,
          transition: isVisible
            ? 'opacity 1s ease 0.5s, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
            : 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        0{section.id}
      </div>

      {/* Content container that rotates in like a book opening */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: isVisible
            ? 'rotateY(0deg) rotateX(0deg) translateZ(0)'
            : `rotateY(${rotationDirection}deg) rotateX(8deg) translateZ(-20px)`,
          opacity: isVisible ? 1 : 0,
          transition: isVisible
            ? 'transform 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s, opacity 0.8s ease 0.3s'
            : 'transform 0.3s ease, opacity 0.3s ease',
          filter: isVisible ? 'blur(0px)' : 'blur(2px)',
        }}
      >
        {/* Label with animated underline */}
        <div
          style={{
            position: 'relative',
            marginBottom: '1.5rem',
            display: 'inline-block',
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#a8a29e',
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-1.5rem)',
              transition: isVisible
                ? 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s'
                : 'opacity 0.15s ease, transform 0.15s ease',
            }}
          >
            {section.productName}
          </span>
          {/* Sliding underline */}
          <div
            style={{
              position: 'absolute',
              bottom: '-6px',
              left: 0,
              height: '1px',
              background: '#292524',
              width: isVisible ? '100%' : '0%',
              transition: isVisible
                ? 'width 0.8s cubic-bezier(0.76, 0, 0.24, 1) 0.75s'
                : 'width 0.2s ease',
            }}
          />
        </div>

        {/* Title with letter spacing expansion */}
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 5rem)',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: '1.5rem',
            color: '#292524',
            letterSpacing: isVisible ? '-0.02em' : '0.2em',
            opacity: isVisible ? 1 : 0.5,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0.95)',
            transition: isVisible
              ? 'letter-spacing 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s, opacity 0.7s ease 0.4s, transform 0.9s ease 0.4s'
              : 'letter-spacing 0.2s ease, opacity 0.15s ease, transform 0.15s ease',
          }}
        >
          {section.title}
        </h1>

        {/* Subtitle with dash animation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: isVisible
              ? 'opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s'
              : 'opacity 0.15s ease, transform 0.15s ease',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: isVisible ? '20px' : '0px',
              height: '1px',
              background: '#78716c',
              flexShrink: 0,
              transition: isVisible
                ? 'width 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.85s'
                : 'width 0.2s ease',
            }}
          />
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#928e89',
            }}
          >
            {section.subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <div
          style={{
            marginTop: '2.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
            transition: isVisible
              ? 'opacity 0.6s ease 1s, transform 0.6s ease 1s'
              : 'opacity 0.15s ease, transform 0.15s ease',
          }}
        >
          <button
          onClick={() => {
            // අදාළ පිටුවට යොමු කිරීම
            window.location.href = section.url; 
          }}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontSize: '0.6rem',
            fontWeight: 800,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#292524',
            position: 'relative',
            overflow: 'visible',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {t?.catalog?.discoverMore || "DISCOVER MORE"}
          <span
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              width: '100%',
              height: '2px',
              background: '#292524',
              transformOrigin: 'center',
              transform: isHovered ? 'scaleX(1.15)' : 'scaleX(1)',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
        </button>
        </div>
      </div>
    </div>
  );
};

// ── Section block ──────────────────────────────────────────────────────────
const SectionBlock = ({
  section,
  index,
}: {
  section: CinematicSection;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const isImageLeft = index % 2 === 0;

  return (
    <div
      ref={sectionRef}
      id={`section-${section.id}`}
      className={`relative flex flex-col h-screen w-full snap-start overflow-hidden md:flex-row ${isImageLeft ? '' : 'md:flex-row-reverse'
        }`}
    >
      {/* ── IMAGE HALF ── */}
      <div
        className="relative w-full h-[50vh] md:w-1/2 md:h-full bg-stone-100"
        style={{ perspective: '1200px' }}
      >
        <ZoomingImage src={section.image} alt={section.title} isVisible={isVisible} />
        <ShutterOverlay isVisible={isVisible} count={5} />
        <BreakingSeal isVisible={isVisible} />
      </div>

      {/* ── TEXT HALF ── */}
      <div
        className="relative w-full h-[50vh] md:w-1/2 md:h-full bg-[#FAF8F5]"
        style={{ perspective: '1200px' }}
      >
        <TextContent section={section} isVisible={isVisible} isImageLeft={isImageLeft} />
      </div>
    </div>
  );
};

// ── Root ───────────────────────────────────────────────────────────────────
export default function EditorialSnapScroll(): JSX.Element {
  const { t } = useLanguage();

  const localizedSections = sections.map((s, i) => ({
    ...s,
    title: t?.catalog?.sections?.[i]?.title || s.title,
    subtitle: t?.catalog?.sections?.[i]?.subtitle || s.subtitle,
    productName: t?.catalog?.sections?.[i]?.productName || s.productName,
  }));

  return (
    <>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }

        ::-webkit-scrollbar { display: none; }
      `}</style>

      <div
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans antialiased bg-[#FAF8F5] text-stone-900"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {localizedSections.map((section, index) => (
          <SectionBlock key={section.id} section={section} index={index} />
        ))}
      </div>
    </>
  );
}