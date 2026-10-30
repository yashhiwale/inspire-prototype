import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  BrainCircuit, 
  Code2, 
  BarChart3, 
  Cloud, 
  ShieldCheck, 
  Palette, 
  Terminal, 
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockDomains } from '../data/mockData';

export const CareerExplorerPage = () => {
  const { state, selectDomain } = useApp();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  // Icon mapping
  const iconMap = {
    BrainCircuit: BrainCircuit,
    Code2: Code2,
    BarChart3: BarChart3,
    Cloud: Cloud,
    ShieldCheck: ShieldCheck,
    Palette: Palette,
    Terminal: Terminal,
    TrendingUp: TrendingUp
  };

  const handleSelectDomain = (domainId) => {
    selectDomain(domainId);
    navigate('/app/skill-gap');
  };

  const filteredDomains = mockDomains.filter((dom) => {
    const matchesSearch = dom.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dom.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          dom.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiff = filterDifficulty === 'All' || dom.difficulty.includes(filterDifficulty);
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-brand-orange">
            AI Explanatory Recommendations
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 mt-1">
            Career Domain Explorer
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse 8 high-velocity career tracks. Each card features transparent explainability bullets derived from your onboarding assessment.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search domain or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-brand-orange w-48 sm:w-60 shadow-sm"
            />
          </div>

          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:border-brand-orange shadow-sm"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Grid of Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredDomains.map((dom) => {
          const IconComponent = iconMap[dom.icon] || Compass;
          const isSelected = state.selectedDomain === dom.id;

          return (
            <div
              key={dom.id}
              className={`bg-white rounded-3xl border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between hover:shadow-card ${
                isSelected
                  ? "border-brand-orange ring-2 ring-brand-orange/30 shadow-md"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-brand-orange flex items-center justify-center shrink-0 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold font-heading text-navy-900">{dom.name}</h3>
                        {isSelected && (
                          <span className="text-[10px] font-bold bg-brand-orange text-white px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-brand-orange font-semibold">{dom.badge}</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                    {dom.difficulty}
                  </span>
                </div>

                {/* Tagline & Description */}
                <p className="text-xs font-semibold text-slate-700 mb-2">{dom.tagline}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{dom.description}</p>

                {/* Explainability Section ("Why recommended") */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-navy-900">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Why Recommended For You:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {dom.whyRecommended.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-[11px] text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dom.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metrics & Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Compensation Range</span>
                  <span className="font-bold text-navy-900">{dom.avgSalary}</span>
                  <span className="text-emerald-600 font-semibold ml-2 text-[11px]">({dom.growthRate})</span>
                </div>

                <button
                  onClick={() => handleSelectDomain(dom.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isSelected
                      ? "bg-navy-900 hover:bg-navy-800 text-white"
                      : "bg-brand-orange hover:bg-brand-orangeHover text-white shadow-glow-orange"
                  }`}
                >
                  <span>{isSelected ? "Analyze Skill Gap (Current)" : "Select Domain"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
