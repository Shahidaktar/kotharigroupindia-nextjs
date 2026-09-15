export interface ApplicationProduct {
  name: string;
  url: string;
}

export interface ApplicationItem {
  title: string;
  description: string;
  image: string;
  products: ApplicationProduct[];
}

export interface ApplicationGroup {
  title: string;
  intro: string;
  items: ApplicationItem[];
}

export interface DivisionApplications {
  id: 'pipe-division' | 'irrigation-division';
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  groups: ApplicationGroup[];
  cta: {
    heading: string;
    body: string;
    ctaText: string;
  };
}

export const irrigationApplications: DivisionApplications = {
  id: 'irrigation-division',
  metaTitle: 'Irrigation Applications | Crop, Water Management & Landscaping Solutions',
  metaDescription:
    'Explore Kothari irrigation solutions by application — crop-wise irrigation, drip & sprinkler systems, fertigation, and horticulture & landscaping needs.',
  heroEyebrow: 'Kothari Group',
  h1: 'Irrigation Applications',
  intro:
    'From individual crops to full-scale water management, our irrigation systems are engineered for the specific demands of Indian farming. Explore our full range of solutions below, organized by the application that matters most to you.',
  heroImage: '/heronew.jpg',
  groups: [
    {
      title: 'Water Management Applications',
      intro:
        'The right irrigation method depends on your land, crop, and water source. Explore our core water management systems below.',
      items: [
        {
          title: 'Drip Irrigation System',
          description:
            'Precision water delivery direct to the root zone, minimizing waste while maximizing yield. Drip irrigation is the foundation of efficient water use across crops, orchards, and plantations, reducing runoff and evaporation compared to conventional methods.',
          image: 'https://picsum.photos/seed/kothari-drip-irrigation/800/600',
          products: [
            { name: 'Dripline K-Lin PCAS', url: '/drip-line/dripline-k-lin-pcas' },
            { name: 'Dripline K-Gol NPC', url: '/drip-line/dripline-k-gol-npc' },
            { name: 'Turbo Dripper', url: '/emitters-drippers/turbo-dripper' },
            { name: 'Drip Poly Fittings', url: '/polyfittings-and-accessories/drip-poly-fittings' },
          ],
        },
        {
          title: 'Sprinkler Irrigation System',
          description:
            'Uniform overhead coverage designed for larger, open field areas. Sprinkler irrigation is ideal where crop density and field layout make drip less practical, delivering even water distribution across wide areas.',
          image: 'https://picsum.photos/seed/kothari-sprinkler-irrigation/800/600',
          products: [
            { name: 'Metal Sprinkler', url: '/metal-sprinkler/metal-sprinkler' },
            { name: 'Mini Sprinkler', url: '/mini-sprinklers-and-assemblies/mini-sprinkler' },
            { name: 'K-Eco Sprinkler', url: '/products' },
            { name: 'HDPE Pipe Sprinkler Set', url: '/sprinkler-connectors-and-accessories/hdpe-pipe-sprinkler-set' },
          ],
        },
        {
          title: 'Fertigation Systems',
          description:
            'Combined water and nutrient delivery through dosing pumps, Venturi injectors, and IoT-enabled fertigation machines.',
          image: 'https://picsum.photos/seed/kothari-fertigation/800/600',
          products: [
            { name: 'Nutrijet Fertigation Machine', url: '/fertigation-machines/nutrijet-fertigation-machines' },
            { name: 'Venturi Injector', url: '/dosing-pumps-and-fertilizer-injectors/venturi-injector' },
            { name: 'Dosing Pump', url: '/dosing-pumps-and-fertilizer-injectors/dozing-pump' },
          ],
        },
        {
          title: 'Water Saving & Efficient Irrigation',
          description:
            'Low-flow, high-uniformity systems designed to reduce water usage without compromising crop health.',
          image: 'https://picsum.photos/seed/kothari-water-saving/800/600',
          products: [
            { name: 'Dripline K-Lin NPC', url: '/drip-line/dripline-k-lin-npc' },
            { name: 'Micro Sprayer', url: '/micro-jets-and-assemblies/micro-sprayer' },
          ],
        },
        {
          title: 'Crop Water Management Systems',
          description:
            'Complete system design, from filtration to automation, for consistent, reliable irrigation scheduling.',
          image: 'https://picsum.photos/seed/kothari-crop-water-management/800/600',
          products: [
            { name: 'Irribeat Controllers', url: '/controllers/irribeat-controllers' },
            { name: 'GSI Galcon Smart Irrigation Controller', url: '/controllers/gsi-galcon-smart-irrigation-controller' },
            { name: 'Galpro Controller (AC/DC)', url: '/controllers/galpro-controller-ac-dc' },
          ],
        },
      ],
    },
    {
      title: 'Crop-wise Applications',
      intro:
        'Every crop has different water, spacing, and pressure needs. Our irrigation systems are matched to the specific requirements of major Indian crops.',
      items: [
        {
          title: 'Drip Irrigation for Sugarcane',
          description:
            "High-volume, consistent water delivery suited to sugarcane's long growing cycle, supported by our K-Lin dripline range.",
          image: 'https://picsum.photos/seed/kothari-sugarcane/800/600',
          products: [
            { name: 'Dripline K-Lin PCAS', url: '/drip-line/dripline-k-lin-pcas' },
            { name: 'Dripline K-Lin NPC', url: '/drip-line/dripline-k-lin-npc' },
          ],
        },
        {
          title: 'Cotton Irrigation Systems',
          description:
            'Uniform, low-CV drip irrigation that supports even boll development across the field.',
          image: 'https://picsum.photos/seed/kothari-cotton/800/600',
          products: [
            { name: 'Dripline K-Gol PC', url: '/drip-line/dripline-k-gol-pc' },
            { name: 'Turbo Dripper', url: '/emitters-drippers/turbo-dripper' },
          ],
        },
        {
          title: 'Vegetable Irrigation Systems',
          description:
            'Precise, gentle irrigation suited to onion, tomato, chilli, and other short-duration vegetable crops.',
          image: 'https://picsum.photos/seed/kothari-vegetables/800/600',
          products: [
            { name: 'Thin Wall Dripline K-Slim', url: '/thinwall-drip-line/thin-wall-dripline-k-slim' },
            { name: 'Thinwall Dripline K-Slim Ultra', url: '/thinwall-drip-line/thinwall-dripline-k-slim-ultra' },
          ],
        },
        {
          title: 'Banana Irrigation Systems',
          description:
            'Reliable drip and micro sprinkler solutions for banana plantations, supporting consistent yield.',
          image: 'https://picsum.photos/seed/kothari-banana/800/600',
          products: [
            { name: 'Dripline K-Lin PCND', url: '/drip-line/dripline-k-lin-pcnd' },
            { name: 'K-Mic Micro Sprinkler', url: '/micro-sprinklers-and-assemblies/k-mic-micro-sprinkler' },
          ],
        },
        {
          title: 'Pomegranate Irrigation Systems',
          description:
            'Targeted, trunk-safe irrigation for pomegranate orchards, including frost and heat protection options.',
          image: 'https://picsum.photos/seed/kothari-pomegranate/800/600',
          products: [
            { name: 'K-Mic Excel', url: '/micro-sprinklers-and-assemblies/k-mic-excel' },
            { name: 'Micro Sprayer', url: '/micro-jets-and-assemblies/micro-sprayer' },
          ],
        },
        {
          title: 'Grape Irrigation Systems (Vineyard Irrigation)',
          description:
            'Precision drip irrigation for vineyards, including pressure-compensated options for sloped terrain.',
          image: 'https://picsum.photos/seed/kothari-grapes/800/600',
          products: [
            { name: 'Dripline K-Lin PCAS', url: '/drip-line/dripline-k-lin-pcas' },
            { name: 'PC Dripper', url: '/emitters-drippers/pc-dripper' },
          ],
        },
        {
          title: 'Irrigation for Other Field Crops',
          description:
            'Flexible irrigation solutions adaptable to pulses, oilseeds, fodder, and other field crops.',
          image: 'https://picsum.photos/seed/kothari-field-crops/800/600',
          products: [
            { name: 'LD Krishi Pipe (Lay Flat Tubes)', url: '/pe-pipes-and-fittings/ld-krishi-pipe-lay-flat-tubes' },
            { name: 'Polytube', url: '/drip-tubes-polytube/polytube' },
          ],
        },
      ],
    },
    {
      title: 'Horticulture & Landscaping',
      intro:
        'Beyond field crops, our irrigation systems support nurseries, orchards, and landscaped spaces where precision and gentleness matter.',
      items: [
        {
          title: 'Orchard Irrigation Systems',
          description:
            'Overhead and drip irrigation solutions for fruit orchards, including frost protection micro sprinklers.',
          image: 'https://picsum.photos/seed/kothari-orchard/800/600',
          products: [
            { name: 'K-Mist', url: '/misters-and-assemblies/k-mist' },
            { name: 'K-Fogger', url: '/foggers-and-assemblies/k-fogger' },
            { name: 'K-Tuff Micro Sprinkler', url: '/micro-sprinklers-and-assemblies/k-tuff-micro-sprinkler' },
          ],
        },
        {
          title: 'Nursery Irrigation Systems',
          description:
            'Gentle, insect-proof micro sprinklers designed specifically for delicate nursery plants.',
          image: 'https://picsum.photos/seed/kothari-nursery/800/600',
          products: [
            { name: 'K-Fogger', url: '/foggers-and-assemblies/k-fogger' },
            { name: 'Micro Sprayer', url: '/micro-jets-and-assemblies/micro-sprayer' },
          ],
        },
        {
          title: 'Landscaping & Turf Irrigation',
          description:
            'Pop-up sprinklers, rotors, and turf irrigation systems for parks, gardens, and public landscaped areas.',
          image: 'https://picsum.photos/seed/kothari-landscaping/800/600',
          products: [
            { name: 'Pop-up Spray Heads and Rotors', url: '/garden-and-landscape-sprinklers/pop-up-spray-heads-and-rotors' },
            { name: 'Swing Joint', url: '/garden-and-landscape-sprinklers/swing-joint' },
          ],
        },
      ],
    },
  ],
  cta: {
    heading: 'Not Sure Which System Fits Your Crop?',
    body: "Talk to our team and we'll help you find the right irrigation solution for your specific application.",
    ctaText: 'Get in Touch',
  },
};

