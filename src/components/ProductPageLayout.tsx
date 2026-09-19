'use client';
import React from 'react';
import { HeaderDivison} from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { isPipeCategorySlug } from '@/lib/slug';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { IrrigationproductsMegaMenu, irrigationSolutionsMegaMenu, PipeproductsMegaMenu, pipeSolutionsMegaMenu } from '@/data/products';

export const PipefooterData = {
  logo: 'https://kotharigroupindia.com/img/kothari-logo.png',
  about: "India's trusted leader with over 35 years of excellence in Plumbing Pipes & Fittings, Agri Pipes & Fittings, and Micro Irrigation Systems.",
  contact: {
    address: 'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
    phone: '1800 120 4343',
    email: 'sales.pipe@kotharigroupindia.com',
  },
  productSegments: ['Plumbing Pipes & fittings','Agri Pipes & fittings','Micro Irrigation System','CPVC Hot & Cold Water','Submersible Column Pipes'],
  quickLinks: [ { label: 'Our Legacy', target: '/about-us' },
  { label: 'Leadership', target: '/our-management' },
  { label: 'Career', target: '/career' },
  { label: 'Sustainability', target: '/sustainability' },
  { label: 'Blogs', target: '/blogs' },
  { label: 'News & Articles', target: '/press-release' },
  {label: 'Contact Us', target: '/contact-us'},],
  certifications: ['ISO 9001 Quality System','BIS IS 15778 / IS 4985','IS 13488 Micro Irrigation','PMKSY Govt. Subsidy Certified','RoHS Lead-Free Formulation'],
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
  socialgroup:[
    { heading: 'Kothari Pipes', links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/KothariPipesAgri' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesagri' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesagri/' },
    ]},
    { heading: 'Kothari Plumbing', links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kotharipipesplumbing/' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesplumbing' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesplumbing/' },
      { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
    ]}
  ]
};

export const IrrigationfooterData = {
  logo: 'https://kotharigroupindia.com/img/kothari-logo.png',
  about: 'For over four decades, Kothari Group has empowered farmers and builders with water-wise micro irrigation systems, agri pipes and premium plumbing solutions across India.',
  contact: {
    address: 'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
    phone: '1800 120 4343',
    email: 'sales.irrigation@kotharigroupindia.com',
  },
  productSegments: ['Drip Irrigation Systems','Sprinkler Irrigation','Filters & Fertigation','Crop Based Solutions','Accessories & Fittings'],
  quickLinks: [ { label: 'Our Legacy', target: '/about-us' },
  { label: 'Leadership', target: '/our-management' },
  { label: 'Career', target: '/career' },
  { label: 'Sustainability', target: '/sustainability' },
  { label: 'Blogs', target: '/blogs' },
  { label: 'News & Articles', target: '/press-release' },
  {label: 'Contact Us', target: '/contact-us'},],
  certifications: ['ISO 9001 Quality System','BIS IS 15778 / IS 4985','IS 13488 Micro Irrigation','PMKSY Govt. Subsidy Certified','RoHS Lead-Free Formulation'],
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
  socialgroup:[
    { links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kothariirrigation/' },
      { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Va6OjqKA89MhSFoEY32l' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@KothariIrrigation' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kothariirrigation_/' },
    ]}
  ]
};

// export const PipeproductsMegaMenu = {
//   headline: 'Our Products',
//   description: 'CPVC pipes, fittings and solvent cement for hot and cold water systems.',
//   segments: [
//     {
//       name: 'Plumbing Pipes & Fittings',
//       desc: 'Complete hot & cold water piping systems for residential and commercial applications.',
//       categories: [
//         {
//           name: 'CPVC',
//           products: [
//             { title: 'CPVC Pipes & Fittings', url: '/cpvc/cpvc-hot-and-cold-water-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CPVC-PIPES-FITTINGS.webp', shortDesc: 'Hot & Cold Water Piping System' },
//             { title: 'CPVC Solvent Cement', url: '/cpvc/cpvc-solvent-cement', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/cpvc.webp', shortDesc: 'Strong, Leak-Proof CPVC Water Joints'},
          
//           ],
//         },
//         {
//           name: 'UPVC',
//           products: [
//             { title: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp',shortDesc: 'Trusted Cold Water Plumbing Pipe' },
//             { title: 'UPVC Solvent System', url: '/upvc/upvc-solvent-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/UPVC-solvent-cement.webp',shortDesc: 'Strong, Leak-Proof UPVC Water Joints.'},
           
