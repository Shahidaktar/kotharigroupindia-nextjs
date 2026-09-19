import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { BoardHero, BoardDirectors, BoardYoungLeadership } from '@/components/about/BoardSections';

export const metadata = {
  title: 'Our Board | Kothari Group — Leadership & Vision',
  description:
    'Meet the Board of Directors and young leadership team guiding Kothari Group — strong roots leading to a visionary future in water management.',
};

export default function OurBoardPage() {
  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />
        <BoardHero />
        <BoardDirectors />
        <BoardYoungLeadership />
        <Home2Footer />
      </div>
    </AppShell>
  );
}
