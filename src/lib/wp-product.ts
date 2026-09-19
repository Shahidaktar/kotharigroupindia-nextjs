// src/lib/wp-product.ts
import { cache } from 'react';
import { normalizeSlug as cleanSlug } from './slug';

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL;
const WOO_ADMIN = `${WP_API}/wc/v3/products`;
const WP_MEDIA = `${WP_API}/wp/v2/media`;

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

// Auth for Admin API (server-side only)
function getAuthHeaders(): HeadersInit {
  const key = process.env.WOO_CONSUMER_KEY;
  const secret = process.env.WOO_CONSUMER_SECRET;
  if (!key || !secret) return {};
  return {
    Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64'),
  };
}

// Helper: find value in meta_data array by key
function getMeta(meta: { key: string; value: unknown }[] | undefined, key: string): unknown {
  return meta?.find((m) => m.key === key)?.value;
}

// Helper: get string from meta
function getMetaString(meta: { key: string; value: unknown }[] | undefined, key: string): string {
  const v = getMeta(meta, key);
  if (typeof v === 'string') return v;
  return '';
}

// Helper: get array from meta (supports string, number, or object with ID)
function getMetaArray(meta: { key: string; value: unknown }[] | undefined, key: string): (string | number)[] {
  const v = getMeta(meta, key);
  if (Array.isArray(v)) {
    return v
      .map((x) => {
        if (typeof x === 'object' && x !== null && 'ID' in x) {
          return (x as { ID: number | string }).ID;
        }
        return x;
      })
      .filter((x): x is string | number => (typeof x === 'string' && x.trim() !== '') || typeof x === 'number');
  }
  if (typeof v === 'string' && v.trim()) return [v.trim()];
  if (typeof v === 'number') return [v];
  return [];
}

// Helper: Convert YouTube Watch URL to Embed URL
function getYouTubeEmbedUrl(url: string): string {
  if (!url) return '';
  if (url.includes('/embed/')) return url;
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
}

// Parsed WP Product
export interface WpProductData {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  
  // New Organization Fields
  divisionName: string;
  divisionSlug: string;
  segmentName: string;
  segmentSlug: string;
  
  // Hero
  tagline: string;
  mainDescriptionHtml: string;
  
  // Images
  mainImage: string;
  certificateImages: { src: string; alt: string; thumbnail: string }[];
  
  // Tab content (HTML)
  featuresHtml: string;
  specificationsHtml: string;
  standardsHtml: string;
  dimensionsHtml: string;
  fittingsHtml: string;
  applicationsHtml: string;
  
  // Media
  productVideoUrl: string;
  
  // FAQ
  faqs: { question: string; answer: string }[];
  
  // PDF
  pdfUrl: string;
  pdfName: string;
  pdfSize: number;
  
  // Description fallback
  descriptionHtml: string;
  
  // Related products
  relatedProducts: {
    id: number;
    name: string;
    slug: string;
    image: string;
    shortDescription: string;
    tagline: string;
    category: string;
    categorySlug: string;
  }[];


    // SEO (Yoast)
  seoTitle: string;
  seoDescription: string;
}

// Parse FAQ HTML into structured array
function parseFaqHtml(html: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  if (!html) return faqs;
  
  const parts = html.split(/<h4>/i).filter(Boolean);
  for (const part of parts) {
    const qMatch = part.match(/<b>(.*?)<\/b>/i);
    const aMatch = part.match(/<\/h4>\s*([\s\S]*?)(?=<h4>|$)/i);
    if (qMatch) {
      faqs.push({
        question: qMatch[1].replace(/^\d+\.\s*/, '').trim(),
        answer: aMatch
          ? aMatch[1]
              .replace(/<[^>]*>/g, '')
              .replace(/&amp;/g, '&')
              .replace(/&nbsp;/g, ' ')
              .trim()
          : '',
      });
    }
  }
  return faqs;
}

