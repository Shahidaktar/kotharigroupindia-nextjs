'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Eye,
  Target,
  Lightbulb,
  Leaf,
  BadgeCheck,
  HeartHandshake,
  Handshake,
  ShieldCheck,
  Accessibility,
  Trophy,
  Heart,
  Award,
  TrendingUp,
  MapPin,
  ArrowUpRight,
  YoutubeIcon,
} from 'lucide-react';
import { SectionHeader } from '../solutions/SectionHeader';
import { Reveal } from '../main/Reveal';
import {
  aboutHero,
  aboutGrowth,
  aboutVisionMission,
  aboutApproach,
  aboutCoreValues,
  aboutLegacy,
  aboutWhyKothari,
  aboutPurposePrinciple,
  capGrowth,
  aboutWhy,
} from '@/data/about';

/* ── 1. HERO ─────────────────────────────────────────── */
export const AboutHero: React.FC = () => {
  return ( 
    <div className="relative w-full min-h-[40dvh] sm:min-h-0 sm:aspect-[16/9] lg:aspect-auto lg:min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0">
          <source media="(max-width: 639px)" srcSet={aboutHero.mobileBG} />
          <img
            src={aboutHero.image}
            alt="About Kothari Group"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full min-h-[40dvh] sm:min-h-0 lg:min-h-[100dvh] pt-24 sm:pt-14 lg:pt-28 pb-8 sm:pb-5 lg:pb-12 flex flex-col justify-between">
        {/* Breadcrumb */}
        {/* <nav className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-white/60 overflow-x-auto whitespace-nowrap shrink-0">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-white/90">About Us</span>
        </nav> */}

        {/* Headline Section */}
        <div className="w-full flex flex-col gap-5 sm:gap-3 lg:gap-6 py-8 sm:py-2 sm:my-auto lg:py-8">
          <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5">
            {aboutHero.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
            {aboutHero.heading}
          </h1>
          <p className="text-sm sm:text-xs md:text-sm lg:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
            {aboutHero.description}
          </p>
        </div>

{/* Stats Strip - Anchored at Bottom */}
        {/* Mobile aspect spacer: keeps headline at top and stats at bottom */}
        <div aria-hidden="true" className="w-full shrink-0 aspect-video sm:hidden" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 lg:gap-10 w-full border-t border-white/20 pt-6 sm:pt-3 lg:pt-6 mt-auto max-w-4xl">
          {aboutGrowth.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl sm:text-2xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                {stat.value}
              </span>
              <span className="text-xs sm:text-[10px] md:text-xs lg:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AboutHero2: React.FC = () => {
  return ( 
    <div className="relative w-full min-h-[40dvh] lg:min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between pt-2">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0">
          <source media="(max-width: 639px)" srcSet={'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/Capabilities_banner-Verticle.webp'} />
          <img
            src={'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/Capabilities_banner.webp'}
            alt="About Kothari Group"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full min-h-[40dvh] lg:min-h-[100dvh] pt-24 sm:pt-12 lg:pt-28 pb-8 sm:pb-3 lg:pb-12 flex flex-col justify-between">
       
        <div className="w-full flex flex-col gap-5 sm:gap-2 lg:gap-6 py-8 sm:py-1 sm:my-auto lg:py-8">
          <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5">
          About · Capabilities
          </span>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
           Capabilities & Infrastructure
          </h1>
         
        </div>

{/* Stats Strip - Anchored at Bottom */}
        {/* Mobile aspect spacer: keeps headline at top and stats at bottom */}
        <div aria-hidden="true" className="w-full shrink-0 aspect-video sm:hidden" />

        <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch lg:items-end gap-6 sm:gap-3 lg:gap-12 w-full mt-auto">
                
                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 lg:gap-10 w-full lg:w-auto border-t border-white/20 pt-6 sm:pt-3 lg:pt-6">
                       {[
                       { value: '30+', label: 'Years of excellence' },
  { value: '9', label: 'Factories' },
  { value: '11', label: 'Warehouses' },
  { value: '10', label: `Countries products exported` },

                       ].map((stat, idx) => (
                         <div key={idx} className="flex flex-col">
                           <span className="text-2xl sm:text-2xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                             {stat.value}
                           </span>
                           <span className="text-xs sm:text-[10px] md:text-xs lg:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                             {stat.label}
                           </span>
                         </div>
                       ))}
                     </div>
       
               
                     <div className="w-full lg:w-auto lg:max-w-[420px] shrink-0">
                       <a
                         href="https://www.youtube.com/watch?v=ev5S-JlLG4A"
                         target="_blank"
                         rel="noopener noreferrer"
                         aria-label="Watch our capabilities on YouTube"
                         className="group card bg-black/50 backdrop-blur-md border border-white/20 rounded-sm shadow-2xl overflow-hidden block cursor-pointer"
                       >
                         <div className="relative aspect-video w-full bg-slate-900">
                           <img
                             src="https://img.youtube.com/vi/ev5S-JlLG4A/maxresdefault.jpg"
                             alt="Watch our capabilities"
                             referrerPolicy="no-referrer"
                             loading="lazy"
                             className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                           />
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                           <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none" />
                           <div className="absolute inset-0 flex items-center justify-center">
                             <YoutubeIcon className="w-9 h-9 drop-shadow-lg text-red-600" />
                           </div>
                         </div>
                         <div className="px-4 py-3 text-xs font-mono tracking-widest uppercase text-white/85 group-hover:text-sky-200 flex items-center justify-between gap-3 transition-colors">
                           <span>Watch our infrastructure</span>
                           <ArrowUpRight className="w-4 h-4" />
                         </div>
                       </a>
                     </div>
                   </div>
      </div>
    </div>
  );
};

/* ── 2. GROWTH ───────────────────────────────────────── */
export const AboutGrowth: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={aboutGrowth.heading}
          // description="Four decades of building India's water future."
        />
        <div className="max-w-7xl space-y-4">
          <p className="text-base sm:text-xl font-semibold text-slate-900 leading-snug">
            {aboutGrowth.intro}
          </p>
          {aboutGrowth.paragraphs.map((para, idx) => (
            <p key={idx} className="text-sm sm:text-[18px] text-slate-600 font-normal leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutWhy: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={aboutWhy.heading}
          // description="Four decades of building India's water future."
        />
        <div className="max-w-7xl space-y-4">
          <p className="text-base sm:text-xl font-semibold text-slate-900 leading-snug">
            {aboutWhy.intro}
          </p>
          {aboutWhy.paragraphs.map((para, idx) => (
            <p key={idx} className="text-sm sm:text-[18px] text-slate-600 font-normal leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 3. VISION / MISSION ─────────────────────────────── */
const VISION_ICONS: Record<string, React.ElementType> = { vision: Eye, mission: Target };
const PURPOSE_ICONS: Record<string, React.ElementType> = { purpose: Handshake, principle: Target };

export const AboutVisionMission: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Vision & Mission"
          description=""
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {aboutVisionMission.map((item, idx) => {
            const Icon = VISION_ICONS[item.icon] || Eye;
            return (
              <Reveal key={item.type} delay={idx * 90} className="h-full">
                <div className="group bg-white border border-slate-200 p-8 sm:p-10 flex flex-col gap-5 h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-colors">
                    <Icon className="w-6 h-6 text-[#1575B3] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light uppercase tracking-tight text-slate-900">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export const AboutVisionMission2: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Purpose & Principle"
          description="Our Purpose, Guided by Integrity and Responsible Water Management."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {aboutPurposePrinciple.map((item, idx) => {
            const Icon = PURPOSE_ICONS[item.icon] || Eye;
            return (
              <Reveal key={item.type} delay={idx * 90} className="h-full">
                <div className="group bg-white border border-slate-200 p-8 sm:p-10 flex flex-col gap-5 h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-colors">
                    <Icon className="w-6 h-6 text-[#1575B3] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light uppercase tracking-tight text-slate-900">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── 4. APPROACH + PURPOSE ───────────────────────────── */
const APPROACH_ICONS = [Lightbulb, Handshake, ShieldCheck];

export const AboutApproach: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-10">
        <SectionHeader
          title={aboutApproach.heading}
          description="Three principles behind every product and partnership."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {aboutApproach.items.map((item, idx) => {
            const Icon = APPROACH_ICONS[idx % APPROACH_ICONS.length];
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div key={item.title} className="group bg-white p-6 sm:p-8 space-y-4 hover:bg-slate-50/60 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-colors">
                    <Icon className="w-5 h-5 text-[#1575B3] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-slate-400">{num}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Purpose Band */}
      {/* <div className="w-full bg-[#015CAA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-sky-200 border border-white/25 bg-white/10 px-3 py-1.5 self-start shrink-0">
            {aboutApproach.purpose.label}
          </span>
          <p className="text-lg sm:text-2xl font-serif font-light text-white leading-snug tracking-tight">
            {aboutApproach.purpose.description}
          </p>
        </div>
      </div> */}
    </section>
  );
};

/* ── 5. CORE VALUES ──────────────────────────────────── */
const VALUE_ICONS: Record<string, React.ElementType> = {
  innovation: Lightbulb,
  sustainability: Leaf,
  quality: BadgeCheck,
  'customer-first': HeartHandshake,
  collaboration: Handshake,
  integrity: ShieldCheck,
  accessibility: Accessibility,
  excellence: Trophy,
  respect: Heart,
};

export const AboutCoreValues: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <SectionHeader
          title={aboutCoreValues.heading}
          description="Nine values that guide how we build, serve and grow."
        />

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutCoreValues.values.map((value) => {
            const Icon = VALUE_ICONS[value.icon] || BadgeCheck;
            return (
              <div
                key={value.title}
                className="group relative border border-slate-200 bg-white p-7 hover:border-[#1575B3]/40 hover:shadow-[0_24px_50px_-24px_rgba(21,117,179,0.35)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] group-hover:shadow-[0_10px_20px_-8px_rgba(21,117,179,0.6)] transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#1575B3] group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900 leading-snug">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 font-normal leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── 6. LEGACY — THE RIVER OF MILESTONES ─────────────── */
const LEGACY_RIVER_PATH = 'M 0 250 L 1200 250';

const LEGACY_VIEW_W = 1200; 
const LEGACY_VIEW_H = 500;

const LEGACY_BG_IMAGES = [
  '/heronew.jpg',
  '/heronew2.jpg',
  '/heronew3.jpg',
  '/t3.jpg',
  '/plant_quality_lab_1784719742717.jpg',
];

// Five fixed "beads" spread along the full river — each cycles through milestones
const LEGACY_BEAD_FRACTIONS = [0.1, 0.3, 0.47, 0.66, 0.85];

export const AboutLegacy: React.FC = () => { 
  const timeline = aboutLegacy.timeline;
  const WINDOW = 5;
  const [active, setActive] = useState(0);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState({ w: LEGACY_VIEW_W, h: LEGACY_VIEW_H });

  // Only 5 dots "ride" the river at once — they page forward in windows
  const totalPages = Math.ceil(timeline.length / WINDOW);
  const page = Math.floor(active / WINDOW);

  const goPage = (p: number) => {
    const np = (p + totalPages) % totalPages;
    setActive(np * WINDOW);
  };

  // Compute the 5 bead positions spread down the full river once the path is mounted
  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const len = el.getTotalLength();
    const pts = LEGACY_BEAD_FRACTIONS.map((f) => {
      const p = el.getPointAtLength(f * len);
      return { x: p.x, y: p.y };
    });
    setPoints(pts);
  }, []);

  // Measure the rendered SVG box so HTML dots align exactly on the river
  // (the SVG letterboxes, so we map user-space coords through its scale/offset)
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        setGeo({ w: r.width, h: r.height });
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  // Uniform non-uniform mapping — the SVG uses preserveAspectRatio="none",
  // so user-space coords map directly to percentage positions in the rendered box.
  const toPctX = (x: number) => (x / LEGACY_VIEW_W) * 100;
  const toPctY = (y: number) => (y / LEGACY_VIEW_H) * 100;

  // Auto-slide between years — pauses on hover
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % timeline.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [paused, active, timeline.length]);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#061E33] via-[#0E588A] to-[#015CAA] pt-16 pb-6  overflow-hidden border-b border-slate-900/20">
      {/* Decorative glows */}
      <div aria-hidden className="absolute -top-32 -right-24 w-[560px] h-[560px] bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-40 -left-24 w-[600px] h-[600px] bg-blue-900/50 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dotted grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

{/* Faint background image — static */}
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: `url('${LEGACY_BG_IMAGES[0]}')` }}
          />
   

      {/* Header — constrained to content width */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/15">
          <div>
         
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-white">
              {aboutLegacy.heading} 
            </h2>
          </div>
          <p className="text-xs sm:text-base text-blue-100/80 max-w-md font-normal leading-relaxed">
         Kothari Group has established a legacy of over 40 years in the domain of pipes and irrigation solutions for sustainable water management. 
          </p>
        </div>
      </div>

      {/* Straight river line — full viewport width */}
      <div
        ref={boxRef}
        className="relative mt-8 h-[380px] sm:h-[440px] lg:h-[460px] w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
          <svg
            viewBox={`0 0 ${LEGACY_VIEW_W} ${LEGACY_VIEW_H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="55%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
              <filter id="riverGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Wide soft underlay + dashed flowing waters */}
            <path
              ref={pathRef}
              d={LEGACY_RIVER_PATH}
              fill="none"
              stroke="url(#riverGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.18"
              filter="url(#riverGlow)"
            />
            <path
              d={LEGACY_RIVER_PATH}
              fill="none"
              stroke="url(#riverGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="river-flow"
            />
            <path
              d={LEGACY_RIVER_PATH}
              fill="none"
              stroke="rgba(165,243,252,0.9)"
              strokeWidth="1.3"
              strokeLinecap="round"
              className="river-flow-fast"
            />
          </svg>

          {/* Five beads spread across the full river — filling one by one */}
          {points.map((p, k) => {
            const gi = page * WINDOW + k;
            const milestone = timeline[gi];
            if (!milestone) return null;
            const left = toPctX(p.x);
            const top = toPctY(p.y);
            const slot = active % WINDOW;
            const isActive = k === slot;
            const isPassed = k < slot;
            const delay = k * 90;
            // Position layout per slot: 1=below/above, 2=below/above, 3=above/below, 4=below/above, 5=above/below
            // Odd dots (0,2,4): year below, description above
            // Even dots (1,3): year above, description below
            const yearAbove = k === 1 || k === 3;
            return (
              <button
                key={`${page}-${gi}-${milestone.year}`}
                onClick={() => setActive(gi)}
                onMouseEnter={() => {
                  setPaused(true);
                  setHovered(gi);
                }}
                onMouseLeave={() => {
                  setPaused(false);
                  setHovered(null);
                }}
                aria-label={`Milestone ${milestone.year}`}
                className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                {isActive && (
                  <span className="dot-pulse absolute inset-0 rounded-full bg-cyan-300/60" />
                )}
                <span
                  className={`dot-in relative block rounded-full z-10 transition-all duration-300 ${
                    isActive
                      ? 'w-[18px] h-[18px] bg-white border border-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.95)]'
                      : isPassed
                        ? 'w-3.5 h-3.5 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.6)]'
                        : 'w-3 h-3 bg-white/25 border border-cyan-200/40 group-hover:bg-cyan-300 group-hover:bg-white/70'
                  }`}
                  style={{ animationDelay: `${delay}ms` }}
                />
                {/* Year on every dot — above (odd slot) / below (even slot) */}
                <span
                  className={`fade-in absolute left-1/2 -translate-x-1/2 z-20 whitespace-nowrap font-mono text-[11px] font-semibold tracking-[0.12em] px-1.5 py-0.5 transition-colors duration-300 ${
                    isActive
                      ? 'bg-white text-[#0E588A] shadow-[0_0_14px_rgba(103,232,249,0.6)]'
                      : 'bg-cyan-300/15 text-cyan-100/90 group-hover:bg-cyan-300/25 group-hover:text-white'
                  } ${yearAbove ? 'bottom-[calc(100%+8px)]' : 'top-[calc(100%+10px)]'}`}
                  style={{ animationDelay: `${delay + 90}ms` }}
                >
                  {milestone.year}
                </span>
              </button>
            );
          })}

          {/* Single full description card — clamped so it stays inside the viewport */}
          {(() => {
            const inWindow =
              hovered !== null &&
              hovered >= page * WINDOW &&
              hovered < page * WINDOW + WINDOW;
            const descGi = inWindow ? hovered : active;
            const descK = descGi - page * WINDOW;
            const dm = timeline[descGi];
            const dp = points[descK];
            if (!dm || !dp) return null;
            const dotX = (dp.x / LEGACY_VIEW_W) * geo.w;
            const dotY = (dp.y / LEGACY_VIEW_H) * geo.h;
            const cardW = Math.min(340, geo.w * 0.84);
            let cardLeft = dotX - cardW / 2;
            cardLeft = Math.max(8, Math.min(cardLeft, geo.w - cardW - 8));
            // Odd dots (0,2,4): description above; Even dots (1,3): description below
            const descBelow = descK === 1 || descK === 3;
            return (
              <div
                key={`${page}-${descGi}`}
                className="fade-in absolute z-30 text-left font-normal text-xs sm:text-sm leading-relaxed text-blue-50 pointer-events-none"
                style={{
                  left: cardLeft,
                  width: cardW,
                  top: descBelow ? dotY + 14 : undefined,
                  bottom: descBelow ? undefined : geo.h - dotY + 14,
                }}
              >
                <span className="block border border-cyan-200/25 bg-[#0b3d61]/95 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <img
                    src={dm.image}
                    alt={dm.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-28 sm:h-32 object-cover object-center"
                  />
                  {/* <span className="block px-4 py-3 border-t border-white/10">
                    {dm.description}
                  </span> */}
                </span>
              </div>
            );
          })()}
        </div>

        {/* Prev / Next Arrows */}
        {totalPages > 1 && (
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10 mt-2 flex items-center justify-center gap-4">
            <button
              onClick={() => goPage(page - 1)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              aria-label="Previous milestones"
              className="w-11 h-11 flex items-center justify-center border border-white/25 bg-white/5 text-white hover:border-cyan-300 hover:text-cyan-200 transition-all duration-300 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goPage(page + 1)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              aria-label="Next milestones"
              className="w-11 h-11 flex items-center justify-center border border-white/25 bg-white/5 text-white hover:border-cyan-300 hover:text-cyan-200 transition-all duration-300 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
    </section>
  );
};

/* ── 7. WHY KOTHARI ──────────────────────────────────── */
const WHY_ICONS: Record<string, React.ElementType> = {
  'trusted-legacy': Award,
  'proven-quality': BadgeCheck,
  innovation: Lightbulb,
  'empowering-growth': TrendingUp,
  'extensive-reach': MapPin,
  'customer-first-service': HeartHandshake,
};

export const AboutWhyKothari: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={aboutWhyKothari.heading}
          description="Born in Solapur, Maharashtra, Kothari Group has grown with a clear purpose: to make water management more efficient, accessible, and reliable. "
        />
        <div className="flex flex-col divide-y divide-slate-200 border-y border-slate-200 bg-white">
          {aboutWhyKothari.items.map((item, i) => {
            const Icon = WHY_ICONS[item.icon] || Award;
            return (
              <div
                key={item.title}
                className="group relative flex items-center gap-4 sm:gap-8 px-5 sm:px-8 py-6 sm:py-7 hover:bg-[#F5F6F8] transition-colors"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] bg-[#1575B3] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"
                />
                <span className="w-10 shrink-0 font-mono text-sm text-[#1575B3]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 shrink-0 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] group-hover:shadow-[0_10px_20px_-8px_rgba(21,117,179,0.6)] transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#1575B3] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 font-normal leading-relaxed">{item.description}</p>
                </div>
                {/* <ArrowUpRight className="w-5 h-5 shrink-0 text-slate-300 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[#1575B3] transition-all duration-300" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
