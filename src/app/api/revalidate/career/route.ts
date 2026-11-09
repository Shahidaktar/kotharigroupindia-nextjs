import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { CAREER_INGEST_SECRET } from '@/lib/career-secret';

export const runtime = 'nodejs';

// Called by the Kothari Careers WordPress plugin whenever a job post is
// created, edited, trashed, restored or deleted, so the /career page updates
// immediately instead of waiting for the 10-minute ISR window.
export async function POST(req: Request) {
  const provided = req.headers.get('x-kothari-secret') || '';
  if (provided !== CAREER_INGEST_SECRET) {
    return NextResponse.json({ ok: false, error: 'Forbidden.' }, { status: 403 });
  }

  // Webhook-style call from WordPress: expire immediately (not stale-while-revalidate).
  revalidateTag('career-jobs', { expire: 0 });
  revalidatePath('/career');

  return NextResponse.json({ ok: true, revalidated: Date.now() });
}
