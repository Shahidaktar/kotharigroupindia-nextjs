'use client';

export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export function isRecaptchaEnabled(): boolean {
  return !!RECAPTCHA_SITE_KEY;
}

// Fetch an invisible reCAPTCHA v3 token. Resolves '' when the key is missing
// or the script is blocked — the API skips verification in that case.
export function getRecaptchaToken(): Promise<string> {
  return new Promise((resolve) => {
    if (!RECAPTCHA_SITE_KEY || typeof window === 'undefined') {
      resolve('');
      return;
    }
    const fallback = setTimeout(() => resolve(''), 3000);
    const grecaptcha = (
      window as unknown as {
        grecaptcha?: {
          ready: (cb: () => void) => void;
          execute: (key: string, opts: { action: string }) => Promise<string>;
        };
      }
    ).grecaptcha;
    if (!grecaptcha) {
      clearTimeout(fallback);
      resolve('');
      return;
    }
    grecaptcha.ready(() => {
      clearTimeout(fallback);
      grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
        .then((token) => resolve(token || ''))
        .catch(() => resolve(''));
    });
  });
}
