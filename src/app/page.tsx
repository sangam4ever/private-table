'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experiences } from '@/components/sections/Experiences';
import { Services } from '@/components/sections/Services';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
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
        <Services />
        <ProcessTimeline />
        <Testimonials />
        <FAQ />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}
