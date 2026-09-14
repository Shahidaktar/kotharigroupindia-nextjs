'use client';

import React from 'react';
import AppShell from '@/components/AppShell';
import { HeaderDivison} from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { IrrigationproductsMegaMenu, irrigationSolutionsMegaMenu, PipeproductsMegaMenu, pipeSolutionsMegaMenu } from '@/data/products';
// import { IrrigationproductsMegaMenu, PipeproductsMegaMenu } from '../ProductPageLayout';

const PIPE_FOOTER_DATA = {
  logo: 'https://kotharigroupindia.com/img/kothari-logo.png',
  about:
    "India's trusted leader with over 35 years of excellence in Plumbing Pipes & Fittings, Agri Pipes & Fittings, and Micro Irrigation Systems.",
  contact: {
    address:
      'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
    phone: '1800 120 4343',
    email: 'sales.pipe@kotharigroupindia.com',
  },
  productSegments: [
    'Plumbing Pipes & fittings',
    'Agri Pipes & fittings',
    'Micro Irrigation System',
    'CPVC Hot & Cold Water',
    'Submersible Column Pipes',
  ],
  quickLinks: [
    { label: 'Our Legacy', target: 'about-us' },
    { label: 'Leadership', target: 'our-board' },
    { label: 'Career', target: 'career' },
    { label: 'Sustainability', target: 'sustainability' },
    { label: 'Blogs', target: 'blogs' },
    { label: 'News & Articles', target: 'news' },
    { label: 'Contact Us', target: 'contact-us' },
  ],
  certifications: [
    'ISO 9001 Quality System',
    'BIS IS 15778 / IS 4985',
    'IS 13488 Micro Irrigation',
    'PMKSY Govt. Subsidy Certified',
    'RoHS Lead-Free Formulation',
  ],
  socialLinks: [
    { name: 'YouTube', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'Facebook', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'Twitter', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'LinkedIn', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
  ],
  newsletterPlaceholder: 'Enter your email address',
  newsletterButton: 'Subscribe',
  copyright: '© 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.',
  privacyPolicy: 'Privacy Policy',
  termsOfUse: 'Terms of Use',
  socialgroup: [
    {
      heading: 'Kothari Pipes',
      links: [
        { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/KothariPipesAgri' },
        { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesagri' },
        { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesagri/' },
      ],
    },
    {
      heading: 'Kothari Plumbing',
      links: [
        { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kotharipipesplumbing/' },
        { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesplumbing' },
        { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesplumbing/' },
        { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
      ],
    },
  ],
};

const IRRIGATION_FOOTER_DATA = {
  logo: 'https://kotharigroupindia.com/img/kothari-logo.png',
  about:
    'For over four decades, Kothari Group has empowered farmers and builders with water-wise micro irrigation systems, agri pipes and premium plumbing solutions across India.',
  contact: {
    address:
      'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
    phone: '1800 120 4343',
    email: 'sales.irrigation@kotharigroupindia.com',
  },
  productSegments: [
    'Drip Irrigation Systems',
    'Sprinkler Irrigation',
    'Filters & Fertigation',
    'Crop Based Solutions',
    'Accessories & Fittings',
  ],
  quickLinks: [
    { label: 'Our Legacy', target: 'about-us' },
    { label: 'Leadership', target: 'our-board' },
    { label: 'Career', target: 'career' },
    { label: 'Sustainability', target: 'sustainability' },
    { label: 'Blogs', target: 'blogs' },
    { label: 'News & Articles', target: 'news' },
    { label: 'Contact Us', target: 'contact-us' },
  ],
  certifications: [
    'ISO 9001 Quality System',
    'BIS IS 15778 / IS 4985',
    'IS 13488 Micro Irrigation',
    'PMKSY Govt. Subsidy Certified',
    'RoHS Lead-Free Formulation',
  ],
  socialLinks: [
    { name: 'YouTube', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'Facebook', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'Twitter', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'LinkedIn', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
  ],
  newsletterPlaceholder: 'Enter your email address',
  newsletterButton: 'Subscribe',
  copyright: '© 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.',
  privacyPolicy: 'Privacy Policy',
  termsOfUse: 'Terms of Use',
  socialgroup: [
    {
      links: [
        { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kothariirrigation/' },
        { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Va6OjqKA89MhSFoEY32l' },
        { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@KothariIrrigation' },
        { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kothariirrigation_/' },
      ],
    },
  ],
};

export const PIPE_DIVISION_SLUG = 'pipe-division';
export const IRRIGATION_DIVISION_SLUG = 'irrigation-division';

interface ProductsPageLayoutProps {
  divisionSlug: string;
  children: React.ReactNode;
}

// Picks the correct page chrome based on the active division:
// division filter (or the division a segment belongs to) → HeaderDivison + Footer,
// otherwise → Home2Header + Home2Footer.
export const ProductsPageLayout: React.FC<ProductsPageLayoutProps> = ({ divisionSlug, children }) => {
  const isPipe = divisionSlug === PIPE_DIVISION_SLUG;
  const isIrrigation = divisionSlug === IRRIGATION_DIVISION_SLUG;
  const useDivisionChrome = isPipe || isIrrigation;

  return (
    <AppShell>
      <div className="text-left">
        {useDivisionChrome ? (
          <>
            <HeaderDivison
            productsMegaMenu={isPipe ? PipeproductsMegaMenu : IrrigationproductsMegaMenu}
              solutionsMegaMenu={isPipe ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu}
            />
            {/* Content below is server-rendered (hero + products) */}
            {children}
            <Footer footerData={isPipe ? PIPE_FOOTER_DATA : IRRIGATION_FOOTER_DATA} />
          </>
        ) : (
          <>
            <Home2Header />
            {children}
            <Home2Footer />
          </>
        )}
      </div>
    </AppShell>
  );
};