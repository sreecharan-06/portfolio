import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { GitHubProfile } from './components/GitHubProfile';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative selection:bg-brand-cyan/25 selection:text-brand-cyan overflow-x-hidden">
      {/* 1. Dynamic Animated Light Blue to Dark Blue Base Layer */}
      <div className="fixed inset-0 animated-blue-gradient pointer-events-none -z-30" />

      {/* 2. Floating Luminous Light Blue to Deep Blue Glow Orbs */}
      <div className="fixed top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-sky-400/25 blur-[120px] pointer-events-none animate-orb-1 -z-20" />
      <div className="fixed bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/30 blur-[140px] pointer-events-none animate-orb-2 -z-20" />
      <div className="fixed top-[45%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-cyan-300/20 blur-[130px] pointer-events-none animate-orb-3 -z-20" />

      {/* 3. Subtle Technical Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-20 -z-10" />

      {/* Sticky Glass Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        activeSection={activeSection}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Achievements />
        <Certifications />
        <GitHubProfile />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Quick Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
