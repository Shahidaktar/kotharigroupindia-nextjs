'use client';

import React, { useEffect, useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sprout, 
  Factory, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Building2,
  Users,
  Award,
  ArrowUp
} from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import {
  RECAPTCHA_SITE_KEY,
  getRecaptchaToken,
} from '@/lib/recaptcha-client';

const sections = [
  // { id: 'why-kothari', label: 'About Kothari Group' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'career', label: 'Career' }
];

const aboutUsItems = [
  {
    name: 'About Us',
    desc: 'Our legacy, vision & corporate ethos.',
    icon: Building2,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/about-us'
  },
  {
    name: 'Our Board',
    desc: 'Leadership steering our growth.',
    icon: Users,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/our-management'
  },
  {
    name: 'Capabilities & More',
    desc: 'Infrastructure & operational reach.',
    icon: Award,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/capabilities-infrastructure'
  }
];

const divisions = [
  {
    id: 'solutions',
    name: 'Pipe Division',
    desc: 'Agri, plumbing & drainage pipes.',
    icon: Factory,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/pipe-division'
  },
  {
    id: 'solutions',
    name: 'Irrigation Division',
    desc: 'Drip, sprinklers & micro irrigation.',
    icon: Sprout,
    accent: 'text-[#1E8E3E] bg-[#EAF8EF]',
    url: '/irrigation-division'
  },
];

