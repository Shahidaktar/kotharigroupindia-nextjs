'use client';

import { useEffect, useState } from 'react';
import AppShell from '@/components/AppShell';
import { KnowledgeCentre } from '@/components/KnowledgeCentre';
import { HeroDivision } from '@/components/HeroDivision';
import { DivisionOverview } from '@/components/DivisionOverview';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Category } from '@/components/Category';
import { WhyKothariGroup } from '@/components/main/WhyKothariGroup';
import { Impact } from '@/components/main/Impact';
import { Footer } from '@/components/Footer';
import { NewsDivision, type DivisionNewsCard } from '@/components/NewsDivision';
import { irrigationTestimonials } from '@/data/divisionTestimonials';
import { Home3Footer } from '@/components/Home3Footer';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { IrrigationproductsMegaMenu, irrigationSolutionsMegaMenu, PipeproductsMegaMenu } from '@/data/products';


function AgricultureDivisionContent() {
  // Live WP news/blogs (events + blogs categories); static fallbacks show until loaded.
  const [cards, setCards] = useState<{
    newsItems?: DivisionNewsCard[];
    blogPosts?: DivisionNewsCard[];
  }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch('/api/division-news?theme=green', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!alive || !data) return;
        setCards({
          newsItems: data.events?.length ? data.events : undefined,
          blogPosts: data.blogs?.length ? data.blogs : undefined,
        });
      })
      .catch(() => {})
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);
  const heroData = {
    videoSrc: '/kothari-banner2.mp4',
   headline: <>Four decades of<br />smart irrigation</>,
    subtext: 'Empowering millions of farmers with intelligent micro-irrigation systems designed for peak crop vitality and water conservation.',
    ctaText: 'View Micro Irrigation',
    cardTitle: 'Micro Irrigation Systems',
    cardDescription: 'Intelligent drip and micro-flow technology maximizing yield with minimal water wastage.',
  };

  const footerData = {
    logo: 'https://kotharigroupindia.com/img/kothari-logo.png',
    about: 'For over four decades, Kothari Group has empowered farmers and builders with water-wise micro irrigation systems, agri pipes and premium plumbing solutions across India.',
    contact: {
      address: 'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
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
  { label: 'Leadership', target: 'our-management' },
  { label: 'Career', target: 'career' },
  { label: 'Sustainability', target: 'sustainability' },
  { label: 'Blogs', target: 'blogs' },
  { label: 'News & Articles', target: '/press-release' },
  {label: 'Contact Us', target: 'contact-us'},
    ],
    certifications: [
      'ISO 9001 Quality System',
      'BIS IS 15778 / IS 4985',
      'IS 13488 Micro Irrigation',
      'PMKSY Govt. Subsidy Certified',
      'RoHS Lead-Free Formulation',
    ],
    socialLinks: [
      {
        name: 'YouTube',
        icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />,
        href: '#',
      },
      {
        name: 'Facebook',
        icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />,
        href: '#',
      },
      {
        name: 'Twitter',
        icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />,
        href: '#',
      },
      {
        name: 'LinkedIn',
        icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />,
        href: '#',
      },
    ],
    newsletterPlaceholder: 'Enter your email address',
    newsletterButton: 'Subscribe',
    copyright: '© 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
    socialgroup:[
      {
        links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kothariirrigation/' },
      { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Va6OjqKA89MhSFoEY32l' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@KothariIrrigation' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kothariirrigation_/' },
    ]
      }
    ]
  }
  const items = [
    {
      title: 'Banana Guides',
      description: 'Get familiar with the information on growing banana plants, spacing, irrigation process, fertigation, and combating pests. ',
      image: '/knowledge/Banana.png',
      link: '#banana'
    },
    {
      title: 'Chilli Guides',
      description: 'Get useful information about growing chillies, irrigation, water management, plant spacing, and pest control.  ',
      image: 'https://images.pexels.com/photos/34111554/pexels-photo-34111554.jpeg',
      link: '#chilli'
    },
    {
      title: 'Onion Guides',
      description: 'Follow the advice provided on how to grow onions, use space for the plants, irrigation, and pest management. ',
      image: 'https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg',
      link: '#onion'
    }
  ];
