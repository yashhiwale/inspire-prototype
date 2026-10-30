import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  RotateCcw,
  Compass,
  FileCheck2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RoadmapPage = () => {
  const { 
    activeDomain, 
    roadmapModules, 
    toggleRoadmapTask, 
    roadmapCompletionPercentage, 
    completedTasksCount, 
    totalTasksCount,
    showToast 
  } = useApp();

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Interactive Sprint Track
            </span>
            <span className="text-xs text-slate-400">• Active Domain:</span>
            <span className="text-xs font-bold text-navy-900">{activeDomain.name}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
            Dynamic 5-Week Competency Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Check off micro-tasks as you complete them. Each completed milestone updates your overall readiness percentage and mints verified skills into your <strong>Skill Passport</strong>.
          </p>
        </div>

        {/* Circular / Progress Indicator */}
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 shrink-0">
          <div className="text-right">
            <div className="text-2xl font-black font-heading text-navy-900">
              {roadmapCompletionPercentage}%
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              {completedTasksCount} of {totalTasksCount} completed
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center relative overflow-hidden ring-4 ring-orange-100">
            <div
              className="absolute inset-0 bg-brand-orange transition-all duration-500"
              style={{
                clipPath: `polygon(0 0, 100% 0, 100% ${roadmapCompletionPercentage}%, 0 ${roadmapCompletionPercentage}%)`
              }}
            />
            <span className="relative z-10 text-xs font-bold text-navy-900 bg-white/90 px-2 py-0.5 rounded-full shadow-sm">
              {roadmapCompletionPercentage}%
            </span>
          </div>
        </div>
      </div>

      {/* 3 Modules Timeline */}
      <div className="space-y-6">
        {roadmapModules.map((module, modIdx) => {
          const modCompletedCount = module.tasks.filter(t => t.completed).length;
          const modTotalCount = module.tasks.length;
          const isModuleDone = modCompletedCount === modTotalCount && modTotalCount > 0;

          return (
            <div
              key={modIdx}
              className={`bg-white rounded-3xl border shadow-card transition-all duration-200 overflow-hidden ${
                isModuleDone ? "border-emerald-300 ring-1 ring-emerald-200" : "border-slate-200"
              }`}
            >
              {/* Module Header Bar */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                    isModuleDone ? "bg-emerald-600 text-white" : "bg-navy-900 text-white"
                  }`}>
                    {isModuleDone ? <CheckCircle2 className="w-5 h-5" /> : `0${modIdx + 1}`}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900">
                      {module.moduleTitle}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-orange-100/80 px-2 py-0.5 rounded">
                        {module.badge}
                      </span>
                      <span className="text-xs text-slate-500">
                        {modCompletedCount}/{modTotalCount} Tasks Done
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isModuleDone ? (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Module Complete
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-500">
                      In Progress
                    </span>
                  )}
                </div>
              </div>

              {/* Module Tasks List */}
              <div className="p-6 divide-y divide-slate-100">
                {module.tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleRoadmapTask(task.id)}
                    className={`py-4 px-3 sm:px-4 rounded-2xl flex items-start sm:items-center justify-between gap-4 cursor-pointer transition-colors ${
                      task.completed
                        ? "bg-emerald-50/50 hover:bg-emerald-50"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                      {/* Checkbox */}
                      <button
                        type="button"
                        className={`mt-0.5 sm:mt-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all shrink-0 ${
                          task.completed
                            ? "bg-brand-orange text-white shadow-sm"
                            : "border-2 border-slate-300 hover:border-brand-orange bg-white"
                        }`}
                      >
                        {task.completed && <CheckCircle2 className="w-4 h-4" />}
                      </button>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className={`text-sm font-bold ${
                            task.completed ? "text-slate-500 line-through" : "text-navy-900"
                          }`}>
                            {task.title}
                          </h4>
                          {task.skillReward && (
                            <span className="text-[10px] font-semibold text-brand-orange bg-orange-50 border border-orange-200 px-2 py-0.2 rounded-full flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              {task.skillReward}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-snug">
                          {task.desc}
                        </p>
                      </div>
                    </div>

                    {/* Metadata & Status */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{task.hours}</span>
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-xl ${
                        task.completed
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-brand-orange"
                      }`}>
                        {task.completed ? "Completed" : "Mark Done"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Passport Sync Prompt */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-950 text-white p-6 sm:p-8 rounded-3xl border border-navy-800 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Cryptographic Digital Credential Active</span>
          </div>
          <h3 className="text-lg font-bold font-heading">
            Check Your Updated Skill Passport
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Every marked milestone automatically attests to verified competencies, unlocking priority applications for matched employers.
          </p>
        </div>

        <Link
          to="/app/skill-passport"
          className="px-6 py-3 rounded-2xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-bold shadow-glow-orange transition flex items-center gap-2 shrink-0"
        >
          <span>View Skill Passport</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