const scrollToId = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Home2Header: React.FC<{ solid?: boolean }> = ({ solid = false }) => {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const solidHeader = solid || isScrolled || mobileOpen;
  
  // Popup Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    division: 'Irrigation Division',
    message: ''
  });



  const [showTopButton, setShowTopButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowTopButton(window.scrollY > 300);
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  // Lock scroll when mobile menu or modal is active
  useEffect(() => {
    if (mobileOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen, isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const show = () => setHeroRevealed(true);
    const hide = () => setHeroRevealed(false);
    window.addEventListener('hero:revealed', show);
    window.addEventListener('hero:hidden', hide);
    return () => {
      window.removeEventListener('hero:revealed', show);
      window.removeEventListener('hero:hidden', hide);
    };
  }, []);

  useEffect(() => {
    const ids = ['why-kothari', 'impact', 'solutions'];
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const pos = window.scrollY + 160;
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= pos) current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    setDivOpen(false);
    setAboutOpen(false);
    scrollToId(id);
  };

  const handleOpenGetInTouch = () => {
    setMobileOpen(false);
    setDivOpen(false);
    setAboutOpen(false);
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formSending) return;
    setFormError('');
    setFormSending(true);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch('/api/get-in-touch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Could not send your enquiry.');
      }
      setFormSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
        setFormError('');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          division: 'Irrigation Division',
          message: ''
        });
      }, 2500);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Could not send your enquiry.');
    } finally {
      setFormSending(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${
          solidHeader
            ? 'bg-white backdrop-blur-md border-b border-[#DCEAF5] shadow-sm py-2'
            : 'bg-transparent border-b border-white/10 py-3'
        }`}
        style={{
          opacity: heroRevealed ? 1 : 0,
          pointerEvents: heroRevealed ? 'auto' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => handleNav('home')}
            className={`flex items-center shrink-0 transition-all duration-300 px-3 py-1 ${
              solidHeader ? 'bg-transparent' : 'bg-transparent'
            }`}
            aria-label="Kothari Group Home"
          >
            <img 
              src="/logos/Kothari%20Group.png"
              alt="Kothari Group Logo"
              referrerPolicy="no-referrer"
              className="h-14 sm:h-16 object-contain max-w-[150px] sm:max-w-[180px] transition-all duration-300"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </Link>

          {/* Right Side: Nav + Actions */}
          <div className="ml-auto flex items-center gap-3">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Home Link */}
              <button
                onClick={() => handleNav('home')}
                className={`px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                  active === 'home'
                    ? 'text-[#1575B3]'
                    : solidHeader ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Home
              </button>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                    active === 'why-kothari'
                      ? 'text-[#1575B3]'
                      : solidHeader ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>

                {aboutOpen && (
                  <div className="absolute left-0 top-full pt-2 w-72">
                    <div className="bg-white border border-[#DCEAF5] shadow-xl p-2 space-y-1">
                      {aboutUsItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            href={item.url}
                            key={i}
                            onClick={() => {
                              setAboutOpen(false);
                              setMobileOpen(false);
                            }}
                            className="w-full flex items-start gap-3 p-3 hover:bg-[#F5FAFF] transition-colors text-left"
                          >
                            <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${item.accent}`}>
                              <Icon className="w-5 h-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-[#111111]">{item.name}</span>
                              <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{item.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Remaining Sections */}
              {sections.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                    active === item.id
                      ? 'text-[#1575B3]'
                      : solidHeader ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Our Divisions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDivOpen(true)}
                onMouseLeave={() => setDivOpen(false)}
              >
                <button
                  onClick={() => setDivOpen(!divOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                    active === 'solutions'
                      ? 'text-[#1575B3]'
                      : solidHeader ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Divisions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${divOpen ? 'rotate-180' : ''}`} />
                </button>

                {divOpen && (
                  <div className="absolute right-0 top-full pt-2 w-72">
                    <div className="bg-white border border-[#DCEAF5] shadow-xl p-2 space-y-1">
                      {divisions.map((d, i) => {
                        const Icon = d.icon;
                        return (
                          <Link 
                            href={d.url}
                            key={i}
                            onClick={() => handleNav(d.id)}
                            className="w-full flex items-start gap-3 p-3 hover:bg-[#F5FAFF] transition-colors text-left"
                          >
                            <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${d.accent}`}>
                              <Icon className="w-5 h-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-[#111111]">{d.name}</span>
                              <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{d.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Get in Touch Button */}
            <button
              onClick={handleOpenGetInTouch}
className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all ${
                solidHeader
                  ? 'bg-[#1575B3] hover:bg-[#0E588A] text-white shadow-md shadow-[#1575B3]/15'
                  : 'bg-white hover:bg-white/90 text-black shadow-lg'
              }`}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setDivOpen(false);
                setAboutOpen(false);
              }}
              className={`lg:hidden p-2.5 border transition ${
                solidHeader
                  ? 'text-[#1575B3] bg-[#F5FAFF] border-[#DCEAF5] hover:bg-[#DCEAF5]/50'
                  : 'text-white bg-white/10 border-white/20 hover:bg-white/20'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="lg:hidden fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-white z-[999] flex flex-col justify-between px-6 py-8 border-t border-[#DCEAF5] overflow-y-auto">
            <div className="space-y-3">
              {/* Mobile Home Link */}
              <button
                onClick={() => handleNav('home')}
                className="w-full text-left px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] border border-transparent hover:border-[#DCEAF5] transition"
              >
                Home
              </button>

              {/* Mobile About Us Submenu */}
              <div className="space-y-1">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>About</span>
                  <ChevronDown className={`w-5 h-5 text-[#5F6B7A] transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {aboutOpen && (
                  <div className="pl-2 space-y-2 pt-1">
                    {aboutUsItems.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={i}
                          href={item.url}
                          onClick={() => {
                            setAboutOpen(false);
                            setMobileOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3  transition text-left"
                        >
                          {/* <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${item.accent}`}>
                            <Icon className="w-5 h-5" />
                          </span> */}
                          <span>
                            <span className="block text-sm font-medium text-[#5F6B7A]">{item.name}</span>
                            {/* <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{item.desc}</span> */}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Sections */}
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="w-full text-left px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] border border-transparent hover:border-[#DCEAF5] transition"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Divisions Submenu */}
              <div className="space-y-1 pt-2">
                <button
                  onClick={() => setDivOpen(!divOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>Divisions</span>
                  <ChevronDown className={`w-5 h-5 text-[#5F6B7A] transition-transform ${divOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {divOpen && (
                  <div className="pl-2 space-y-2 pt-1">
                    {divisions.map((d, i) => {
                      const Icon = d.icon;
                      return (
                        <Link
                          key={i}
                          href={d.url}
                          onClick={() => handleNav(d.id)}
                          className="w-full flex items-center gap-3 px-4 py-3  transition text-left"
                        >
                          {/* <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${d.accent}`}>
                            <Icon className="w-5 h-5" />
                          </span> */}
                          <span>
                            <span className="block text-sm font-medium text-[#5F6B7A]">{d.name}</span>
                            {/* <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{d.desc}</span> */}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="pt-6 border-t border-slate-100 mt-auto">
              <button
                onClick={handleOpenGetInTouch}
                className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white py-4 font-medium text-base shadow-sm transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      {/* Get in Touch Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-white border border-[#DCEAF5] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
            {/* Modal Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column */}
            <div className="hidden md:flex md:w-5/12 bg-[#0E588A] text-white p-6 sm:p-8 flex-col justify-between shrink-0">
              <div>
                <img
                  src="/logos/Kothari Group_W.png"
                  alt="Kothari Group Logo"
                  referrerPolicy="no-referrer"
                  className="h-15 w-auto object-contain mb-5"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-4">
                  Let's build sustainable solutions together.
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  Reach out to our specialized agricultural and piping experts for consultations, product catalogs, or institutional queries.
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
                    <span className="text-sm font-medium text-white">{formData.division === 'Pipe Division' ? 'sales.pipe@kotharigroupindia.com' : 'sales.irrigation@kotharigroupindia.com'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Headquarters</span>
                    <a href='https://maps.app.goo.gl/qCPHM3aF8EQkpaBw7' target="_blank" className="flex items-start gap-2 hover:text-white hover:underline ">Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413001, Maharashtra</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 bg-white overflow-y-auto">
              {formSubmitted ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-[#EAF8EF] text-[#1E8E3E] flex items-center justify-center mb-4 border border-[#1E8E3E]/20">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-semibold text-[#111111] mb-2">Inquiry Submitted</h4>
                  <p className="text-sm text-[#5F6B7A] max-w-md">
                    Thank you for reaching out. A representative from Kothari Group will contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#111111] mb-1">Get in Touch</h4>
                    <p className="text-xs text-[#5F6B7A] mb-4">
                      Fill out your details and select the division relevant to your request.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 "
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Division Interest
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    >
                      <option value="Irrigation Division">Irrigation Division (Drip & Irrigation)</option>
                      <option value="Pipe Division">Pipe Division (Agri, Plumbing & Drainage)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Message / Requirement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify product requirements, location, or general query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSending}
                    className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 font-medium text-sm transition-colors shadow-sm mt-2"
                  >
                    {formSending ? 'Submitting…' : 'Submit Inquiry'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {formError && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2">
                      {formError}
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
      )}




       <Link
              href="/become-dealer"
        style={{ writingMode: 'vertical-rl' }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[45] bg-[#1575B3] hover:bg-[#0E588A] text-white font-extrabold text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase py-4 sm:py-5 px-2.5 sm:px-3 shadow-[0_8px_30px_rgb(21,117,179,0.3)] hover:shadow-[0_8px_35px_rgb(21,117,179,0.5)] border-l-1 border-y border-[#fff] hover:border-[#fff] transition-all duration-300 ease-out active:scale-95 cursor-pointer select-none group flex items-center justify-center gap-2"
      >
        <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform duration-300 rotate-90" />
        <span className="whitespace-nowrap">Become Dealer</span>
      </Link>




      {showTopButton && (
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  aria-label="Back to top"
                  title="Back to top"
                  className="fixed bottom-6 right-6 z-[45] w-11 h-11 bg-[#1575B3] hover:bg-[#0E588A] text-white shadow-lg flex items-center justify-center transition-all"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              )}
    </>
  );
};

