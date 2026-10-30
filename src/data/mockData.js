// Mock Data Layer for INSPIRE Prototype
// Central store for domains, skill gap baselines, roadmaps, opportunities, and questions

export const mockDomains = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    badge: "Highest Growth",
    icon: "BrainCircuit",
    tagline: "Build neural models, predictive systems, and generative AI agents",
    description: "Design and implement intelligent algorithms that enable computers to learn from massive datasets and make autonomous decisions.",
    growthRate: "+38% YoY",
    avgSalary: "₹10L – ₹22L / $115k",
    difficulty: "Advanced",
    tags: ["Python", "PyTorch", "LLMs", "Vector DBs", "Statistics"],
    whyRecommended: [
      "Top percentile rating in analytical and mathematical problem-solving",
      "High curiosity for cognitive systems and data modeling",
      "Strong alignment with computational logic assessed in onboarding"
    ],
    topRoles: ["ML Engineer", "Data Scientist", "GenAI Solutions Architect"]
  },
  {
    id: "web-dev",
    name: "Full-Stack Web Development",
    badge: "Most Demanded",
    icon: "Code2",
    tagline: "Architect responsive, performant web applications end-to-end",
    description: "Engineer dynamic web applications using modern component ecosystems, scalable backend microservices, and reactive databases.",
    growthRate: "+27% YoY",
    avgSalary: "₹7.5L – ₹16L / $95k",
    difficulty: "Intermediate",
    tags: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"],
    whyRecommended: [
      "Pronounced preference for visual creation combined with logical structuring",
      "Demonstrated interest in building user-facing digital applications",
      "Fast feedback loop appeals to your iterative problem-solving style"
    ],
    topRoles: ["Frontend Engineer", "Full-Stack Developer", "Product Engineer"]
  },
  {
    id: "data-analytics",
    name: "Data Analytics & BI",
    badge: "High Industry Demand",
    icon: "BarChart3",
    tagline: "Transform unstructured raw metrics into high-impact strategic decisions",
    description: "Leverage statistical modeling, SQL querying, and executive dashboards to extract actionable intelligence and forecast trends.",
    growthRate: "+29% YoY",
    avgSalary: "₹6.5L – ₹14L / $85k",
    difficulty: "Beginner–Intermediate",
    tags: ["SQL", "PowerBI", "Python Pandas", "Tableau", "Storytelling"],
    whyRecommended: [
      "High inclination toward uncovering patterns and trends in data",
      "Strong business acumen and clarity in evidence-based reasoning",
      "Balanced score in exploratory analysis and visualization"
    ],
    topRoles: ["Data Analyst", "BI Specialist", "Revenue Operations Analyst"]
  },
  {
    id: "cloud-computing",
    name: "Cloud Architecture & AWS",
    badge: "Enterprise Standard",
    icon: "Cloud",
    tagline: "Deploy resilient, distributed cloud infrastructure at planetary scale",
    description: "Design serverless architectures, multi-region failovers, container orchestrations, and secure hybrid cloud solutions.",
    growthRate: "+32% YoY",
    avgSalary: "₹9L – ₹18L / $110k",
    difficulty: "Intermediate–Advanced",
    tags: ["AWS", "Docker", "Terraform", "Serverless", "Kubernetes"],
    whyRecommended: [
      "Natural inclination toward high availability and systemic stability",
      "Strong conceptual grasp of network topography and infrastructure scaling",
      "High evaluation in resource optimization questions"
    ],
    topRoles: ["Cloud Solutions Architect", "AWS Infrastructure Engineer", "Site Reliability Engineer"]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & InfoSec",
    badge: "Mission Critical",
    icon: "ShieldCheck",
    tagline: "Safeguard enterprise ecosystems from advanced persistent threats",
    description: "Perform penetration testing, zero-trust network hardening, threat modeling, and cryptographic risk governance.",
    growthRate: "+35% YoY",
    avgSalary: "₹8.5L – ₹19L / $105k",
    difficulty: "Advanced",
    tags: ["Ethical Hacking", "SOC Ops", "Network Defense", "SIEM", "Cryptography"],
    whyRecommended: [
      "Vigilant mindset focused on edge cases, vulnerabilities, and risk prevention",
      "Deep interest in operating systems, protocols, and security audits",
      "Resilience in investigative and forensic diagnostics"
    ],
    topRoles: ["Security Analyst", "Penetration Tester", "SOC Tier-2 Specialist"]
  },
  {
    id: "ui-ux",
    name: "UI/UX Product Design",
    badge: "User Experience",
    icon: "Palette",
    tagline: "Craft intuitive, human-centered product journeys and design systems",
    description: "Translate complex human behaviors into elegant wireframes, design tokens, interactive micro-interactions, and usability studies.",
    growthRate: "+24% YoY",
    avgSalary: "₹6.5L – ₹15L / $88k",
    difficulty: "Beginner–Intermediate",
    tags: ["Figma", "Design Systems", "User Research", "Wireframing", "Prototyping"],
    whyRecommended: [
      "High empathy and keen observation of human frustration points with technology",
      "Strong visual balance, typography appreciation, and spatial hierarchy awareness",
      "Appetite for user testing, user journey mapping, and usability ergonomics"
    ],
    topRoles: ["Product Designer", "UI/UX Architect", "Design Systems Lead"]
  },
  {
    id: "devops",
    name: "DevOps & SRE",
    badge: "Engineering Velocity",
    icon: "Terminal",
    tagline: "Automate delivery pipelines, infrastructure as code, and observability",
    description: "Streamline developer workflows through continuous deployment (CI/CD), telemetry monitoring, and container clustering.",
    growthRate: "+30% YoY",
    avgSalary: "₹9L – ₹20L / $112k",
    difficulty: "Intermediate–Advanced",
    tags: ["GitOps", "Kubernetes", "GitHub Actions", "Prometheus", "Linux"],
    whyRecommended: [
      "Passion for reducing friction and automating repetitive toil",
      "High evaluation in systems thinking and pipeline orchestration",
      "Pragmatic approach to developer velocity and service uptime"
    ],
    topRoles: ["DevOps Engineer", "Platform Engineer", "Release Manager"]
  },
  {
    id: "digital-marketing",
    name: "Digital Growth & Performance",
    badge: "Revenue Driving",
    icon: "TrendingUp",
    tagline: "Orchestrate multi-channel acquisition funnels and conversion optimization",
    description: "Drive scalable user acquisition through paid search, technical SEO, attribution modeling, and retention marketing campaigns.",
    growthRate: "+21% YoY",
    avgSalary: "₹5.5L – ₹12L / $75k",
    difficulty: "Beginner",
    tags: ["Google Ads", "Growth Funnels", "Conversion Rate", "SEO", "Analytics"],
    whyRecommended: [
      "Dynamic commercial intuition paired with creative persuasion",
      "Aptitude for customer psychology and A/B test experimentation",
      "Speed in testing rapid market hypotheses"
    ],
    topRoles: ["Growth Marketer", "Performance Campaign Lead", "SEO Strategist"]
  }
];

