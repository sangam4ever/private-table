'use client';

import { createContext, useContext, useEffect, ReactNode, useState } from 'react';

const LenisContext = createContext<any>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [lenis, setLenis] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setMounted(true);

    // Import and initialize Lenis only on client
    const initLenis = async () => {
      try {
        const LenisModule = await import('lenis');
        const Lenis = LenisModule.default;

        const lenisInstance = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        });

        setLenis(lenisInstance);

        // RAF loop
        let animationFrameId: number;
        const raf = (time: number) => {
          lenisInstance.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        };
        animationFrameId = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(animationFrameId);
          lenisInstance.destroy();
        };
      } catch (error) {
        console.error('Failed to initialize Lenis:', error);
      }
    };

    const cleanup = initLenis();
    return () => {
      cleanup.then((fn) => fn?.());
    };
  }, []);

  // Don't render children until mounted to avoid SSR issues
  if (!mounted) {
    return children;
  }

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export const useLenis = () => useContext(LenisContext);