// const productsMegaMenu = {
//   headline: 'Our Products',
//   description: 'CPVC pipes, fittings and solvent cement for hot and cold water systems.',
//   segments: [
//     {
//       name: 'Drip Irrigation System',
//       desc: 'Complete drip irrigation solutions with driplines, drippers, polytubes, fittings, accessories and valves.',
//       categories: [
//         {
//           name: 'Dripline',
//           products: [
//             { title: 'Dripline K-Gol NPC', url: '/drip-line/dripline-k-gol-npc', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-NPC.webp',shortDesc: 'Reliable Drip Line for Level Fields.' },
//             { title: 'Dripline K-Gol PC', url: '/drip-line/dripline-k-gol-pc', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-PC-1.webp',shortDesc: 'Pressure-Compensated Drip Line for Slopes.' },
//             { title: 'Dripline K-Lin NPC', url: '/drip-line/dripline-k-lin-npc', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-1.webp' ,shortDesc:'Uniform Drip Line for Row Crops.'},
//             { title: 'Dripline K-Lin PCAS', url: '/drip-line/dripline-k-lin-pcas', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCAS-1.webp', shortDesc: 'Anti-Siphon Drip Line for Subsurface Irrigation.'},
//             { title: 'Dripline K-Lin PCND', url: '/drip-line/dripline-k-lin-pcnd', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCND-1.webp',shortDesc:'No-Drain Drip Line for Greenhouses.' },
          
//           ],
//         },
//         {
//           name: 'Polyfittings & Accessories',
//           products: [
//             { title: 'Drip Poly Fittings', url: '/polyfittings-and-accessories/drip-poly-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIP-POLY-FITTINGS.webp',shortDesc:'Leak-Proof Fittings for Drip Systems.' },
//             { title: 'Drip Winder', url: '/polyfittings-and-accessories/drip-winder', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Drip-Winder.webp' , shortDesc:'Fast, Damage-Free Drip Line Coiler.'},
           
//           ],
//         },
//         {
//           name: 'Drip Tubes (Polytube)',
//           products: [
//             { title: 'Polytube', url: '/drip-tubes-polytube/polytube', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/POLYTUBE.webp',shortDesc: 'Precision Tube for Drip Irrigation.' },
           
//           ],
//         },
//         {
//           name: 'Emitters (Drippers)',
//           products: [
//             { title: 'Turbo Dripper', url: '/emitters-drippers/turbo-dripper', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/TURBO-DRIPPER-1.webp' ,shortDesc: 'Clog-Resistant Online Drip Emitter.'},
//             { title: 'PC Dripper', url: '/emitters-drippers/pc-dripper', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PC-DRIPPER.webp',shortDesc:'Pressure-Compensated Drip Emitter.' },
           
//           ],
//         },
//         {
//           name: 'Thinwall Drip Line',
//           products: [
//             { title: 'Thin Wall Dripline K-Super', url: '/thinwall-drip-line/thin-wall-dripline-k-super', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SUPER.webp',shortDesc: 'Durable Thin Wall Drip Line.' },
//             { title: 'Thin Wall Dripline K-Smar', url: '/thinwall-drip-line/thin-wall-dripline-k-smart', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SMART.webp' , shortDesc: 'Economical Thin Wall Drip Line.'},
//             { title: 'Thin Wall Dripline K-Slim', url: '/thinwall-drip-line/thin-wall-dripline-k-slim', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM-ULTRA.webp',shortDesc: 'Lightweight Thin Wall Drip Line.' },
//             { title: 'Thinwall Dripline K-Slim Ultra', url: '/thinwall-drip-line/thinwall-dripline-k-slim-ultra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM.webp' , shortDesc: 'Ultra-Light Drip Line for Short Crops.'},
//             { title: 'K-Smart Screen Filter', url: '/thinwall-drip-line/k-smart-screen-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/K-Smart-Screen-Filter.webp' ,shortDesc: 'Reliable Filter for Micro Irrigation.'},
//             { title: 'Thinwall Drip Poly Fittings', url: '/thinwall-drip-line/thinwall-drip-poly-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/Thinwall-Drip-Accessories.webp',shortDesc:'Leak-Proof Fittings for Thinwall Systems.' },
           
