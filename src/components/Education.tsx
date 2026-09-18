import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-dark-950/30 backdrop-blur-[2px] relative border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Coursework</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Rigorous computer science curriculum combining foundational theory with hands-on software development and engineering systems.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                      UNDERGRADUATE DEGREE
                    </span>
                    {item.grade && !item.grade.includes('[TODO') && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-500/30">
                        {item.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>

                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    {item.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Core Coursework Grid */}
              <div className="py-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 mb-3">
                  <BookOpen className="w-4 h-4 text-brand-cyan" />
                  <span>KEY RELEVANT COURSEWORK</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {item.coursework.map((course, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-6">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 mb-3">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>ACADEMIC FOCUS & HIGHLIGHTS</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
