'use client';

import { motion } from 'framer-motion';
import { VideoBackground } from '@/components/ui/VideoBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useLenis } from '@/lib/lenis';
import { useScrollPlaybackRate } from '@/hooks/useScrollPlaybackRate';

export function Hero() {
  const lenis = useLenis();
  const playbackRate = useScrollPlaybackRate(0.85);

  // Split title into words for staggered reveal
  const titleWords = [
    'The',
    'Private',
    'Table',
    'by',
    'Sanjay',
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <VideoBackground
        overlayOpacity={0.5}
        playbackSpeed={playbackRate}
        poster="/images/dining-scene.png"
      />

      {/* Hero Content */}
      <div
        className="relative z-10 px-6 md:px-12 text-center max-w-4xl mx-auto"
        style={{
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Eyebrow */}
        <p
          className="text-xs md:text-sm tracking-widest uppercase font-body mb-8"
          style={{ color: '#c9a84c', fontSize: '14px', letterSpacing: '2px' }}
        >
          Private Chef · Sydney, Australia
        </p>

        {/* Main Title with word split */}
        <h1 className="font-display font-light mb-8 leading-tight" style={{ color: '#FFFFFF', fontSize: 'clamp(40px, 12vw, 100px)' }}>
          {titleWords.map((word, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ marginRight: '20px' }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          className="font-display italic font-light mb-12"
          style={{ color: '#c9a84c', fontSize: 'clamp(20px, 5vw, 36px)' }}
        >
          My Passion, Your Experience.
        </p>

        {/* Subtitle */}
        <p
          className="font-body max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: '#d9d3c7', fontSize: 'clamp(14px, 3vw, 18px)' }}
        >
          An intimate culinary experience crafted exclusively for you. Michelin-calibre cuisine, prepared in the privacy of your home.
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <MagneticButton
            variant="primary"
            onClick={() => {
              if (lenis) {
                lenis.scrollTo('#inquiry', { duration: 2 });
              }
            }}
          >
            Begin Your Experience
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#c9a84c' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