//           ],
//         },
//         {
//           name: 'Valves',
//           products: [
//             { title: 'Single & Double Union PVC Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',shortDesc: 'Durable PVC valves ensuring effortless, leak-proof irrigation flow control.' },
//             { title: 'Double Union PP Ball Valve', url: '/valves-drip-irrigation/double-union-pp-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp' ,shortDesc: 'Reliable Flow Control for Drip Systems.'},
//             { title: 'Plain White Blue Ball Valve', url: '/valves-drip-irrigation/plain-white-blue-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp',shortDesc: 'Trusted Valve for Drip Irrigation.' },
//             { title: 'Butterfly Valve', url: '/valves-drip-irrigation/butterfly-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp' ,shortDesc: 'Precise Flow Control Valve.'},
//             { title: 'Throttle Valve', url: '/valves-drip-irrigation/throttle-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Throttle-valve.webp' ,shortDesc: 'Adjustable Flow Regulation Valve.'},
//             { title: 'Air Cum Vacuum Relief Valve', url: '/valves-drip-irrigation/air-cum-vacuum-relief-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp',shortDesc: 'Smart Pipeline Pressure Protection.' },
//             { title: 'Flush Valve', url: '/valves-drip-irrigation/flush-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp' ,shortDesc:'Clog-Free Submain Flushing Valve.'},
//             { title: 'Check Valve (Non-Return Valve)', url: '/valves-drip-irrigation/check-valve-non-return-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Check-Valve-Non-Return-Valve.webp',shortDesc: 'Reliable Backflow Prevention Valve.' },
           
//           ],
//         },
//         {
//           name: 'Drip Agri PVC Pipes',
//           products: [
//             { title: 'UPVC Pipes', url: '/drip-agri-pvc-pipes/upvc-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp' ,shortDesc:'Dependable Pipe for Drip Irrigation.'},
           
//           ],
//         },
//         {
//           name: 'Drip Gravity Kits',
//           products: [
//             { title: 'Gravity Drip Kit', url: '/drip-gravity-kits/gravity-drip-kit', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/KOTHARI-GRAVITY-DRIP-KIT.webp',shortDesc:'Pump-Free Drip Irrigation Kit.' },
           
//           ],
//         },
//         {
//           name: 'Mulching',
//           products: [
//             { title: 'Mulch Films', url: '/mulching/mulch-films', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mulch.webp' ,shortDesc:'Smart Mulch for Water Conservation.'},
           
//           ],
//         },
       
