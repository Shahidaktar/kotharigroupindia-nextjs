import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { ApplicationCard, ApplicationSlider } from '@/components/applications/ApplicationSlider';
import {
  PipefooterData,
  IrrigationfooterData,
} from '@/components/ProductPageLayout';
import {
  IrrigationproductsMegaMenu,
  irrigationSolutionsMegaMenu,
  PipeproductsMegaMenu,
  pipeSolutionsMegaMenu,
} from '@/data/products';
import {
  irrigationApplications,
  pipeApplications,
  type DivisionApplications,
} from '@/data/applications';

export const metadata = {
  title: 'Applications | Irrigation & Pipe Solutions | Kothari Group India',
  description:
    'Explore Kothari Group applications across irrigation and piping — crop-wise irrigation, water management, municipal infrastructure, plumbing, industrial and drainage solutions.',
};

interface SearchParams {
  division?: string;
}

function ApplicationsContent({ data, isPipe }: { data: DivisionApplications; isPipe: boolean }) {
  return (
    <div className="text-left">
      {/* Hero */}
      <div className="relative w-full min-h-[50dvh] sm:min-h-[70dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt={data.h1}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[50dvh] sm:min-h-[70dvh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
          <div className="flex flex-col gap-5 sm:gap-6 my-auto py-8">
            <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
              {data.heroEyebrow}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
              {data.h1}
            </h1>
            <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
              {data.intro}
            </p>
          </div>
        </div>
      </div>

      {/* Division switcher */}
      {/* <div className="w-full bg-white border-b border-slate-300/70 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-1 py-3">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-500 mr-3">
            Division
          </span>
          {[
            { id: 'irrigation-division', label: 'Irrigation Applications', isPipe: false },
            { id: 'pipe-division', label: 'Pipe Applications', isPipe: true },
          ].map((tab) => (
            <Link
              key={tab.id}
              href={`/applications?division=${tab.id}`}
              className={`px-4 py-2 text-xs sm:text-sm font-medium border transition-all duration-200 ${
                tab.id === data.id
                  ? isPipe
                    ? 'border-[#1575B3] bg-[#1575B3] text-white'
                    : 'border-[#1E8E3E] bg-[#1E8E3E] text-white'
                  : 'border-[#E2EBF3] bg-[#F5F6F8] text-[#5F6B7A] hover:border-[#1575B3]/40 hover:text-[#1575B3]'
              }`}
            >
              {tab.label}
            </Link>
          ))}
          <Link
            href={isPipe ? '/pipe-division' : '/irrigation-division'}
            className="hidden sm:inline-flex ml-auto items-center gap-1.5 text-xs font-medium text-[#1575B3] hover:text-[#0E588A] transition-colors"
          >
            Visit {isPipe ? 'Pipe' : 'Irrigation'} Division
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div> */}

      {/* Application groups */}
      <div>
        {data.groups.map((group, groupIdx) => (
          <section
            key={group.title}
            className={`w-full py-16 sm:py-24 ${
              groupIdx % 2 === 1
                ? isPipe
                  ? 'bg-[#F5F6F8] border-y border-slate-300/70'
                  : 'bg-[#EAF6EE] border-y border-[#1E8E3E]/15'
                : 'bg-white'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              {/* Group header */}
              <div className="pb-6 border-b border-slate-300 mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
                  {group.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-3xl font-normal leading-relaxed mt-4">
                  {group.intro}
                </p>
              </div>

              {/* Cards: grid on desktop for ≤3, dots slider for more + on mobile */}
              {group.items.length <= 3 ? (
                <>
                  <div
                    className={`hidden md:grid gap-6 sm:gap-8 ${
                      group.items.length === 2
                        ? 'grid-cols-2'
                        : 'grid-cols-2 lg:grid-cols-3'
                    }`}
                  >
                    {group.items.map((item) => (
                      <ApplicationCard key={item.title} item={item} theme={isPipe ? 'blue' : 'green'} />
                    ))}
                  </div>
                  <div className="md:hidden">
                    <ApplicationSlider items={group.items} theme={isPipe ? 'blue' : 'green'} />
                  </div>
                </>
              ) : (
                <ApplicationSlider items={group.items} theme={isPipe ? 'blue' : 'green'} />
              )}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className={`w-full ${isPipe ? 'bg-[#061E33]' : 'bg-[#0B3D20]'} py-16 sm:py-24 text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            {/* <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#7CC4EE] font-semibold mb-4 block">
              {isPipe ? 'Pipe Division' : 'Irrigation Division'}
            </span> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-white m-0 leading-tight">
              {data.cta.heading}
            </h2>
          </div>
          <div className="flex flex-col lg:items-end gap-6">
            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-xl lg:text-right">
              {data.cta.body}
            </p>
            <Link
              href="/contact-us"
              className={`inline-flex items-center justify-center gap-2 ${isPipe ? 'bg-[#1575B3] hover:bg-[#0E588A]' : 'bg-[#1E8E3E] hover:bg-[#145E2A]'} text-white px-7 py-3.5 text-sm font-medium transition-all duration-300 group`}
            >
              {data.cta.ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams> | SearchParams;
}) {
  const sp = await Promise.resolve(searchParams);
  const division = sp.division || 'irrigation-division';

  const isPipe = division === 'pipe-division';
  const data = isPipe ? pipeApplications : irrigationApplications;

  return (
    <AppShell>
      <HeaderDivison
        productsMegaMenu={isPipe ? PipeproductsMegaMenu : IrrigationproductsMegaMenu}
        solutionsMegaMenu={isPipe ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu}
      />
      <ApplicationsContent data={data} isPipe={isPipe} />
      <Footer footerData={isPipe ? PipefooterData : IrrigationfooterData} />
    </AppShell>
  );
}