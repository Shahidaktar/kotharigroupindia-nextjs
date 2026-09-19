'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock, Quote, Star } from 'lucide-react';
import { Reveal } from './main/Reveal';

export interface DivisionNewsCard {
  key: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  href: string;
}

export const NewsDivision: React.FC<{ theme?: 'blue' | 'green'; newsItems?: DivisionNewsCard[]; blogPosts?: DivisionNewsCard[] }> = ({ theme = 'blue', newsItems: newsItemsProp, blogPosts: blogPostsProp }) => {
  const isGreen = theme === 'green';
  const accentHoverBorder = isGreen ? 'hover:border-[#1E8E3E]' : 'hover:border-[#1575B3]';
  const accentGroupHoverText = isGreen ? 'group-hover:text-[#1E8E3E]' : 'group-hover:text-[#1575B3]';
  const FALLBACK_NEWS: DivisionNewsCard[] = [
    {
      key: 'NEWS-01',
      title: 'Kothari Group Expands High-Density Polyethylene Production Line',
      snippet: 'State-of-the-art extrusion machinery deployed to meet surging infrastructure demand across Western and Southern India.',
      date: 'AUG 18, 2026',
      readTime: '5 MIN READ',
      category: 'CORPORATE',
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
      href: '/press-release'
    },
    {
      key: 'NEWS-02',
      title: 'Next-Gen Drip Irrigation Systems Unveiled at AgriTech Summit',
      snippet: 'Introducing pressure-compensating micro drippers engineered for precise fertigation in hilly agricultural terrains.',
      date: 'JUL 24, 2026',
      readTime: '7 MIN READ',
      category: 'AGRI TECH',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      href: '/press-release'
    },
    {
      key: 'NEWS-03',
      title: 'Kothari Performance Labs Achieves ISO 17025 Accreditation',
      snippet: 'Independent quality validation setup reinforces strict quality control standardizations across polymer pipe testing.',
      date: 'JUN 10, 2026',
      readTime: '4 MIN READ',
      category: 'QUALITY',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      href: '/press-release'
    }
  ];

  const testimonials = [
    {
      quote: "We are an authorised dealer of Kothari Group & dealing exclusively with Kothari Group since the last 20 years. Thanks to the company for supplying quality products consistently & its team for providing prompt services all the time.",
      author: 'Kumareshwar Traders',
      role: 'Mudhol, Karnataka',
      company: 'Apex Buildcon Projects'
    },
    {
      quote: "We are really delighted by the quality of Kothari Group’s Products & Services. Thank you so much, and we will be looking forward to an excellent continuing business relationship.",
      author: 'Arihant Marketing',
      role: ' Bijapur Karnataka',
      company: 'Nashik Agriculture Cooperative'
    },
    {
      quote: "Kothari Group’s Kosons Submersible Cables & Wires are excellent and specially designed Products. The finishing of the Submersible Cables is excellent.",
      author: 'Nitin Omprakash Mundada',
      role: ' Beed(MH)',
      company: 'Smart Infra Consultants'
    }
  ];

  const FALLBACK_BLOGS: DivisionNewsCard[] = [
    {
      key: 'BLOG-01',
      title: 'CPVC vs. UPVC: Choosing The Right Plumbing Pipe For Your Building',
      snippet: 'An engineering comparison of temperature thresholds, working pressure SDR ratings, chemical resistance, and solvent welding best practices.',
      date: 'June 2026',
      readTime: '8 MIN READ',
      category: 'PLUMBING SYSTEMS',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      href: '/blogs'
    },
    {
      key: 'BLOG-02',
      title: 'How Micro Irrigation Boosts Crop Yield By 40% With 50% Less Water',
      snippet: 'Discover the science behind targeted root-zone drip irrigation, fertigation nutrient uptake, and preventing evaporation losses in arid farmland.',
      date: 'July 2026',
      readTime: '12 MIN READ',
      category: 'MICRO IRRIGATION',
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg',
      href: '/blogs'
    },
    {
      key: 'BLOG-03',
      title: 'Preventing Borewell Column Failure: Submersible Pipe Installation Rules',
      snippet: 'Key guidelines on thread locking, torque limits, pump weight support, and preventing back-siphonage in deep underground borewells.',
      date: 'May 2026',
      readTime: '6 MIN READ',
      category: 'AGRI & BOREWELL',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      href: '/blogs'
    }
  ];

  const newsItems = newsItemsProp ?? FALLBACK_NEWS;
  const blogPosts = blogPostsProp ?? FALLBACK_BLOGS;

  return (
    <div className="w-full text-slate-900">

      {/* ==================== 1. TESTIMONIALS (GREY BG) ==================== */}
      <section id="testimonials" className={`w-full py-16 sm:py-24 ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} text-slate-900 scroll-mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
                Testimonials
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              What engineers, agricultural experts, and project managers say about our piping solutions.
            </p>
          </div>

          {/* Testimonial Cards */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200 p-8 flex flex-col justify-between relative ${accentHoverBorder} hover:shadow-lg transition-all duration-300 group`}
                >
                  <Quote className={`w-8 h-8 ${isGreen ? 'text-[#1E8E3E]/20' : 'text-[#1575B3]/20'} absolute top-6 right-6`} />

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${isGreen ? 'fill-[#1E8E3E] text-[#1E8E3E]' : 'fill-[#1575B3] text-[#1575B3]'}`} />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 font-serif italic leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <h4 className={`text-base font-medium text-slate-900 ${accentGroupHoverText} transition-colors duration-300`}>
                      {item.author}
                    </h4>
                    <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* ==================== 2. LATEST BLOGS (GREY BG) ==================== */}
      <section id="blogs" className="w-full bg-white py-16 sm:py-24 border-y border-slate-300/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
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
                <Reveal key={item.key} delay={idx * 90} className="h-full">
                  <Link href={item.href} className="block h-full">
                  <article className={`group relative ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl ${accentHoverBorder} transition-all duration-500 overflow-hidden`}>

                    {/* Image Header */}
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

                        <h3 className={`text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight ${accentGroupHoverText} transition-colors duration-300`}>
                          {item.title}
                        </h3>

                        <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                          {item.snippet}
                        </p>
                      </div>

                      {/* Card CTA */}
                      <div className={`pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase ${accentGroupHoverText} transition-colors`}>
                        <span>READ BLOG</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>

        </div>
      </section>


      {/* ==================== 3. NEWS AND ARTICLES (WHITE BG) ==================== */}
      <section id="news" className={`w-full py-16 sm:py-24 ${isGreen ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} text-slate-900 border-b ${isGreen ? 'border-[#1E8E3E]/15' : 'border-slate-300/70'} scroll-mt-20`}>
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

          {/* News Cards Grid */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item, idx) => (
                <Reveal key={item.key} delay={idx * 90} className="h-full">
                  <Link href={item.href} className="block h-full">
                  <article className={`group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl ${accentHoverBorder} transition-all duration-500 overflow-hidden`}>

                    {/* Image Header */}
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

                        <h3 className={`text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight ${accentGroupHoverText} transition-colors duration-300`}>
                          {item.title}
                        </h3>

                        <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                          {item.snippet}
                        </p>
                      </div>

                      {/* Card CTA */}
                      <div
                        className={`pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase ${accentGroupHoverText} transition-colors`}
                      >
                        <span>READ NEWS</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
};