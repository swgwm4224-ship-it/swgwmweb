import React from 'react';
import { MessageCircle, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070b14] border-t border-slate-800/80 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-block">
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                SWGWM<span className="text-indigo-400">WEB</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              We design and engineer high-performance, conversion-focused websites for restaurants, shops, contractors, and local businesses.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={CONTACT_INFO.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {CONTACT_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneTel}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold hover:text-white hover:border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>Call: {CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-900/50 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Who We Build For</a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">Interactive Showcase</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Client Projects</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Our 3-Step Process</a>
              </li>
            </ul>
          </div>

          {/* Business & Support */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phoneTel}`}
                  className="hover:text-white transition-colors flex items-center gap-2 text-slate-300"
                >
                  <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Phone: {CONTACT_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2 text-slate-300"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Email: {CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.getWhatsAppUrl('Hello SWGWMWEB! I am interested in building a modern website.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-slate-300"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {CONTACT_INFO.phone}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="pt-2">
                <a href="#pricing" className="hover:text-white transition-colors">Transparent Pricing Plans</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Instant Project Quote Builder</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            © {new Date().getFullYear()} SWGWMWEB. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <a href={`tel:${CONTACT_INFO.phoneTel}`} className="hover:text-white transition-colors">
              {CONTACT_INFO.phoneFormatted}
            </a>
            <span>•</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
