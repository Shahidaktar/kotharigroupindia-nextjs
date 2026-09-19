import React, { Suspense } from 'react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { DownloadGallery } from '@/components/download/DownloadGallery';
import { downloadsData } from '@/lib/download';

export const metadata = {
  title: 'Downloads & Brochures | Kothari Group',
  description:
    'Access downloadable resources from Kothari Group company profile, system brochures, agriculture guides and more to support smart irrigation and farming solutions.',
};

export default async function DownloadsPage() {
  const { downloads, categories } = downloadsData;

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/heronew.jpg"
              alt="Downloads & brochures"
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
                Downloads &amp; Brochures
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Access company profiles, system brochures, agriculture guides and more to support smart
                irrigation and farming solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Downloads */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <Suspense
              fallback={
                <div className="flex flex-col gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="border border-slate-200/90 bg-white shadow-sm p-6">
                      <div className="h-3 w-24 bg-slate-200 animate-pulse mb-2" />
                      <div className="h-5 w-1/2 bg-slate-200 animate-pulse mb-2" />
                      <div className="h-4 w-3/4 bg-slate-200 animate-pulse" />
                    </div>
                  ))}
                </div>
              }
            >
              <DownloadGallery downloads={downloads} categories={categories} />
            </Suspense>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}