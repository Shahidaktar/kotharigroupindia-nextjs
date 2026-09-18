import { NextResponse } from 'next/server';
import {
  createTransporter,
  escapeHtml,
  verifyRecaptchaToken,
  NOT_CONFIGURED,
} from '@/lib/mailer';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
];

function str(value: FormDataEntryValue | null, max: number): string {
  return String(value ?? '').trim().slice(0, max);
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const proprietorName = str(form.get('proprietorName'), 100);
  const mobile = str(form.get('mobile'), 15);
  const email = str(form.get('email'), 160);
  const pincode = str(form.get('pincode'), 10);
  const firmName = str(form.get('firmName'), 160);
  const gstNumber = str(form.get('gstNumber'), 30);
  const divisionInterest = str(form.get('divisionInterest'), 60);
  const heardAbout = str(form.get('heardAbout'), 60);
  const description = str(form.get('description'), 5000);

  if (!proprietorName || !mobile || !pincode) {
    return NextResponse.json(
      { ok: false, error: 'Name, mobile number and pincode are required.' },
      { status: 400 }
    );
  }
  if (!/^[0-9]{10}$/.test(mobile)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid 10-digit mobile number.' },
      { status: 400 }
    );
  }
  if (!/^[0-9]{6}$/.test(pincode)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid 6-digit pincode.' },
      { status: 400 }
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid email address.' },
      { status: 400 }
    );
  }

  // reCAPTCHA v3 spam check — enforced only when a secret is configured.
  const recaptchaError = await verifyRecaptchaToken(form.get('recaptchaToken'));
  if (recaptchaError) {
    return NextResponse.json(
      { ok: false, error: recaptchaError },
      { status: 403 }
    );
  }

  // Optional supporting document (validated client-side too).
  const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
  const doc = form.get('document');
  if (doc && typeof doc !== 'string') {
    const file = doc as File;
    if (file.size > 0) {
      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          { ok: false, error: 'File size must be less than 5MB.' },
          { status: 400 }
        );
      }
      if (file.type && !ALLOWED_FILE_TYPES.includes(file.type)) {
        return NextResponse.json(
          { ok: false, error: 'Only PDF, DOC or JPG documents are allowed.' },
          { status: 400 }
        );
      }
      const safeName = (file.name || 'document').replace(/[^\w.\-() ]/g, '_').slice(0, 120);
      attachments.push({
        filename: safeName,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || 'application/octet-stream',
      });
    }
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error('[dealer] Email is not configured (GMAIL_USER + OAuth2 or GMAIL_APP_PASSWORD missing).');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const to =
    process.env.DEALER_TO_EMAIL ||
    process.env.CONTACT_TO_EMAIL ||
    process.env.GMAIL_USER ||
    '';
  if (!to) {
    console.error('[dealer] No recipient configured.');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const from = process.env.GMAIL_USER as string;
  const subject = `WEBSITE ENQUIRY - BECOME A DEALER - ${proprietorName.toUpperCase()}`;
  const rows: [string, string][] = [
    ['Proprietor Name', proprietorName],
    ['Mobile', mobile],
    ['Email', email || '-'],
    ['Pincode', pincode],
    ['Firm Name', firmName || '-'],
    ['GST Number', gstNumber || '-'],
    ['Division Interest', divisionInterest || '-'],
    ['Heard About Us', heardAbout || '-'],
  ];
  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    description || '(no description)',
    ...(attachments.length ? ['', `Attachment: ${attachments[0].filename}`] : []),
  ].join('\n');
  const html = `
    <h2>New dealer application</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`
        )
        .join('')}
    </table>
    <p>${escapeHtml(description || '(no description)').replace(/\n/g, '<br />')}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Kothari Group" <${from}>`,
      to,
      replyTo: email
        ? `"${proprietorName.replace(/"/g, '')}" <${email}>`
        : undefined,
      subject,
      text,
      html,
      attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[dealer] sendMail failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send your application. Please try again later.' },
      { status: 502 }
    );
  }
}
