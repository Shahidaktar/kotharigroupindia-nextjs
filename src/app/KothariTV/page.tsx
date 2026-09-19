import React, { Suspense } from 'react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { VideoGallery } from '@/components/video/VideoGallery';
import { kothariTVData } from '@/lib/video';

export const metadata = {
  title: 'KothariTV: Videos & Insights | Kothari Group',
  description:
    'Watch videos showcasing our solutions, product demos, tutorials, and success stories from Kothari Group.',
};

export default async function VideosPage() {
  const { videos, categories } = kothariTVData;

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/heronew.jpg"
              alt="KothariTV videos"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full min-h-[50dvh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
            <div className="flex flex-col gap-5 sm:gap-6 my-auto py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                Kothari Group
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                Kothari TV
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Watch videos showcasing our solutions, tutorials, success stories, and more — your window to
                innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="border border-slate-200/90 bg-white shadow-sm overflow-hidden">
                      <div className="aspect-video bg-slate-200 animate-pulse" />
                    </div>
                  ))}
                </div>
              }
            >
              <VideoGallery videos={videos} categories={categories} />
            </Suspense>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}