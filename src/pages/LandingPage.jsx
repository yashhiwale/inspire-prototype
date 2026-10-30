import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Target, 
  ShieldAlert, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  Users, 
  Building2, 
  Laptop, 
  ChevronRight, 
  GraduationCap, 
  Lightbulb, 
  Rocket,
  Layers,
  BookOpen,
  Briefcase,
  FileCheck,
  Cpu,
  Mail,
  Send,
  ExternalLink
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ToastContainer } from '../components/ui/Toast';
import { useApp } from '../context/AppContext';

export const LandingPage = () => {
  const { state, showToast } = useApp();
  const navigate = useNavigate();
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', organization: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    showToast("Message Transmitted", "Thank you for reaching out to the INSPIRE Hackathon Team! We will connect within 24 hours.", "success");
    setContactForm({ name: '', email: '', organization: '', message: '' });
  };

  const steps = [
    { num: "01", title: "Aptitude & Trait Assessment", desc: "10 rapid psychometric & cognitive questions identify true intrinsic learning strengths." },
    { num: "02", title: "Interest & Goal Profiling", desc: "Define weekly time commitment, learning style, and aspirational tech career paths." },
    { num: "03", title: "AI Career Exploration", desc: "Explore 8 high-demand domains with transparent, explainable suitability ratings." },
    { num: "04", title: "Skill Gap Benchmark Diagnostics", desc: "Compare collegiate baseline against real-time live industry job requirements." },
    { num: "05", title: "Dynamic Adaptive Roadmap", desc: "Curated 5-week curriculum structured into Foundations, Capstone Project, and Interview Readiness." },
    { num: "06", title: "Interactive Task Checklist", desc: "Complete modular micro-tasks, push commits, and track velocity in real time." },
    { num: "07", title: "Capstone Project Verification", desc: "Build verified portfolio artefacts with GitHub repositories and live deploy links." },
    { num: "08", title: "Digital Skill Passport Generation", desc: "Earn cryptographically tamper-evident badges reflecting actual practical mastery." },
    { num: "09", title: "Verified Employer Placement", desc: "Apply directly to vetted internships and apprentice roles that match your passport score." },
  ];

  const supportSeekingItems = [
    {
      title: "Mentorship & Technical Guidance",
      desc: "Architectural reviews, AI/ML inference scaling, responsible AI ethics, and enterprise cloud system design from industry veteran practitioners.",
      tag: "Technical Architecture"
    },
    {
      title: "Pilot with a Government Department",
      desc: "Testing and structured feedback across public degree colleges, polytechnics, and vocational state universities under NEP 2020 initiatives.",
      tag: "Govt Deployment"
    },
    {
      title: "Funding / Grant Support",
      desc: "Seed grants and hackathon prototype commercialization funding to scale cloud infrastructure, LLM endpoints, and student access.",
      tag: "Ecosystem Grants"
    },
    {
      title: "Incubation & Workspace",
      desc: "Structured university or state incubator space with legal, compliance, and venture acceleration mentorship.",
      tag: "Incubation"
    },
    {
      title: "Testing, Certification or IP Support",
      desc: "Domain competency testing standards, Skill Passport cryptographic verification accreditation, and intellectual property patent advisory.",
      tag: "IP & Accreditation"
    }
  ];

  const teamMembers = [
    {
      name: "Sanjana",
      role: "Presenter",
      degree: "BSc IT",
      initials: "SJ",
      focus: "Pitch delivery, stakeholder narrative, market analysis & product-market fit storytelling."
    },
    {
      name: "Gayatri",
      role: "Frontend",
      degree: "BSc IT",
      initials: "GY",
      focus: "Component architecture, user experience design system, responsive layouts & interactive UI."
    },
    {
      name: "Yash",
      role: "Developer",
      degree: "BSc IT",
      initials: "YS",
      focus: "State orchestration, persistent data layer, algorithm matching & mock API telemetry."
    },
    {
      name: "Samarth",
      role: "Logo Designer",
      degree: "BSc IT",
      initials: "SM",
      focus: "Visual identity, brand language, typography hierarchy & design asset consistency."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <ToastContainer />
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 text-white pt-16 pb-28">
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/80 border border-brand-orange/40 text-brand-orange text-xs sm:text-sm font-semibold mb-6 shadow-glow-orange backdrop-blur-md animate-fade-in">
            <Sparkles className="w-4 h-4 text-brand-orange animate-spin" style={{ animationDuration: '6s' }} />
            <span>National Hackathon Working Prototype • Student Role & Institution Engine</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
            Bridging Degrees to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-orange-400">High-Growth Tech Careers</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            <strong className="text-white font-semibold">INSPIRE</strong> — Intelligent Navigation for Skills, Potential, Industry, Roadmaps & Employment. The unified AI roadmap that detects your skill gaps, generates actionable milestones, and certifies employment readiness.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/auth"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-600 hover:from-amber-600 hover:to-brand-orange text-white font-bold text-base shadow-glow-orange hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>Launch Prototype Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/app/institution"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-navy-800/90 hover:bg-navy-800 text-slate-200 border border-slate-700 font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>Explore Institution Dashboard (Bonus)</span>
            </Link>
          </div>

          {/* Fast Metric Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-navy-800/80">
            <div className="p-4 rounded-2xl bg-navy-800/40 border border-navy-700/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold font-heading text-brand-orange">8 Tracks</div>
              <div className="text-xs text-slate-400 mt-1">High-growth domains mapped</div>
            </div>
            <div className="p-4 rounded-2xl bg-navy-800/40 border border-navy-700/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold font-heading text-white">100% Mock</div>
              <div className="text-xs text-slate-400 mt-1">Interactive local persistence</div>
            </div>
            <div className="p-4 rounded-2xl bg-navy-800/40 border border-navy-700/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold font-heading text-emerald-400">9 Steps</div>
              <div className="text-xs text-slate-400 mt-1">Diagnostic to Placement flow</div>
            </div>
            <div className="p-4 rounded-2xl bg-navy-800/40 border border-navy-700/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold font-heading text-amber-400">&lt; 60s Demo</div>
              <div className="text-xs text-slate-400 mt-1">Judge-ready clickable flow</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              The Structural Crisis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900 mt-4">
              Over 50% of Graduates Are Deemed "Unemployable" by Industry
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Despite four years of academic engineering degrees, a massive disconnect persists between outdated university syllabi and fast-evolving production standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-all hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy-900 mb-2">Theoretical Syllabus Lag</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Curriculums change once every 5 to 7 years. Meanwhile, tools like TypeScript, Docker, RAG agents, and Kubernetes became prerequisite baseline criteria for entry-level tech roles.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy-900 mb-2">No Clear Diagnostics</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Students lack personalized feedback. They do not know which specific skills they lack, nor do they have a step-by-step roadmap to bridge the gap before graduation.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-orange/40 transition-all hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy-900 mb-2">Unverifiable Resumes</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recruiters sift through thousands of self-claimed skills on PDFs. Without verifiable task-based project artifacts, deserving students from non-tier-1 colleges are filtered out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section id="solution" className="py-20 bg-navy-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              The INSPIRE Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-4">
              A 5-Pillar Intelligent Navigation Ecosystem
            </h2>
            <p className="text-slate-300 mt-3 text-base">
              INSPIRE unifies cognitive profiling, automated industry benchmarking, step-by-step roadmaps, verifiable credentials, and direct corporate talent pipelines into one seamless experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { letter: "I", title: "Intelligent Diagnostics", desc: "Psychometric 10-point assessment calculates strengths across 8 technical domains." },
              { letter: "N", title: "Navigation & Gaps", desc: "Live comparison of current collegiate knowledge vs required industry competency." },
              { letter: "S", title: "Skills & Roadmaps", desc: "Modular weekly tasks (Foundations -> Project -> Interview) with real progress tracking." },
              { letter: "P", title: "Passport Credential", desc: "Verifiable digital portfolio generated exclusively from completed roadmap milestones." },
              { letter: "E", title: "Employment Matching", desc: "Curated internships and roles with transparent match scores and 1-click applications." }
            ].map((col, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-navy-800/80 border border-navy-700/80 flex flex-col justify-between hover:border-brand-orange/50 transition-all hover:-translate-y-1">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-extrabold text-lg flex items-center justify-center mb-4">
                    {col.letter}
                  </div>
                  <h3 className="text-base font-bold font-heading text-white mb-2">{col.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{col.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy-700/60 text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                  Pillar {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (9 STEPS) */}
      <section id="how-it-works" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
              End-to-End User Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900 mt-4">
              How INSPIRE Works in 9 Clear Steps
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              A systematic student journey engineered to move anyone from career ambiguity to verified employability in 5 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((st) => (
              <div key={st.num} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-orange/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-brand-orange">{st.num}</span>
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-navy-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-brand-orange">
                  <span>Interactive in Prototype</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEASIBILITY & IMPACT */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feasibility Column */}
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Operational Feasibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900 mt-4 mb-6">
                Engineered for High Scalability & Rapid Adoption
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Cpu className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Zero Heavy Infrastructure Dependency</h4>
                    <p className="text-xs text-slate-600 mt-1">Lightweight client architecture runs on standard web browsers without requiring high-spec student machines or expensive lab infrastructure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Building2 className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Seamless Institutional Onboarding</h4>
                    <p className="text-xs text-slate-600 mt-1">Colleges plug directly into the Institution Dashboard to audit batch skill bottlenecks, NAAC criteria, and placement statistics in real time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Award className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">NEP 2020 & NCrF Alignment</h4>
                    <p className="text-xs text-slate-600 mt-1">Directly complies with National Education Policy recommendations for skill-based modular credits and apprenticeship frameworks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Column */}
            <div className="bg-navy-900 text-white p-8 sm:p-10 rounded-3xl shadow-card border border-navy-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold font-heading text-white mb-6">Projected Ecosystem Impact</h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-navy-800/80 border border-navy-700">
                  <div className="text-3xl font-black font-heading text-brand-orange">+48%</div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">Placement Interview Conversion</div>
                </div>
                <div className="p-4 rounded-2xl bg-navy-800/80 border border-navy-700">
                  <div className="text-3xl font-black font-heading text-emerald-400">5 Weeks</div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">Average Skill Bridging Time</div>
                </div>
                <div className="p-4 rounded-2xl bg-navy-800/80 border border-navy-700">
                  <div className="text-3xl font-black font-heading text-amber-400">100%</div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">Verifiable Task Proofs</div>
                </div>
                <div className="p-4 rounded-2xl bg-navy-800/80 border border-navy-700">
                  <div className="text-3xl font-black font-heading text-sky-400">0 Tier Bias</div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">Merit-based Skill Passport</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-800/50 border border-navy-700 text-xs text-slate-300 italic leading-relaxed">
                "By decoupling placement eligibility from college brand and tying it directly to verified roadmap milestones, INSPIRE unlocks latent engineering potential across Tier-2 and Tier-3 institutions."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUPPORT WE ARE SEEKING (Exact content requested) */}
      <section id="team-support" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
              Partnership & Acceleration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900 mt-4">
              Support We Are Seeking
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              To take INSPIRE from our hackathon working prototype to an institutional pilot across colleges, we invite collaboration in these five focus areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {supportSeekingItems.map((item, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-subtle hover:border-brand-orange transition-all hover:shadow-card flex flex-col justify-between">
                <div>
                  <div className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-orange-50 text-brand-orange border border-orange-200 mb-4">
                    {item.tag}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-brand-orange">
                  <span>Open for Collaboration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}

            {/* Quick Pilot Box */}
            <div className="bg-gradient-to-br from-brand-orange to-amber-600 text-white p-7 rounded-2xl shadow-glow-orange flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white mb-4 inline-block">
                  Immediate Next Step
                </span>
                <h3 className="text-lg font-bold font-heading mb-2">
                  Launch a 30-Day College Pilot
                </h3>
                <p className="text-xs text-white/90 leading-relaxed">
                  We are ready to deploy the student diagnostic and roadmap modules with a cohort of 100 students immediately.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 py-2.5 px-4 rounded-xl bg-white text-navy-900 font-bold text-xs hover:bg-slate-100 transition text-center shadow"
              >
                Inquire for Pilot Collaboration
              </a>
            </div>
          </div>

          {/* 7. TEAM CARDS (Exact names & roles requested) */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-navy-700 bg-slate-200 px-3 py-1 rounded-full">
              The Innovators
            </span>
            <h2 className="text-3xl font-bold font-heading text-navy-900 mt-3">
              Meet the Hackathon Team
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Passionate BSc IT innovators collaborating to democratize student career readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-slate-200 p-7 text-center shadow-subtle hover:shadow-card hover:border-brand-orange/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Clean Monogram / Typographic Emblem without photo */}
                  <div className="relative w-20 h-20 mx-auto mb-5">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-700/80 flex items-center justify-center text-white shadow-card group-hover:scale-105 group-hover:border-brand-orange/60 transition-transform duration-300">
                      <span className="font-heading font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
                        {member.initials}
                      </span>
                    </div>
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                      {member.degree}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-navy-900 mt-2">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-navy-800">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-widest font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
                Contact & Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-3">
                Let's Build the Future of Tech Careers
              </h2>
              <p className="text-xs text-slate-300 mt-2">
                Have questions, want to review the code, or interested in a campus pilot? Drop us a note.
              </p>
            </div>

            {contactSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Thank You for Connecting!</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                  Your inquiry has been received by Sanjana, Gayatri, Yash, and Samarth. We look forward to our discussion.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="mt-5 text-xs text-brand-orange font-semibold hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Verma"
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="e.g. mentor@partner.org"
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Organization / College / Firm</label>
                  <input
                    type="text"
                    value={contactForm.organization}
                    onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                    placeholder="e.g. Department of Higher Education / Tech Innovations"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Message / Area of Support</label>
                  <textarea
                    rows={3}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us how you would like to collaborate (Mentorship, Pilot, Grants, IP)..."
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange transition resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm shadow-glow-orange transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Team</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
};
