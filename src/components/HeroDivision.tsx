'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const ArrowIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
  >
    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);



const stats = [
  { value: '35+', label: 'Years of excellence' },
  { value: '8', label: 'Factories' },
  { value: '14', label: 'Warehouses' },
  { value: '10', label: `Countries products exported` },
];

// Hero background slides per division (public/banners).
// `mobile` is optional — slides without it keep the desktop image on phones.
const BANNER_IMAGES: Record<
  'irrigation' | 'pipe',
  { src: string; mobile?: string }[]
> = {
  irrigation: [
    { src: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/irrigation_1.png', mobile: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/irrigation_1_Mobile.jpg' },
    { src: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/irrigation_2.png', mobile: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/irrigation_2_Mobile.jpg' },
      { src: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/irrigation_3.png' , mobile: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/irrigation_3_Mobile.jpg' }, 
  ], 
  pipe: [
    { src: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Pipe_1.png' , mobile: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Pipe_1_mobile.jpg' },
    { src: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Pipe_2.png', mobile: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Pipe_2_Mobile.jpg' },
    { src: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Pipe_3.png', mobile: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Pipe_3_Mobile.jpg' }, 
  ], 
};

const SLIDE_INTERVAL_MS = 5000;

export const HeroDivision = ({heroData}: {heroData: any}) => {
  const cardVideoRef = useRef<HTMLVideoElement>(null);
  const isIrrigationDivision = heroData.cardTitle.includes('Irrigation');
  const bannerImages = isIrrigationDivision ? BANNER_IMAGES.irrigation : BANNER_IMAGES.pipe;
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (bannerImages.length <= 1) return;
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % bannerImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  return (
    <div className="relative w-full min-h-[440px] sm:min-h-0 lg:min-h-[100dvh] bg-black text-white font-sans overflow-hidden">
      {/* Height driver: each banner gets its own height so cover never crops it */}
      <div className="w-full aspect-[1080/1740] sm:hidden" aria-hidden />
      <div className="hidden sm:block w-full aspect-[1376/768]" aria-hidden />

      {/* Background: auto-sliding banner images */}
      <div className="absolute inset-0 z-0">
        {bannerImages.map((banner, idx) => (
          <picture key={banner.src}>
            {banner.mobile && <source media="(max-width: 639px)" srcSet={banner.mobile} />}
            <img
              src={banner.src}
              alt=""
              aria-hidden={idx !== slide}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                idx === slide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </picture>
        ))}
        {/* Base Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}
        
        {/* Soft Contrast Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" /> */}
      </div>

      {/* Primary Content Container - Grid layout strictly divides screen into [Breadcrumb] [Center Space] and [Bottom Dock]} */}
      <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-14 sm:pt-20 pb-4 sm:pb-6 lg:pb-8 grid grid-rows-[auto_1fr_auto] gap-3.5 sm:gap-6">

        {/* Row 1: Breadcrumb */}
        {/* <nav
          aria-label="Breadcrumb"
          className="pt-4 sm:pt-10 w-full flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-white/60 overflow-x-auto whitespace-nowrap shrink-0"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-white">
            {isIrrigationDivision ? 'Irrigation Division' : 'Pipe Division'}
          </span>
        </nav> */}

        {/* TOP/MIDDLE SECTION: Row 2 takes 1fr (all remaining space) & centers content */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0">
            
            {/* Main Headline (Left) */}
            {/* <div className="w-full lg:w-2/3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.02] lg:leading-[0.95] drop-shadow-lg m-0">
                {heroData.headline}
              </h1>
            </div> */}

            {/* Dynamic Subtext and Button (Right) */}
            {/* <div className="w-full lg:w-1/3 flex flex-col gap-5 sm:gap-6 lg:pl-12">
              <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-xl lg:max-w-none drop-shadow-md">
                {heroData.subtext}
              </p>
          
            </div> */}

          </div>
        </div>

        {/* BOTTOM SECTION: Row 2 takes auto (locks strictly to the screen bottom) */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch lg:items-end gap-4 sm:gap-8 lg:gap-12">
          
          {/* Left Side: Stats Grid */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 lg:gap-6 border-t border-white/20 pt-4 sm:pt-6 w-full lg:w-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div> */}

          {/* Right Side: Compact Callout Card */}
          {/* <div className="w-full lg:w-auto lg:max-w-[340px] shrink-0">
            <div className="bg-black/50 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-sm shadow-2xl">
              <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr] gap-3.5 items-center">
                
             
                <div className="relative aspect-square overflow-hidden rounded-xs">
                  <video
                    ref={cardVideoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={heroData.videoSrc} type="video/mp4" />
                  </video>
                </div>
                
            
                <div className="flex flex-col justify-center gap-1">
                  <p className="font-semibold text-sm text-white leading-snug">{heroData.cardTitle}</p>
                  <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                    {heroData.cardDescription}
                  </p>
                </div>
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </div>
  );
};