import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Compass, Sparkles, ArrowRight, UserCheck, Lock, Mail, User, GraduationCap, Building } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  const [loginEmail, setLoginEmail] = useState('aarav.sharma@college.edu.in');
  const [loginPassword, setLoginPassword] = useState('demo1234');

  // Register form state
  const [registerForm, setRegisterForm] = useState({
    name: 'Tanvi Deshmukh',
    email: 'tanvi.d@student.ac.in',
    educationLevel: 'BSc IT / Final Year',
    college: 'Government Institute of Science & Technology',
    password: 'password123'
  });

  const { login, register } = useApp();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({
      name: loginEmail.includes('aarav') ? 'Aarav Sharma' : 'Student Innovator',
      email: loginEmail,
      educationLevel: 'BSc IT / Computer Science',
      college: 'State Technical University'
    });
    navigate('/app/onboarding');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    register({
      name: registerForm.name,
      email: registerForm.email,
      educationLevel: registerForm.educationLevel,
      college: registerForm.college
    });
    navigate('/app/onboarding');
  };

  const handleQuickDemo = () => {
    login({
      name: 'Aarav Sharma',
      email: 'aarav.sharma@college.edu.in',
      educationLevel: 'BSc IT (3rd Year)',
      college: 'State Technological University'
    });
    navigate('/app/onboarding');
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand logo at top */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10 mb-6">
        <Link to="/" className="inline-flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center text-white shadow-glow-orange group-hover:scale-105 transition-transform">
            <Compass className="w-7 h-7" />
          </div>
          <span className="text-3xl font-extrabold font-heading text-white tracking-tight">
            INSPIRE
          </span>
        </Link>
        <p className="mt-2 text-xs uppercase tracking-widest text-slate-400 font-medium">
          Hackathon Prototype Portal
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        {/* Quick Demo Access Bar for Hackathon Judges */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-800 border border-brand-orange/40 text-center shadow-card">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-brand-orange mb-2">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Hackathon Judge 1-Click Fast-Track</span>
          </div>
          <button
            onClick={handleQuickDemo}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 hover:from-amber-600 hover:to-brand-orange text-white text-xs font-bold shadow-glow-orange transition-all flex items-center justify-center gap-2"
          >
            <UserCheck className="w-4 h-4" />
            <span>1-Click Demo Login as Student Aarav</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Auth Card */}
        <div className="bg-navy-900 border border-navy-800 py-8 px-6 sm:px-10 rounded-3xl shadow-2xl backdrop-blur-xl">
          {/* Tabs */}
          <div className="flex rounded-xl bg-navy-950 p-1 mb-8 border border-navy-800">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'login'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'register'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              New Registration
            </button>
          </div>

          {activeTab === 'login' ? (
            /* Login Form */
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Institutional / Student Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-orange transition"
                    placeholder="student@college.edu"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    Password
                  </label>
                  <span className="text-[11px] text-slate-500 hover:text-slate-400 cursor-pointer">
                    Mock (any password)
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-orange transition"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-bold shadow-glow-orange transition-all flex items-center justify-center gap-2"
                >
                  <span>Sign In & Continue to Onboarding</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Register Form */
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-orange"
                    placeholder="e.g. Tanvi Deshmukh"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-orange"
                    placeholder="tanvi@student.ac.in"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Education Level / Major
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={registerForm.educationLevel}
                    onChange={(e) => setRegisterForm({ ...registerForm, educationLevel: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-orange"
                    placeholder="e.g. BSc IT (Final Year)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  College / University
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Building className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={registerForm.college}
                    onChange={(e) => setRegisterForm({ ...registerForm, college: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-orange"
                    placeholder="e.g. Government Engineering College"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-bold shadow-glow-orange transition-all flex items-center justify-center gap-2"
                >
                  <span>Create Account & Start Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-navy-800 text-center">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition">
              ← Return to INSPIRE Landing Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
