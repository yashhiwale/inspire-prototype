# INSPIRE — Intelligent Navigation for Skills, Potential, Industry, Roadmaps & Employment

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Status-Hackathon_Working_Prototype-FF6B00?style=for-the-badge" alt="Prototype" />
</p>

> **INSPIRE** is a unified, intelligent career navigation platform engineered to bridge the critical gap between university curriculums and fast-evolving production industry competencies. Through diagnostic psychometric profiling, automated industry skill gap benchmarking, dynamic 5-week actionable roadmaps, and cryptographic Skill Passports, INSPIRE transforms raw collegiate potential into verified employability.

---

## 🌟 Key Highlights & Hackathon Features

- ⚡ **Zero Backend Dependency**: Fully functional, client-side interactive prototype powered by React Context and reactive `localStorage` persistence.
- 🎯 **8 High-Growth Career Tracks**: Data Analytics, Full-Stack Web Dev, Cybersecurity, Cloud Architecture, UI/UX Design, Digital Marketing, AI/ML Engineering, and DevOps.
- 🧠 **Explainable AI Recommendations**: Transparent *"Why Recommended"* explainability bullets derived dynamically from a 10-question cognitive assessment.
- 📊 **Dynamic Skill Gap Benchmarks**: Real-time comparison between current collegiate knowledge and verified corporate production requirements.
- 🗺️ **Interactive 5-Week Roadmap**: Modular checklist (Foundations $\to$ Capstone $\to$ Interview Readiness) that recalculates completion percentage live.
- 🎓 **Cryptographic Skill Passport**: Minted competency badges and portfolio repositories with downloadable SHA-256 verifiable JSON credentials.
- 💼 **Matched Employer Placements**: Real-time job/internship matching engine with 1-click application submissions.
- 🏛️ **Bonus: Institutional Oversight Portal**: Dean & Placement Cell dashboard providing batch bottleneck analytics, NAAC audit reports, and NEP 2020 compliance telemetry.

---

## 🧭 The 5-Pillar INSPIRE Framework

```
   ┌────────────────────────────────────────────────────────┐
   │                       I N S P I R E                    │
   └────────────────────────────────────────────────────────┘
          │                 │                │
          ▼                 ▼                ▼
   [I] Intelligent   [N] Navigation   [S] Skills &
       Diagnostics       & Gaps           Roadmaps
          │                 │                │
          └────────┬────────┴────────────────┘
                   ▼
          [P] Passport      [E] Employment
              Credential        Matching
```

1. **[I] Intelligent Diagnostics**: 10-point psychometric & cognitive assessment evaluating analytical logic, system security instincts, visual UX empathy, and code aptitude.
2. **[N] Navigation & Gaps**: Automated gap analysis identifying High/Medium/Low priority competency deficits against live industry job specifications.
3. **[S] Skills & Roadmaps**: Adaptive 5-week modular micro-tasks with live milestone progress and weekly study velocity tracking.
4. **[P] Passport Credential**: Verifiable digital talent passport generated exclusively from completed roadmap tasks with cryptographic export.
5. **[E] Employment Matching**: Curated internships, apprenticeships, and junior roles filtered by work mode, domain, and candidate passport match scores.

---

## 📸 Core Screen Walkthrough

| Screen | Route | Description |
|---|---|---|
| **Landing Page** | `/` | Hero with quick launch, structural problem breakdown, 5-pillar solution, 9-step flow, feasibility, ecosystem impact, team, and partnership CTAs. |
| **Auth & Fast-Track** | `/auth` | Sign In / Register tabs + **1-Click Demo Login as Student Aarav** for instant hackathon judge evaluations. |
| **Onboarding Wizard** | `/app/onboarding` | 3-Step interactive onboarding: Academic profile, 10-question cognitive assessment (1–5 scale), and target domain & weekly time capacity selection. |
| **Command Center** | `/app/dashboard` | Student learning cockpit showing active track, roadmap completion gauge, top 3 priority skill gaps, and next recommended action. |
| **Career Explorer** | `/app/career-explorer` | 8 domain cards with salary benchmarks, growth rates, and transparent *"Why Recommended"* explainability bullets. |
| **Skill Gap Diagnostics**| `/app/skill-gap` | Dual comparison progress bars (Student Baseline vs. Industry Standard) with strategic bridge advice. |
| **Dynamic Roadmap** | `/app/roadmap` | Week 1–2 (Foundations), Week 3–4 (Capstone Project), Week 5 (Interview Readiness) with interactive task checkboxes. |
| **Digital Skill Passport**| `/app/skill-passport` | Cryptographic credential card, verified skills minted from roadmap tasks, portfolio project submission, and JSON export. |
| **Job Opportunities** | `/app/opportunities` | Filterable postings (Domain, Type, Remote/Hybrid) with match percentage and instant prototype application recording. |
| **Velocity Analytics** | `/app/progress` | 7-day study consistency streak, hours tracked, and skill mastery velocity bars. |
| **Industry Advisory** | `/app/feedback` | Continuous curriculum feedback loop between mentors, recruiters, and students with 5-star ratings. |
| **Institutional Dean** | `/app/institution` | *(Bonus Portal)* Aggregated batch telemetries, common student skill bottlenecks, and downloadable NAAC / NEP 2020 audit reports. |

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 18 (Hooks, Context API, Suspense-ready)
- **Tooling & Bundler**: Vite 5 (Sub-second HMR & optimized production chunking)
- **Styling**: Tailwind CSS 3 (Deep Navy `#0B192C` + Vibrant Orange `#FF6B00` theme, custom glassmorphism, rounded-2xl cards)
- **Icons**: Lucide React (Clean, tree-shakeable SVG icons)
- **Routing**: React Router DOM v6 (Protected routes, scroll restoration, nested layouts)
- **Deployment**: Vercel (Configured with `vercel.json` SPA rewrite rules)

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/<YOUR_USERNAME>/inspire-prototype.git

