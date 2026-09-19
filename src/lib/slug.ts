import { ProductItem } from '@/lib/types';

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

export function getCategorySlug(category: string): string {
  return slugify(category);
}

export function getProductSlug(product: { name: string }): string {
  return slugify(product.name);
}

export function getProductHref(product: { category: string; name: string }): string {
  return `/${getCategorySlug(product.category)}/${getProductSlug(product)}`;
}

export function findProductBySlugs(catSlug: string, prodSlug: string, products: ProductItem[]): ProductItem | undefined {
  return products.find(
    (p) => getCategorySlug(p.category) === catSlug && getProductSlug(p) === prodSlug
  );
}

// Normalize raw WordPress slugs which may carry leading slashes,
// spaces or "&" (e.g. "/plumbing-pipes-&-fittings" → "plumbing-pipes-and-fittings").
export function normalizeSlug(slug?: string | null): string {
  return (slug || '')
    .trim()
    .replace(/^\/+|\/+$/g, '')
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

// Category slugs served under the Pipe Division chrome (blue theme).
// Any other category slug falls under the Irrigation Division (green theme).
// Keep in sync with the division menus in src/data/products.ts.
export const PIPE_CATEGORY_SLUGS = [
  'cpvc',
  'upvc',
  'soil-waste-and-rainwater-pipes-and-fittings',
  'underground-pipe-and-fittings',
  'cable-protection',
  'upvc-pressure-pipes-fittings',
  'pe-pipes-and-fittings',
  'valves',
  'column-pipes',
  'casing-pipes',
  'pvc-suction-hose-pipes',
  'pvc-tubing-garden-pipes',
  'pvc-braided-hose-pipe',
  'plumbing-pipes-and-fittings',
  'agri-pipes-and-fittings',
  'plumbing-pipes-fittings',
  // WordPress segment slugs (normalized) belonging to Pipe Division.
  'sewerage-drainage-pipes-and-fittings',
  'flexible-hose-pipes',
  'borewell-solution',
  'agriculture-pipes-and-fittings',
];

export function isPipeCategorySlug(catSlug?: string | null): boolean {
  if (!catSlug) return true;
  return PIPE_CATEGORY_SLUGS.includes(normalizeSlug(catSlug));
}

// Authoritative division check from a WP division slug
// (e.g. "/pipe-division" or "pipe-division"). Unknown/empty → pipe,
// preserving the current default chrome.
export function isPipeDivisionSlug(divisionSlug?: string | null): boolean {
  if (!divisionSlug) return true;
  return normalizeSlug(divisionSlug) !== 'irrigation-division';
}