export const mockSkillsByDomain = {
  "web-dev": [
    { id: "wd-1", name: "Modern React & Hooks", category: "Technical", current: 65, required: 90, gapLevel: "Medium", priority: 1, tip: "Master custom hooks, useMemo, and Context API patterns." },
    { id: "wd-2", name: "TypeScript Essentials", category: "Technical", current: 35, required: 85, gapLevel: "High", priority: 2, tip: "Build type-safe interfaces, generics, and strict payload validators." },
    { id: "wd-3", name: "Tailwind CSS & Responsive UI", category: "Technical", current: 80, required: 90, gapLevel: "Low", priority: 5, tip: "Focus on design tokens, mobile-first breakpoints, and accessible focus states." },
    { id: "wd-4", name: "REST & GraphQL API Integration", category: "Technical", current: 40, required: 80, gapLevel: "High", priority: 3, tip: "Learn TanStack Query, error boundaries, and optimistic mutation." },
    { id: "wd-5", name: "Git & Collaborative PR Workflows", category: "Soft Skills", current: 60, required: 85, gapLevel: "Medium", priority: 4, tip: "Practice rebase, semantic commit conventions, and peer code reviews." }
  ],
  "ai-ml": [
    { id: "ai-1", name: "Python for Data Science & NumPy", category: "Technical", current: 70, required: 90, gapLevel: "Low", priority: 5, tip: "Deep dive into vectorization and memory-efficient matrix operations." },
    { id: "ai-2", name: "PyTorch & Deep Learning Arch", category: "Technical", current: 30, required: 85, gapLevel: "High", priority: 1, tip: "Implement backpropagation and convolutional layers from scratch." },
    { id: "ai-3", name: "Prompt Engineering & RAG Systems", category: "Technical", current: 45, required: 85, gapLevel: "High", priority: 2, tip: "Integrate vector embeddings (Pinecone/Chroma) with LangChain." },
    { id: "ai-4", name: "Evaluation & Responsible AI Metrics", category: "Soft Skills", current: 40, required: 80, gapLevel: "High", priority: 3, tip: "Study bias mitigation, hallucination detection, and perplexity scores." },
    { id: "ai-5", name: "MLOps & Model Deployment (FastAPI)", category: "Tools", current: 25, required: 75, gapLevel: "High", priority: 4, tip: "Containerize trained models and expose low-latency inference endpoints." }
  ],
  "data-analytics": [
    { id: "da-1", name: "Advanced SQL Queries & Window Functions", category: "Technical", current: 50, required: 90, gapLevel: "High", priority: 1, tip: "Practice complex CTEs, partitioning, and query cost optimization." },
    { id: "da-2", name: "PowerBI / Tableau Dashboarding", category: "Tools", current: 60, required: 85, gapLevel: "Medium", priority: 3, tip: "Focus on executive KPI drill-downs and DAX calculated columns." },
    { id: "da-3", name: "Data Cleaning with Pandas", category: "Technical", current: 45, required: 80, gapLevel: "High", priority: 2, tip: "Handle imputation, outliers, and automated transformation pipelines." },
    { id: "da-4", name: "Business Stakeholder Storytelling", category: "Soft Skills", current: 55, required: 80, gapLevel: "Medium", priority: 4, tip: "Frame data findings into clear revenue and efficiency trade-offs." }
  ],
  "cloud-computing": [
    { id: "cc-1", name: "AWS Core Services (EC2, S3, RDS, IAM)", category: "Technical", current: 45, required: 90, gapLevel: "High", priority: 1, tip: "Configure least-privilege IAM policies and VPC subnet peering." },
    { id: "cc-2", name: "Docker Containerization", category: "Tools", current: 60, required: 85, gapLevel: "Medium", priority: 3, tip: "Create multi-stage Dockerfiles and minimize container image footprint." },
    { id: "cc-3", name: "Infrastructure as Code (Terraform)", category: "Technical", current: 20, required: 80, gapLevel: "High", priority: 2, tip: "Provision modular AWS environments using declarative HCL scripts." },
    { id: "cc-4", name: "Cloud Cost & Reliability Governance", category: "Soft Skills", current: 50, required: 75, gapLevel: "Medium", priority: 4, tip: "Implement auto-scaling schedules and Well-Architected Framework audits." }
  ],
  "cybersecurity": [
    { id: "cs-1", name: "Network Security & Packet Inspection", category: "Technical", current: 50, required: 85, gapLevel: "High", priority: 2, tip: "Analyze Wireshark captures, TCP handshakes, and firewall rules." },
    { id: "cs-2", name: "Web Application Pentesting (OWASP Top 10)", category: "Technical", current: 30, required: 90, gapLevel: "High", priority: 1, tip: "Identify and remediate SQLi, XSS, and broken access controls." },
    { id: "cs-3", name: "Linux Administration & Hardening", category: "Tools", current: 55, required: 80, gapLevel: "Medium", priority: 3, tip: "Audit SSH configs, systemd services, and file permission integrity." },
    { id: "cs-4", name: "Incident Response Playbooks", category: "Soft Skills", current: 40, required: 75, gapLevel: "High", priority: 4, tip: "Formulate triage escalation steps for simulated ransomware outbreaks." }
  ],
  "ui-ux": [
    { id: "ux-1", name: "Figma Component Systems & Auto Layout", category: "Tools", current: 70, required: 95, gapLevel: "Medium", priority: 2, tip: "Design scalable design tokens, nested components, and interactive variants." },
    { id: "ux-2", name: "User Research & Usability Testing", category: "Soft Skills", current: 40, required: 85, gapLevel: "High", priority: 1, tip: "Conduct unmoderated user tests and synthesize qualitative affinity diagrams." },
    { id: "ux-3", name: "Wireframing & Information Architecture", category: "Technical", current: 65, required: 90, gapLevel: "Medium", priority: 3, tip: "Map user flow logic before creating high-fidelity visual canvases." },
    { id: "ux-4", name: "Accessibility Standards (WCAG 2.1)", category: "Technical", current: 35, required: 80, gapLevel: "High", priority: 4, tip: "Ensure compliant contrast ratios, keyboard navigation, and screen reader labels." }
  ],
  "devops": [
    { id: "do-1", name: "CI/CD Pipeline Engineering (GitHub Actions)", category: "Tools", current: 45, required: 90, gapLevel: "High", priority: 1, tip: "Write self-healing build, lint, test, and release matrix workflows." },
    { id: "do-2", name: "Kubernetes Cluster Orchestration", category: "Technical", current: 25, required: 85, gapLevel: "High", priority: 2, tip: "Manage Deployments, Services, Ingress controllers, and Helm charts." },
    { id: "do-3", name: "Observability (Prometheus & Grafana)", category: "Tools", current: 40, required: 80, gapLevel: "High", priority: 3, tip: "Track RED/USE metrics and configure alert manager trigger thresholds." },
    { id: "do-4", name: "Infrastructure Automation & Bash Scripting", category: "Technical", current: 65, required: 85, gapLevel: "Medium", priority: 4, tip: "Write idempotent shell utilities to automate host provisioning." }
  ],
  "digital-marketing": [
    { id: "dm-1", name: "Google & Meta Ads Campaign Optimization", category: "Tools", current: 55, required: 85, gapLevel: "Medium", priority: 2, tip: "Structure ad set targeting, lookalike audiences, and ROAS bid strategies." },
    { id: "dm-2", name: "Technical SEO & Schema Markup", category: "Technical", current: 40, required: 80, gapLevel: "High", priority: 1, tip: "Audit Core Web Vitals, canonical links, and structured JSON-LD schemas." },
    { id: "dm-3", name: "Conversion Rate Optimization (A/B Testing)", category: "Technical", current: 45, required: 85, gapLevel: "High", priority: 3, tip: "Formulate statistical hypotheses and optimize landing page copy funnels." },
    { id: "dm-4", name: "Content Marketing & Narrative Strategy", category: "Soft Skills", current: 70, required: 85, gapLevel: "Low", priority: 4, tip: "Build pillar content clusters and multi-channel distribution calendars." }
  ]
};

