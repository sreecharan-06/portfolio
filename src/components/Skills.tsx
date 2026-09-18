import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  BrainCircuit, 
  Check, 
  Sparkles,
  Search
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Terminal': return Terminal;
      case 'BrainCircuit': return BrainCircuit;
      default: return Code2;
    }
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesCat = cat.title.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
    const matchesSkill = cat.skills.some(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
    return matchesCat || matchesSkill;
  });

  return (
    <section id="skills" className="py-20 bg-dark-950/30 backdrop-blur-[2px] relative border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
            <Sparkles className="w-3 h-3" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Core Competencies</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            A verified inventory of programming languages, modern frameworks, system architectures, and core computer science fundamentals.
          </p>
        </div>

        {/* Category Filter Pills & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-cyan text-slate-950 font-semibold shadow-md shadow-brand-cyan/20'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-cyan text-slate-950 font-semibold shadow-md shadow-brand-cyan/20'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-brand-cyan rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-cyan"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.iconName);
            const visibleSkills = searchQuery.trim() 
              ? category.skills.filter(s => 
                  s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  s.category.toLowerCase().includes(searchQuery.toLowerCase())
                )
              : category.skills;

            if (visibleSkills.length === 0) return null;

            return (
              <div
                key={category.id}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400">
                        {visibleSkills.length} competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pill List */}
                  <div className="flex flex-wrap gap-2">
                    {visibleSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`group px-3 py-1.5 rounded-lg text-xs font-mono border transition-all flex items-center gap-1.5 ${
                          skill.highlight
                            ? 'bg-slate-800/90 text-slate-200 border-brand-cyan/30 hover:border-brand-cyan hover:bg-slate-800'
                            : 'bg-slate-900/80 text-slate-300 border-slate-700/60 hover:border-slate-600'
                        }`}
                      >
                        <Check className="w-3 h-3 text-brand-cyan opacity-80 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-slate-100">{skill.name}</span>
                        <span className="text-[10px] text-slate-400 hidden group-hover:inline transition-opacity">
                          • {skill.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Category: {category.id.toUpperCase()}</span>
                  <span className="text-brand-cyan">Verified Practical</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