export const pipeApplications: DivisionApplications = {
  id: 'pipe-division',
  metaTitle: 'Pipe Applications | Plumbing, Industrial & Infrastructure Solutions',
  metaDescription:
    'Explore Kothari pipe solutions by application — residential plumbing, industrial water supply, municipal infrastructure, borewell, and drainage systems.',
  heroEyebrow: 'Kothari Group',
  h1: 'Pipe Applications',
  intro:
    'From residential plumbing to large-scale municipal infrastructure, our pipes and fittings are built for the specific demands of every application. Explore our full range of solutions below, organized by use case.',
  heroImage: '/heronew.jpg',
  groups: [
    {
      title: 'Agriculture & Borewell Applications',
      intro:
        'From groundwater extraction to on-farm water supply, our pipes are built for the realities of agricultural infrastructure.',
      items: [
        {
          title: 'Borewell Water Supply Pipes',
          description:
            'Column pipes, casing pipes, and screen pipes engineered for safe, long-term groundwater extraction.',
          image: 'https://picsum.photos/seed/kothari-borewell/800/600',
          products: [
            { name: 'Column Pipes', url: '/column-pipes/column-pipes-with-ss' },
            { name: 'Casing Pipes', url: '/casing-pipes/casing-pipes-fittings' },
            { name: 'Screen Pipe/Slotted Pipe', url: '/casing-pipes/screen-pipe-slotted-pipe' },
            { name: 'Ribbed Casing Pipe', url: '/casing-pipes/ribbed-casing-pipe' },
          ],
        },
        {
          title: 'Farm Water Supply Pipes',
          description:
            'Agricultural PVC and HDPE pipes for reliable on-farm water distribution.',
          image: 'https://picsum.photos/seed/kothari-farm-water/800/600',
          products: [
            { name: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping' },
            { name: 'Agri PVC Moulded Fittings', url: '/upvc-pressure-pipes-fittings/agri-pvc-moulded-fittings' },
            { name: 'Self Fit PVC Pipe', url: '/upvc-pressure-pipes-fittings/self-fit-pvc-pipe' },
          ],
        },
      ],
    },
    {
      title: 'Infrastructure & Municipal Applications',
      intro:
        'Large-scale piping solutions built for municipal, rural, and public infrastructure projects.',
      items: [
        {
          title: 'Municipal Water Supply Pipes',
          description:
            'Durable pipe systems for city and town water distribution networks.',
          image: 'https://picsum.photos/seed/kothari-municipal/800/600',
          products: [
            { name: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping' },
            { name: 'UPVC ASTM Pipe Piping System', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
        {
          title: 'Rural Water Supply Pipes',
          description:
            'MDPE pipes and compression fittings supporting Jal Jeevan Mission and rural water access projects.',
          image: 'https://picsum.photos/seed/kothari-rural-water/800/600',
          products: [
            { name: 'MDPE Pipes', url: '/pe-pipes-and-fittings/mdpe-pipes' },
            { name: 'Compression Fittings', url: '/pe-pipes-and-fittings/compression-fittings' },
          ],
        },
        {
          title: 'Water Distribution Networks',
          description:
            'HDPE and UPVC pipe systems for large-scale water conveyance and distribution.',
          image: 'https://picsum.photos/seed/kothari-water-distribution/800/600',
          products: [
            { name: 'HDPE Coils', url: '/pe-pipes-and-fittings/hdpe-coils' },
            { name: 'HDPE Fittings', url: '/pe-pipes-and-fittings/hdpe-fittings' },
            { name: 'UPVC ASTM Pipe Piping System', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
        {
          title: 'Rainwater Management Systems',
          description:
            'SWR and underground drainage systems for effective rainwater collection and discharge.',
          image: 'https://picsum.photos/seed/kothari-rainwater/800/600',
          products: [
            { name: 'SWR Pipes and Fittings', url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems' },
            { name: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system' },
          ],
        },
      ],
    },
    {
      title: 'Plumbing Applications',
      intro:
        'Reliable, leak-free plumbing for every type of building, from single homes to large commercial complexes.',
      items: [
        {
          title: 'Residential Plumbing Systems',
          description:
            'CPVC and UPVC plumbing systems for homes, apartments, and housing societies.',
          image: 'https://picsum.photos/seed/kothari-residential/800/600',
          products: [
            { name: 'CPVC Hot & Cold Water Piping System', url: '/cpvc/cpvc-hot-and-cold-water-piping-system' },
            { name: 'UPVC ASTM Pipe Piping System', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
        {
          title: 'Commercial & Institutional Building Plumbing',
          description:
            'Durable plumbing and drainage systems for offices, schools, and commercial complexes.',
          image: 'https://picsum.photos/seed/kothari-commercial/800/600',
          products: [
            { name: 'UPVC ASTM Pipe Piping System', url: '/upvc/upvc-astm-plumbing-piping-system' },
            { name: 'CPVC Hot & Cold Water Piping System', url: '/cpvc/cpvc-hot-and-cold-water-piping-system' },
          ],
        },
        {
          title: 'High-Rise Building Piping Systems',
          description:
            'Pressure-rated piping systems engineered for multi-storey plumbing risers and shafts.',
          image: 'https://picsum.photos/seed/kothari-high-rise/800/600',
          products: [
            { name: 'CPVC Hot & Cold Water Piping System', url: '/cpvc/cpvc-hot-and-cold-water-piping-system' },
            { name: 'CPVC Solvent Cement', url: '/cpvc/cpvc-solvent-cement' },
          ],
        },
        {
          title: 'Hotels & Hospitals Plumbing Systems',
          description:
            'Reliable, low-maintenance plumbing systems for round-the-clock institutional use.',
          image: 'https://picsum.photos/seed/kothari-institutional/800/600',
          products: [
            { name: 'CPVC Hot & Cold Water Piping System', url: '/cpvc/cpvc-hot-and-cold-water-piping-system' },
            { name: 'UPVC ASTM Pipe Piping System', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
      ],
    },
    {
      title: 'Industrial Applications',
      intro:
        'Corrosion-resistant, chemically stable piping for demanding industrial environments.',
      items: [
        {
          title: 'Industrial Water Supply Pipes',
          description:
            'HDPE and UPVC pipes for reliable industrial water distribution.',
          image: 'https://picsum.photos/seed/kothari-industrial-water/800/600',
          products: [
            { name: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping' },
            { name: 'UPVC ASTM Pipe Piping System', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
        {
          title: 'Process Water Piping',
          description:
            'Chemically resistant piping for industrial process lines and cooling systems.',
          image: 'https://picsum.photos/seed/kothari-process-water/800/600',
          products: [
            { name: 'Butterfly Valve', url: '/valves/butterfly-valve' },
            { name: 'Flush Valve', url: '/valves/flush-valve' },
          ],
        },
        {
          title: 'Chemical Fluid Conveyance Pipes',
          description:
            'Corrosion-resistant pipes and fittings for safe transport of chemicals and effluents.',
          image: 'https://picsum.photos/seed/kothari-chemical/800/600',
          products: [
            { name: 'Single & Double Union PVC Ball Valve', url: '/valves/single-and-double-union-pvc-ball-valve' },
            { name: 'Double Union PP Ball Valve', url: '/valves/double-union-pp-ball-valve' },
          ],
        },
      ],
    },
    {
      title: 'Drainage Applications',
      intro:
        'Reliable drainage systems for buildings, sewage, and wastewater management.',
      items: [
        {
          title: 'Building Drainage Systems',
          description:
            'SWR pipes and fittings for soil, waste, and rainwater discharge in residential and commercial buildings.',
          image: 'https://picsum.photos/seed/kothari-building-drainage/800/600',
          products: [
            { name: 'SWR Pipes and Fittings', url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems' },
            { name: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system' },
          ],
        },
        {
          title: 'Sewage Drainage Systems',
          description:
            'Underground drainage pipes (UDS, Foamcore, DWC) engineered for municipal and building sewerage systems.',
          image: 'https://picsum.photos/seed/kothari-sewage/800/600',
          products: [
            { name: 'Underground DWC Pipes', url: '/underground-pipe-and-fittings/underground-double-wall-corrugated-pipes' },
            { name: 'Foamcore Underground Drainage Piping System', url: '/underground-pipe-and-fittings/foamcore-underground-drainage-piping-system' },
            { name: 'UPVC Underground Drainage Piping System (Solid Wall UDS)', url: '/underground-pipe-and-fittings/upvc-underground-drainage-piping-system' },
          ],
        },
        {
          title: 'Rainwater Drainage Systems',
          description:
            'Low-noise and standard drainage systems for effective rainwater discharge.',
          image: 'https://picsum.photos/seed/kothari-rainwater-drainage/800/600',
          products: [
            { name: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system' },
            { name: 'Sub-Surface Drainage System', url: '/underground-pipe-and-fittings/sub-surface-drainage-system' },
          ],
        },
        {
          title: 'Wastewater Drainage Systems',
          description:
            'HDPE sewerage pipes built for industrial and municipal wastewater management.',
          image: 'https://picsum.photos/seed/kothari-wastewater/800/600',
          products: [
            { name: 'HDPE (Sewerage IS: 14333)', url: '/underground-pipe-and-fittings/hdpe' },
          ],
        },
      ],
    },
  ],
  cta: {
    heading: 'Need the Right Pipe for Your Project?',
    body: 'Our team can help you identify the right piping solution for your specific application, from plumbing to infrastructure.',
    ctaText: 'Get in Touch',
  },
};

export const applicationsByDivision: Record<string, DivisionApplications> = {
  'irrigation-division': irrigationApplications,
  'pipe-division': pipeApplications,
};