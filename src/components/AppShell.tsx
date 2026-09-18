'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { QuoteBuilderModal } from './QuoteBuilderModal';
import { ProductDetailModal } from './ProductDetailModal';
import { ContactModal } from './ContactModal';
import { CareerModal } from './CareerModal';
import { ProductItem } from '@/lib/types';
import { ArrowUp, Building2 } from 'lucide-react';
import Link from 'next/link';

interface AppContextValue {
  openQuoteModal: () => void;
  openContactModal: (category?: string) => void;
  openCareerModal: () => void;
  scrollToSection: (sectionId: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within an <AppShell>');
  return ctx;
}

// Module-level flag so the loader only plays once per browser session
// (mirrors the original Vite app, which showed the loader on first mount only).
let loaderPlayedOnce = false;

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isStandalone = pathname === '/' || pathname === '/irrigation-division';

  const [loading, setLoading] = useState(!loaderPlayedOnce);
  const [activeSection, setActiveSection] = useState('hero');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactModalCategory, setContactModalCategory] = useState<string>('Plumbing Pipes & fittings');
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [specList, setSpecList] = useState<string[]>([]);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!loaderPlayedOnce) {
      loaderPlayedOnce = true;
      const timeout = setTimeout(() => setLoading(false), 1400);
      return () => clearTimeout(timeout);
    }
    setLoading(false);
  }, []);

  const handleScrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleToggleSpecItem = (productId: string) => {
    setSpecList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const contextValue: AppContextValue = {
    openQuoteModal: () => setQuoteModalOpen(true),
    openContactModal: (category?: string) => {
      setContactModalCategory(category || 'Plumbing Pipes & fittings');
      setContactModalOpen(true);
    },
    openCareerModal: () => setCareerModalOpen(true),
    scrollToSection: handleScrollToSection,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-[#F5FAFF] text-[#111111] font-['Outfit',sans-serif] flex flex-col antialiased">

        {loading && (
          <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#003F82]">
            <div className="flex flex-col items-center gap-6" style={{ animation: 'logoReveal 1s ease-out forwards' }}>
              <img
                src="/logos/Kothari Group_W.png"
                alt="Kothari Group"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
              <div className="w-48 h-1 rounded-lg bg-white/10 overflow-hidden relative">
                <div
                  className="h-full rounded-lg bg-white/60"
                  style={{ animation: 'loadBar 2.8s ease-in-out forwards' }}
                />
                <div
                  className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  style={{ animation: 'shimmer 1.8s 0.5s ease-in-out infinite' }}
                />
              </div>
              <span
                className="text-white/50 text-xs font-medium tracking-[0.25em] uppercase"
                style={{ animation: 'fadeSlideUp 0.8s 0.3s both' }}
              >
                Loading
              </span>
            </div>
          </div>
        )}

        {/* {!isStandalone && (
          <Header
            onSelectTab={handleScrollToSection}
            activeSection={activeSection}
            onOpenQuoteModal={() => setQuoteModalOpen(true)}
            onOpenContactModal={() => setContactModalOpen(true)}
            onOpenCareerModal={() => setCareerModalOpen(true)}
          />
        )} */}

        <main className="flex-1">{children}</main>

        {/* {!isStandalone && (
          <Footer
            onOpenQuoteModal={() => setQuoteModalOpen(true)}
            onSelectSection={handleScrollToSection}
            onOpenContactModal={() => setContactModalOpen(true)}
            onOpenCareerModal={() => setCareerModalOpen(true)}
          />
        )} */}

        <QuoteBuilderModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialSpecCount={specList.length}
        />

        <ProductDetailModal
          product={selectedProductModal}
          onClose={() => setSelectedProductModal(null)}
          inSpecList={selectedProductModal ? specList.includes(selectedProductModal.id) : false}
          onToggleSpecItem={handleToggleSpecItem}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />

        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          initialCategory={contactModalCategory}
        />

        <CareerModal
          isOpen={careerModalOpen}
          onClose={() => setCareerModalOpen(false)}
        />

        {/* Floating "Become Dealer" Button */}
        {/* <Link
        href="/become-dealer"
  style={{ writingMode: 'vertical-rl' }}
  className="fixed right-0 top-1/2 -translate-y-1/2 z-[45] bg-gradient-to-l from-[#0E588A] to-[#1575B3] hover:from-[#1575B3] hover:to-[#0E588A] text-white font-extrabold text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase py-4 sm:py-5 px-2.5 sm:px-3 shadow-[0_8px_30px_rgb(21,117,179,0.3)] hover:shadow-[0_8px_35px_rgb(21,117,179,0.5)] border-l-1 border-y border-[#38bff8bc] hover:border-transparent transition-all duration-300 ease-out active:scale-95 cursor-pointer select-none group flex items-center justify-center gap-2"
>
  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform duration-300 rotate-90" />
  <span className="whitespace-nowrap">Become Dealer</span>
</Link> */}

        {/* Back to Top — sticky bottom-right, appears on scroll, all pages */}
        {/* {showTopButton && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            title="Back to top"
            className="fixed bottom-6 right-6 z-[45] w-11 h-11 bg-[#1575B3] hover:bg-[#0E588A] text-white shadow-lg flex items-center justify-center transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )} */}

      </div>
    </AppContext.Provider>
  );
}