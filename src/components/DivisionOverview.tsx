'use client';

import React from 'react';

interface DivisionOverviewProps {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  accent?: 'blue' | 'green';
}

export const DivisionOverview: React.FC<DivisionOverviewProps> = ({
  heading,
  paragraphs,
  accent = 'blue',
}) => {
  const headingColor = accent === 'green' ? 'text-[#1E8E3E]' : 'text-[#1575B3]';
  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="pb-8 border-b border-slate-300/80 mb-10">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif ${headingColor} leading-tight max-w-7xl`}>
            {heading}
          </h2>
        </div>

        {/* Body Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className={`text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed ${
                // Last paragraph spans full width on large screens when odd count
                paragraphs.length % 2 === 1 && idx === paragraphs.length - 1
                  ? 'lg:col-span-2'
                  : ''
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
