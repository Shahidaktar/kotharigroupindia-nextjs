'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, X } from 'lucide-react';

interface DivisionOverviewProps {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  accent?: 'blue' | 'green';
}

export const DivisionOverview: React.FC<DivisionOverviewProps> = ({
  heading,
  paragraphs,
  image,
  accent = 'blue',
}) => {
  const headingColor = accent === 'green' ? 'text-[#1E8E3E]' : 'text-[#1575B3]';
  const buttonColor = accent === 'green' ? '#1E8E3E' : '#1575B3';
  const [isOpen, setIsOpen] = useState(false);
  const isirrigation = heading.includes('Irrigation');

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const previewParagraphs = paragraphs.slice(0, 2);

  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-slate-500 overflow-x-auto whitespace-nowrap pb-6"
        >
          <Link href="/" className="hover:text-[#1575B3] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold">
            {isirrigation ? 'Irrigation Division' : 'Pipe Division'}
          </span>
        </nav>

        {/* Heading */}
        <div className="pb-8 border-b border-slate-300/80 mb-10">
          <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight font-serif ${headingColor} leading-tight max-w-7xl`}>
            {heading}
          </h2>
        </div>

        {/* Body Copy + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-start">
          <div className="space-y-5">
            {previewParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-[18px] text-slate-600 font-normal leading-relaxed"
              >
                {para}
              </p>
            ))}

            {paragraphs.length > previewParagraphs.length && (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 border-b-2 pb-1 mt-2 group/readmore uppercase tracking-wider text-xs font-semibold transition-colors"
                style={{ borderColor: buttonColor }}
              >
                <span style={{ color: buttonColor }} className="group-hover/readmore:opacity-80">
                  Read More
                </span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover/readmore:translate-x-1"
                  style={{ color: buttonColor }}
                />
              </button>
            )}
          </div>

          {image && (
            <div className="relative">
              <img
                src={image}
                alt={heading}
                className="w-full h-72 sm:h-80 lg:h-[460px] object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Full Description Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="division-overview-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#051426]/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white shadow-2xl"
            >
              {/* Top Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: buttonColor }}
              />

              <div className="p-6 sm:p-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className={`text-2xl sm:text-3xl font-light tracking-tight font-serif ${headingColor} leading-tight pr-8`}>
                    {heading}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                    className="shrink-0 w-10 h-10 flex items-center justify-center border border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors mt-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-5">
                  {paragraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};