import React from 'react';
import { Check } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const SolutionWhyChoose: React.FC<{ points: string[]; theme?: 'blue' | 'green' }> = ({ points, theme = 'blue' }) => {
  const isGreen = theme === 'green';
  if (!points.length) return null;
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Why Choose This Solution"
          description="Specification-grade reasons engineers, contractors and growers standardize on Kothari."
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {points.map((point) => (
            <li
              key={point}
              className={`group border border-slate-200 bg-white p-4 sm:p-5 flex gap-3 items-start ${isGreen ? 'hover:border-[#1E8E3E]/40' : 'hover:border-[#1575B3]/40'} hover:shadow-md transition-all`}
            >
              <span className={`w-7 h-7 ${isGreen ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]'} text-white flex items-center justify-center shrink-0`}>
                <Check className="w-4 h-4" />
              </span>
              <span className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
