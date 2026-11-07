'use client';
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Facebook,
  Youtube,
  Instagram
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

interface FooterProps {
  onOpenQuoteModal?: () => void;
  onSelectSection?: (id: string) => void;
  onOpenContactModal?: () => void;
  onOpenCareerModal?: () => void;
  footerData?: any;
  socialGroups?: {
    heading?: string;
    title?: string;
    links: {
      label: string;
      url: string;
      icon: React.ElementType;
      hover: string;
    }[];
  }[];
}

const DEFAULT_SOCIAL_GROUPS = [
  {
    heading: 'Kothari Pipes',
    links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/share/16ZVVqB5Ju/?mibextid=wwXIfr' },
      { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipess' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipess' },
    ],
  },
];

 const pipepProductSegments = [
   {label:'Agriculture Pipes & Fittings',target:"/products/agriculture-pipes-and-fittings"},
{label:'Flexible Hose Pipes',target:"/products/flexible-hose-pipes"},
{label:'Sewerage Drainage Pipes and Fittings',target:"/products/sewerage-drainage-pipes-and-fittings"},
{label:'Borewell Solution',target:"/products/borewell-solution"},
{label:'Plumbing Pipes & Fittings',target:"/products/plumbing-pipes-and-fittings"},
{label:'Cable Protection',target:"/products/cable-protection"}
    
    ]
 const irrigationProductSegments = [
{label:'Drip Irrigation System',target:"/products/drip-irrigation-system"},
{label:'Automation System',target:"/products/automation-system"},
{label:'Sprinkler Irrigation system',target:"/products/sprinkler-irrigation-system"},
{label:'Filters & Injectors',target:"/products/filters-and-injectors"},
{label:'Micro & Mini Sprinklers',target:"/products/micro-and-mini-sprinklers"},
{label:'Turnkey Projects',target:"/products/turnkey-projects"}
    ]

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
  onSelectSection,
  onOpenContactModal,
  onOpenCareerModal,
  footerData,
  socialGroups
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const division = footerData?.productSegments?.[0]?.includes('Irrigation') ? 'irrigation-division' : 'pipe-division';
  const isIrrigation = division === 'irrigation-division';

  // Checks prop -> checks footerData.socialGroups or footerData.socialgroup -> fallback to defaults
  const activeSocialGroups = 
    (socialGroups && socialGroups.length > 0) ? socialGroups :
    (footerData?.socialGroups && footerData?.socialGroups.length > 0) ? footerData.socialGroups :
    (footerData?.socialgroup && footerData?.socialgroup.length > 0) ? footerData.socialgroup :
    DEFAULT_SOCIAL_GROUPS;

  const isMultipleSocialGroups = activeSocialGroups.length > 1;

  // Render function for social links block
  const renderSocialGroups = () => (
    <div className="space-y-4 text-xs">
      {/* Main Section Heading */}
      <h4 className="font-medium text-white text-sm">
        Connect with us
      </h4>

      {/* Social Groups */}
      <div className="space-y-3">
        {activeSocialGroups.map((group: any, groupIdx: number) => (
          <div key={groupIdx} className="space-y-1.5">
            {/* Render Group Title/Heading if it exists */}
            {(group.title || group.heading) && (
              <span className="text-xs font-light text-white/70 block">
                {group.title || group.heading}
              </span>
            )}

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {group.links?.map((s: any) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 bg-white/10 border border-white/20 text-white flex items-center justify-center transition-all hover:text-white hover:shadow-md ${s.hover}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const productSegments = isIrrigation? irrigationProductSegments: pipepProductSegments;

  return ( 
    // <footer className={`${isIrrigation ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]'} pt-16 pb-8 text-left text-white`}>
    <footer className={`${isIrrigation ? 'bg-[#1575B3]' : 'bg-[#1575B3]'} pt-16 pb-8 text-left text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Main Footer Sitemap Columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${(isMultipleSocialGroups || isIrrigation) ? 'lg:grid-cols-6' : 'lg:grid-cols-5'} gap-8`}>

          {/* Brand Info Column: ALWAYS expanded to lg:col-span-2 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-start">
                <img
                  src={`${isIrrigation ? '/logos/Kothari Irrigation_W.png' : '/logos/Kothari Pipes_W.png'}`}
                  alt="Kothari Group Logo"
                  referrerPolicy="no-referrer"
                  className="w-[140px] max-w-full h-auto block"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
            </div>

            <p className="text-xs font-light text-white/80 leading-relaxed max-w-sm">
              {isIrrigation?`Kothari Group has empowered farmers across India with innovative micro irrigation systems and reliable agricultural water management solutions, promoting efficient water use and sustainable farming.`:`Kothari Group delivers trusted Plumbing Pipes & Fittings and Agri Pipes & Fittings solutions, contributing to stronger infrastructure and a more sustainable India`}
            </p>

            <div className="space-y-2 text-xs font-light text-white/80">
              <a href='https://maps.app.goo.gl/qCPHM3aF8EQkpaBw7' target="_blank" className="flex items-start gap-2 hover:text-white hover:underline ">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Registered office address: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.</span>
              </a>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-white shrink-0" />
                {/* <span>Toll-Free Helpline: {footerData?.contact?.phone}</span> */}
          <span>{isIrrigation?  `For Irrigation Enquiry: +91-9307309582` : `For Pipe Enquiry: +91-9307309583`}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>Email: <a href={`mailto:${footerData?.contact?.email}`} className="text-white hover:underline transition">{footerData?.contact?.email}</a></span>
              </div>
            </div>
          </div>

          {/* Core Segments */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-white text-sm">
              Core Segments
            </h4>
            <ul className="space-y-2 font-light text-white/80">
              {productSegments?.map((segment: any, index: number) => (
                <li key={index}>
                  <Link href={segment.target} className="hover:text-white hover:underline transition text-left">
                    {segment.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-white text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 font-light text-white/80">
              {footerData?.quickLinks?.map((link: any, index: number) => (
                <li key={index}>
                  <Link href={link.target} className="hover:text-white hover:underline transition text-left">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications (+ Single Social Group attached below) */}
          <div className="space-y-6">
            <div className="space-y-3 text-xs">
              <h4 className="font-medium text-white text-sm">
                Certifications
              </h4>
              <ul className="space-y-2 font-light text-white/80">
                {footerData?.certifications?.map((certification: any, index: number) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download our app — shown below Certifications for Pipe division */}
            {!isIrrigation && (
              <div className="space-y-3 text-xs pt-2 border-t border-white/20">
                <h4 className="font-medium text-white text-sm">Download our app</h4>
                <a
                  href="https://play.google.com/store/apps/details?id=in.kotharione.sma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Kothari One on Google Play"
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-[#0B1523] px-2.5 py-2 transition-colors hover:bg-[#14233A]"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
                    <path d="M3.61 1.81 13.79 12 3.61 22.19A1.5 1.5 0 0 1 3 21V3a1.5 1.5 0 0 1 .61-1.19Z" fill="#00D7FE" />
                    <path d="M13.79 12 3.61 1.81A1.5 1.5 0 0 1 5.6.91l12.19 7.09-4 4Z" fill="#00E676" />
                    <path d="M13.79 12l4 4-12.19 7.09a1.5 1.5 0 0 1-1.99-.9L13.79 12Z" fill="#FF3A44" />
                    <path d="M17.79 8l5.57 3.22a1.03 1.03 0 0 1 0 1.78L17.79 16l-4-4 4-4Z" fill="#FFCE00" />
                  </svg>
                  <span className="flex flex-col text-left leading-none">
                    <span className="whitespace-nowrap text-[10px] font-light text-white/70">Download on the</span>
                    <span className="mt-1 whitespace-nowrap text-[15px] font-medium text-white">Google Play</span>
                  </span>
                </a>
              </div>
            )}

            {/* SINGLE GROUP CONDITION: Rendered below Certifications (Pipe division only) */}
            {!isIrrigation && !isMultipleSocialGroups && (
              <div className="pt-2 border-t border-white/20">
                {renderSocialGroups()}
              </div>
            )}
          </div>

          {/* MULTIPLE GROUPS CONDITION: Placed in its own column (Pipe division only) */}
          {!isIrrigation && isMultipleSocialGroups && (
            <div>
              {renderSocialGroups()}
            </div>
          )}

          {/* IRRIGATION: Separate last column — Connect with us + Download our app */}
          {isIrrigation && (
            <div className="space-y-6">
              {renderSocialGroups()}
              <div className="space-y-3 text-xs pt-2 border-t border-white/20">
                <h4 className="font-medium text-white text-sm">Download our app</h4>
                <a
                  href="https://play.google.com/store/apps/details?id=in.kotharione.sma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Kothari One on Google Play"
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-[#0B1523] px-2.5 py-2 transition-colors hover:bg-[#14233A]"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
                    <path d="M3.61 1.81 13.79 12 3.61 22.19A1.5 1.5 0 0 1 3 21V3a1.5 1.5 0 0 1 .61-1.19Z" fill="#00D7FE" />
                    <path d="M13.79 12 3.61 1.81A1.5 1.5 0 0 1 5.6.91l12.19 7.09-4 4Z" fill="#00E676" />
                    <path d="M13.79 12l4 4-12.19 7.09a1.5 1.5 0 0 1-1.99-.9L13.79 12Z" fill="#FF3A44" />
                    <path d="M17.79 8l5.57 3.22a1.03 1.03 0 0 1 0 1.78L17.79 16l-4-4 4-4Z" fill="#FFCE00" />
                  </svg>
                  <span className="flex flex-col text-left leading-none">
                    <span className="whitespace-nowrap text-[10px] font-light text-white/70">Download on the</span>
                    <span className="mt-1 whitespace-nowrap text-[15px] font-medium text-white">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/80">
          <p>
            {/* {footerData?.copyright} */}
            © 2026 Kothari Agritech Private Limited. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
           <Link href="/privacy-policy" className="hover:text-white hover:underline transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white hover:underline transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};