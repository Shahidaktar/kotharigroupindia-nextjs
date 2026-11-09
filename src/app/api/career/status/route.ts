import { NextResponse } from 'next/server';
import {
  createTransporter,
  sendMailWithFallback,
  escapeHtml,
  NOT_CONFIGURED,
} from '@/lib/mailer';
import { CAREER_INGEST_SECRET } from '@/lib/career-secret';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STATUSES = ['New', 'Shortlisted', 'Rejected'] as const;

function statusMessage(status: string): string {
  switch (status) {
    case 'Shortlisted':
      return 'We are pleased to let you know that your application has been shortlisted. Our HR team will contact you shortly with the next steps.';
    case 'Rejected':
      return 'Thank you for taking the time to apply. After careful review, we will not be moving forward with your application at this time. We appreciate your interest and encourage you to apply for future roles.';
    case 'New':
    default:
      return 'Your application has been received and is currently under review. We will contact you if your profile matches our requirements.';
  }
}

// Called server-to-server by the Kothari Careers WordPress plugin whenever an
// application status is changed in WP admin. Uses the same Gmail SMTP pipeline
// as the rest of the site.
export async function POST(req: Request) {
  const provided = req.headers.get('x-kothari-secret') || '';
  if (provided !== CAREER_INGEST_SECRET) {
    return NextResponse.json({ ok: false, error: 'Forbidden.' }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const to = String(data.to ?? '').trim();
  const name = String(data.name ?? '').trim().slice(0, 100);
  const position = String(data.position ?? '').trim().slice(0, 160);
  const location = String(data.location ?? '').trim().slice(0, 60);
  const status = String(data.status ?? '').trim();

  if (!EMAIL_RE.test(to)) {
    return NextResponse.json({ ok: false, error: 'Valid recipient email is required.' }, { status: 400 });
  }
  if (!(STATUSES as readonly string[]).includes(status)) {
    return NextResponse.json({ ok: false, error: 'Invalid status.' }, { status: 400 });
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error('[career-status] Email is not configured.');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const from = process.env.GMAIL_USER as string;
  const replyTo =
    process.env.CAREER_TO_EMAIL || process.env.CONTACT_TO_EMAIL || from;

  const message = statusMessage(status);
  const subject = `Application Update: ${position || 'Your Application'} | Kothari Group`;

  const rows: [string, string][] = [
    ['Position', position || '-'],
    ...(location ? ([['Location', location]] as [string, string][]) : []),
    ['Status', status],
  ];

  const text = [
    `Dear ${name || 'Applicant'},`,
    '',
    message,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'If you have any questions, simply reply to this email.',
    '',
    'Warm regards,',
    'Kothari Group — Human Resources',
  ].join('\n');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111111;line-height:1.6">
      <p>Dear ${escapeHtml(name || 'Applicant')},</p>
      <p>${escapeHtml(message)}</p>
      <table cellpadding="8" cellspacing="0" border="0" style="border:1px solid #e5e7eb;border-collapse:collapse;margin:16px 0">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="border:1px solid #e5e7eb"><strong>${escapeHtml(k)}</strong></td><td style="border:1px solid #e5e7eb">${escapeHtml(v)}</td></tr>`
          )
          .join('')}
      </table>
      <p>If you have any questions, simply reply to this email.</p>
      <p>Warm regards,<br />Kothari Group &mdash; Human Resources</p>
    </div>
  `;

  try {
    await sendMailWithFallback({
      from: `"Kothari Group" <${from}>`,
      to,
      replyTo,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[career-status] sendMail failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send the status email.' },
      { status: 502 }
    );
  }
}
