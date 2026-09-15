'use client';
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const interests = [
  'Pipe Division',
  'Irrigation Division'
];

export const ContactUsForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: interests[0],
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        interest: interests[0],
        message: '',
      });
    }, 6000);
  };

  const fieldClass =
    'w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition';
  const labelClass =
    'block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5';

  if (submitted) {
    return (
      <div className="h-full min-h-[28rem] flex flex-col items-center justify-center text-center p-6">
        <CheckCircle2 className="w-14 h-14 text-[#1E8E3E]" />
        <h3 className="text-2xl font-semibold text-[#111111] mt-4">
          Thank You For Reaching Out!
        </h3>
        <p className="text-sm text-[#5F6B7A] max-w-md mt-2">
          Your inquiry has been received. Our team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          type="text"
          required
          placeholder="e.g. Rajesh Kumar"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <span className={labelClass}>Interested in *</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {interests.map((interest) => (
            <label
              key={interest}
              className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition ${
                formData.interest === interest
                  ? 'border-[#1575B3] bg-[#F5FAFF] text-[#0E588A]'
                  : 'border-[#DCEAF5] bg-white text-[#5F6B7A] hover:border-[#1575B3]/50'
              }`}
            >
              <input
                type="radio"
                name="interest"
                value={interest}
                checked={formData.interest === interest}
                onChange={() => setFormData({ ...formData, interest })}
                className="accent-[#1575B3]"
              />
              <span className="text-sm font-medium">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Message / Requirement</label>
        <textarea
          rows={7}
          placeholder="Tell us about your requirement..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white py-3.5 font-medium text-sm transition-colors shadow-sm"
      >
        Submit
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};