'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Tiny placeholder for blur-up effect (cream tone to match background)
const BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALfZ2drPaQyy28Mkjxqzu8YJYkckkjk0pSlf/9k=';

interface CollectionCarouselProps {
  title: string;
  images: string[];
  collectionPath: string;
}

export default function CollectionCarousel({ title, images, collectionPath }: CollectionCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPosition = index * el.clientWidth;
    el.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  };

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

  // Handle lightbox open
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Handle lightbox close
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle lightbox navigation
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setLightboxIndex((prev) => (prev + 1) % images.length);
    } else {
      setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxOpen]);

  return (
    <section className="w-full bg-[#fffbeb] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-[#d9385b] font-space-grotesk font-extrabold mb-0 md:mb-8 text-center">
          {title}
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Hide scrollbar */}
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>
            {images.map((image, index) => (
              <figure
                key={image}
                className={`min-w-full snap-center relative overflow-hidden rounded-lg h-[50vh] md:h-[70vh] transition-all duration-1000 cursor-pointer ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={`${collectionPath}/${image}`}
                  alt={`${title} - Image ${index + 1}`}
                  width={1200}
                  height={900}
                  className="w-full h-full object-contain"
                  priority={index === 0}
                  quality={75}
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </figure>
            ))}
          </div>

          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={() => scrollByViewport('prev')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 backdrop-blur border border-white/30 p-3 text-white hover:bg-black/70 transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          {currentIndex < images.length - 1 && (
            <button
              onClick={() => scrollByViewport('next')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 backdrop-blur border border-white/30 p-3 text-white hover:bg-black/70 transition-all hover:scale-110"
              aria-label="Next image"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-[#d9385b]'
                      : 'w-2 bg-[#d9385b]/40 hover:bg-[#d9385b]/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[60] rounded-full bg-black/50 backdrop-blur border border-white/30 p-3 text-white hover:bg-black/70 transition-all hover:scale-110"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-black/50 backdrop-blur border border-white/30 p-3 text-white hover:bg-black/70 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-black/50 backdrop-blur border border-white/30 p-3 text-white hover:bg-black/70 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`${collectionPath}/${images[lightboxIndex]}`}
              alt={`${title} - Image ${lightboxIndex + 1}`}
              width={2000}
              height={2000}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              quality={85}
              sizes="100vw"
            />
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur border border-white/30 rounded-full px-4 py-2 text-white text-sm font-space-grotesk">
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

