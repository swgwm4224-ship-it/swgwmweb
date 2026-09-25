import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Check,
  ArrowRight,
  ExternalLink,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Sparkles,
} from 'lucide-react';
import { showcaseList } from '../data/content';
import { BusinessType } from '../types';

interface ShowcaseProps {
  onSelectStyle: (businessType: BusinessType) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onSelectStyle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Restaurant');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [inquirySent, setInquirySent] = useState(false);

  const currentItem = showcaseList.find((item) => item.id === activeCategory) || showcaseList[0];

  const getContainerWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'max-w-[390px]';
      case 'tablet':
        return 'max-w-[640px]';
      case 'desktop':
      default:
        return 'max-w-5xl';
    }
  };

  return (
    <section id="showcase" className="py-20 md:py-28 bg-[#080d18] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Interactive Live Preview · Multi-Device Simulation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            See What Your Business Could Look Like.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Switch between real-world industry designs and toggle device viewports to test mobile, tablet, and desktop responsiveness.
          </p>
        </div>

        {/* Top Controls: Category Tabs & Device Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl">
            {showcaseList.map((item) => {
              const isActive = item.id === activeCategory;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveCategory(item.id);
                    setInquirySent(false);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.id}
                </button>
              );
            })}
          </div>

          {/* Viewport Device Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              onClick={() => setDeviceMode('desktop')}
              title="Desktop View"
              className={`p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                deviceMode === 'desktop'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">Desktop</span>
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              title="Tablet View"
              className={`p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                deviceMode === 'tablet'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">Tablet</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              title="Mobile View"
              className={`p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                deviceMode === 'mobile'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">Mobile</span>
            </button>
          </div>

        </div>

        {/* Live Interactive Browser Frame */}
        <div className="flex justify-center transition-all duration-300">
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className={`w-full ${getContainerWidth()} rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden`}
          >
            {/* Browser Top Chrome */}
            <div className="h-10 bg-slate-950 px-4 flex items-center justify-between border-b border-slate-800 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* Address bar */}
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-[11px] text-slate-400 font-mono">
                <span className="text-slate-500">https://</span>
                <span className="text-white font-medium">
                  {currentItem.id.toLowerCase()}-demo.swgwmweb.com
                </span>
                <span className="text-[10px] text-emerald-400 ml-1">● Live</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 hidden sm:inline uppercase tracking-wider">
                  {deviceMode} mode
                </span>
              </div>
            </div>

            {/* Inner Live Webpage Simulation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id + deviceMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 bg-[#0d1424] text-slate-200"
              >
                
                {/* Header in simulated site */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-md"
                      style={{ backgroundColor: currentItem.color }}
                    >
                      {currentItem.id.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">
                        {currentItem.id.toUpperCase()} STUDIO
                      </div>
                      <div className="text-[10px] text-slate-400">{currentItem.category}</div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 text-xs text-slate-300">
                    <span>Menu / Catalog</span>
                    <span>Reviews</span>
                    <span>Location</span>
                    <button
                      onClick={() => setInquirySent(true)}
                      className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>

                {/* Simulated Hero Section */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800" style={{ color: currentItem.color }}>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentItem.tagline}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      {currentItem.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                      {currentItem.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => {
                          setInquirySent(true);
                          setTimeout(() => setInquirySent(false), 3000);
                        }}
                        className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 inline-flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
                        style={{ backgroundColor: currentItem.color }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{inquirySent ? 'Customer Message Sent! ✓' : 'Send Instant Inquiry'}</span>
                      </button>

                      <button
                        onClick={() => onSelectStyle(currentItem.id as BusinessType)}
                        className="px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Build in this Style</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Features checklist inside simulation */}
                    <div className="pt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                      {currentItem.features.map((feat) => (
                        <span key={feat} className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right side in simulation: Live Sample Content Card */}
                  <div className="md:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-white pb-2 border-b border-slate-800">
                      <span>Featured Highlights</span>
                      <span className="text-[10px] text-slate-400">Live preview data</span>
                    </div>

                    <div className="space-y-2">
                      {currentItem.sampleItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <div className="text-xs font-semibold text-white">{item.name}</div>
                            <div className="text-[10px] text-slate-400">{item.detail}</div>
                          </div>
                          {item.price && (
                            <div
                              className="text-xs font-bold font-mono ml-2 whitespace-nowrap"
                              style={{ color: currentItem.color }}
                            >
                              {item.price}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        Main Market Pin
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Phone className="w-3 h-3" />
                        One-Tap Call Ready
                      </span>
                    </div>
                  </div>

                </div>

                {/* Simulated Metrics Strip */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  {currentItem.metrics.map((metric, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-900/50">
                      <div className="text-sm font-bold text-white font-mono">{metric.value}</div>
                      <div className="text-[10px] text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>

          </motion.div>
        </div>

        {/* Bottom CTA for Showcase */}
        <div className="text-center mt-10">
          <button
            onClick={() => onSelectStyle(currentItem.id as BusinessType)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <span>I Want a Website Like This</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
