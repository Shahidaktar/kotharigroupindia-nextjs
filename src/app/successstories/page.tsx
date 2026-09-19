import React, { Suspense } from 'react';
import Link from 'next/link';
import { ChevronRight, Newspaper } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { Pagination } from '@/components/blog/Pagination';
import { fetchWpBlogPosts, WP_CATEGORIES } from '@/lib/wp-posts';

export const metadata = {
  title: 'Success Stories | Kothari Group',
  description:
    'Real-world success stories of how Kothari Group piping and irrigation solutions are transforming farms, fields, and communities.',
};

export const revalidate = 600;

const POSTS_PER_PAGE = 9;

async function SuccessStoriesContent({ page }: { page: number }) {
  const { posts, total, totalPages } = await fetchWpBlogPosts(page, POSTS_PER_PAGE, WP_CATEGORIES.successStory);

  return (
    <>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} basePath="/successstories" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="w-16 h-16 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center mb-5">
            <Newspaper className="w-7 h-7 text-slate-300" />
          </span>
          <h3 className="text-xl font-semibold text-slate-900">No success stories found</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-sm">
            We could not find any published success stories. Please check back later.
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="pt-12 flex flex-col items-center gap-4">
            <Pagination page={page} totalPages={totalPages} basePath="/successstories" />
        </div>
      )}
    </>
  );
}

export default async function SuccessStoriesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/heronew.jpg"
              alt="Success Stories"
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
                Success Stories
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Real-world outcomes from Kothari Group piping and irrigation projects — farms transformed, water
                saved, communities strengthened.
              </p>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="border border-slate-200/90 bg-white shadow-sm overflow-hidden">
                      <div className="aspect-[16/10] bg-slate-200 animate-pulse" />
                      <div className="p-6 space-y-3">
                        <div className="h-3 w-24 bg-slate-200 animate-pulse" />
                        <div className="h-5 w-full bg-slate-200 animate-pulse" />
                        <div className="h-4 w-3/4 bg-slate-200 animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <div className="space-y-10">
                <SuccessStoriesContent page={page} />
              </div>
            </Suspense>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}