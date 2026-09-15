import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { FacilityMap } from '@/components/contact/FacilityMap';
import { SolutionOverview } from '@/components/solutions/SolutionOverview';
import { CertificatesSection } from '@/components/capabilities/CertificatesSection';

export const metadata = {
  title: 'Capabilities & Infrastructure | Kothari Group India',
  description:
    '8 strategically located manufacturing units across India — advanced technology, 100% automation and quality certification driving Kothari Group\'s pipe and irrigation solutions.',
};

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#FF0000"
      fillRule="evenodd"
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
    />
    <path fill="white" d="M9.545 8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const technologyCards = [
  {
    image: '/plant_extrusion_line_1784719717817.jpg',
    eyebrow: 'Technology & Equipment',
    heading: 'Advanced Technology',
    description:
      "Kothari's fast, reliable, high-quality, yet cost-effective manufacturing process is fueled by ultra-modern manufacturing facilities, European, and Israeli technology and equipment.",
  },
  {
    image: '/plant_quality_lab_1784719742717.jpg',
    eyebrow: 'Technology & Equipment',
    heading: '100% Automation',
    description:
      'By utilizing advanced technology, we have automated our manufacturing process to deliver the best and consistent products quality.',
  },
];

const CAPABILITIES_INTRO = [
  `At Kothari Group, with decades of expertise, we have developed a deep understanding of the needs of the agricultural and construction industry. That's why, we only manufacture quality and cost-effective irrigation solutions and pipes according to the customer's needs.`,
  `We have 8 strategically located manufacturing units across the country, which helps to meet the requirements of various geographies and markets.`,
];

export default function CapabilitiesInfrastructurePage() {
  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[40dvh] sm:min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src="/plant_aerial_view_1784719755067.jpg"
              alt="Manufacturing capabilities at Kothari Group"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
          </div>

          {/* Main Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full min-h-[40dvh] sm:min-h-[100dvh] pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">
            {/* Headline Section - Centered Vertically */}
            <div className="w-full flex flex-col gap-5 sm:gap-6 my-auto py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                About · Capabilities
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                Capabilities &amp; Infrastructure
              </h1>
            </div>

            {/* Stats & Video - Anchored at Bottom */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch lg:items-end gap-6 sm:gap-8 lg:gap-12 w-full mt-auto">
              {/* Left Side: Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full lg:w-auto border-t border-white/20 pt-6">
                {[
                  { value: '8', label: 'Manufacturing units across India' },
                  { value: '100%', label: 'Automated production' },
                  { value: '24+', label: 'Facilities nationwide' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Side: Video Card */}
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
                      <YouTubeIcon className="w-9 h-9 drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="px-4 py-3 text-xs font-mono tracking-widest uppercase text-white/85 group-hover:text-sky-200 flex items-center justify-between gap-3 transition-colors">
                    <span>Watch our capabilities</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <SolutionOverview overview={CAPABILITIES_INTRO} />

        {/* Facilities */}
               <section className="w-full bg-[#F5F6F8] py-16 sm:py-24">
                 <div className="max-w-7xl mx-auto px-4 sm:px-8">
                  
       
                   <FacilityMap bgColor="[#F5F6F8]"/>
       
                 </div>
               </section>

        {/* Technology & Equipment */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300 mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
                Technology &amp; Equipment
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
                Ultra-modern facilities powered by world-class European and Israeli technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {technologyCards.map((card) => (
                <div
                  key={card.heading}
                  className="group bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.heading}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                  </div>
                  <div className="p-8 sm:p-10">
                 
                    <h3 className="text-2xl sm:text-3xl font-serif font-light uppercase tracking-tight text-slate-900 m-0">
                      {card.heading}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-4 m-0">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <CertificatesSection />

        {/* Production / Quality CTA */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src="/plant_warehouse_storage_1784719730647.jpg"
                alt="Kothari Group production facility"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col justify-center py-4 lg:py-8">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1575B3] font-semibold mb-4">
                Built to last · Made to perform
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0 leading-tight">
                Every product we create is designed for sustainable farming &amp; water plumbing.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-6 m-0 max-w-xl">
                We provide smart water management solutions, tailored to meet our customer&apos;s
                needs. From extracting underground water for farming and drinking to disposing of
                sewage water, we have earned recognition because of our world-class technology and
                flawless production processes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/become-dealer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white px-7 py-3.5 text-sm font-medium transition-colors"
                >
                  Become a Dealer
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 border border-[#1575B3] text-[#1575B3] hover:bg-[#1575B3] hover:text-white px-7 py-3.5 text-sm font-medium transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}