import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import logoImg from '../assets/tea.jpg';
export function IngredientsSection() {
  const { t } = useLanguage();
  return (
    <Section
      id="ingredients"
      className="bg-emerald-950 text-white relative overflow-hidden py-32">

      {/* Editorial Background Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-serif font-bold leading-none whitespace-nowrap absolute top-10 left-0">
          PURE NATURE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Image Collage */}
        <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="absolute top-0 right-0 w-3/4 h-3/4 rounded-t-[100px] overflow-hidden z-10 border-r-4 border-t-4 border-amber-500/30">

            <img
              src={logoImg}
              alt="Tea Ingredients"
              decoding="async"
              className="w-full h-full object-cover" />

          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-emerald-900 rounded-b-[100px] overflow-hidden z-20 border-l-4 border-b-4 border-emerald-700">

            <img
              src="https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop"
              alt="Tea Leaves"
              decoding="async"
              className="w-full h-full object-cover hover:opacity-100 transition-opacity duration-700" />

          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 lg:pl-12">
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>

            <span className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4 block">
              Composition
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-12 leading-none">
              {t.ingredients.title}
            </h2>

            <div className="space-y-12">
              {t.ingredients.items.map((item, index) =>
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.2
                  }}
                  className="group border-b border-emerald-800 pb-8 last:border-0">

                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-amber-500 font-serif text-xl italic">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-emerald-200/60 text-lg pl-10 leading-relaxed font-light max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>);

}