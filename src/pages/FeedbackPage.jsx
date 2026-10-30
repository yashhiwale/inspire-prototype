import React, { useState } from 'react';
import { 
  MessageSquare, 
  Star, 
  Send, 
  CheckCircle2, 
  Building2, 
  User, 
  Briefcase, 
  Award, 
  Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FeedbackPage = () => {
  const { state, addFeedback } = useApp();

  const [rating, setRating] = useState(5);
  const [role, setRole] = useState("Industry Mentor");
  const [category, setCategory] = useState("Roadmap Alignment");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    addFeedback({
      role,
      rating,
      category,
      message
    });

    setMessage("");
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <span className="text-xs uppercase font-bold tracking-wider text-brand-orange">
          Continuous Industry Alignment
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 mt-1">
          Industry Feedback & Curriculum Advisory
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Bridge feedback directly between corporate employers, technical mentors, and student learners to keep roadmaps relevant to real production standards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (1 Col): Feedback Form */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-brand-orange" />
            <h3 className="text-lg font-bold font-heading text-navy-900">
              Submit Feedback (Prototype)
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Rating Stars */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Overall Platform & Roadmap Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-navy-900 ml-2">
                  {rating} of 5 Stars
                </span>
              </div>
            </div>

            {/* Stakeholder Role */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Role / Perspective
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:outline-none focus:border-brand-orange"
              >
                <option value="Industry Mentor">Industry Mentor / Technical Lead</option>
                <option value="Hiring Recruiter">Hiring Recruiter / HR Partner</option>
                <option value="Student Innovator">Student Innovator</option>
                <option value="College Faculty">College Faculty / Placement Officer</option>
              </select>
            </div>

            {/* Feedback Focus Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Focus Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:outline-none focus:border-brand-orange"
              >
                <option value="Roadmap Alignment">Roadmap & Syllabus Accuracy</option>
                <option value="Skill Gap Relevance">Skill Gap Benchmark Relevance</option>
                <option value="Skill Passport Quality">Skill Passport & Project Rigor</option>
                <option value="General Usability">Platform UX & Speed</option>
              </select>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Recommendations or Review
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts on which skills should be added or how the roadmap helped..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-orange resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold shadow-glow-orange transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Feedback (Prototype)</span>
            </button>
          </form>
        </div>

        {/* Right Column (2 Cols): Previous Feedback Entries */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-heading text-navy-900">
              Community & Mentor Testimonials ({state.feedbackList.length})
            </h3>
            <span className="text-xs text-slate-400">Recorded Live</span>
          </div>

          <div className="space-y-4">
            {state.feedbackList.map((fb) => (
              <div
                key={fb.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle hover:border-slate-300 transition space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-brand-orange flex items-center justify-center font-bold text-xs">
                      {fb.userName ? fb.userName.charAt(0) : "U"}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">{fb.userName}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {fb.role} • <span className="text-brand-orange">{fb.category}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(fb.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  "{fb.message}"
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <span>Verified Platform Contributor</span>
                  <span>Submitted: {fb.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