export const mockRoadmapsByDomain = {
  "web-dev": [
    {
      moduleTitle: "Week 1–2: Frontend Architecture & TypeScript Core",
      badge: "Foundations",
      tasks: [
        { id: "wd-t1", title: "TypeScript Setup & Strict Mode Config", desc: "Build reusable interfaces, type aliases, and typed props for React.", hours: "6 hrs", skillReward: "TypeScript Core", completed: false },
        { id: "wd-t2", title: "Responsive Layout Engine with Tailwind CSS", desc: "Craft accessible mobile-first dashboards and grid layouts.", hours: "8 hrs", skillReward: "Tailwind Pro", completed: true },
        { id: "wd-t3", title: "State Management with Context & Custom Hooks", desc: "Isolate asynchronous data fetching and global themes cleanly.", hours: "10 hrs", skillReward: "React State Architecture", completed: false }
      ]
    },
    {
      moduleTitle: "Week 3–4: Real-World Full-Stack Integration Project",
      badge: "Project Milestone",
      tasks: [
        { id: "wd-t4", title: "RESTful API Integration with TanStack Query", desc: "Implement cached queries, debounced search, and optimistic UI updates.", hours: "12 hrs", skillReward: "API Orchestration", completed: false },
        { id: "wd-t5", title: "Authentication Flow & JWT Session Management", desc: "Implement protected client-side routes and secure token storage.", hours: "10 hrs", skillReward: "Auth Architecture", completed: false },
        { id: "wd-t6", title: "Production Build Optimization & Lighthouse Audit", desc: "Bundle split lazy routes and achieve 95+ performance scores.", hours: "6 hrs", skillReward: "Web Performance Tuning", completed: false }
      ]
    },
    {
      moduleTitle: "Week 5: Internship Readiness & Portfolio Showcase",
      badge: "Career Launch",
      tasks: [
        { id: "wd-t7", title: "Deploy Live Project on Vercel with Custom Domain", desc: "Connect GitHub repository for automated preview builds on commit.", hours: "4 hrs", skillReward: "Cloud CI/CD Deploy", completed: false },
        { id: "wd-t8", title: "Write Comprehensive README & Architectural Docs", desc: "Document system architecture diagrams, API specs, and setup instructions.", hours: "5 hrs", skillReward: "Engineering Documentation", completed: false },
        { id: "wd-t9", title: "Mock Technical Interview & Frontend System Design", desc: "Solve component tree design prompts and state lifting edge cases.", hours: "6 hrs", skillReward: "Interview Readiness", completed: false }
      ]
    }
  ],
  "ai-ml": [
    {
      moduleTitle: "Week 1–2: Mathematical Foundations & PyTorch Basics",
      badge: "Foundations",
      tasks: [
        { id: "ai-t1", title: "NumPy Vectorization & Linear Algebra Refresher", desc: "Matrix dot products, eigenvectors, and batch processing logic.", hours: "8 hrs", skillReward: "Matrix Computation", completed: true },
        { id: "ai-t2", title: "Building a Multi-Layer Perceptron in PyTorch", desc: "Define loss functions, backprop gradients, and Adam optimization.", hours: "10 hrs", skillReward: "PyTorch Basics", completed: false },
        { id: "ai-t3", title: "Data Preprocessing & Augmentation Pipeline", desc: "Construct torchvision/pandas loaders for imbalanced classes.", hours: "8 hrs", skillReward: "Data Wrangling", completed: false }
      ]
    },
    {
      moduleTitle: "Week 3–4: Applied Generative AI & RAG Architecture",
      badge: "Project Milestone",
      tasks: [
        { id: "ai-t4", title: "Semantic Search with Vector Embeddings", desc: "Chunk documents and store representations in ChromaDB.", hours: "12 hrs", skillReward: "Vector Databases", completed: false },
        { id: "ai-t5", title: "Building an Enterprise Q&A Agent with LangChain", desc: "Connect LLM reasoning loops with context-aware citation sources.", hours: "14 hrs", skillReward: "LLM Agent Systems", completed: false },
        { id: "ai-t6", title: "Model Evaluation & Guardrail Implementation", desc: "Measure groundedness metrics and prevent prompt injection breaches.", hours: "6 hrs", skillReward: "Responsible AI", completed: false }
      ]
    },
    {
      moduleTitle: "Week 5: Internship Readiness & Model Serving",
      badge: "Career Launch",
      tasks: [
        { id: "ai-t7", title: "Wrap Model into FastAPI Microservice & Dockerize", desc: "Expose predictable JSON endpoints with asynchronous inference.", hours: "8 hrs", skillReward: "ML API Deployment", completed: false },
        { id: "ai-t8", title: "Publish Benchmark Report & GitHub Showcase", desc: "Demonstrate precision/recall curves and latency trade-off tables.", hours: "5 hrs", skillReward: "AI Portfolio Ready", completed: false }
      ]
    }
  ],
  "data-analytics": [
    {
      moduleTitle: "Week 1–2: SQL Mastery & Data Exploration",
      badge: "Foundations",
      tasks: [
        { id: "da-t1", title: "Window Functions & Analytical SQL Queries", desc: "Rankings, running totals, and cohort segmentation queries.", hours: "8 hrs", skillReward: "Advanced SQL", completed: true },
        { id: "da-t2", title: "Pandas Data Cleaning & Exploratory Analysis", desc: "Identify null anomalies and generate summary statistics.", hours: "9 hrs", skillReward: "EDA Pro", completed: false }
      ]
    },
    {
      moduleTitle: "Week 3–4: Business Intelligence & Interactive Dashboards",
      badge: "Project Milestone",
      tasks: [
        { id: "da-t3", title: "Executive Dashboard in PowerBI / Tableau", desc: "Build dynamic filter slices and executive KPI summary cards.", hours: "12 hrs", skillReward: "BI Dashboarding", completed: false },
        { id: "da-t4", title: "Cohort Retention & Churn Predictive Modeling", desc: "Analyze customer lifecycle curves to suggest product improvements.", hours: "10 hrs", skillReward: "Business Intelligence", completed: false }
      ]
    },
    {
      moduleTitle: "Week 5: Internship Readiness & Case Presentation",
      badge: "Career Launch",
      tasks: [
        { id: "da-t5", title: "Pitch Slide Deck & Storytelling Case Study", desc: "Present insights to non-technical stakeholders with recommendations.", hours: "6 hrs", skillReward: "Executive Presentation", completed: false }
      ]
    }
  ]
};

