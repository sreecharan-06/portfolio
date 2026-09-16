import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              BTech Computer Science student building reliable software across microservices, algorithmic systems, and modern full-stack web platforms.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-cyan/40 text-slate-400 hover:text-brand-cyan transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-cyan/40 text-slate-400 hover:text-brand-cyan transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-cyan/40 text-slate-400 hover:text-brand-cyan transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-brand-cyan/40 transition-all hover:-translate-y-0.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-cyan" />
            </button>

            <div className="text-right text-[11px] font-mono text-slate-500">
              Built with React • Vite • Tailwind CSS
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with dedication & clean code</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
