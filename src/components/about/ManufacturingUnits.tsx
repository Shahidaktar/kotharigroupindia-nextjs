'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import {
  manufacturingUnitsData,
  parseUnitName,
  type ManufacturingUnit,
} from '@/data/units';

function UnitCard({ unit }: { unit: ManufacturingUnit }) {
  const { product, year, location } = parseUnitName(unit.name);
  return (
    <div className="group relative h-full flex flex-col bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#1575B3] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-slate-200">
        <img
          src={unit.img}
          alt={unit.name}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        {year && (
          <span className="absolute top-4 left-4 bg-[#1575B3] text-white text-[10px] font-mono tracking-widest font-medium px-3 py-1 uppercase">
            Est. {year}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-tight text-slate-900 m-0 leading-snug">
          {product}
        </h3>
        {location && (
          <p className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium mt-3">
            <MapPin className="w-3.5 h-3.5 text-[#1575B3] shrink-0" />
            {location}
          </p>
        )}
      </div>
    </div>
  );
}

export const ManufacturingUnits: React.FC = () => {
  const { heading, description, units } = manufacturingUnitsData;
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  // ~1.5 lines on desktop so the preview cuts mid-second-line.
  const PREVIEW_CHARS = 230;
  const preview =
    description.length > PREVIEW_CHARS
      ? `${description.slice(0, PREVIEW_CHARS).trimEnd()}…`
      : description;
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

  const totalPages = Math.max(1, Math.ceil(units.length / itemsPerPage));
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

  const visibleUnits = units.slice(
    safePage * itemsPerPage,
    safePage * itemsPerPage + itemsPerPage
  );

  if (!units.length) return null;

  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="pb-8 border-b border-slate-300 space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 leading-tight m-0">
            {heading}
          </h2>
          <div className="max-w-5xl">
            {descriptionExpanded ? (
              <>
                <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed m-0">
                  {description}
                </p>
                <button
                  onClick={() => setDescriptionExpanded(false)}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest uppercase text-[#1575B3] hover:text-[#0E588A] transition-colors"
                >
                  Read Less
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-180" />
                </button>
              </>
            ) : (
              <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed m-0">
                {preview}{' '}
                <button
                  onClick={() => setDescriptionExpanded(true)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold tracking-widest uppercase text-[#1575B3] hover:text-[#0E588A] transition-colors whitespace-nowrap"
                >
                  Read more
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                </button>
              </p>
            )}
          </div>
        </div>

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
                {visibleUnits.map((unit) => (
                  <div
                    key={unit.img}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="h-full"
                  >
                    <UnitCard unit={unit} />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 pt-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > safePage ? 1 : -1);
                setCurrentPage(idx);
              }}
              className={`h-1 transition-all duration-500 ${
                idx === safePage
                  ? 'w-12 bg-[#1575B3]'
                  : 'w-4 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
