import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Filter, 
  Building2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockOpportunities, mockDomains } from '../data/mockData';

export const OpportunitiesPage = () => {
  const { state, applyToOpportunity, activeDomain } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomainFilter, setSelectedDomainFilter] = useState('All');
  const [selectedModeFilter, setSelectedModeFilter] = useState('All');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('All');

  const filteredOpportunities = mockOpportunities.filter((opp) => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDomain = selectedDomainFilter === 'All' || opp.domainId === selectedDomainFilter;
    const matchesMode = selectedModeFilter === 'All' || opp.mode === selectedModeFilter;
    const matchesType = selectedTypeFilter === 'All' || opp.type === selectedTypeFilter;

    return matchesSearch && matchesDomain && matchesMode && matchesType;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-brand-orange">
            Direct Corporate Pipeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 mt-1">
            Industry Opportunities & Placements
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Vetted internships and roles that recognize INSPIRE's verified Skill Passport milestones over paper resumes.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm text-xs">
          <span className="text-slate-400">Applications Submitted:</span>
          <span className="font-bold text-navy-900 bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
            {state.appliedOpportunities.length} Active
          </span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Keyword Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search role, company, skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-brand-orange"
            />
          </div>

          {/* Domain Filter */}
          <div>
            <select
              value={selectedDomainFilter}
              onChange={(e) => setSelectedDomainFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-slate-50 focus:outline-none focus:border-brand-orange"
            >
              <option value="All">All Domains (8 Tracks)</option>
              {mockDomains.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <select
              value={selectedTypeFilter}
              onChange={(e) => setSelectedTypeFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-slate-50 focus:outline-none focus:border-brand-orange"
            >
              <option value="All">All Types (Internship / Junior / Project)</option>
              <option value="Internship">Internship</option>
              <option value="Junior Role">Junior Role</option>
              <option value="Project">Project Contract</option>
            </select>
          </div>

          {/* Mode Filter */}
          <div>
            <select
              value={selectedModeFilter}
              onChange={(e) => setSelectedModeFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-slate-50 focus:outline-none focus:border-brand-orange"
            >
              <option value="All">All Work Modes</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>
        </div>
      </div>

      {/* Opportunities List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOpportunities.map((opp) => {
          const isApplied = state.appliedOpportunities.includes(opp.id);
          const domainObj = mockDomains.find(d => d.id === opp.domainId);

          return (
            <div
              key={opp.id}
              className={`bg-white rounded-3xl border p-6 sm:p-7 shadow-card transition-all flex flex-col justify-between ${
                isApplied
                  ? "border-emerald-300 ring-1 ring-emerald-200"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                {/* Header: Title & Match badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                        {opp.type}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {opp.mode}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-navy-900 mt-1">
                      {opp.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>{opp.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500">{opp.location}</span>
                    </p>
                  </div>

                  {/* Match Score Badge */}
                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-xl">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      {opp.matchScore}% Match
                    </span>
                    <span className="block text-[9px] text-slate-400 mt-0.5">Passport fit</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {opp.description}
                </p>

                {/* Compensation & Duration Meta */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Stipend / CTC</span>
                    <span className="font-bold text-navy-900">{opp.stipend}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Duration</span>
                    <span className="font-bold text-navy-900">{opp.duration}</span>
                  </div>
                </div>

                {/* Required Skills */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                    Required Verified Skills:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {opp.requiredSkills.map((sk) => (
                      <span
                        key={sk}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-400 font-medium">
                  Deadline: {opp.deadline}
                </span>

                <button
                  onClick={() => applyToOpportunity(opp.id)}
                  disabled={isApplied}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isApplied
                      ? "bg-emerald-600 text-white cursor-default shadow-sm"
                      : "bg-brand-orange hover:bg-brand-orangeHover text-white shadow-glow-orange"
                  }`}
                >
                  {isApplied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Application Recorded (Prototype)</span>
                    </>
                  ) : (
                    <>
                      <span>Apply with Skill Passport</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center">
          <p className="text-slate-500 text-sm">No opportunities matched your exact filter combination.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedDomainFilter('All');
              setSelectedModeFilter('All');
              setSelectedTypeFilter('All');
            }}
            className="mt-4 text-xs text-brand-orange font-bold hover:underline"
          >
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
};
