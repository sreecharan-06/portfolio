import React from 'react';
import { 
  Code, 
  Layers, 
  Brain, 
  Binary, 
  Server, 
  Database, 
  GraduationCap, 
  MapPin, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: "Software Development",
      description: "Writing clean, maintainable, and modular code adhering to modern OOP principles and SOLID paradigms.",
      icon: Code,
      color: "text-brand-cyan"
    },
    {
      title: "Full Stack Development",
      description: "Connecting responsive React user interfaces with decoupled microservices and RESTful API endpoints.",
      icon: Layers,
      color: "text-brand-indigo"
    },
    {
      title: "Artificial Intelligence",
      description: "Applying machine learning classification models, data preprocessing pipelines, and exploratory data analysis (EDA).",
      icon: Brain,
      color: "text-purple-400"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Designing optimal algorithmic solutions involving Trees, Graphs, Dijkstra's pathfinding, and Dynamic Programming.",
      icon: Binary,
      color: "text-emerald-400"
    },
    {
      title: "Backend Development",
      description: "Architecting high-performance backends with FastAPI asynchronous gateways, Spring Boot, and Node.js services.",
      icon: Server,
      color: "text-amber-400"
    },
    {
      title: "Database Systems",
      description: "Engineering normalized relational schemas in PostgreSQL/SQL and document models in MongoDB.",
      icon: Database,
      color: "text-teal-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-900/60 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering with <span className="text-gradient-cyan">Precision & Passion</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            I am a BTech Computer Science & Engineering student at {educationData[0]?.institution || "KL University"}, deeply invested in end-to-end software craftsmanship, algorithmic rigor, and scalable system design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Profile Card */}
          <div className="lg:col-span-4">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />

              {/* Avatar Placeholder / Graphic */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-cyan/20 via-brand-indigo/20 to-slate-800 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan font-mono text-xl font-bold shadow-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('') || 'SC'}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-brand-cyan">BTech CSE Student</p>
                  <p className="text-xs text-slate-400 mt-0.5">Software & Full-Stack Developer</p>
                </div>
              </div>

              {/* Key Attributes */}
              <div className="py-5 space-y-3.5 text-xs text-slate-300 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{educationData[0]?.degree || "BTech in Computer Science"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{educationData[0]?.institution} • {personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="font-mono text-[11px] truncate">{personalInfo.email}</span>
                </div>
              </div>

              {/* Status & Work Ethic */}
              <div className="pt-5 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Current Focus
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Building microservice architectures with FastAPI & Spring Boot, and mastering advanced graph and tree algorithms.
                </p>
                
                <div className="pt-3 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Clean Code
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Problem Solving
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Microservices
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Focus Domains Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {focusAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shrink-0">
                          <IconComponent className={`w-4 h-4 ${area.color}`} />
                        </div>
                        <h4 className="text-sm font-semibold text-white tracking-tight">
                          {area.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-brand-cyan" /> Core Competency
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
