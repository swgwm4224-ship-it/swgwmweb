import React from 'react';
import { motion } from 'motion/react';
import {
  Utensils,
  Store,
  Building2,
  Hotel,
  Briefcase,
  GraduationCap,
  Building,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { categories } from '../data/content';
import { BusinessType } from '../types';

interface CategoriesProps {
  onSelectCategory: (categoryName: BusinessType) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-orange-400" />;
      case 'Store':
        return <Store className="w-6 h-6 text-cyan-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'Hotel':
        return <Hotel className="w-6 h-6 text-emerald-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-indigo-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case 'Building':
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-rose-400" />;
    }
  };

  const mapToBusinessType = (id: string): BusinessType => {
    switch (id) {
      case 'restaurant':
        return 'Restaurant';
      case 'local-shop':
        return 'Shop';
      case 'construction':
        return 'Construction';
      case 'hotel':
        return 'Hotel';
      case 'services':
        return 'Professional Service';
      case 'education':
        return 'Education';
      case 'startup':
        return 'Company';
      default:
        return 'Other';
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Who We Build For · Industry Tailored
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What Kind of Business Do You Have?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Every trade has unique customer expectations. We engineer websites tailored to your specific service offerings, foot traffic, and conversion goals.
          </p>
        </div>

        {/* 8-Card Grid with micro-interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, idx) => {
            const bType = mapToBusinessType(cat.id);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative bg-[#0f172a]/90 hover:bg-[#131d36] border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-slate-700 transition-all">
                    {getIcon(cat.icon)}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-indigo-400 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cat.features.slice(0, 2).map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectCategory(bType)}
                    className="mt-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request for this type</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
