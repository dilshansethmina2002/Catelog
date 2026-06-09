import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import { Leaf, Wind, RefreshCw, Sun } from 'lucide-react';
const icons = [Leaf, Wind, RefreshCw, Sun];
export function ProcessSection() {
  const { t } = useLanguage();
  return (
    <Section id="process" className="bg-white relative overflow-hidden">
      {/* Connecting Line Background */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-emerald-100 hidden lg:block transform -translate-y-1/2" />

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6">
          {t.process.title}
        </h2>
        <p className="text-emerald-800/60 text-lg max-w-2xl mx-auto font-light">
          {t.process.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        {t.process.steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
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
              className="relative flex flex-col items-center text-center group">

              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-emerald-500 group-hover:scale-110 transition-all duration-500 z-10 relative">
                <Icon className="w-6 h-6 text-emerald-700 group-hover:text-emerald-600 transition-colors" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#faf9f6] p-6 rounded-2xl w-full flex-1 hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-3 font-serif">
                  {step.title}
                </h3>
                <p className="text-emerald-800/60 text-sm font-bold leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile Connector Line */}
              {index < t.process.steps.length - 1 &&
                <div className="absolute bottom-[-48px] left-1/2 w-px h-12 bg-emerald-100 lg:hidden transform -translate-x-1/2" />
              }
            </motion.div>);

        })}
      </div>
    </Section>);

}