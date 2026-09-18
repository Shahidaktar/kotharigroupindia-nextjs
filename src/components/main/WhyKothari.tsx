'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SubCategory {
  title: string;
  link: string;
}

interface DivisionOverview {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bgImage: string;
  hoverGradient: string;
  accentColor: string;
  badgeStyle: string;
  subCategories: SubCategory[];
  exploreLink: string;
}

const divisionData: DivisionOverview[] = [
  {
    id: 'pipes-division',
    title: 'Pipe Division',
    shortDesc: 'Engineered fluid conveyance and underground infrastructure systems.',
    fullDesc: 'Comprehensive piping architecture designed for residential towers, urban drainage, subterranean cable ducting, and deep extraction systems.',
    bgImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80',
    hoverGradient: 'from-[#0E588A]/95 via-[#1575B3]/90 to-slate-950/95',
    accentColor: 'text-[#1575B3] group-hover:text-sky-300',
    badgeStyle: 'border-[#1575B3]/40 bg-[#0E588A]/60 text-sky-100',
    subCategories: [
      { title: 'Residential & Commercial Plumbing Solutions', link: '/solutions/residential-commercial-plumbing' },
      { title: 'Urban Drainage & Sewerage Networks', link: '/solutions/urban-drainage-sewerage' },
      { title: 'Groundwater Access Solutions', link: '/solutions/groundwater-access' },
      { title: 'Farm Infrastructure Piping Solutions', link: '/solutions/farm-infrastructure-piping' },
    ],
    exploreLink: '/pipe-division',
  },
  {
    id: 'irrigation-division',
    title: 'Irrigation Division',
    shortDesc: 'Micro-hydration, drip networks, and smart farm automation.',
    fullDesc: 'Advanced agricultural infrastructure engineered for maximum crop yield, zero-clog filtration, precision nutrient delivery, and automated farm governance.',
    bgImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1600&q=80',
    hoverGradient: 'from-emerald-950/95 via-teal-900/90 to-slate-950/95',
    accentColor: 'text-emerald-400 group-hover:text-emerald-300',
    badgeStyle: 'border-emerald-500/30 bg-emerald-950/60 text-emerald-200',
    subCategories: [
      { title: 'Precision Irrigation', link: '/solutions/precision-irrigation' },
      { title: 'Polyhouse (Greenhouse) Irrigation', link: '/solutions/polyhouse-greenhouse-irrigation' },
      { title: 'Agricultural Field Irrigation', link: '/solutions/agricultural-field-irrigation' },
      { title: 'Water Management', link: '/solutions/water-management' },
    ],
    exploreLink: '/irrigation-division',
  },
];

export const WhyKothari = () => {
  const router = useRouter();
  return (
    <section className="w-full bg-[#F5F6F8] py-20 lg:py-28 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Right-Aligned Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-300/80 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
            Divisions
          </h2>
          <p className="text-sm text-slate-600 max-w-md md:text-left font-normal leading-relaxed">
            Architectural conduits and agrarian micro-irrigation systems engineered for high-end infrastructure and scale.
          </p>
        </div>

        {/* 50% / 50% Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[620px]">
          {divisionData.map((division) => (
            <div
              key={division.id}
              onClick={() => router.push(division.exploreLink)}
              className="group relative w-full h-[500px] lg:h-full overflow-hidden border border-slate-300/80 shadow-lg bg-slate-950 flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:border-slate-400 cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${division.bgImage})` }}
              />

              {/* Default Dark Overlay - Concentrated at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-500 group-hover:opacity-0 z-10" />

              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${division.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
              />

              {/* Content Container */}
              <div className="relative z-20 p-6 sm:p-10 flex flex-col justify-end transition-all duration-500">
                
                {/* Heading */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight leading-tight mb-3">
                  {division.title}
                </h3>

                {/* Short Description (Default) */}
                <p className="text-sm text-slate-300 font-normal leading-relaxed mb-4 group-hover:hidden transition-all">
                  {division.shortDesc}
                </p>

                {/* Full Description (Reveals on Hover) */}
                <p className="hidden group-hover:block text-sm sm:text-base text-slate-200 font-normal leading-relaxed mb-6 transition-all">
                  {division.fullDesc}
                </p>

                {/* Sub-Category Badges (Hidden by Default -> Show ONLY on Hover) */}
                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                  <div className="flex flex-wrap items-center gap-2 mb-6 pt-1">
                    {division.subCategories.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.link}
                        onClick={(e) => e.stopPropagation()}
                        className={`text-xs px-3 py-1.5 border backdrop-blur-md font-medium tracking-wide shadow-sm transition-colors hover:bg-white hover:text-slate-900 hover:border-white ${division.badgeStyle}`}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Action Bar */}
                <div className="pt-5 border-t border-slate-700/60 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-2.5 text-xs tracking-widest uppercase font-mono font-semibold transition-colors ${division.accentColor}`}
                  >
                    <span>Explore Division</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 stroke-[1.75]" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};