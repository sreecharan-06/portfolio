import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection = 'hero' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3.5 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan/20 via-brand-indigo/20 to-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-mono font-bold shadow-inner group-hover:border-brand-cyan group-hover:scale-105 transition-all">
              <Terminal className="w-5 h-5 text-brand-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 group-hover:text-brand-cyan transition-colors text-base sm:text-lg tracking-tight flex items-center gap-1.5">
                {personalInfo.name}
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan opacity-75" />
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wide">
                BTech CSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan relative ${
                    isActive
                      ? 'text-brand-cyan font-semibold bg-brand-cyan/10 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-brand-cyan rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-100 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-brand-cyan/50 hover:text-white shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan active:scale-95"
            >
              <FileText className="w-4 h-4 text-brand-cyan" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-brand-cyan text-xs font-semibold flex items-center gap-1.5"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-brand-cyan/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-x-0 border-t border-b border-white/10 mt-3 px-5 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-left transition-colors ${
                    isActive
                      ? 'bg-brand-cyan/15 text-brand-cyan font-semibold border-l-2 border-brand-cyan'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
