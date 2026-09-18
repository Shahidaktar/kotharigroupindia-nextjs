import nodemailer from 'nodemailer';

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Google Cloud Console (OAuth2) when GMAIL_CLIENT_ID is set,
// otherwise Gmail SMTP with an App Password (GMAIL_APP_PASSWORD).
// Returns null when email is not configured.
export function createTransporter() {
  const user = process.env.GMAIL_USER || '';
  if (!user) return null;

  if (process.env.GMAIL_CLIENT_ID) {
    const { GMAIL_CLIENT_SECRET = '', GMAIL_REFRESH_TOKEN = '' } =
      process.env;
    if (!GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN) return null;
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: GMAIL_CLIENT_SECRET,
        refreshToken: GMAIL_REFRESH_TOKEN,
      },
    });
  }

  const pass = process.env.GMAIL_APP_PASSWORD || '';
  if (!pass) return null;
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

export const NOT_CONFIGURED = {
  ok: false,
  error: 'Email service is not configured. Please try again later.',
};

// Verify a reCAPTCHA v3 token (score >= 0.5). Skipped entirely when no
// RECAPTCHA_SECRET_KEY is configured. Returns an error message or null.
export async function verifyRecaptchaToken(
  token: unknown
): Promise<string | null> {
  const secret = process.env.RECAPTCHA_SECRET_KEY || '';
  if (!secret) return null;
  if (!token || typeof token !== 'string') {
    return 'Spam check failed. Please reload and try again.';
  }
  try {
    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret, response: token }),
      }
    );
    const verdict = (await verifyRes.json()) as {
      success?: boolean;
      score?: number;
    };
    if (!verdict.success || (verdict.score ?? 0) < 0.5) {
      return 'Spam check failed. Please try again.';
    }
    return null;
  } catch {
    return 'Spam check failed. Please try again.';
  }
}