# 2. Enter project directory
cd inspire-prototype

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

---

## ☁️ Deploying to Vercel

This repository includes a [`vercel.json`](./vercel.json) configuration that handles client-side routing rewrites so refreshing sub-routes like `/app/dashboard` never returns a 404 error.

### Option A: Via Vercel Web Dashboard (Recommended)
1. Push this repository to your GitHub account.
2. Go to [vercel.com](https://vercel.com) $\to$ Click **"Add New..."** $\to$ **"Project"**.
3. Import your `inspire-prototype` repository.
4. Framework preset will automatically detect **Vite**. Click **"Deploy"**.

### Option B: Via Terminal CLI
```bash
npx vercel
# Follow the prompts, then deploy to production:
npx vercel --prod
```

---

## ⏱️ 60-Second Hackathon Judge Demo Script

If you have 1 minute to pitch INSPIRE to a judge or investor, follow this flow:

1. **0:00 - 0:10 | The Problem & Landing (`/`)**: Open the landing page. Point to the stat: *Over 50% of engineering graduates face syllabus lag*. Click **"Launch Prototype Demo"**.
2. **0:10 - 0:15 | 1-Click Fast Track (`/auth`)**: Click **"1-Click Demo Login as Student Aarav"** to instantly bypass authentication typing.
3. **0:15 - 0:25 | Assessment & Goals (`/app/onboarding`)**: Show the 10-question cognitive assessment (1–5 scale) and explain how it maps traits to domains.
4. **0:25 - 0:35 | Diagnostics & Explorer (`/app/career-explorer` & `/app/skill-gap`)**: Show the 8 domains with transparent *"Why Recommended"* explainability bullets and the dual-bar skill gap analysis.
5. **0:35 - 0:45 | Interactive Roadmap (`/app/roadmap`)**: **Click any task checkbox** (e.g. *TypeScript Setup*): watch the completion percentage recalculate live with a toast notification!
6. **0:45 - 0:55 | Skill Passport & Jobs (`/app/skill-passport` & `/app/opportunities`)**: Show the minted skill badge earned from your completed task. Click **"Export Passport (JSON)"** to download the verifiable credential. In Opportunities, click **"Apply"** to record an application.
7. **0:55 - 1:00 | Institutional Dean (`/app/institution`)**: Conclude on the bonus Dean portal showcasing university-wide skill bottleneck aggregation and NAAC audit exports.

---

## 🤝 Support We Are Seeking

To scale INSPIRE from this working prototype into university pilot deployments, we invite collaboration across:

1. **Mentorship & Technical Guidance**: AI/ML model scaling, responsible AI ethics, and enterprise system design.
2. **Government Department Pilot**: Testing and structured feedback across public degree colleges, polytechnics, and state universities under NEP 2020 initiatives.
3. **Funding / Grant Support**: Prototype commercialization funding to scale cloud infrastructure, LLM inference endpoints, and student access.
4. **Incubation & Workspace**: University or state incubator space with legal, compliance, and venture acceleration mentorship.
5. **Testing, Certification & IP Support**: Domain competency testing standards, Skill Passport cryptographic verification accreditation, and patent advisory.

---

## 👥 Hackathon Team (BSc IT)

<div align="center">

| Emblem | Member | Role | Academic Focus |
|:---:|:---|:---|:---|
| **SJ** | **Sanjana** | **Presenter** | Pitch delivery, stakeholder narrative, market analysis & product-market fit storytelling. |
| **GY** | **Gayatri** | **Frontend** | Component architecture, user experience design system, responsive layouts & interactive UI. |
| **YS** | **Yash** | **Developer** | State orchestration, persistent data layer, algorithm matching & mock API telemetry. |
| **SM** | **Samarth** | **Logo Designer** | Visual identity, brand language, typography hierarchy & design asset consistency. |

</div>

---

<p align="center">
  Crafted with precision for Hackathon Demo • <strong>INSPIRE Team 2026</strong>
</p>
