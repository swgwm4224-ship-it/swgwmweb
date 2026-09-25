import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  return (
    <section className="py-24 md:py-32 bg-[#090d18] relative overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#11192e] to-[#0d1424] border border-slate-700/80 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow border line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Your Dream Website This Week</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Let's Put Your Business in Front of Paying Customers.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your business, menu, or services. We will turn your ideas into a fast, beautiful website that works 24/7.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-98 shadow-xl shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <span>Start My Website Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello SWGWMWEB! I am ready to start my website project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-700 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: {CONTACT_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-xl font-bold text-sm text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-900/40 border border-indigo-800/50 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>

          {/* Qualitative reassurance */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Ready in 3 to 5 business days
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Mobile & tablet optimized
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Free preview before payment
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
