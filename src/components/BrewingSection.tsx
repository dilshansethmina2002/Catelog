import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';

// --- CUSTOM SVG ILLUSTRATIONS ---

const KettleIcon = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
        {/* Kettle Body */}
        <path d="M30 80H70C75 80 80 75 80 70V50C80 40 70 30 60 30H40C30 30 20 40 20 50V70C20 75 25 80 30 80Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M40 30V25C40 20 45 15 50 15C55 15 60 20 60 25V30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M80 55L90 45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* Steam */}
        <motion.path
            d="M85 35Q90 25 85 15M92 38Q97 28 92 18"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            whileInView={{ y: [0, -5, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
    </svg>
);

const SpoonIcon = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
        {/* Spoon Handle - Slanted for better integration */}
        <path d="M80 20L55 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        {/* Spoon Bowl - More defined oval shape */}
        <path d="M55 45C50 40 30 40 25 55C20 70 30 85 45 80C60 75 60 55 55 45Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Reflection on Spoon for depth */}
        <path d="M35 55Q32 60 35 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* Falling Tea Leaves / Particles */}
        <motion.g
            whileInView={{ y: [0, 25], opacity: [1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
        >
            <circle cx="35" cy="75" r="2" fill="currentColor" />
            <path d="M45 70Q47 67 49 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
        <motion.g
            whileInView={{ y: [0, 30], opacity: [1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
        >
            <circle cx="40" cy="82" r="1.5" fill="currentColor" />
            <path d="M30 78Q32 75 34 78" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </motion.g>
    </svg>
);

const TimerIcon = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.2" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="220" />
        <motion.path
            d="M50 50L50 25"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ originX: "50px", originY: "50px" }}
        />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
);

const CupIcon = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
        <path d="M25 40H75C75 60 60 75 50 75C40 75 25 60 25 40Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M75 50C82 50 88 56 88 62.5C88 69 82 75 75 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 75H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        {/* Steam */}
        <motion.path
            d="M45 30Q50 20 45 10M55 30Q60 20 55 10"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            whileInView={{ y: [0, -5, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
    </svg>
);

const customIcons = [KettleIcon, SpoonIcon, TimerIcon, CupIcon];

export function BrewingSection() {
    const { t } = useLanguage();

    return (
        <Section id="brewing" className="bg-[#faf9f6]/50 relative overflow-hidden py-10 md:py-24 lg:py-32">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-20 lg:mb-24 max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-emerald-950 mb-4 md:mb-8 tracking-tight">
                        {t.brewing.title}
                    </h2>
                    <p className="text-emerald-800/60 text-sm md:text-lg font-light leading-relaxed">
                        {t.brewing.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 lg:gap-16">
                    {t.brewing.steps.map((step: any, index: number) => {
                        const Icon = customIcons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
                                className="group relative"
                            >
                                {/* card Background */}
                                <div className="relative group-hover:transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="aspect-[1.1/1] md:aspect-[4/5] bg-white rounded-2xl md:rounded-[2.5rem] shadow-[0_15px_40px_rgba(5,150,105,0.04)] md:shadow-[0_30px_60px_rgba(5,150,105,0.06)] border border-emerald-50/50 flex flex-col items-center justify-center overflow-hidden relative group-hover:shadow-[0_45px_100px_rgba(5,150,105,0.1)] transition-all duration-700">

                                        {/* Step Indicator */}
                                        <div className="absolute top-4 left-4 md:top-8 md:left-8 text-2xl md:text-6xl font-serif font-bold text-emerald-950/5 select-none">
                                            0{index + 1}
                                        </div>

                                        <div className="w-12 h-12 md:w-24 md:h-24 mb-4 md:mb-10 flex items-center justify-center text-emerald-700 group-hover:text-emerald-500 transition-colors duration-500">
                                            <Icon className="w-full h-full" />
                                        </div>

                                        <h3 className="text-lg md:text-2xl font-serif font-bold text-emerald-950 mb-2 md:mb-4 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-emerald-800/60 text-[14px] md:text-sm leading-relaxed font-bold px-1">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Vertical Divider (Mobile only) */}
                                {index < t.brewing.steps.length - 1 && (
                                    <div className="flex justify-center md:hidden my-3">
                                        <div className="w-[1px] h-4 bg-emerald-100/50" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