// Fallback roadmap generator for domains not explicitly listed
export const getRoadmapForDomain = (domainId) => {
  if (mockRoadmapsByDomain[domainId]) {
    return mockRoadmapsByDomain[domainId];
  }
  return [
    {
      moduleTitle: "Week 1–2: Core Concepts & Professional Tooling",
      badge: "Foundations",
      tasks: [
        { id: `${domainId}-t1`, title: "Domain Fundamentals & Industry Standards", desc: "Establish foundational concepts, glossary, and setup workflows.", hours: "8 hrs", skillReward: "Core Knowledge", completed: true },
        { id: `${domainId}-t2`, title: "Tooling Proficiency & Environment Setup", desc: "Install and configure industry-standard IDEs, SDKs, and CLI tools.", hours: "6 hrs", skillReward: "Workflow Mastery", completed: false },
        { id: `${domainId}-t3`, title: "Mini-Case Study: Best Practices Exercise", desc: "Implement baseline specification following production grade rules.", hours: "8 hrs", skillReward: "Practical Execution", completed: false }
      ]
    },
    {
      moduleTitle: "Week 3–4: Hands-on Capstone Project",
      badge: "Project Milestone",
      tasks: [
        { id: `${domainId}-t4`, title: "Architecting the Capstone Solution", desc: "Formulate architecture design, schema models, and component boundaries.", hours: "10 hrs", skillReward: "System Architecture", completed: false },
        { id: `${domainId}-t5`, title: "Full Implementation & Testing", desc: "Develop the prototype and validate against edge cases and stress tests.", hours: "14 hrs", skillReward: "Capstone Development", completed: false },
        { id: `${domainId}-t6`, title: "Code Review & Quality Optimization", desc: "Refactor logic for maintainability, clarity, and performance benchmarks.", hours: "6 hrs", skillReward: "Code Quality", completed: false }
      ]
    },
    {
      moduleTitle: "Week 5: Internship Readiness & Career Portfolio",
      badge: "Career Launch",
      tasks: [
        { id: `${domainId}-t7`, title: "Portfolio Documentation & Live Hosting", desc: "Publish case study writeup with interactive demo links.", hours: "6 hrs", skillReward: "Portfolio Polish", completed: false },
        { id: `${domainId}-t8`, title: "Technical Mock Interview Prep", desc: "Simulate domain-specific technical challenges and behavioral responses.", hours: "6 hrs", skillReward: "Interview Confidence", completed: false }
      ]
    }
  ];
};

