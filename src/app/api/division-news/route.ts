import { NextResponse } from 'next/server';
import { fetchWpHomeNews, mapWpPostsToDivisionCards } from '@/lib/wp-posts';

export const revalidate = 600;

// Live division news + blogs for client pages (division homepages).
// Fail-soft: empty lists let the static fallbacks show.
export async function GET() {
  try {
    const { blogs, events } = await fetchWpHomeNews();
    return NextResponse.json({
      blogs: mapWpPostsToDivisionCards(blogs, '/blogs'),
      events: mapWpPostsToDivisionCards(events, '/press-release'),
    });
  } catch {
    return NextResponse.json({ blogs: [], events: [] });
  }
}
