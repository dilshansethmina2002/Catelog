import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import { Check, Package, Star, MessageSquare } from 'lucide-react';
export function PriceSection() {
  const { t } = useLanguage();
  return (
    <Section id="price" className="bg-white py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="relative bg-emerald-950 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl group">

          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-950 z-0" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity
            }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3" />


          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Info */}
            <div className="text-white space-y-8">
              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  {t.price.title}
                </h2>
                <p className="text-emerald-200/80 text-lg max-w-md">
                  {t.price.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((_, i) =>
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-800/50 flex items-center justify-center text-amber-400">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-emerald-100">
                      {i === 0 ?
                        t.ingredients.items[0].name :
                        i === 1 ?
                          t.benefits.items[0].title :
                          t.benefits.items[3].title}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Pricing Card */}
            <motion.div
              whileHover={{
                y: -10,
                rotateX: 5
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600" />

              <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6 border border-amber-500/30">
                {t.price.pack}
              </div>

              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-white">
                  {t.price.price}
                </span>
                <span className="text-emerald-200">/ pack</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-emerald-200/60 mb-8 text-sm">
                <Package className="w-4 h-4" />
                {t.price.weight}
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Bespoke Review Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative px-6 py-16 md:py-24 rounded-[3rem] overflow-hidden text-center"
        >
          {/* Subtle Editorial Background */}
          <div className="absolute inset-0 bg-emerald-50/40 backdrop-blur-[2px] border border-emerald-100/50 z-0" />

          {/* Decorative Floating Leaf (Faded) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-emerald-900/[0.03] pointer-events-none select-none z-0">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full rotate-45">
              <path d="M50,5 C20,25 5,55 50,95 C95,55 80,25 50,5 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-emerald-600 font-bold text-[10px] uppercase tracking-[0.3em]"
              >
                Trusted Excellence
              </motion.div>
              <h3 className="text-3xl md:text-5xl font-serif font-medium text-emerald-950 tracking-tight italic">
                {t.price.videoTitle}
              </h3>
            </div>

            {/* Elegant Shimmering Stars */}
            <div className="flex gap-2" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((s) => (
                <motion.div
                  key={s}
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: s * 0.15 }}
                >
                  <Star className="w-7 h-7 fill-amber-400 text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]" />
                </motion.div>
              ))}
            </div>

            {/* Editorial Style CTA Link */}
            <motion.a
              href="https://reviewthis.biz/Athu-rev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ gap: "1.5rem" }}
              className="group flex items-center gap-4 text-emerald-900 font-bold uppercase tracking-widest text-sm transition-all border-b-2 border-emerald-900/10 pb-2 hover:border-emerald-900"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.price.videoDescription}</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="inline-block"
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Section>);

}