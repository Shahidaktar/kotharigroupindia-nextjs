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
  'image/png',
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

  const name = str(form.get('name'), 100);
  const email = str(form.get('email'), 160);
  const phone = str(form.get('phone'), 15);
  const totalExperience = str(form.get('totalExperience'), 60);
  const relevantExperience = str(form.get('relevantExperience'), 60);
  const currentCTC = str(form.get('currentCTC'), 60);
  const expectedCTC = str(form.get('expectedCTC'), 60);
  const noticePeriod = str(form.get('noticePeriod'), 60);
  const position = str(form.get('position'), 160);
  const location = str(form.get('location'), 60);
  const qualification = str(form.get('qualification'), 160);
  const linkdin = str(form.get('linkdin'), 300);

  if (
    !name ||
    !email ||
    !phone ||
    !totalExperience ||
    !relevantExperience ||
    !currentCTC ||
    !expectedCTC ||
    !noticePeriod ||
    !position ||
    !location ||
    !qualification ||
    !linkdin
  ) {
    return NextResponse.json(
      { ok: false, error: 'All fields are required.' },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid email address.' },
      { status: 400 }
    );
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid 10-digit mobile number.' },
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

  // Resume is mandatory for job applications.
  const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
  const doc = form.get('resume');
  if (!doc || typeof doc === 'string' || doc.size === 0) {
    return NextResponse.json(
      { ok: false, error: 'Please attach your updated resume.' },
      { status: 400 }
    );
  }
  const file = doc as File;
  if (file.size > MAX_FILE_BYTES) {
    return NextResponse.json(
      { ok: false, error: 'File size must be less than 5MB.' },
      { status: 400 }
    );
  }
  if (file.type && !ALLOWED_FILE_TYPES.includes(file.type)) {
    return NextResponse.json(
      { ok: false, error: 'Only DOC, PDF, JPEG or PNG resumes are allowed.' },
      { status: 400 }
    );
  }
  const safeName = (file.name || 'resume').replace(/[^\w.\-() ]/g, '_').slice(0, 120);
  attachments.push({
    filename: safeName,
    content: Buffer.from(await file.arrayBuffer()),
    contentType: file.type || 'application/octet-stream',
  });

  const transporter = createTransporter();
  if (!transporter) {
    console.error('[career] Email is not configured (GMAIL_USER + OAuth2 or GMAIL_APP_PASSWORD missing).');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const to =
    process.env.CAREER_TO_EMAIL ||
    process.env.CONTACT_TO_EMAIL ||
    process.env.GMAIL_USER ||
    '';
  if (!to) {
    console.error('[career] No recipient configured.');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const from = process.env.GMAIL_USER as string;
  const subject = `WEBSITE ENQUIRY - CAREER - ${name.toUpperCase()}`;
  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Mobile', phone],
    ['Total Experience', totalExperience],
    ['Relevant Experience', relevantExperience],
    ['Current CTC', currentCTC],
    ['Expected CTC', expectedCTC],
    ['Notice Period', noticePeriod],
    ['Application For', position],
    ['Location', location],
    ['Qualification', qualification],
    ['LinkedIn', linkdin],
  ];
  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    `Attachment: ${attachments[0].filename}`,
  ].join('\n');
  const html = `
    <h2>New job application — ${escapeHtml(position)}</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`
        )
        .join('')}
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Kothari Group" <${from}>`,
      to,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject,
      text,
      html,
      attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[career] sendMail failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send your application. Please try again later.' },
      { status: 502 }
    );
  }
}
