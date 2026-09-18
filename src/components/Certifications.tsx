import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-dark-950/20 backdrop-blur-[2px] relative border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING & MOOCS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-cyan">Specializations</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Professional coursework and technical certificates reinforcing fundamentals across full-stack engineering, algorithms, and databases.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{cert.date}</span>
                  </span>
                  {cert.credentialId && !cert.credentialId.includes('[TODO') && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-cyan mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Skills Gained */}
                <div className="mt-4">
                  <div className="text-[11px] font-mono text-slate-400 mb-2 font-semibold uppercase">
                    Competencies Acquired:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action / Link */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Verified Coursework</span>
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-cyan hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500">
                    Credential verifiable upon request
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
