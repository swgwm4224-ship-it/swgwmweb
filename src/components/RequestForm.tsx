import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Copy,
  Check,
  Calculator,
  Mail,
  Phone,
} from 'lucide-react';
import { BusinessType, WebsiteType } from '../types';
import { CONTACT_INFO } from '../data/contact';

interface RequestFormProps {
  initialBusinessType?: BusinessType;
  initialWebsiteType?: WebsiteType;
  onSubmittedModal?: (summary: {
    businessName: string;
    businessType: string;
    websiteType: string;
    phone: string;
    features: string[];
    estimatedPrice: number;
    referenceId: string;
  }) => void;
}

export const RequestForm: React.FC<RequestFormProps> = ({
  initialBusinessType = 'Restaurant',
  initialWebsiteType = 'Business Website',
  onSubmittedModal,
}) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState<BusinessType>(initialBusinessType);
  const [websiteType, setWebsiteType] = useState<WebsiteType>(initialWebsiteType);
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'WhatsApp Direct Ordering',
    'Google Maps Location',
    'High-Res Gallery',
  ]);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Sync if props update
  useEffect(() => {
    if (initialBusinessType) setBusinessType(initialBusinessType);
  }, [initialBusinessType]);

  useEffect(() => {
    if (initialWebsiteType) setWebsiteType(initialWebsiteType);
  }, [initialWebsiteType]);

  const availableFeatures = [
    { id: 'whatsapp', label: 'WhatsApp Direct Ordering', price: 600 },
    { id: 'maps', label: 'Google Maps Location', price: 500 },
    { id: 'insta', label: 'Instagram & Social Feeds', price: 400 },
    { id: 'gallery', label: 'High-Res Gallery', price: 500 },
    { id: 'form', label: 'Lead Contact Form', price: 500 },
    { id: 'booking', label: 'Table / Booking Inquiry', price: 500 },
  ];

  const toggleFeature = (label: string) => {
    if (selectedFeatures.includes(label)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== label));
    } else {
      setSelectedFeatures([...selectedFeatures, label]);
    }
  };

  // Base price calculation (₹4,000 to ₹8,000 range)
  const getBasePrice = () => {
    switch (websiteType) {
      case 'Landing Page':
        return 4000;
      case 'Online Menu':
        return 4500;
      case 'Business Website':
        return 5000;
      case 'Portfolio':
        return 5000;
      case 'Product Website':
        return 5500;
      case 'Custom Website':
        return 6000;
      default:
        return 4000;
    }
  };

  // Feature cost calculation
  const getFeaturesCost = () => {
    return selectedFeatures.reduce((total, featLabel) => {
      const featObj = availableFeatures.find((f) => f.label === featLabel);
      return total + (featObj ? featObj.price : 500);
    }, 0);
  };

  // Price range strictly mapped ₹4,000 to ₹8,000 as per features
  const estimatedPrice = Math.min(8000, Math.max(4000, getBasePrice() + getFeaturesCost()));

  const generateMessage = () => {
    return `Hello SWGWMWEB! 👋

I would like to get a modern website for my business.

• Business Name: ${businessName || '[Not specified yet]'}
• Industry / Type: ${businessType}
• Website Type: ${websiteType}
• Selected Features: ${selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'Standard package'}
• Estimated Quote: ₹${estimatedPrice}
• Client Contact Phone: ${phone || '[Not provided]'}

Business Brief:
${description || 'Please share next steps for design review and turnaround.'}`;
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateMessage();
    const url = CONTACT_INFO.getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = () => {
    const subject = `Website Project Inquiry: ${businessName || businessType}`;
    const body = generateMessage();
    const url = CONTACT_INFO.getMailtoUrl(subject, body);
    window.location.href = url;
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      alert('Please enter your business name.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      const refId = `SWG-${Math.floor(100000 + Math.random() * 900000)}`;
      if (onSubmittedModal) {
        onSubmittedModal({
          businessName,
          businessType,
          websiteType,
          phone,
          features: selectedFeatures,
          estimatedPrice,
          referenceId: refId,
        });
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#090e1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Start Your Project · Instant Live Quote
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tell Us What You Need.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Customize your package below to get a transparent price estimate and instantly dispatch your project brief directly to our team via WhatsApp or web submission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Form Controls Column */}
          <div className="lg:col-span-7 bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              
              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Business / Brand Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Royal Spice Bistro / Apex Motors"
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>

              {/* Two Column Grid for Business Type & Website Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Industry / Business Type
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value as BusinessType)}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm cursor-pointer"
                  >
                    <option value="Restaurant">Restaurant & Cafe</option>
                    <option value="Shop">Local Shop & Retail</option>
                    <option value="Construction">Construction & Contractor</option>
                    <option value="Hotel">Hotel & Homestay</option>
                    <option value="Professional Service">Professional Service</option>
                    <option value="Education">Education & Academy</option>
                    <option value="Company">Company & Startup</option>
                    <option value="Other">Other Custom Industry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Website Format
                  </label>
                  <select
                    value={websiteType}
                    onChange={(e) => setWebsiteType(e.target.value as WebsiteType)}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm cursor-pointer"
                  >
                    <option value="Business Website">Business Website (Multi-Page)</option>
                    <option value="Landing Page">Landing Page (Single Page)</option>
                    <option value="Online Menu">Online QR Menu</option>
                    <option value="Product Website">Product Catalog</option>
                    <option value="Portfolio">Portfolio Showcase</option>
                    <option value="Custom Website">Custom Web Application</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes: Desired Features */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Select Features You Need
                  </label>
                  <span className="text-[11px] text-indigo-400 font-mono">
                    Pricing adjusts ₹4,000 – ₹8,000
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableFeatures.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.label);
                    return (
                      <button
                        type="button"
                        key={feat.id}
                        onClick={() => toggleFeature(feat.label)}
                        className={`px-3.5 py-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isChecked
                            ? 'bg-indigo-950/60 border-indigo-600/80 text-white shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                              isChecked
                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                : 'border-slate-600 bg-transparent'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </span>
                          <span>{feat.label}</span>
                        </span>
                        <span className={`text-[11px] font-mono font-semibold ${isChecked ? 'text-emerald-400' : 'text-slate-500'}`}>
                          +₹{feat.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Your WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-mono"
                />
              </div>

              {/* Business Description */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Tell Us About Your Offerings / Goals
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your dishes, services, products, or timeline requirements..."
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm leading-relaxed"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp →</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 py-3.5 px-5 rounded-xl font-bold text-sm text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 active:scale-98 border border-slate-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>Send via Gmail / Email</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleOnlineSubmit}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl font-semibold text-xs text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-800/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Logging Request...' : 'Or Generate Online Ref Code'}</span>
                </button>

                <span className="text-[11px] text-slate-400">
                  Call / WhatsApp: <strong className="text-emerald-400 font-mono">{CONTACT_INFO.phoneFormatted}</strong>
                </span>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                🔒 No advance commitment required. We discuss requirements and quote upfront.
              </div>

            </form>
          </div>

          {/* Right Live Preview & Price Estimator Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Pricing Estimator Widget */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                  <Calculator className="w-4 h-4 text-indigo-400" />
                  <span>Live Cost Estimator</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">₹4,000 – ₹8,000 Plan</span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
                    ₹{estimatedPrice.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-slate-400">One-time transparent investment (No monthly fees)</div>
                </div>

                <div className="text-right text-xs text-slate-400 font-mono">
                  <div>Turnaround: 3-5 Days</div>
                  <div className="text-emerald-400">Includes 1 Yr Support</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Base Architecture ({websiteType}):</span>
                  <span className="font-mono text-slate-200">₹{getBasePrice().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Feature Add-ons ({selectedFeatures.length}):</span>
                  <span className="font-mono text-slate-200">+₹{getFeaturesCost().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold pt-1 border-t border-slate-800/60">
                  <span>Mobile Friendly & SSL Security:</span>
                  <span>Included FREE</span>
                </div>
              </div>
            </div>

            {/* Live WhatsApp Draft Preview */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Live Message Draft</span>
                </span>
                <button
                  onClick={handleCopyMessage}
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                {generateMessage()}
              </div>

              <p className="text-[11px] text-slate-400">
                Preloaded for immediate delivery to <span className="text-emerald-400 font-mono font-semibold">{CONTACT_INFO.phoneFormatted}</span> and <span className="text-indigo-400 font-mono font-semibold">{CONTACT_INFO.email}</span>.
              </p>
            </div>

            {/* Direct Support Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/50 to-slate-900 border border-indigo-900/40 text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Direct Contact & Consultation</div>
                  <div className="text-[11px] text-slate-400">Speak directly with our senior web design engineers.</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${CONTACT_INFO.phoneTel}`}
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex items-center gap-2 text-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">Direct Phone / Call</div>
                    <div className="font-mono font-bold text-white">{CONTACT_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex items-center gap-2 text-slate-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">Official Gmail</div>
                    <div className="font-mono font-bold text-white truncate max-w-[140px]">{CONTACT_INFO.email}</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
