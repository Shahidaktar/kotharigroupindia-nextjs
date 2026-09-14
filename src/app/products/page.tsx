import { Suspense } from 'react';
import { ProductsBrowser } from '@/components/products/ProductsBrowser';
import { ProductsPageLayout } from '@/components/products/ProductsPageLayout';
import { fetchWpProductCards } from '@/lib/wp-products';

export const metadata = {
  title: 'Products | Pipes, Fittings & Irrigation Systems | Kothari Group',
  description:
    'Browse the complete range of Kothari Group products — plumbing pipes and fittings, agricultural pipes, sewerage and drainage systems, borewell solutions and precision irrigation systems.',
};

interface SearchParams {
  division?: string;
  segment?: string;
  divisionSlug?: string;
  segmentSlug?: string;
  page?: string;
}

function slugToReadable(slug: string): string {
  return slug
    .replace(/[-_/]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams> | SearchParams;
}) {
  const sp = await Promise.resolve(searchParams);
  const division = sp.division || sp.divisionSlug || '';
  const segment = sp.segment || sp.segmentSlug || '';
  const page = sp.page || '';

  const products = await fetchWpProductCards();

  const matchedDivision = division
    ? products.find((p) => p.divisionSlug === division)
    : null;
  const matchedSegment = segment
    ? products.find((p) => p.segmentSlug === segment)
    : null;

  const divisionLabel =
    matchedDivision?.divisionName || (division ? slugToReadable(division) : '');
  const segmentLabel =
    matchedSegment?.segmentName || (segment ? slugToReadable(segment) : '');

  const heroTitle = segmentLabel || divisionLabel || 'Explore All Products';

  // Resolve which division chrome to render:
  // - division filter active → that division
  // - segment filter active → the division the segment belongs to
  const activeDivisionSlug =
    division ||
    (segment
      ? products.find((p) => p.segmentSlug === segment)?.divisionSlug || ''
      : '');

  const heroDescription = segmentLabel
    ? `Browse our range of ${segmentLabel.toLowerCase()} — engineered for performance and reliability.`
    : divisionLabel
      ? `Explore our complete ${divisionLabel.toLowerCase()} catalogue — engineered for performance and reliability.`
      : 'Explore our complete catalogue — engineered piping systems, agricultural pipes, drainage and borewell solutions, and precision irrigation systems.';

  return (
    <ProductsPageLayout divisionSlug={activeDivisionSlug}>
      {/* Page hero */}
      <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <img
            src="/heronew.jpg"
            alt="Kothari Group products"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full min-h-[50dvh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
          <div className="flex flex-col gap-5 sm:gap-6 my-auto py-8">
            <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
              Products
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
              {heroTitle}
            </h1>
            <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
              {heroDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Products browser */}
      <div className="w-full bg-white py-14 sm:py-20 border-b border-slate-300/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-72 bg-white border border-slate-200 animate-pulse"
                  />
                ))}
              </div>
            }
          >
            <ProductsBrowser
              products={products}
              initialDivision={division}
              initialSegment={segment}
              initialPage={page}
            />
          </Suspense>
        </div>
      </div>
    </ProductsPageLayout>
  );
}
