import React from 'react';
import { Github, ExternalLink, GitBranch, Code, FolderGit2 } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';

export const GitHubProfile: React.FC = () => {
  return (
    <section className="py-20 bg-dark-950/30 backdrop-blur-[2px] relative border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Banner Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-cyan/30 relative overflow-hidden shadow-2xl">
          
          {/* Subtle glowing orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Col: Pitch & Profile CTA */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                <Github className="w-3.5 h-3.5" />
                <span>OPEN SOURCE & CODE REPOSITORIES</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Explore My Code & <span className="text-gradient-cyan">System Architecture</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                I believe in readable commit histories, robust test harnesses, and clean README documentation. Check out my complete repository repositories, pull requests, and code experiments directly on GitHub.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-brand-cyan to-teal-400 hover:from-cyan-400 hover:to-teal-300 shadow-lg shadow-brand-cyan/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {personalInfo.leetcode && (
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-brand-cyan/40 transition-all active:scale-95"
                  >
                    <Code className="w-4 h-4 text-brand-cyan" />
                    <span>LeetCode Profile</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Col: Pinned Repositories Preview */}
            <div className="lg:col-span-5 space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
                <span>Featured Repositories</span>
                <span className="text-brand-cyan font-normal">Active Development</span>
              </div>

              {projectsData.slice(0, 3).map((repo, rIdx) => (
                <a
                  key={rIdx}
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-brand-cyan/50 transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {repo.title.split('–')[0].trim()}
                      </span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {repo.shortDescription}
                  </p>

                  <div className="mt-2.5 flex items-center gap-3 text-[10px] font-mono text-slate-500">
                    <span className="text-slate-300">
                      {repo.tags[0]}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3" /> main
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