//           ],
//         },
       
//       ],
//     },
//     {
//       name: 'Sewerage Drainage Pipes and Fittings',
//       desc: 'Durable SWR, underground and sewerage drainage pipes and fittings for efficient waste and rainwater management',
//       categories: [
//         {
//           name: 'Soil, Waste & Rainwater Pipes and Fittings',
//           products: [
//             { title: 'SWR (Soil, Waste & Rainwater) Piping System', url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SWR-PIPES-FITTINGS.webp',shortDesc: 'Complete Soil, Waste & Rainwater Drainage.' },
//             { title: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Low-Noise-Drainage-System.webp' ,shortDesc: 'Silent-Flow Underground Drainage Pipe'},
//         ],
//         },
//         {
//           name: 'Underground Pipe and Fittings',
//           products: [
//             { title: 'UPVC Underground Drainage Piping System (solid wall UDS)', url: '/underground-pipe-and-fittings/upvc-underground-drainage-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UDS-PIPES-FITTINGS.webp',shortDesc:'Solid Wall Pipe for Underground Drainage.' },
//             { title: 'Foamcore Underground Drainage Piping System', url: '/underground-pipe-and-fittings/foamcore-underground-drainage-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/UDS-Foamcore.webp',shortDesc: 'Lightweight Three Layer Drainage Solution.' },
//             { title: 'Underground Double Wall Corrugated pipes(DWC)', url: '/underground-pipe-and-fittings/underground-double-wall-corrugated-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Underground-Double-Wall-Corrugated-pipesDWC.webp',shortDesc: 'Flexible, Durable Underground Drainage Pipe.' },
//             { title: 'HDPE (Sewerage IS: 14333)', url: '/underground-pipe-and-fittings/hdpe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PE-Sewerage-Pipes-scaled.webp',shortDesc: 'Rugged Underground Sewerage Pipe.' },
//             { title: 'Sub-Surface Drainage System', url: '/underground-pipe-and-fittings/sub-surface-drainage-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Sub-Surface-Drainage-System.webp',shortDesc: 'Perforated Pipe for Smart Field Drainage.' },
//           ],
//         }
      
//       ],
//     },
//     {
//       name: 'Cable Protection',
//       desc: 'Durable DWC and conduit pipes for reliable cable protection systems.',
//       categories: [
//         {
//           name: 'Cable Protection',
//           products: [
//             { title: 'DWC Pipe for Cable Protection', url: '/cable-protection/dwc-pipe-for-cable-protection', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DWC-Pipe-for-Cable-Protection.webp',shortDesc: 'Rugged Underground Cable Duct Pipe' },
//             { title: 'Electric Conduit Pipes & Fittings', url: '/cable-protection/electric-conduit-pipes-and-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/vayar.png' , shortDesc: 'Fire-Safe Electrical Wire Protection.'},
//               ],
//         },
       
