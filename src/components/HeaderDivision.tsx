'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin, Send, ArrowRight, Factory, Sprout, Users, Award, Building2 } from 'lucide-react';
import Link from 'next/link';
import { pipeSolutionsMegaMenu, irrigationSolutionsMegaMenu } from '@/data/products';

// Mega Menu Data Configurations
const aboutMegaMenu = {
  category: 'About',
  headline: 'Building Sustainable Piping & Agriculture Solutions',
  description: 'Discover our journey of engineering excellence, strong corporate governance, and commitment to environmental stewardship.',
  items: [
    {
      title: 'About Us',
      url: '/about-us',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Our Board',
      url: '/our-board',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Capabilities & More',
      url: '/capabilities-infrastructure',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    },
    // {
    //   title: 'Sustainability',
    //   url: '/about/sustainability',
    //   image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80',
    // },
  ],
};

const defaultProductsMegaMenu = {
  headline: 'Our Products',
  description: 'Comprehensive range of piping, irrigation, and agricultural solutions engineered for performance.',
  segments: [
    {
      name: 'Plumbing Pipes & Fittings',
      desc: 'Complete hot & cold water piping systems for residential and commercial applications.',
      categories: [
        {
          name: 'CPVC',
          products: [
            { title: 'CPVC Pipes & Fittings – Hot & Cold Water System', url: '/products/plumbing/cpvc/pipes-fittings', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
            { title: 'CPVC Solvent Cement', url: '/products/plumbing/cpvc/solvent-cement', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'CPVC Transition Fittings', url: '/products/plumbing/cpvc/transition-fittings', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'CPVC Ball Valves', url: '/products/plumbing/cpvc/ball-valves', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'UPVC',
          products: [
            { title: 'UPVC Pipes & Fittings', url: '/products/plumbing/upvc/pipes-fittings', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80' },
            { title: 'UPVC Solvent System', url: '/products/plumbing/upvc/solvent-system', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
            { title: 'UPVC Elbows & Tees', url: '/products/plumbing/upvc/elbows-tees', image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=600&q=80' },
            { title: 'UPVC End Caps', url: '/products/plumbing/upvc/end-caps', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'SWR',
          products: [
            { title: 'SWR Pipes & Fittings', url: '/products/plumbing/swr/pipes-fittings', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
            { title: 'SWR Ventilation Systems', url: '/products/plumbing/swr/ventilation', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80' },
            { title: 'SWR Trap Assemblies', url: '/products/plumbing/swr/trap-assemblies', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80' },
            { title: 'SWR Inspection Chambers', url: '/products/plumbing/swr/inspection-chambers', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80' },
          ],
        },
      ],
    },
    {
      name: 'Agricultural Pipes',
      desc: 'Durable pipes for irrigation, water transport, and borewell applications in agriculture.',
      categories: [
        {
          name: 'LDPE',
          products: [
            { title: 'LDPE Pipes', url: '/products/agri-pipes/ldpe/pipes', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80' },
            { title: 'LDPE Drippers', url: '/products/agri-pipes/ldpe/drippers', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80' },
            { title: 'LDPE Laterals', url: '/products/agri-pipes/ldpe/laterals', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80' },
            { title: 'LDPE Connectors', url: '/products/agri-pipes/ldpe/connectors', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'HDPE',
          products: [
            { title: 'HDPE Pipes', url: '/products/agri-pipes/hdpe/pipes', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'HDPE Sprinkler Laterals', url: '/products/agri-pipes/hdpe/sprinkler-laterals', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'HDPE Compression Fittings', url: '/products/agri-pipes/hdpe/compression-fittings', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'HDPE End Plugs', url: '/products/agri-pipes/hdpe/end-plugs', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'PVC Casing',
          products: [
            { title: 'PVC Casing Pipes', url: '/products/agri-pipes/casing/pipes', image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=600&q=80' },
            { title: 'PVC Screen Pipes', url: '/products/agri-pipes/casing/screen-pipes', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
            { title: 'PVC Shrouds', url: '/products/agri-pipes/casing/shrouds', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
            { title: 'PVC Centralizers', url: '/products/agri-pipes/casing/centralizers', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80' },
          ],
        },
      ],
    },
    {
      name: 'Irrigation Systems',
      desc: 'Precision drip, sprinkler, and micro-irrigation systems for maximum water efficiency.',
      categories: [
        {
          name: 'Drip Irrigation',
          products: [
            { title: 'Drip Laterals', url: '/products/irrigation/drip/laterals', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80' },
            { title: 'Drippers & Emitters', url: '/products/irrigation/drip/drippers', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80' },
            { title: 'Inline Driplines', url: '/products/irrigation/drip/inline-driplines', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80' },
            { title: 'Filter Units', url: '/products/irrigation/drip/filters', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'Sprinkler Irrigation',
          products: [
            { title: 'Impact Sprinklers', url: '/products/irrigation/sprinkler/impact', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'Pop-up Sprinklers', url: '/products/irrigation/sprinkler/popup', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
            { title: 'Sprinkler Nozzles', url: '/products/irrigation/sprinkler/nozzles', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'Rain Guns', url: '/products/irrigation/sprinkler/rain-guns', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'Micro Irrigation',
          products: [
            { title: 'Micro Sprinklers', url: '/products/irrigation/micro/sprinklers', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
            { title: 'Foggers & Misters', url: '/products/irrigation/micro/foggers', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
            { title: 'Micro Tubes', url: '/products/irrigation/micro/tubes', image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=600&q=80' },
            { title: 'Mini Valves', url: '/products/irrigation/micro/mini-valves', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
          ],
        },
      ],
    },
    {
      name: 'Fittings & Valves',
      desc: 'Compression, threaded, and specialty fittings along with valves for complete system integration.',
      categories: [
        {
          name: 'Compression Fittings',
          products: [
            { title: 'Compression Couplers', url: '/products/fittings/compression/couplers', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
            { title: 'Compression Elbows', url: '/products/fittings/compression/elbows', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80' },
            { title: 'Compression Tees', url: '/products/fittings/compression/tees', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80' },
            { title: 'End Caps & Plugs', url: '/products/fittings/compression/end-caps', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'Threaded Fittings',
          products: [
            { title: 'Threaded Adapters', url: '/products/fittings/threaded/adapters', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
            { title: 'Threaded Nipples', url: '/products/fittings/threaded/nipples', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80' },
            { title: 'Threaded Unions', url: '/products/fittings/threaded/unions', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80' },
            { title: 'Threaded Plugs', url: '/products/fittings/threaded/plugs', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Ball Valves', url: '/products/fittings/valves/ball', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'Gate Valves', url: '/products/fittings/valves/gate', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'Non-Return Valves', url: '/products/fittings/valves/non-return', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'Butterfly Valves', url: '/products/fittings/valves/butterfly', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
          ],
        },
      ],
    },
  ],
};

const resourcesMegaMenu = {
  category: 'Resources',
  headline: 'Knowledge Base & Industry Insights',
  description: 'Explore our latest industry recognitions, thought-leadership articles, and technical learning modules.',
  items: [
    {
      title: 'Awards',
      url: '/awards',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Blogs',
      url: '/blogs',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'News',
      url: '/news',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Success Story',
      url: '/success-stories',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Videos',
      url: '/videos',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Quality Policy',
      url: '/quality-policy',
      image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=600&q=80',
    },
  ],
};

// export const pipeSolutionsMegaMenu = {
//   category: "SOLUTIONS & SEGMENTS",
//   headline: "Piping Solutions for Every Need",
//   description: "Engineered piping systems for buildings, cities, farms and industry — built for flow, strength and longevity.",
//   items: [
//     {
//       title: "Residential & Commercial Plumbing Solutions",
//       url: "/solutions/residential-commercial-plumbing",
//       image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Urban Drainage & Sewerage Networks",
//       url: "/solutions/urban-drainage-sewerage",
//       image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Groundwater Access Solutions",
//       url: "/solutions/groundwater-access",
//       image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Farm Infrastructure Piping Solutions",
//       url: "/solutions/farm-infrastructure-piping",
//       image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600&q=80",
//     },
//   ],
// };

// export const irrigationSolutionsMegaMenu = {
//   category: "SOLUTIONS & SEGMENTS",
//   headline: "Irrigation Solutions for Every Field",
//   description: "Precision water management from greenhouse to open field — saving water, boosting yield.",
//   items: [
//     {
//       title: "Precision Irrigation",
//       url: "/solutions/precision-irrigation",
//       image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Polyhouse (Greenhouse) Irrigation",
//       url: "/solutions/polyhouse-greenhouse-irrigation",
//       image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Agricultural Field Irrigation",
//       url: "/solutions/agricultural-field-irrigation",
//       image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Water Management",
//       url: "/solutions/water-management",
//       image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80",
//     },
//   ],
// };

const solutionsMegaMenu = pipeSolutionsMegaMenu;

const divisionsMegaMenu = {
  category: "OUR DIVISIONS",
  headline: "Two engines. One purpose.",
  description: "Piping infrastructure and precision irrigation — two specialized verticals engineered under one Kothari promise of flow, strength and scale.",
  divisions: [
    {
      id: "pipes",
      title: "Pipe Division",
      shortDesc: "Engineered fluid conveyance and underground infrastructure.",
      fullDesc: "Comprehensive piping for residential towers, urban drainage, cable ducting and deep borewell extraction.",
      image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80",
      link: "/pipe-division",
      accent: "text-[#1575B3]",
      badges: ["Plumbing & Fluid Systems", "Sewerage & Drainage", "Cable & Underground Ducting", "Borewell & Deep Extraction"],
    },
    {
      id: "irrigation",
      title: "Irrigation Division",
      shortDesc: "Micro-hydration, drip networks and smart farm automation.",
      fullDesc: "Advanced agri infra for maximum yield, zero-clog filtration and automated farm governance.",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1600&q=80",
      link: "/irrigation-division",
      accent: "text-emerald-700",
      badges: ["Agri Supply Piping", "Precision Drip & Micro", "Sprinklers & Filtration", "Automated Farm Systems"],
    },
  ],
};

const scrollToId = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

interface HeaderDivisionProps {
  productsMegaMenu?: any;
  solutionsMegaMenu?: any;
  solid?: boolean;
}

const aboutUsItems = [
  {
    name: 'About Us',
    desc: 'Our legacy, vision & corporate ethos.',
    icon: Building2,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/about-us'
  },
  {
    name: 'Our Board',
    desc: 'Leadership steering our growth.',
    icon: Users,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/our-board'
  },
  {
    name: 'Capabilities & More',
    desc: 'Infrastructure & operational reach.',
    icon: Award,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/capabilities'
  }
];
const divisions = [
  {
    id: 'solutions',
    name: 'Pipe Division',
    desc: 'Agri, plumbing & drainage pipes.',
    icon: Factory,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/pipe-division'
  },
  {
    id: 'solutions',
    name: 'Irrigation Division',
    desc: 'Drip, sprinklers & micro irrigation.',
    icon: Sprout,
    accent: 'text-[#1E8E3E] bg-[#EAF8EF]',
    url: '/irrigation-division'
  },
];
export const HeaderDivison: React.FC<HeaderDivisionProps> = ({ productsMegaMenu = defaultProductsMegaMenu, solutionsMegaMenu: solutionsMegaMenuProp, solid = false }) => {
  
  const [active, setActive] = useState('');
  const solutionsMegaMenu = solutionsMegaMenuProp || pipeSolutionsMegaMenu;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [heroRevealed, setHeroRevealed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
 const [activeProductSegment, setActiveProductSegment] = useState(0);
const [activeProductCategory, setActiveProductCategory] = useState(0);
const [openSegment, setOpenSegment] = useState<number | null>(null);
const [hoveredDivision, setHoveredDivision] = useState<string | null>(null);
const [aboutOpen, setAboutOpen] = useState(false);
const [divOpen, setDivOpen] = useState(false);
const division = solutionsMegaMenu.headline.includes('Irrigation') ? 'irrigation-division' : 'pipe-division';

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    division: 'Agriculture Division',
    message: '',
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

const handleMouseEnter = (menuKey: string) => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  setActiveDropdown(menuKey);
  if (menuKey === 'products') {
    setActiveProductSegment(0);
    setActiveProductCategory(0);
    setOpenSegment(null);
  }
};
const handleSegmentClick = (segIdx: number) => {
  if (openSegment === segIdx) {
    setOpenSegment(null);
  } else {
    setOpenSegment(segIdx);
    setActiveProductSegment(segIdx);
    setActiveProductCategory(0);
  }
};
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    if (mobileOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const show = () => setHeroRevealed(true);
    const hide = () => setHeroRevealed(false);
    window.addEventListener('hero:revealed', show);
    window.addEventListener('hero:hidden', hide);
    return () => {
      window.removeEventListener('hero:revealed', show);
      window.removeEventListener('hero:hidden', hide);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setDivOpen(false);
    setAboutOpen(false);
  };

  const handleOpenGetInTouch = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setFormSubmitted(false);
    setIsModalOpen(true);
    setAboutOpen(false);
    setDivOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        division: 'Agriculture Division',
        message: '',
      });
    }, 2500);
  };

  const isSolid = solid || isScrolled || mobileOpen;
  const navItemStyle = `px-3 py-2 text-[16px] font-medium transition-all duration-200 flex items-center gap-1 ${
    isSolid
      ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
      : 'text-white/90 hover:text-white hover:bg-white/10'
  }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${
          isSolid
            ? 'bg-white backdrop-blur-md border-b border-[#DCEAF5] shadow-sm py-2'
            : 'bg-transparent border-b border-white/10 py-3'
        }`}
        style={{
          opacity: solid ? 1 : heroRevealed ? 1 : 0,
          pointerEvents: solid ? 'auto' : heroRevealed ? 'auto' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => scrollToId('home')}
            className={`flex items-center shrink-0 transition-all duration-300 px-3 py-1 ${
              isSolid ? 'bg-transparent' : 'bg-white'
            }`}
            aria-label="Kothari Group Home"
          >
            <img
              src="https://kotharigroupindia.com/img/Kothariblue_logo.png"
              alt="Kothari Group Logo"
              referrerPolicy="no-referrer"
              className="h-14 sm:h-16 object-contain max-w-[150px] sm:max-w-[180px] transition-all duration-300"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </Link>

          {/* Right Side: Nav + Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* <Link href="/" className={navItemStyle}>
                Home
              </Link> */}


        {/* Products Mega Menu */}
<div
  className="static"
  onMouseEnter={() => handleMouseEnter('products')}
  onMouseLeave={handleMouseLeave}
>
  <button className={navItemStyle}>
    Products
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${
        activeDropdown === 'products' ? 'rotate-180' : ''
      }`}
    />
  </button>

  {activeDropdown === 'products' && (
    <div className="absolute left-0 top-full w-full bg-white border-b border-[#DCEAF5] shadow-2xl py-6 px-8 sm:px-12 transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">

        {/* LEFT — Segments Sidebar */}
        <div className="col-span-4 border-r border-[#DCEAF5] pr-8 flex flex-col justify-between h-full">
          <div>
            {/* Vertical Segment List */}
            <div className="flex flex-col gap-2">
              {productsMegaMenu.segments.map((segment: any, segIdx: number) => {
                const isActive = activeProductSegment === segIdx;
                return (
                  <button
                    key={segIdx}
                    onMouseEnter={() => setActiveProductSegment(segIdx)}
                    onClick={() => setActiveProductSegment(segIdx)}
                    className={`flex items-center justify-between px-4 py-3 border transition-all duration-200 text-left cursor-pointer ${
                      isActive
                        ? 'border-[#1575B3] bg-[#F0F7FC] shadow-sm text-[#1575B3]'
                        : 'border-[#E2EBF3] bg-white text-[#1E293B] hover:border-[#1575B3]/30 hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <span className="text-sm font-semibold tracking-wide">
                      {segment.name}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? 'text-[#1575B3] translate-x-1' : 'text-[#94A3B8]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT — All Products Belonging to Selected Segment */}
        <div className="col-span-8 pl-2">
          {/* Segment Name Above Product Grid */}
          <div className="mb-4 pb-2 border-b border-[#E2EBF3]">
            <h3 className="text-lg font-bold text-[#1575B3]">
              {productsMegaMenu.segments[activeProductSegment]?.name}
            </h3>
          </div>

          <div
            key={`seg-products-${activeProductSegment}`}
            className="grid grid-cols-3 gap-5 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar"
            style={{ animation: 'fadeSlideIn 0.25s ease-out' }}
          >
            {productsMegaMenu.segments[activeProductSegment]?.categories.flatMap(
              (category: any) => category.products
            ).map((product: any, idx: number) => (
              <Link
                key={idx}
                href={product.url}
                onClick={handleNavClick}
                className="group flex flex-col justify-between items-center p-3.5 border border-[#E2EBF3]  hover:border-[#1575B3]/40 hover:shadow-md bg-white  transition-all"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Image Container */}
                  <div className="w-full h-40 flex items-center justify-center p-2 rounded mb-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                  </div>

                  {/* Product Title */}
                  <span className="text-sm font-semibold text-[#111111] group-hover:text-[#1575B3] transition-colors text-center leading-snug mb-1">
                    {product.title}
                  </span>

                  {/* Product Short Description */}
                  {product.shortDesc && (
                    <p className="text-xs text-[#5F6B7A] text-center line-clamp-2 leading-relaxed mb-3">
                      {product.shortDesc}
                    </p>
                  )}
                </div>

                {/* View Product Button */}
                <span className="w-full text-center py-1.5 px-3 mt-2 text-xs font-semibold text-[#1575B3] bg-[#F0F7FC] border border-[#1575B3]/20  group-hover:bg-[#1575B3] group-hover:text-white transition-all">
                  View Product
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )}
</div>


{/* Solutions Mega Menu */}
<div
  className="static"
  onMouseEnter={() => handleMouseEnter('solutions')}
  onMouseLeave={handleMouseLeave}
>
  <button className={navItemStyle}>
    Solutions
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${
        activeDropdown === 'solutions' ? 'rotate-180' : ''
      }`}
    />
  </button>

  {activeDropdown === 'solutions' && (
    <div className="absolute left-0 top-full w-full bg-white border-b border-[#DCEAF5] shadow-2xl py-10 px-8 sm:px-12 transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-start">
        {/* Left Column - Category Info + Featured Callout */}
        <div className="col-span-5 border-r border-[#DCEAF5] pr-10 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1575b3] block mb-2">
              {solutionsMegaMenu.category}
            </span>
            <h3 className="text-5xl font-normal text-[#0f172b] leading-snug mb-3">
              {solutionsMegaMenu.headline}
            </h3>
            <p className="text-lg text-[#5F6B7A] leading-relaxed">
              {solutionsMegaMenu.description}
            </p>
          </div>

          {/* Bottom Action Link */}
          <div className="mt-8 pt-6 border-t border-[#DCEAF5]">
            <Link
              href="/solutions"
              onClick={handleNavClick}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f172b] hover:text-[#1575B3] group transition-colors"
            >
              <span>Explore All Industry Segments</span>
              <ChevronRight className="w-4 h-4 text-[#0f172b] group-hover:text-[#1575B3] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column - 2 in a row Grid */}
        <div className="col-span-7 grid grid-cols-2 gap-6">
          {solutionsMegaMenu.items.map((item: any, idx: number) => (
            <Link
              key={idx}
              href={item.url}
              onClick={handleNavClick}
              className="group flex flex-col space-y-2.5"
            >
              <div className="overflow-hidden aspect-[16/9] bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-[#111111] group-hover:text-[#1575B3] transition-colors">
                <span>{item.title}</span>
                <ChevronRight className="w-4 h-4 text-[#5F6B7A] group-hover:text-[#1575B3] group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )}
</div>

  <Link href={`/applications?division=${division}`} className={navItemStyle}>
                Applications
              </Link>
    
      {/* Resources Mega Menu */}
              <div
                className="static"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={navItemStyle}>
                  Resources
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-[#DCEAF5] shadow-2xl py-10 px-8 sm:px-12 transition-all duration-300 z-50">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-start">
                  
                      <div className="col-span-5 border-r border-[#DCEAF5] pr-10 flex flex-col justify-between h-full">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1575b3] block mb-2">
                            {resourcesMegaMenu.category}
                          </span>
                          <h3 className="text-5xl font-normal text-[#0f172b] leading-snug mb-3">
                            {resourcesMegaMenu.headline}
                          </h3>
                          <p className="text-lg text-[#5F6B7A] leading-relaxed">
                            {resourcesMegaMenu.description}
                          </p>
                        </div>
                      {/* Resources Mega Menu: Text Action Link */}
<div className="mt-8 pt-6 border-t border-[#DCEAF5]">
  <Link 
    href="/resources/knowledge-section"
    onClick={handleNavClick}
    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f172b] hover:text-[#1575B3] group transition-colors"
  >
    <span>Explore Technical Specifications & Documentation</span>
    <ChevronRight className="w-4 h-4 text-[#0f172b] group-hover:text-[#1575B3] group-hover:translate-x-1 transition-transform" />
  </Link>
</div>
                      </div>

                      {/* Right Column - 2 in a row Grid */}
                      <div className="col-span-7 grid grid-cols-3 gap-6">
                        {resourcesMegaMenu.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.url}
                            onClick={handleNavClick}
                            className="group flex flex-col space-y-2.5"
                          >
                            <div className="overflow-hidden aspect-[12/9] bg-slate-100 ">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-[#111111] group-hover:text-[#1575B3] transition-colors">
                              <span>{item.title}</span>
                              <ChevronRight className="w-4 h-4 text-[#5F6B7A] group-hover:text-[#1575B3] group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

 
              {/* About Mega Menu */}
              <div
                className="static"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={navItemStyle}>
                  About
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'about' && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-[#DCEAF5] shadow-2xl py-10 px-8 sm:px-12 transition-all duration-300 z-50">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-start">
                    
                      <div className="col-span-5 border-r border-[#DCEAF5] pr-10 flex flex-col justify-between h-full">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1575b3] block mb-2">
                            {aboutMegaMenu.category}
                          </span>
                          <h3 className="text-5xl font-normal text-[#0f172b] leading-snug mb-3">
                            {aboutMegaMenu.headline}
                          </h3>
                          <p className="text-lg text-[#5F6B7A] leading-relaxed">
                            {aboutMegaMenu.description}
                          </p>
                        </div>
                
<div className="mt-8 pt-6 border-t border-[#DCEAF5] flex items-center gap-8">
  <div>
    <span className="text-3xl font-light text-[#1575b3] tracking-tight">35+</span>
    <span className="block text-xs font-medium text-[#5F6B7A] uppercase tracking-wider mt-0.5">Years Legacy</span>
  </div>
  <div className="w-px h-8 bg-[#DCEAF5]" />
  <div>
    <span className="text-3xl font-light text-[#1575b3] tracking-tight">800+</span>
    <span className="block text-xs font-medium text-[#5F6B7A] uppercase tracking-wider mt-0.5">Partners</span>
  </div>
</div>
                      </div>

                
                      <div className="col-span-7 grid grid-cols-2 gap-6">
                        {aboutMegaMenu.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.url}
                            onClick={handleNavClick}
                            className="group flex flex-col space-y-2.5"
                          >
                            <div className="overflow-hidden aspect-[16/9] bg-slate-100 ">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-[#111111] group-hover:text-[#1575B3] transition-colors">
                              <span>{item.title}</span>
                              <ChevronRight className="w-4 h-4 text-[#5F6B7A] group-hover:text-[#1575B3] group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

        

    {/* <Link href="/about" className={navItemStyle}>
                About Us
              </Link> */}


              {/* About Us Dropdown */}
                            {/* <div
                              className="relative"
                              onMouseEnter={() => setAboutOpen(true)}
                              onMouseLeave={() => setAboutOpen(false)}
                            >
                              <button
                                onClick={() => setAboutOpen(!aboutOpen)}
                                className={`flex items-center gap-1.5 px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                                  active === 'why-kothari'
                                    ? 'text-[#1575B3]'
                                    : isScrolled
                                    ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                                    : 'text-white/90 hover:text-white hover:bg-white/10'
                                }`}
                              >
                                About
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`} />
                              </button>
              
                              {aboutOpen && (
                                <div className="absolute left-0 top-full pt-2 w-72">
                                  <div className="bg-white border border-[#DCEAF5] shadow-xl p-2 space-y-1">
                                    {aboutUsItems.map((item, i) => {
                                      const Icon = item.icon;
                                      return (
                                        <Link 
                                          href={item.url}
                                          key={i}
                                          onClick={() => {
                                            setAboutOpen(false);
                                            setMobileOpen(false);
                                          }}
                                          className="w-full flex items-start gap-3 p-3 hover:bg-[#F5FAFF] transition-colors text-left"
                                        >
                                          <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${item.accent}`}>
                                            <Icon className="w-5 h-5" />
                                          </span>
                                          <span>
                                            <span className="block text-sm font-medium text-[#111111]">{item.name}</span>
                                            <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{item.desc}</span>
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div> */}

            

              <Link href="/contact-us" className={navItemStyle}>
                Contact Us
              </Link>


              <div
  className="static"
  onMouseEnter={() => handleMouseEnter('divisions')}
  onMouseLeave={handleMouseLeave}
>
  <button className={navItemStyle}>
    Divisions
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${
        activeDropdown === 'divisions' ? 'rotate-180' : ''
      }`}
    />
  </button>

  {activeDropdown === 'divisions' && (
    <div className="absolute left-0 top-full w-full bg-white border-b border-[#DCEAF5] shadow-2xl py-10 px-8 sm:px-12 transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-stretch">
        
     
        <div className="col-span-5 border-r border-[#DCEAF5] pr-10 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1575b3] block mb-2">
              {divisionsMegaMenu.category}
            </span>
            <h3 className="text-5xl font-normal text-[#0f172b] leading-snug mb-3">
              {divisionsMegaMenu.headline}
            </h3>
            <p className="text-lg text-[#5F6B7A] leading-relaxed mb-6">
              {divisionsMegaMenu.description}
            </p>

            <div className="space-y-3">
              {divisionsMegaMenu.divisions.map((div: any) => {
                const isActive = (hoveredDivision || divisionsMegaMenu.divisions[0].id) === div.id;
                return (
                  <Link
                    key={div.id}
                    href={div.link}
                    onClick={handleNavClick}
                    onMouseEnter={() => setHoveredDivision(div.id)}
                    className={`group flex items-center justify-between p-4 border transition-all duration-300 ${
                      isActive
                        ? 'border-[#1575B3] bg-[#F5F9FC] shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <h4 className={`text-base font-semibold ${isActive ? 'text-[#1575B3]' : 'text-[#111111]'}`}>
                        {div.title}
                      </h4>
                      <p className="text-sm text-[#5F6B7A] line-clamp-1 mt-0.5">
                        {div.shortDesc}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-[#1575B3] translate-x-1' : 'text-[#5F6B7A]'}`} />
                  </Link>
                );
              })}
            </div>
          </div>

        
        </div>

        <div className="col-span-7">
          {(() => {
            const activeDiv = divisionsMegaMenu.divisions.find(
              (d: any) => d.id === (hoveredDivision || divisionsMegaMenu.divisions[0].id)
            ) || divisionsMegaMenu.divisions[0];

            return (
              <Link
                href={activeDiv.link}
                onClick={handleNavClick}
                className="group relative h-[420px] w-full overflow-hidden border border-slate-200 bg-slate-950 flex flex-col justify-end shadow-lg block"
              >
         
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${activeDiv.image})` }}
                />

            
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeDiv.id === 'pipes'
                      ? 'bg-gradient-to-t from-[#0E588A]/95 via-[#1575B3]/75 to-slate-950/40'
                      : 'bg-gradient-to-t from-emerald-950/95 via-teal-900/75 to-slate-950/40'
                  }`}
                />

             
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-200 mb-1">
                    Selected Division
                  </span>
                  <h4 className="text-4xl font-normal text-white leading-snug mb-3">
                    {activeDiv.title}
                  </h4>
                  
                  <p className="text-sm text-slate-100 leading-relaxed mb-4 line-clamp-3">
                    {activeDiv.fullDesc || activeDiv.shortDesc}
                  </p>

           
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeDiv.badges?.map((b: string) => (
                      <span
                        key={b}
                        className="text-xs px-2.5 py-1 border bg-white/10 text-white border-white/20 backdrop-blur-sm"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

              
                  <span
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${
                      activeDiv.id === 'pipes' ? 'text-sky-200' : 'text-emerald-200'
                    }`}
                  >
                    <span>Explore {activeDiv.title}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })()}
        </div>

      </div>
    </div>
  )}
</div>

 {/* <div
                className="relative"
                onMouseEnter={() => setDivOpen(true)}
                onMouseLeave={() => setDivOpen(false)}
              >
                <button
                  onClick={() => setDivOpen(!divOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                    active === 'solutions'
                      ? 'text-[#1575B3]'
                      : isScrolled
                      ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Divisions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${divOpen ? 'rotate-180' : ''}`} />
                </button>

                {divOpen && (
                  <div className="absolute right-0 top-full pt-2 w-72">
                    <div className="bg-white border border-[#DCEAF5] shadow-xl p-2 space-y-1">
                      {divisions.map((d, i) => {
                        const Icon = d.icon;
                        return (
                          <Link 
                            href={d.url}
                            key={i}
                            onClick={() => handleNav(d.id)}
                            className="w-full flex items-start gap-3 p-3 hover:bg-[#F5FAFF] transition-colors text-left"
                          >
                            <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${d.accent}`}>
                              <Icon className="w-5 h-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-[#111111]">{d.name}</span>
                              <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{d.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div> */}


            </nav>

            <button
              onClick={handleOpenGetInTouch}
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all ${
                isSolid || activeDropdown
                  ? 'bg-[#1575B3] hover:bg-[#0E588A] text-white shadow-md shadow-[#1575B3]/15'
                  : 'bg-white hover:bg-white/90 text-black shadow-lg'
              }`}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 border transition ${
                isSolid || activeDropdown
                  ? 'text-[#1575B3] bg-[#F5FAFF] border-[#DCEAF5] hover:bg-[#DCEAF5]/50'
                  : 'text-white bg-white/10 border-white/20 hover:bg-white/20'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-white z-[999] flex flex-col justify-between px-6 py-6 border-t border-[#DCEAF5] overflow-y-auto">
            <div className="space-y-2">
              {/* <Link
                href="/"
                onClick={handleNavClick}
                className="block w-full px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition"
              >
                Home
              </Link> */}

              
 {/* Mobile Products Submenu */}
<div>
  <button
    onClick={() => {
      if (activeDropdown === 'products') {
        setActiveDropdown(null);
      } else {
        setActiveDropdown('products');
        setActiveProductSegment(0);
        setActiveProductCategory(0);
      }
    }}
    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
  >
    <span>Products</span>
    <ChevronDown
      className={`w-5 h-5 text-[#5F6B7A] transition-transform ${
        activeDropdown === 'products' ? 'rotate-180' : ''
      }`}
    />
  </button>
  {activeDropdown === 'products' && (
    <div className="pl-4 space-y-3 pt-1 pb-2">
      {productsMegaMenu.segments.map((segment: any, segIdx: number) => (
        <div key={segIdx}>
          <button
            onClick={() => {
              setActiveProductSegment(segIdx);
              setActiveProductCategory(0);
            }}
            className={`w-full text-left px-2.5 py-2 text-sm font-semibold transition-colors ${
              activeProductSegment === segIdx ? 'text-[#1575B3]' : 'text-[#111111]'
            }`}
          >
            {segment.name}
          </button>
          {activeProductSegment === segIdx && (
            <div className="pl-4 space-y-1.5">
              {segment.categories.map((cat: any, catIdx: number) => (
                <div key={catIdx}>
                  <button
                    onClick={() => setActiveProductCategory(catIdx)}
                    className={`w-full text-left px-2.5 py-1.5 text-sm font-medium transition-colors ${
                      activeProductCategory === catIdx ? 'text-[#1575B3]' : 'text-[#5F6B7A]'
                    }`}
                  >
                    {cat.name}
                  </button>
                  {activeProductCategory === catIdx && (
                    <div className="pl-4 space-y-0.5">
                      {cat.products.map((product: any, pIdx: number) => (
                        <Link
                          key={pIdx}
                          href={product.url}
                          onClick={handleNavClick}
                          className="block px-2.5 py-1.5 text-sm text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF] transition"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>
           

               {/* Mobile solutions Submenu */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5F6B7A] transition-transform ${
                      activeDropdown === 'solutions' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="pl-4 space-y-1 pt-1">
                    {solutionsMegaMenu.items.map((item: any, i: number) => (
                      <Link
                        key={i}
                        href={item.url}
                        onClick={handleNavClick}
                        className="block p-2.5 text-sm font-medium text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF] transition"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>



               <Link
                href={`/applications?division=${division}`}
                onClick={handleNavClick}
                className="block w-full px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition"
              >
                Applications
              </Link>

        

              {/* Mobile Resources Submenu */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5F6B7A] transition-transform ${
                      activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="pl-4 space-y-1 pt-1">
                    {resourcesMegaMenu.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.url}
                        onClick={handleNavClick}
                        className="block p-2.5 text-sm font-medium text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF] transition"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>


              {/* Mobile About Submenu */}
              {/* <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5F6B7A] transition-transform ${
                      activeDropdown === 'about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeDropdown === 'about' && (
                  <div className="pl-4 space-y-1 pt-1">
                    {aboutMegaMenu.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.url}
                        onClick={handleNavClick}
                        className="block p-2.5 text-sm font-medium text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF] transition"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div> */}

              {/* <Link
                href="/about"
                onClick={handleNavClick}
                className="block w-full px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition"
              >
                About Us
              </Link> */}

                 <div className="space-y-1">
                              <button
                                onClick={() => setAboutOpen(!aboutOpen)}
                                className="w-full flex items-center justify-between px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                              >
                                <span>About</span>
                                <ChevronDown className={`w-5 h-5 text-[#5F6B7A] transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                              </button>
                              
                              {aboutOpen && (
                                <div className="pl-2 space-y-2 pt-1">
                                  {aboutUsItems.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                      <Link
                                        key={i}
                                        href={item.url}
                                        onClick={() => {
                                          setAboutOpen(false);
                                          setMobileOpen(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 transition text-left"
                                      >
                                        {/* <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${item.accent}`}>
                                          <Icon className="w-5 h-5" />
                                        </span> */}
                                        <span>
                                          <span className="block text-sm font-medium text-[#5F6B7A]">{item.name}</span>
                                          {/* <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{item.desc}</span> */}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>

              <Link
                href="/contact"
                onClick={handleNavClick}
                className="block w-full px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition"
              >
                Contact Us
              </Link>



                 {/* Mobile Divisions — same as Home2Header */}
              <div className="space-y-1 pt-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'divisions' ? null : 'divisions')}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>Divisions</span>
                  <ChevronDown className={`w-5 h-5 text-[#5F6B7A] transition-transform ${activeDropdown === 'divisions' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'divisions' && (
                  <div className="pl-2 space-y-2 pt-1">
                    {[
                      { name: 'Pipe Division', desc: 'Agri, plumbing & drainage pipes.', icon: Factory, accent: 'text-[#1575B3] bg-[#F5FAFF]', url: '/pipe-division' },
                      { name: 'Irrigation Division', desc: 'Drip, sprinklers & micro irrigation.', icon: Sprout, accent: 'text-[#1E8E3E] bg-[#EAF8EF]', url: '/irrigation-division' },
                    ].map((d, i) => {
                      const Icon = d.icon;
                      return (
                        <Link
                          key={i}
                          href={d.url}
                          onClick={handleNavClick}
                          className="w-full flex items-center gap-3 px-4 py-3  transition text-left"
                        >
                          {/* <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${d.accent}`}>
                            <Icon className="w-5 h-5" />
                          </span> */}
                          <span>
                            <span className="block text-sm font-medium text-[#5F6B7A]">{d.name}</span>
                            {/* <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{d.desc}</span> */}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-auto">
              <button
                onClick={handleOpenGetInTouch}
                className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white py-3.5 font-medium text-base shadow-sm transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-4xl bg-white border border-[#DCEAF5] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="hidden md:flex md:w-5/12 bg-[#0E588A] text-white p-6 sm:p-8 flex-col justify-between shrink-0">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-white/70 block mb-2">
                  Kothari Group
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-4">
                  Let’s build sustainable solutions together.
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  Reach out to our specialized agricultural and piping experts for consultations, product catalogs, or institutional queries.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/15">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Phone</span>
                    <span className="text-sm font-medium text-white">+91 1800 120 4343</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Email</span>
                    <span className="text-sm font-medium text-white">enquiry@kotharigroupindia.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Headquarters</span>
                    <span className="text-sm text-white/90">
                      Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413001, Maharashtra
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-7/12 p-6 sm:p-8 bg-white overflow-y-auto">
              {formSubmitted ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-[#EAF8EF] text-[#1E8E3E] flex items-center justify-center mb-4 border border-[#1E8E3E]/20">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-semibold text-[#111111] mb-2">Inquiry Submitted</h4>
                  <p className="text-sm text-[#5F6B7A] max-w-md">
                    Thank you for reaching out. A representative from Kothari Group will contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#111111] mb-1">Get in Touch</h4>
                    <p className="text-xs text-[#5F6B7A] mb-4">
                      Fill out your details and select the division relevant to your request.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Division Interest
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    >
                      <option value="Agriculture Division">Agriculture Division (Drip & Irrigation)</option>
                      <option value="Pipe Division">Pipe Division (Agri, Plumbing & Drainage)</option>
                      <option value="General Corporate">General Corporate Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Message / Requirement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify product requirements, location, or general query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white py-3.5 font-medium text-sm transition-colors shadow-sm mt-2"
                  >
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};