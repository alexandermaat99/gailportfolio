'use client';

import { title, description } from '../constants';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Use a stable src so SSR and client match; avoids hydration mismatches
  const videoSrc = '/heroVideo.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force play the video
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video is playing');
        } catch (error) {
          console.error('Autoplay failed:', error);
          // If autoplay fails, show a play button or handle gracefully
        }
      };
      
      playVideo();
    }
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => console.error('Video failed to load:', e)}
        onLoadStart={() => console.log('Video started loading')}
        onCanPlay={() => console.log('Video can play')}
        onPlay={() => console.log('Video is playing')}
        src={videoSrc}
        onLoadedData={() => console.log('Video loaded:', videoSrc)}
      />

      {/* Content */}
      <div className="relative flex h-full items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          {/* Main Heading */}
          <h1 className="mb-4 text-5xl font-bold font-space-grotesk text-[#fffbeb] md:text-6xl">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="mb-6 text-lg font-space-grotesk text-[#d9385b] font-extrabold md:text-xl">
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/portfolio"
              className="rounded-full bg-[#fffbeb] px-6 py-3 text-base font-semibold text-gray-900 transition-all duration-300 hover:bg-[#f5f0c4] hover:scale-105 font-space-grotesk"
            >
              View My Work
            </a>
            <a
              href="/about#contact"
              className="rounded-full border-2 border-[#fffbeb] px-6 py-3 text-base font-semibold text-[#fffbeb] transition-all duration-300 hover:bg-[#fffbeb] hover:text-gray-900 hover:scale-105 font-space-grotesk"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
