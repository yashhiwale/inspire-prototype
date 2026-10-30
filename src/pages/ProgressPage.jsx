import React from 'react';
import { 
  TrendingUp, 
  Flame, 
  Calendar, 
  Clock, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Target,
  Zap,
  BarChart2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProgressPage = () => {
  const { 
    state, 
    activeDomain, 
    domainSkills, 
    roadmapCompletionPercentage, 
    completedTasksCount, 
    totalTasksCount 
  } = useApp();

  const daysOfWeek = [
    { day: "Mon", active: true, hours: 2.5 },
    { day: "Tue", active: true, hours: 3.0 },
    { day: "Wed", active: true, hours: 2.0 },
    { day: "Thu", active: true, hours: 3.5 },
    { day: "Fri", active: false, hours: 0 },
    { day: "Sat", active: false, hours: 0 },
    { day: "Sun", active: false, hours: 0 }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <span className="text-xs uppercase font-bold tracking-wider text-brand-orange">
          Competency & Velocity Metrics
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 mt-1">
          Learning Analytics & Progress
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Monitor your daily study consistency, skill mastery levels, and upcoming placement milestones.
        </p>
      </div>

      {/* Top 4 Streak & Velocity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-brand-orange flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-brand-orange text-brand-orange animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Consistency Streak</span>
            <div className="text-2xl font-black font-heading text-navy-900">4 Days</div>
            <p className="text-[11px] text-emerald-600 font-semibold">Keep it going tomorrow!</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Weekly Time Spent</span>
            <div className="text-2xl font-black font-heading text-navy-900">11.0 hrs</div>
            <p className="text-[11px] text-slate-500">Goal: 15 hrs / week</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Milestones Solved</span>
            <div className="text-2xl font-black font-heading text-navy-900">
              {completedTasksCount} / {totalTasksCount}
            </div>
            <p className="text-[11px] text-brand-orange font-semibold">{roadmapCompletionPercentage}% of track</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Passport Level</span>
            <div className="text-2xl font-black font-heading text-navy-900">Tier 2 Ready</div>
            <p className="text-[11px] text-purple-600 font-semibold">Tier 1 opens at 80%</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Weekly Activity & Skill Mastery Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Skill-by-Skill Mastery Progress */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-heading text-navy-900 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-brand-orange" />
              <span>Skill Mastery vs Required Production Level</span>
            </h3>
            <span className="text-xs font-semibold text-slate-500">{activeDomain.name}</span>
          </div>

          <div className="space-y-4">
            {domainSkills.map((sk) => {
              const gap = sk.required - sk.current;
              return (
                <div key={sk.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-navy-900">{sk.name}</span>
                    <span className="text-slate-500 font-medium">
                      Current: <strong className="text-brand-orange">{sk.current}%</strong> / Required: {sk.required}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden relative">
                    <div
                      className="bg-brand-orange h-full rounded-full transition-all duration-500"
                      style={{ width: `${sk.current}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Category: {sk.category}</span>
                    <span className="text-slate-600 font-medium">
                      {gap <= 15 ? "Nearly Production Ready" : `${gap}% remaining gap`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column (1 Col): Weekly Activity Card & Badges */}
        <div className="space-y-6">
          {/* Weekly Summary Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-card space-y-4">
            <h4 className="text-sm font-bold font-heading text-navy-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-orange" />
              <span>Weekly Study Activity</span>
            </h4>

            {/* 7-day Bar Visualizer */}
            <div className="grid grid-cols-7 gap-2 pt-2 text-center">
              {daysOfWeek.map((d) => (
                <div key={d.day} className="flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-lg h-24 flex items-end justify-center p-1">
                    <div
                      className={`w-full rounded-md transition-all ${
                        d.active ? "bg-brand-orange" : "bg-slate-200"
                      }`}
                      style={{ height: d.hours > 0 ? `${(d.hours / 4) * 100}%` : '8%' }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">{d.day}</span>
                  <span className="text-[9px] text-slate-400">{d.hours}h</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-orange-50 rounded-xl border border-orange-200 text-xs text-slate-700 leading-snug">
              <strong>Weekly Insight:</strong> Thursday was your peak velocity day (3.5 hours recorded). You are 4 hours away from hitting your weekly target.
            </div>
          </div>

          {/* Badges Earned */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-card space-y-4">
            <h4 className="text-sm font-bold font-heading text-navy-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Earned Achievements</span>
            </h4>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <span className="text-xl">🔥</span>
                <div>
                  <h5 className="text-xs font-bold text-navy-900">4-Day Sprint Streak</h5>
                  <p className="text-[10px] text-slate-500">Studied consistently 4 days in a row</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <span className="text-xl">🚀</span>
                <div>
                  <h5 className="text-xs font-bold text-navy-900">Diagnostic Explorer</h5>
                  <p className="text-[10px] text-slate-500">Evaluated skills across 8 career tracks</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <span className="text-xl">💼</span>
                <div>
                  <h5 className="text-xs font-bold text-navy-900">First Opportunity Applied</h5>
                  <p className="text-[10px] text-slate-500">Sent Skill Passport to matched employer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
