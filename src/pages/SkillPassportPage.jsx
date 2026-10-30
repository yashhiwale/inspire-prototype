import React, { useState } from 'react';
import { 
  Award, 
  Download, 
  Share2, 
  Plus, 
  FolderGit2, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  Code, 
  QrCode, 
  ShieldCheck,
  Star,
  Copy
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SkillPassportPage = () => {
  const { 
    state, 
    activeDomain, 
    verifiedSkillsEarned, 
    addProject, 
    roadmapCompletionPercentage,
    showToast 
  } = useApp();

  const [modalOpen, setModalOpen] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    techStack: '',
    link: '',
    description: ''
  });

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!projectForm.title.trim()) return;
    addProject(projectForm);
    setProjectForm({ title: '', techStack: '', link: '', description: '' });
    setModalOpen(false);
  };

  const handleExportPassportJSON = () => {
    const passportData = {
      passportId: `INSPIRE-CRED-${state.auth.user?.id || '01'}-2026`,
      holder: {
        name: state.auth.user?.name,
        email: state.auth.user?.email,
        education: state.auth.user?.educationLevel,
        college: state.auth.user?.college
      },
      verifiedDomain: activeDomain.name,
      roadmapMastery: `${roadmapCompletionPercentage}%`,
      verifiedCompetencies: verifiedSkillsEarned,
      verifiedProjects: state.projects,
      issuedDate: new Date().toISOString().split('T')[0],
      cryptographicSignature: "SHA256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(passportData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `skill_passport_${state.auth.user?.name ? state.auth.user.name.toLowerCase().replace(/\s+/g, '_') : 'student'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    showToast("Exported (Prototype)", "Verified Skill Passport JSON downloaded successfully.", "success");
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    showToast("Link Copied", "Public shareable verification link copied to clipboard.", "info");
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Header Card with Passport Mock Badge */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-card">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-brand-orange/40 text-brand-orange text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verifiable Credential Token • Status: Authenticated</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Digital Skill Passport
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              An immutable talent credential certified by tangible task completions in your <strong>{activeDomain.name}</strong> track. Shareable with hiring partners and graduate recruiters.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 border border-slate-700 text-xs font-semibold transition flex items-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Passport</span>
            </button>
            <button
              onClick={handleExportPassportJSON}
              className="px-6 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-bold shadow-glow-orange transition flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Export Passport (JSON)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Passport Credential Certificate Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-orange-50 rounded-bl-full pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <img
              src={state.auth.user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"}
              alt="avatar"
              className="w-16 h-16 rounded-2xl object-cover ring-4 ring-orange-100"
            />
            <div>
              <h3 className="text-xl font-bold font-heading text-navy-900">
                {state.auth.user?.name || "Aarav Sharma"}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {state.auth.user?.educationLevel} • {state.auth.user?.college}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Passport ID: INSP-2026-094
                </span>
                <span className="text-[10px] text-slate-400">Issued Oct 2026</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-3">
            <QrCode className="w-12 h-12 text-navy-900" />
            <div className="text-[11px] text-slate-500">
              <span className="font-bold text-navy-900 block">Cryptographic Hash</span>
              <span>SHA-256 Verified Token</span>
            </div>
          </div>
        </div>

        {/* Section 1: Verified Skills (Derived from completed roadmap tasks) */}
        <div className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold font-heading text-navy-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-orange" />
                <span>Verified Industry Competencies ({verifiedSkillsEarned.length})</span>
              </h4>
              <p className="text-xs text-slate-500">
                These skills were certified by validating completed milestones inside your dynamic roadmap.
              </p>
            </div>
            <span className="text-xs font-semibold text-brand-orange">
              {roadmapCompletionPercentage}% Roadmap Mastery
            </span>
          </div>

          {verifiedSkillsEarned.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {verifiedSkillsEarned.map((skillBadge) => (
                <div
                  key={skillBadge}
                  className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-200/90 flex items-center gap-3 shadow-subtle hover:scale-[1.02] transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-navy-900 truncate block">
                      {skillBadge}
                    </span>
                    <span className="text-[10px] text-brand-orange font-semibold">
                      Verified Task Proof
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-xs text-slate-500">
                No verified skills recorded yet. Mark tasks as completed in your roadmap to mint competencies!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Projects Showcase */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold font-heading text-navy-900 flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-brand-orange" />
              <span>Portfolio Projects ({state.projects.length})</span>
            </h3>
            <p className="text-xs text-slate-500">
              Live proof-of-work repositories attached to your Skill Passport.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition flex items-center gap-2 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4 text-brand-orange" />
            <span>Add New Project</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {state.projects.map((proj) => (
            <div
              key={proj.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-sm font-bold text-navy-900">{proj.title}</h4>
                  <span className="text-[10px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {proj.date}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-medium text-brand-orange bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100 mb-3 inline-block">
                  Tech: {proj.techStack}
                </div>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-orange font-bold hover:underline flex items-center gap-1"
                  >
                    <span>View Repository / Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-slate-400 text-[11px]">★ {proj.stars || 1} Star</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-w-lg w-full space-y-5 animate-scale-up">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-heading text-navy-900">
                Add Capstone Project
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Task Queue Microservice"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tech Stack</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. React, TypeScript, FastAPI, Redis"
                  value={projectForm.techStack}
                  onChange={(e) => setProjectForm({ ...projectForm, techStack: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">GitHub / Live Link</label>
                <input
                  type="url"
                  placeholder="https://github.com/..."
                  value={projectForm.link}
                  onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Description & Problem Solved</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe architecture, key features, and performance metrics..."
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold shadow-glow-orange transition"
                >
                  Save to Passport
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