//       ],
//     },
//     {
//       name: 'Filters & Injectors',
//       desc: 'Efficient filtration and fertilizer injection solutions with filters, dosing pumps and injectors.',
//       categories: [
//         {
//           name: 'Filters',
//           products: [
//             { title: 'Hydrocyclone Filter', url: '/filters/hydrocyclone-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Hydrocyclone-Filter.webp' ,shortDesc:'Sand Separator for Clean Irrigation.'},
//             { title: 'Sand Filter', url: '/filters/sand-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SAND-FILTER-1.webp',shortDesc:'Fine Filtration for Drip Systems.' },
//             { title: 'Screen Filter', url: '/filters/screen-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Filter.webp' ,shortDesc:'Reliable Mesh Filter for Irrigation.'},
//             { title: 'Twin Screen Filter', url: '/filters/twin-screen-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Twin-Screen-Filter.webp' ,shortDesc:'High-Flow Dual Mesh Filter.'},
//             { title: 'Semi Automatic Screen Filter', url: '/filters/semi-automatic-screen-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Semi-Automatic-Screen-Filter-1.webp',shortDesc:'Low-Downtime Screen Filter.' },
//             { title: 'Disc Filter & Twin Disc Filter', url: '/filters/disc-filter-and-twin-disc-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Disc-Filter-Twin-Disc-Filter-1.webp' ,shortDesc: 'Precision Filter for Open Water Sources.'},
//             { title: 'Mini Sigma Filter', url: '/filters/mini-sigma-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' ,shortDesc:'Compact Self-Cleaning Filter.'},
//             { title: 'Filtomat Filter', url: '/filters/filtomat-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp',shortDesc:'Power-Free Automatic Filtration.' },
//         ],
//         },
//         {
//           name: 'Dosing pumps & Fertilizer Injectors',
//           products: [
//             { title: 'HDPE Header Manifold', url: '/dosing-pumps-and-fertilizer-injectors/hdpe-header-manifold', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Header-Manifold.webp' ,shortDesc:'Durable Manifold for Fertigation Systems.'},
//             { title: 'PP Header Assembly', url: '/dosing-pumps-and-fertilizer-injectors/pp-header-assembly', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PP-Header-Assembly.webp',shortDesc:'Reliable Assembly for Filtration Systems.' },
//             { title: 'Venturi Injector', url: '/dosing-pumps-and-fertilizer-injectors/venturi-injector', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Venturi-Injector.webp',shortDesc:'Efficient Fertilizer Injector.' },
//             { title: 'Dosing Pump', url: '/dosing-pumps-and-fertilizer-injectors/dozing-pump', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DOZING-PUMP.webp' ,shortDesc:'Precision Fertilizer Dosing Pump.'},
//           ],
//         }
      
//       ],
//     },
//     {
//       name: 'Automation System',
//       desc: 'Smart irrigation automation with fertigation machines, controllers, filters and control valves.',
//       categories: [
//         {
//           name: 'Fertigation Machines',
//           products: [
//             { title: 'Nutrijet Fertigation Machines', url: '/fertigation-machines/nutrijet-fertigation-machines', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/NUTRIJET.webp' ,shortDesc:'Smart IoT Fertigation System.'},
//               ],
//         },
//         {
//           name: 'Controllers',
//           products: [
//             { title: 'Irribeat Controllers', url: '/controllers/irribeat-controllers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/IRRIBEAT.webp' ,shortDesc:'Smart Automated Irrigation Controller.'},
//             { title: 'GSI (Galcon Smart Irrigation) Controller', url: '/controllers/gsi-galcon-smart-irrigation-controller', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/GSI-Galcon-Smart-Irrigation.webp',shortDesc:'Cloud-Based Smart Irrigation Controller.' },
//             { title: 'Galpro Controller (AC/DC)', url: '/controllers/galpro-controller-ac-dc', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Galpro-AC-DC.webp',shortDesc:'Affordable Smart Irrigation Automation.' },
//               ],
//         },
//         {
//           name: 'Automatic Filters & Accessories',
//           products: [
//             { title: 'Mini Sigma Filter', url: '/automatic-filters-and-accessories/mini-sigma-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' ,shortDesc:'Compact Self-Cleaning Filter.'},
//             { title: 'Filtomat Filter', url: '/automatic-filters-and-accessories/filtomat-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp' ,shortDesc:'Power-Free Automatic Filtration.'},
//             { title: 'Solenoid Control Valve', url: '/automatic-filters-and-accessories/solenoid-control-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Solenoid-Control-Valve.webp',shortDesc:'Automated Irrigation Control Valve.' },
//             { title: 'Pressure Reducing Valve', url: '/automatic-filters-and-accessories/pressure-reducing-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Reducing-Valve.webp' ,shortDesc:'Reliable Downstream Pressure Control.'},
//             { title: 'Pressure Sustaining Valve', url: '/automatic-filters-and-accessories/pressure-sustaining-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Sustaining-Valve.webp',shortDesc:'Consistent Upstream Pressure Control.' },
//             { title: 'Quick Pressure Relief Valve', url: '/automatic-filters-and-accessories/quick-pressure-relief-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/QUICK-PRESSURE.webp' ,shortDesc:'Fast-Acting Burst Protection Valve.'},
//             { title: 'Filter Auto Backwash Valve', url: '/automatic-filters-and-accessories/filter-auto-backwash-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/FILTER-BACKWASH.png.webp',shortDesc:'Automated Filter Cleaning Valve.' },
//             { title: 'Water Meter', url: '/automatic-filters-and-accessories/water-meter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/WATER-METER.webp' ,shortDesc:'Volumetric Meter for Smart Irrigation. '},
//               ],
//         },
       