//       ],
//     },
//      {
//       name: 'Agriculture Pipes & Fittings',
//       desc: 'Durable PVC, HDPE and MDPE pipes, fittings and valves for agriculture.',
//       categories: [
//         {
//           name: 'UPVC Pressure Pipes & Fittings',
//           products: [
//             { title: 'Self Fit PVC Pipe', url: '/upvc-pressure-pipes-fittings/self-fit-pvc-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp',shortDesc: 'No-Drill Flexible Irrigation Pipe.' },
//             { title: 'Ring Fit PVC Pipe', url: '/upvc-pressure-pipes-fittings/ring-fit-pvc-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Ringfit-pipe.webp',shortDesc: 'Leak-Proof Underground Irrigation Pipeline.'},
//             { title: 'Agri PVC Moulded Fittings', url: '/upvc-pressure-pipes-fittings/agri-pvc-moulded-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/molded-fittings-Product-Page.webp' , shortDesc: 'Complete Range of Irrigation Fittings'},
//             { title: 'Fabricated Fittings & Repair Coupler (Rubber Ring)', url: '/upvc-pressure-pipes-fittings/fabricated-fittings-and-repair-coupler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Fabricated-Fittings-Repair-Coupler.webp' ,shortDesc: 'Fast-Fix Irrigation Repair Fittings.'},
//             { title: 'PVC Solvent Cement', url: '/upvc-pressure-pipes-fittings/pvc-solvent-cement', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PVC-Solvent-Cement-1.webp' , shortDesc: 'Strong, Leak-Proof Pipe Bonding'},
//               ],
//         },
//         {
//           name: 'PE Pipes & Fittings',
//           products: [
//             { title: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-PIPE-111.webp' ,shortDesc: 'Durable Multi-Grade Irrigation Pipe.'},
//             { title: 'HDPE Coils', url: '/pe-pipes-and-fittings/hdpe-coils', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Coils.webp', shortDesc:'Flexible Pipe for Smooth Pumping.' },
//             { title: 'HDPE Fittings', url: '/pe-pipes-and-fittings/hdpe-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Pipe-Fittings-1.webp', shortDesc: 'Reliable Fittings for Every Application.' },
//             { title: 'MDPE Pipes', url: '/pe-pipes-and-fittings/compression-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/MDPE-PIPE.webp', shortDesc: 'Safe, Corrosion-Free Water Supply Pipe.'},
//             { title: 'Compression Fittings', url: '/pe-pipes-and-fittings/compression-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/MDPE-Pipes-Fittings.webp' ,shortDesc: 'Leak-Proof Water & Gas Fittings.'},
//             { title: 'PE Power Spray Hose Pipe (Spray Pipe)', url: '/pe-pipes-and-fittings/pe-power-spray-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PE-Power-Spray.webp' , shortDesc: 'Chemical-Resistant Precision Spray Pipe.' },
//             { title: 'LD Krishi Pipe (Lay Flat Tubes)', url: '/pe-pipes-and-fittings/ld-krishi-pipe-lay-flat-tubes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/LD-Krishi.webp' , shortDesc: 'Lightweight Pipe for Field Water Delivery.' },
//               ],
//         },
//         {
//           name: 'Valves',
//           products: [
//             { title: 'Single & Double Union PVC Ball Valve', url: '/valves/single-and-double-union-pvc-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',shortDesc: 'Easy-Maintenance Irrigation Flow Valve.' },
//             { title: 'Double Union PP Ball Valve', url: '/valves/double-union-pp-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp',shortDesc: 'Rugged, Chemical-Resistant Flow Valve.' },
//             { title: 'Plain White Blue Ball Valve', url: '/valves/plain-white-blue-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp',shortDesc: 'Reliable Everyday Irrigation Valve.' },
//             { title: 'Air Cum Vacuum Relief Valve', url: '/valves/air-cum-vacuum-relief-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp', shortDesc: 'Smart Pipeline Pressure Protection.' },
//             { title: 'Butterfly Valve', url: '/valves/butterfly-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp',shortDesc:'Quick-Turn High-Pressure Flow Valve.' },
//             { title: 'Flush Valve', url: '/valves/flush-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp', shortDesc:'Clog-Free Submain Flushing Valve.'},
//               ],
//         },
       
//       ],
//     },
//     {
//       name: 'Borewell Solution',
//       desc: 'Reliable column, casing, ribbed and screen pipes for borewell and submersible pump applications.',
//       categories: [
//         {
//           name: 'Column Pipes',
//           products: [
//             { title: 'Column Pipes', url: '/column-pipes/column-pipes-with-ss', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/coloum-pipe.webp' , shortDesc: 'Locking Column Pipe for Borewells.'},
//             { title: 'PE Column Pipes For Submersible Pumps', url: '/column-pipes/pe-column-pipes-for-submersible-pumps', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp' , shortDesc: 'Flexible Column Pipe for Submersible Pumps.' },
//               ],
//         },
//         {
//           name: 'Casing Pipes',
//           products: [
//             { title: 'Casing Pipes', url: '/casing-pipes/casing-pipes-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CASING-PIPE.webp', shortDesc: 'Trusted Borewell Protection Pipe.' },
//             { title: 'Ribbed Casing Pipe', url: '/casing-pipes/ribbed-casing-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Ribbed-Casing-Pipe.png' ,shortDesc: 'Rugged Pipe for Aggressive Groundwater.'},
//             { title: 'Screen Pipe/Slotted Pipe', url: '/casing-pipes/screen-pipe-slotted-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Pipe-Slotted-Pipe-n.webp', shortDesc: 'Clean Water, Protected Pump Systems.' },
//             { title: 'Casing SDR Agriculture Pipe', url: '/casing-pipes/casing-sdr-agriculture-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/sdr-blue-casing-pipes-scaled.webp' , shortDesc: 'Reliable Water from Every Depth.'},
//               ],
//         },
       
