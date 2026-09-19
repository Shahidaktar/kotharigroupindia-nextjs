'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  Globe, 
  Handshake, 
  Calendar, 
  Grid, 
  MapPin, 
  Box 
} from 'lucide-react';

export const WhyKothariGroup = () => {
  const featureCards = [
    {
      id: '02',
      title: 'High Quality',
      subtitle: 'Products & Materials',
      description: `We deliver durable, high-quality products designed to perform reliably in India's diverse rural and urban needs`,
      icon: Award,
    },
    {
      id: '03',
      title: 'Innovative',
      subtitle: 'Precision Solutions',
      description: 'We lead through innovation with cutting-edge, affordable, and sustainable water management technologies.',
      icon: Lightbulb,
    },
    {
      id: '04',
      title: 'Pan India',
      subtitle: 'Distribution Presence',
      description: 'Our extensive dealer and distributor network, spanning 23+ states, ensures wide accessibility and quick delivery of our products.',
      icon: Globe,
    },
    {
      id: '05',
      title: 'Customer-First',
      subtitle: 'Driven Approach',
      description: 'Quick delivery, responsive after-sales support, and a customer-first approach ensure strong, long-lasting relationships unmatched by competitors.',
      icon: Handshake,
    },
  ];

  const stats = [
    {
      icon: Calendar,
      value: '35+',
      label: 'Years of Trust',
    },
    {
      icon: Grid,
      value: '2',
      label: 'Business Divisions',
    },
    {
      icon: MapPin,
      value: 'Pan-India',
      label: 'Distribution Network',
    },
    {
      icon: Box,
      value: '1000+',
      label: 'Products & Solutions',
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
              Why Kothari Group?
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-normal leading-relaxed">
            Over three decades of manufacturing leadership, precision polymer engineering, and trust across millions of Indian farms and structures.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. Feature Hero Box */}
          <div className="lg:col-span-5 relative bg-[#041221] text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl rounded-none">
            
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <div 
                className="w-full h-full bg-cover bg-center mix-blend-overlay"
                style={{ backgroundImage: `url('/heronew3.jpg')` }}
              />
              {/* Overlay clear in center */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#041E33fa_0%,#062A4Acc_28%,#020D18fa_100%)]" />
            </div>

            {/* TOP PORTION (Header & Title) */}
            <div className="relative z-10">
              {/* TOP BAR: Shield Logo & EST. Tag */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 border border-sky-400/30 bg-sky-900/20 flex items-center justify-center backdrop-blur-sm">
                  <ShieldCheck className="w-6 h-6 text-sky-400 stroke-[1.5]" />
                </div>
                <span className="text-xs font-mono tracking-widest text-slate-300 uppercase px-3 py-1 border border-slate-600/60 bg-slate-900/40">
                  EST. 1988
                </span>
              </div>

              {/* HEADER STAT / TITLE */}
              <div className="pl-3 border-l-2 border-sky-400">
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  35+ Years
                </h3>
                <p className="text-lg sm:text-xl text-slate-300 font-light mt-0.5">
                  of Manufacturing Excellence
                </p>
              </div>
            </div>

            {/* BOTTOM PORTION (Stats Grid + Bottom Section locked together at the very bottom) */}
            <div className="relative z-10 mt-auto pt-12">
              {/* MIDDLE STATS GRID */}
              <div className="grid grid-cols-4 gap-2 py-4 px-6 sm:px-8 -mx-6 sm:-mx-8 border-y border-slate-700/60 bg-[linear-gradient(to_top,#062A4A00_0%,#062A4A66_50%,#062A4A00_100%)]">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={idx} 
                      className={`flex flex-col items-center text-center px-1 ${
                        idx !== stats.length - 1 ? 'border-r border-slate-100/30' : ''
                      }`}
                    >
                      <IconComponent className="w-5 h-5 text-sky-400 mb-1.5 stroke-[1.5]" />
                      <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-slate-400 leading-tight mt-0.5 font-light">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM SECTION: Directly below the stats grid */}
              <div className="pt-4">
                <div className="text-5xl sm:text-6xl font-light text-white tracking-wide font-sans">
                  1988
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-white mt-1">
                  Trusted Since 1988
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mt-1.5 max-w-md">
                  Building reliable pipe and irrigation solutions for agriculture, infrastructure and everyday living.
                </p>
              </div>
            </div>

          </div>

          {/* Right 7-Column Grid (4 Rich Cards in 2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="relative bg-white border border-slate-200 p-7 sm:p-8 flex flex-col justify-between h-auto min-h-[250px] transition-all duration-300 group hover:border-[#1575B3] hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-100 group-hover:bg-[#1575B3] transition-colors duration-300" />

                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-slate-700 group-hover:text-white stroke-[1.75] transition-colors flex items-center justify-center" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-normal text-slate-900 group-hover:text-[#1575B3] transition-colors text-center">
                        {card.title}
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mt-0.5 text-center">
                        {card.subtitle}
                      </span>
                    </div>

                    <p className="text-center text-xs sm:text-sm text-slate-500 leading-relaxed pt-3 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};