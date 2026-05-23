'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useState } from 'react';

const galleryImages = [
  {
    id: 'portrait',
    src: '/images/chef-portrait.png',
    alt: 'Chef preparing ingredients',
    title: 'Precision & Passion',
    category: 'Preparation',
    gridClass: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'dining',
    src: '/images/dining-scene.png',
    alt: 'Elegant table setting',
    title: 'The Experience',
    category: 'Service',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'detail',
    src: '/images/food-detail.jpg',
    alt: 'Plated dish detail',
    title: 'Culinary Artistry',
    category: 'Presentation',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
];

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 px-6 md:px-8 bg-obsidian"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          eyebrow="VISUAL JOURNEY"
          title="Cinematic Gallery"
          alignment="left"
          className="mb-16"
        />

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          style={{
            gridTemplateRows: 'auto auto',
            minHeight: '600px',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className={`${image.gridClass} relative overflow-hidden group cursor-pointer`}
              style={{ minHeight: '300px' }}
              variants={staggerItem}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredId === image.id ? 'scale-110' : 'scale-100'
                }`}
                quality={85}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-500" />

              {/* Content Overlay - slides up on hover */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                initial={{ y: 40, opacity: 0 }}
                animate={
                  hoveredId === image.id
                    ? { y: 0, opacity: 1 }
                    : { y: 40, opacity: 0 }
                }
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs uppercase tracking-widest gold-text font-light mb-3">
                  {image.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-ivory">
                  {image.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
