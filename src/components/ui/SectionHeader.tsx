'use client';

import { SectionHeaderProps } from '@/types';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  alignment = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClass =
    alignment === 'center'
      ? 'text-center'
      : 'text-left';

  return (
    <motion.div
      className={`mb-12 ${alignClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
    >
      {/* Eyebrow */}
      <p className="text-xs tracking-widest uppercase gold-text font-body font-light mb-4">
        {eyebrow}
      </p>

      {/* Gold divider - only for left alignment */}
      {alignment === 'left' && (
        <div className="w-12 h-px bg-gold mb-6" />
      )}

      {/* Title */}
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-ivory mb-6 leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="font-body text-lg md:text-xl text-ivory-60 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
