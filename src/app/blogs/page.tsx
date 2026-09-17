import React, { Suspense } from 'react';
import Link from 'next/link';
import { ChevronRight, Newspaper, ArrowUpRight } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { Pagination } from '@/components/blog/Pagination';
import { fetchWpBlogPosts, WP_CATEGORIES } from '@/lib/wp-posts';

export const metadata = {
  title: 'Blogs & Insights | Kothari Group',
  description:
    'In-depth engineering articles, farming guides, and water management tutorials curated by Kothari Group specialists.',
};

export const revalidate = 600;

const POSTS_PER_PAGE = 9;

async function BlogsContent({ page }: { page: number }) {
  const { posts, total, totalPages } = await fetchWpBlogPosts(
    page,
    POSTS_PER_PAGE,
    WP_CATEGORIES.blogs
  );

  const from = total === 0 ? 0 : (page - 1) * POSTS_PER_PAGE + 1;
  const to = Math.min(page * POSTS_PER_PAGE, total);

  return (
    <>
      {/* <div className="flex items-center justify-between gap-6 pb-6 border-b border-slate-300">
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          {total > 0 ? (
            <>
              Showing <span className="font-semibold text-[#1575B3]">{from}–{to}</span> of{' '}
              <span className="font-semibold text-slate-900">{total}</span> articles
            </>
          ) : (
            'No articles yet'
          )}
        </p>
      </div> */}

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="w-16 h-16 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center mb-5">
            <Newspaper className="w-7 h-7 text-slate-300" />
          </span>
          <h3 className="text-xl font-semibold text-slate-900">No articles found</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-sm">
            We could not find any published articles. Please check back later.
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="pt-12 flex flex-col items-center gap-4">
          <Pagination page={page} totalPages={totalPages} />
        </div>
      )}
    </>
  );
}

export default async function BlogsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
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
              alt="Blogs and insights"
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
                Blogs &amp; Insights
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                In-depth engineering articles, farming guides, and water management tutorials curated by Kothari
                specialists.
              </p>
            </div>

            {/* <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full border-t border-white/20 pt-6 max-w-2xl">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                  {POSTS_PER_PAGE}
                </span>
                <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                  Articles per page
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                  Expert
                </span>
                <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                  Authored guidance
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                  200
                </span>
                <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                  Words per read minute
                </span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Blog Grid */}
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
                <BlogsContent page={page} />
              </div>
            </Suspense>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}