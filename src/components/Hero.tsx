import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Zap, ShieldCheck, Smartphone, ExternalLink, Globe } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork }) => {
  // 3D tilt state for browser mockup
  const [rotateX, setRotateX] = useState(4);
  const [rotateY, setRotateY] = useState(-6);
  const [activePreviewTab, setActivePreviewTab] = useState<'home' | 'menu' | 'contact'>('home');
  const [simulatedOrderSent, setSimulatedOrderSent] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotateX(-y * 0.035);
    setRotateY(x * 0.035);
  };

  const handleMouseLeave = () => {
    setRotateX(3);
    setRotateY(-5);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-5 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Clean unboxed kicker with dot separator - Anti-slop rule */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
              <span>Modern Websites</span>
              <span className="text-slate-600">·</span>
              <span>Fast Turnaround</span>
              <span className="text-slate-600">·</span>
              <span>Built for Conversion</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Your Business <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Deserves to Be Seen Online.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed"
            >
              We craft high-speed, mobile-responsive websites that turn casual local searches into paying customers. Complete with WhatsApp ordering, Google Maps, and interactive galleries.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 cursor-pointer"
              >
                <span>Build My Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Explore Interactive Showcase</span>
              </button>
            </motion.div>

            {/* Qualitative trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mobile First Responsive</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>0.3s Lightning Speed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Browser Mockup */}
          <div className="lg:col-span-6 relative perspective-[1200px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-1.5 border border-slate-700/80 shadow-2xl shadow-black/60 group"
            >
              {/* Browser Window Chrome */}
              <div className="rounded-xl overflow-hidden bg-[#0e1424] border border-slate-800">
                {/* Top Title Bar */}
                <div className="h-10 bg-slate-900/90 px-4 flex items-center justify-between border-b border-slate-800 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  
                  {/* Address bar */}
                  <div className="flex-1 max-w-[240px] mx-3 h-6 bg-slate-950/80 border border-slate-800 rounded-md px-2.5 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Globe className="w-3 h-3 text-indigo-400 shrink-0" />
                    <span className="text-slate-200">yourbusiness.com</span>
                    <span className="ml-auto text-[10px] text-emerald-400">SSL</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">Live Demo</span>
                  </div>
                </div>

                {/* Simulated Webpage Content */}
                <div className="p-5 sm:p-6 bg-gradient-to-b from-[#0f172a] via-[#0d1424] to-[#0b0f19] min-h-[380px] flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle inner decorative glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Simulated Nav */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                        B
                      </div>
                      <span className="text-sm font-bold text-white tracking-wide">
                        YOUR BUSINESS
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px]">
                      <button
                        onClick={() => setActivePreviewTab('home')}
                        className={`px-2 py-1 rounded transition-colors ${
                          activePreviewTab === 'home' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Home
                      </button>
                      <button
                        onClick={() => setActivePreviewTab('menu')}
                        className={`px-2 py-1 rounded transition-colors ${
                          activePreviewTab === 'menu' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Services
                      </button>
                      <button
                        onClick={() => setActivePreviewTab('contact')}
                        className={`px-2 py-1 rounded transition-colors ${
                          activePreviewTab === 'contact' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Contact
                      </button>
                    </div>
                  </div>

                  {/* Simulated Body Content based on Tab */}
                  <div className="my-auto py-5">
                    {activePreviewTab === 'home' && (
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2.5 py-1 rounded-full">
                          <span>✨ Open Today · 9:00 AM – 9:00 PM</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                          Modern Service Built For Real Growth.
                        </h3>
                        <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                          Clean, high-performance website tailored for local customer discoverability, instant inquiries, and online credibility.
                        </p>
                        
                        <div className="flex items-center gap-2.5 pt-2">
                          <button
                            onClick={() => {
                              setSimulatedOrderSent(true);
                              setTimeout(() => setSimulatedOrderSent(false), 2500);
                            }}
                            className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                          >
                            <span>{simulatedOrderSent ? 'Enquiry Sent! ✓' : 'Message on WhatsApp →'}</span>
                          </button>
                          <span className="text-[11px] text-slate-400">Response time: ~5 mins</span>
                        </div>
                      </div>
                    )}

                    {activePreviewTab === 'menu' && (
                      <div className="space-y-3">
                        <span className="text-xs font-semibold text-cyan-400">Featured Offerings</span>
                        <div className="grid grid-cols-2 gap-2 text-left">
                          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                            <div className="text-xs font-bold text-white">Signature Service</div>
                            <div className="text-[11px] text-slate-400">High efficiency turnaround</div>
                            <div className="text-xs font-semibold text-indigo-400 mt-1">₹499 · Fast delivery</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                            <div className="text-xs font-bold text-white">Custom Consultation</div>
                            <div className="text-[11px] text-slate-400">1-on-1 expert advisory</div>
                            <div className="text-xs font-semibold text-emerald-400 mt-1">Free 15-min call</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activePreviewTab === 'contact' && (
                      <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg space-y-2 text-left">
                        <div className="text-xs font-bold text-white">Find Us on Google Maps</div>
                        <div className="text-[11px] text-slate-300">📍 Main Road Commercial Center, Sector 4</div>
                        <div className="text-[11px] text-emerald-400 font-medium">📞 Direct Helpline: +91 88224 70469</div>
                        <div className="text-[11px] text-indigo-300 font-medium">✉️ swgwm4224@gmail.com</div>
                      </div>
                    )}
                  </div>

                  {/* Simulated Footer Bar */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                    <span>© 2026 Your Business</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Instant WhatsApp Connected
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Badges with Physics Feel */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-white px-3.5 py-2 rounded-xl shadow-xl shadow-black/50 text-xs font-bold flex items-center gap-2 pointer-events-none"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>100% Mobile Ready</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-white px-3.5 py-2 rounded-xl shadow-xl shadow-black/50 text-xs font-bold flex items-center gap-2 pointer-events-none"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>0.3s Page Speed</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Quantified Metrics Band (Claim-to-Proof Adjacency) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">3-5 Days</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Average Turnaround</div>
          </div>
          <div className="text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">99/100</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Google Speed Score</div>
          </div>
          <div className="text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Mobile Responsive</div>
          </div>
          <div className="text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono tabular-nums">3.4x</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Average Customer Inquiries</div>
          </div>
        </div>

      </div>
    </section>
  );
};
