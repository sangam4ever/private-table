'use client';

import { VideoBackgroundProps } from '@/types';
import { useEffect, useState, useRef } from 'react';

export function VideoBackground({
  src,
  poster,
  className = '',
  overlayOpacity = 0.5,
  overlayColor = '#0a0a0a',
  playbackSpeed = 0.75,
}: VideoBackgroundProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Array of videos to loop through
  const videos = ['/videos/ambient.mp4', '/videos/hero.mp4'];
  const currentSrc = src || videos[currentVideoIndex];

  useEffect(() => {
    // Show video on all screen sizes
    setShowVideo(true);
  }, []);

  useEffect(() => {
    if (videoRef.current && typeof playbackSpeed === 'number') {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Handle video end to switch to next video
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current && currentVideoIndex > 0) {
      videoRef.current.src = videos[currentVideoIndex];
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex, videos]);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* Video background - only on desktop */}
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover"
          style={{ objectPosition: '60% 50%' }}
          onEnded={handleVideoEnd}
        >
          <source src={currentSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Poster fallback for mobile */}
      {!showVideo && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${poster})`,
          }}
        />
      )}

      {/* Overlay for cinematic effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
    </div>
  );
}
