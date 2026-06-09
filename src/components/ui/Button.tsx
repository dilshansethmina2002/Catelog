import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500';
  const variants = {
    primary:
    'bg-emerald-700 text-white hover:bg-emerald-800 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-50',
    ghost: 'text-emerald-800 hover:bg-emerald-50/50'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>

      {children}
    </motion.button>);

}