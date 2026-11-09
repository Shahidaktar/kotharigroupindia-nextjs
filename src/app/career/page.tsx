import React, { Suspense } from 'react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { CareersGallery } from '@/components/career/CareersGallery';
import { careerData } from '@/lib/career';
import { fetchWpJobs } from '@/lib/career-wp';
import { wpPageMetadataFor, resolveSeoText } from '@/lib/wp-seo';
import { JsonLd } from '@/components/JsonLd';
import { ORG_ID, standardPageGraph } from '@/lib/schema';

// Single source of truth for both the title tag and the JSON-LD {{PAGE_TITLE}},
// so the two can never drift. Yoast overrides this at runtime when set.
const SEO_FALLBACK = {
  title: 'Join Our Team - Kothari Group',
  description:
    'Discover career opportunities with Kothari Group India. Join us in delivering plumbing, irrigation & infrastructure solutions across India in a dynamic environment.',
};

export const generateMetadata = wpPageMetadataFor('career', SEO_FALLBACK);

// Jobs are managed in WordPress (Careers > Job Posts) and revalidated every
// 10 minutes. If the WP API is unavailable, the static careerData list is used.
export const revalidate = 600;

export default async function CareersPage() {
  const liveJobs = await fetchWpJobs();
  const jobs = liveJobs ?? careerData.jobs;
  const locations = [
    'All',
    ...Array.from(new Set(jobs.map((job) => job.location).filter(Boolean))),
  ];
  const seo = await resolveSeoText('career', SEO_FALLBACK);

  return (
    <>
      <JsonLd
        data={standardPageGraph({
          path: '/career',
          pageName: 'Career',
          title: seo.title,
          description: seo.description,
          pageType: 'WebPage',
          aboutId: ORG_ID,
        })}
      />
      <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] sm:h-full sm:min-h-0 lg:h-auto lg:min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/6340698/pexels-photo-6340698.jpeg"
              alt="Careers at Kothari Group"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 w-full min-h-[50dvh] sm:h-full sm:min-h-0 lg:h-auto lg:min-h-[50dvh] pt-28 sm:pt-20 lg:pt-32 pb-10 sm:pb-5 lg:pb-10 flex flex-col justify-between">
            <div className="flex flex-col gap-5 sm:gap-3 lg:gap-6 my-auto py-8 sm:py-3 lg:py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5">
                Kothari Group
              </span>
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                Career
              </h1>
              <p className="text-sm sm:text-xs md:text-sm lg:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Join our team in delivering plumbing, irrigation and infrastructure solutions across
                India in a dynamic environment.
              </p>
            </div>
          </div>
        </div>

        {/* Current Openings */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <Suspense
              fallback={
                <div className="flex flex-col gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border border-slate-200/90 bg-white shadow-sm p-6">
                      <div className="h-5 w-1/2 bg-slate-200 animate-pulse mb-3" />
                      <div className="h-3 w-32 bg-slate-200 animate-pulse mb-3" />
                      <div className="h-4 w-3/4 bg-slate-200 animate-pulse" />
                    </div>
                  ))}
                </div>
              }
            >
              <CareersGallery jobs={jobs} locations={locations} />
            </Suspense>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
    </>
  );
}