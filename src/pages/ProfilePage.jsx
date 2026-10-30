import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Building2, 
  Mail, 
  Save, 
  Compass, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  Edit3
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProfilePage = () => {
  const { 
    state, 
    updateProfile, 
    activeDomain, 
    roadmapCompletionPercentage, 
    verifiedSkillsEarned 
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: state.auth.user?.name || "Aarav Sharma",
    email: state.auth.user?.email || "aarav.sharma@college.edu.in",
    educationLevel: state.auth.user?.educationLevel || "BSc IT / Computer Science",
    college: state.auth.user?.college || "State Technological University",
    bio: state.auth.user?.bio || "Aspiring engineer focused on scalable full-stack applications and AI."
  });

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <span className="text-xs uppercase font-bold tracking-wider text-brand-orange">
          Student Identity & Academic Credentials
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 mt-1">
          Profile Management
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage your verified educational credentials, academic institution affiliations, and bio data.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Details & Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <img
                src={state.auth.user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"}
                alt="Profile"
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-orange-100"
              />
              <div>
                <h3 className="text-xl font-bold font-heading text-navy-900">
                  {state.auth.user?.name || "Aarav Sharma"}
                </h3>
                <p className="text-xs text-brand-orange font-semibold">
                  Verified Student Innovator
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Degree / Specialization</label>
                <input
                  type="text"
                  required
                  value={formData.educationLevel}
                  onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">College / University</label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Bio / Statement</label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold shadow-glow-orange transition flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Email Address</span>
                  <p className="text-xs font-bold text-navy-900">{state.auth.user?.email}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Degree Specialization</span>
                  <p className="text-xs font-bold text-navy-900">{state.auth.user?.educationLevel}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Academic Institution</span>
                <p className="text-xs font-bold text-navy-900">{state.auth.user?.college}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Professional Bio</span>
                <p className="text-xs text-slate-600 leading-relaxed">{state.auth.user?.bio}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Key Stats & Credentials */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-card space-y-4">
            <h4 className="text-sm font-bold font-heading text-navy-900">
              Active Credentials Summary
            </h4>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-brand-orange font-bold uppercase block">Selected Domain</span>
                  <span className="text-xs font-bold text-navy-900">{activeDomain.name}</span>
                </div>
                <Compass className="w-5 h-5 text-brand-orange" />
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase block">Roadmap Velocity</span>
                  <span className="text-xs font-bold text-navy-900">{roadmapCompletionPercentage}% Finished</span>
                </div>
                <Award className="w-5 h-5 text-emerald-600" />
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-blue-700 font-bold uppercase block">Applications Sent</span>
                  <span className="text-xs font-bold text-navy-900">{state.appliedOpportunities.length} Roles</span>
                </div>
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
