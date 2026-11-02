import { NextResponse } from 'next/server';
import {
  fetchWpProductCards,
  type WpProductCard,
} from '@/lib/wp-products';
import { isPipeDivisionSlug } from '@/lib/slug';

export const revalidate = 600;

interface MenuProduct {
  title: string;
  url: string;
  image: string;
  shortDesc: string;
}

interface MenuCategory {
  name: string;
  products: MenuProduct[];
}

interface MenuSegment {
  name: string;
  slug: string;
  desc: string;
  categories: MenuCategory[];
}

export interface ProductsDivisionMenu {
  headline: string;
  description: string;
  segments: MenuSegment[];
}

/**
 * Products to pin to the front of a segment, listed in the exact order they
 * should appear. Everything else in that segment follows afterwards in its
 * normal order.
 *
 * Keyed by segment slug. The pinned products are pulled out of whatever
 * category they belong to (so products from the same category still respect
 * this order) and emitted first as a leading "Featured" group; the client
 * flattens categories into one grid, so the visible order matches the list.
 * Slugs may be given bare ("kotiff") or as a path ("/kotiff").
 */
const SEGMENT_PRODUCT_PRIORITY: Record<string, string[]> = {
  'sprinkler-irrigation-system': [
    'sprinklers-pipes-qcpe',
    'metal-sprinkler',
    'raingun-and-accessories',
    'hdpe-pipe-sprinkler-set',
    'pop-up-spray-heads-and-rotors',
    'quick-coupling-valve-qcv',
    'swing-joint',
    
  ],
  'micro-and-mini-sprinklers':[
    'k-mic-micro-sprinkler',
    'k-tuff-micro-sprinkler',
    'k-mic-excel',
    'micro-sprayer',
    'k-fogger',
    'k-mist',
    'mini-sprinkler',
  ],
  'filters-and-injectors':[
    'sand-filter',
    'hdpe-header-manifold',
    'hydrocyclone-filter',
    'semi-automatic-screen-filter',
    'screen-filter',
    'k-smart-screen-filter',
    'twin-screen-filter',
    'disc-filter-and-twin-disc-filter',
    'pp-header-assembly',
    'venturi-injector',
    'dozing-pump',
  ],
  'automation-system':[
    'nutrijet-fertigation-machines',
    'irribeat-controllers',
    'mini-sigma-filter',
    'filtomat-filter',
    'solenoid-control-valve',
    'quick-pressure-relief-valve',
    'pressure-sustaining-valve',
    'pressure-reducing-valve',
    'filter-auto-backwash-valve',
    'water-meter',
    'galpro-controller-ac-dc',
  ],
  'drip-irrigation-system':[
    'polytube',
    'dripline-k-gol-pc',
    'dripline-k-lin-npc',
    'dripline-k-gol-npc',
    'dripline-k-lin-pcnd',
    'dripline-k-lin-pcas',
    'kotiff',
    'uniflow-dripper',
    'turbo-dripper',
    'drip-poly-fittings',
    'thin-wall-dripline-k-smart',
    'thin-wall-dripline-k-slim',
    'thinwall-dripline-k-slim-ultra',
    'thin-wall-dripline-k-super',
    'thinwall-drip-poly-fittings',
    'drip-winder',
    'mulch-films',
    'k-eco-sprinkler',
    '/k-flex-submain-pipes',
    'upvc-pipes',
    'gravity-drip-kit',
  ],
  'borewell-solution':['column-pipes-with-ss']
};

function applySegmentPriority(
  segmentSlug: string,
  categories: { name: string; products: MenuProduct[] }[]
): { name: string; products: MenuProduct[] }[] {
  const priority = SEGMENT_PRODUCT_PRIORITY[segmentSlug];
  if (!priority?.length) return categories;

  const slugOf = (url: string) => url.split('/').filter(Boolean).pop() || '';

  // Pull the pinned products out in the exact listed order. A slug missing from
  // the segment is skipped; a product already claimed is never pinned twice.
  const pinned: MenuProduct[] = [];
  const claimed = new Set<string>();

  for (const wanted of priority) {
    const wantedSlug = slugOf(wanted);
    if (!wantedSlug) continue;
    for (const cat of categories) {
      const match = cat.products.find(
        (p) => !claimed.has(p.url) && slugOf(p.url) === wantedSlug
      );
      if (match) {
        pinned.push(match);
        claimed.add(match.url);
        break;
      }
    }
  }

  if (!pinned.length) return categories;

  // Everything not pinned keeps its original category order; empty categories
  // are dropped so the pinned group is genuinely first.
  const rest = categories
    .map((cat) => ({
      name: cat.name,
      products: cat.products.filter((p) => !claimed.has(p.url)),
    }))
    .filter((cat) => cat.products.length > 0);

  return [{ name: 'Featured', products: pinned }, ...rest];
}

