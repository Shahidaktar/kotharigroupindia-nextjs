'use client';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import type L from 'leaflet';
import { Factory, Building2, Warehouse, MapPin, ExternalLink } from 'lucide-react';

async function loadLeaflet(): Promise<typeof L> {
  const mod = await import('leaflet');
  return (mod.default ?? mod) as typeof L;
}

const PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="35" viewBox="0 0 36 48">
  <path d="M18 0C8.1 0 0 8.1 0 18c0 13.1 15.5 27.8 16.7 28.9.7.7 1.9.7 2.6 0C20.5 45.8 36 31.1 36 18 36 8.1 27.9 0 18 0z" fill="#E30613"/>
  <circle cx="18" cy="18" r="6.5" fill="#FFFFFF"/>
</svg>`;

const PIN_URL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(PIN_SVG)}`;

function createPinMarker(Lmod: typeof L, facility: Facility): L.Marker {
  const icon = Lmod.divIcon({
    className: 'breath-div-icon',
    html: `<div class="breath-wrap"><span class="breath-ring"></span><img src="${PIN_URL}" alt="" class="breath-pin" /></div>`,
    iconSize: [26, 35],
    iconAnchor: [13, 34],
    tooltipAnchor: [0, -22],
  });
  const marker = Lmod.marker([facility.lat, facility.lng], { icon });
  (marker.options as unknown as Record<string, unknown>).isSelectedPin = true;
  return marker;
}

