import { useEffect, useState } from 'react';

export function useScrollPlaybackRate(initialRate: number = 0.85) {
  const [playbackRate, setPlaybackRate] = useState(initialRate);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position and viewport height
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Hero section is approximately 100vh tall
      const heroHeight = viewportHeight;

      // Calculate scroll progress through hero (0 to 1)
      const scrollProgress = Math.min(scrollY / heroHeight, 1);

      // Calculate playback rate: starts at initialRate, slows down to 0.2x as you scroll
      // At scroll progress 0: playbackRate = initialRate
      // At scroll progress 1: playbackRate = 0.2
      const newRate = initialRate * (1 - scrollProgress * 0.76);

      setPlaybackRate(Math.max(newRate, 0.2));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialRate]);

  return playbackRate;
}
