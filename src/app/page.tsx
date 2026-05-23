'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experiences } from '@/components/sections/Experiences';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { InquiryForm } from '@/components/sections/InquiryForm';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="w-full bg-obsidian">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Experiences />
        <ProcessTimeline />
        <Gallery />
        <Testimonials />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}
