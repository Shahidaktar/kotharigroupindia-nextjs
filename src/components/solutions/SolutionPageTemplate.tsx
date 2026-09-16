import React from 'react';
import type { Solution } from '@/data/solutions';
import { SolutionHero } from './SolutionHero';
import { SolutionOverview } from './SolutionOverview';
import { SolutionPillars } from './SolutionPillars';
import { SolutionWhyChoose } from './SolutionWhyChoose';
import { SolutionApplications } from './SolutionApplications';
import { SolutionRelatedProducts } from './SolutionRelatedProducts';

export const SolutionPageTemplate: React.FC<{ solution: Solution; theme?: 'blue' | 'green' }> = ({ solution, theme = 'blue' }) => {
  return (
    <>
      <SolutionHero solution={solution} />
      <SolutionOverview overview={solution.overview} />
      <SolutionPillars pillars={solution.pillars} theme={theme} />
      <SolutionWhyChoose points={solution.whyChoose} theme={theme} />
      <SolutionApplications applications={solution.applications} theme={theme} />
      <SolutionRelatedProducts products={solution.relatedProducts} theme={theme} />
    </>
  );
};
