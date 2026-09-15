'use client';

import React, { useState } from 'react';
import { ChevronRight, X, BadgeCheck, ShieldCheck, Award } from 'lucide-react';

const CERT_COUNT = 64;

export const CertificatesSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-t border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300 mb-12">
          <div className="max-w-3xl">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
              Certifications
            </h2>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 border border-[#1575B3] text-[#1575B3] hover:bg-[#1575B3] hover:text-white px-5 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-300 shrink-0 cursor-pointer self-start"
          >
            View all {CERT_COUNT} certifications
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured showcase — 2-row asymmetric grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-2 gap-3 sm:gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <div
              key={n}
              className={`group relative overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 ${
                n === 1 ? 'md:col-span-2 md:row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-[3/4]'
              }`}
            >
              <img
                src={`/certificates/certificate${n}.webp`}
                alt={`Certificate ${n}`}
                loading="lazy"
                className="w-full h-full object-contain object-center p-3 sm:p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061E33]/20 via-transparent to-transparent pointer-events-none group-hover:from-[#061E33]/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-[#061E33]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white">CERT-{String(n).padStart(3, '0')}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-500 mt-8 text-center font-light">
          Among {CERT_COUNT}+ industry and quality certifications held by Kothari Group.
        </p>
      </div>

      {/* Certifications Popup Modal — styled like Home2Header Get in Touch */}
      {open && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-5xl bg-white border border-[#DCEAF5] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
            {/* Modal Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column */}
            <div className="hidden md:flex md:w-5/12 bg-[#0E588A] text-white p-6 sm:p-8 flex-col justify-between shrink-0">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-white/70 block mb-2">
                  Kothari Group
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-4">
                  Globally certified. Committed to quality.
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  Discover the full portfolio of quality, product, and safety certifications earned by our manufacturing units across India.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/15">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Certifications</span>
                    <span className="text-sm font-medium text-white">64+ Quality & Safety Standards</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">System Certified</span>
                    <span className="text-sm font-medium text-white">ISO 9001:2015 Management Systems</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Approved Products</span>
                    <span className="text-sm text-white/90">BIS & international approvals across the range</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 bg-white overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-[#111111] m-0">All Certifications</h4>
                  <p className="text-xs text-[#5F6B7A] mt-1">
                    Signed, sealed, and verified — every certificate held by our units.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Array.from({ length: CERT_COUNT }, (_, i) => i + 1).map((n) => (
                    <div
                      key={n}
                      className="aspect-[3/4]  border border-[#DCEAF5] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <img
                        src={`/certificates/certificate${n}.webp`}
                        alt={`Certificate ${n}`}
                        loading="lazy"
                        className="w-full h-full object-contain object-center p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
