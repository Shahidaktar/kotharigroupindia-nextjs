'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {
  Layers,
  PackageSearch,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  X,
  Check,
  RotateCcw,
} from 'lucide-react';
import { ProductCard } from './ProductCard';
import {
  getProductsFilterOptions,
  type WpProductCard,
} from '@/lib/wp-products';

const PRODUCTS_PER_PAGE = 12;

interface ProductsBrowserProps {
  products: WpProductCard[];
  initialDivision?: string;
  initialSegment?: string;
  initialPage?: string;
}

interface FilterPill {
  value: string;
  label: string;
  count: number;
}

type PageItem = number | 'ellipsis';

// Collapses many pages into a short window: first, last, current±1,
// with ellipsis for the gaps (e.g. 1 … 4 5 6 … 10).
function getPageItems(current: number, total: number): PageItem[] {
  const pages = new Set<number>([1, total]);
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.add(i);
  }
  const items: PageItem[] = [];
  let prev = 0;
  for (const p of [...pages].sort((a, b) => a - b)) {
    if (p - prev > 1) items.push('ellipsis');
    items.push(p);
    prev = p;
  }
  return items;
}

export const ProductsBrowser: React.FC<ProductsBrowserProps> = ({
  products,
  initialDivision = '',
  initialSegment = '',
  initialPage = '',
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const gridRef = useRef<HTMLDivElement>(null);

  const options = useMemo(() => getProductsFilterOptions(products), [products]);

  const [division, setDivision] = useState(initialDivision);
  const [segment, setSegment] = useState(initialSegment);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Lock scroll + close on ESC while the modal is open
  useEffect(() => {
    if (!drawerOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey);
    };
  }, [drawerOpen]);
  const [page, setPage] = useState(() => {
    const parsed = parseInt(initialPage, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  });

  const applyFilters = (nextDivision: string, nextSegment: string) => {
    setDivision(nextDivision);
    setSegment(nextSegment);
    setPage(1);

    const sp = new URLSearchParams(searchParams.toString());
    if (nextDivision) sp.set('division', nextDivision);
    else sp.delete('division');
    if (nextSegment) sp.set('segment', nextSegment);
    else sp.delete('segment');
    sp.delete('page');

    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const resetFilters = () => applyFilters('', '');

  const activeCount =
    (division ? 1 : 0) + (segment ? 1 : 0);

  const divisionPills: FilterPill[] = useMemo(() => {
    const pills: FilterPill[] = [
      { value: '', label: 'All Products', count: products.length },
    ];
    for (const d of options.divisions) {
      pills.push({ value: d.slug, label: d.name, count: d.count });
    }
    return pills;
  }, [options.divisions, products.length]);

  const visibleProducts = useMemo(() => {
    if (!division) return products;
    return products.filter((p) => p.divisionSlug === division);
  }, [products, division]);

  const segmentPills: FilterPill[] = useMemo(() => {
    const pills: FilterPill[] = [
      { value: '', label: 'All Segments', count: visibleProducts.length },
    ];
    for (const s of options.segments) {
      const count = visibleProducts.filter((p) => p.segmentSlug === s.slug).length;
      if (!count) continue;
      pills.push({ value: s.slug, label: s.name, count });
    }
    return pills;
  }, [options.segments, visibleProducts]);

  const filtered = useMemo(() => {
    if (!segment) return visibleProducts;
    return visibleProducts.filter((p) => p.segmentSlug === segment);
  }, [visibleProducts, segment]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pageProducts = useMemo(
    () =>
      filtered.slice(
        (safePage - 1) * PRODUCTS_PER_PAGE,
        safePage * PRODUCTS_PER_PAGE
      ),
    [filtered, safePage]
  );

  const gotoPage = (p: number) => {
    const target = Math.min(Math.max(p, 1), totalPages);
    setPage(target);

    const sp = new URLSearchParams(searchParams.toString());
    if (target > 1) sp.set('page', String(target));
    else sp.delete('page');

    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const startIdx = filtered.length ? (safePage - 1) * PRODUCTS_PER_PAGE + 1 : 0;
  const endIdx = Math.min(safePage * PRODUCTS_PER_PAGE, filtered.length);

  // Division theme follows the active filter (same rule as the page chrome):
  // irrigation division — or a segment that belongs to it — → green, else blue.
  const activeDivisionSlug =
    division ||
    (segment ? products.find((p) => p.segmentSlug === segment)?.divisionSlug || '' : '');
  const isGreen = /irrigat/i.test(activeDivisionSlug);

  return (
    <div className="space-y-8">
      {/* Toolbar: result count + filter button */}
      {/* <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
          {filtered.length > 0
            ? `Showing ${startIdx}–${endIdx} of ${filtered.length} ${
                filtered.length === 1 ? 'Product' : 'Products'
              }`
            : 'No Products'}
        </p>

        <div className="flex items-center gap-2">
          {activeCount > 0 && (
            <button
              onClick={resetFilters}
              className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-rose-600 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Clear
            </button>
          )}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`px-4 py-2 text-xs font-semibold border flex items-center gap-2 transition-all cursor-pointer shadow-sm ${
              activeCount > 0
                ? 'border-[#1575B3] bg-[#1575B3] text-white'
                : 'border-[#1575B3] bg-white text-[#1575B3] hover:bg-[#1575B3] hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
            {activeCount > 0 && (
              <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white text-[#1575B3] text-[10px] font-bold">
                {activeCount}
              </span>
            )}
          </button>
        </div>
      </div> */}

      {/* Product grid */}
      {pageProducts.length > 0 ? (
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pageProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} theme={isGreen ? 'green' : 'blue'} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <p className="text-sm font-semibold text-slate-700">
            No products found
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Try a different division or segment filter.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 pt-2">
          <button
            onClick={() => gotoPage(safePage - 1)}
            disabled={safePage <= 1}
            aria-label="Previous page"
            className={`w-9 h-9 flex items-center justify-center border border-slate-300 bg-white text-slate-600 ${isGreen ? 'hover:border-[#1E8E3E] hover:text-[#1E8E3E]' : 'hover:border-[#1575B3] hover:text-[#1575B3]'} disabled:opacity-40 disabled:hover:border-slate-300 disabled:hover:text-slate-600 disabled:cursor-not-allowed transition-all cursor-pointer`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {getPageItems(safePage, totalPages).map((item, i) =>
              item === 'ellipsis' ? (
                <span
                  key={`e-${i}`}
                  className="px-1 text-sm text-slate-400 select-none"
                  aria-hidden="true"
                >
                  …
                </span>
              ) : (
                <button
                  key={item}
                  onClick={() => gotoPage(item)}
                  aria-label={`Go to page ${item}`}
                  aria-current={item === safePage ? 'page' : undefined}
                  className={`w-9 h-9 text-xs font-semibold border transition-all cursor-pointer ${
                    item === safePage
                      ? isGreen
                        ? 'border-[#1E8E3E] bg-[#1E8E3E] text-white shadow-sm'
                        : 'border-[#1575B3] bg-[#1575B3] text-white shadow-sm'
                      : isGreen
                        ? 'border-slate-300 bg-white text-slate-600 hover:border-[#1E8E3E] hover:text-[#1E8E3E]'
                        : 'border-slate-300 bg-white text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
                  }`}
                >
                  {item}
                </button>
              )
            )}

          <button
            onClick={() => gotoPage(safePage + 1)}
            disabled={safePage >= totalPages}
            aria-label="Next page"
            className={`w-9 h-9 flex items-center justify-center border border-slate-300 bg-white text-slate-600 ${isGreen ? 'hover:border-[#1E8E3E] hover:text-[#1E8E3E]' : 'hover:border-[#1575B3] hover:text-[#1575B3]'} disabled:opacity-40 disabled:hover:border-slate-300 disabled:hover:text-slate-600 disabled:cursor-not-allowed transition-all cursor-pointer`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Filter sidebar — portaled to <body>, styled like Home2Header's
          "Get in Touch" popup. Slides in from the right. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {drawerOpen && (
              <div className="fixed inset-0 z-[2000]">
                {/* Dark Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setDrawerOpen(false)}
                />

                {/* Sidebar */}
                <motion.aside
                  className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-10 flex flex-col overflow-hidden"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Filter products"
                >
              {/* Header */}
              <div className={`relative ${isGreen ? 'bg-[#145E2A]' : 'bg-[#0E588A]'} text-white px-6 py-6 shrink-0`}>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 transition border border-transparent hover:border-white/20 cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* <span className="text-xs font-semibold tracking-wider uppercase text-white/70 block mb-2">
                  Kothari Group
                </span> */}
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-white">
                  Filter Products
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mt-2">
                 Pick a division or segment to narrow the list below.
                </p>

                {/* <div className="flex gap-8 mt-5 pt-4 border-t border-white/15">
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Products</span>
                    <span className="text-xl font-semibold text-white">{products.length}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Divisions</span>
                    <span className="text-xl font-semibold text-white">{options.divisions.length}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Segments</span>
                    <span className="text-xl font-semibold text-white">{options.segments.length}</span>
                  </div>
                </div> */}
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6">
             

                {/* Division */}
                <div className="mb-7">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className={`w-4 h-4 ${isGreen ? 'text-[#1E8E3E]' : 'text-[#1575B3]'}`} />
                    <span className="block text-xs font-medium text-[#111111] uppercase tracking-wider">
                      Division
                    </span>
                  </div>
                  <div className="space-y-2">
                    {divisionPills.map((pill) => {
                      const active = division === pill.value;
                      return (
                        <button
                          key={pill.value}
                          onClick={() => applyFilters(pill.value, '')}
                          className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm transition-all cursor-pointer ${
                            active
                              ? isGreen
                                ? 'bg-[#EFF7F0] border border-[#1E8E3E] text-[#1E8E3E]'
                                : 'bg-[#F0F7FC] border border-[#1575B3] text-[#1575B3]'
                              : isGreen
                                ? 'bg-[#EFF7F0] border border-[#C8E6C9] text-[#111111] hover:bg-white hover:border-[#1E8E3E]'
                                : 'bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] hover:bg-white hover:border-[#1575B3]'
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span
                              className={`w-4 h-4 flex items-center justify-center border ${
                                active
                                  ? isGreen
                                    ? 'bg-[#1E8E3E] border-[#1E8E3E]'
                                    : 'bg-[#1575B3] border-[#1575B3]'
                                  : 'border-[#5F6B7A]'
                              }`}
                            >
                              {active && <Check className="w-3 h-3 text-white" />}
                            </span>
                            <span className="font-medium">{pill.label}</span>
                          </span>
                          <span className="text-[11px] font-mono text-[#5F6B7A]">
                            {pill.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Segment */}
                {segmentPills.length > 1 && (
                  <div className="mb-7">
                    <div className="flex items-center gap-2 mb-3">
                      <PackageSearch className={`w-4 h-4 ${isGreen ? 'text-[#1E8E3E]' : 'text-[#1575B3]'}`} />
                      <span className="block text-xs font-medium text-[#111111] uppercase tracking-wider">
                        Segment
                      </span>
                    </div>
                    <div className="space-y-2">
                      {segmentPills.map((pill) => {
                        const active = segment === pill.value;
                        return (
                          <button
                            key={pill.value}
                            onClick={() => applyFilters(division, pill.value)}
                            className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm transition-all cursor-pointer ${
                              active
                                ? 'bg-[#F0F7FC] border border-[#1575B3] text-[#1575B3]'
                                : 'bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] hover:bg-white hover:border-[#1575B3]'
                            }`}
                          >
                            <span className="flex items-center gap-2.5">
                              <span
                                className={`w-4 h-4 flex items-center justify-center border ${
                                  active
                                    ? 'bg-[#1575B3] border-[#1575B3]'
                                    : 'border-[#5F6B7A]'
                                }`}
                              >
                                {active && <Check className="w-3 h-3 text-white" />}
                              </span>
                              <span className="font-medium">{pill.label}</span>
                            </span>
                            <span className="text-[11px] font-mono text-[#5F6B7A]">
                              {pill.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className={`px-6 py-4 border-t ${isGreen ? 'border-[#C8E6C9]' : 'border-[#DCEAF5]'} bg-white shrink-0 space-y-2`}>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className={`w-full flex items-center justify-center gap-2 ${isGreen ? 'bg-[#1E8E3E] hover:bg-[#145E2A]' : 'bg-[#1575B3] hover:bg-[#0E588A]'} text-white py-3.5 font-medium text-sm transition-colors shadow-sm cursor-pointer`}
                >
                  Show {filtered.length} {filtered.length === 1 ? 'Product' : 'Products'}
                </button>
                <button
                  onClick={resetFilters}
                  className={`w-full flex items-center justify-center gap-2 border ${isGreen ? 'border-[#C8E6C9] bg-[#EFF7F0]' : 'border-[#DCEAF5] bg-[#F5F6F8]'} hover:bg-white text-[#111111] py-3.5 font-medium text-sm transition-colors cursor-pointer`}
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset Filters
                </button>
              </div>
            </motion.aside>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};