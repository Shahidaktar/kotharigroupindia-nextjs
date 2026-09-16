'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  category?: string;
  link: string;
  spec?: string;
}

interface FeaturedProductsProps {
  products?: Product[];
  theme?: 'blue' | 'green';
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'CPVC Hot & Cold Water Pipes',
    subtitle: 'Advanced Plumbing Matrix',
    description: 'High-temperature resistant piping solution engineered for zero-leakage residential and commercial infrastructure.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp',
    category: 'Plumbing Solutions',
    link: '/pipe-division',
    spec: 'Temp Tolerance: Up to 93°C',
  },
  {
    id: '2',
    title: 'HDPE Drip Irrigation System',
    subtitle: 'Precision Yield Technology',
    description: 'Micro-drip water management engineered to maximize crop yield while reducing consumption by up to 60%.',
    image: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    category: 'Micro Irrigation',
    link: '/irrigation-division',
    spec: 'Efficiency Rate: 98%',
  },
  {
    id: '3',
    title: 'uPVC Column Pipes',
    subtitle: 'Deep-Borehole Heavy Duty',
    description: 'Heavy-duty submersible pump pipes equipped with patented locking technology for deep underground extraction.',
    image: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    category: 'Agri & Submersible',
    link: '/pipe-division',
    spec: 'Load Capacity: High PSI',
  },
  {
    id: '4',
    title: 'Agri Rigid PVC Pipes',
    description: 'Durable, chemical-resistant agricultural piping engineered for efficient high-pressure water transportation.',
    subtitle: 'High Pressure Carrier',
    image: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    category: 'Agri Solutions',
    link: '/pipe-division',
    spec: 'UV & Chemical Resistant',
  },
  {
    id: '5',
    title: 'Inline Micro Sprinkler System',
    subtitle: 'Climate Control Micro-Jet',
    description: 'Advanced micro-sprinkling tech providing hyper-uniform droplet distribution for protected cultivation.',
    image: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    category: 'Micro Irrigation',
    link: '/irrigation-division',
    spec: 'Coverage: 360° Uniformity',
  },
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products = DEFAULT_PRODUCTS,
  theme = 'blue',
}) => {
  const isGreen = theme === 'green';
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage));
  const safePage = currentPage % totalPages;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Touch & Swipe gesture handling
  const handlePanEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 40;
    const velocityThreshold = 200;

    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      handleNext();
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const autoSlideTimer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(autoSlideTimer);
  }, [isPaused, totalPages, handleNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const visibleProducts = products.slice(
    safePage * itemsPerPage,
    safePage * itemsPerPage + itemsPerPage
  );

  return (
    <section className={`${isGreen ? 'bg-[#145E2A]' : 'bg-[#015CAA]'} py-24 relative overflow-hidden select-none`}>
      {/* Background Decorative Elements */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${isGreen ? 'from-emerald-300/10' : 'from-cyan-400/10'} to-transparent blur-3xl pointer-events-none`} />
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr ${isGreen ? 'from-green-950/40' : 'from-blue-900/40'} to-transparent blur-3xl pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-white">
              Featured Products
            </h2>
          </div>

          <p className={`text-xs sm:text-sm ${isGreen ? 'text-green-100/80' : 'text-blue-100/80'} max-w-md font-light leading-relaxed`}>
            World-class piping and irrigation engineering, crafted for extreme durability, operational efficiency, and long-term reliability.
          </p>
        </div>

        {/* Product Grid Stage */}
        <div className="relative min-h-[550px] w-full py-6 px-1 touch-pan-y overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={safePage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              onPanEnd={handlePanEnd}
              className="w-full cursor-grab active:cursor-grabbing touch-pan-y"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProducts.map((product) => (
                  <div
                    key={product.id}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`group relative ${isGreen ? 'bg-[#0E4A20]/40' : 'bg-[#014d8f]/40'} backdrop-blur-md border border-white/15 hover:border-white/40 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 overflow-hidden`}
                  >
                    {/* Top Accent Light Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${isGreen ? 'via-emerald-300' : 'via-cyan-400'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div>
                      {/* Product Showcase Image Frame */}
                      <div className="relative h-60 w-full bg-white p-8 flex items-center justify-center border-b border-white/10 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          draggable={false}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                        />
                      </div>

                      {/* Content Area */}
                      <div className="p-7 space-y-4">
                        <div className="space-y-1">
                          <h3 className={`text-lg font-bold text-white ${isGreen ? 'group-hover:text-emerald-200' : 'group-hover:text-cyan-200'} transition-colors leading-snug line-clamp-1`}>
                            {product.title}
                          </h3>
                        </div>

                        <p className={`text-xs ${isGreen ? 'text-green-100/70' : 'text-blue-100/70'} font-light leading-relaxed line-clamp-3`}>
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Premium Full-Width CTA Button */}
                    <div className="p-7 pt-0">
                      <Link
                        href={product.link}
                        className={`w-full inline-flex items-center justify-between bg-white/10 hover:bg-white text-white ${isGreen ? 'hover:text-[#145E2A]' : 'hover:text-[#015CAA]'} border border-white/20 hover:border-white text-xs font-semibold uppercase tracking-wider py-3.5 px-5 transition-all duration-300 group/btn`}
                      >
                        <span>Explore Product</span>
                        <ArrowUpRight className={`w-4 h-4 ${isGreen ? 'text-emerald-300 group-hover/btn:text-[#145E2A]' : 'text-cyan-300 group-hover/btn:text-[#015CAA]'} group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all`} />
                      </Link>
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Dash Indicators */}
        <div className="flex items-center justify-center gap-3 pt-6">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > safePage ? 1 : -1);
                setCurrentPage(idx);
              }}
              className={`h-1 transition-all duration-500 ${
                idx === safePage
                  ? `w-12 ${isGreen ? 'bg-emerald-400' : 'bg-cyan-400'}`
                  : 'w-4 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};