//       ],
//     },
//      {
//       name: 'Micro & Mini Sprinklers',
//       desc: 'Efficient micro and mini sprinklers, sprayers, misters and foggers for irrigation applications.',
//       categories: [
//         {
//           name: 'Micro Sprinklers & Assemblies',
//           products: [
//             { title: 'K-Mic Excel', url: '/micro-sprinklers-and-assemblies/k-mic-excel', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Excel.webp',shortDesc:'Precision Micro Sprinkler for Nurseries.' },
//             { title: 'K-Mic Micro Sprinkler', url: '/micro-sprinklers-and-assemblies/k-mic-micro-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Micro-Sprinkler.webp',shortDesc:'Frost-Protection Micro Sprinkler.' },
//             { title: 'K-Tuff Micro Sprinkler', url: '/micro-sprinklers-and-assemblies/k-tuff-micro-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Tuff-Micro-Sprinkler.webp' ,shortDesc:'Gentle Micro Sprinkler for Delicate Crops.'},
//               ],
//         },
//         {
//           name: 'Mini Sprinklers & Assemblies',
//           products: [
//             { title: 'Mini Sprinkler', url: '/mini-sprinklers-and-assemblies/mini-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png' ,shortDesc:'Uniform Sprinkler for Field Crops.'},
//               ],
//         },
//         {
//           name: 'Micro Jets & assemblies',
//           products: [
//             { title: 'Micro Sprayer', url: '/micro-jets-and-assemblies/micro-sprayer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/MICRO-SPRAYER.webp',shortDesc:'Precision Micro Jet for Horticulture.' },
//               ],
//         },
//         {
//           name: 'Misters & Assemblies',
//           products: [
//             { title: 'K-Mist', url: '/misters-and-assemblies/k-mist', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' ,shortDesc:'Cooling Mist for Greenhouses.'},
//               ],
//         },
//         {
//           name: 'Foggers & Assemblies',
//           products: [
//             { title: 'K-Fogger', url: '/foggers-and-assemblies/k-fogger', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' ,shortDesc:'Fine Fogging for Climate Control.'},
//               ],
//         },
       
