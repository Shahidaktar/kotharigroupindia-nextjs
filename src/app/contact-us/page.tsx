import React from 'react';
import { MapPin, Mail, Phone, MessageCircle, ArrowRight, ExternalLink, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { ContactUsForm } from '@/components/contact/ContactUsForm';
import { FacilityMap } from '@/components/contact/FacilityMap';

export const metadata = {
  title: 'Contact Us | Pipes, Fittings & Irrigation Systems | Kothari Group',
  description:
    'Get in touch with Kothari Group — registered office in Solapur, corporate office in Pune. Email, call or WhatsApp our sales teams for plumbing, agri pipes & irrigation enquiries.',
};

type ContactRow = { label?: string; value: string };

const contactCards: {
  icon: LucideIcon;
  title: string;
  rows: ContactRow[];
}[] = [
  {
    icon: MapPin,
    title: 'Find us',
    rows: [
      {
        label: 'Registered office',
        value: '8516/11, Level 3, Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001, Maharashtra.',
      },
      {
        label: 'Corporate office',
        value: 'Ramsukh House, 203, Level 2, Near Thube Park, Ganesh Khind Road, Shivaji Nagar, Pune - 411 005',
      },
    ],
  },
  {
    icon: Mail,
    title: 'Email us',
    rows: [
      { value: 'sales.pipe@kotharigroupindia.com' },
      { value: 'sales.irrigation@kotharigroupindia.com' },
      { value: 'info@kotharigroupindia.com' },
    ],
  },
  {
    icon: Phone,
    title: 'Call us',
    rows: [
      { value: '+91-9307309581' },
      { value: '+91-9307309582' },
      { value: '+91-9307309583' },
    ],
  },
];

export default function ContactUsPage() {
  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        {/* Hero */}
        <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/heronew.jpg"
              alt="Contact Kothari Group"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full min-h-[50dvh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
            <div className="flex flex-col gap-5 sm:gap-6 my-auto py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                Kothari Group
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-4xl">
                Contact Us
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Reach out for product information, dealer enquiries or after-sales support — our teams
                are here to help you choose the right piping and irrigation solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Get in touch + enquiry form */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300 mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
                Get in touch
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
                Offices across Solapur and Pune — leave us your details and our team will reach
                out to you.
              </p>
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-stretch">
              {/* LEFT: navy info panel */}
              <div className="lg:col-span-2 relative overflow-hidden bg-[#0E588A] text-white flex flex-col justify-between">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/heronew.jpg"
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-[#0E588A]/92 pointer-events-none" />
                </div>
                <div className="relative z-10 flex flex-col gap-8 p-8 sm:p-10">
                  <div>
                    <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/60 block mb-3">
                      Kothari Group
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-light tracking-tight leading-tight m-0">
                      Let&apos;s connect.
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed mt-3 max-w-xs">
                      Reach out to our specialists for product consultations, dealer enquiries or
                      institutional requirements.
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    {contactCards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <div key={card.title} className="flex items-start gap-3.5">
                          <div className="w-10 h-10 shrink-0 bg-white/10 border border-white/20 flex items-center justify-center text-[#82C3EC]">
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex flex-col gap-1.5 min-w-0">
                            <span className="text-base font-medium text-white/60 uppercase tracking-wider">
                              {card.title}
                            </span>
                            {card.rows.map((row, idx) => (
                              <p
                                key={row.label ?? `row-${idx}`}
                                className="text-sm font-medium text-white/95 leading-snug break-words"
                              >
                                {row.label && (
                                  <span className="block text-[11px] font-normal text-white/65">
                                    {row.label}
                                  </span>
                                )}
                                {row.value}
                              </p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* WhatsApp link */}
                  {/* <a
                    href="https://wa.me/918799963638"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 border border-white/25 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors px-5 py-3 text-sm font-medium self-start"
                  >
                    <MessageCircle className="w-4 h-4 text-[#82C3EC]" />
                    Chat with us on WhatsApp
                  </a> */}
                </div>
                <div className="relative z-10 border-t border-white/15 px-8 sm:px-10 py-5 flex items-center justify-between gap-4">
                  <span className="text-xs text-white/70">GST &amp; compliance details on request</span>
                  <span className="text-xs text-white/70 whitespace-nowrap">1800 120 4343</span>
                </div>
              </div>

              {/* RIGHT: enquiry form */}
              <div className="lg:col-span-3 bg-white border border-slate-200 shadow-xl p-6 sm:p-10 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#0E588A] font-semibold block mb-2">
                    Enquiry Form
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light tracking-tight leading-tight text-slate-900 m-0">
                    We&apos;d love to hear from you
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    Please fill the form below and our team will reach out to you.
                  </p>
                </div>
                <ContactUsForm />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
           

            <FacilityMap />

          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}