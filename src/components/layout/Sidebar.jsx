import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  ClipboardCheck,
  Compass,
  GitCompare,
  Map,
  Briefcase,
  Award,
  TrendingUp,
  MessageSquare,
  Building2,
  LogOut,
  ChevronRight,
  Flame
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Sidebar = ({ isMobile = false, closeMobileNav = () => {} }) => {
  const { state, logout, roadmapCompletionPercentage, activeDomain } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    if (isMobile) closeMobileNav();
  };

  const navGroups = [
    {
      group: "Core Navigation",
      items: [
        { name: "Dashboard", path: "/app/dashboard", icon: LayoutDashboard },
        { name: "Career Explorer", path: "/app/career-explorer", icon: Compass, badge: "8 Tracks" },
        { name: "Skill Gap Diagnostics", path: "/app/skill-gap", icon: GitCompare },
        { name: "Dynamic Roadmap", path: "/app/roadmap", icon: Map, progressBadge: `${roadmapCompletionPercentage}%` },
      ]
    },
    {
      group: "Talent & Opportunities",
      items: [
        { name: "Opportunities", path: "/app/opportunities", icon: Briefcase, countBadge: state.appliedOpportunities.length > 0 ? `${state.appliedOpportunities.length} Applied` : null },
        { name: "Skill Passport", path: "/app/skill-passport", icon: Award, highlight: true },
        { name: "Learning Progress", path: "/app/progress", icon: TrendingUp },
      ]
    },
    {
      group: "Diagnostics & Account",
      items: [
        { name: "Aptitude Assessment", path: "/app/onboarding", icon: ClipboardCheck },
        { name: "Profile & Identity", path: "/app/profile", icon: User },
        { name: "Industry Feedback", path: "/app/feedback", icon: MessageSquare },
      ]
    },
    {
      group: "Stakeholder Portal",
      items: [
        { name: "Institution Portal", path: "/app/institution", icon: Building2, bonusBadge: "Bonus" }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-navy-900 border-r border-navy-800 flex flex-col h-full text-slate-300 select-none">
      {/* Brand Header */}
      <div className="h-20 px-6 flex items-center gap-3 border-b border-navy-800 shrink-0">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center text-white shadow-glow-orange shrink-0">
          <Compass className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xl font-bold font-heading text-white tracking-tight flex items-center gap-1.5">
            INSPIRE
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          </span>
          <p className="text-[11px] text-slate-400 truncate">
            {activeDomain?.name || "Career Navigator"}
          </p>
        </div>
      </div>

      {/* Quick Status Pill */}
      <div className="px-5 py-3.5 bg-navy-950/60 border-b border-navy-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-brand-orange fill-brand-orange animate-pulse" />
          <span className="font-semibold text-white">4 Day Streak</span>
        </div>
        <span className="bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded-full font-medium text-[10px] border border-brand-orange/30">
          Level 2 Learner
        </span>
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            <p className="px-3 text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
              {group.group}
            </p>
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={isMobile ? closeMobileNav : undefined}
                  className={({ isActive }) =>
                    `group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-brand-orange text-white shadow-glow-orange font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-navy-800/80"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-slate-400 group-hover:text-brand-orange"}`} />
                        <span className="truncate">{item.name}</span>
                      </div>

                      {/* Badges */}
                      {item.progressBadge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-navy-800 text-amber-400'}`}>
                          {item.progressBadge}
                        </span>
                      )}
                      {item.badge && !isActive && (
                        <span className="text-[10px] bg-navy-800 text-slate-300 px-2 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                      {item.bonusBadge && (
                        <span className="text-[9px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-1.5 py-0.5 rounded font-semibold tracking-wide">
                          {item.bonusBadge}
                        </span>
                      )}
                      {item.countBadge && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-medium">
                          {item.countBadge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User snippet & Logout */}
      <div className="p-4 border-t border-navy-800 bg-navy-950/70">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={state.auth.user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"}
            alt="avatar"
            className="w-9 h-9 rounded-full object-cover border border-brand-orange/40"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">
              {state.auth.user?.name || "Student Innovator"}
            </p>
            <p className="text-[10px] text-slate-400 truncate">
              {state.auth.user?.email || "aarav@demo.edu.in"}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-navy-900 hover:bg-rose-950/40 hover:text-rose-400 text-xs text-slate-400 border border-navy-800 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
