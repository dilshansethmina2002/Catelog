import React from 'react';
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
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 px-4 md:px-6 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
