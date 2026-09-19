'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { WpProductData } from '@/lib/wp-product';
import Link from 'next/link';
import { motion } from 'framer-motion'; // <-- Add this line
import { productsData } from '@/data/products';
import { ProductItem } from '@/lib/types';
import { getProductHref, findProductBySlugs, getCategorySlug, isPipeCategorySlug } from '@/lib/slug';
import {
  Download, ShieldCheck, CheckCircle2, ChevronRight,
  Send, Sparkles, Layers, HelpCircle, Award, Search,
  ArrowUpRight, ArrowRight, Factory, ChevronDown, ChevronUp, FileText, Check, Table, Wrench
} from 'lucide-react';

type HeroTab = 'FEATURES' | 'SPECIFICATIONS' | 'STANDARDS' | 'DIMENSIONS' | 'FITTINGS' | 'APPLICATIONS' | 'FAQs';

export const ProductDetailPage: React.FC<{
  product?: ProductItem;
  wp?: WpProductData;
  theme?: 'blue' | 'green';
}> = ({ product: productProp, wp, theme: themeProp }) => {
  const params = useParams() as Record<string, string | undefined>;
  const router = useRouter();
  const id = params.id;
  const catSlug = params.catSlug;
  const prodSlug = params.prodSlug;

  // Division theme: explicit prop wins, else WP division slug, else URL/static category.
  const resolvedCatSlug = catSlug || (productProp ? getCategorySlug(productProp.category) : undefined);
  const wpDivisionSlug = wp?.divisionSlug || '';
  const isIrrigation = themeProp
    ? themeProp === 'green'
    : wpDivisionSlug
      ? /irrigat/i.test(wpDivisionSlug)
      : resolvedCatSlug
        ? !isPipeCategorySlug(resolvedCatSlug)
        : false;

  // Theme accents: pipe = blue (unchanged), irrigation = green.
  const tText = isIrrigation ? 'text-[#1E8E3E]' : 'text-[#1575B3]';
  const tHoverText = isIrrigation ? 'hover:text-[#1E8E3E]' : 'hover:text-[#1575B3]';
  const tBg = isIrrigation ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]';
  const tBgHover = isIrrigation ? 'hover:bg-[#145E2A]' : 'hover:bg-[#0E588A]';
  const tHoverBg = isIrrigation ? 'hover:bg-[#1E8E3E]' : 'hover:bg-[#1575B3]';
  const tHoverBorder = isIrrigation ? 'hover:border-[#1E8E3E]' : 'hover:border-[#1575B3]';
  const tGroupHoverBg = isIrrigation ? 'group-hover:bg-[#1E8E3E]' : 'group-hover:bg-[#1575B3]';
  const tGroupHoverBorder = isIrrigation ? 'group-hover:border-[#1E8E3E]' : 'group-hover:border-[#1575B3]';
  const tGroupHoverText = isIrrigation ? 'group-hover:text-[#1E8E3E]' : 'group-hover:text-[#1575B3]';
  const tFocusBorder = isIrrigation ? 'focus:border-[#1E8E3E]' : 'focus:border-[#1575B3]';
  const tDot = isIrrigation ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]';

  const isWp = !!wp;
  const displayName = wp?.name || productProp?.name || 'Product';
  const displayTagline = wp?.tagline || 'Piping System';
  const displayImage = wp?.mainImage || productProp?.image || '';
  const DEFAULT_DESC_HTML = `<p>Engineered by Kothari Group for dependable performance, this system is built for Indian site conditions — tough water, harsh summers, and daily wear and tear. Every pipe and fitting passes strict quality checks for pressure endurance, dimensional accuracy and finish, so installations stay leak-free with minimal maintenance.</p><p>Designed for versatility, it suits residential apartments, independent villas, commercial complexes, public utilities and agricultural installations alike. Consistent material quality keeps flow smooth, joints reliable and service life long — even under continuous pressure and varying water quality.</p><p><strong>What makes it stand out?</strong></p><ul><li>Precision manufacturing to relevant IS / ASTM standards for dependable site performance.</li><li>Robust joints engineered against leaks, vibration loosening and pressure surges.</li><li>Corrosion-free, scale-resistant bore for steady flow and lower pumping cost.</li><li>UV and weather resistance for safe indoor as well as outdoor installation.</li><li>Easy handling and quick jointing that cuts installation time and labour effort.</li><li>Wide size range with compatible fittings, valves and accessories for complete systems.</li></ul><p>For sizes, standards, dimensions and system components, refer to the tabs below — or contact our engineering team for project-specific guidance.</p>`;
  const displayDescHtml = wp?.mainDescriptionHtml || productProp?.shortDescription || DEFAULT_DESC_HTML;
  
  const displayPdfUrl = wp?.pdfUrl || '';
  const displayPdfName = wp?.pdfName || 'Technical-Catalogue.pdf';
  const displayPdfSize = wp?.pdfSize || 0;
  
  const displayFaqs = wp?.faqs || productProp?.faqs || [];
  const displayCertImages = wp?.certificateImages || [];
  const displayVideoUrl = wp?.productVideoUrl || '';
  
  const displayRelated = wp?.relatedProducts || [];

  const [heroTab, setHeroTab] = useState<HeroTab>('FEATURES');
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [enquiry, setEnquiry] = useState({ name: '', email: '', phone: '' });
  const [enquirySent, setEnquirySent] = useState(false);
  const [formError, setFormError] = useState('');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);


    // Related Products Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  // Reset currentIndex if it goes out of bounds when itemsPerPage changes
  useEffect(() => {
    const maxIndex = Math.max(0, displayRelated.length - itemsPerPage);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, displayRelated.length, currentIndex]);

  const maxIndex = Math.max(0, displayRelated.length - itemsPerPage);
  const safeIndex = Math.min(currentIndex, maxIndex);
  const itemWidth = 100 / itemsPerPage;

  // Always show all tabs; missing content renders a placeholder inside the tab.
  const visibleTabs: { key: HeroTab; label: string }[] = useMemo(() => {
    return [
      { key: 'FEATURES' as HeroTab, label: 'Features' },
      { key: 'SPECIFICATIONS' as HeroTab, label: 'Specifications' },

       { key: 'APPLICATIONS' as HeroTab, label: 'Applications' },
      { key: 'STANDARDS' as HeroTab, label: 'Standards' },
      { key: 'DIMENSIONS' as HeroTab, label: 'Dimensions' },
      { key: 'FITTINGS' as HeroTab, label: 'Fittings' },
     
      { key: 'FAQs' as HeroTab, label: 'FAQs' },
    ];
  }, []);

  const isEmptyHtml = (html?: string) => {
    if (!html) return true;
    const text = html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    return text.length === 0;
  };

  const EmptyTabIcon: Record<string, React.ElementType> = {
    Features: Sparkles,
    Specifications: Factory,
    Standards: ShieldCheck,
    Dimensions: Table,
    Fittings: Wrench,
    Applications: Layers,
    FAQs: HelpCircle,
  };

  const EmptyTabPlaceholder: React.FC<{ label: string }> = ({ label }) => {
    const Icon = EmptyTabIcon[label] || FileText;
    return (
      <div className="py-2">
        <div className="border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-12 text-center max-w-xl mx-auto">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-md">
            <Icon className={`w-6 h-6 ${tText}`} />
          </div>
          <p className="text-white text-base font-semibold tracking-wide">No {label.toLowerCase()} available yet</p>
          <p className="text-white/70 text-xs mt-2 leading-relaxed">Detailed {label.toLowerCase()} for this product are coming soon — reach out to our team for assistance meanwhile.</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHeroTab(visibleTabs[0]?.key || 'FEATURES');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, catSlug, prodSlug, isWp]);

  useEffect(() => {
    if (visibleTabs.length && !visibleTabs.find((t) => t.key === heroTab)) {
      setHeroTab(visibleTabs[0].key);
    }
  }, [heroTab, visibleTabs]);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiry.name.trim() || !enquiry.email.trim() || !enquiry.phone.trim()) {
      setFormError('All fields are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email.trim())) {
      setFormError('Enter a valid email address.');
      return;
    }
    if (!/^\+?[0-9 ]{8,15}$/.test(enquiry.phone.trim())) {
      setFormError('Enter a valid phone number.');
      return;
    }
    setFormError('');
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
      setEnquiry({ name: '', email: '', phone: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 text-left font-sans antialiased">
      
      {/* PRODUCT HERO */}
      <section className="w-full bg-white border-b border-slate-200 pt-[88px]">
        <div className="w-full border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <nav className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-slate-500 overflow-x-auto whitespace-nowrap py-4">
              <Link href="/" className={`${tHoverText} transition-colors`}>Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              <Link href={`/products?division=${wp?.divisionSlug || 'pipe-division'}`} className={`${tHoverText} transition-colors`}>
                {wp?.divisionName || 'Division'}
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="text-slate-900 font-semibold truncate max-w-[220px] sm:max-w-[320px]" title={displayName}>{displayName}</span>
            </nav>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-stretch items-start">
            
            {/* LEFT — Image */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="group relative border border-slate-200 overflow-hidden flex-1 flex items-center justify-center min-h-[320px] lg:min-h-0">
                <img
                  src={displayImage}
                  alt={displayName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[420px] lg:max-h-none lg:h-full transition-transform duration-500 group-hover:scale-105"
                />
                {displayPdfUrl && (
                  <button
                    onClick={() => setBrochureOpen(true)}
                    aria-label="Download Product Brochure"
                    title="Download Product Brochure"
                    className={`absolute top-3 left-3 w-9 h-9 bg-white border border-slate-200 flex items-center justify-center text-slate-700 ${tHoverBg} hover:text-white ${tHoverBorder} ${tGroupHoverBg} group-hover:text-white ${tGroupHoverBorder} transition-colors shadow-sm`}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT — Title / Tagline / Description */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 py-2">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-serif font-light tracking-tight uppercase text-slate-900 leading-tight">
                  {displayName}
                </h1>
                <p className={`text-sm font-medium ${tText} mt-2 tracking-wide`}>{displayTagline}</p>
              </div>
              
              <div 
                className="text-sm text-slate-600 leading-relaxed space-y-3 border-t border-slate-200 pt-4 wp-html-content"
                dangerouslySetInnerHTML={{ __html: displayDescHtml }}
              />

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => { setEnquiryModalOpen(true); setFormError(''); }}
                  className={`inline-flex items-center gap-2 ${tBg} ${tBgHover} text-white text-sm font-mono tracking-widest uppercase px-6 py-4 transition-colors`}
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCertModalOpen(true)}
                  className={`inline-flex items-center gap-2 bg-white border border-slate-300 ${tHoverBorder} ${tHoverText} text-slate-700 text-sm font-mono tracking-widest uppercase px-6 py-4 transition-colors`}
                >
                  <Award className="w-4 h-4" /> View Certifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="relative w-full border-b border-white/20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${isIrrigation ? 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80' : 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80'})` }} />
        <div className={`absolute inset-0 bg-gradient-to-br ${isIrrigation ? 'from-[#145E2A]/95 via-[#1E8E3E]/90 to-[#052E16]/90' : 'from-[#0E588A]/95 via-[#1575B3]/90 to-[#083251]/90'}`} />
        
        <div className="relative z-10 w-full border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex gap-0 bg-transparent overflow-x-auto scrollbar-none -mx-4 sm:mx-0 px-4 sm:px-0">
              {visibleTabs.map((t) => {
                const Icon = t.key === 'FEATURES' ? Sparkles : t.key === 'SPECIFICATIONS' ? Factory : t.key === 'STANDARDS' ? ShieldCheck : t.key === 'DIMENSIONS' ? Table : t.key === 'FITTINGS' ? Wrench : t.key === 'APPLICATIONS' ? Layers : t.key === 'FAQs' ? HelpCircle : FileText;
                return (
                  <button
                    key={t.key}
                    onClick={() => setHeroTab(t.key)}
                    className={`flex-1 flex items-center justify-center gap-2 whitespace-nowrap px-2 sm:px-4 py-3.5 text-sm sm:text-base font-medium tracking-wide uppercase border-b-2 -mb-px transition-all duration-200 ${
                      heroTab === t.key
                        ? `bg-white ${tText} border-white shadow-sm`
                        : 'bg-transparent text-white/85 border-transparent hover:bg-white/10 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="py-8 sm:py-10 min-h-[320px]">
            
            {heroTab === 'FEATURES' && (
              isEmptyHtml(wp?.featuresHtml) ? (
                <EmptyTabPlaceholder label="Features" />
              ) : (
                <div className="py-2">
                  <h3 className="text-white text-2xl sm:text-4xl font-serif font-light uppercase tracking-wide text-center mb-8">Key Features</h3>
                  <div className="wp-tab-list" dangerouslySetInnerHTML={{ __html: wp?.featuresHtml || '' }} />
                </div>
              )
            )}

            {heroTab === 'SPECIFICATIONS' && (
              isEmptyHtml(wp?.specificationsHtml) ? (
                <EmptyTabPlaceholder label="Specifications" />
              ) : (
                <div className="py-2">
                  <h3 className="text-white text-2xl sm:text-4xl font-serif font-light uppercase tracking-wide text-center mb-8">Specifications</h3>
                  <div className="wp-tab-list" dangerouslySetInnerHTML={{ __html: wp?.specificationsHtml || '' }} />
                </div>
              )
            )}

            {heroTab === 'STANDARDS' && (
              isEmptyHtml(wp?.standardsHtml) ? (
                <EmptyTabPlaceholder label="Standards" />
              ) : (
                <div className="py-2">
                  <h3 className="text-white text-2xl sm:text-4xl font-serif font-light uppercase tracking-wide text-center mb-8">Standards</h3>
                  <div className="wp-tab-table bg-white overflow-hidden shadow-lg" dangerouslySetInnerHTML={{ __html: wp?.standardsHtml || '' }} />
                </div>
              )
            )}

             {heroTab === 'APPLICATIONS' && (
              isEmptyHtml(wp?.applicationsHtml) ? (
                <EmptyTabPlaceholder label="Applications" />
              ) : (
                <div className="py-2">
                  <h3 className="text-white text-2xl sm:text-4xl font-serif font-light uppercase tracking-wide text-center mb-8">Applications</h3>
                  <div className="wp-tab-list" dangerouslySetInnerHTML={{ __html: wp?.applicationsHtml || '' }} />
                </div>
              )
            )}

            {heroTab === 'DIMENSIONS' && (
              isEmptyHtml(wp?.dimensionsHtml) ? (
                <EmptyTabPlaceholder label="Dimensions" />
              ) : (
                <div className="py-2">
                  <h3 className="text-white text-2xl sm:text-4xl font-serif font-light uppercase tracking-wide text-center mb-8">Dimensions</h3>
                  <div className="wp-tab-table bg-white overflow-hidden shadow-lg" dangerouslySetInnerHTML={{ __html: wp?.dimensionsHtml || '' }} />
                </div>
              )
            )}

            {heroTab === 'FITTINGS' && (
              isEmptyHtml(wp?.fittingsHtml) ? (
                <EmptyTabPlaceholder label="Fittings" />
              ) : (
                <div className="py-2">
                  <h3 className="text-white text-2xl sm:text-4xl font-serif font-light uppercase tracking-wide text-center mb-8">Fittings</h3>
                  <div className="wp-tab-fittings" dangerouslySetInnerHTML={{ __html: wp?.fittingsHtml || '' }} />
                </div>
              )
            )}

           

            {heroTab === 'FAQs' && (
              (!displayFaqs || displayFaqs.length === 0) ? (
                <EmptyTabPlaceholder label="FAQs" />
              ) : (
              <div className="py-2">
                <h3 className="text-white text-2xl sm:text-4xl font-serif font-light uppercase tracking-wide text-center mb-8">FAQs</h3>
                <div className="space-y-3 max-w-4xl mx-auto">
                  {displayFaqs.map((faq, idx) => {
                    const open = expandedFaq === idx;
                    return (
                      <div key={idx} className={`border overflow-hidden backdrop-blur-sm transition-all ${open ? 'border-white/30 bg-white/20 shadow-md' : 'border-white/20 bg-white/10 hover:bg-white/15'}`}>
                        <button onClick={() => setExpandedFaq(open ? null : idx)} className={`w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 transition-colors ${open ? 'bg-white/10 text-white' : 'bg-transparent text-white hover:bg-white/5'}`}>
                          <span className={`text-sm ${open ? 'font-semibold text-white' : 'font-medium text-white'}`}>{faq.question}</span>
                          {open ? <ChevronUp className="w-4 h-4 text-white shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/80 shrink-0" />}
                        </button>
                        {open && <div className="px-4 py-3.5 text-sm text-slate-700 leading-relaxed bg-white border-t border-white/30">{faq.answer}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PRODUCT VIDEO */}
      {displayVideoUrl && (
        <section className="w-full bg-white py-10 sm:py-14 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-5 border-b border-slate-300">
              <div>
                <h2 className="text-2xl sm:text-4xl font-light tracking-tight uppercase font-serif text-slate-900">
                  Product Video
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
                Watch Kothari CPVC in action — manufacturing precision to on-site installation.
              </p>
            </div>
            <div className="relative aspect-video w-full max-w-4xl mx-auto bg-slate-950 overflow-hidden border border-slate-200 shadow-lg">
              <iframe
                src={displayVideoUrl}
                title="Kothari Product Video"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

            {/* RELATED PRODUCTS (Slider with Dots) */}
      {displayRelated.length > 0 && (
        <section className={`w-full ${isIrrigation ? 'bg-[#EAF6EE]' : 'bg-[#F5F6F8]'} py-16 border-b ${isIrrigation ? 'border-[#1E8E3E]/15' : 'border-slate-300/70'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
              <div>
                <h2 className="text-2xl sm:text-4xl font-light tracking-tight uppercase font-serif text-slate-900">
                  Related Products
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
                Complementary systems for seamless integration and lasting performance.
              </p>
            </div>
            
            {/* Slider Track */}
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${safeIndex * itemWidth}%` }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              >
                {displayRelated.map((rel) => {
                  const isWpRel = !!rel.slug && !!rel.categorySlug;
                  const href = isWpRel ? `/${rel.categorySlug}/${rel.slug}` : getProductHref(rel);
                  const Wrapper: any = isWpRel ? Link : 'button';
                  const wrapperProps = isWpRel ? { href } : { onClick: () => router.push(href) };
                  
                  return (
                    <div
                      key={rel.id}
                      style={{ width: `${itemWidth}%` }}
                      className="shrink-0 px-4"
                    >
                      <Wrapper
                        {...wrapperProps}
                        className={`group relative bg-white border border-slate-200/90 flex flex-col h-full shadow-sm hover:shadow-xl ${tHoverBorder} transition-all duration-500 overflow-hidden text-left`}
                      >
                        <div className={`relative aspect-[16/10] overflow-hidden border-b border-slate-200 ${isWpRel ? '' : 'bg-slate-900'}`}>
                          <img 
                            src={rel.image} 
                            alt={rel.name} 
                            referrerPolicy="no-referrer" 
                            className={`w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out ${isWpRel ? 'object-contain' : 'object-cover'}`} 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                          {/* {rel.category && (
                            <span className="absolute top-3 left-3 bg-[#1575B3] text-white text-[10px] font-mono tracking-widest uppercase px-2.5 py-1">
                              {rel.category}
                            </span>
                          )} */}
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                          <div className="space-y-3">
                            <h3 className={`text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight ${tGroupHoverText} transition-colors duration-300 line-clamp-2`}>
                              {rel.name}
                            </h3>
                            <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                              {(rel as { tagline?: string }).tagline || rel.shortDescription}
                            </p>
                          </div>
                           <div className={`pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase ${tGroupHoverText} transition-colors`}>
                            <span>View Product</span>
                            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </Wrapper>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Slider Dots */}
            {maxIndex > 0 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1 transition-all duration-300 ${
                      safeIndex === idx ? `${tDot} w-6` : 'bg-slate-300 w-2 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            )}
            
          </div>
        </section>
      )}

      {/* Brochure Modal */}
      {brochureOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setBrochureOpen(false)} />
          <div className="relative bg-white border border-slate-200 max-w-md w-full shadow-2xl">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center"><Download className={`w-5 h-5 ${tText}`} /></div>
              <div>
                <h3 className="text-lg font-serif text-slate-900">Product Brochure</h3>
                <p className="text-xs text-slate-600 mt-1">Official Kothari PDF specification sheet for {displayName}.</p>
              </div>
              <div className="bg-[#F5F6F8] border border-slate-200 p-3 space-y-1">
                <span className={`block text-xs font-mono font-semibold ${tText}`}>{displayPdfName}</span>
                <span className="block text-[11px] text-slate-500">
                  PDF · {displayPdfSize ? `${(displayPdfSize / 1048576).toFixed(1)} MB` : '—'}
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                {displayPdfUrl ? (
                  <a
                    href={displayPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${tBg} ${tBgHover} text-white text-xs font-mono tracking-widest uppercase py-3 inline-flex items-center justify-center gap-1.5`}
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                ) : (
                  <button onClick={() => setBrochureOpen(false)} className={`flex-1 ${tBg} ${tBgHover} text-white text-xs font-mono tracking-widest uppercase py-3 inline-flex items-center justify-center gap-1.5`}>
                    <Download className="w-4 h-4" /> Not Available
                  </button>
                )}
                <button onClick={() => setBrochureOpen(false)} className="px-6 bg-[#F5F6F8] border border-slate-200 text-xs font-mono tracking-widest uppercase hover:bg-slate-100">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificates Modal */}
      {certModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCertModalOpen(false)} />
          <div className="relative bg-white w-full max-w-2xl shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
              <h3 className="text-lg font-serif font-light uppercase text-slate-900 tracking-tight">Certifications</h3>
              <button onClick={() => setCertModalOpen(false)} className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors">✕</button>
            </div>
            <div className="p-6">
              {displayCertImages.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {displayCertImages.map((img, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 p-3 flex items-center justify-center">
                      <img src={img.src} alt="Certificate" referrerPolicy="no-referrer" className="max-h-40 max-w-full w-auto h-auto object-contain" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 py-10 text-center">No certificates available</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setEnquiryModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setEnquiryModalOpen(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors">✕</button>
            <div className="p-6 sm:p-8">
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-serif font-light uppercase text-slate-900 tracking-tight">Request a Quote</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Tell us what you need — our engineering team will respond within 4 hours.</p>
              </div>
              {enquirySent ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 flex flex-col items-center text-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  <h4 className="text-sm font-semibold text-slate-900">Request Received</h4>
                  <p className="text-xs text-slate-600">Thank you, <span className="font-semibold">{enquiry.name}</span> — our team will contact you on {enquiry.phone} shortly.</p>
                  <button onClick={() => { setEnquiryModalOpen(false); setTimeout(() => setEnquirySent(false), 300); }} className={`mt-2 text-xs font-mono tracking-widest uppercase ${tText} hover:underline`}>Close</button>
                </div>
              ) : (
                <form onSubmit={(e) => { handleEnquiry(e); if (!formError) setTimeout(() => setEnquiryModalOpen(false), 1500); }} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-slate-600 mb-1.5">Name *</label>
                    <input value={enquiry.name} onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })} placeholder="Your full name" className={`w-full bg-[#F5F6F8] border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${tFocusBorder}`} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-slate-600 mb-1.5">Email *</label>
                    <input type="email" value={enquiry.email} onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })} placeholder="name@company.com" className={`w-full bg-[#F5F6F8] border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${tFocusBorder}`} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-slate-600 mb-1.5">Phone *</label>
                    <input value={enquiry.phone} onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })} placeholder="+91 98765 43210" className={`w-full bg-[#F5F6F8] border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${tFocusBorder}`} />
                  </div>
                  {formError && <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2">{formError}</p>}
                  <button type="submit" className={`w-full ${tBg} ${tBgHover} text-white text-xs font-mono tracking-widest uppercase py-3.5 inline-flex items-center justify-center gap-2 transition-colors`}>
                    <Send className="w-4 h-4" /> Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};