//       ],
//     },
//     {
//       name: 'Sprinkler Irrigration system',
//       desc: 'Complete sprinkler irrigation solutions with sprinklers, pipes, connectors, rainguns and accessories.',
//       categories: [
//         {
//           name: 'Metal Sprinklers',
//           products: [
//             { title: 'Metal Sprinkler', url: '/metal-sprinkler/metal-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/METAL-SPRINKLER.webp' ,shortDesc:'Full-Circle Impact Sprinkler.'},
//               ],
//         },
//         {
//           name: 'Plastic Sprinklers',
//           products: [
//             { title: 'Mini Sprinkler', url: '/plastic-sprinklers/mini-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png',shortDesc:'Uniform Sprinkler for Field Crops.' },
//               ],
//         },
//         {
//           name: 'HDPE Sprinklers Pipes (QCPE)',
//           products: [
//             { title: 'Sprinklers Pipes (QCPE)', url: '/hdpe-sprinkler-pipes-qcpe/sprinklers-pipes-qcpe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/QCPE-Spinklar-pipe.webp',shortDesc:'Quick-Coupling Pipe for Sprinklers.' },
//               ],
//         },
//         {
//           name: 'Sprinkler Connectors & Accessories',
//           products: [
//             { title: 'HDPE Pipe Sprinkler Set', url: '/sprinkler-connectors-and-accessories/hdpe-pipe-sprinkler-set', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HDPE-Pipe-Sprinkler-Set-1.webp',shortDesc:'Complete Sprinkler Irrigation Kit.' },
//               ],
//         },
//         {
//           name: 'Raingun & Accessories',
//           products: [
//             { title: 'Raingun and Accessories', url: '/raingun-and-accessories/raingun', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Rainguns.webp' ,shortDesc:'Wide-Coverage Irrigation Sprinkler.'},
//               ],
//         },
//         {
//           name: 'Garden & Landscape Sprinklers',
//           products: [
//             { title: 'Pop-up Spray Heads and Rotors', url: '/garden-and-landscape-sprinklers/pop-up-spray-heads-and-rotors', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Pop-up-spray-heads-rotors.png',shortDesc:'Uniform Spray for Landscapes & Turf.' },
//             { title: 'Swing Joint', url: '/garden-and-landscape-sprinklers/swing-joint', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Swing-joint-1.png' ,shortDesc:'Flexible Connector for Pop-Up Sprinklers.'},
//             { title: 'Quick Coupling Valve (QCV)', url: '/garden-and-landscape-sprinklers/quick-coupling-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Quick-Coupling-Valve-QCV.webp' ,shortDesc:'Portable Valve for Quick Connections.'},
//               ],
//         },
//         {
//           name: 'K-Eco Rain Pipes & K- Flex Submain Pipes',
//           products: [
//             { title: 'K-Eco Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/K-Eco-sprinkler.webp',shortDesc:'Laser-perforated flat pipe delivering uniform, filter-free irrigation coverage.' },
//             { title: 'K-Flex Submain Pipes', url: '/k-eco-rain-pipes-and-k-flex-submain-pipes/k-flex-submain-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flexsubmain.webp' ,shortDesc:'Flexible Pipe for Irrigation Distribution.'},
//               ],
//         },
       
//       ],
//     },
//      {
//       name: 'Turnkey Projects',
//       desc: 'Complete turnkey irrigation projects including PDN and CI solutions for efficient water management.',
//       categories: [
//         {
//           name: 'Turnkey Projects',
//           products: [
//             { title: 'Turnkey Projects (PDN & CI)', url: '/turnkey-projects/pdn-ci', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/turnkey-projects-scaled.webp',shortDesc:'Complete Turnkey Irrigation Solutions' },
//             { title: 'Turnkey Projects (Infra)', url: '/turnkey-projects/turnkey-projects-infra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp',shortDesc:'End-to-End Irrigation Infrastructure' },
//               ],
//         },
       
      
       
//       ],
//     },
    
//   ],
// };

