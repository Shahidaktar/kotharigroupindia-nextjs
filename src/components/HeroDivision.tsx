'use client';

import { useRef } from 'react';

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
  { value: '10', label: `Countries' products exported` },
];

export const HeroDivision = ({heroData}: {heroData: any}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full h-[100dvh] bg-black text-white font-sans overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={heroData.videoSrc} type="video/mp4" />
        </video>
        
        {/* Base Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        {/* Soft Contrast Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Primary Content Container - Grid layout strictly divides screen into [Center Space] and [Bottom Dock] */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full pt-20 pb-6 sm:pb-8 grid grid-rows-[1fr_auto] gap-6">
        
        {/* TOP/MIDDLE SECTION: Row 1 takes 1fr (all remaining space) & centers content */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0">
            
            {/* Main Headline (Left) */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.02] lg:leading-[0.95] drop-shadow-lg m-0">
                {heroData.headline}
              </h1>
            </div>

            {/* Dynamic Subtext and Button (Right) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-5 sm:gap-6 lg:pl-12">
              <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-xl lg:max-w-none drop-shadow-md">
                {heroData.subtext}
              </p>
              {/* <a 
                href="#" 
                className="group inline-flex items-center self-start bg-white text-black px-6 sm:px-7 py-3.5 sm:py-4 font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/90 transition-colors shrink-0 shadow-lg"
              >
                {heroData.ctaText}
                <ArrowIcon />
              </a> */}
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Row 2 takes auto (locks strictly to the screen bottom) */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch lg:items-end gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Side: Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 border-t border-white/20 pt-6 w-full lg:w-auto">
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
          </div>

          {/* Right Side: Compact Callout Card */}
          <div className="w-full lg:w-auto lg:max-w-[340px] shrink-0">
            <div className="bg-black/50 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-sm shadow-2xl">
              <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr] gap-3.5 items-center">
                
                {/* Video Thumbnail */}
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
                
                {/* Card Text */}
                <div className="flex flex-col justify-center gap-1">
                  <p className="font-semibold text-sm text-white leading-snug">{heroData.cardTitle}</p>
                  <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                    {heroData.cardDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};