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
   {label:'Agriculture Pipes & Fittings',target:"/products?segment=agriculture-pipes-and-fittings"},
{label:'Flexible Hose Pipes',target:"/products?segment=flexible-hose-pipes"},
{label:'Sewerage Drainage Pipes and Fittings',target:"/products?segment=sewerage-drainage-pipes-and-fittings"},
{label:'Borewell Solution',target:"/products?segment=borewell-solution"},
{label:'Plumbing Pipes & Fittings',target:"/products?segment=plumbing-pipes-and-fittings"},
{label:'Cable Protection',target:"/products?segment=cable-protection"}
    
    ]
 const irrigationProductSegments = [
{label:'Drip Irrigation System',target:"/products?segment=drip-irrigation-system"},
{label:'Automation System',target:"/products?segment=automation-system"},
{label:'Sprinkler Irrigration system',target:"/products?segment=sprinkler-irrigration-system"},
{label:'Filters & Injectors',target:"/products?segment=filters-and-injectors"},
{label:'Micro & Mini Sprinklers',target:"/products?segment=micro-and-mini-sprinklers"},
{label:'Turnkey Projects',target:"/products?segment=turnkey-projects"}
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
    <footer className={`${isIrrigation ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]'} pt-16 pb-8 text-left text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Main Footer Sitemap Columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isMultipleSocialGroups ? 'lg:grid-cols-6' : 'lg:grid-cols-5'} gap-8`}>

          {/* Brand Info Column: ALWAYS expanded to lg:col-span-2 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center  px-3 py-1 w-fit">
                <img
                  src={`${isIrrigation ? '/logos/Kothari Irrigation_W.png' : '/logos/Kothari Pipes_W.png'}`}
                  alt="Kothari Group Logo"
                  referrerPolicy="no-referrer"
                  className="h-22 w-auto object-contain max-w-[140px]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            <p className="text-xs font-light text-white/80 leading-relaxed max-w-sm">
              {footerData?.about}
            </p>

            <div className="space-y-2 text-xs font-light text-white/80">
              <a href='https://maps.app.goo.gl/qCPHM3aF8EQkpaBw7' target="_blank" className="flex items-start gap-2 hover:text-white hover:underline ">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Registered office address: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.</span>
              </a>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-white shrink-0" />
                <span>Toll-Free Helpline: {footerData?.contact?.phone}</span>
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

            {/* SINGLE GROUP CONDITION: Rendered below Certifications */}
            {!isMultipleSocialGroups && (
              <div className="pt-2 border-t border-white/20">
                {renderSocialGroups()}
              </div>
            )}
          </div>

          {/* MULTIPLE GROUPS CONDITION: Placed in its own column */}
          {isMultipleSocialGroups && (
            <div>
              {renderSocialGroups()}
            </div>
          )}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/80">
          <p>
            {footerData?.copyright}
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