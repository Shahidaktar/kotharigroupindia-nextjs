'use client';

import React, { useRef, useState } from 'react';
import Script from 'next/script';
import { X, Send, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import {
  RECAPTCHA_SITE_KEY,
  getRecaptchaToken,
} from '@/lib/recaptcha-client';

interface ApplyModalProps {
  jobTitle: string;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ jobTitle, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    totalExperience: '',
    relevantExperience: '',
    currentCTC: '',
    expectedCTC: '',
    noticePeriod: '',
    position: jobTitle,
    location: '',
    qualification: '',
    linkdin: '',
  });
  const [resumeName, setResumeName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const resumeRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleResume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setResumeName('');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB.');
      e.target.value = '';
      setResumeName('');
      return;
    }
    setResumeName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (!resumeRef.current?.files?.[0]) {
      setError('Please attach your updated resume.');
      return;
    }
    setError('');
    setSending(true);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const payload = new FormData();
      payload.append('name', form.name);
      payload.append('email', form.email);
      payload.append('phone', form.phone);
      payload.append('totalExperience', form.totalExperience);
      payload.append('relevantExperience', form.relevantExperience);
      payload.append('currentCTC', form.currentCTC);
      payload.append('expectedCTC', form.expectedCTC);
      payload.append('noticePeriod', form.noticePeriod);
      payload.append('position', form.position);
      payload.append('location', form.location);
      payload.append('qualification', form.qualification);
      payload.append('linkdin', form.linkdin);
      payload.append('recaptchaToken', recaptchaToken);
      const file = resumeRef.current?.files?.[0];
      if (file) payload.append('resume', file);

      const res = await fetch('/api/career', { method: 'POST', body: payload });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Could not send your application.');
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send your application.');
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition';

  const labelClass =
    'block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5';

  const fieldWrap = 'space-y-1';

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Dark Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-[#DCEAF5] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Column */}
        <div className="hidden md:flex md:w-5/12 bg-[#0E588A] text-white p-6 sm:p-8 flex-col justify-between shrink-0">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-white/70 block mb-2">
              Kothari Group
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-4">
              Build your career with us.
            </h3>
            <p className="text-sm text-white/80 leading-relaxed mb-8">
              Join our team in delivering plumbing, irrigation and infrastructure solutions across
              India in a dynamic environment.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/15">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-white/60 uppercase">Phone</span>
                <span className="text-sm font-medium text-white">+91 1800 120 4343</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-white/60 uppercase">Email</span>
                <span className="text-sm font-medium text-white">enquiry@kotharigroupindia.com</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-white/60 uppercase">Headquarters</span>
                <span className="text-sm text-white/90">Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413001, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 bg-white overflow-y-auto">
          {submitted ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 bg-[#EAF8EF] text-[#1E8E3E] flex items-center justify-center mb-4 border border-[#1E8E3E]/20">
                <Send className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-semibold text-[#111111] mb-2">Application Submitted</h4>
              <p className="text-sm text-[#5F6B7A] max-w-md">
                Thank you for applying to Kothari Group. Our HR team will review your application and
                contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-[#111111] mb-1">Apply Now</h4>
                <p className="text-xs text-[#5F6B7A] mb-4">
                  Applying for <span className="font-medium text-[#1575B3]">{jobTitle}</span> — fill in
                  your details and attach your resume.
                </p>
              </div>

              <div>
                <label className={labelClass}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={fieldWrap}>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className={fieldWrap}>
                  <label className={labelClass}>Mobile No. *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={fieldWrap}>
                  <label className={labelClass}>Total Experience *</label>
                  <input
                    type="text"
                    name="totalExperience"
                    required
                    placeholder="e.g. 5 years"
                    value={form.totalExperience}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className={fieldWrap}>
                  <label className={labelClass}>Relevant Experience *</label>
                  <input
                    type="text"
                    name="relevantExperience"
                    required
                    placeholder="e.g. 3 years"
                    value={form.relevantExperience}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={fieldWrap}>
                  <label className={labelClass}>Current CTC *</label>
                  <input
                    type="text"
                    name="currentCTC"
                    required
                    placeholder="e.g. 6 LPA"
                    value={form.currentCTC}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className={fieldWrap}>
                  <label className={labelClass}>Expected CTC *</label>
                  <input
                    type="text"
                    name="expectedCTC"
                    required
                    placeholder="e.g. 8 LPA"
                    value={form.expectedCTC}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={fieldWrap}>
                  <label className={labelClass}>Notice Period *</label>
                  <input
                    type="text"
                    name="noticePeriod"
                    required
                    placeholder="e.g. 30 days"
                    value={form.noticePeriod}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className={fieldWrap}>
                  <label className={labelClass}>Application For *</label>
                  <input
                    type="text"
                    name="position"
                    required
                    value={form.position}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={fieldWrap}>
                  <label className={labelClass}>Select Location *</label>
                  <select
                    name="location"
                    required
                    value={form.location}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Location</option>
                    <option value="Pune">Pune</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
                <div className={fieldWrap}>
                  <label className={labelClass}>Qualification *</label>
                  <input
                    type="text"
                    name="qualification"
                    required
                    placeholder="e.g. B.E. / B.Tech"
                    value={form.qualification}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className={fieldWrap}>
                <label className={labelClass}>LinkedIn Profile URL *</label>
                <input
                  type="url"
                  name="linkdin"
                  required
                  placeholder="https://www.linkedin.com/in/your-profile"
                  value={form.linkdin}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className={fieldWrap}>
                <label className={labelClass}>
                  Attach your updated resume in DOC / PDF / JPEG (Max 5MB) *
                </label>
                <input
                  ref={resumeRef}
                  type="file"
                  name="resume"
                  accept=".doc,.docx,.pdf,.jpeg,.jpg,.png"
                  onChange={handleResume}
                  required
                  className="w-full text-sm text-[#5F6B7A] file:mr-4 file:px-4 file:py-2.5 file:text-sm file:bg-[#F5F6F8] file:border file:border-[#DCEAF5] file:text-[#111111] file:cursor-pointer hover:file:bg-[#EDF3F9] file:transition"
                />
                {resumeName && (
                  <span className="block mt-1 text-xs text-[#5F6B7A]">Selected: {resumeName}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 font-medium text-sm transition-colors shadow-sm mt-2"
              >
                {sending ? 'Submitting…' : 'Submit Application'}
                <ArrowRight className="w-4 h-4" />
              </button>
              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2">
                  {error}
                </p>
              )}
              {RECAPTCHA_SITE_KEY && (
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Protected by reCAPTCHA — the Google{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-500"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-500"
                  >
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  );
};