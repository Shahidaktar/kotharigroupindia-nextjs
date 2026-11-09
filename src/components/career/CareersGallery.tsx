'use client';

import React, { useMemo, useState } from 'react';
import { MapPin, ArrowUpRight, Search, Briefcase, Building2, Layers, RotateCcw } from 'lucide-react';
import { Reveal } from '@/components/main/Reveal';
import { ApplyModal } from '@/components/career/ApplyModal';
import type { JobPosting } from '@/lib/career';

interface CareersGalleryProps {
  jobs: JobPosting[];
  locations: string[];
}

export const CareersGallery: React.FC<CareersGalleryProps> = ({ jobs, locations }) => {
  const [search, setSearch] = useState('');
  const [activeLocation, setActiveLocation] = useState('All');
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [activeDivision, setActiveDivision] = useState('All');
  const [activeTitle, setActiveTitle] = useState('All');
  const [applyFor, setApplyFor] = useState<JobPosting | null>(null);

  const applyLocations = useMemo(
    () =>
      applyFor
        ? Array.from(
            new Set(jobs.filter((job) => job.title === applyFor.title).map((job) => job.location))
          )
        : [],
    [applyFor, jobs]
  );

  const departments = useMemo(
    () => ['All', ...Array.from(new Set(jobs.map((job) => job.department)))],
    [jobs]
  );
  const divisions = useMemo(() => {
    const named = Array.from(new Set(jobs.map((job) => job.division).filter(Boolean)));
    return ['All', ...named, ...(jobs.some((job) => !job.division) ? ['General'] : [])];
  }, [jobs]);
  const titles = useMemo(
    () => ['All', ...Array.from(new Set(jobs.map((job) => job.title)))],
    [jobs]
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return jobs.filter((job) => {
      if (activeLocation !== 'All' && job.location !== activeLocation) return false;
      if (activeDepartment !== 'All' && job.department !== activeDepartment) return false;
      if (activeDivision === 'General' && job.division) return false;
      if (activeDivision !== 'All' && activeDivision !== 'General' && job.division !== activeDivision)
        return false;
      if (activeTitle !== 'All' && job.title !== activeTitle) return false;
      if (query && !job.title.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [jobs, search, activeLocation, activeDepartment, activeDivision, activeTitle]);

  const hasFilters =
    search.trim() !== '' ||
    activeLocation !== 'All' ||
    activeDepartment !== 'All' ||
    activeDivision !== 'All' ||
    activeTitle !== 'All';

  const resetFilters = () => {
    setSearch('');
    setActiveLocation('All');
    setActiveDepartment('All');
    setActiveDivision('All');
    setActiveTitle('All');
  };

  const selectClass =
    'w-full px-3 py-2.5 text-sm bg-white border border-slate-200 text-slate-700 focus:outline-none focus:border-[#1575B3] transition-colors';
  const labelClass =
    'flex items-center gap-1.5 text-[11px] font-mono font-semibold tracking-widest uppercase text-slate-500 mb-1.5';

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Left side — filters */}
      <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-24">
        <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6 space-y-5">
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-slate-900">
              Filters
            </h3>
            {hasFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider uppercase text-[#1575B3] hover:text-[#0E588A] transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          {/* Search */}
          <div>
            <label htmlFor="career-search" className={labelClass}>
              <Search className="w-3 h-3" />
              Search
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="career-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search job title…"
                className={`${selectClass} pl-9`}
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="career-location" className={labelClass}>
              <MapPin className="w-3 h-3" />
              Location
            </label>
            <select
              id="career-location"
              value={activeLocation}
              onChange={(e) => setActiveLocation(e.target.value)}
              className={selectClass}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === 'All' ? 'All Locations' : loc}
                </option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div>
            <label htmlFor="career-department" className={labelClass}>
              <Building2 className="w-3 h-3" />
              Department
            </label>
            <select
              id="career-department"
              value={activeDepartment}
              onChange={(e) => setActiveDepartment(e.target.value)}
              className={selectClass}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === 'All' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>

          {/* Division */}
          <div>
            <label htmlFor="career-division" className={labelClass}>
              <Layers className="w-3 h-3" />
              Division
            </label>
            <select
              id="career-division"
              value={activeDivision}
              onChange={(e) => setActiveDivision(e.target.value)}
              className={selectClass}
            >
              {divisions.map((division) => (
                <option key={division} value={division}>
                  {division === 'All' ? 'All Divisions' : division === 'General' ? 'General' : division}
                </option>
              ))}
            </select>
          </div>

          {/* Job title */}
          <div>
            <label htmlFor="career-title" className={labelClass}>
              <Briefcase className="w-3 h-3" />
              Job Title
            </label>
            <select
              id="career-title"
              value={activeTitle}
              onChange={(e) => setActiveTitle(e.target.value)}
              className={selectClass}
            >
              {titles.map((title) => (
                <option key={title} value={title}>
                  {title === 'All' ? 'All Job Titles' : title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </aside>

      {/* Right side — all openings */}
      <div className="flex-1 min-w-0 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-6 border-b border-slate-300">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
            Current Openings
          </h2>
          <p className="text-xs font-mono tracking-widest uppercase text-slate-500">
            {filtered.length} {filtered.length === 1 ? 'opening' : 'openings'}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="flex flex-col gap-3">
            {filtered.map((job, i) => (
              <Reveal key={job.id} delay={(i % 4) * 60}>
                <div className="group bg-white border border-slate-200 px-5 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-lg hover:border-[#1575B3] transition-all duration-300">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-slate-900 leading-snug group-hover:text-[#1575B3] transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[11px] font-mono tracking-widest uppercase text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#1575B3]" />
                        {job.place}
                      </span>
                      {job.department && <span>{job.department}</span>}
                      {job.jobType && <span>{job.jobType}</span>}
                      {job.experience && <span>{job.experience}</span>}
                      {job.date && <span>{job.date}</span>}
                    </div>
                    {job.description && (
                      <p className="text-sm sm:text-[16px] text-slate-600 font-normal leading-relaxed mt-3">
                        {job.description}
                      </p>
                    )}
                    {((job.responsibilities?.length ?? 0) > 0 ||
                      (job.requirements?.length ?? 0) > 0 ||
                      job.salaryRange ||
                      job.openings) && (
                      <details className="mt-3">
                        <summary className="cursor-pointer select-none text-[11px] font-mono font-semibold tracking-widest uppercase text-[#1575B3] hover:text-[#0E588A] transition-colors">
                          View job details
                        </summary>
                        <div className="mt-3 grid gap-4 sm:grid-cols-2">
                          {(job.responsibilities?.length ?? 0) > 0 && (
                            <div>
                              <h4 className="text-[11px] font-mono font-semibold tracking-widest uppercase text-slate-500 mb-1.5">
                                Responsibilities
                              </h4>
                              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600 leading-relaxed">
                                {job.responsibilities!.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {(job.requirements?.length ?? 0) > 0 && (
                            <div>
                              <h4 className="text-[11px] font-mono font-semibold tracking-widest uppercase text-slate-500 mb-1.5">
                                Requirements
                              </h4>
                              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600 leading-relaxed">
                                {job.requirements!.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        {(job.salaryRange || job.openings) && (
                          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] font-mono uppercase tracking-widest text-slate-500">
                            {job.salaryRange && <span>Salary: {job.salaryRange}</span>}
                            {job.openings ? <span>Openings: {job.openings}</span> : null}
                          </div>
                        )}
                      </details>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setApplyFor(job)}
                    className="shrink-0 inline-flex items-center gap-2 justify-center bg-[#1575B3] text-white text-xs font-mono font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#0E588A] transition-colors duration-300"
                  >
                    Apply Now
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-sm text-slate-500">
              {jobs.length === 0
                ? 'There are no open positions right now. Please check back soon.'
                : 'No jobs match your filters.'}
            </p>
            {hasFilters && jobs.length > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#1575B3] hover:text-[#0E588A]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>

      {applyFor && (
        <ApplyModal
          jobTitle={applyFor.title}
          locations={applyLocations}
          defaultLocation={applyFor.location}
          onClose={() => setApplyFor(null)}
        />
      )}
    </div>
  );
};
