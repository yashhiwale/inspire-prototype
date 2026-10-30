import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state } = useApp();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Feasibility & Impact", href: "#impact" },
    { label: "Support & Team", href: "#team-support" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-navy-900/90 backdrop-blur-md border-b border-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center shadow-glow-orange group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold font-heading tracking-tight text-white flex items-center gap-1.5">
              INSPIRE
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            </span>
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium -mt-1 hidden sm:block">
              Skill & Career Navigator
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand-orange transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Auth CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {state.auth.isAuthenticated ? (
            <Link
              to="/app/dashboard"
              className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-semibold shadow-glow-orange transition-all duration-200 flex items-center gap-2"
            >
              Enter Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <>
              <Link
                to="/auth"
                className="text-sm font-semibold text-slate-200 hover:text-white px-3 py-2 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/auth"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 hover:from-amber-600 hover:to-brand-orange text-white text-sm font-semibold shadow-glow-orange transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950 border-b border-navy-800 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-brand-orange py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-navy-800 flex flex-col gap-3">
            {state.auth.isAuthenticated ? (
              <Link
                to="/app/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm shadow-glow-orange"
              >
                Enter Student Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl border border-slate-700 text-slate-200 font-semibold text-sm"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm shadow-glow-orange"
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
