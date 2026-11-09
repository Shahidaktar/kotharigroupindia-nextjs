// Shared secret between the Next.js site and the Kothari Careers WordPress
// plugin. Defaults to the plugin's built-in default so the integration works
// even before the Vercel env var is added; set WP_CAREER_INGEST_SECRET to
// override (and keep it in sync with Careers > Settings in WP).
export const CAREER_INGEST_SECRET =
  process.env.WP_CAREER_INGEST_SECRET || 'kc_7f3a9c1e5b8d2460a1f6e9c2b4d70a83';
