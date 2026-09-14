'use client';

import AppShell from '@/components/AppShell';
import { KnowledgeCentre } from '@/components/KnowledgeCentre';
import { HeroDivision } from '@/components/HeroDivision';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Category } from '@/components/Category';
import { WhyKothariGroup } from '@/components/main/WhyKothariGroup';
import { Impact } from '@/components/main/Impact';
import { Footer } from '@/components/Footer';
import { NewsDivision } from '@/components/NewsDivision';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { PipeproductsMegaMenu, pipeSolutionsMegaMenu } from '@/data/products';


function PipeDivisionContent() {
  const heroData = {
    videoSrc: '/kothari-banner2.mp4',
    headline: <>Engineered for<br />unmatched flow</>,
    subtext: 'Delivering high-durability plumbing solutions designed for leak-free precision, flawless water delivery, and modern waste management.',
    ctaText: 'Explore Plumbing Systems',
    cardTitle: 'Plumbing & Fittings',
    cardDescription: 'Zero-leak technology engineered for seamless water delivery and long-term security.',
  };

   const footerData = {
    logo: 'https://kotharigroupindia.com/img/kothari-logo.png',
    about: 'India\'s trusted leader with over 35 years of excellence in Plumbing Pipes & Fittings, Agri Pipes & Fittings, and Micro Irrigation Systems.',
    contact: {
      address: 'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
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
        heading: 'Kothari Pipes',
        links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/KothariPipesAgri' },
      // { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesagri' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesagri/' },
    ]
      },
       {
        heading: 'Kothari Plumbing',
        links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kotharipipesplumbing/' },

      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesplumbing' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesplumbing/' },
          { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
    ]
      }
    ]
  }

