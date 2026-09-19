import { DivisionApplicationsPage } from '@/components/applications/ApplicationsPage';
import { pipeApplications } from '@/data/applications';

export const metadata = {
  title: 'Pipe Applications | Plumbing, Drainage & Borewell | Kothari Group India',
  description:
    'Explore Kothari Group pipe applications — residential and commercial plumbing, municipal drainage and sewerage, borewell extraction and agri piping systems.',
};

export default function PipeApplicationsPage() {
  return <DivisionApplicationsPage data={pipeApplications} isPipe />;
}
