import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle, 
  Layers, 
  Maximize2, 
  X 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Web', value: 'web' },
    { label: 'AI / ML', value: 'ai-ml' },
    { label: 'DSA & Algorithms', value: 'dsa' },
    { label: 'Hackathon', value: 'hackathon' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter || project.additionalCategories?.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 bg-dark-950/20 backdrop-blur-[2px] relative border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Engineering Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Full-stack microservices, algorithmic graph systems, and machine learning prototypes built with engineering rigor and modular design.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeFilter === tab.value
                  ? 'bg-gradient-to-r from-brand-cyan to-teal-400 text-slate-950 font-bold shadow-lg shadow-brand-cyan/20 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isTopProminent = index < 2; // Make the first 2-3 projects prominent

            return (
              <div
                key={project.id}
                className={`glass-card glass-card-hover rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between transition-all ${
                  isTopProminent 
                    ? 'lg:col-span-6 ring-1 ring-brand-cyan/30 shadow-xl shadow-brand-cyan/5' 
                    : 'lg:col-span-4'
                }`}
              >
                {/* Visual Header / Banner */}
                <div className={`relative p-6 bg-gradient-to-br ${
                  index % 2 === 0 
                    ? 'from-slate-900 via-slate-850 to-brand-cyan/10' 
                    : 'from-slate-900 via-slate-850 to-brand-indigo/10'
                } border-b border-white/10`}>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider font-semibold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                        {project.category.toUpperCase()}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="View System Architecture & Deep Details"
                    >
                      <Maximize2 className="w-4 h-4 text-brand-cyan" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  
                  {/* Key Features List */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {project.keyFeatures.slice(0, isTopProminent ? 4 : 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 6).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-brand-cyan hover:text-cyan-300 flex items-center gap-1 font-semibold"
                    >
                      <span>Deep Dive & Architecture</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-brand-cyan/50 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-brand-cyan hover:bg-cyan-300 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass-card bg-slate-900 border border-brand-cyan/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-12">
              <span className="px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40">
                {selectedProject.category.toUpperCase()} PROJECT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {selectedProject.title}
              </h3>
            </div>

            {/* Modal Content */}
            <div className="mt-6 space-y-6 text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Overview & Technical Scope
                </h4>
                <p className="text-sm leading-relaxed text-slate-200">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Architecture & Engineering Specs */}
              {selectedProject.architectureNotes && (
                <div className="bg-slate-950/80 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-cyan mb-2">
                    <Layers className="w-4 h-4" />
                    <span>SYSTEM DESIGN & ARCHITECTURE NOTES</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {selectedProject.architectureNotes}
                  </p>
                </div>
              )}

              {/* Technologies Breakdown */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Technology Stack Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {selectedProject.technologies.frontend && (
                    <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                      <span className="text-brand-cyan font-mono font-semibold block mb-1">Frontend:</span>
                      <span>{selectedProject.technologies.frontend}</span>
                    </div>
                  )}
                  {selectedProject.technologies.backend && (
                    <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                      <span className="text-brand-indigo font-mono font-semibold block mb-1">Backend:</span>
                      <span>{selectedProject.technologies.backend}</span>
                    </div>
                  )}
                  {selectedProject.technologies.database && (
                    <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                      <span className="text-emerald-400 font-mono font-semibold block mb-1">Database & Storage:</span>
                      <span>{selectedProject.technologies.database}</span>
                    </div>
                  )}
                  {selectedProject.technologies.auth && (
                    <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                      <span className="text-purple-400 font-mono font-semibold block mb-1">Security & Auth:</span>
                      <span>{selectedProject.technologies.auth}</span>
                    </div>
                  )}
                  {selectedProject.technologies.algorithms && (
                    <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                      <span className="text-amber-400 font-mono font-semibold block mb-1">Algorithms & Logic:</span>
                      <span>{selectedProject.technologies.algorithms}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                  Complete Feature Checklist
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Tags & Badges
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              {selectedProject.liveDemoUrl && (
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-brand-cyan hover:bg-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
