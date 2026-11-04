export interface KnowledgeItem {
  title: string;
  description: string;
  image: string;
  lang: Record<string, string>[];
  division: 'pipe' | 'irrigation';
}

const KC_PDF_URL = 'https://admin.kotharigroupindia.com/wp-content/uploads';

export const irrigationKnowledgeItems: KnowledgeItem[] = [
  {
    title: 'Banana Guides',
    description:
      'Expert banana cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: '/knowledge/Banana.png',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5306_K-I-CROP-BANANA-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5434_K-I-CROP-BANANA-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Chilli Guides',
    description:
      'Expert chilli cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://images.pexels.com/photos/34111554/pexels-photo-34111554.jpeg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5307_K-I-CROP-CHILLI-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5436_K-I-CROP-CHILLI-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Onion Guides',
    description:
      'Expert onion cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5308_K-I-CROP-ONION-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5438_K-I-CROP-ONION-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Tomato Guides',
    description:
      'Expert Tomato cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-unal-aslan-48172282-30309037.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5310_K-I-CROP-TOMATO-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5447_K-I-CROP-TOMATO-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Sugarcane Guides',
    description:
      'Expert Sugarcane cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and cane quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/Sugarcane.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5309_K-I-CROP-SUGARCANE-ENGLISH-1-compressed.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5435_K-I-CROP-SUGARCANE-HINDI-compressed.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Papaya Guide',
    description:
      'Expert Papaya cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/Papaya.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5311_K-I-CROP-PAPAYA-ENGLISH.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Ginger Guides',
    description:
      'Expert ginger cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-daniel-dan-47825192-7543128.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5312_K-I-CROP-GINGER-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5437_K-I-CROP-GINGER-HINDI.pdf`,

      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Orange Guides',
    description:
      'Expert orange cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-tianyun-xia-297240639-31246322.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5314_K-I-CROP-ORANGE-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5440_K-I-CROP-ORANGE-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Turmeric Guides',
    description:
      'Expert turmeric cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-jonathan-cordova-r-2637981-36075348.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5313_K-I-CROP-TURMERIC-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5441_K-I-CROP-TURMERIC-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Capsicum Guides',
    description:'Expert capsicum cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-nc-farm-bureau-mark-2893635.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5316_K-I-CROP-CAPSICUM-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5444_K-I-CROP-CAPSICUM-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Potato Guides',
    description:'Expert potato cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-pixabay-144248.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5317_K-I-CROP-POTATO-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5439_K-I-CROP-POTATO-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
   
   {
    title: 'Watermelon Guides',
    description:'Expert watermelon cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-ffatmaozel-18476615.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5318_K-I-CROP-WATERMELON-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5443_K-I-CROP-WATERMELON-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Pomegranate Guide',
    description:'Expert pomegranate cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-tanmay-tiwari-112079824-20349779.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5319_K-I-CROP-POMEGRANATE-ENGLISH.pdf`,
        
      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Cotton Guides',
    description:'Expert cotton cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fiber quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-marcelo-solis-2036093-4264828.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5320_K-I-CROP-COTTON-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5450_K-I-CROP-COTTON-HINDI.pdf`,

      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Muskmelon Guides',
    description:'Expert muskmelon cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-eunice-medina-2151780593-31848991.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5321_K-I-CROP-MUSKMELON-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5442_K-I-CROP-MUSKMELON-HINDI.pdf`,

      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Soybean Guides',
    description:'Expert Soybean cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and seeds quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-somesh-singh-322854-36063252.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5322_K-I-CROP-SOYBEAN-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5446_K-I-CROP-SOYBEAN-HINDI.pdf`,

      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Pigeon-Pea Guides',
    description:'Expert Pigeon-Pea cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-dilara-988605972-32188885.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5323_K-I-CROP-PIGEON-PEA-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5445_K-I-CROP-PIGEON-PEA-HINDI.pdf`,

      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Sweet-Lemon Guides',
    description:'Expert Sweet-Lemon cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-nati-87264186-16776923.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5305_K-I-CROP-SWEET-LEMON-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5451_K-I-CROP-SWEET-LEMON-HINDI.pdf`,

      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Cumin Guide',
    description:'Expert Cumin cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and seeds quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-victoria-bowers-148548814-10487762.jpg',
    lang: [
      {
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5449_K-I-CROP-CUMIN-HINDI.pdf`,

      },
    ],
    division: 'irrigation',
  },
   {
    title: 'Fennel Guide',
    description:'Expert fennel cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-planka-32800700.jpg',
    lang: [
      {
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5448_K-I-CROP-FENNEL-HINDI.pdf`,

      },
    ],
    division: 'irrigation',
  },
];

export const pipeKnowledgeItems: KnowledgeItem[] = [
  {
    title: 'Plumbing Systems',
    description:
      'Comprehensive engineering documentation and technical specifications for CPVC and UPVC piping infrastructure. Features material thermal ratings, chemical resistance matrices, precise solvent welding joint protocols, flow rate optimization charts, and hydraulic pressure loss calculations tailored for high-performance residential, commercial, and industrial plumbing installations.',
     image: '/knowledge/Plumbing-System.png',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/Plumbing-Pipe-Literature-English-Sept-2026.pdf`,
      },
    ],
    division: 'pipe',
  },
  {
    title: 'Agri & Borewell',
    description:
      'Extensive field deployment manuals and practical technical guides covering subterranean UPVC agricultural main lines, HDPE coil layout optimization, surge pressure protection strategies, and precise structural torque thresholds engineered for high-depth borewell column pipe systems.',
    image: '/knowledge/Agri-&-Borewell.png',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/Agri-Pipe-Literature-English-Sept-2026-2.pdf`,
      },
    ],
    division: 'pipe',
  },
];

export const allKnowledgeItems: KnowledgeItem[] = [
  ...pipeKnowledgeItems,
  ...irrigationKnowledgeItems,
];