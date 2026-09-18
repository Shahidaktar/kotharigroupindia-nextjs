'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

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

const slides = [
  {
    bgImage: '/heronew.jpg',
    cardImage: '/heronew.jpg',
    headline: <>Engineered for<br />unmatched flow</>,
    subtext: 'Delivering high-durability plumbing solutions designed for leak-free precision, flawless water delivery, and modern waste management.',
    ctaText: 'Explore Plumbing Systems',
    cardTitle: 'Plumbing & Fittings',
    cardDescription: 'Zero-leak technology engineered for seamless water delivery and long-term security.',
  },
  {
    bgImage: '/heronew2.jpg',
    cardImage: '/heronew2.jpg',
    headline: <>Powering India’s<br />green revolution</>,
    subtext: 'Building heavy-duty agricultural piping systems that optimize every drop, protecting crops and maximizing harvest yields nationwide.',
    ctaText: 'Discover Agri Solutions',
    cardTitle: 'Agri Piping Networks',
    cardDescription: 'Robust field-tested piping crafted for sustainable, high-volume farm irrigation.',
  },
  {
    bgImage: '/heronew3.jpg',
    cardImage: '/heronew3.jpg',
    headline: <>Four decades of<br />smart irrigation</>,
    subtext: 'Empowering millions of farmers with intelligent micro-irrigation systems designed for peak crop vitality and water conservation.',
    ctaText: 'View Micro Irrigation',
    cardTitle: 'Micro Irrigation Systems',
    cardDescription: 'Intelligent drip and micro-flow technology maximizing yield with minimal water wastage.',
  },
];

const stats = [
  { value: '35+', label: 'Years of excellence' },
  { value: '8', label: 'Factories' },
  { value: '14', label: 'Warehouses' },
  { value: '10', label: `Countries' products exported` },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const cardImageRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;

      gsap.timeline()
        .to(
          [bgRef.current, headlineRef.current, subtextRef.current, cardImageRef.current, cardContentRef.current], 
          {
            opacity: 0.2,
            duration: 0.4,
            ease: 'power1.out',
            onComplete: () => {
              setCurrentSlide(nextSlide);
            },
          }
        )
        .to(
          [bgRef.current, headlineRef.current, subtextRef.current, cardImageRef.current, cardContentRef.current], 
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power1.in',
          }
        );
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const active = slides[currentSlide];

  return (
    <div className="relative w-full  min-h-[80dvh] sm:min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="relative w-full h-full">
          <Image
            src={active.bgImage}
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        
        {/* Base Dark Overlay */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        
        {/* Top-Heavy Gradient Overlay for increased top contrast and navbar contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
      </div>

      {/* Main Container - Full Height Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full  min-h-[80dvh] sm:min-h-[100dvh] pt-20 pb-8 sm:pb-12 flex flex-col justify-between">
        
        {/* Top spacer to ensure vertical balance */}
        <div aria-hidden="true" className="w-full shrink-0 h-4" />

        {/* Headline Section - Centered Vertically */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-0 my-auto">
          <div className="w-full lg:w-3/4">
            <h1 
              ref={headlineRef} 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0"
            >
              {active.headline}
            </h1>
          </div>
        </div>

        {/* Stats Grid & Dynamic Callout Card - Anchored at Bottom */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch lg:items-end gap-6 sm:gap-8 lg:gap-12 w-full mt-auto">
          
          {/* Left Side: Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 w-full lg:w-auto border-t border-white/20 pt-6">
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
                
                {/* Dynamic Card Thumbnail */}
                <div ref={cardImageRef} className="relative aspect-square w-full">
                  <Image
                    src={active.cardImage}
                    alt={active.cardTitle}
                    fill
                    className="object-cover rounded-xs"
                  />
                </div>
                
                {/* Dynamic Card Text */}
                <div ref={cardContentRef} className="flex flex-col justify-center gap-1">
                  <p className="font-semibold text-sm text-white leading-snug">{active.cardTitle}</p>
                  <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                    {active.cardDescription}
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