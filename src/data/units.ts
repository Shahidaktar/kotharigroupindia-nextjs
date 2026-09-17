// Manufacturing units content sourced from units.txt
export interface ManufacturingUnit {
  img: string;
  name: string;
}

export interface ManufacturingUnitsData {
  heading: string;
  description: string;
  units: ManufacturingUnit[];
}

export const manufacturingUnitsData: ManufacturingUnitsData = {
  heading: 'Our Manufacturing Units',
  description:
    "For over four decades, Kothari Group has powered India's irrigation and pipe manufacturing industry with innovative water management and piping solutions. We started by equipping millions of farmers with water management solutions built for Indian farms, and we've grown to be a trusted, genuine Indian manufacturer of building pipe solutions nationwide. Today, our 8 manufacturing units produce CPVC, UPVC, HDPE, and PVC pipes and fittings at scale, engineered to deliver reliable water and plumbing solutions to millions of homes and farms across the country.",
  units: [
    { img: '/units/unit-1.jpeg', name: 'PVC Pipes & Fittings 1997 (Mohol-MH)' },
    { img: '/units/unit-2.jpeg', name: 'Hose Pipes 1999 (Mohol-MH)' },
    { img: '/units/unit-3.jpeg', name: 'HDPE Pipes & Fittings 2003 (Mohol-MH)' },
    { img: '/units/unit-4.jpeg', name: 'Irrigation Systems 2004 (Mohol-MH)' },
    {
      img: '/units/unit-5.jpeg',
      name: 'Submersible Cables & Wires 2015 (Chincholi-MH)',
    },
    {
      img: '/units/unit-6.jpeg',
      name: 'PVC Pipes & Irrigation Systems 2019 (Kukarwada-GJ)',
    },
    {
      img: '/units/unit-7.jpeg',
      name: 'Plumbing Pipes & Fittings 2023 (Yawali-MH)',
    },
    {
      img: '/units/unit-8.jpeg',
      name: 'PVC, DWC & HDPE 2025 (Pithampur-MP)',
    },
  ],
};

// Split "PVC Pipes & Fittings 1997 (Mohol-MH)" into product / year / location.
export function parseUnitName(name: string): {
  product: string;
  year: string;
  location: string;
} {
  const yearMatch = name.match(/\b(19|20)\d{2}\b/);
  const locationMatch = name.match(/\(([^)]+)\)/);
  const year = yearMatch?.[0] ?? '';
  const location = locationMatch?.[1] ?? '';
  const product = name
    .replace(year, '')
    .replace(locationMatch?.[0] ?? '', '')
    .replace(/\s+/g, ' ')
    .trim();
  return { product, year, location };
}