// Main fetch function — cached so generateMetadata + page share one request
export const fetchWpProductBySlug = cache(async (slug: string): Promise<WpProductData | null> => {
  try {
    const res = await fetchWithTimeout(`${WOO_ADMIN}?slug=${slug}&per_page=1`, {
      headers: { ...getAuthHeaders() },
      next: { revalidate: 600 },
    });

    if (!res.ok) return null;

    const products = await res.json();
    if (!products.length) return null;

    const raw = products[0];
    const meta = raw.meta_data || [];

    // Extract new ACF fields
    const divisionName = getMetaString(meta, 'division_name');
    const divisionSlug = cleanSlug(getMetaString(meta, 'division_slug'));
    const segmentName = getMetaString(meta, 'segment_name');
    const segmentSlug = cleanSlug(getMetaString(meta, 'segment_slug'));

    const tagline = getMetaString(meta, 'tagline');
    const mainDescriptionHtml = getMetaString(meta, 'main_description');

    const featuresHtml = getMetaString(meta, 'tab_features');
    const specificationsHtml = getMetaString(meta, 'tab_specifications');
    const standardsHtml = getMetaString(meta, 'tab_standards');
    const dimensionsHtml = getMetaString(meta, 'tab_dimensions');
    const fittingsHtml = getMetaString(meta, 'tab_fittings');
    const applicationsHtml = getMetaString(meta, 'tab_applications');

    const rawVideoUrl = getMetaString(meta, 'product_video_url');
    const productVideoUrl = getYouTubeEmbedUrl(rawVideoUrl);

    // Existing fields
    const faqRawHtml = getMetaString(meta, 'faq_content');
    const faqs = faqRawHtml ? parseFaqHtml(faqRawHtml) : [];

    const images = raw.images || [];
    const mainImage = images[0]?.src || '';
    const certificateImages = images
      .slice(1)
      .map((img: { src: string; alt: string; thumbnail: string }) => ({
        src: img.src,
        alt: img.alt || raw.name,
        thumbnail: img.thumbnail || img.src,
      }));

    const category = raw.categories?.[0]?.name || '';
    const categorySlug = cleanSlug(raw.categories?.[0]?.slug || '');
    const descriptionHtml = raw.description || '';


        // Extract Yoast SEO fields
    const seoTitle = getMetaString(meta, '_yoast_wpseo_title');
    const seoDescription = getMetaString(meta, '_yoast_wpseo_metadesc');

    // PDF fetching logic (existing)
    const pdfMediaIds = getMetaArray(meta, 'wcpoa_attachment_url');
    const pdfNames = getMetaArray(meta, 'wcpoa_attachment_name');

    let pdfUrl = '';
    let pdfName = 'Technical-Catalogue.pdf';
    let pdfSize = 0;

    // PDF + related IDs resolved first so the two network calls run in parallel
    const manualRelatedIds = getMetaArray(meta, 'related_products_manual');
    const wooRelatedIds: number[] = raw.related_ids || [];
    const relatedIds = manualRelatedIds.length > 0 ? manualRelatedIds : wooRelatedIds;

    const [mediaResult, relatedProducts] = await Promise.all([
      (async () => {
        if (!pdfMediaIds.length || !pdfMediaIds[0]) return null;
        try {
          const mediaRes = await fetchWithTimeout(`${WP_MEDIA}/${pdfMediaIds[0]}`, {
            headers: { ...getAuthHeaders() },
            next: { revalidate: 3600 },
          }, 8000);
          if (!mediaRes.ok) return null;
          return await mediaRes.json();
        } catch {
          return null; // PDF fetch failed — page still renders
        }
      })(),
      fetchRelatedProductsByIds(relatedIds),
    ]);

    if (mediaResult) {
      pdfUrl = mediaResult.source_url || '';
      pdfName = mediaResult.filename || pdfNames[0] || 'Technical-Catalogue.pdf';
      pdfSize = mediaResult.filesize || 0;
    }

    return {
      id: raw.id,
      name: raw.name,
      slug: raw.slug,
      category,
      categorySlug,
      divisionName,
      divisionSlug,
      segmentName,
      segmentSlug,
      tagline,
      mainDescriptionHtml,
      mainImage,
      certificateImages,
      featuresHtml,
      specificationsHtml,
      standardsHtml,
      dimensionsHtml,
      fittingsHtml,
      applicationsHtml,
      productVideoUrl,
      faqs,
      pdfUrl,
      pdfName,
      pdfSize,
      descriptionHtml,
      seoTitle,
      seoDescription,
      relatedProducts,
    };
  } catch (error) {
    console.error('[wp-product] Fetch failed for slug:', slug, error);
    return null;
  }
});

// Fetch related products by Segment Slug (New ACF logic)
async function fetchRelatedProductsBySegment(
  currentId: number,
  segmentSlug: string
): Promise<WpProductData['relatedProducts']> {
  try {
    // Fetch recent products to find matches by segment_slug
    const res = await fetchWithTimeout(`${WOO_ADMIN}?per_page=20&orderby=date&order=desc`, {
      headers: { ...getAuthHeaders() },
      next: { revalidate: 600 },
    });

    if (!res.ok) return [];

    const products = await res.json();
    const matches: WpProductData['relatedProducts'] = [];

    for (const p of products) {
      if (p.id === currentId) continue;
      
      const pMeta = p.meta_data || [];
      const pSegSlug = cleanSlug(getMetaString(pMeta, 'segment_slug'));
      
      if (pSegSlug && pSegSlug === segmentSlug) {
        matches.push({
          id: p.id,
          name: p.name,
          slug: p.slug,
          image: p.images?.[0]?.src || '',
          shortDescription: p.short_description?.replace(/<[^>]*>/g, '').slice(0, 120) || '',
          tagline: getMetaString(pMeta, 'tagline'),
          category: p.categories?.[0]?.name || '',
          categorySlug: p.categories?.[0]?.slug || '',
        });
      }
      
      if (matches.length >= 3) break;
    }

    return matches;
  } catch (error) {
    console.error('[wp-product] Segment related fetch failed:', error);
    return [];
  }
}

// Fallback: Fetch related products by WooCommerce IDs or manual IDs
async function fetchRelatedProductsByIds(
  ids: (number | string)[]
): Promise<WpProductData['relatedProducts']> {
  if (!ids.length) return [];

  try {
    // FIX: Remove per_page parameter so WordPress returns all IDs requested
    const idsParam = ids.map(String).filter(Boolean).join(',');
    if (!idsParam) return [];

    const res = await fetchWithTimeout(`${WOO_ADMIN}?include=${idsParam}`, {
      headers: { ...getAuthHeaders() },
      next: { revalidate: 600 },
    });

    if (!res.ok) return [];

    const products = await res.json();

    return products.map((p: {
      id: number;
      name: string;
      slug: string;
      images: { src: string }[];
      short_description: string;
      categories: { name: string; slug: string }[];
      meta_data?: { key: string; value: unknown }[];
    }) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      image: p.images?.[0]?.src || '',
      shortDescription: p.short_description?.replace(/<[^>]*>/g, '').slice(0, 120) || '',
      tagline: getMetaString(p.meta_data, 'tagline'),
      category: p.categories?.[0]?.name || '',
      categorySlug: p.categories?.[0]?.slug || '',
    }));
  } catch (error) {
    console.error('[wp-product] Related products fetch failed:', error);
    return [];
  }
}