export const mockOpportunities = [
  {
    id: "opp-1",
    title: "Junior Frontend Engineer Intern",
    company: "Nexus Technologies",
    domainId: "web-dev",
    type: "Internship",
    mode: "Remote",
    location: "Bengaluru, India / Remote",
    stipend: "₹25,000 / month",
    duration: "3 Months",
    matchScore: 94,
    requiredSkills: ["React", "TypeScript", "Tailwind CSS"],
    description: "Collaborate with our core product engineering pod to build consumer-facing SaaS features with clean component architectures.",
    deadline: "In 6 days",
    badge: "Fast Track"
  },
  {
    id: "opp-2",
    title: "Applied AI Research Apprentice",
    company: "CognitiveFlow Labs",
    domainId: "ai-ml",
    type: "Internship",
    mode: "Hybrid",
    location: "Hyderabad, India",
    stipend: "₹35,000 / month",
    duration: "6 Months",
    matchScore: 88,
    requiredSkills: ["Python", "PyTorch", "LLM APIs", "Vector DB"],
    description: "Experiment with retrieval-augmented generation pipelines, evaluate agent performance benchmarks, and fine-tune open-weights LLMs.",
    deadline: "In 10 days",
    badge: "High Stipend"
  },
  {
    id: "opp-3",
    title: "Data Intelligence Analyst",
    company: "FinScale Global",
    domainId: "data-analytics",
    type: "Junior Role",
    mode: "On-site",
    location: "Mumbai, India",
    stipend: "₹7,20,000 / annum",
    duration: "Full Time",
    matchScore: 91,
    requiredSkills: ["SQL", "PowerBI", "Pandas", "Storytelling"],
    description: "Translate complex transactional data into leadership visual reports and optimize payment funnel conversion metrics.",
    deadline: "In 12 days",
    badge: "Full-Time Offer"
  },
  {
    id: "opp-4",
    title: "Cloud Infrastructure Associate",
    company: "Skyline Cloud Systems",
    domainId: "cloud-computing",
    type: "Internship",
    mode: "Remote",
    location: "Pune, India / Remote",
    stipend: "₹28,000 / month",
    duration: "4 Months",
    matchScore: 82,
    requiredSkills: ["AWS", "Docker", "Terraform", "Linux"],
    description: "Assist DevOps architects in building automated serverless pipelines and ensuring high availability multi-region infrastructure.",
    deadline: "In 8 days",
    badge: "PPO Available"
  },
  {
    id: "opp-5",
    title: "Associate UI/UX Designer",
    company: "Vivid Creatives",
    domainId: "ui-ux",
    type: "Project",
    mode: "Remote",
    location: "Remote Worldwide",
    stipend: "₹40,000 / project",
    duration: "6 Weeks",
    matchScore: 90,
    requiredSkills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    description: "Redesign the onboarding journey for a high-growth fintech mobile application with over 200,000 active users.",
    deadline: "In 4 days",
    badge: "Direct Contract"
  },
  {
    id: "opp-6",
    title: "Junior Security Operations Analyst",
    company: "CyberGuard Defense",
    domainId: "cybersecurity",
    type: "Junior Role",
    mode: "On-site",
    location: "Delhi NCR, India",
    stipend: "₹6,80,000 / annum",
    duration: "Full Time",
    matchScore: 85,
    requiredSkills: ["SIEM", "Network Security", "Linux Hardening", "OWASP"],
    description: "Monitor real-time network anomaly alerts, triage security incident reports, and participate in penetration testing drills.",
    deadline: "In 15 days",
    badge: "Govt Contractor"
  },
  {
    id: "opp-7",
    title: "Site Reliability / DevOps Intern",
    company: "Hyperscale Infra",
    domainId: "devops",
    type: "Internship",
    mode: "Remote",
    location: "Remote",
    stipend: "₹30,000 / month",
    duration: "3 Months",
    matchScore: 86,
    requiredSkills: ["CI/CD", "Kubernetes", "Prometheus", "Bash"],
    description: "Write and optimize deployment workflows and automated health monitoring checkups across multi-cluster environments.",
    deadline: "In 9 days",
    badge: "Top Mentorship"
  },
  {
    id: "opp-8",
    title: "Performance Marketing Fellow",
    company: "GrowthEngine Agency",
    domainId: "digital-marketing",
    type: "Internship",
    mode: "Hybrid",
    location: "Bengaluru, India",
    stipend: "₹22,000 / month",
    duration: "3 Months",
    matchScore: 80,
    requiredSkills: ["Google Ads", "A/B Testing", "SEO", "Analytics"],
    description: "Launch multi-channel customer acquisition experiments and analyze funnel retention curves to lower CAC.",
    deadline: "In 14 days",
    badge: "Fast Track"
  }
];

