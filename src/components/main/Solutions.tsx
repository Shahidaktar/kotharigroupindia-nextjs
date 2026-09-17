'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Solutions = () => {
  return (
    <section 
      id="why-kothari"
      /* Clean white background + min-h-screen for full viewport height */
      className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Blue Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#1575B3]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Spacing: py-16 lg:py-24 adds top & bottom padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Side: Sharp Square Portrait Card */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full aspect-[4/5] overflow-hidden  bg-slate-900 rounded-none">
              <Image
                src="field3.jpeg" 
                alt="Kiran S. Kothari - Founder Chairman"
                fill
                priority
                unoptimized
                className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                <h3 className="text-xl font-bold">Kiran S. Kothari</h3>
                <p className="text-xs text-white/70">Founder Chairman, Kothari Group</p>
              </div> */}
            </div>
          </div>

          {/* Right Side: Editorial Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pl-4">
            
            {/* Top Tagline */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#1575B3]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#1575B3]">
                ABOUT US
              </span>
            </div>

            {/* Updated Quote Body */}
            <blockquote 
              className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-[1.35] text-[#0F172A] select-none"
            >
              “We are dedicated to nurturing lands and building dreams with <span className="font-semibold">innovative irrigation solutions</span> for agriculture and <span className="font-semibold">plumbing solutions</span> for farms and buildings.”
            </blockquote>

            {/* Author Attribution Block */}
            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
             <div className="hidden lg:block">
  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
    Kothari Group
  </h3>
  <p className="text-sm text-gray-500 font-medium">
    Pioneering Irrigation & Plumbing Excellence
  </p>
</div>

              {/* Square / Sharp CTA Button */}
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-none border border-gray-900 bg-transparent text-gray-900 text-sm font-semibold hover:bg-[#1575B3] hover:border-[#1575B3] hover:text-white transition-all duration-300 self-start sm:self-auto"
              >
                <span>Discover Our Story</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};