const productsMegaMenu = {
  headline: 'Our Products',
  description: 'CPVC pipes, fittings and solvent cement for hot and cold water systems.',
  segments: [
    {
      name: 'Plumbing Pipes & Fittings',
      desc: 'Complete hot & cold water piping systems for residential and commercial applications.',
      categories: [
        {
          name: 'CPVC',
          products: [
            { title: 'CPVC Pipes & Fittings', url: '/cpvc/cpvc-hot-and-cold-water-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CPVC-PIPES-FITTINGS.webp', shortDesc: 'Hot & Cold Water Piping System' },
            { title: 'CPVC Solvent Cement', url: '/cpvc/cpvc-solvent-cement', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/cpvc.webp', shortDesc: 'Strong, Leak-Proof CPVC Water Joints'},
          
          ],
        },
        {
          name: 'UPVC',
          products: [
            { title: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp',shortDesc: 'Trusted Cold Water Plumbing Pipe' },
            { title: 'UPVC Solvent System', url: '/upvc/upvc-solvent-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/UPVC-solvent-cement.webp',shortDesc: 'Strong, Leak-Proof UPVC Water Joints.'},
           
          ],
        },
       
      ],
    },
    {
      name: 'Sewerage Drainage Pipes and Fittings',
      desc: 'Durable SWR, underground and sewerage drainage pipes and fittings for efficient waste and rainwater management',
      categories: [
        {
          name: 'Soil, Waste & Rainwater Pipes and Fittings',
          products: [
            { title: 'SWR (Soil, Waste & Rainwater) Piping System', url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SWR-PIPES-FITTINGS.webp',shortDesc: 'Complete Soil, Waste & Rainwater Drainage.' },
            { title: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Low-Noise-Drainage-System.webp' ,shortDesc: 'Silent-Flow Underground Drainage Pipe'},
        ],
        },
        {
          name: 'Underground Pipe and Fittings',
          products: [
            { title: 'UPVC Underground Drainage Piping System (solid wall UDS)', url: '/underground-pipe-and-fittings/upvc-underground-drainage-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UDS-PIPES-FITTINGS.webp',shortDesc:'Solid Wall Pipe for Underground Drainage.' },
            { title: 'Foamcore Underground Drainage Piping System', url: '/underground-pipe-and-fittings/foamcore-underground-drainage-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/UDS-Foamcore.webp',shortDesc: 'Lightweight Three Layer Drainage Solution.' },
            { title: 'Underground Double Wall Corrugated pipes(DWC)', url: '/underground-pipe-and-fittings/underground-double-wall-corrugated-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Underground-Double-Wall-Corrugated-pipesDWC.webp',shortDesc: 'Flexible, Durable Underground Drainage Pipe.' },
            { title: 'HDPE (Sewerage IS: 14333)', url: '/underground-pipe-and-fittings/hdpe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PE-Sewerage-Pipes-scaled.webp',shortDesc: 'Rugged Underground Sewerage Pipe.' },
            { title: 'Sub-Surface Drainage System', url: '/underground-pipe-and-fittings/sub-surface-drainage-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Sub-Surface-Drainage-System.webp',shortDesc: 'Perforated Pipe for Smart Field Drainage.' },
          ],
        }
      
      ],
    },
    {
      name: 'Cable Protection',
      desc: 'Durable DWC and conduit pipes for reliable cable protection systems.',
      categories: [
        {
          name: 'Cable Protection',
          products: [
            { title: 'DWC Pipe for Cable Protection', url: '/cable-protection/dwc-pipe-for-cable-protection', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DWC-Pipe-for-Cable-Protection.webp',shortDesc: 'Rugged Underground Cable Duct Pipe' },
            { title: 'Electric Conduit Pipes & Fittings', url: '/cable-protection/electric-conduit-pipes-and-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/vayar.png' , shortDesc: 'Fire-Safe Electrical Wire Protection.'},
              ],
        },
       
      ],
    },
     {
      name: 'Agriculture Pipes & Fittings',
      desc: 'Durable PVC, HDPE and MDPE pipes, fittings and valves for agriculture.',
      categories: [
        {
          name: 'UPVC Pressure Pipes & Fittings',
          products: [
            { title: 'Self Fit PVC Pipe', url: '/upvc-pressure-pipes-fittings/self-fit-pvc-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp',shortDesc: 'No-Drill Flexible Irrigation Pipe.' },
            { title: 'Ring Fit PVC Pipe', url: '/upvc-pressure-pipes-fittings/ring-fit-pvc-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Ringfit-pipe.webp',shortDesc: 'Leak-Proof Underground Irrigation Pipeline.'},
            { title: 'Agri PVC Moulded Fittings', url: '/upvc-pressure-pipes-fittings/agri-pvc-moulded-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/molded-fittings-Product-Page.webp' , shortDesc: 'Complete Range of Irrigation Fittings'},
            { title: 'Fabricated Fittings & Repair Coupler (Rubber Ring)', url: '/upvc-pressure-pipes-fittings/fabricated-fittings-and-repair-coupler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Fabricated-Fittings-Repair-Coupler.webp' ,shortDesc: 'Fast-Fix Irrigation Repair Fittings.'},
            { title: 'PVC Solvent Cement', url: '/upvc-pressure-pipes-fittings/pvc-solvent-cement', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PVC-Solvent-Cement-1.webp' , shortDesc: 'Strong, Leak-Proof Pipe Bonding'},
              ],
        },
        {
          name: 'PE Pipes & Fittings',
          products: [
            { title: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-PIPE-111.webp' ,shortDesc: 'Durable Multi-Grade Irrigation Pipe.'},
            { title: 'HDPE Coils', url: '/pe-pipes-and-fittings/hdpe-coils', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Coils.webp', shortDesc:'Flexible Pipe for Smooth Pumping.' },
            { title: 'HDPE Fittings', url: '/pe-pipes-and-fittings/hdpe-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Pipe-Fittings-1.webp', shortDesc: 'Reliable Fittings for Every Application.' },
            { title: 'MDPE Pipes', url: '/pe-pipes-and-fittings/compression-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/MDPE-PIPE.webp', shortDesc: 'Safe, Corrosion-Free Water Supply Pipe.'},
            { title: 'Compression Fittings', url: '/pe-pipes-and-fittings/compression-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/MDPE-Pipes-Fittings.webp' ,shortDesc: 'Leak-Proof Water & Gas Fittings.'},
            { title: 'PE Power Spray Hose Pipe (Spray Pipe)', url: '/pe-pipes-and-fittings/pe-power-spray-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PE-Power-Spray.webp' , shortDesc: 'Chemical-Resistant Precision Spray Pipe.' },
            { title: 'LD Krishi Pipe (Lay Flat Tubes)', url: '/pe-pipes-and-fittings/ld-krishi-pipe-lay-flat-tubes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/LD-Krishi.webp' , shortDesc: 'Lightweight Pipe for Field Water Delivery.' },
              ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Single & Double Union PVC Ball Valve', url: '/valves/single-and-double-union-pvc-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',shortDesc: 'Easy-Maintenance Irrigation Flow Valve.' },
            { title: 'Double Union PP Ball Valve', url: '/valves/double-union-pp-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp',shortDesc: 'Rugged, Chemical-Resistant Flow Valve.' },
            { title: 'Plain White Blue Ball Valve', url: '/valves/plain-white-blue-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp',shortDesc: 'Reliable Everyday Irrigation Valve.' },
            { title: 'Air Cum Vacuum Relief Valve', url: '/valves/air-cum-vacuum-relief-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp', shortDesc: 'Smart Pipeline Pressure Protection.' },
            { title: 'Butterfly Valve', url: '/valves/butterfly-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp',shortDesc:'Quick-Turn High-Pressure Flow Valve.' },
            { title: 'Flush Valve', url: '/valves/flush-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp', shortDesc:'Clog-Free Submain Flushing Valve.'},
              ],
        },
       
      ],
    },
    {
      name: 'Borewell Solution',
      desc: 'Reliable column, casing, ribbed and screen pipes for borewell and submersible pump applications.',
      categories: [
        {
          name: 'Column Pipes',
          products: [
            { title: 'Column Pipes', url: '/column-pipes/column-pipes-with-ss', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/coloum-pipe.webp' , shortDesc: 'Locking Column Pipe for Borewells.'},
            { title: 'PE Column Pipes For Submersible Pumps', url: '/column-pipes/pe-column-pipes-for-submersible-pumps', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp' , shortDesc: 'Flexible Column Pipe for Submersible Pumps.' },
              ],
        },
        {
          name: 'Casing Pipes',
          products: [
            { title: 'Casing Pipes', url: '/casing-pipes/casing-pipes-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CASING-PIPE.webp', shortDesc: 'Trusted Borewell Protection Pipe.' },
            { title: 'Ribbed Casing Pipe', url: '/casing-pipes/ribbed-casing-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Ribbed-Casing-Pipe.png' ,shortDesc: 'Rugged Pipe for Aggressive Groundwater.'},
            { title: 'Screen Pipe/Slotted Pipe', url: '/casing-pipes/screen-pipe-slotted-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Pipe-Slotted-Pipe-n.webp', shortDesc: 'Clean Water, Protected Pump Systems.' },
            { title: 'Casing SDR Agriculture Pipe', url: '/casing-pipes/casing-sdr-agriculture-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/sdr-blue-casing-pipes-scaled.webp' , shortDesc: 'Reliable Water from Every Depth.'},
              ],
        },
       
      ],
    },
     {
      name: 'Flexible Hose Pipes',
      desc: 'Flexible suction, garden, braided and high-pressure hose pipes for diverse applications.',
      categories: [
        {
          name: 'PVC Suction Hose Pipes',
          products: [
            { title: 'Suction Hose Pipes', url: '/pvc-suction-hose-pipes/suction-hose-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/suction-hose-pipes.webp', shortDesc: 'Heavy-Duty Suction & Delivery Hose.' },
              ],
        },
        {
          name: 'PVC Tubing/Garden Pipes',
          products: [
            { title: 'Kothari Special', url: '/pvc-tubing-garden-pipes/kothari-special', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/KOTHARI-SPECIAL-ORANGE-COLOR-2.webp',shortDesc: 'Legacy Garden Watering Hose.' },
            { title: 'Mossfree', url: '/pvc-tubing-garden-pipes/mossfree', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/MOSSFREE-BLACK-COLOUR-2.webp',shortDesc:'Anti-Moss Garden Hose Pipe.' },
            { title: 'Zebra', url: '/pvc-tubing-garden-pipes/zebra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/ZEBRA.webp' , shortDesc: 'Rugged Hose for Heavy Garden Use.'},
            { title: 'OMD', url: '/pvc-tubing-garden-pipes/omd', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/OMD-2.webp' , shortDesc: 'Everyday Garden Watering Hose.'},
            { title: '50-50', url: '/pvc-tubing-garden-pipes/kothari-garden-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/50-50.webp', shortDesc: 'Trusted Garden Hose, Every Season.' },
            { title: 'Milky', url: '/pvc-tubing-garden-pipes/milky', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Milky.webp' ,shortDesc: 'Everyday Reliable Garden Hose.'},
            { title: 'Halwa', url: '/pvc-tubing-garden-pipes/halwa', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HALWA-2.webp',shortDesc: 'Everyday Reliable Garden Hose.' },
            { title: 'CTP', url: '/pvc-tubing-garden-pipes/ctp', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CTP-2.webp' ,shortDesc: 'Flexible All-Purpose Garden Hose.'},
            { title: 'Black Zebra', url: '/pvc-tubing-garden-pipes/black-zebra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Black-garden.webp', shortDesc:'Safe, Low-Migration Garden Hose.' },
              ],
        },
        {
          name: 'PVC Braided Hose Pipe',
          products: [
            { title: 'Braided Hose Pipe', url: '/pvc-braided-hose-pipe/braided-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Braided-hose.webp' ,shortDesc: 'High-Pressure Reinforced Hose Pipe.' },
            { title: 'Industrial Braided Hose Pipe 3 Layer', url: '/pvc-braided-hose-pipe/industrial-braided-hose-pipe-three-layer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/KOTHARI-INDUSTRIAL-BRAIDED-HOSE-PIPE-3-LAYER.webp',shortDesc: 'Rugged Reinforced Industrial Hose.' },
            { title: 'Construction Hose Pipe 3 Layer', url: '/pvc-braided-hose-pipe/construction-hose-pipe-three-layer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CONSTRUCTION-2.webp', shortDesc:'Tough Hose Built for Job Sites' },
            { title: 'High Pressure Power Spray Hose Pipe (5 Layer)', url: '/pvc-braided-hose-pipe/high-pressure-power-spray-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Power-Spray.webp', shortDesc:'Reinforced Hose for Spray Applications.' },
              ],
        },
       
      ],
    },
    
  ],
  };


const items = [
  {
    title: 'Plumbing Systems',
    description: 'Comprehensive engineering documentation and technical specifications for CPVC and UPVC piping infrastructure. Features material thermal ratings, chemical resistance matrices, precise solvent welding joint protocols, flow rate optimization charts, and hydraulic pressure loss calculations tailored for high-performance residential, commercial, and industrial plumbing installations.',
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    link: '#plumbing'
  },
  {
    title: 'Agri & Borewell',
    description: 'Extensive field deployment manuals and practical technical guides covering subterranean UPVC agricultural main lines, HDPE coil layout optimization, surge pressure protection strategies, and precise structural torque thresholds engineered for high-depth borewell column pipe systems.',
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    link: '#agri'
  },
 
];



const FEATURE_PRODUCTS = [
  {
    id: '1',
    title: 'UPVC Pipes & Fittings',
    subtitle: 'Advanced Plumbing Matrix',
    description: 'A high-durability, lead-free thermoplastic engineered for safe, bacteria-resistant, and corrosion-free drinking water systems.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp',
    category: 'Plumbing Solutions',
    link: '#',
    spec: 'Temp Tolerance: Up to 93°C',
  },
  {
    id: '2',
    title: 'CPVC Pipes & Fittings – Hot & Cold Water Piping System',
    subtitle: 'Precision Yield Technology',
    description: 'A durable, eco-friendly virgin CPVC piping solution designed for safe hot and cold drinking water systems (0°C–93°C), featuring high UV resistance, low heat loss, and self-extinguishing safety.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CPVC-PIPES-FITTINGS.webp',
    category: 'Micro Irrigation',
    link: '#',
    spec: 'Efficiency Rate: 98%',
  },
  {
    id: '3',
    title: 'SWR (Soil, Waste & Rainwater) Piping System',
    subtitle: 'Deep-Borehole Heavy Duty',
    description: 'A heavy-duty, leak-free, lead-free piping solution featuring a 10 kg/cm² push-fit rubber ring joint for maintenance-free, corrosion-resistant underground and sewer drainage.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SWR-PIPES-FITTINGS.webp',
    category: 'Agri & Submersible',
    link: '#',
    spec: 'Load Capacity: High PSI',
  },
  {
    id: '4',
    title: 'UPVC Underground Drainage Piping System (solid wall UDS)',
    description: 'A lightweight, rodent-resistant uPVC piping system featuring leak-proof rubber ring joints and high impact resistance for easy installation and durable, clog-free drainage.',
    subtitle: 'High Pressure Carrier',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UDS-PIPES-FITTINGS.webp',
    category: 'Agri Solutions',
    link: '#',
    spec: 'UV & Chemical Resistant',
  },
  {
    id: '5',
    title: 'Kothari Special Garden Hose Pipes',
    subtitle: 'Climate Control Micro-Jet',
    description: 'A flexible, anti-twist garden hose made from 100% virgin raw material, offering superior durability, weather resistance, and easy installation for all gardening needs.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/KOTHARI-SPECIAL-ORANGE-COLOR-2.webp',
    category: 'Micro Irrigation',
    link: '#',
    spec: 'Coverage: 360° Uniformity',
  },
  {
    id: '6',
    title: 'PVC Pipes',
    subtitle: 'Climate Control Micro-Jet',
    description: 'Our PVC pipes are manufactured using premium raw materials, adhering to strict industry standards, and conducting rigorous testing. They ensure reliable and efficient, leak-resistant water supply to every farm.',
    image: 'https://kotharigroupindia.com/img/productsbanner/Subsection_Banner-PVCPipes.webp',
    category: 'Micro Irrigation',
    link: '#',
    spec: 'Coverage: 360° Uniformity',
  },
];
  return (
    <>
      <HeaderDivison productsMegaMenu={PipeproductsMegaMenu} solutionsMegaMenu={pipeSolutionsMegaMenu}/>
      <HeroDivision heroData={heroData} />
      <Category tab="pipes"/>
      <FeaturedProducts products={FEATURE_PRODUCTS}/>
      {/* <WhyKothariGroup /> */}
      {/* <Impact /> */}
      <KnowledgeCentre itemData={items} />
      <NewsDivision />
      <Footer footerData={footerData}/>
    </>
  );
}

export default function PipeDivisionPage() {
  return (
    <AppShell>
      <PipeDivisionContent />
    </AppShell>
  );
}