import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Star } from 'lucide-react';
import { pricingPlans } from '../data/content';
import { WebsiteType } from '../types';

interface PricingProps {
  onSelectPlan: (websiteType: WebsiteType) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const mapPlanToWebsiteType = (planId: string): WebsiteType => {
    switch (planId) {
      case 'starter':
        return 'Landing Page';
      case 'business':
        return 'Business Website';
      case 'custom':
      default:
        return 'Custom Website';
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#090e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Clear Transparent Pricing · ₹4,000 to ₹8,000
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Transparent Pricing As Per Features.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            One-time upfront investment ranging strictly from ₹4,000 to ₹8,000 depending on the features your business needs. Zero hidden fees or forced monthly contracts.
          </p>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#131d36] to-[#0f172a] border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 md:-translate-y-2'
                    : 'bg-[#0f172a] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white font-bold text-xs shadow-md tracking-wider uppercase flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    {isPopular && <Zap className="w-5 h-5 text-indigo-400" />}
                  </div>

                  <p className="text-xs text-slate-400 mb-6 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  <div className="pb-6 mb-6 border-b border-slate-800/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-white font-mono tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400">{plan.priceNote}</span>
                    </div>
                    <div className="text-[11px] text-indigo-400 mt-1 font-medium">
                      Best for: {plan.idealFor}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                      Everything Included:
                    </span>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(mapPlanToWebsiteType(plan.id))}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isPopular
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Select {plan.name} Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Security & Warranty Note */}
        <div className="mt-14 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400">
          ✨ Need a custom setup or specific combination? Pricing scales comfortably between ₹4,000 and ₹8,000 based on exact features. Use our quote builder below!
        </div>

      </div>
    </section>
  );
};