// Shape matches the static mega menus in src/data/products.ts so the
// HeaderDivision dropdown renders WP segments + products without changes.
function buildDivisionMenu(
  cards: WpProductCard[],
  headline: string,
  description: string,
  divisionSlug: string
): ProductsDivisionMenu {
  const segments = new Map<
    string,
    {
      name: string;
      slug: string;
      cats: Map<string, { name: string; products: MenuProduct[] }>;
      count: number;
    }
  >();

  for (const card of cards) {
    // Products with neither division nor segment stay out of the menu
    // (still reachable via /products listing and direct URLs).
    if (!card.segmentSlug && !card.divisionSlug) continue;

    const segSlug = card.segmentSlug || 'other-products';
    const segName = card.segmentName || 'Other Products';
    let seg = segments.get(segSlug);
    if (!seg) {
      seg = { name: segName, slug: segSlug, cats: new Map(), count: 0 };
      segments.set(segSlug, seg);
    }
    seg.count += 1;

    const catSlug = card.categorySlug || card.segmentSlug || 'other-products';
    let cat = seg.cats.get(catSlug);
    if (!cat) {
      cat = {
        name: card.categoryName || card.segmentName || 'Other Products',
        products: [],
      };
      seg.cats.set(catSlug, cat);
    }
    cat.products.push({
      title: card.name,
      // Product URLs are grouped by division: /{division-slug}/{product-slug}.
      // The division is supplied by the caller rather than read per product, so
      // products without a division_name in WordPress still resolve correctly.
      url: `/${divisionSlug}/${card.slug}`,
      image: card.image || '',
      shortDesc: card.tagline || '',
    });
  }

  const sorted = [...segments.values()].sort((a, b) => b.count - a.count);
  return {
    headline,
    description,
    segments: sorted.map((seg) => ({
      name: seg.name,
      slug: seg.slug,
      desc: `${seg.count} product${seg.count === 1 ? '' : 's'} engineered for performance and reliability.`,
      categories: applySegmentPriority(
        seg.slug,
        [...seg.cats.values()]
          .sort((a, b) => b.products.length - a.products.length)
          .map((cat) => ({ name: cat.name, products: cat.products }))
      ),
    })),
  };
}

// Sorts products by their last edit, most recently updated first. Applied to the
// irrigation menu only, so recently refreshed irrigation products surface at the
// top of their category.
function byDateModified(a: WpProductCard, b: WpProductCard): number {
  const at = Date.parse(a.dateModified || '') || 0;
  const bt = Date.parse(b.dateModified || '') || 0;
  if (at === bt) return 0;
  return bt - at;
}

// Live products mega-menu data for the HeaderDivision dropdown.
// Fail-soft: {} lets the header keep its static menu.
export async function GET() {
  try {
    const cards = await fetchWpProductCards();
    if (!cards.length) return NextResponse.json({});

    const pipe = cards.filter((c) => isPipeDivisionSlug(c.divisionSlug));
    const irrigation = cards
      .filter((c) => !isPipeDivisionSlug(c.divisionSlug))
      .sort(byDateModified);

    return NextResponse.json({
      pipe: buildDivisionMenu(
        pipe,
        'Our Products',
        'Comprehensive range of piping solutions engineered for performance.',
        'pipe-division'
      ),
      irrigation: buildDivisionMenu(
        irrigation,
        'Our Products',
        'Comprehensive range of irrigation solutions engineered for performance.',
        'irrigation-division'
      ),
    });
  } catch (error) {
    console.error('[products-menu] Failed:', error);
    return NextResponse.json({});
  }
}
