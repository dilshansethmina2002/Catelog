import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Static data that never changes with language (images, routes, catalog indices)
const featuredProductsBase = [
  { image: '/images/Rose Tea Box 100g.jpg',      url: '/product/tea-038', catalogIndex: 0 },
  { image: '/images/FBOP Box 100g.jpg',          url: '/product/tea-019', catalogIndex: 1 },
  { image: '/images/Cinnamon Tea Box 100g.jpg',  url: '/product/tea-015', catalogIndex: 3 },
];

function FadeInSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const hp = t.homepage;

  const stats = [
    { value: '40+',    label: hp.stats.premiumTeas },
    { value: '7',      label: hp.stats.languages },
    { value: '100%',   label: hp.stats.ceylonOrigin },
    { value: 'Export', label: hp.stats.gradeQuality },
  ];

  const featuredProducts = featuredProductsBase.map((p, i) => ({
    image:    p.image,
    url:      p.url,
    title:    t.catalog.sections[p.catalogIndex]?.title    ?? '',
    subtitle: t.catalog.sections[p.catalogIndex]?.productName ?? '',
    tag:      hp.featured.tags[i] ?? '',
  }));

  const qualityPillars = hp.heritage.pillars;

  return (
    <div style={{ background: '#D4EAD4' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{
          minHeight: '100svh',
          background: 'linear-gradient(160deg, #0c1410 0%, #0b2818 55%, #0c1815 100%)',
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(212,175,106,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Decorative concentric rings */}
        {[700, 520, 360].map((size, i) => (
          <div
            key={i}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: `min(${size}px, 90vw)`,
              height: `min(${size}px, 90vw)`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid rgba(212,175,106,0.06)',
            }}
          />
        ))}

        {/* Corner SVG botanical accents */}
        <svg
          className="absolute top-0 left-0 pointer-events-none opacity-[0.035]"
          width="220" height="220" viewBox="0 0 200 200" fill="none"
        >
          <path d="M0 200 Q50 100 100 50 Q150 0 200 0" stroke="#d4af6a" strokeWidth="0.6" />
          <path d="M0 160 Q70 80 130 30 Q170 5 200 30" stroke="#d4af6a" strokeWidth="0.6" />
          <path d="M30 200 Q90 120 140 70 Q175 35 200 60" stroke="#d4af6a" strokeWidth="0.6" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 pointer-events-none opacity-[0.035] rotate-180"
          width="220" height="220" viewBox="0 0 200 200" fill="none"
        >
          <path d="M0 200 Q50 100 100 50 Q150 0 200 0" stroke="#d4af6a" strokeWidth="0.6" />
          <path d="M0 160 Q70 80 130 30 Q170 5 200 30" stroke="#d4af6a" strokeWidth="0.6" />
        </svg>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">

          {/* Brand marker line */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="h-px w-10 bg-[#d4af6a]/50" />
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                color: 'rgba(212,175,106,0.75)',
              }}
            >
              {hp.hero.brandMarker}
            </span>
            <span className="h-px w-10 bg-[#d4af6a]/50" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(3rem, 10vw, 7.5rem)',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-0.025em',
              color: '#f5f0e6',
            }}
          >
            {hp.hero.headline1}
            <br />
            <span style={{ color: '#d4af6a' }}>{hp.hero.headline2}</span>
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.85, delay: 0.82 }}
            className="mt-8 mb-7"
            style={{
              height: '1px',
              width: '88px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,106,0.65), transparent)',
            }}
          />

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.94 }}
            style={{
              fontSize: 'clamp(0.82rem, 2vw, 1rem)',
              color: 'rgba(245,240,230,0.58)',
              letterSpacing: '0.04em',
              maxWidth: '440px',
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            {hp.hero.subheading}
          </motion.p>

          {/* Stats bar — lives inside the hero */}
          <div
            className="mt-11 w-full max-w-2xl grid grid-cols-2 md:grid-cols-4 md:divide-x"
            style={{ borderTop: '1px solid rgba(10,140,94,0.18)', paddingTop: '2rem', borderColor: 'rgba(10,140,94,0.18)' }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 px-4 py-2">
                <span
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                    fontWeight: 700,
                    color: '#d4af6a',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,240,230,0.45)',
                    textAlign: 'center',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TEAS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#D4EAD4' }}>
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <FadeInSection className="text-center mb-16">
            <p
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                color: '#a8a29e',
                marginBottom: '1rem',
              }}
            >
              {hp.featured.label}
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#292524',
                letterSpacing: '-0.02em',
              }}
            >
              {hp.featured.heading}
            </h2>
            <div
              style={{
                margin: '1rem auto 0',
                height: '1px',
                width: '56px',
                background: 'linear-gradient(90deg, transparent, rgba(212,175,106,0.6), transparent)',
              }}
            />
          </FadeInSection>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredProducts.map((product, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <Link
                  to={product.url}
                  className="group block relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-1"
                  style={{
                    border: '1px solid rgba(120,113,108,0.1)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 20px 48px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(to top, rgba(12,20,16,0.35) 0%, transparent 60%)' }}
                    />
                    {/* Tag pill */}
                    <div
                      className="absolute top-4 left-4"
                      style={{
                        padding: '0.3rem 0.85rem',
                        borderRadius: '999px',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        background: 'rgba(12,20,16,0.72)',
                        color: '#d4af6a',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(212,175,106,0.22)',
                      }}
                    >
                      {product.tag}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: '1.5rem 1.6rem 1.6rem' }}>
                    <p
                      style={{
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.32em',
                        textTransform: 'uppercase',
                        color: '#a8a29e',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {product.subtitle}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: '#292524',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                      }}
                    >
                      {product.title}
                    </h3>
                    <div
                      className="mt-5 flex items-center gap-2 transition-colors group-hover:text-[#0a8c5e]"
                      style={{
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: '#292524',
                      }}
                    >
                      {hp.featured.discover}
                      <svg
                        xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          {/* View all CTA */}
          <FadeInSection className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-3 rounded-full transition-all duration-300 hover:bg-[#292524] hover:text-white"
              style={{
                padding: '1rem 2.2rem',
                border: '1px solid rgba(41,37,36,0.2)',
                color: '#292524',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              {hp.featured.viewAll}
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ── HERITAGE SECTION ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-28 px-6"
        style={{ background: 'linear-gradient(160deg, #0c1410 0%, #0b2818 100%)' }}
      >
        {/* Large watermark text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(7rem, 20vw, 18rem)',
              fontWeight: 900,
              color: 'rgba(212,175,106,0.03)',
              letterSpacing: '-0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            CEYLON
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInSection>
            <p
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                color: 'rgba(212,175,106,0.55)',
                marginBottom: '1.5rem',
              }}
            >
              {hp.heritage.label}
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: '#f5f0e6',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {hp.heritage.heading1}
              <br />
              <span style={{ color: '#d4af6a' }}>{hp.heritage.heading2}</span>
            </h2>

            <div
              style={{
                margin: '1.5rem auto',
                height: '1px',
                width: '72px',
                background: 'linear-gradient(90deg, transparent, rgba(212,175,106,0.5), transparent)',
              }}
            />

            <p
              style={{
                color: 'rgba(245,240,230,0.5)',
                fontSize: '0.92rem',
                lineHeight: 1.95,
                fontWeight: 300,
                letterSpacing: '0.02em',
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              {hp.heritage.description}
            </p>

            {/* Quality pillars */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {qualityPillars.map((label, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <span
                      className="hidden sm:inline-block w-1 h-1 rotate-45"
                      style={{ background: 'rgba(212,175,106,0.3)' }}
                    />
                  )}
                  <div className="flex items-center gap-2.5">
                    <span className="h-px w-7" style={{ background: 'rgba(212,175,106,0.4)' }} />
                    <span
                      style={{
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.32em',
                        textTransform: 'uppercase',
                        color: 'rgba(212,175,106,0.7)',
                      }}
                    >
                      {label}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── SPICE COLLECTION ───────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#B8D4B8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Image side */}
            <FadeInSection>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: '16/10' }}
              >
                <img
                  src="/images/Cinnamon Stick Alba 50g.jpg"
                  alt="Ceylon Spices"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(12,20,16,0.5) 0%, transparent 65%)' }}
                />
                <div className="absolute bottom-5 left-5">
                  <span
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '999px',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.32em',
                      textTransform: 'uppercase',
                      background: 'rgba(212,175,106,0.92)',
                      color: '#0c1410',
                    }}
                  >
                    {hp.spices.badge}
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* Text side */}
            <FadeInSection delay={0.12} className="flex flex-col gap-5 md:px-6">
              <p
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.42em',
                  textTransform: 'uppercase',
                  color: '#2e5c2e',
                }}
              >
                {hp.spices.label}
              </p>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#292524',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                {hp.spices.heading1}
                <br />
                <span style={{ color: '#0a8c5e' }}>{hp.spices.heading2}</span>
              </h2>
              <p
                style={{
                  color: '#1e3d1e',
                  fontSize: '0.9rem',
                  lineHeight: 1.95,
                  fontWeight: 300,
                }}
              >
                {hp.spices.description}
              </p>
              <Link
                to="/spices"
                className="self-start flex items-center gap-3 rounded-full transition-all duration-300 hover:scale-[1.03]"
                style={{
                  padding: '1rem 2rem',
                  background: '#0b2818',
                  color: '#d4af6a',
                  border: '1px solid rgba(10,140,94,0.28)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                }}
              >
                {hp.spices.cta}
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── BRAND MANIFESTO ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{ background: 'linear-gradient(160deg, #0c1410 0%, #0b2818 55%, #0c1815 100%)' }}
      >
        {/* Large decorative quote mark */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(10rem, 22vw, 18rem)',
            fontWeight: 900,
            lineHeight: 1,
            color: 'rgba(212,175,106,0.04)',
            userSelect: 'none',
          }}
        >
          "
        </div>

        <FadeInSection className="relative z-10 max-w-3xl mx-auto text-center">

          {/* Thin top rule */}
          <div
            style={{
              margin: '0 auto 2.5rem',
              height: '1px',
              width: '48px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,106,0.55), transparent)',
            }}
          />

          {/* Quote */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.45rem, 3.5vw, 2.35rem)',
              fontWeight: 600,
              color: '#f5f0e6',
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
              fontStyle: 'italic',
            }}
          >
            "Every cup carries the soul of the highland — grown where the mist meets the mountain,
            crafted where tradition meets precision."
          </p>

          {/* Attribution */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span style={{ height: '1px', width: '32px', background: 'rgba(212,175,106,0.25)', display: 'inline-block' }} />
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'rgba(212,175,106,0.5)',
              }}
            >
              Athukorala Group · Pure Ceylon Tea
            </span>
            <span style={{ height: '1px', width: '32px', background: 'rgba(212,175,106,0.25)', display: 'inline-block' }} />
          </div>

          {/* Thin bottom rule */}
          <div
            style={{
              margin: '2.5rem auto 0',
              height: '1px',
              width: '48px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,106,0.55), transparent)',
            }}
          />

        </FadeInSection>
      </section>

    </div>
  );
}
