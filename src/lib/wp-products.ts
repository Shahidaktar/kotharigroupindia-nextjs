// src/lib/wp-products.ts
import { cache } from 'react';
import { normalizeSlug as cleanSlug } from './slug';

const WP_API =
  process.env.NEXT_PUBLIC_WP_API_URL || 'https://admin.kotharigroupindia.com/wp-json';

// Auth for WooCommerce Admin API (server-side only — only called from server code).
function getWooAuthHeaders(): HeadersInit {
  const key = process.env.WOO_CONSUMER_KEY;
  const secret = process.env.WOO_CONSUMER_SECRET;
  if (!key || !secret) return {};
  return {
    Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64'),
  };
}

function normName(s: string): string {
  return (s || '').toLowerCase().trim().replace(/\s+/g, ' ');
}

// Join WooCommerce categories onto cards: slim authed request for
// id/slug/categories only, matched by slug (fallback: normalized name).
// Empty map when keys are missing or the request fails — cards fall back
// to segment/division slugs, so listings never break.
async function fetchWooCategoryMap(): Promise<Map<string, { slug: string; name: string }>> {
  const map = new Map<string, { slug: string; name: string }>();
  const apiBase =
    process.env.NEXT_PUBLIC_WP_API_URL || 'https://admin.kotharigroupindia.com/wp-json';
  if (!process.env.WOO_CONSUMER_KEY || !process.env.WOO_CONSUMER_SECRET) return map;
  try {
    const results = await Promise.allSettled(
      [1, 2, 3].map(async (page) => {
        const res = await fetchWithTimeout(
          `${apiBase}/wc/v3/products?per_page=100&page=${page}&_fields=id,slug,categories`,
          { headers: { ...getWooAuthHeaders() } }
        );
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      })
    );
    for (const result of results) {
      if (result.status !== 'fulfilled') continue;
      for (const p of result.value) {
        const cat = p.categories?.[0];
        if (!cat?.slug) continue;
        const entry = { slug: cleanSlug(String(cat.slug)), name: String(cat.name || '') };
        if (p.slug && !map.has(String(p.slug))) map.set(String(p.slug), entry);
        if (p.name) {
          const nameKey = `name:${normName(stripHtml(String(p.name)))}`;
          if (!map.has(nameKey)) map.set(nameKey, entry);
        }
      }
    }
    return map;
  } catch (error) {
    console.error('[wp-products] Woo category join failed:', error);
    return map;
  }
}

export interface WpProductCard {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  image: string | null;
  divisionName: string;
  divisionSlug: string;
  segmentName: string;
  segmentSlug: string;
  categoryName: string;
  categorySlug: string;
  featuredMediaId: number;
}

