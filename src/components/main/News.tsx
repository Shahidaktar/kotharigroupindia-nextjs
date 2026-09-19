'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

export interface HomeNewsCard {
  key: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  href: string;
  cta: string;
}

const FALLBACK_BLOGS: HomeNewsCard[] = [
  {
    key: 'BLOG-01',
      title: 'CPVC vs. UPVC: Choosing The Right Plumbing Pipe For Your Building',
      snippet: 'An engineering comparison of temperature thresholds, working pressure SDR ratings, chemical resistance, and solvent welding best practices.',
      date: 'June 2026',
      readTime: '8 MIN READ',
      category: 'PLUMBING SYSTEMS',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      href: '/blogs',
      cta: 'READ BLOG',
    },
    {
      key: 'BLOG-02',
      title: 'How Micro Irrigation Boosts Crop Yield By 40% With 50% Less Water',
      snippet: 'Discover the science behind targeted root-zone drip irrigation, fertigation nutrient uptake, and preventing evaporation losses in arid farmland.',
      date: 'July 2026',
      readTime: '12 MIN READ',
      category: 'MICRO IRRIGATION',
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg',
      href: '/blogs',
      cta: 'READ BLOG',
    },
    {
      key: 'BLOG-03',
      title: 'Preventing Borewell Column Failure: Submersible Pipe Installation Rules',
      snippet: 'Key guidelines on thread locking, torque limits, pump weight support, and preventing back-siphonage in deep underground borewells.',
      date: 'May 2026',
      readTime: '6 MIN READ',
      category: 'AGRI & BOREWELL',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      href: '/blogs',
      cta: 'READ BLOG',
    },
  ];

  const FALLBACK_NEWS: HomeNewsCard[] = [
    {
      key: 'NEWS-01',
      title: 'Kothari Group Expands High-Density Polyethylene Production Line',
      snippet: 'State-of-the-art extrusion machinery deployed to meet surging infrastructure demand across Western and Southern India.',
      date: 'AUG 18, 2026',
      readTime: '5 MIN READ',
      category: 'CORPORATE',
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
      href: '/press-release',
      cta: 'READ NEWS',
    },
    {
      key: 'NEWS-02',
      title: 'Next-Gen Drip Irrigation Systems Unveiled at AgriTech Summit',
      snippet: 'Introducing pressure-compensating micro drippers engineered for precise fertigation in hilly agricultural terrains.',
      date: 'JUL 24, 2026',
      readTime: '7 MIN READ',
      category: 'AGRI TECH',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      href: '/press-release',
      cta: 'READ NEWS',
    },
    {
      key: 'NEWS-03',
      title: 'Kothari Performance Labs Achieves ISO 17025 Accreditation',
      snippet: 'Independent quality validation setup reinforces strict quality control standardizations across polymer pipe testing.',
      date: 'JUN 10, 2026',
      readTime: '4 MIN READ',
      category: 'QUALITY',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      href: '/press-release',
      cta: 'READ NEWS',
    },
  ];

  function NewsCard({ item, idx }: { item: HomeNewsCard; idx: number }) {
    return (
      <Reveal key={item.key} delay={(idx % 3) * 90} className="h-full">
        <Link href={item.href} className="block h-full">
          <article className="group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">

            {/* Image Header - full image, not cropped */}
            <div className="relative overflow-hidden bg-slate-900 border-b border-slate-200">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.opacity = '0.3';
                }}
                className="w-full h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-black text-white text-[10px] font-mono tracking-widest font-medium px-3 py-1 uppercase">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
                  <span>{item.date}</span>
                  {/* <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {item.readTime}
                  </span> */}
                </div>

                <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                  {item.snippet}
                </p>
              </div>

              {/* Card CTA */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-[#1575B3] transition-colors">
                <span>{item.cta}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </article>
        </Link>
      </Reveal>
    );
  }

  export const News: React.FC<{
    blogPosts?: HomeNewsCard[];
    newsItems?: HomeNewsCard[];
  }> = ({
    blogPosts = FALLBACK_BLOGS,
    newsItems = FALLBACK_NEWS,
  }) => {
    return (
    <div className="w-full text-slate-900">

      {/* ==================== LATEST BLOGS (Grid Cards) ==================== */}
      <section id="blogs" className="w-full bg-[#F5F6F8] pt-16 pb-16 sm:pt-20 sm:pb-20 border-b border-slate-300/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300/80">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
                Latest Blogs
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              Engineering deep-dives, agricultural guides, and polymer specifications curated by Kothari specialists.
            </p>
          </div>

          {/* Blogs Grid */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((item, idx) => (
                <NewsCard key={item.key} item={item} idx={idx} />
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* ==================== NEWS AND ARTICLES (Editorial List) ==================== */}
      <section id="news" className="w-full py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-300/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
                News and Articles
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              Manufacturing expansions, corporate developments, and official press releases from Kothari Group.
            </p>
          </div>

          {/* News Cards Grid — same as Blogs */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item, idx) => (
                <NewsCard key={item.key} item={item} idx={idx} />
              ))}
            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
};