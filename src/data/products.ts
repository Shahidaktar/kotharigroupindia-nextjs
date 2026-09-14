import { ProductItem } from '@/lib/types';

export const productsData: ProductItem[] = [
  // SEGMENT 1: PLUMBING PIPES & FITTINGS
  {
    id: 'prod-kothari-cpvc',
    name: 'Kothari CPVC Hot & Cold Water Plumbing System',
    category: 'Plumbing Pipes & fittings',
    shortDescription: 'High-temperature Chlorinated Polyvinyl Chloride pipes and fittings designed for hot and cold potable water up to 93°C.',
    fullDescription: 'Kothari CPVC Plumbing Systems are engineered using advanced molecular chlorination technology. Designed for long-lasting, leak-free hot and cold water transport in residential and commercial buildings across India. 100% lead-free, corrosion resistant, and compliant with IS 15778 and ASTM F441 standards.',
    keyFeatures: [
      'Operates safely up to 93°C (200°F)',
      '100% lead-free and potable water certified',
      'Smooth inner wall prevents scaling and biofilm',
      'High thermal efficiency prevents heat loss',
      'Simple one-step solvent cement installation'
    ],
    specs: {
      diameterRange: '15mm to 100mm (1/2" to 4")',
      pressureRating: 'SDR 11 (28.1 kg/cm²) & SDR 13.5 (21.8 kg/cm²)',
      temperatureRange: '0°C to +93°C',
      standardLength: '3.0 Meters / 5.0 Meters',
      joiningMethod: 'CPVC Solvent Cement Welding',
      materialGrade: 'ASTM F441 / ASTM D2846 Class 23447',
      certifications: ['IS 15778', 'ISO 9001:2015', 'BIS Certified', 'RoHS Lead-Free']
    },
    applications: ['Residential Apartments', 'Independent Villas', 'Hospitals & Hotels', 'Commercial Plumbing'],
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
    cadAvailable: true,
    featured: true,
    divisionName: 'Plumbing Division',
    subCategory: 'CPVC Systems',
    composition: 'Manufactured from premium Chlorinated Polyvinyl Chloride (CPVC) compound with advanced molecular chlorination technology, ensuring 100% lead-free potable water transport.',
    manufacturingStandard: 'IS 15778:2013 / ASTM F441',
    pipeStandardsTable: [
      { sizeRange: 'SN 2 - 160 to 315', standard: 'IS : 15328 : 2003', endConnection: 'Elastomeric Sealing Ring & Solvent Joint' },
      { sizeRange: 'SN 4 - 125 to 250', standard: 'IS : 15328 : 2003', endConnection: 'Elastomeric Sealing Ring & Solvent Joint' },
      { sizeRange: 'SN 8 - 110 to 250', standard: 'IS : 15328 : 2003', endConnection: 'Elastomeric Sealing Ring & Solvent Joint' },

    ],
    dimensionsTable: [
  { size: 63, minOuterDia: 63.00, maxOuterDia: 63.30, sn2Min: '-', sn2Max: '-', sn4Min: '-', sn4Max: '-', sn8Min: 2.70, sn8Max: 3.10 },
  { size: 75, minOuterDia: 75.00, maxOuterDia: 75.30, sn2Min: '-', sn2Max: '-', sn4Min: '-', sn4Max: '-', sn8Min: 2.80, sn8Max: 3.30 },
  { size: 90, minOuterDia: 90.00, maxOuterDia: 90.30, sn2Min: '-', sn2Max: '-', sn4Min: '-', sn4Max: '-', sn8Min: 2.90, sn8Max: 3.40 },
  { size: 110, minOuterDia: 110.00, maxOuterDia: 110.40, sn2Min: '-', sn2Max: '-', sn4Min: '-', sn4Max: '-', sn8Min: 3.20, sn8Max: 3.70 },
  { size: 125, minOuterDia: 125.00, maxOuterDia: 125.40, sn2Min: '-', sn2Max: '-', sn4Min: 3.20, sn4Max: 3.70, sn8Min: 3.70, sn8Max: 4.40 },
  { size: 160, minOuterDia: 160.00, maxOuterDia: 160.50, sn2Min: 3.20, sn2Max: 3.70, sn4Min: 4.00, sn4Max: 4.60, sn8Min: 4.70, sn8Max: 5.40 },
  { size: 200, minOuterDia: 200.00, maxOuterDia: 200.60, sn2Min: 3.90, sn2Max: 4.50, sn4Min: 4.90, sn4Max: 5.60, sn8Min: 5.90, sn8Max: 6.70 },
  { size: 250, minOuterDia: 250.00, maxOuterDia: 250.80, sn2Min: 4.90, sn2Max: 5.60, sn4Min: 6.20, sn4Max: 7.00, sn8Min: 7.30, sn8Max: 8.30 },
  { size: 315, minOuterDia: 315.00, maxOuterDia: 316.00, sn2Min: 6.20, sn2Max: 7.00, sn4Min: 7.70, sn4Max: 8.70, sn8Min: 9.20, sn8Max: 10.40 },
  { size: 400, minOuterDia: 400.00, maxOuterDia: 401.20, sn2Min: 7.90, sn2Max: 8.90, sn4Min: 9.80, sn4Max: 11.00, sn8Min: 11.70, sn8Max: 13.10 }
],
    fittingsList: [
      { id: 'cpvc-coupler', name: 'CPVC Coupler Socket', sizes: '15mm - 50mm', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp' },
      { id: 'cpvc-elbow', name: 'CPVC Elbow 90°', sizes: '15mm - 50mm', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp' },
      { id: 'cpvc-tee', name: 'CPVC Equal Tee', sizes: '15mm - 50mm', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp' },
      { id: 'cpvc-reducer', name: 'CPVC Reducer Bush', sizes: '20mm x 15mm - 50mm x 40mm', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp' },
      { id: 'cpvc-ball-valve', name: 'CPVC Ball Valve', sizes: '15mm - 50mm', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp' }
    ]
  },
  {
    id: 'prod-kothari-upvc-plumb',
    name: 'Kothari UPVC Cold Water Plumbing Pipes & Fittings',
    category: 'Plumbing Pipes & fittings',
    shortDescription: 'Heavy-duty lead-free UPVC pipes for cold water plumbing lines in modern construction.',
    fullDescription: 'Kothari UPVC Cold Water Piping Systems offer an economical, durable, and highly reliable alternative to GI pipes. Manufactured according to ASTM D1785 Schedule 40 & 80 standards, these pipes ensure zero corrosion, low friction loss, and seamless solvent weld joints.',
    keyFeatures: [
      'Schedule 40 & Schedule 80 heavy duty wall thickness',
      'Lead-free food grade virgin UPVC compound',
      'UV protected for outdoor exposure',
      'Non-conductive and chemical resistant',
      '50+ years expected service lifetime'
    ],
    specs: {
      diameterRange: '15mm to 150mm (1/2" to 6")',
      pressureRating: 'Schedule 40 & Schedule 80 (Up to 28 Bar)',
      temperatureRange: '-10°C to +60°C',
      standardLength: '3.0m & 6.0m Plain / Socketed',
      joiningMethod: 'Heavy Duty UPVC Solvent Cement',
      materialGrade: 'ASTM D1785 / ASTM D2467',
      certifications: ['BIS Certified', 'ISO 9001:2015', 'NSF Grade Approved']
    },
    applications: ['Cold Potable Water Distribution', 'Commercial Towers', 'Industrial Utility Lines', 'Plumbing Risers'],
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-swr',
    name: 'Kothari SWR Soil, Waste & Rainwater Drainage System',
    category: 'Plumbing Pipes & fittings',
    shortDescription: 'High-impact UV-stabilized SWR pipes and fittings with rubber ring and solvent joint options.',
    fullDescription: 'Kothari SWR Systems are engineered for quick, hygienic, and leak-proof discharge of soil, waste, and rainwater in multi-story residential and commercial complexes. Designed in accordance with IS 13592 standards, available in Type A and Type B classes.',
    keyFeatures: [
      'High impact resistance under heavy flow conditions',
      'Rubber ring joint for rapid expansion absorption',
      'UV stabilized for long exposure on building facades',
      'Smooth hydraulic bore prevents blockage and sludge build-up',
      'Complete range of traps, elbows, and single/double tees'
    ],
    specs: {
      diameterRange: '75mm, 90mm, 110mm, 160mm',
      pressureRating: 'Gravity Drainage Non-Pressure',
      temperatureRange: 'Up to 90°C short-term discharge',
      standardLength: '2m, 3m, 6m Socketed',
      joiningMethod: 'Rubber Ring Push-Fit / Solvent Weld',
      materialGrade: 'IS 13592 Type A & Type B UPVC Compound',
      certifications: ['BIS IS 13592', 'ISO 9001:2015', 'ISO 14001']
    },
    applications: ['Soil & Waste Discharge', 'Rainwater Harvesting Lines', 'High-Rise Drainage Risers', 'Terrace Outlets'],
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    cadAvailable: true,
    featured: true
  },

  // SEGMENT 2: AGRI PIPES & FITTINGS
  {
    id: 'prod-kothari-agri-pvc',
    name: 'Kothari Rigid UPVC Agricultural Pressure Pipes',
    category: 'Agri Pipes & fittings',
    shortDescription: 'High pressure agricultural UPVC pipes engineered for farm irrigation networks and water supply.',
    fullDescription: 'Kothari Agricultural UPVC Pipes are specifically manufactured to meet the rigorous demands of Indian farming environments. Featuring high impact strength, low friction head loss, and weather resistance, ensuring uninterrupted water delivery from pumps to fields across 23+ states.',
    keyFeatures: [
      'Manufactured as per IS 4985 standard',
      'Available in Class 1 to Class 5 pressure ratings',
      'High resistance to farm chemicals and fertilizers',
      'Smooth inner wall optimizes pump efficiency and fuel savings',
      'Quick socket and spigot elastomeric ring joining option'
    ],
    specs: {
      diameterRange: '20mm to 315mm (3/4" to 12")',
      pressureRating: '2.5 kg/cm² to 12.5 kg/cm² (PN 2.5 to PN 12.5)',
      temperatureRange: '-10°C to +60°C',
      standardLength: '6.0 Meters Plain / Socketed / Elastomeric Ring',
      joiningMethod: 'Solvent Cement / Elastomeric Rubber Ring Joint',
      materialGrade: 'IS 4985 Virgin UPVC Compound',
      certifications: ['BIS IS 4985', 'ISO 9001:2015', 'Agri Tech Certified']
    },
    applications: ['Farm Water Distribution', 'Lift Irrigation Schemes', 'Submersible Pump Lines', 'Canal Water Conveyance'],
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-hdpe-agri',
    name: 'Kothari HDPE High-Density Agricultural Coil Pipes',
    category: 'Agri Pipes & fittings',
    shortDescription: 'Flexible, crush-resistant PE-80 and PE-100 HDPE pipes for rugged terrain agricultural irrigation.',
    fullDescription: 'Kothari HDPE Agricultural Pipes provide outstanding flexibility, high toughness, and continuous long coil lengths. Engineered to withstand ground movement, rocky soil conditions, and high hydraulic surges, offering zero leakage through thermal butt fusion or quick coupler joints.',
    keyFeatures: [
      'High resistance to ground stress and rocky soil',
      'Coil lengths up to 500 meters reduce joint counts',
      'Thermal butt fusion ensures 100% leak-proof joints',
      'UV stabilized resin prevents sun degradation',
      'Saves pump power through low friction factor'
    ],
    specs: {
      diameterRange: '20mm to 200mm in Coils & Straight Bars',
      pressureRating: 'PN 2.5, PN 4, PN 6, PN 10, PN 12.5',
      temperatureRange: '-40°C to +60°C',
      standardLength: 'Coils 100m to 500m / 6m-12m Straight Bars',
      joiningMethod: 'Butt Fusion / Quick Compression Fittings / Electrofusion',
      materialGrade: 'PE 80 & PE 100 Resin as per IS 4984',
      certifications: ['BIS IS 4984', 'ISO 4427', 'ISO 9001:2015']
    },
    applications: ['Hill Terrain Water Supply', 'Drip & Sprinkler Mainlines', 'Borewell Delivery Mains', 'Flood Irrigation Feeder Lines'],
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-column-pipe',
    name: 'Kothari Submersible Borewell Column Pipes',
    category: 'Agri Pipes & fittings',
    shortDescription: 'Square-threaded thick-wall column pipes with rubber seals for deep borewell submersible pumps.',
    fullDescription: 'Kothari Submersible Column Pipes are designed to hold heavy pump loads and column weight in deep underground borewells. Engineered with high-torque precision square threads and synthetic rubber seals to prevent back-leakage, wire drawing, and vibration unraveling.',
    keyFeatures: [
      'Precision square-threaded coupler joints with lock system',
      '100% corrosion proof replacement for metal GI column pipes',
      'Thickened pipe wall supports heavy pump torque and water column',
      'EPDM rubber ring prevents internal pressure drops',
      'Smooth interior wall increases water yield per hour'
    ],
    specs: {
      diameterRange: '25mm to 100mm (1" to 4")',
      pressureRating: 'Medium, Heavy & Super Heavy Class (Up to 35 kg/cm²)',
      temperatureRange: '0°C to +60°C',
      standardLength: '3.0 Meters per pipe length',
      joiningMethod: 'Precision Threaded Coupler with EPDM Seal Ring',
      materialGrade: 'High Tensile UPVC Compound',
      certifications: ['ISO 9001:2015', 'BIS Standards Approved', 'Lab Tested']
    },
    applications: ['Deep Borewell Submersible Pumps', 'Agricultural Well Extraction', 'Industrial Groundwater Pumping'],
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    cadAvailable: true,
    featured: true
  },

  // SEGMENT 3: MICRO IRRIGATION SYSTEM
  {
    id: 'prod-kothari-drip-inline',
    name: 'Kothari Premium Inline Drip Irrigation System',
    category: 'Micro Irrigation System',
    shortDescription: 'Precision labyrinth drip lines with pressure-compensating inline emitters for high uniform crop yield.',
    fullDescription: 'Kothari Inline Drip Systems feature seamlessly extruded polyethylene tubing integrated with state-of-the-art labyrinth emitters. Designed for close-spaced cash crops like sugarcane, cotton, banana, vegetables, and orchards. Saves up to 60% water while increasing yield by up to 45%.',
    keyFeatures: [
      'Advanced 3D turbulent labyrinth emitter resists clogging',
      'Pressure Compensating (PC) and Non-PC options',
      'Uniform discharge rate across long lateral lengths',
      'High UV resistance and chemical fertigation safety',
      'Eligible for government micro irrigation subsidy schemes'
    ],
    specs: {
      diameterRange: '12mm, 16mm, 20mm outer diameter',
      pressureRating: '1.0 kg/cm² to 3.0 kg/cm² operating range',
      temperatureRange: '0°C to +55°C',
      standardLength: 'Coils of 400m, 500m & 1000m',
      joiningMethod: 'Barbed Fittings / Joiners / Take-Off Connectors',
      materialGrade: 'Virgin Linear Low Density Polyethylene (LLDPE)',
      certifications: ['IS 13488', 'BIS Approved', 'PMKSY Scheme Approved']
    },
    applications: ['Sugarcane & Cotton Fields', 'Horticulture & Vineyards', 'Fruit Orchards', 'Greenhouses & Polyhouses'],
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-sprinkler',
    name: 'Kothari Agricultural Sprinkler Irrigation System',
    category: 'Micro Irrigation System',
    shortDescription: 'Quick-latch portable HDPE sprinkler pipes and brass nozzle spray heads for overhead crop coverage.',
    fullDescription: 'Kothari Sprinkler Irrigation Systems mimic natural rainfall for uniform water distribution across wheat, pulses, groundnut, and potato crops. Features lightweight quick-latch HDPE pipes, foot battens, and durable dual-nozzle brass or plastic rotary impact sprinklers.',
    keyFeatures: [
      'Quick-action latch coupling mechanism for easy field assembly',
      'Uniform droplet distribution protects delicate seedlings and soil structure',
      '360° rotary impact sprinklers with adjustable throw radius',
      'Corrosion free LLDPE/HDPE pipe construction',
      'Reduces labor cost and water wastage compared to flood irrigation'
    ],
    specs: {
      diameterRange: '63mm, 75mm, 90mm, 110mm outer diameter',
      pressureRating: '2.5 kg/cm² & 3.2 kg/cm² operating class',
      temperatureRange: '-10°C to +55°C',
      standardLength: '6.0 Meters per sprinkler pipe section',
      joiningMethod: 'Quick Latch Clamp Mechanism with C-Ring Seal',
      materialGrade: 'IS 14151 Part 1 & Part 2 HDPE Compound',
      certifications: ['IS 14151', 'BIS Certified', 'Government Subsidy Approved']
    },
    applications: ['Wheat & Cereal Farming', 'Groundnut & Pulses', 'Tea & Coffee Plantations', 'Dust Suppression'],
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-micro-filter',
    name: 'Kothari Hydro-Cyclone & Screen Fertigation Filters',
    category: 'Micro Irrigation System',
    shortDescription: 'Heavy-duty filtration stations and Venturi fertilizer injectors for clogging-free drip networks.',
    fullDescription: 'Kothari Filtration Systems protect drip and micro sprinkler emitters from sand, silt, algae, and organic debris. Combining Hydro-Cyclone Sand Separators, Disc Filters, and Screen Filters with corrosion-proof polymer housings and easy flush drain valves.',
    keyFeatures: [
      'High filtration efficiency (120 Mesh / 130 Micron standard)',
      'Hydro-cyclone separator removes coarse sand particles without pressure drop',
      'Chemical and fertilizer resistant polymer body',
      'Quick clamp opening for hassle-free filter washing',
      'Includes Venturi injector for accurate fertigation and nutrient dosing'
    ],
    specs: {
      diameterRange: '2" (50mm), 2.5" (65mm), 3" (75mm), 4" (100mm)',
      pressureRating: 'Up to 6.0 kg/cm² static pressure',
      temperatureRange: '0°C to +60°C',
      standardLength: 'Flanged & Threaded Inlet/Outlet Options',
      joiningMethod: 'Quick Clamp / BSP Male Threads',
      materialGrade: 'Reinforced Polypropylene & Polycarbonate Housing',
      certifications: ['ISO 9001:2015', 'BIS Approved', 'Lab Tested']
    },
    applications: ['Drip Head Control Stations', 'Borewell Sand Separation', 'Liquid Fertilizer Injection', 'Canal Water Filtration'],
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    cadAvailable: true,
    featured: true
  }
];




export const PipeproductsMegaMenu = {
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
            { title: 'MDPE Pipes', url: '/pe-pipes-and-fittings/mdpe-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/MDPE-PIPE.webp', shortDesc: 'Safe, Corrosion-Free Water Supply Pipe.'},
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
            // { title: 'Halwa', url: '/pvc-tubing-garden-pipes/halwa', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HALWA-2.webp',shortDesc: 'Everyday Reliable Garden Hose.' },
            // { title: 'CTP', url: '/pvc-tubing-garden-pipes/ctp', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CTP-2.webp' ,shortDesc: 'Flexible All-Purpose Garden Hose.'},
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

export const IrrigationproductsMegaMenu = {
  headline: 'Our Products',
  description: 'CPVC pipes, fittings and solvent cement for hot and cold water systems.',
  segments: [
    {
      name: 'Drip Irrigation System',
      desc: 'Complete drip irrigation solutions with driplines, drippers, polytubes, fittings, accessories and valves.',
      categories: [
        {
          name: 'Dripline',
          products: [
            { title: 'Dripline K-Gol NPC', url: '/drip-line/dripline-k-gol-npc', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-NPC.webp',shortDesc: 'Reliable Drip Line for Level Fields.' },
            { title: 'Dripline K-Gol PC', url: '/drip-line/dripline-k-gol-pc', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-PC-1.webp',shortDesc: 'Pressure-Compensated Drip Line for Slopes.' },
            { title: 'Dripline K-Lin NPC', url: '/drip-line/dripline-k-lin-npc', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-1.webp' ,shortDesc:'Uniform Drip Line for Row Crops.'},
            { title: 'Dripline K-Lin PCAS', url: '/drip-line/dripline-k-lin-pcas', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCAS-1.webp', shortDesc: 'Anti-Siphon Drip Line for Subsurface Irrigation.'},
            { title: 'Dripline K-Lin PCND', url: '/drip-line/dripline-k-lin-pcnd', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCND-1.webp',shortDesc:'No-Drain Drip Line for Greenhouses.' },
          
          ],
        },
        {
          name: 'Polyfittings & Accessories',
          products: [
            { title: 'Drip Poly Fittings', url: '/polyfittings-and-accessories/drip-poly-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIP-POLY-FITTINGS.webp',shortDesc:'Leak-Proof Fittings for Drip Systems.' },
            { title: 'Drip Winder', url: '/polyfittings-and-accessories/drip-winder', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Drip-Winder.webp' , shortDesc:'Fast, Damage-Free Drip Line Coiler.'},
           
          ],
        },
        {
          name: 'Drip Tubes (Polytube)',
          products: [
            { title: 'Polytube', url: '/drip-tubes-polytube/polytube', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/POLYTUBE.webp',shortDesc: 'Precision Tube for Drip Irrigation.' },
           
          ],
        },
        {
          name: 'Emitters (Drippers)',
          products: [
            { title: 'Turbo Dripper', url: '/emitters-drippers/turbo-dripper', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/TURBO-DRIPPER-1.webp' ,shortDesc: 'Clog-Resistant Online Drip Emitter.'},
            { title: 'PC Dripper', url: '/emitters-drippers/pc-dripper', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PC-DRIPPER.webp',shortDesc:'Pressure-Compensated Drip Emitter.' },
           
          ],
        },
        {
          name: 'Thinwall Drip Line',
          products: [
            { title: 'Thin Wall Dripline K-Super', url: '/thinwall-drip-line/thin-wall-dripline-k-super', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SUPER.webp',shortDesc: 'Durable Thin Wall Drip Line.' },
            { title: 'Thin Wall Dripline K-Smar', url: '/thinwall-drip-line/thin-wall-dripline-k-smart', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SMART.webp' , shortDesc: 'Economical Thin Wall Drip Line.'},
            { title: 'Thin Wall Dripline K-Slim', url: '/thinwall-drip-line/thin-wall-dripline-k-slim', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM-ULTRA.webp',shortDesc: 'Lightweight Thin Wall Drip Line.' },
            { title: 'Thinwall Dripline K-Slim Ultra', url: '/thinwall-drip-line/thinwall-dripline-k-slim-ultra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM.webp' , shortDesc: 'Ultra-Light Drip Line for Short Crops.'},
            { title: 'K-Smart Screen Filter', url: '/thinwall-drip-line/k-smart-screen-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/K-Smart-Screen-Filter.webp' ,shortDesc: 'Reliable Filter for Micro Irrigation.'},
            { title: 'Thinwall Drip Poly Fittings', url: '/thinwall-drip-line/thinwall-drip-poly-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/Thinwall-Drip-Accessories.webp',shortDesc:'Leak-Proof Fittings for Thinwall Systems.' },
           
          ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Single & Double Union PVC Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',shortDesc: 'Durable PVC valves ensuring effortless, leak-proof irrigation flow control.' },
            { title: 'Double Union PP Ball Valve', url: '/valves-drip-irrigation/double-union-pp-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp' ,shortDesc: 'Reliable Flow Control for Drip Systems.'},
            { title: 'Plain White Blue Ball Valve', url: '/valves-drip-irrigation/plain-white-blue-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp',shortDesc: 'Trusted Valve for Drip Irrigation.' },
            { title: 'Butterfly Valve', url: '/valves-drip-irrigation/butterfly-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp' ,shortDesc: 'Precise Flow Control Valve.'},
            { title: 'Throttle Valve', url: '/valves-drip-irrigation/throttle-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Throttle-valve.webp' ,shortDesc: 'Adjustable Flow Regulation Valve.'},
            { title: 'Air Cum Vacuum Relief Valve', url: '/valves-drip-irrigation/air-cum-vacuum-relief-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp',shortDesc: 'Smart Pipeline Pressure Protection.' },
            { title: 'Flush Valve', url: '/valves-drip-irrigation/flush-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp' ,shortDesc:'Clog-Free Submain Flushing Valve.'},
            { title: 'Check Valve (Non-Return Valve)', url: '/valves-drip-irrigation/check-valve-non-return-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Check-Valve-Non-Return-Valve.webp',shortDesc: 'Reliable Backflow Prevention Valve.' },
           
          ],
        },
        {
          name: 'Drip Agri PVC Pipes',
          products: [
            { title: 'UPVC Pipes', url: '/drip-agri-pvc-pipes/upvc-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp' ,shortDesc:'Dependable Pipe for Drip Irrigation.'},
           
          ],
        },
        {
          name: 'Drip Gravity Kits',
          products: [
            { title: 'Gravity Drip Kit', url: '/drip-gravity-kits/gravity-drip-kit', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/KOTHARI-GRAVITY-DRIP-KIT.webp',shortDesc:'Pump-Free Drip Irrigation Kit.' },
           
          ],
        },
        {
          name: 'Mulching',
          products: [
            { title: 'Mulch Films', url: '/mulching/mulch-films', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mulch.webp' ,shortDesc:'Smart Mulch for Water Conservation.'},
           
          ],
        },
       
      ],
    },
    {
      name: 'Filters & Injectors',
      desc: 'Efficient filtration and fertilizer injection solutions with filters, dosing pumps and injectors.',
      categories: [
        {
          name: 'Filters',
          products: [
            { title: 'Hydrocyclone Filter', url: '/filters/hydrocyclone-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Hydrocyclone-Filter.webp' ,shortDesc:'Sand Separator for Clean Irrigation.'},
            { title: 'Sand Filter', url: '/filters/sand-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SAND-FILTER-1.webp',shortDesc:'Fine Filtration for Drip Systems.' },
            { title: 'Screen Filter', url: '/filters/screen-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Filter.webp' ,shortDesc:'Reliable Mesh Filter for Irrigation.'},
            { title: 'Twin Screen Filter', url: '/filters/twin-screen-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Twin-Screen-Filter.webp' ,shortDesc:'High-Flow Dual Mesh Filter.'},
            { title: 'Semi Automatic Screen Filter', url: '/filters/semi-automatic-screen-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Semi-Automatic-Screen-Filter-1.webp',shortDesc:'Low-Downtime Screen Filter.' },
            { title: 'Disc Filter & Twin Disc Filter', url: '/filters/disc-filter-and-twin-disc-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Disc-Filter-Twin-Disc-Filter-1.webp' ,shortDesc: 'Precision Filter for Open Water Sources.'},
            { title: 'Mini Sigma Filter', url: '/filters/mini-sigma-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' ,shortDesc:'Compact Self-Cleaning Filter.'},
            { title: 'Filtomat Filter', url: '/filters/filtomat-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp',shortDesc:'Power-Free Automatic Filtration.' },
        ],
        },
        {
          name: 'Dosing pumps & Fertilizer Injectors',
          products: [
            { title: 'HDPE Header Manifold', url: '/dosing-pumps-and-fertilizer-injectors/hdpe-header-manifold', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Header-Manifold.webp' ,shortDesc:'Durable Manifold for Fertigation Systems.'},
            { title: 'PP Header Assembly', url: '/dosing-pumps-and-fertilizer-injectors/pp-header-assembly', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PP-Header-Assembly.webp',shortDesc:'Reliable Assembly for Filtration Systems.' },
            { title: 'Venturi Injector', url: '/dosing-pumps-and-fertilizer-injectors/venturi-injector', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Venturi-Injector.webp',shortDesc:'Efficient Fertilizer Injector.' },
            { title: 'Dosing Pump', url: '/dosing-pumps-and-fertilizer-injectors/dozing-pump', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DOZING-PUMP.webp' ,shortDesc:'Precision Fertilizer Dosing Pump.'},
          ],
        }
      
      ],
    },
    {
      name: 'Automation System',
      desc: 'Smart irrigation automation with fertigation machines, controllers, filters and control valves.',
      categories: [
        {
          name: 'Fertigation Machines',
          products: [
            { title: 'Nutrijet Fertigation Machines', url: '/fertigation-machines/nutrijet-fertigation-machines', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/NUTRIJET.webp' ,shortDesc:'Smart IoT Fertigation System.'},
              ],
        },
        {
          name: 'Controllers',
          products: [
            { title: 'Irribeat Controllers', url: '/controllers/irribeat-controllers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/IRRIBEAT.webp' ,shortDesc:'Smart Automated Irrigation Controller.'},
            { title: 'GSI (Galcon Smart Irrigation) Controller', url: '/controllers/gsi-galcon-smart-irrigation-controller', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/GSI-Galcon-Smart-Irrigation.webp',shortDesc:'Cloud-Based Smart Irrigation Controller.' },
            { title: 'Galpro Controller (AC/DC)', url: '/controllers/galpro-controller-ac-dc', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Galpro-AC-DC.webp',shortDesc:'Affordable Smart Irrigation Automation.' },
              ],
        },
        {
          name: 'Automatic Filters & Accessories',
          products: [
            { title: 'Mini Sigma Filter', url: '/automatic-filters-and-accessories/mini-sigma-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' ,shortDesc:'Compact Self-Cleaning Filter.'},
            { title: 'Filtomat Filter', url: '/automatic-filters-and-accessories/filtomat-filter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp' ,shortDesc:'Power-Free Automatic Filtration.'},
            { title: 'Solenoid Control Valve', url: '/automatic-filters-and-accessories/solenoid-control-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Solenoid-Control-Valve.webp',shortDesc:'Automated Irrigation Control Valve.' },
            { title: 'Pressure Reducing Valve', url: '/automatic-filters-and-accessories/pressure-reducing-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Reducing-Valve.webp' ,shortDesc:'Reliable Downstream Pressure Control.'},
            { title: 'Pressure Sustaining Valve', url: '/automatic-filters-and-accessories/pressure-sustaining-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Sustaining-Valve.webp',shortDesc:'Consistent Upstream Pressure Control.' },
            { title: 'Quick Pressure Relief Valve', url: '/automatic-filters-and-accessories/quick-pressure-relief-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/QUICK-PRESSURE.webp' ,shortDesc:'Fast-Acting Burst Protection Valve.'},
            { title: 'Filter Auto Backwash Valve', url: '/automatic-filters-and-accessories/filter-auto-backwash-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/FILTER-BACKWASH.png.webp',shortDesc:'Automated Filter Cleaning Valve.' },
            { title: 'Water Meter', url: '/automatic-filters-and-accessories/water-meter', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/WATER-METER.webp' ,shortDesc:'Volumetric Meter for Smart Irrigation. '},
              ],
        },
       
      ],
    },
     {
      name: 'Micro & Mini Sprinklers',
      desc: 'Efficient micro and mini sprinklers, sprayers, misters and foggers for irrigation applications.',
      categories: [
        {
          name: 'Micro Sprinklers & Assemblies',
          products: [
            { title: 'K-Mic Excel', url: '/micro-sprinklers-and-assemblies/k-mic-excel', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Excel.webp',shortDesc:'Precision Micro Sprinkler for Nurseries.' },
            { title: 'K-Mic Micro Sprinkler', url: '/micro-sprinklers-and-assemblies/k-mic-micro-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Micro-Sprinkler.webp',shortDesc:'Frost-Protection Micro Sprinkler.' },
            { title: 'K-Tuff Micro Sprinkler', url: '/micro-sprinklers-and-assemblies/k-tuff-micro-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Tuff-Micro-Sprinkler.webp' ,shortDesc:'Gentle Micro Sprinkler for Delicate Crops.'},
              ],
        },
        {
          name: 'Mini Sprinklers & Assemblies',
          products: [
            { title: 'Mini Sprinkler', url: '/mini-sprinklers-and-assemblies/mini-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png' ,shortDesc:'Uniform Sprinkler for Field Crops.'},
              ],
        },
        {
          name: 'Micro Jets & assemblies',
          products: [
            { title: 'Micro Sprayer', url: '/micro-jets-and-assemblies/micro-sprayer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/MICRO-SPRAYER.webp',shortDesc:'Precision Micro Jet for Horticulture.' },
              ],
        },
        {
          name: 'Misters & Assemblies',
          products: [
            { title: 'K-Mist', url: '/misters-and-assemblies/k-mist', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' ,shortDesc:'Cooling Mist for Greenhouses.'},
              ],
        },
        {
          name: 'Foggers & Assemblies',
          products: [
            { title: 'K-Fogger', url: '/foggers-and-assemblies/k-fogger', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' ,shortDesc:'Fine Fogging for Climate Control.'},
              ],
        },
       
      ],
    },
    {
      name: 'Sprinkler Irrigration system',
      desc: 'Complete sprinkler irrigation solutions with sprinklers, pipes, connectors, rainguns and accessories.',
      categories: [
        {
          name: 'Metal Sprinklers',
          products: [
            { title: 'Metal Sprinkler', url: '/metal-sprinkler/metal-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/METAL-SPRINKLER.webp' ,shortDesc:'Full-Circle Impact Sprinkler.'},
              ],
        },
        {
          name: 'Plastic Sprinklers',
          products: [
            { title: 'Mini Sprinkler', url: '/plastic-sprinklers/mini-sprinkler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png',shortDesc:'Uniform Sprinkler for Field Crops.' },
              ],
        },
        {
          name: 'HDPE Sprinklers Pipes (QCPE)',
          products: [
            { title: 'Sprinklers Pipes (QCPE)', url: '/hdpe-sprinkler-pipes-qcpe/sprinklers-pipes-qcpe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/QCPE-Spinklar-pipe.webp',shortDesc:'Quick-Coupling Pipe for Sprinklers.' },
              ],
        },
        {
          name: 'Sprinkler Connectors & Accessories',
          products: [
            { title: 'HDPE Pipe Sprinkler Set', url: '/sprinkler-connectors-and-accessories/hdpe-pipe-sprinkler-set', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HDPE-Pipe-Sprinkler-Set-1.webp',shortDesc:'Complete Sprinkler Irrigation Kit.' },
              ],
        },
        {
          name: 'Raingun & Accessories',
          products: [
            { title: 'Raingun and Accessories', url: '/raingun-and-accessories/raingun', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Rainguns.webp' ,shortDesc:'Wide-Coverage Irrigation Sprinkler.'},
              ],
        },
        {
          name: 'Garden & Landscape Sprinklers',
          products: [
            { title: 'Pop-up Spray Heads and Rotors', url: '/garden-and-landscape-sprinklers/pop-up-spray-heads-and-rotors', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Pop-up-spray-heads-rotors.png',shortDesc:'Uniform Spray for Landscapes & Turf.' },
            { title: 'Swing Joint', url: '/garden-and-landscape-sprinklers/swing-joint', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Swing-joint-1.png' ,shortDesc:'Flexible Connector for Pop-Up Sprinklers.'},
            { title: 'Quick Coupling Valve (QCV)', url: '/garden-and-landscape-sprinklers/quick-coupling-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Quick-Coupling-Valve-QCV.webp' ,shortDesc:'Portable Valve for Quick Connections.'},
              ],
        },
        {
          name: 'K-Eco Rain Pipes & K- Flex Submain Pipes',
          products: [
            { title: 'K-Eco Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/K-Eco-sprinkler.webp',shortDesc:'Laser-perforated flat pipe delivering uniform, filter-free irrigation coverage.' },
            { title: 'K-Flex Submain Pipes', url: '/k-eco-rain-pipes-and-k-flex-submain-pipes/k-flex-submain-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flexsubmain.webp' ,shortDesc:'Flexible Pipe for Irrigation Distribution.'},
              ],
        },
       
      ],
    },
     {
      name: 'Turnkey Projects',
      desc: 'Complete turnkey irrigation projects including PDN and CI solutions for efficient water management.',
      categories: [
        {
          name: 'Turnkey Projects',
          products: [
            { title: 'Turnkey Projects (PDN & CI)', url: '/turnkey-projects/pdn-ci', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/turnkey-projects-scaled.webp',shortDesc:'Complete Turnkey Irrigation Solutions' },
            { title: 'Turnkey Projects (Infra)', url: '/turnkey-projects/turnkey-projects-infra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp',shortDesc:'End-to-End Irrigation Infrastructure' },
              ],
        },
       
      
       
      ],
    },
    
  ],
};



export const pipeSolutionsMegaMenu = {
  category: "SOLUTIONS & SEGMENTS",
  headline: "Piping Solutions for Every Need",
  description: "Engineered piping systems for buildings, cities, farms and industry — built for flow, strength and longevity.",
  items: [
    {
      title: "Residential & Commercial Plumbing Solutions",
      url: "/solutions/residential-commercial-plumbing",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Urban Drainage & Sewerage Networks",
      url: "/solutions/urban-drainage-sewerage",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Groundwater Access Solutions",
      url: "/solutions/groundwater-access",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Farm Infrastructure Piping Solutions",
      url: "/solutions/farm-infrastructure-piping",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600&q=80",
    },
  ],
};

export const irrigationSolutionsMegaMenu = {
  category: "SOLUTIONS & SEGMENTS",
  headline: "Irrigation Solutions for Every Field",
  description: "Precision water management from greenhouse to open field — saving water, boosting yield.",
  items: [
    {
      title: "Precision Irrigation",
      url: "/solutions/precision-irrigation",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Polyhouse (Greenhouse) Irrigation",
      url: "/solutions/polyhouse-greenhouse-irrigation",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Agricultural Field Irrigation",
      url: "/solutions/agricultural-field-irrigation",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Water Management",
      url: "/solutions/water-management",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80",
    },
  ],
};