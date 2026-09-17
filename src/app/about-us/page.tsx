import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import {
  AboutHero,
  AboutGrowth,
  AboutVisionMission,
  AboutApproach,
  AboutCoreValues,
  AboutLegacy,
  AboutWhyKothari,
} from '@/components/about/AboutSections';
import { ManufacturingUnits } from '@/components/about/ManufacturingUnits';

export const metadata = {
  title: 'About Us | Kothari Group — Nurturing Lands, Building Dreams',
  description:
    'For over four decades, Kothari Group, an ISO-9001:2015 company, has empowered Indian farmers and builders with innovative irrigation and piping solutions.',
};

export default function AboutPage() {
  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />
        <AboutHero />
        <AboutGrowth />
        <AboutVisionMission />
        <AboutApproach />
       
        <AboutLegacy />
        <ManufacturingUnits />
        <AboutCoreValues />
        <AboutWhyKothari />
        <Home2Footer />
      </div>
    </AppShell>
  );
}
