import React, { Suspense } from 'react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { NewsGallery } from '@/components/news/NewsGallery';
import { newsData, type NewsItem } from '@/lib/news';
import {
  fetchWpNewsPosts,
  NEWS_CATEGORY_SLUGS,
  NEWS_CATEGORY_LABELS,
} from '@/lib/wp-posts';

export const metadata = {
  title: 'News & Press Releases | Kothari Group',
  description:
    'Stay updated with the latest press releases from Kothari Group, covering our awards, launches and major announcements in the agricultural sector.',
};

export const revalidate = 600;

const FALLBACK_IMAGE = 'https://kotharigroupindia.com/img/images/Irrigation_products.webp';

// Preferred tab order — a tab only appears when it has at least one post.
const TAB_ORDER = [...NEWS_CATEGORY_SLUGS];

async function NewsContent() {
  const wpPosts = await fetchWpNewsPosts().catch(() => []);

  const seen = new Set<string>();
  const news: NewsItem[] = [];

  // Live WordPress posts first (Events / Announcements / Updates).
  for (const post of wpPosts) {
    if (!post.slug || seen.has(post.slug)) continue;
    seen.add(post.slug);
    news.push({
      slug: post.slug,
      image: post.featuredImage || FALLBACK_IMAGE,
      title: post.title,
      description: post.excerpt,
      info: post.content || '',
      category:
        NEWS_CATEGORY_LABELS[post.categorySlug] ||
        post.category ||
        'Updates',
      date: post.date,
    });
  }

  // Static press releases are a per-category fallback: they only fill
  // categories WordPress doesn't serve yet (or when WP is down).
  const wpCategories = new Set(
    wpPosts.map(
      (post) => NEWS_CATEGORY_LABELS[post.categorySlug] || post.category
    )
  );
  for (const item of newsData.news) {
    if (seen.has(item.slug)) continue;
    if (wpCategories.has(item.category)) continue;
    seen.add(item.slug);
    news.push(item);
  }

  // All three tabs always show — an empty category renders the
  // gallery's Not Found state instead of hiding the tab.
  const present = new Set(news.map((n) => n.category));
  const categories = [
    'All',
    ...TAB_ORDER.map((slug) => NEWS_CATEGORY_LABELS[slug]),
    ...[...present]
      .filter(
        (cat) =>
          cat !== 'All' &&
          !Object.values(NEWS_CATEGORY_LABELS).includes(cat)
      )
      .sort(),
  ];

  return <NewsGallery news={news} categories={categories} />;
}

export default async function NewsPage() {

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/heronew.jpg"
              alt="News & press releases"
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
                News &amp; Articles
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Stay updated with the latest news, awards, launches and major announcements from Kothari
                Group.
              </p>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Array.from({ length: 3 }).map((_, i) => (
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
              <NewsContent />
            </Suspense>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}