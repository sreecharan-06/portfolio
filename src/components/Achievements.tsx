import React from 'react';
import { Award, Trophy, CheckCircle, Calendar } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-dark-950/60 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Honors & <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Documented problem-solving milestones, academic performance recognitions, and competitive hackathon finishes.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-950/40 text-amber-400 border border-amber-500/30">
                    {item.badge || item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-brand-cyan/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400">
                      {item.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-brand-cyan">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Documented Milestone</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
