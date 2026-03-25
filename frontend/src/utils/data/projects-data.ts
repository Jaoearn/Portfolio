import type { Project } from "../../components/projects/ProjectsSection";

export const projectsData: Project[] = [
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description: "Modern portfolio built with React, TypeScript and Tailwind",
    images: ["/projects/portfolio.jpg"],
    tools: ["React", "TypeScript", "Tailwind", "GSAP"],
    demo: "https://your-demo.com",
    code: "https://github.com/your-repo",
    date: "2026-02-01"
  },
  {
    id: "task-manager",
    name: "Task Manager App",
    description: "Fullstack task management system with authentication",
    images: ["/projects/task.jpg"],
    tools: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://task-demo.com",
    code: "https://github.com/your-repo",
    date: "2025-12-10"
  },
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    description: "Shopping platform with payment integration",
    images: ["/projects/ecommerce.jpg"],
    tools: ["React", "orangeux", "Stripe", "Node.js"],
    demo: "https://shop-demo.com",
    code: "https://github.com/your-repo",
    date: "2025-11-20"
  },
  {
    id: "dashboard",
    name: "Admin Dashboard",
    description: "Analytics dashboard with charts and realtime data",
    images: ["/projects/dashboard.jpg"],
    tools: ["React", "TypeScript", "ChartJS", "Firebase"],
    demo: "https://dashboard-demo.com",
    code: "https://github.com/your-repo",
    date: "2025-10-05"
  }
];