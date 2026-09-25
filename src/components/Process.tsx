import React from 'react';
import { motion } from 'motion/react';
import { Send, Code2, Rocket, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onStartProject: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us Your Needs',
      summary: 'Send your name, services, and photos via WhatsApp or our instant form.',
      details: [
        'Business name & preferred domain',
        'Photos of your shop, dishes, or work',
        'Price list, menu, or service brochure',
        'Contact phone & Google Maps location',
      ],
      icon: Send,
      color: 'text-indigo-400',
      border: 'group-hover:border-indigo-500/60',
    },
    {
      num: '02',
      title: 'We Design & Build',
      summary: 'Our team crafts your custom website with animations, mobile testing, and SEO.',
      details: [
        'Bespoke modern UI matching your brand',
        'Interactive WhatsApp & Maps buttons',
        'Extreme speed optimization for mobile',
        'Private interactive staging preview link',
      ],
      icon: Code2,
      color: 'text-purple-400',
      border: 'group-hover:border-purple-500/60',
    },
    {
      num: '03',
      title: 'Review & Go Live',
      summary: 'Test everything on your phone, approve the final result, and connect your domain.',
      details: [
        'Review on your smartphone & desktop',
        'Fine-tune any text, photos, or prices',
        'Live domain launch with SSL certificate',
        'Ready to welcome new paying clients',
      ],
      icon: Rocket,
      color: 'text-emerald-400',
      border: 'group-hover:border-emerald-500/60',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            The Roadmap · Zero Stress Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Idea to Live Website in 3 Steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            You don't need any technical skills or coding knowledge. We handle the heavy lifting while you focus on running your business.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group relative p-8 rounded-2xl bg-[#0f172a] border border-slate-800 transition-all duration-300 flex flex-col justify-between hover:bg-[#121c33] ${step.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl text-slate-700/80 group-hover:text-slate-500 transition-colors font-mono">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {step.summary}
                  </p>

                  <ul className="space-y-2 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
                    {step.details.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {idx === 0 ? 'Step 1 of 3 · Discovery' : idx === 1 ? 'Step 2 of 3 · Development' : 'Step 3 of 3 · Launch'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-98 rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <span>Start Step 1: Tell Us What You Need</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
