// src/lib/career-wp.ts
//
// Fetches job posts from the "Kothari Careers" WordPress plugin
// (GET /wp-json/kothari/v1/jobs). Fail-soft: returns null so the career page
// can fall back to the static careerData list when WP is unavailable.

import { cache } from 'react';
import type { JobPosting } from './career';

const WP_API =
  process.env.NEXT_PUBLIC_WP_API_URL || 'https://admin.kotharigroupindia.com/wp-json';

interface WpJob {
  id: number;
  title: string;
  slug: string;
  description: string;
  department: string;
  location: string;
  division: string;
  job_type: string;
  experience: string;
  salary_range: string;
  openings: number;
  posted_date: string;
  status: string;
  responsibilities: string;
  requirements: string;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// "2026-03-12" -> "12 March 2026" (no timezone drift like `new Date()`).
function formatDate(value: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value || '');
  if (!match) return value || '';
  const [, year, month, day] = match;
  const monthName = MONTHS[Number(month) - 1];
  if (!monthName) return value;
  return `${Number(day)} ${monthName} ${year}`;
}

// Turn a textarea value into a clean bullet list (one item per line).
function toLines(value: string): string[] {
  return String(value || '')
    .split(/\r?\n/)
    .map((line) => line.replace(/^[\s\-–•*]+/, '').trim())
    .filter(Boolean);
}

function mapJob(raw: WpJob): JobPosting {
  const description =
    (raw.description || '').trim() ||
    [
      raw.department ? `Department: ${raw.department}` : '',
      raw.location ? `Location: ${raw.location}` : '',
      raw.division ? `Division: ${raw.division}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

  return {
    id: Number(raw.id) || 0,
    title: raw.title || '',
    slug: raw.slug || '',
    location: raw.location || '',
    place: raw.location || '',
    department: raw.department || '',
    division: raw.division || '',
    jobType: raw.job_type || raw.division || 'Full-time',
    description,
    link: '#',
    date: formatDate(raw.posted_date),
    responsibilities: toLines(raw.responsibilities),
    requirements: toLines(raw.requirements),
    salaryRange: (raw.salary_range || '').trim(),
    experience: (raw.experience || '').trim(),
    openings: Number(raw.openings) || 0,
    status: raw.status || 'Open',
  };
}

export const fetchWpJobs = cache(async (): Promise<JobPosting[] | null> => {
  try {
    const res = await fetch(`${WP_API}/kothari/v1/jobs`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 600, tags: ['career-jobs'] },
    });
    if (!res.ok) return null;

    const data = await res.json();
    if (!Array.isArray(data)) return null;

    return (data as WpJob[])
      .map(mapJob)
      .filter((job) => job.title && job.status !== 'Closed');
  } catch (error) {
    console.error('[career-wp] Failed to fetch jobs:', error);
    return null;
  }
});
