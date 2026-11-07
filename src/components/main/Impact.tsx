'use client';

import React from 'react';
import { Users, Sprout, Handshake, MapPin } from 'lucide-react';
import { Reveal, CountUp } from './Reveal';

export const Impact: React.FC = () => {
  const impacts = [
    {
      num: '01',
      value: 10,
      suffix: ' Lakh+',
      label: 'Farmers Empowered',
      description: 'Advancing agricultural yields through precision water management.',
      icon: Users,
    },
    {
      num: '02',
      value: 5,
      suffix: ' Lakh+',
      label: 'Hectares Irrigated',
      description: 'Subterranean and surface land optimized via micro-drip networks.',
      icon: Sprout,
    },
    {
      num: '03',
      value: 7500,
      suffix: '+',
      label: 'Channel Partners',
      description: 'Pan-India network of high-caliber distributors and engineers.',
      icon: Handshake,
    },
    {
      num: '04',
      value: 23,
      suffix: '+ States',
      label: 'Territorial Footprint',
      description: 'Supplying national infrastructure from regional hubs to farm gates.',
      icon: MapPin,
    },
  ];

  return (
    <section id="impact" className="w-full bg-[#015CAA] py-24 lg:py-32 text-white overflow-hidden scroll-mt-20 relative">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full border-x border-white/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Editorial Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/20">
          <div className="space-y-2">
            {/* <span className="text-[11px] font-mono tracking-widest text-sky-300 font-semibold uppercase">
              Core Metrics
            </span> */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight uppercase text-white">
              Institutional Impact
            </h2>
          </div>

          <p className="text-xs sm:text-[16px] text-sky-100/80 max-w-sm font-light leading-relaxed">
            Supporting India's civil infrastructure, agriculture, and water management through reliable piping and irrigation solutions.
          </p>
        </div>

        {/* Minimalist Editorial Columns */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {impacts.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`group relative pt-8 sm:pt-0 ${
                    idx !== 0 ? 'sm:pl-8 lg:pl-10' : ''
                  }`}
                >
                  {/* Large Stylized Background Number */}
                  <span className="absolute -top-10 left-0 sm:left-8 lg:left-10 text-8xl font-mono font-bold text-white/[0.05] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none select-none">
                    {item.num}
                  </span>

                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between relative z-10 mb-8">
                    {/* <span className="text-[10px] font-mono tracking-widest text-sky-300/90 font-bold uppercase">
                      [{item.num}]
                    </span> */}
                    {/* <IconComp className="w-4 h-4 text-sky-200/50 group-hover:text-white transition-colors duration-300" /> */}
                  </div>

                  {/* Stat Value */}
                  <div className="relative z-10 space-y-2">
                    <CountUp
                      value={item.value}
                      suffix={item.suffix}
                      className="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-white tracking-tight leading-none"
                    />
                    
                    <h3 className="text-xs font-mono font-semibold text-sky-200 tracking-wider uppercase pt-2">
                      {item.label}
                    </h3>

                    <p className="text-[15px]  text-sky-100/80 font-light leading-relaxed pt-2 max-w-xs">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Accent Dot */}
                  {/* <div className="mt-8 flex items-center gap-2 pt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/40 group-hover:bg-sky-300 group-hover:scale-125 transition-all duration-300" />
                    <span className="h-[1px] w-8 bg-white/20 group-hover:w-16 group-hover:bg-sky-300/50 transition-all duration-500" />
                  </div> */}
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
};