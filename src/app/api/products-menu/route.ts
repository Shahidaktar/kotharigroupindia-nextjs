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
  desc: string;
  categories: MenuCategory[];
}

export interface ProductsDivisionMenu {
  headline: string;
  description: string;
  segments: MenuSegment[];
}

// Shape matches the static mega menus in src/data/products.ts so the
// HeaderDivision dropdown renders WP segments + products without changes.
function buildDivisionMenu(
  cards: WpProductCard[],
  headline: string,
  description: string
): ProductsDivisionMenu {
  const segments = new Map<
    string,
    {
      name: string;
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
      seg = { name: segName, cats: new Map(), count: 0 };
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
      url: `/${catSlug}/${card.slug}`,
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
      desc: `${seg.count} product${seg.count === 1 ? '' : 's'} engineered for performance and reliability.`,
      categories: [...seg.cats.values()]
        .sort((a, b) => b.products.length - a.products.length)
        .map((cat) => ({ name: cat.name, products: cat.products })),
    })),
  };
}

// Live products mega-menu data for the HeaderDivision dropdown.
// Fail-soft: {} lets the header keep its static menu.
export async function GET() {
  try {
    const cards = await fetchWpProductCards();
    if (!cards.length) return NextResponse.json({});

    const pipe = cards.filter((c) => isPipeDivisionSlug(c.divisionSlug));
    const irrigation = cards.filter((c) => !isPipeDivisionSlug(c.divisionSlug));

    return NextResponse.json({
      pipe: buildDivisionMenu(
        pipe,
        'Our Products',
        'Comprehensive range of piping solutions engineered for performance.'
      ),
      irrigation: buildDivisionMenu(
        irrigation,
        'Our Products',
        'Comprehensive range of irrigation solutions engineered for performance.'
      ),
    });
  } catch (error) {
    console.error('[products-menu] Failed:', error);
    return NextResponse.json({});
  }
}
