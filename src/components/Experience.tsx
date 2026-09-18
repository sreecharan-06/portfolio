import React from 'react';
import { 
  Trophy, 
  Terminal, 
  Code2, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return { label: 'HACKATHON INITIATIVE', color: 'bg-purple-950/40 text-purple-400 border-purple-500/30' };
      case 'Technical Project':
        return { label: 'SYSTEMS & FULL STACK', color: 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30' };
      case 'Coding Practice':
        return { label: 'ALGORITHMIC PRACTICE', color: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30' };
      default:
        return { label: 'CONTINUOUS LEARNING', color: 'bg-slate-800 text-slate-300 border-slate-700' };
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Hackathon': return Trophy;
      case 'Technical Project': return Terminal;
      case 'Coding Practice': return Code2;
      default: return BookOpen;
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-950/20 backdrop-blur-[2px] relative border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACTIVITIES & INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-cyan">Activities & Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Hands-on technical milestones spanning hackathon prototype sprints, open-source initiatives, and deliberate algorithmic problem solving.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((item, idx) => {
            const badge = getTypeBadge(item.type);
            const Icon = getTypeIcon(item.type);

            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${badge.color}`}>
                      {badge.label}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Role Title & Org */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold text-slate-300">
                        {item.organization}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Descriptions */}
                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Footer */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