async function fetchWithTimeout(
  url: string,
  init?: RequestInit,
  ms = 30000,
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

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function mapCard(raw: any): WpProductCard {
  const acf = raw.acf || {};

  return {
    id: raw.id,
    name: stripHtml(raw.title?.rendered ?? ''),
    slug: raw.slug ?? '',
    tagline: stripHtml(acf.tagline ?? ''),
    image: null,
    divisionName: stripHtml(acf.division_name ?? ''),
    divisionSlug: cleanSlug(acf.division_slug ?? ''),
    segmentName: stripHtml(acf.segment_name ?? ''),
    segmentSlug: cleanSlug(acf.segment_slug ?? ''),
    categoryName: stripHtml(acf.category_name ?? ''),
    categorySlug: cleanSlug(acf.category_slug ?? ''),
    featuredMediaId: raw.featured_media ?? 0,
  };
}

// Resolves featured media URLs for many ids in a few slim requests
// (`/media` with `_fields=id,source_url` stays far below the 2MB
// Next.js data-cache limit that the full `_embed` payload exceeded).
async function fetchMediaUrls(ids: number[]): Promise<Map<number, string>> {
  const map = new Map<number, string>();
  for (const group of chunk(ids, 90)) {
    try {
      const res = await fetchWithTimeout(
        `${WP_API}/wp/v2/media?include=${group.join(',')}&per_page=100&_fields=id,source_url`,
        {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          next: { revalidate: 600 },
        }
      );
      if (!res.ok) continue;
      const data = await res.json();
      if (!Array.isArray(data)) continue;
      for (const m of data) {
        if (m.id && m.source_url) map.set(m.id, m.source_url);
      }
    } catch (error) {
      console.error('[wp-products] Media fetch failed:', error);
    }
  }
  return map;
}

// Fetches every product from the public WP `product` CPT
// (pagination-aware) and returns lightweight cards for listing.
// Pages are fetched in parallel with retries so a slow WP backend
// degrades gracefully instead of failing the whole page. Uses slim
// `_fields` projection so each cached response stays small.
export const fetchWpProductCards = cache(async (): Promise<WpProductCard[]> => {
  const all: WpProductCard[] = [];
  const PER_PAGE = 100;

  try {
    const results = await Promise.allSettled(
      [1, 2, 3].map(async (page) => {
        const res = await fetchWithTimeout(
          `${WP_API}/wp/v2/product?per_page=${PER_PAGE}&page=${page}&_fields=id,slug,title,acf,featured_media`,
          {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            next: { revalidate: 600 },
          }
        );
        if (!res.ok) return [] as WpProductCard[];
        const data = await res.json();
        if (!Array.isArray(data)) return [] as WpProductCard[];
        return data.map(mapCard);
      })
    );

    for (const result of results) {
      if (result.status === 'fulfilled') {
        const cards = result.value;
        if (cards.length) all.push(...cards);
        if (cards.length < PER_PAGE) break;
      } else {
        console.error('[wp-products] Page fetch failed:', result.reason);
      }
    }

    const mediaIds = [...new Set(all.map((c) => c.featuredMediaId).filter(Boolean))];
    if (mediaIds.length) {
      const urls = await fetchMediaUrls(mediaIds);
      for (const c of all) {
        c.image = urls.get(c.featuredMediaId) ?? null;
      }
    }

    // Join WooCommerce categories (slug + name) onto cards by product slug,
    // falling back to normalized name. Cards keep segment/division slugs
    // when no Woo category matches.
    const wooCats = await fetchWooCategoryMap();
    if (wooCats.size) {
      for (const c of all) {
        const hit =
          wooCats.get(c.slug) ?? wooCats.get(`name:${normName(c.name)}`);
        if (hit) {
          c.categorySlug = hit.slug;
          c.categoryName = hit.name;
        }
      }
    }
  } catch (error) {
    console.error('[wp-products] Fetch failed:', error);
  }

  return all;
});

export interface ProductsFilterOptions {
  divisions: { slug: string; name: string; count: number }[];
  segments: { slug: string; name: string; count: number }[];
}

// Derive division + segment filter options from the full product list.
export function getProductsFilterOptions(
  products: WpProductCard[]
): ProductsFilterOptions {
  const divisions = new Map<string, { slug: string; name: string; count: number }>();
  const segments = new Map<string, { slug: string; name: string; count: number }>();

  for (const p of products) {
    if (p.divisionSlug) {
      const curr = divisions.get(p.divisionSlug) || {
        slug: p.divisionSlug,
        name: p.divisionName || p.divisionSlug,
        count: 0,
      };
      curr.count += 1;
      divisions.set(p.divisionSlug, curr);
    }
    if (p.segmentSlug) {
      const curr = segments.get(p.segmentSlug) || {
        slug: p.segmentSlug,
        name: p.segmentName || p.segmentSlug,
        count: 0,
      };
      curr.count += 1;
      segments.set(p.segmentSlug, curr);
    }
  }

  return {
    divisions: [...divisions.values()].sort((a, b) => b.count - a.count),
    segments: [...segments.values()].sort((a, b) => b.count - a.count),
  };
}