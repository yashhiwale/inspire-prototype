import React from 'react';
import { 
  Building2, 
  Users, 
  GraduationCap, 
  TrendingUp, 
  AlertTriangle, 
  Download, 
  Award, 
  CheckCircle2, 
  FileText,
  Sparkles,
  PieChart,
  BarChart3
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const InstitutionPage = () => {
  const { institutionStats, showToast } = useApp();

  const handleExportCohortReport = () => {
    const reportData = {
      institution: "State Technological University",
      academicYear: "2026-2027",
      totalEnrolled: institutionStats.totalStudents,
      cohortActive: institutionStats.cohortActive,
      averageProgress: `${institutionStats.averageRoadmapProgress}%`,
      placementReadiness: institutionStats.placementReadinessRate,
      topDomains: institutionStats.topChosenDomains,
      criticalGapsIdentified: institutionStats.commonGaps,
      generatedTimestamp: new Date().toISOString()
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `institutional_naac_skill_audit_2026.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    showToast("Audit Report Exported", "Institutional Skill Audit JSON downloaded for NAAC / NEP filing.", "success");
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bonus Route • Institutional Dean & Placement Cell Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            State Technological University — Cohort Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Real-time batch telemetries, cross-departmental skill gap aggregations, and automated NEP 2020 competency compliance audits.
          </p>
        </div>

        <button
          onClick={handleExportCohortReport}
          className="px-6 py-3 rounded-2xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-bold shadow-glow-orange transition flex items-center gap-2 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Export NAAC Skill Audit (JSON)</span>
        </button>
      </div>

      {/* 4 Core Institutional Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Enrolled Cohort</span>
          <div className="text-3xl font-black font-heading text-navy-900 mt-2">
            {institutionStats.totalStudents}
          </div>
          <p className="text-xs text-slate-500 mt-1">Undergraduate B.Tech / BSc IT</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Active Daily Learners</span>
          <div className="text-3xl font-black font-heading text-emerald-600 mt-2">
            {institutionStats.cohortActive}
          </div>
          <p className="text-xs text-slate-500 mt-1">83.3% Cohort Engagement Rate</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Average Roadmap Mastery</span>
          <div className="text-3xl font-black font-heading text-brand-orange mt-2">
            {institutionStats.averageRoadmapProgress}%
          </div>
          <p className="text-xs text-slate-500 mt-1">+14% improvement over last month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle flex flex-col justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Placement Ready Index</span>
          <div className="text-3xl font-black font-heading text-indigo-600 mt-2">
            {institutionStats.placementReadinessRate}
          </div>
          <p className="text-xs text-slate-500 mt-1">Passed benchmark criteria</p>
        </div>
      </div>

      {/* 2-Column Institutional Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Domain Distribution */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-heading text-navy-900 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-orange" />
              <span>Top Career Domains Chosen by Students</span>
            </h3>
            <span className="text-xs text-slate-400">Cohort Distribution</span>
          </div>

          <div className="space-y-4">
            {institutionStats.topChosenDomains.map((dom) => (
              <div key={dom.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-navy-900">{dom.name}</span>
                  <span className="text-slate-500">{dom.count} students ({dom.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-orange h-full rounded-full transition-all duration-500"
                    style={{ width: `${dom.percentage * 2}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            💡 <strong>Placement Officer Recommendation:</strong> Web Dev and AI/ML account for over 60% of student preference. Focus guest lecture sprints and hackathon themes on these domains.
          </div>
        </div>

        {/* Common Bottlenecks Across the Batch */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-heading text-navy-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-500" />
              <span>Most Common Skill Bottlenecks Across Batch</span>
            </h3>
            <span className="text-xs text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              Urgent Interventions
            </span>
          </div>

          <div className="space-y-3">
            {institutionStats.commonGaps.map((gap, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy-900">{gap.skill}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Impacts <strong className="text-navy-900">{gap.studentsAffected} students</strong> across 3rd & 4th years
                  </p>
                </div>

                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shrink-0 ${
                    gap.severity === 'High'
                      ? 'bg-rose-100 text-rose-700 border-rose-200'
                      : 'bg-amber-100 text-amber-700 border-amber-200'
                  }`}
                >
                  {gap.severity} Severity
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 leading-relaxed">
            ✓ <strong>Remediation Strategy:</strong> Micro-tasks have been automatically assigned to students through their personalized INSPIRE Roadmaps.
          </div>
        </div>
      </div>
    </div>
  );
};
