'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/main/Reveal';
import type { NewsItem } from '@/lib/news';
import { ArrowUpRight } from 'lucide-react';

interface NewsGalleryProps {
  news: NewsItem[];
  categories: string[];
}

export const NewsGallery: React.FC<NewsGalleryProps> = ({ news, categories }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? news : news.filter((item) => item.category === activeCategory);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
  };

  return (
    <div>
      {/* Filter by category heading + tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-300">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
        Filter by category
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1575B3] border-[#1575B3] text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 90} className="h-full">
              <Link href={`/news/${item.slug}`} className="block h-full">
                <article className="group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">
                  {/* Image Header - full image, not cropped */}
                  <div className="relative overflow-hidden bg-slate-900 border-b border-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.opacity = '0.3';
                      }}
                      className="w-full h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-mono tracking-widest font-medium px-3 py-1 uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-lg font-serif font-medium text-slate-900 leading-snug group-hover:text-[#1575B3] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                    {/* Card CTA */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-[#1575B3] transition-colors">
                      <span>READ NEWS</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          {/* <p className="text-lg font-semibold text-slate-900">Not Found</p> */}
          <p className="text-sm text-slate-500 mt-2">
            No news found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
};