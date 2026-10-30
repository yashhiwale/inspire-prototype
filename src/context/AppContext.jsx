import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  loadInitialState, 
  persistState, 
  mockDomains, 
  mockSkillsByDomain, 
  getRoadmapForDomain, 
  mockOpportunities 
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(() => loadInitialState());
  const [toasts, setToasts] = useState([]);

  // Auto-persist on state change
  useEffect(() => {
    persistState(state);
  }, [state]);

  // Toast notification helper
  const showToast = (title, message = "", type = "success") => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Auth actions
  const login = (userData) => {
    setState((prev) => ({
      ...prev,
      auth: {
        isAuthenticated: true,
        user: {
          id: userData?.id || "usr-" + Date.now(),
          name: userData?.name || "Aarav Sharma",
          email: userData?.email || "aarav@demo.edu.in",
          role: "Student",
          educationLevel: userData?.educationLevel || "BSc IT / Computer Science",
          college: userData?.college || "Institute of Technology & Science",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
          bio: "Passionate learner navigating industrial competencies with INSPIRE."
        }
      }
    }));
    showToast("Welcome to INSPIRE!", "Logged in successfully.", "success");
  };

  const register = (userData) => {
    setState((prev) => ({
      ...prev,
      auth: {
        isAuthenticated: true,
        user: {
          id: "usr-" + Date.now(),
          name: userData?.name || "Student Innovator",
          email: userData?.email || "new.student@inspire.org",
          role: "Student",
          educationLevel: userData?.educationLevel || "Undergraduate (Final Year)",
          college: userData?.college || "National Technical University",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80",
          bio: "Exploring career roadmaps and industry opportunities."
        }
      },
      onboarding: {
        ...prev.onboarding,
        completed: false,
        step: 1
      }
    }));
    showToast("Account Created!", "Let's personalize your career roadmap.", "success");
  };

  const logout = () => {
    setState((prev) => ({
      ...prev,
      auth: {
        isAuthenticated: false,
        user: null
      }
    }));
    showToast("Signed Out", "You have been logged out safely.", "info");
  };

  const updateProfile = (profileData) => {
    setState((prev) => ({
      ...prev,
      auth: {
        ...prev.auth,
        user: {
          ...prev.auth.user,
          ...profileData
        }
      }
    }));
    showToast("Profile Updated", "Your changes have been saved.", "success");
  };

  const updateOnboarding = (data) => {
    setState((prev) => ({
      ...prev,
      onboarding: {
        ...prev.onboarding,
        ...data
      }
    }));
  };

  const completeOnboarding = (finalOnboardingData) => {
    setState((prev) => ({
      ...prev,
      onboarding: {
        ...prev.onboarding,
        ...finalOnboardingData,
        completed: true
      },
      selectedDomain: finalOnboardingData.selectedDomain || prev.selectedDomain || "web-dev"
    }));
    showToast("Assessment Completed!", "Your tailored domain roadmap has been generated.", "success");
  };

  const selectDomain = (domainId) => {
    setState((prev) => ({
      ...prev,
      selectedDomain: domainId
    }));
    const foundDomain = mockDomains.find(d => d.id === domainId);
    showToast(
      `Domain Selected: ${foundDomain ? foundDomain.name : domainId}`, 
      "Analyzing skill gap benchmark...", 
      "info"
    );
  };

  const toggleRoadmapTask = (taskId) => {
    setState((prev) => {
      const currentVal = !!prev.roadmapTasks[taskId];
      const nextVal = !currentVal;
      const updatedTasks = {
        ...prev.roadmapTasks,
        [taskId]: nextVal
      };

      if (nextVal) {
        showToast("Milestone Completed! 🎉", "Skill unlocked and recorded in your Skill Passport.", "success");
      }

      return {
        ...prev,
        roadmapTasks: updatedTasks
      };
    });
  };

  const applyToOpportunity = (opportunityId) => {
    if (state.appliedOpportunities.includes(opportunityId)) {
      showToast("Already Applied", "You have already submitted an application for this opportunity.", "info");
      return;
    }
    setState((prev) => ({
      ...prev,
      appliedOpportunities: [...prev.appliedOpportunities, opportunityId]
    }));
    showToast("Application Recorded (Prototype)", "Your profile & Skill Passport were sent to the employer.", "success");
  };

  const addProject = (projectData) => {
    const newProject = {
      id: "proj-" + Date.now(),
      title: projectData.title,
      link: projectData.link || "#",
      techStack: projectData.techStack,
      description: projectData.description,
      date: "Just now",
      stars: 1
    };
    setState((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects]
    }));
    showToast("Project Added", "Your portfolio in Skill Passport has been updated.", "success");
  };

  const addFeedback = (feedbackData) => {
    const newEntry = {
      id: "fb-" + Date.now(),
      userName: state.auth.user?.name || "Student Innovator",
      role: feedbackData.role || "Student",
      rating: feedbackData.rating || 5,
      category: feedbackData.category || "General Platform",
      message: feedbackData.message,
      createdAt: new Date().toISOString().split("T")[0]
    };
    setState((prev) => ({
      ...prev,
      feedbackList: [newEntry, ...prev.feedbackList]
    }));
    showToast("Thanks (prototype)", "Your valuable feedback has been recorded for review.", "success");
  };

  // Active domain object
  const activeDomain = mockDomains.find(d => d.id === state.selectedDomain) || mockDomains[1]; // default Web Dev

  // Active domain skills
  const domainSkills = mockSkillsByDomain[state.selectedDomain] || mockSkillsByDomain["web-dev"];

  // Active domain roadmap with completed status populated
  const rawRoadmap = getRoadmapForDomain(state.selectedDomain);
  let totalTasksCount = 0;
  let completedTasksCount = 0;
  const verifiedSkillsEarned = [];

  const roadmapModules = rawRoadmap.map(mod => {
    const enrichedTasks = mod.tasks.map(task => {
      const isCompleted = state.roadmapTasks[task.id] !== undefined 
        ? state.roadmapTasks[task.id] 
        : !!task.completed;
      totalTasksCount++;
      if (isCompleted) {
        completedTasksCount++;
        if (task.skillReward && !verifiedSkillsEarned.includes(task.skillReward)) {
          verifiedSkillsEarned.push(task.skillReward);
        }
      }
      return {
        ...task,
        completed: isCompleted
      };
    });
    return {
      ...mod,
      tasks: enrichedTasks
    };
  });

  const roadmapCompletionPercentage = totalTasksCount > 0 
    ? Math.round((completedTasksCount / totalTasksCount) * 100) 
    : 0;

  // Institution aggregated analytics
  const institutionStats = {
    totalStudents: 1420,
    cohortActive: 1184,
    averageRoadmapProgress: 64,
    topChosenDomains: [
      { name: "Full-Stack Web Dev", count: 480, percentage: 34 },
      { name: "AI & Machine Learning", count: 370, percentage: 26 },
      { name: "Cloud Architecture", count: 240, percentage: 17 },
      { name: "Data Analytics", count: 195, percentage: 14 },
      { name: "Cybersecurity", count: 135, percentage: 9 }
    ],
    commonGaps: [
      { skill: "TypeScript & Strict Systems", studentsAffected: 780, severity: "High" },
      { skill: "Production Docker & CI/CD", studentsAffected: 690, severity: "High" },
      { skill: "Vector Search & Retrieval (RAG)", studentsAffected: 540, severity: "Medium" },
      { skill: "REST / GraphQL Testing Protocols", studentsAffected: 460, severity: "Medium" }
    ],
    placementReadinessRate: "73.4%"
  };

  return (
    <AppContext.Provider
      value={{
        state,
        toasts,
        showToast,
        removeToast,
        login,
        register,
        logout,
        updateProfile,
        updateOnboarding,
        completeOnboarding,
        selectDomain,
        toggleRoadmapTask,
        applyToOpportunity,
        addProject,
        addFeedback,
        activeDomain,
        domainSkills,
        roadmapModules,
        roadmapCompletionPercentage,
        completedTasksCount,
        totalTasksCount,
        verifiedSkillsEarned,
        institutionStats,
        mockOpportunities,
        mockDomains
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
