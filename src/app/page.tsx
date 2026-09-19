import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { Hero } from '@/components/main/Hero';
import { Solutions } from '@/components/main/Solutions';
import { WhyKothari } from '@/components/main/WhyKothari';
import { Impact } from '@/components/main/Impact';
import { News, type HomeNewsCard } from '@/components/main/News';
import { WhyKothariGroup } from '@/components/main/WhyKothariGroup';
import { fetchWpHomeNews } from '@/lib/wp-posts';

export const revalidate = 600;

const FALLBACK_IMAGE =
  'https://kotharigroupindia.com/img/images/Irrigation_products.webp';

export default async function HomePage() {
  const { blogs, events } = await fetchWpHomeNews().catch(() => ({
    blogs: [],
    events: [],
  }));

  const blogPosts: HomeNewsCard[] | undefined = blogs.length
    ? blogs.map((post) => ({
        key: `wp-blog-${post.id}`,
        title: post.title,
        snippet: post.excerpt,
        date: post.date,
        readTime: `${post.readMinutes} MIN READ`,
        category: post.category,
        image: post.featuredImage || FALLBACK_IMAGE,
        href: `/blogs/${post.slug}`,
        cta: 'READ BLOG',
      }))
    : undefined;

  const newsItems: HomeNewsCard[] | undefined = events.length
    ? events.map((post) => ({
        key: `wp-news-${post.id}`,
        title: post.title,
        snippet: post.excerpt,
        date: post.date,
        readTime: `${post.readMinutes} MIN READ`,
        category: post.category,
        image: post.featuredImage || FALLBACK_IMAGE,
        href: `/press-release/${post.slug}`,
        cta: 'READ NEWS',
      }))
    : undefined;

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />
        <Hero />
        <WhyKothari />
        <WhyKothariGroup/>
        <Impact />
        <Solutions />
        <News blogPosts={blogPosts} newsItems={newsItems} />
        <Home2Footer />
      </div>
    </AppShell>
  );
}
