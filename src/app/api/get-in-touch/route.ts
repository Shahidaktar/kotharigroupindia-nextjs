import { NextResponse } from 'next/server';
import {
  createTransporter,
  escapeHtml,
  verifyRecaptchaToken,
  NOT_CONFIGURED,
} from '@/lib/mailer';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { fullName: 100, email: 160, phone: 30, message: 5000 } as const;

// Route to the divisional inbox based on the division interest.
// Pipe Division → pipe inbox, anything else → irrigation inbox.
function resolveRecipient(division: string): string {
  if (/pipe/i.test(division)) {
    return (
      process.env.CONTACT_PIPE_EMAIL || 'sales.pipe@kotharigroupindia.com'
    );
  }
  return (
    process.env.CONTACT_IRRIGATION_EMAIL ||
    'sales.irrigation@kotharigroupindia.com'
  );
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const data = body as Record<string, unknown>;
  const fullName = String(data.fullName ?? '').trim();
  const email = String(data.email ?? '').trim();
  const phone = String(data.phone ?? '').trim();
  const division = String(data.division ?? '').trim();
  const message = String(data.message ?? '').trim();

  if (!fullName || !phone) {
    return NextResponse.json(
      { ok: false, error: 'Name and phone are required.' },
      { status: 400 }
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid email address.' },
      { status: 400 }
    );
  }
  if (
    fullName.length > MAX_LEN.fullName ||
    email.length > MAX_LEN.email ||
    phone.length > MAX_LEN.phone ||
    message.length > MAX_LEN.message
  ) {
    return NextResponse.json(
      { ok: false, error: 'One or more fields are too long.' },
      { status: 400 }
    );
  }

  // reCAPTCHA v3 spam check — enforced only when a secret is configured.
  const recaptchaError = await verifyRecaptchaToken(data.recaptchaToken);
  if (recaptchaError) {
    return NextResponse.json(
      { ok: false, error: recaptchaError },
      { status: 403 }
    );
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error('[get-in-touch] Email is not configured (GMAIL_USER + OAuth2 or GMAIL_APP_PASSWORD missing).');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const to = resolveRecipient(division);
  if (!to) {
    console.error('[get-in-touch] No recipient configured.');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const from = process.env.GMAIL_USER as string;
  const subject = `WEBSITE ENQUIRY - ${division.toUpperCase()} - ${fullName.toUpperCase()}`;
  const text = [
    `Name: ${fullName}`,
    `Email: ${email || '-'}`,
    `Phone: ${phone}`,
    `Division Interest: ${division || '-'}`,
    '',
    message || '(no message)',
  ].join('\n');
  const html = `
    <h2>New get-in-touch enquiry</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(fullName)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email || '-')}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Division Interest</strong></td><td>${escapeHtml(division || '-')}</td></tr>
    </table>
    <p>${escapeHtml(message || '(no message)').replace(/\n/g, '<br />')}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Kothari Group" <${from}>`,
      to,
      replyTo: email
        ? `"${fullName.replace(/"/g, '')}" <${email}>`
        : undefined,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[get-in-touch] sendMail failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send your enquiry. Please try again later.' },
      { status: 502 }
    );
  }
}
