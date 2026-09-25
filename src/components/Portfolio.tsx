import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Zap, Clock, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { portfolioProjects } from '../data/content';
import { PortfolioItem, BusinessType } from '../types';

interface PortfolioProps {
  onSelectProject: (project: PortfolioItem) => void;
  onCloneProjectStyle: (businessType: BusinessType) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onSelectProject,
  onCloneProjectStyle,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects =
    filter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) =>
          filter === 'food'
            ? p.industry.includes('Food') || p.industry.includes('Hospitality')
            : !p.industry.includes('Food') && !p.industry.includes('Hospitality')
        );

  const mapToBusinessType = (title: string): BusinessType => {
    if (title.includes('Chilli') || title.includes('Smriti')) return 'Restaurant';
    if (title.includes('Ceramics')) return 'Shop';
    if (title.includes('Das')) return 'Professional Service';
    return 'Other';
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Recent Case Studies · Real Client Deployments
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Websites We've Engineered.
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Browse production websites delivered for local businesses, restaurants, building material dealers, and service centers.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({portfolioProjects.length})
            </button>
            <button
              onClick={() => setFilter('food')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'food'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Food & Dining
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'commercial'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Commercial & Retail
            </button>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#0f172a] border border-slate-800 hover:border-slate-700 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Scrim & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Measured contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />

                  {/* Top tags on image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      {project.turnaround} Build
                    </span>

                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 backdrop-blur-md border border-emerald-700/80 text-emerald-300 font-semibold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      {project.score}
                    </span>
                  </div>

                  {/* Floating Action Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-xl hover:bg-slate-100 transition-transform active:scale-95 cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Case Study</span>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature deliverables */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action Strip */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Project Specs</span>
                  <span>→</span>
                </button>

                <button
                  onClick={() => onCloneProjectStyle(mapToBusinessType(project.title))}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-semibold border border-indigo-500/30 transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Build This Style</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
