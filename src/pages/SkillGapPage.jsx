import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GitCompare, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SkillGapPage = () => {
  const { activeDomain, domainSkills, showToast } = useApp();
  const navigate = useNavigate();

  // Compute aggregate readiness score
  const totalRequired = domainSkills.reduce((sum, s) => sum + s.required, 0);
  const totalCurrent = domainSkills.reduce((sum, s) => sum + s.current, 0);
  const readinessRatio = Math.round((totalCurrent / totalRequired) * 100);

  const highGapsCount = domainSkills.filter(s => s.gapLevel === 'High').length;
  const mediumGapsCount = domainSkills.filter(s => s.gapLevel === 'Medium').length;

  const handleGenerateRoadmap = () => {
    showToast("Roadmap Generated!", `Dynamic 5-week sprint mapped for ${activeDomain.name}.`, "success");
    navigate('/app/roadmap');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Diagnostic Benchmark
            </span>
            <span className="text-xs text-slate-400">• Active Domain:</span>
            <span className="text-xs font-bold text-navy-900">{activeDomain.name}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900">
            Industry Skill Gap Analysis
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            We mapped your self-assessed collegiate baseline against the verified production competency matrix for <strong>{activeDomain.name}</strong>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <Link
            to="/app/career-explorer"
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition text-center"
          >
            Switch Domain
          </Link>
          <button
            onClick={handleGenerateRoadmap}
            className="px-6 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-bold shadow-glow-orange transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Aggregate Score Bar & Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-navy-900 text-white p-6 rounded-2xl shadow-card border border-navy-800 flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
              Current Benchmark Fit
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-black font-heading text-white">{readinessRatio}%</span>
              <span className="text-xs text-slate-300">Baseline Alignment</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              You possess great fundamentals. Bridging the {highGapsCount} high-priority gaps will elevate your readiness to 95%+.
            </p>
          </div>
          <div className="w-full bg-navy-950 h-2 rounded-full overflow-hidden mt-4">
            <div className="bg-brand-orange h-full rounded-full" style={{ width: `${readinessRatio}%` }} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Critical Skill Gaps</span>
            <div className="text-3xl font-black font-heading text-rose-600 mt-2">
              {highGapsCount} High Priority
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Skills where industry requirements significantly exceed standard college coursework.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400 mt-4">
            + {mediumGapsCount} Moderate Gaps Identified
          </span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Estimated Effort</span>
            <div className="text-3xl font-black font-heading text-brand-orange mt-2">
              ~45 Hours
            </div>
            <p className="text-xs text-slate-500 mt-2">
              At your scheduled 15 hrs/week pace, this gap will be closed within 3.5 weeks.
            </p>
          </div>
          <button
            onClick={handleGenerateRoadmap}
            className="text-xs text-brand-orange font-bold hover:underline flex items-center gap-1 mt-4"
          >
            <span>Proceed to Roadmap Tasks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Skills Comparison List */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-heading text-navy-900">
            Required Competencies Breakdown ({domainSkills.length} Skills)
          </h3>
          <span className="text-xs text-slate-400">Comparing: Your Score vs Industry Standard</span>
        </div>

        <div className="space-y-5">
          {domainSkills.map((skill) => {
            const gap = skill.required - skill.current;

            return (
              <div
                key={skill.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {skill.priority}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">{skill.name}</h4>
                      <span className="text-[11px] text-slate-400">{skill.category}</span>
                    </div>
                  </div>

                  {/* Priority Badge */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        skill.gapLevel === 'High'
                          ? 'bg-rose-50 text-rose-700 border-rose-200'
                          : skill.gapLevel === 'Medium'
                          ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}
                    >
                      {skill.gapLevel} Priority Gap (-{gap}%)
                    </span>
                  </div>
                </div>

                {/* Progress bars visualizer */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-600">
                    <span>
                      Current Student Score: <strong className="text-navy-900">{skill.current}%</strong>
                    </span>
                    <span>
                      Required Industry Benchmark: <strong className="text-brand-orange">{skill.required}%</strong>
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 h-3.5 rounded-full relative overflow-hidden">
                    {/* Required Target Background fill */}
                    <div
                      className="bg-amber-100 h-full absolute left-0 top-0 rounded-full border-r-2 border-amber-500"
                      style={{ width: `${skill.required}%` }}
                    />
                    {/* Current Score Progress */}
                    <div
                      className={`h-full relative z-10 rounded-full transition-all duration-500 ${
                        skill.gapLevel === 'High' ? 'bg-brand-orange' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${skill.current}%` }}
                    />
                  </div>
                </div>

                {/* Actionable tip */}
                <div className="pt-2 text-xs text-slate-500 flex items-start gap-2 italic">
                  <BookOpen className="w-3.5 h-3.5 text-brand-orange mt-0.5 shrink-0" />
                  <span>Strategic bridge advice: {skill.tip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Ready to close these gaps? The dynamic roadmap will guide you through hands-on tasks week by week.
          </p>
          <button
            onClick={handleGenerateRoadmap}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-600 hover:from-amber-600 hover:to-brand-orange text-white font-bold text-xs sm:text-sm shadow-glow-orange transition flex items-center justify-center gap-2"
          >
            <span>Proceed to Roadmap Tasks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
