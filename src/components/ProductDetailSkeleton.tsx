'use client';
import React from 'react';

// Skeleton shown instantly while the product page streams in.
// Mirrors the hero layout: breadcrumb + title + image/content split + tabs bar.
export const ProductDetailSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-left font-sans antialiased" aria-busy="true" aria-label="Loading product">
      {/* Breadcrumb skeleton */}
      <div className="w-full border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 py-4 animate-pulse">
            <div className="h-3 w-12 bg-slate-200" />
            <div className="h-3 w-3 bg-slate-100" />
            <div className="h-3 w-16 bg-slate-200" />
            <div className="h-3 w-3 bg-slate-100" />
            <div className="h-3 w-32 bg-slate-200" />
            <div className="h-3 w-3 bg-slate-100" />
            <div className="h-3 w-48 bg-slate-200 hidden sm:block" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-10">
        {/* Title skeleton */}
        <div className="pb-6 border-b border-slate-200 mb-8 animate-pulse">
          <div className="h-8 sm:h-10 w-3/4 bg-slate-200 mb-3" />
          <div className="h-4 w-1/3 bg-slate-100" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Image skeleton */}
          <div className="lg:col-span-5">
            <div className="relative border border-slate-200 bg-[#F5F6F8] min-h-[320px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-slate-300 border-t-slate-500 animate-spin" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500">
                  Loading product…
                </span>
              </div>
            </div>
          </div>

          {/* Content skeleton */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 py-2 animate-pulse">
            <div className="h-7 w-2/3 bg-slate-200" />
            <div className="h-4 w-1/3 bg-slate-100" />
            <div className="border-t border-slate-200 pt-4 space-y-3">
              <div className="h-4 w-full bg-slate-100" />
              <div className="h-4 w-full bg-slate-100" />
              <div className="h-4 w-5/6 bg-slate-100" />
              <div className="h-4 w-4/6 bg-slate-100" />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="h-11 w-36 bg-slate-200" />
              <div className="h-11 w-44 bg-slate-100 border border-slate-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs header skeleton */}
      <div className="relative w-full border-b border-slate-200 overflow-hidden bg-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex gap-0 -mx-4 sm:mx-0 px-4 sm:px-0 animate-pulse">
            {['Features', 'Specifications', 'Standards', 'Dimensions', 'Fittings'].map((t) => (
              <div key={t} className="flex-1 px-2 sm:px-4 py-3.5">
                <div className="h-4 w-20 mx-auto bg-white/70" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="py-8 sm:py-10 min-h-[320px] animate-pulse">
          <div className="h-7 w-48 mx-auto bg-slate-200 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-slate-200 bg-slate-50 p-3.5 flex gap-3 items-center">
                <div className="w-7 h-7 bg-slate-200 shrink-0" />
                <div className="h-4 flex-1 bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
