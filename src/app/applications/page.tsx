import { DivisionApplicationsPage } from '@/components/applications/ApplicationsPage';
import {
  irrigationApplications,
  pipeApplications,
} from '@/data/applications';

export const metadata = {
  title: 'Applications | Irrigation & Pipe Solutions | Kothari Group India',
  description:
    'Explore Kothari Group applications across irrigation and piping — crop-wise irrigation, water management, municipal infrastructure, plumbing, industrial and drainage solutions.',
};

interface SearchParams {
  division?: string;
}

// Back-compat route: /applications and /applications?division=… keep working.
// Canonical pages: /pipe-applications and /irrigation-applications.
export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams> | SearchParams;
}) {
  const sp = await Promise.resolve(searchParams);
  const division = sp.division || 'irrigation-division';

  const isPipe = division === 'pipe-division';
  const data = isPipe ? pipeApplications : irrigationApplications;

  return <DivisionApplicationsPage data={data} isPipe={isPipe} />;
}
