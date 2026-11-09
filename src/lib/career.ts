// Static career data sourced from jobs.txt (Department, Location, Job Title/Role, Division)
export interface JobPosting {
  id: number;
  title: string;
  slug: string;
  location: string;
  department: string;
  division: string;
  jobType: string;
  description: string;
  link: string;
  date: string;
  place: string;
  /** Rich content from the WP career plugin (optional — static fallback omits it). */
  responsibilities?: string[];
  requirements?: string[];
  salaryRange?: string;
  experience?: string;
  openings?: number;
  status?: string;
}

export interface CareerData {
  jobs: JobPosting[];
  locations: string[];
}

// [department, location, title, division]
const rows: [string, string, string, string][] = [
  ['Production', 'Solapur', 'PVC Pipe Extrusion Operator', ''],
  ['Production', 'Solapur', 'CPVC/UPVC Pipe Extrusion Operator', ''],
  ['Production', 'Solapur', 'Extrusion Engineer', ''],
  ['Production', 'Solapur', 'Moulding Engineer', ''],
  ['Production', 'Solapur', 'Compounding Operator', ''],
  ['Production', 'Solapur', 'Compounding Engineer', ''],
  ['Production', 'Pithampur', 'HDPE Pipe Extrusion Operator', ''],
  ['Production', 'Pithampur', 'DWC Pipe Extrusion Operator', ''],
  ['Sales Back Office', 'Solapur', 'Sales Back Office Executive', ''],
  ['Warehousing & Logistics (W&L)', 'Solapur', 'Route Planning Executive', ''],
  ['Accounts & Finance', 'Solapur', 'Accounts Executive', ''],
  ['Information Technology (IT)', 'Solapur', 'Assistant Manager – IT', ''],
  ['Production', 'Solapur', 'Junior Production Engineer', ''],
  ['Operational Intelligence', 'Solapur', 'Operational Intelligence Executive', ''],
  ['Maintenance', 'Solapur', 'Maintenance Technician', ''],
  ['Maintenance', 'Solapur', 'Electrical Maintenance Engineer', ''],
  ['Maintenance', 'Solapur', 'Mechanical Maintenance Engineer', ''],
  ['Tool Room', 'Solapur', 'Tool Room Engineer', ''],
  ['Tool Room', 'Solapur', 'Tool Room Technician', ''],
  ['Quality Assurance (QA)', 'Solapur', 'Junior Quality Officer', ''],
  ['Sales', 'Hubli', 'OEM Sales Engineer', 'OEM'],
  ['Sales', 'Kalburgi', 'OEM Sales Engineer', 'OEM'],
  ['Production', 'Solapur', 'Junior Engineer', ''],
  ['Production', 'Kukarwada (GJ)', 'Junior Engineer', ''],
  ['Production', 'Pithampur', 'Junior Engineer', ''],
  ['Warehousing & Logistics (W&L)', 'Ambala', 'Senior Executive', 'Irrigation'],
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const jobs: JobPosting[] = rows.map(([department, location, title, division], index) => ({
  id: index + 1,
  title,
  slug: `${slugify(title)}-${slugify(location)}`,
  location,
  place: location,
  department,
  division,
  jobType: division || 'Full-time',
  description: [
    `Department: ${department}`,
    `Location: ${location}`,
    ...(division ? [`Division: ${division}`] : []),
  ].join(' | '),
  link: '#',
  date: '',
}));

const locations = ['All', ...Array.from(new Set(jobs.map((job) => job.location)))];

export const careerData: CareerData = { jobs, locations };
