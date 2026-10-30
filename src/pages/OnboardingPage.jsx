import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  ClipboardCheck, 
  Target, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  Compass,
  Clock,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { assessmentQuestions, mockDomains } from '../data/mockData';

export const OnboardingPage = () => {
  const { state, completeOnboarding, updateProfile } = useApp();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Basic Profile state
  const [profileData, setProfileData] = useState({
    name: state.auth.user?.name || 'Aarav Sharma',
    educationLevel: state.auth.user?.educationLevel || 'BSc IT / Computer Science (3rd Year)',
    college: state.auth.user?.college || 'State Technological University',
    bio: state.auth.user?.bio || 'Aspiring engineer eager to master full-stack and scalable architecture.'
  });

  const availableInterests = [
    "Full-Stack Web Dev",
    "AI & Deep Learning",
    "Cloud Infrastructure",
    "Cybersecurity",
    "Data Analytics",
    "UI/UX Design",
    "DevOps Automation",
    "Mobile Apps"
  ];
  const [selectedInterests, setSelectedInterests] = useState(state.onboarding?.interests || ["Full-Stack Web Dev", "AI & Deep Learning"]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Step 2: Assessment 10 questions (1-5 radio scale)
  const [answers, setAnswers] = useState(state.onboarding?.assessmentAnswers || {
    q1: 4, q2: 5, q3: 5, q4: 3, q5: 4, q6: 4, q7: 5, q8: 4, q9: 4, q10: 3
  });

  const handleScoreSelect = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  // Step 3: Goals
  const [targetDomain, setTargetDomain] = useState(state.selectedDomain || "web-dev");
  const [hoursPerWeek, setHoursPerWeek] = useState(state.onboarding?.hoursPerWeek || 15);
  const [learningStyle, setLearningStyle] = useState(state.onboarding?.learningStyle || "Hands-on Project Building");

  const handleFinishOnboarding = () => {
    updateProfile(profileData);
    completeOnboarding({
      interests: selectedInterests,
      assessmentAnswers: answers,
      selectedDomain: targetDomain,
      hoursPerWeek,
      learningStyle
    });
    navigate('/app/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto py-4">
      {/* Stepper Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Step {currentStep} of 3
            </span>
            <h2 className="text-2xl font-bold font-heading text-navy-900 mt-1">
              {currentStep === 1 && "Personal & Academic Profile"}
              {currentStep === 2 && "Aptitude & Cognitive Interest Assessment"}
              {currentStep === 3 && "Career Goals & Weekly Learning Capacity"}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Progress:</span>
            <span className="text-sm font-bold text-brand-orange">{Math.round((currentStep / 3) * 100)}%</span>
          </div>
        </div>

        {/* Stepper Bar */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { step: 1, label: "Basic Profile", icon: User },
            { step: 2, label: "Assessment (10 Qs)", icon: ClipboardCheck },
            { step: 3, label: "Goals & Domain", icon: Target },
          ].map((s) => {
            const Icon = s.icon;
            const isDone = currentStep > s.step;
            const isCurrent = currentStep === s.step;

            return (
              <div
                key={s.step}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  isCurrent
                    ? "bg-orange-50 border-brand-orange/50 shadow-sm"
                    : isDone
                    ? "bg-slate-100 border-emerald-400 text-emerald-800"
                    : "bg-white border-slate-200 text-slate-400 opacity-60"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isCurrent
                      ? "bg-brand-orange text-white"
                      : isDone
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                </div>
                <span className="text-xs font-semibold truncate hidden md:inline">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* STEP 1: Basic Profile */}
      {currentStep === 1 && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 space-y-6 animate-fade-in">
          <div>
            <h3 className="text-lg font-bold font-heading text-navy-900 mb-1">
              Tell us about your academic background
            </h3>
            <p className="text-xs text-slate-500">
              INSPIRE uses this information to baseline your collegiate syllabus against current tech job specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Education Level / Degree</label>
              <input
                type="text"
                value={profileData.educationLevel}
                onChange={(e) => setProfileData({ ...profileData, educationLevel: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-orange"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">College / University Name</label>
            <input
              type="text"
              value={profileData.college}
              onChange={(e) => setProfileData({ ...profileData, college: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-orange"
            />
          </div>

          {/* Interests Pills */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Primary Areas of Curiosity (Select 2 or more)
            </label>
            <div className="flex flex-wrap gap-2">
              {availableInterests.map((interest) => {
                const selected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selected
                        ? "bg-brand-orange text-white shadow-glow-orange scale-105"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {interest} {selected && "✓"}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm shadow-glow-orange transition flex items-center gap-2"
            >
              <span>Proceed to Assessment (10 Questions)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Assessment 10 questions */}
      {currentStep === 2 && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 space-y-6 animate-fade-in">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold font-heading text-navy-900 mb-1">
                Cognitive & Aptitude Questionnaire
              </h3>
              <p className="text-xs text-slate-500">
                Rate each statement on a scale of 1 (Strongly Disagree) to 5 (Strongly Agree).
              </p>
            </div>
            <span className="text-xs font-bold text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              10 Quick Questions
            </span>
          </div>

          <div className="space-y-6">
            {assessmentQuestions.map((q, idx) => {
              const currentVal = answers[q.id] || 3;

              return (
                <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-navy-900 leading-snug">{q.question}</p>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          Trait: {q.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 1 to 5 radio buttons with visual cues */}
                  <div className="flex items-center justify-between pt-2 px-2 sm:px-6">
                    <span className="text-[11px] font-medium text-slate-400 hidden sm:inline">Disagree</span>
                    <div className="flex items-center gap-2 sm:gap-4">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleScoreSelect(q.id, val)}
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all ${
                            currentVal === val
                              ? "bg-brand-orange text-white shadow-glow-orange scale-110 ring-2 ring-brand-orange ring-offset-2"
                              : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 hidden sm:inline">Agree</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm shadow-glow-orange transition flex items-center gap-2"
            >
              <span>Save Answers & Set Goals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Goals & Target Domain */}
      {currentStep === 3 && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 space-y-6 animate-fade-in">
          <div>
            <h3 className="text-lg font-bold font-heading text-navy-900 mb-1">
              Select Your Target Career Track & Commitment
            </h3>
            <p className="text-xs text-slate-500">
              Based on your answers, we have pre-calibrated domain suitability. Choose your priority track below.
            </p>
          </div>

          {/* Domain Picker Cards */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-3">
              Target Track Selection (Select One)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mockDomains.map((dom) => {
                const isSelected = targetDomain === dom.id;
                return (
                  <div
                    key={dom.id}
                    onClick={() => setTargetDomain(dom.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-orange-50 border-brand-orange shadow-md ring-2 ring-brand-orange/30"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-navy-900">{dom.name}</h4>
                      {isSelected && <span className="text-[10px] font-bold bg-brand-orange text-white px-2 py-0.5 rounded-full">Target</span>}
                    </div>
                    <p className="text-xs text-slate-500 leading-snug line-clamp-2">{dom.tagline}</p>
                    <div className="mt-2 text-[10px] text-brand-orange font-semibold">
                      Salary: {dom.avgSalary}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Time commitment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>Time Available Per Week</span>
              </label>
              <select
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-orange"
              >
                <option value={8}>8 hours / week (Casual pace)</option>
                <option value={15}>15 hours / week (Recommended standard)</option>
                <option value={25}>25 hours / week (Fast-track sprint)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-orange" />
                <span>Preferred Learning Style</span>
              </label>
              <select
                value={learningStyle}
                onChange={(e) => setLearningStyle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-orange"
              >
                <option value="Hands-on Project Building">Hands-on Project Building</option>
                <option value="Guided Step-by-Step Labs">Guided Step-by-Step Labs</option>
                <option value="Theory & Mathematical First">Theory & Mathematical First</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Assessment</span>
            </button>
            <button
              onClick={handleFinishOnboarding}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 hover:from-amber-600 hover:to-brand-orange text-white font-bold text-sm shadow-glow-orange transition flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate My Tailored Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
