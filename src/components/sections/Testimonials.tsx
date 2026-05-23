'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance carousel every 6 seconds (pause on hover)
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir < 0 ? 40 : -40,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-obsidian-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          eyebrow="CLIENT STORIES"
          title="Testimonials"
          alignment="center"
          className="mb-16 md:mb-24"
        />

        {/* Carousel */}
        <div
          className="relative h-80 md:h-96 flex items-center justify-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
              }}
              className="absolute w-full text-center px-6"
            >
              {/* Quote Mark */}
              <motion.div
                className="mb-6 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <svg
                  className="w-12 h-12 gold-text opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-7-3s-7 1.75-7 3v10c0 1 0 7 7 7z" />
                </svg>
              </motion.div>

              {/* Quote Text */}
              <motion.p
                className="font-display text-2xl md:text-3xl font-light text-ivory italic mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                &quot;{testimonials[activeIndex].quote}&quot;
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="font-body font-light text-ivory mb-2">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-xs uppercase tracking-widest gold-text font-light">
                  {testimonials[activeIndex].occasion} · {testimonials[activeIndex].location}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-12 md:mt-16">
          {/* Previous Button */}
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 flex items-center justify-center border border-gold/40 hover:border-gold transition-colors group"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 gold-text group-hover:text-gold transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-gold w-8'
                    : 'bg-gold/30 hover:bg-gold/60'
                }`}
                animate={
                  index === activeIndex
                    ? {
                        boxShadow: '0 0 12px rgba(201, 168, 76, 0.6)',
                      }
                    : {
                        boxShadow: '0 0 0px rgba(201, 168, 76, 0)',
                      }
                }
                transition={{ duration: 0.3 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 flex items-center justify-center border border-gold/40 hover:border-gold transition-colors group"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 gold-text group-hover:text-gold transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
