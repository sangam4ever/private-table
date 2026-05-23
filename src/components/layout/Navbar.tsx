'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useLenis } from '@/lib/lenis';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(`#${id}`, { duration: 2 });
    }
  };

  return (
    <motion.nav
      suppressHydrationWarning
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-8 md:py-8 transition-all duration-500"
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{
        backgroundColor: isScrolled
          ? 'rgba(10, 10, 10, 0.95)'
          : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(4px)' : 'blur(0px)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ opacity: 0.8 }} transition={{ duration: 0.3 }}>
          <Image
            src="/images/logo.png"
            alt="The Private Table by Sanjay"
            width={90}
            height={60}
            className="h-24 w-auto"
            priority
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {[
            { label: 'About', id: 'about' },
            { label: 'Experiences', id: 'experiences' },
            { label: 'Process', id: 'process' },
            { label: 'Gallery', id: 'gallery' },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-ivory font-body font-light text-base tracking-wide gold-text hover:text-gold transition-colors relative group"
              style={{ color: '#c9a84c', fontSize: '16px' }}
              whileHover="hover"
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 h-px bg-gold"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <MagneticButton
            variant="primary"
            onClick={() => handleNavClick('inquiry')}
            className="px-6 py-3 text-base font-semibold"
          >
            Inquire Now
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            className="w-5 h-px bg-gold"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
          />
          <motion.div
            className="w-5 h-px bg-gold"
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
          />
          <motion.div
            className="w-5 h-px bg-gold"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="pt-8 pb-6 flex flex-col gap-6">
          {[
            { label: 'About', id: 'about' },
            { label: 'Experiences', id: 'experiences' },
            { label: 'Process', id: 'process' },
            { label: 'Gallery', id: 'gallery' },
            { label: 'Inquire', id: 'inquiry' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-ivory font-body text-sm tracking-wide gold-text hover:text-gold transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
