'use client';

import React from 'react';

const CERT_COUNT = 64;

function MarqueeRow({ items, reverse = false }: { items: number[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-3 sm:gap-4 w-max hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${reverse ? '75s' : '60s'} linear infinite${
            reverse ? ' reverse' : ''
          }`,
        }}
      >
        {doubled.map((n, i) => (
          <div
            key={`${n}-${i}`}
            className="group relative w-36 sm:w-44 shrink-0 aspect-[3/4] overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`/certificates/certificate${n}.webp`}
              alt={`Certificate ${n}`}
              loading="lazy"
              className="w-full h-full object-contain object-center p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#061E33]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] font-mono tracking-widest uppercase text-white">
                CERT-{String(n).padStart(3, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const CertificatesSection: React.FC = () => {
  const certs = Array.from({ length: CERT_COUNT }, (_, i) => i + 1);
  const midpoint = Math.ceil(certs.length / 2);

  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-t border-slate-300/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
              Certifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Among {CERT_COUNT}+ industry and quality certifications held by Kothari Group.
          </p>
        </div>
      </div>

      {/* Two-row marquee — all 64 certificates, opposite directions */}
      <div className="space-y-3 sm:space-y-4">
        <MarqueeRow items={certs.slice(0, midpoint)} />
        <MarqueeRow items={certs.slice(midpoint)} reverse />
      </div>
    </section>
  );
};