export const assessmentQuestions = [
  {
    id: "q1",
    category: "Analytical Logic",
    question: "I enjoy breaking down complex mathematical or algorithmic problems into systematic logic steps.",
    trait: "High analytical rigor",
    correlatedDomains: ["ai-ml", "data-analytics", "cybersecurity"]
  },
  {
    id: "q2",
    category: "Visual & Creative",
    question: "When I use an app or website, I immediately notice visual inconsistencies, bad typography, or clumsy user flow.",
    trait: "High UX/Visual perception",
    correlatedDomains: ["ui-ux", "web-dev"]
  },
  {
    id: "q3",
    category: "Product & Code",
    question: "I find immense satisfaction in writing code that immediately turns into something clickable and interactive on screen.",
    trait: "Builder mindset",
    correlatedDomains: ["web-dev", "ui-ux"]
  },
  {
    id: "q4",
    category: "Systems & Security",
    question: "I am fascinated by how hackers find security loopholes and how enterprise systems defend against cyber attacks.",
    trait: "Security instinct",
    correlatedDomains: ["cybersecurity", "cloud-computing"]
  },
  {
    id: "q5",
    category: "Data Storytelling",
    question: "I prefer making decisions backed by statistical charts and raw numbers rather than relying solely on intuition.",
    trait: "Empirical thinking",
    correlatedDomains: ["data-analytics", "digital-marketing"]
  },
  {
    id: "q6",
    category: "Cloud & Reliability",
    question: "I am curious about how platforms like Netflix and YouTube stream video to millions of users simultaneously without crashing.",
    trait: "High-scale engineering",
    correlatedDomains: ["cloud-computing", "devops"]
  },
  {
    id: "q7",
    category: "Automation & Velocity",
    question: "If I have to do a manual task more than twice, I would rather spend time writing an automation script to do it for me.",
    trait: "Efficiency & Automation",
    correlatedDomains: ["devops", "cloud-computing", "web-dev"]
  },
  {
    id: "q8",
    category: "AI & Future Tech",
    question: "I am eager to explore how Large Language Models (LLMs) and neural networks actually process and generate human thought.",
    trait: "AI fascination",
    correlatedDomains: ["ai-ml", "data-analytics"]
  },
  {
    id: "q9",
    category: "Human Empathy & Research",
    question: "I enjoy interviewing users and understanding their emotional frustrations to design better everyday solutions.",
    trait: "Human-centered empathy",
    correlatedDomains: ["ui-ux", "digital-marketing"]
  },
  {
    id: "q10",
    category: "Growth & Business Acumen",
    question: "I like analyzing viral trends, consumer behaviors, and what makes a product capture market attention rapidly.",
    trait: "Commercial orientation",
    correlatedDomains: ["digital-marketing", "data-analytics"]
  }
];