//       ],
//     },
//      {
//       name: 'Flexible Hose Pipes',
//       desc: 'Flexible suction, garden, braided and high-pressure hose pipes for diverse applications.',
//       categories: [
//         {
//           name: 'PVC Suction Hose Pipes',
//           products: [
//             { title: 'Suction Hose Pipes', url: '/pvc-suction-hose-pipes/suction-hose-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/suction-hose-pipes.webp', shortDesc: 'Heavy-Duty Suction & Delivery Hose.' },
//               ],
//         },
//         {
//           name: 'PVC Tubing/Garden Pipes',
//           products: [
//             { title: 'Kothari Special', url: '/pvc-tubing-garden-pipes/kothari-special', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/KOTHARI-SPECIAL-ORANGE-COLOR-2.webp',shortDesc: 'Legacy Garden Watering Hose.' },
//             { title: 'Mossfree', url: '/pvc-tubing-garden-pipes/mossfree', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/MOSSFREE-BLACK-COLOUR-2.webp',shortDesc:'Anti-Moss Garden Hose Pipe.' },
//             { title: 'Zebra', url: '/pvc-tubing-garden-pipes/zebra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/ZEBRA.webp' , shortDesc: 'Rugged Hose for Heavy Garden Use.'},
//             { title: 'OMD', url: '/pvc-tubing-garden-pipes/omd', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/OMD-2.webp' , shortDesc: 'Everyday Garden Watering Hose.'},
//             { title: '50-50', url: '/pvc-tubing-garden-pipes/kothari-garden-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/50-50.webp', shortDesc: 'Trusted Garden Hose, Every Season.' },
//             { title: 'Milky', url: '/pvc-tubing-garden-pipes/milky', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Milky.webp' ,shortDesc: 'Everyday Reliable Garden Hose.'},
//             { title: 'Halwa', url: '/pvc-tubing-garden-pipes/halwa', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HALWA-2.webp',shortDesc: 'Everyday Reliable Garden Hose.' },
//             { title: 'CTP', url: '/pvc-tubing-garden-pipes/ctp', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CTP-2.webp' ,shortDesc: 'Flexible All-Purpose Garden Hose.'},
//             { title: 'Black Zebra', url: '/pvc-tubing-garden-pipes/black-zebra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Black-garden.webp', shortDesc:'Safe, Low-Migration Garden Hose.' },
//               ],
//         },
//         {
//           name: 'PVC Braided Hose Pipe',
//           products: [
//             { title: 'Braided Hose Pipe', url: '/pvc-braided-hose-pipe/braided-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Braided-hose.webp' ,shortDesc: 'High-Pressure Reinforced Hose Pipe.' },
//             { title: 'Industrial Braided Hose Pipe 3 Layer', url: '/pvc-braided-hose-pipe/industrial-braided-hose-pipe-three-layer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/KOTHARI-INDUSTRIAL-BRAIDED-HOSE-PIPE-3-LAYER.webp',shortDesc: 'Rugged Reinforced Industrial Hose.' },
//             { title: 'Construction Hose Pipe 3 Layer', url: '/pvc-braided-hose-pipe/construction-hose-pipe-three-layer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CONSTRUCTION-2.webp', shortDesc:'Tough Hose Built for Job Sites' },
//             { title: 'High Pressure Power Spray Hose Pipe (5 Layer)', url: '/pvc-braided-hose-pipe/high-pressure-power-spray-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Power-Spray.webp', shortDesc:'Reinforced Hose for Spray Applications.' },
//               ],
//         },
       
//       ],
//     },
    
//   ],
//   };

// export const IrrigationproductsMegaMenu = {
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

export default function ProductPageLayout({ catSlug, children }: { catSlug: string; children: React.ReactNode }) {
  const isPipe = isPipeCategorySlug(catSlug);
  const megaMenu = isPipe ? PipeproductsMegaMenu : IrrigationproductsMegaMenu;
  const footerData = isPipe ? PipefooterData : IrrigationfooterData;
  const solutionsMenu = isPipe ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu;
  return (
    <>
      <HeaderDivison solid productsMegaMenu={megaMenu} solutionsMegaMenu={solutionsMenu} />
      {children}
      <Footer footerData={footerData} />
    </>
  );
}
