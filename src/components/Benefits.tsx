import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, TrendingUp, Users, Smartphone, Clock } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Look Professional from Day One',
      description: 'First impressions happen in 0.05 seconds. A crisp modern layout gives customers immediate confidence in your craft.',
      outcome: '94% higher trust',
    },
    {
      title: 'Be Easy to Find on Google Maps',
      description: 'Never lose a local customer to outdated listings. One centralized, authoritative link for your address, hours, and catalog.',
      outcome: '3x local visibility',
    },
    {
      title: 'Convert Casual Browsers into Enquiries',
      description: 'Eliminate friction with direct WhatsApp buttons, call triggers, and quick estimate forms that convert visitors into revenue.',
      outcome: 'Direct buyer inquiries',
    },
    {
      title: 'Spotlight Your Real Completed Work',
      description: 'Show prospective buyers real photographs of your food, finished construction sites, showroom tiles, or services.',
      outcome: 'Proof that sells',
    },
    {
      title: 'Tailored for Your Exact Niche',
      description: 'No generic boilerplate themes. Every color, navigation hierarchy, and callout is built around how your customers buy.',
      outcome: '100% custom-built',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#090e1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Impact Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-900/40 shadow-2xl overflow-hidden"
            >
              {/* Background ambient ring */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  SWGWMWEB Advantage
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  More Than Just a Website. <br />
                  <span className="text-slate-400 font-normal">A 24/7 Digital Sales Rep.</span>
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  While you focus on running your business, preparing food, or finishing client projects, your website continuously captures leads and guides customers right to your door.
                </p>

                {/* Scorecard comparison */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Lead Conversion</div>
                        <div className="text-[11px] text-slate-400">Direct WhatsApp clicks</div>
                      </div>
                    </div>
                    <span className="text-sm font-bold font-mono text-emerald-400">+140%</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Fast Deployment</div>
                        <div className="text-[11px] text-slate-400">Concept to live URL</div>
                      </div>
                    </div>
                    <span className="text-sm font-bold font-mono text-indigo-400">3-5 Days</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Mobile Speed Rating</div>
                        <div className="text-[11px] text-slate-400">Google Lighthouse Audit</div>
                      </div>
                    </div>
                    <span className="text-sm font-bold font-mono text-cyan-400">99 / 100</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Benefit List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Why Work With Us · Measurable Value
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Designed to Give Your Business an Unfair Advantage.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Most web templates are bloated and confusing. We build clean, purpose-driven digital experiences where customers find what they need in seconds.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {benefits.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 pl-7 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <span className="self-start sm:self-center pl-7 sm:pl-0 text-xs font-semibold font-mono text-indigo-400 shrink-0">
                    {item.outcome}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
