import { DivisionApplicationsPage } from '@/components/applications/ApplicationsPage';
import { irrigationApplications } from '@/data/applications';

export const metadata = {
  title: 'Irrigation Applications | Drip, Sprinkler & Micro Irrigation | Kothari Group India',
  description:
    'Explore Kothari Group irrigation applications — drip irrigation, sprinklers, micro irrigation, filtration and fertigation for every crop and field.',
};

export default function IrrigationApplicationsPage() {
  return <DivisionApplicationsPage data={irrigationApplications} isPipe={false} />;
}
