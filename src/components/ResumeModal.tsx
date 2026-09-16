import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { personalInfo, educationData, projectsData, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="glass-card bg-slate-900 border border-brand-cyan/30 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Curriculum Vitae / Resume Preview
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                ATS-Optimized Engineering Resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Sree_Charan_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-brand-cyan hover:bg-cyan-300 transition-colors shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content (ATS Printable Layout) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900/95 text-slate-200">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/10 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-brand-cyan font-mono">
              {personalInfo.roleTitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan underline">
                GitHub
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan border-b border-white/10 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            {educationData.map((edu, eIdx) => (
              <div key={eIdx} className="space-y-1 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white text-sm">
                  <span>{edu.degree}</span>
                  <span className="text-xs font-mono font-normal text-slate-400">{edu.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-300">
                  <span>{edu.institution} — {edu.location}</span>
                  {edu.grade && !edu.grade.includes('[TODO') && (
                    <span className="text-brand-cyan font-mono font-semibold">{edu.grade}</span>
                  )}
                </div>
                <p className="text-slate-400 pt-1">
                  <span className="font-semibold text-slate-300">Core Coursework:</span> {edu.coursework.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan border-b border-white/10 pb-1">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillCategories.map((cat, cIdx) => (
                <div key={cIdx} className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  <span className="font-semibold text-white block mb-0.5">{cat.title}:</span>
                  <span className="text-slate-300 font-mono text-[11px]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Projects Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan border-b border-white/10 pb-1">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects</span>
            </div>
            <div className="space-y-4">
              {projectsData.slice(0, 3).map((proj, pIdx) => (
                <div key={pIdx} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white text-sm">
                    <span className="flex items-center gap-2">
                      {proj.title}
                    </span>
                    <span className="text-[11px] font-mono font-normal text-slate-400">
                      {proj.tags.slice(0, 4).join(' • ')}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1">
                    {proj.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-slate-950 px-6 py-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Tip: Add your custom resume.pdf to public/resume.pdf</span>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
