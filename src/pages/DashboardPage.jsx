import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Map, 
  GitCompare, 
  Award, 
  Briefcase, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  ExternalLink,
  Target
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DashboardPage = () => {
  const { 
    state, 
    activeDomain, 
    roadmapCompletionPercentage, 
    completedTasksCount, 
    totalTasksCount, 
    domainSkills, 
    verifiedSkillsEarned 
  } = useApp();

  // Top 3 skill gaps sorted by gap difference
  const topSkillGaps = [...domainSkills]
    .sort((a, b) => (b.required - b.current) - (a.required - a.current))
    .slice(0, 3);

  // Find next uncompleted task in roadmap
  const nextActionTitle = "Continue Week 1–2: Frontend Architecture & TypeScript Core";

  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-900 via-navy-900 to-navy-950 text-white p-6 sm:p-8 border border-navy-800 shadow-card">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800/80 border border-brand-orange/40 text-brand-orange text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Student Learning Cockpit • Active Target: {activeDomain.name}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              Welcome back, {state.auth.user?.name || "Student Innovator"}! 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Your personalized competency roadmap is live. You are on track to bridge your key industry skill gaps in under 4 weeks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              to="/app/roadmap"
              className="px-6 py-3 rounded-2xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-bold shadow-glow-orange transition-all flex items-center justify-center gap-2 group"
            >
              <span>Resume Roadmap Tasks</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Primary Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Selected Domain */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between hover:shadow-card transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Target Track</span>
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold font-heading text-navy-900 truncate">
              {activeDomain ? activeDomain.name : "Not Selected"}
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-1">{activeDomain.tagline}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-emerald-600 font-semibold">{activeDomain.growthRate}</span>
            <Link to="/app/career-explorer" className="text-brand-orange font-semibold hover:underline">
              Switch Track →
            </Link>
          </div>
        </div>

        {/* Card 2: Roadmap Completion */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between hover:shadow-card transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Roadmap Progress</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Map className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black font-heading text-navy-900">{roadmapCompletionPercentage}%</span>
              <span className="text-xs text-slate-500">completed</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-brand-orange h-full rounded-full transition-all duration-500"
                style={{ width: `${roadmapCompletionPercentage}%` }}
              />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>{completedTasksCount} of {totalTasksCount} milestones</span>
            <Link to="/app/roadmap" className="text-brand-orange font-semibold hover:underline">
              View Tasks →
            </Link>
          </div>
        </div>

        {/* Card 3: Verified Skills Earned */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between hover:shadow-card transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Verified Skills</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black font-heading text-navy-900">{verifiedSkillsEarned.length}</span>
              <span className="text-xs text-slate-500">badges certified</span>
            </div>
            <p className="text-xs text-slate-500 mt-2 truncate">
              {verifiedSkillsEarned.join(", ") || "Complete tasks to earn"}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Passport Ready</span>
            <Link to="/app/skill-passport" className="text-brand-orange font-semibold hover:underline">
              View Passport →
            </Link>
          </div>
        </div>

        {/* Card 4: Applied Opportunities */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between hover:shadow-card transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Applications</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black font-heading text-navy-900">{state.appliedOpportunities.length}</span>
              <span className="text-xs text-slate-500">jobs applied</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Active employer matches</p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-emerald-600 font-semibold">94% Max Match</span>
            <Link to="/app/opportunities" className="text-brand-orange font-semibold hover:underline">
              Explore Roles →
            </Link>
          </div>
        </div>
      </div>

      {/* Main 2-Column Split: Top 3 Skill Gaps & Recommended Next Action */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Skill Gaps Diagnostic Summary */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-orange">
                Gap Diagnostics
              </span>
              <h2 className="text-xl font-bold font-heading text-navy-900 mt-0.5">
                Top Priority Skill Bottlenecks for {activeDomain.name}
              </h2>
            </div>
            <Link
              to="/app/skill-gap"
              className="text-xs font-bold text-brand-orange hover:text-brand-orangeHover flex items-center gap-1"
            >
              <span>Full Gap Analysis</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {topSkillGaps.map((skill) => {
              const gapDiff = skill.required - skill.current;
              return (
                <div key={skill.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-navy-900">{skill.name}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        skill.gapLevel === 'High'
                          ? 'bg-rose-100 text-rose-700 border border-rose-200'
                          : 'bg-amber-100 text-amber-700 border border-amber-200'
                      }`}>
                        {skill.gapLevel} Priority Gap (-{gapDiff}%)
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      Target: {skill.required}%
                    </span>
                  </div>

                  {/* Dual comparison bar: Current vs Target */}
                  <div className="space-y-1">
                    <div className="w-full bg-slate-200 h-3 rounded-full relative overflow-hidden">
                      {/* Target marker background */}
                      <div
                        className="bg-slate-300 h-full absolute left-0 top-0 rounded-full"
                        style={{ width: `${skill.required}%` }}
                      />
                      {/* Current progress */}
                      <div
                        className="bg-brand-orange h-full relative z-10 rounded-full transition-all duration-500"
                        style={{ width: `${skill.current}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Current: <strong className="text-slate-700">{skill.current}%</strong></span>
                      <span className="italic">{skill.tip}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-brand-orange shrink-0" />
              <p className="text-xs text-slate-700">
                Completing your active roadmap will bridge <strong>100%</strong> of these top gaps.
              </p>
            </div>
            <Link
              to="/app/roadmap"
              className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-glow-orange hover:bg-brand-orangeHover transition shrink-0"
            >
              Go to Roadmap
            </Link>
          </div>
        </div>

        {/* Right Column (1 Col): Recommended Next Action & Weekly Velocity */}
        <div className="space-y-6">
          {/* Hero Action Card */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-7 border border-navy-800 shadow-card flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                Recommended Next Action
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                Complete Task: TypeScript Core Config
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Configure tsconfig strict mode rules and write 5 typed interfaces for stateful components. Unlocks the <strong>"TypeScript Core"</strong> passport badge.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Estimated Time:</span>
                <span className="text-white font-semibold">45 mins</span>
              </div>
              <Link
                to="/app/roadmap"
                className="w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold shadow-glow-orange transition flex items-center justify-center gap-2"
              >
                <span>Open Task in Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-subtle space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading">
              Quick Shortcuts
            </h4>
            <div className="space-y-2">
              <Link
                to="/app/opportunities"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200 text-xs font-semibold text-navy-900 group"
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-brand-orange" />
                  <span>View 8 Matching Jobs</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/app/skill-passport"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200 text-xs font-semibold text-navy-900 group"
              >
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Export Skill Passport (JSON)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/app/institution"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200 text-xs font-semibold text-navy-900 group"
              >
                <div className="flex items-center gap-2.5">
                  <Target className="w-4 h-4 text-indigo-500" />
                  <span>Institution Analytics (Bonus)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
