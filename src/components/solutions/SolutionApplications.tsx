import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const APP_IMAGES = [
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
];

const APP_TAGLINES = [
  'Proven performance in demanding field conditions.',
  'Built for season-after-season reliability.',
  'Engineered for uniform, efficient coverage.',
  'Trusted across Indian farms and projects.',
  'Optimized for water saving and better yield.',
  'Designed for easy installation at any scale.',
];

export const SolutionApplications: React.FC<{ applications: string[]; theme?: 'blue' | 'green' }> = ({ applications, theme = 'blue' }) => {
  const isGreen = theme === 'green';
  if (!applications.length) return null;
  return (
    <section className={`${isGreen ? 'bg-[#145E2A]' : 'bg-[#015CAA]'} py-24 relative overflow-hidden`}>
      {/* Background Decorative Elements */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${isGreen ? 'from-emerald-300/10' : 'from-cyan-400/10'} to-transparent blur-3xl pointer-events-none`} />
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr ${isGreen ? 'from-green-950/40' : 'from-blue-900/40'} to-transparent blur-3xl pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14 relative z-10">

        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-white">
              Applications
            </h2>
          </div>

          <p className={`text-xs sm:text-sm ${isGreen ? 'text-green-100/80' : 'text-blue-100/80'} max-w-md font-light leading-relaxed`}>
            Where this solution delivers measurable efficiency and lifecycle value.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, idx) => (
            <div
              key={app}
              className={`group relative ${isGreen ? 'bg-[#0E4A20]/40' : 'bg-[#014d8f]/40'} backdrop-blur-md border border-white/15 hover:border-white/40 transition-all duration-500 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 overflow-hidden`}
            >
              {/* Top Accent Light Bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${isGreen ? 'via-emerald-300' : 'via-cyan-400'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div>
                {/* Image Frame */}
                <div className="relative h-60 w-full overflow-hidden border-b border-white/10">
                  <img
                    src={APP_IMAGES[idx % APP_IMAGES.length]}
                    alt={app}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isGreen ? 'from-[#0E4A20]/50' : 'from-[#014d8f]/50'} via-transparent to-transparent pointer-events-none`} />
                </div>

                {/* Content Area */}
                <div className="p-7 space-y-4">
                  <h3 className={`text-lg font-bold text-white ${isGreen ? 'group-hover:text-emerald-200' : 'group-hover:text-cyan-200'} transition-colors leading-snug`}>
                    {app}
                  </h3>
                  <p className={`text-xs ${isGreen ? 'text-green-100/70' : 'text-blue-100/70'} font-light leading-relaxed`}>
                    {APP_TAGLINES[idx % APP_TAGLINES.length]}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="p-7 pt-0">
                <a
                  href="#related-products"
                  className="w-full inline-flex items-center justify-between bg-white/10 hover:bg-white text-white hover:text-[#015CAA] border border-white/20 hover:border-white text-xs font-semibold uppercase tracking-wider py-3.5 px-5 transition-all duration-300 group/btn"
                >
                  <span>Explore Products</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-300 group-hover/btn:text-[#015CAA] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </a>
              </div> */}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
