import React from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  Zap,
  Palette,
  MapPin,
  MessageCircle,
  Image as ImageIcon,
  Search,
  Share2,
  CheckCircle,
} from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      title: 'Mobile Responsive',
      description: 'Engineered from scratch for touch screens. Flawless layout on iPhone, Android, iPads, and large 4K desktop displays.',
      stat: '100% responsive',
    },
    {
      icon: Zap,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      title: 'Ultra-Fast Page Speeds',
      description: 'Sub-second loading times optimized with modern asset bundling so customers never wait or abandon your page.',
      stat: '0.3s load time',
    },
    {
      icon: Palette,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      title: 'Custom Modern Design',
      description: 'Clean, brand-tailored styling that looks like a high-budget tech studio built it, rather than a generic cookie-cutter template.',
      stat: 'Tailored aesthetic',
    },
    {
      icon: MapPin,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      title: 'Google Maps Navigation',
      description: 'Interactive map pins and one-click turn-by-turn navigation so prospective local buyers find your exact doorstep.',
      stat: '1-tap directions',
    },
    {
      icon: MessageCircle,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      title: 'Direct WhatsApp Chat',
      description: 'Pre-filled customer enquiry buttons that launch straight into your WhatsApp with message drafts ready to send.',
      stat: 'Instant leads',
    },
    {
      icon: ImageIcon,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      title: 'High-Res Photo Gallery',
      description: 'Showcase your real dishes, marble showroom, finished construction sites, or print jobs in crisp retina resolution.',
      stat: 'Retina ready',
    },
    {
      icon: Search,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      title: 'Local SEO Ready',
      description: 'Structured metadata, schema tags, and optimized titles so your shop ranks prominently for local neighborhood searches.',
      stat: 'Google search ready',
    },
    {
      icon: Share2,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      title: 'Social Media Integrations',
      description: 'Direct links and preview widgets for Instagram, Facebook, YouTube, and LinkedIn to build cross-platform credibility.',
      stat: 'Seamless sync',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Built-in Capabilities · Everything Included
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything Your Business Website Needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We don't just build pretty pages—we equip your site with the real tools that drive calls, walk-in visits, and sales.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-[#0f172a] border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${feat.bgColor} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${feat.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="text-slate-300 font-mono text-[11px]">{feat.stat}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