function createDotMarker(Lmod: typeof L, facility: Facility, delayMs = 0): L.Marker {
  const icon = Lmod.divIcon({
    className: 'breath-div-icon',
    html: `<div class="breath-dot-wrap"><span class="breath-ring-blue" style="animation-delay:${delayMs}ms"></span><span class="breath-dot"></span></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    tooltipAnchor: [0, -12],
  });
  const marker = Lmod.marker([facility.lat, facility.lng], { icon });
  (marker.options as unknown as Record<string, unknown>).isSelectedPin = false;
  return marker;
}

function isPinMarker(marker: L.Marker): boolean {
  return (
    (marker.options as unknown as Record<string, unknown>).isSelectedPin === true
  );
}

type Category = 'All' | 'MANUFACTURING PLANT' | 'OFFICES' | 'WAREHOUSE';

interface Facility {
  name: string;
  address: string;
  lat: number;
  lng: number;
  category: Exclude<Category, 'All'>;
}

const TILE_URL =
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';

const facilities: Facility[] = [
  {
    name: 'PVC Pipes & Fittings',
    address: '185-193, Chandramauli Industrial Co-Operative Estate, Mohol, Solapur - 413 213, Maharashtra',
    lat: 17.8459,
    lng: 75.653,
    category: 'MANUFACTURING PLANT',
  },
  {
    name: 'Hose Pipes',
    address: '167-169, Chandramauli Industrial Co-Operative Estate, Mohol, Solapur - 413 213, Maharashtra',
    lat: 17.8459,
    lng: 75.653,
    category: 'MANUFACTURING PLANT',
  },
  {
    name: 'HDPE Pipes & Fittings',
    address: '123-125, Chandramauli Industrial Co-Operative Estate, Mohol, Solapur - 413 213, Maharashtra',
    lat: 17.8459,
    lng: 75.653,
    category: 'MANUFACTURING PLANT',
  },
  {
    name: 'Irrigation Systems',
    address: '146-157, Chandramauli Industrial Co-Operative Estate, Mohol, Solapur - 413 213, Maharashtra',
    lat: 17.8459,
    lng: 75.653,
    category: 'MANUFACTURING PLANT',
  },
  {
    name: 'Registered Office',
    address: '8516/11, Level 3, Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001, Maharashtra',
    lat: 17.6752,
    lng: 75.898,
    category: 'OFFICES',
  },
  {
    name: 'Corporate Office',
    address: 'Ramsukh House, 203, Level 2, Near Thube Park, Ganesh Khind Road, Shivaji Nagar, Pune - 411 005',
    lat: 18.5301,
    lng: 73.8489,
    category: 'OFFICES',
  },
  {
    name: 'Regional Office (Ahmedabad)',
    address: '905, Shivalik Abbey, Opp. Shell Petrol Pump, Anandnagar Cross Road, Pralhad Nagar, Ahmedabad - 380 015, Gujarat',
    lat: 23.029,
    lng: 72.533,
    category: 'OFFICES',
  },
  {
    name: 'Regional Office (Hyderabad)',
    address: 'Regional Office, Hyderabad, Telangana',
    lat: 17.385,
    lng: 78.4867,
    category: 'OFFICES',
  },
  {
    name: 'Regional Office (Indore)',
    address: 'Regional Office, Indore, Madhya Pradesh',
    lat: 22.7196,
    lng: 75.8577,
    category: 'OFFICES',
  },
  {
    name: 'Submersible Cables & Wires',
    address: 'Submersible Cables & Wires Unit, Solapur, Maharashtra',
    lat: 17.6711,
    lng: 75.8937,
    category: 'MANUFACTURING PLANT',
  },
  {
    name: 'PVC Pipes & Irrigation Systems',
    address: 'PVC Pipes & Irrigation Systems Unit, Maharashtra',
    lat: 17.8459,
    lng: 75.653,
    category: 'MANUFACTURING PLANT',
  },
  {
    name: 'PVC & HDPE (Pithampur)',
    address: 'PVC & HDPE Unit, Pithampur, Madhya Pradesh',
    lat: 22.601,
    lng: 75.69,
    category: 'MANUFACTURING PLANT',
  },
  {
    name: 'Plumbing Pipes & Fittings',
    address: 'Plumbing Pipes & Fittings Unit, Maharashtra',
    lat: 17.8459,
    lng: 75.653,
    category: 'MANUFACTURING PLANT',
  },
  {
    name: 'Warehouse Pune',
    address: 'Warehouse, Pune, Maharashtra',
    lat: 18.5204,
    lng: 73.8567,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Sambhajinagar',
    address: 'Warehouse, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra',
    lat: 19.8762,
    lng: 75.3433,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Akola',
    address: 'Warehouse, Akola, Maharashtra',
    lat: 20.7031,
    lng: 77.0,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Hubli',
    address: 'Warehouse, Hubballi, Karnataka',
    lat: 15.3647,
    lng: 75.124,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Anantpur',
    address: 'Warehouse, Anantapur, Andhra Pradesh',
    lat: 14.6819,
    lng: 77.6006,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Hyderabad',
    address: 'Warehouse, Hyderabad, Telangana',
    lat: 17.385,
    lng: 78.4867,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Salem',
    address: 'Warehouse, Salem, Tamil Nadu',
    lat: 11.6643,
    lng: 78.146,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Indore',
    address: 'Warehouse, Indore, Madhya Pradesh',
    lat: 22.7196,
    lng: 75.8577,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Raipur',
    address: 'Warehouse, Raipur, Chhattisgarh',
    lat: 21.2514,
    lng: 81.6296,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Ambala',
    address: 'Warehouse, Ambala, Haryana',
    lat: 30.3797,
    lng: 76.7837,
    category: 'WAREHOUSE',
  },
  {
    name: 'Warehouse Lucknow',
    address: 'Warehouse, Lucknow, Uttar Pradesh',
    lat: 26.8467,
    lng: 80.9462,
    category: 'WAREHOUSE',
  },
];

const categories: Category[] = ['All', 'MANUFACTURING PLANT', 'OFFICES', 'WAREHOUSE'];

const categoryMeta: Record<Exclude<Category, 'All'>, { icon: typeof Factory; color: string }> = {
  'MANUFACTURING PLANT': { icon: Factory, color: 'text-[#1575B3]' },
  OFFICES: { icon: Building2, color: 'text-[#0E588A]' },
  WAREHOUSE: { icon: Warehouse, color: 'text-[#5F6B7A]' },
};

const CATEGORY_TAB_BG: Record<string, string> = {
  white: 'bg-white',
  '[#ADEBB3]': 'bg-[#ADEBB3]',
  '[#F5F6F8]': 'bg-[#F5F6F8]',
};

export const FacilityMap: React.FC<{ bgColor?: string }> = ({ bgColor = 'white' }) => {
  const tabBarBg = CATEGORY_TAB_BG[bgColor] ?? 'bg-white';
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selected, setSelected] = useState<Facility | null>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const selectedRef = useRef<Facility | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const visibleFacilities = useMemo(
    () =>
      activeCategory === 'All'
        ? facilities
        : facilities.filter((f) => f.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    let cancelled = false;

    (async () => {
      const Lmod = await loadLeaflet();
      if (cancelled || mapRef.current) return;

      const map = Lmod.map(mapContainerRef.current as HTMLDivElement, {
        zoomControl: true,
        attributionControl: false,
        minZoom: 4,
        maxZoom: 18,
        scrollWheelZoom: true,
      });

      Lmod.tileLayer(TILE_URL, {
        maxZoom: 18,
      }).addTo(map);

      mapRef.current = map;
      setMapReady(true);
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        setMapReady(false);
        markersRef.current = {};
      }
    };
  }, []);

  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    Object.values(markersRef.current).forEach((m) => m.remove());
    markersRef.current = {};

    if (visibleFacilities.length === 0) return;

    void (async () => {
      const Lmod = await loadLeaflet();
      const bounds = Lmod.latLngBounds(
        visibleFacilities.map((f) => [f.lat, f.lng] as [number, number])
      );

      const selectedFacility = selectedRef.current;

      visibleFacilities.forEach((facility, idx) => {
        const isSelected = selectedFacility?.name === facility.name;
        const marker = isSelected
          ? createPinMarker(Lmod, facility)
          : createDotMarker(Lmod, facility, (idx % 6) * 350);
        marker
          .addTo(map)
          .bindTooltip(facility.name, { direction: 'top', offset: [0, -16], opacity: 1 });
        marker.on('click', () => setSelected(facility));
        markersRef.current[facility.name] = marker;
      });

      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 6 });
    })();
  }, [visibleFacilities, mapReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    Object.entries(markersRef.current).forEach(([name, marker]) => {
      const facility = visibleFacilities.find((f) => f.name === name);
      if (!facility) return;
      const isSelected = selected?.name === name;

      void (async () => {
        const needsRecreate = isPinMarker(marker) !== isSelected;
        if (!needsRecreate) return;

        const Lmod = await loadLeaflet();
        const idx = visibleFacilities.findIndex((f) => f.name === name);
        marker.remove();
        const replacement = isSelected
          ? createPinMarker(Lmod, facility)
          : createDotMarker(Lmod, facility, (Math.max(idx, 0) % 6) * 350);
        replacement
          .addTo(map)
          .bindTooltip(facility.name, { direction: 'top', offset: [0, -16], opacity: 1 });
        replacement.on('click', () => setSelected(facility));
        markersRef.current[name] = replacement;
      })();
    });
  }, [selected, mapReady, visibleFacilities]);

  const handleCategory = (cat: Category) => {
    setActiveCategory(cat);
    setSelected(null);
  };

  const selectedName = selected?.name || 'India';

  return (
    <div className="w-full">


 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300 mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
                Facilities
              </h2>
              <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-200  ${
                  activeCategory === cat
                    ? 'bg-[#1575B3] text-white'
                    : 'bg-white text-slate-600 border border-[#DCEAF5] hover:border-[#1575B3] hover:text-[#1575B3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
            </div>

      <div className="flex flex-col lg:flex-row text-left border border-slate-200 shadow-sm bg-white h-auto lg:h-[640px] overflow-hidden">
        {/* Left side — facility list for the selected tab */}
        <div className="w-full lg:w-[26%] shrink-0 max-h-[380px] overflow-y-auto no-scrollbar lg:max-h-none lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-[#DCEAF5] bg-[#F5F6F8] flex flex-col">
          {/* Facility list */}
          <ul className="flex-1 list-none m-0 p-0">
            {visibleFacilities.length === 0 && (
              <li className="p-6 text-sm text-slate-500">No facilities in this category.</li>
            )}
            {visibleFacilities.map((facility) => {
              const meta = categoryMeta[facility.category];
              const Icon = meta.icon;
              const isActive = selected?.name === facility.name;
              return (
                <li key={facility.name}>
                  <button
                    onClick={() => setSelected(facility)}
                    className={`w-full text-left px-4 py-3.5 flex items-start gap-3 border-b border-[#DCEAF5]/70 transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-white border-l-2 border-l-[#E30613] shadow-sm'
                        : 'bg-transparent border-l-2 border-l-transparent hover:bg-white'
                    }`}
                  >
                    <span className={`mt-0.5 shrink-0 ${isActive ? 'text-[#E30613]' : 'text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-sm font-semibold leading-snug ${
                          isActive ? 'text-[#0E588A]' : 'text-slate-700'
                        }`}
                      >
                        {facility.name}
                      </span>
                      <span className="block text-[11px] font-mono tracking-[0.12em] uppercase text-slate-400 mt-0.5">
                        {facility.category}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side — map for the selected tab */}
        <div className="relative flex-1 bg-[#F5F6F8] flex flex-col">
          {/* Selected facility info bar */}
          <div className="px-5 py-3.5 border-b border-[#DCEAF5] bg-white flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-9 h-9 shrink-0 bg-[#F5FAFF] border border-[#DCEAF5] flex items-center justify-center text-[#1575B3]">
                <MapPin className="w-4.5 h-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#0E588A] truncate">{selectedName}</p>
                <p className="text-[11px] text-slate-500 truncate">
                  {selected?.address || 'All Kothari Group facilities across India'}
                </p>
              </div>
            </div>
            {selected && (
              <a
                href={`https://www.google.com/maps?q=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.12em] uppercase text-[#1575B3] hover:text-[#0E588A] shrink-0"
              >
                Direction
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div
            ref={mapContainerRef}
            className="relative flex-1 min-h-[420px] z-0"
            style={{ height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};