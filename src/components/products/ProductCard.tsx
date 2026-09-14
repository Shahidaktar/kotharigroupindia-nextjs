// src/components/products/ProductCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Factory } from 'lucide-react';
import type { WpProductCard } from '@/lib/wp-products';
import { Reveal } from '@/components/main/Reveal';

interface ProductCardProps {
  product: WpProductCard;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const href = `/${product.divisionSlug || 'products'}/${product.slug}`;

  return (
    <Reveal key={product.id} delay={(index % 3) * 90} className="h-full">
      <Link
        href={href}
        aria-label={`Explore ${product.name}`}
        className="block h-full"
      >
        <article className="group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">
          {/* Image Header */}
          <div className="relative overflow-hidden  border-b border-slate-200">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.opacity = '0.3';
                }}
                className="w-full h-80 object-contain p-2 opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="w-full h-80 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
                <Factory className="w-12 h-12 text-slate-600" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
          </div>

          {/* Content Body */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              {/* <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
                <span>{product.segmentName || product.divisionName || 'Products'}</span>
              </div> */}

              <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300 line-clamp-2">
                {product.name}
              </h3>

              {product.tagline && (
                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                  {product.tagline}
                </p>
              )}
            </div>

            {/* Card CTA */}
            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-[#1575B3] transition-colors">
              <span>Explore</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
};