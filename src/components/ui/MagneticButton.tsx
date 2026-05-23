'use client';

import { MagneticButtonProps } from '@/types';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const magnetic = {
      strength: 0.2,
      smoothness: 0.75,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * magnetic.strength,
        y: y * magnetic.strength,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const baseClasses =
    'px-8 py-4 font-body font-semibold tracking-wide transition-all duration-500 relative overflow-hidden text-base rounded-full';

  const variantClasses = {
    primary:
      'bg-gold text-obsidian hover:bg-gold-light border-2 border-gold',
    ghost:
      'bg-transparent text-gold border-2 border-gold hover:bg-gold/10',
    outline:
      'bg-transparent text-ivory border-2 border-ivory-60 hover:border-gold hover:text-gold',
  }[variant];

  const Element = href ? 'a' : 'button';

  return (
    <Element
      ref={buttonRef as any}
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Element>
  );
}
