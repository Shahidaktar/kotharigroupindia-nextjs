import React from 'react';
import {
  Target,
  Droplets,
  Sprout,
  FlaskConical,
  CloudFog,
  Cpu,
  Waves,
  Zap,
  ShieldCheck,
  Filter,
  Gauge,
  Thermometer,
  Wrench,
  Building2,
  Volume2,
  Layers,
  Lock,
  Spline,
  Factory,
  Sun,
  Leaf,
  Users,
  CloudFogIcon,
  Grid2x2,
  RefreshCw,
  Expand,
  Radar,
  CloudRainWind
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import type { SolutionPillar } from '@/data/solutions';

const ICONS: Record<string, React.ElementType> = {
  Target,
  Droplets,
  Sprout,
  FlaskConical,
  CloudFog,
  Cpu,
  Waves,
  Zap,
  ShieldCheck,
  Filter,
  Gauge,
  Thermometer,
  Wrench,
  Building2,
  Volume2,
  Layers,
  Lock,
  Spline,
  Factory,
  Sun,
  Leaf,
  Users,
  CloudFogIcon,
  Grid2x2,
  RefreshCw,
  Expand,
  Radar,
  CloudRainWind
};

const PILLAR_IMAGES = [
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
];

export const SolutionPillars: React.FC<{
  pillars: SolutionPillar[];
  title?: string;
  description?: string;
  theme?: 'blue' | 'green';
}> = ({
  pillars,
  title = 'Key Pillars',
  description = 'The engineering principles every system in this solution is built on.',
  theme = 'blue',
}) => {
  const isGreen = theme === 'green';
  const accentHoverBorder = isGreen ? 'hover:border-[#1E8E3E]' : 'hover:border-[#1575B3]';
  const accentGroupHoverText = isGreen ? 'group-hover:text-[#1E8E3E]' : 'group-hover:text-[#1575B3]';
  if (!pillars.length) return null;
  return (
    <section className={`w-full ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} py-16 sm:py-24 border-b ${isGreen ? 'border-[#1E8E3E]/15' : 'border-slate-300/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader title={title} description={description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = ICONS[pillar.icon] || Droplets;
            return (
              <div
                key={pillar.label}
                className={`group bg-white border border-slate-200/90 flex flex-col shadow-sm hover:shadow-xl ${accentHoverBorder} hover:-translate-y-1 transition-all duration-500 overflow-hidden`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={PILLAR_IMAGES[idx % PILLAR_IMAGES.length]}
                    alt={pillar.label}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70 pointer-events-none" />
                  {/* <div className="absolute bottom-3 left-3 w-9 h-9 bg-white flex items-center justify-center shadow-md">
                    <Icon className="w-4.5 h-4.5 text-[#1575B3]" />
                  </div> */}
                </div>
                <div className="p-5 sm:p-6 space-y-1.5 flex-1">
                  <h3 className={`text-sm font-semibold text-slate-900 leading-snug ${accentGroupHoverText} transition-colors`}>
                    {pillar.label}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
