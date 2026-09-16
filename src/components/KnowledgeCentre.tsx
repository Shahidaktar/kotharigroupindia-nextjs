'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';



const defaultItems = [
  {
    title: 'Plumbing Systems',
    description: 'CPVC and UPVC technical specifications, solvent welding procedures, and hydraulic pressure loss charts for residential and commercial installations.',
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    link: '#plumbing'
  },
  {
    title: 'Agri & Borewell',
    description: 'Field installation manuals for underground UPVC agricultural mains, HDPE coil laying best practices, and torque limits for deep borewell column pipes.',
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    link: '#agri'
  },
  {
    title: 'Micro Irrigation',
    description: 'Engineering design principles for labyrinth drip emitters, sprinkler throw radii, fertigation dosing setups, and hydro-cyclone sand filtration stations.',
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
    link: '#irrigation'
  }
];

export const KnowledgeCentre: React.FC<{ itemData?: any[]; theme?: 'blue' | 'green' }> = ({ itemData = defaultItems, theme = 'blue' }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isGreen = theme === 'green';
  const accentBg = isGreen ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]';
  const accentText = isGreen ? 'text-[#1E8E3E]' : 'text-[#1575B3]';

  return (
    <section id="knowledge-centre" className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
              Knowledge Centre
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Technical documentation, engineering guidelines, and field manuals for Kothari systems.
          </p>
        </div>

        {/* Minimal Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-4">
          
          {/* Left Column: Clean Borderless Interactive List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            {itemData?.map((item:any, idx:any) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative pl-6 cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-4`}
                >
                  {/* Subtle Left Active Indicator Line */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                      isActive ? accentBg : 'bg-slate-200 group-hover:bg-slate-400'
                    }`} 
                  />

                  <div className="space-y-2">
                    <h3 className={`text-2xl sm:text-3xl font-serif font-normal transition-colors duration-300 ${
                      isActive ? accentText : 'text-slate-900 group-hover:text-slate-700'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <a
                      href={item.link}
                      className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 ${
                        isActive 
                          ? `${accentText} translate-x-1` 
                          : 'text-slate-500 group-hover:text-slate-900'
                      }`}
                    >
                      <span>LEARN MORE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Clean Image Panel */}
          <div className="lg:col-span-6 min-h-[380px] lg:min-h-full bg-slate-100 relative overflow-hidden">
            {itemData?.map((item:any, idx:any) => (
              <img
                key={idx}
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};