const FEATURE_PRODUCTS = [
  {
    id: '1',
    title: 'Dripline K-Gol NPC',
    subtitle: 'Reliable Drip Line for Level Fields',
    description: 'Our Dripline K-Gol NPC is built to deliver dependable, cost-effective drip irrigation for flat, level fields where consistent, straightforward water delivery matters more than pressure compensation.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-NPC.webp',
    category: 'Dripline',
    link: '/irrigation-division/dripline-k-gol-npc',
    spec: 'Temp Tolerance: Up to 93°C',
  },
  {
    id: '2',
    title: 'Nutrijet Fertigation Machines',
    subtitle: 'Precision Yield Technology',
    description: 'Kothari’s fertigation machines are automated systems for nutrient supply through irrigation. They are engineered for precise and uniform fertilizer application, enhancing crop growth and maximising yields.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Nutrijet-Fertigation-system.webp',
    category: 'Micro Irrigation',
    link: '/irrigation-division/nutrijet-fertigation-machines',
    spec: 'Efficiency Rate: 98%',
  },
  {
    id: '3',
    title: 'K-Mic Micro Sprinkler',
    subtitle: 'Frost-Protection Micro Sprinkler',
    description: 'Our K-Mic Micro Sprinkler is built to protect crops during the moments they are most vulnerable to sudden frost and extreme heat.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Micro-Sprinkler-1.webp',
    category: 'Micro Sprinklers & Assemblies',
    link: '/irrigation-division/k-mic-micro-sprinkler',
    spec: 'Load Capacity: High PSI',
  },
  {
    id: '4',
    title: 'Sand Filter',
    description: `Our Sand Filter delivers the fine, thorough filtration that heavier particle separators simply can't provide, using uniform grade silica crushed sand to catch organic debris and sediment before it reaches your drip irrigation system.`,
    subtitle: 'Fine Filtration for Drip Systems',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Sand-Filter.webp',
    category: 'Filters',
    link: '/irrigation-division/sand-filter',
    spec: 'UV & Chemical Resistant',
  },
  {
    id: '5',
    title: 'Single & Double Union PVC Ball Valve',
    subtitle: 'Easy-Maintenance Irrigation Flow Valve',
    description: 'Our Single & Double Union PVC Ball Valves make controlling flow in irrigation or industrial setups simple and stress-free. Built from tough, corrosion-resistant PVC, they handle harsh chemicals, constant water, and long days in the sun without breaking a sweat.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',
    category: 'Valves',
    link: '/irrigation-division/single-and-double-union-pvc-ball-valve',
    spec: 'Coverage: 360° Uniformity',
  },
];
  return (
    <>
      <HeaderDivison productsMegaMenu={IrrigationproductsMegaMenu} solutionsMegaMenu={irrigationSolutionsMegaMenu}/>
      <HeroDivision heroData={heroData} />
      <DivisionOverview
        heading="Irrigation Solution: Complete Farm Water Solutions"
        accent="blue"
        image="https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/About_kothari-Irrigation.jpg"
        paragraphs={[
        "Water conservation through effective irrigation allows farmers to use available water resources optimally while ensuring the crops get enough water. Kothari Group provides farmers with drip irrigation systems that deliver water exactly to the root zones of the plants in addition to offering sprinkler irrigation systems that ensure uniform coverage in larger fields.",
        "The micro and mini sprinklers we offer can provide gentle and uniform irrigation to the orchards, nurseries, and sensitive crops. Our sand, screen and automatic filters are available for purifying the irrigation water and preventing build-up of sediments and debris.",
        "Our fertigation systems, which combine water and nutrients, enable farmers to apply fertilizing solutions more effectively and reduce wastage. Using dosing pumps, Venturi injectors, IoT-enabled fertigation machines, and automated controllers, farmers can control their irrigation processes and processes of applying fertilizers.",
        "Our irrigation systems designed for harsh field conditions are a great combination of high-tech equipment and efficient water management."
        ]}
      />
      {/* <Category tab="agriculture"/> */}
      <FeaturedProducts products={FEATURE_PRODUCTS} theme="green"/>
      {/* <WhyKothariGroup /> */}
      {/* <Impact /> */}
      <KnowledgeCentre itemData={items} theme="green"/>
      <NewsDivision theme="green" newsItems={cards.newsItems} blogPosts={cards.blogPosts} testimonials={irrigationTestimonials} loading={loading} />
      <Footer footerData={footerData}/>
    </>
  );
}

export default function AgricultureDivisionPage() {
  return (
    <AppShell>
      <AgricultureDivisionContent />
    </AppShell>
  );
}