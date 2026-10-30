import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, Compass, Bell, ExternalLink, Sparkles, Award } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TopHeader = ({ onOpenMobileNav }) => {
  const location = useLocation();
  const { state, activeDomain, roadmapCompletionPercentage } = useApp();

  // Route title mapping
  const routeTitles = {
    '/app/dashboard': 'Student Command Center',
    '/app/career-explorer': 'AI Career Explorer',
    '/app/skill-gap': 'Industry Skill Gap Diagnostics',
    '/app/roadmap': 'Dynamic Learning Roadmap',
    '/app/opportunities': 'Industry Opportunities & Placements',
    '/app/skill-passport': 'Digital Skill Passport & Portfolio',
    '/app/progress': 'Competency & Velocity Analytics',
    '/app/feedback': 'Industry Feedback & Advisory',
    '/app/onboarding': 'Aptitude & Goals Assessment',
    '/app/profile': 'Student Profile & Academic Credentials',
    '/app/institution': 'Institution Oversight & Analytics',
  };

  const currentTitle = routeTitles[location.pathname] || 'INSPIRE Platform';

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30 shadow-subtle">
      {/* Left title & mobile trigger */}
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenMobileNav}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-navy-900 hover:bg-slate-100 transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-lg sm:text-xl font-bold font-heading text-navy-900 tracking-tight flex items-center gap-2">
            {currentTitle}
          </h1>
          <p className="text-xs text-slate-500 hidden sm:block">
            Intelligent career navigation engine powered by industry competency standards.
          </p>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Active Domain Badge */}
        {activeDomain && (
          <Link
            to="/app/career-explorer"
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange hover:bg-orange-100 transition text-xs font-semibold group"
          >
            <Compass className="w-3.5 h-3.5 text-brand-orange group-hover:rotate-45 transition-transform" />
            <span>Track: {activeDomain.name}</span>
            <span className="text-[10px] bg-brand-orange text-white px-1.5 py-0.2 rounded-full font-bold">
              {roadmapCompletionPercentage}%
            </span>
          </Link>
        )}

        {/* Passport quick access */}
        <Link
          to="/app/skill-passport"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition"
        >
          <Award className="w-3.5 h-3.5 text-brand-orange" />
          <span className="hidden sm:inline">Passport</span>
        </Link>

        {/* User pill */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <img
            src={state.auth.user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-orange-200"
          />
          <span className="text-xs font-semibold text-slate-800 hidden md:block">
            {state.auth.user?.name ? state.auth.user.name.split(' ')[0] : 'Student'}
          </span>
        </div>
      </div>
    </header>
  );
};
