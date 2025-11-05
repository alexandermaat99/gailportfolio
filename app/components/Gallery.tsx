'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gallery } from '../constants';

export default function Gallery() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollByViewport = (direction: 'prev' | 'next') => {
    const el = carouselRef.current;
    if (!el) return;
    const amount = direction === 'next' ? el.clientWidth : -el.clientWidth;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // Track index based on scroll position
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const handle = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setCurrentIndex(idx);
    };
    el.addEventListener('scroll', handle, { passive: true });
    // Initialize index
    handle();
    return () => el.removeEventListener('scroll', handle as EventListener);
  }, []);

  // Trigger animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-[#fffbeb] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-3xl text-[#d9385b] font-space-grotesk font-extrabold mb-6">Gallery</h2>

        {/* Mobile: horizontal carousel */}
        <div className="relative block sm:hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* hide scrollbar in webkit */}
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>
            {gallery.map((item, index) => (
              <figure
                key={item.src}
                className={`min-w-full snap-center relative overflow-hidden rounded-lg border border-white/10 bg-black/20 h-[60vh] transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
                {item.title && (
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-2 py-1 font-space-grotesk">
                    {item.title}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          {/* Overlay arrows: only show left if not first, right if not last */}
          {currentIndex > 0 && (
            <button
              onClick={() => scrollByViewport('prev')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/40 backdrop-blur border border-white/30 p-2 text-white hover:bg-black/60 transition"
              aria-label="Previous"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          {currentIndex < gallery.length - 1 && (
            <button
              onClick={() => scrollByViewport('next')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/40 backdrop-blur border border-white/30 p-2 text-white hover:bg-black/60 transition"
              aria-label="Next"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </div>

        {/* Tablet/Desktop: grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <figure key={item.src} className={`group relative overflow-hidden rounded-lg border border-white/10 bg-black/20 aspect-[4/5] transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 200}ms` }}>
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.title && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity font-space-grotesk">
                  {item.title}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


