'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ApplicationItem } from '@/data/applications';

function ApplicationCard({ item, theme = 'blue' }: { item: ApplicationItem; theme?: 'blue' | 'green' }) {
  const isGreen = theme === 'green';
  return (
    <div className={`group relative h-full flex flex-col ${isGreen ? 'bg-[#F2FAF4]' : 'bg-white'} border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden`}>
      {/* Image */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden border-b border-slate-200">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-tight text-slate-900 m-0 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-4 mb-6">
          {item.description}
        </p>

        <div className="mt-auto pt-5 border-t border-slate-200">
          <span className="block text-[10px] font-mono tracking-[0.25em] uppercase text-slate-500 mb-3">
            Related Products
          </span>
          <div className="flex flex-wrap gap-2">
            {item.products.map((product) => (
              <Link
                key={product.name}
                href={product.url}
                className={`inline-flex items-center gap-1.5 border ${isGreen ? 'border-[#1E8E3E]/25 bg-[#EFF7F0] text-[#1E8E3E] hover:bg-[#1E8E3E]' : 'border-[#1575B3]/25 bg-[#F0F7FC] text-[#1575B3] hover:bg-[#1575B3]'} hover:text-white px-3 py-1.5 text-xs font-medium transition-all duration-200`}
              >
                {product.name}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ApplicationCard };

interface ApplicationSliderProps {
  items: ApplicationItem[];
  theme?: 'blue' | 'green';
}

export const ApplicationSlider: React.FC<ApplicationSliderProps> = ({ items, theme = 'blue' }) => {
  const isGreen = theme === 'green';
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const safePage = currentPage % totalPages;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handlePanEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 40;
    const velocityThreshold = 200;
    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      handleNext();
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, totalPages, handleNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const visibleItems = items.slice(
    safePage * itemsPerPage,
    safePage * itemsPerPage + itemsPerPage,
  );

  return (
    <div>
      {/* Slides */}
      <div className="relative min-h-[420px] w-full py-6 px-1 touch-pan-y overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={safePage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            onPanEnd={handlePanEnd}
            className="w-full cursor-grab active:cursor-grabbing touch-pan-y"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleItems.map((item) => (
                <div
                  key={item.title}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="h-full"
                >
                  <ApplicationCard item={item} theme={theme} />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-3 pt-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > safePage ? 1 : -1);
              setCurrentPage(idx);
            }}
            className={`h-1 transition-all duration-500 ${
              idx === safePage
                ? `w-12 ${isGreen ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]'}`
                : 'w-4 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};