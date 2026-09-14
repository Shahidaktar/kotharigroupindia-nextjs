// src/lib/wp-posts.ts
import { cache } from 'react';

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || 'https://admin.kotharigroupindia.com/wp-json';

export interface WpBlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorAvatar: string | null;
  category: string;
  featuredImage: string | null;
  readMinutes: number;
  content?: string;
}

export interface WpBlogList {
  posts: WpBlogPost[];
  total: number;
  totalPages: number;
}

// Fetch with a timeout so a slow WP backend never hangs navigation.
// Retries once on abort/timeout so a transient slow response never crashes the server.
async function fetchWithTimeout(
  url: string,
  init?: RequestInit,
  ms = 20000,
  attempts = 2
): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    const controller = new AbortController();
    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) controller.abort();
    }, ms);
    try {
      const res = await fetch(url, { ...init, signal: controller.signal });
      settled = true;
      return res;
    } catch (error) {
      settled = true;
      lastError = error;
      if (attempt === attempts) break;
      await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}

// Strip HTML and normalize whitespace to plain text.
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;|&#8220;|&#8221;/g, '"')
    .replace(/&#039;|&#8217;/g, "'")
    .replace(/&#8230;|&hellip;/g, '…')
    .replace(/\s+/g, ' ')
    .trim();
}

// Format ISO date as e.g. "12 March 2026".
function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Estimate reading time from word count.
function estimateReadMinutes(content: string): number {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function mapPost(raw: any): WpBlogPost {
  const embed = raw._embedded || {};
  const media = embed['wp:featuredmedia'];
  const term = embed['wp:term'];
  const category = term?.[0]?.find((t: any) => t.taxonomy === 'category')?.name ?? 'Kothari Group';
  const author =
    raw.acf?.author_name ??
    embed?.author?.[0]?.name ??
    'Kothari Group';
  const authorAvatar = embed?.author?.[0]?.avatar_urls?.['96'] ?? null;
  const authorImageOverride =
    raw.acf?.author_image ??
    embed?.author?.[0]?.acf?.author_image ??
    null;
  const content = raw.content?.rendered ?? '';
  return {
    id: raw.id,
    slug: raw.slug,
    title: stripHtml(raw.title?.rendered ?? ''),
    excerpt: stripHtml(raw.excerpt?.rendered ?? ''),
    date: formatDate(raw.date ?? ''),
    author,
    authorAvatar: authorImageOverride || authorAvatar,
    category,
    featuredImage: media?.[0]?.source_url ?? null,
    readMinutes: estimateReadMinutes(content),
    content,
  };
}

// Fetch a page of blog posts from WordPress with pagination headers.
// Optional categoryId filters to a single category (e.g. blogs vs success stories).
// Returns an empty result on failure instead of throwing — keeps the server alive.
export const fetchWpBlogPosts = cache(async (page = 1, perPage = 9, categoryId?: number): Promise<WpBlogList> => {
  const categoryQuery = categoryId ? `&categories=${categoryId}` : '';
  const url = `${WP_API}/wp/v2/posts?page=${page}&per_page=${perPage}&_embed${categoryQuery}`;
  try {
    const res = await fetchWithTimeout(url, {
      next: { revalidate: 600 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const total = Number(res.headers.get('x-wp-total') || '0');
    const totalPages = Number(res.headers.get('x-wp-totalpages') || res.headers.get('x-wp-total-pages') || '1');
    const data = await res.json();
    const posts = (Array.isArray(data) ? data : []).map(mapPost);
    return { posts, total, totalPages };
  } catch {
    console.error('[wp-posts] Failed to fetch blog posts:', url);
    return { posts: [], total: 0, totalPages: 0 };
  }
});

// WordPress category IDs used for the news/blog/content mix.
export const WP_CATEGORIES = {
  blogs: 1,
  successStory: 180,
} as const;

// Fetch a single post by slug (full content included).
// Returns null on failure instead of throwing.
export const fetchWpBlogPostBySlug = cache(async (slug: string): Promise<WpBlogPost | null> => {
  const url = `${WP_API}/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;
  try {
    const res = await fetchWithTimeout(url, {
      next: { revalidate: 600 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const post = Array.isArray(data) && data.length ? data[0] : null;
    return post ? mapPost(post) : null;
  } catch {
    console.error('[wp-posts] Failed to fetch post by slug:', slug);
    return null;
  }
});