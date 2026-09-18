import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  Code2, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'architecture'>('profile');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const codeSnippets = {
    profile: `// Candidate Engineering Profile
const engineer = {
  name: "${personalInfo.name}",
  degree: "BTech Computer Science & Engineering",
  university: "KL University (KLU)",
  domains: [
    "Full-Stack Web Engineering",
    "Data Structures & Algorithms",
    "Asynchronous Backend Gateways",
    "Applied Machine Learning & EDA"
  ],
  passion: "Engineering resilient, low-latency software",
  openToRoles: true
};`,
    stack: `// Core Technical Toolchain
const technicalStack = {
  frontend: ["React", "Vite", "Tailwind CSS", "TypeScript"],
  backend: ["FastAPI", "Spring Boot", "Node.js"],
  databases: ["PostgreSQL", "MongoDB", "SQL"],
  coreCS: ["Data Structures", "Algorithms", "RBAC", "JWT"],
  versionControl: "Git & GitHub"
};`,
    architecture: `// Microservices System Design
class SystemGateway {
  async routeRequest(request) {
    const token = await verifyJWT(request.headers.auth);
    enforceRBAC(token.role, request.endpoint);
    
    // Proxy to downstream services
    return this.fastApiProxy.dispatch({
      target: request.service, // Spring Boot or Node.js
      payload: request.data
    });
  }
}`
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {personalInfo.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/90 text-brand-cyan border border-brand-cyan/30 shadow-sm"
                >
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                  {badge}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Open to Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {personalInfo.headline.split("Code, Creativity & Problem Solving")[0]}
              <span className="text-gradient-cyan block sm:inline">
                Code, Creativity & Problem Solving.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {personalInfo.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-brand-cyan to-teal-400 hover:from-cyan-400 hover:to-teal-300 shadow-lg shadow-brand-cyan/20 transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-brand-cyan/50 shadow-md transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-slate-700 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-brand-cyan border border-slate-700/60 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-brand-cyan border border-slate-700/60 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-brand-cyan border border-slate-700/60 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              {personalInfo.leetcode && (
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-brand-cyan border border-slate-700/60 transition-colors text-xs font-mono font-bold"
                  aria-label="LeetCode Profile"
                >
                  LC
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Animated Developer Terminal / Tech Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Glow Behind Terminal */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-cyan/25 to-brand-indigo/25 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Terminal Box */}
              <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                
                {/* Terminal Header */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                      engineer.ts
                    </span>
                  </div>

                  <button
                    onClick={copySnippet}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-brand-cyan transition-colors"
                    title="Copy code snippet"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Terminal Tab Switcher */}
                <div className="bg-slate-950/60 px-4 pt-2 border-b border-white/5 flex gap-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                      activeTab === 'profile'
                        ? 'bg-slate-800 text-brand-cyan font-semibold border-t border-x border-white/10'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                      activeTab === 'stack'
                        ? 'bg-slate-800 text-brand-cyan font-semibold border-t border-x border-white/10'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    Tech Stack
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                      activeTab === 'architecture'
                        ? 'bg-slate-800 text-brand-cyan font-semibold border-t border-x border-white/10'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    Design
                  </button>
                </div>

                {/* Terminal Code Content */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-dark-950/80 min-h-[220px]">
                  <pre className="whitespace-pre">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Interactive Status Footer */}
                <div className="bg-slate-900/90 px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                    <span>Ready to build & deploy</span>
                  </div>
                  <span className="text-slate-500">TypeScript 5.7 • Node 22</span>
                </div>
              </div>

              {/* Floating Highlight Card 1 */}
              <div className="absolute -bottom-5 -left-4 bg-slate-900/95 border border-brand-cyan/30 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-float">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Full-Stack & Systems</div>
                  <div className="text-[10px] text-slate-400 font-mono">React • FastAPI • Spring Boot</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
