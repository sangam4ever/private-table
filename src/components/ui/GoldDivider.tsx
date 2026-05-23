'use client';

import { motion } from 'framer-motion';

interface GoldDividerProps {
  className?: string;
  width?: 'full' | 'half' | 'quarter';
  opacity?: number;
}

export function GoldDivider({
  className = '',
  width = 'full',
  opacity = 1,
}: GoldDividerProps) {
  const widthClass = {
    full: 'w-full',
    half: 'w-1/2',
    quarter: 'w-1/4',
  }[width];

  return (
    <motion.div
      className={`h-px bg-gold ${widthClass} ${className}`}
      style={{ opacity, originX: 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
  );
}
