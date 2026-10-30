import React from 'react';
import { Compass, Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center text-white font-bold shadow-glow-orange">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-heading text-white">INSPIRE</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Intelligent Navigation for Skills, Potential, Industry, Roadmaps & Employment. Bridging collegiate education to high-growth tech careers.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center hover:text-brand-orange hover:bg-navy-800 transition">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center hover:text-brand-orange hover:bg-navy-800 transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:contact@inspire-navigator.edu" className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center hover:text-brand-orange hover:bg-navy-800 transition">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Prototype Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              Prototype Modules
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/auth" className="hover:text-brand-orange transition">Assessment & Onboarding</Link></li>
              <li><Link to="/app/career-explorer" className="hover:text-brand-orange transition">Career Explorer (8 Domains)</Link></li>
              <li><Link to="/app/skill-gap" className="hover:text-brand-orange transition">Skill Gap Diagnostics</Link></li>
              <li><Link to="/app/roadmap" className="hover:text-brand-orange transition">Dynamic Roadmaps</Link></li>
              <li><Link to="/app/opportunities" className="hover:text-brand-orange transition">Verified Job Matching</Link></li>
              <li><Link to="/app/skill-passport" className="hover:text-brand-orange transition">Digital Skill Passport</Link></li>
            </ul>
          </div>

          {/* Institutional / Impact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              Stakeholders
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/app/institution" className="text-brand-orange font-medium hover:underline flex items-center gap-1.5">Institution Portal (Bonus) <ExternalLink className="w-3.5 h-3.5" /></Link></li>
              <li><a href="#impact" className="hover:text-brand-orange transition">NEP 2020 Skill Alignment</a></li>
              <li><a href="#impact" className="hover:text-brand-orange transition">Employability Metrics</a></li>
              <li><a href="#team-support" className="hover:text-brand-orange transition">Govt Pilot Program</a></li>
              <li><Link to="/app/feedback" className="hover:text-brand-orange transition">Industry Advisory Board</Link></li>
            </ul>
          </div>

          {/* Team / Hackathon details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              Hackathon Team
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Crafted with precision for Hackathon Demo by students of BSc IT.
            </p>
            <div className="text-xs space-y-1.5 text-slate-300">
              <p><span className="text-brand-orange font-medium">Sanjana:</span> Presenter (BSc IT)</p>
              <p><span className="text-brand-orange font-medium">Gayatri:</span> Frontend (BSc IT)</p>
              <p><span className="text-brand-orange font-medium">Yash:</span> Developer (BSc IT)</p>
              <p><span className="text-brand-orange font-medium">Samarth:</span> Logo Designer (BSc IT)</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 INSPIRE. All rights reserved. Hackathon Working Prototype.</p>
          <div className="flex items-center gap-2">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
            <span>for youth employability & skill equity.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
