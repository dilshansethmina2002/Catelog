import React from 'react';
import { motion } from 'framer-motion';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}
export function Section({
  children,
  className = '',
  id,
  delay = 0
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 px-4 md:px-6 overflow-hidden ${className}`}>

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
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: 'easeOut'
        }}
        className="max-w-7xl mx-auto">

        {children}
      </motion.div>
    </section>);

}