// LocalStorage helpers
const STORAGE_KEY = "INSPIRE_PROTOTYPE_DATA_V1";

export const loadInitialState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to parse state from localStorage:", e);
  }

  // Sensible default state for prototype
  return {
    auth: {
      isAuthenticated: true,
      user: {
        id: "usr-demo-01",
        name: "Aarav Sharma",
        email: "aarav.sharma@college.edu.in",
        role: "Student",
        educationLevel: "B.Tech Computer Science / IT (3rd Year)",
        college: "State Technological University",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
        bio: "Aspiring software engineer eager to master full-stack scalable web architecture and modern AI tooling."
      }
    },
    onboarding: {
      completed: true,
      step: 3,
      interests: ["Web Development", "AI Engineering", "UI Design"],
      hoursPerWeek: 15,
      learningStyle: "Hands-on Project Building",
      assessmentAnswers: {
        q1: 4, q2: 5, q3: 5, q4: 3, q5: 4, q6: 4, q7: 5, q8: 4, q9: 4, q10: 3
      }
    },
    selectedDomain: "web-dev",
    roadmapTasks: {
      "wd-t1": false,
      "wd-t2": true,
      "wd-t3": false,
      "wd-t4": false,
      "wd-t5": false,
      "wd-t6": false,
      "wd-t7": false,
      "wd-t8": false,
      "wd-t9": false
    },
    appliedOpportunities: ["opp-1"],
    projects: [
      {
        id: "proj-1",
        title: "CampusConnect — Student Peer Marketplace",
        link: "https://github.com/aarav-sharma/campus-connect",
        techStack: "React, Tailwind, Node.js, PostgreSQL",
        description: "Full-stack marketplace allowing university students to buy, sell, and exchange course notes and lab kits securely.",
        date: "October 2026",
        stars: 12
      }
    ],
    feedbackList: [
      {
        id: "fb-1",
        userName: "Aarav Sharma",
        role: "Student",
        rating: 5,
        category: "Roadmap Clarity",
        message: "The week-by-week roadmap broke down TypeScript in an approachable, step-by-step way that my college syllabus skipped!",
        createdAt: "2026-10-28"
      },
      {
        id: "fb-2",
        userName: "Priya Nair",
        role: "Industry Mentor (Infosys)",
        rating: 5,
        category: "Skill Gap Relevance",
        message: "The skill passport verified credentials directly mirror what our interview panels look for in junior engineering candidates.",
        createdAt: "2026-10-25"
      }
    ]
  };
};

export const persistState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to persist state to localStorage:", e);
  }
};
