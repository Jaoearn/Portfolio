import { Link } from "react-router-dom";
import ProjectCard from "../../components/projects/ProjectCard";
import type { Project } from "../../components/projects/ProjectsSection";
import { ArrowLeft } from "lucide-react";

const projectsData: Project[] = [
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description: "Modern portfolio built with React, TypeScript and Tailwind",
    images: ["/projects/portfolio.jpg"],
    tools: ["React", "TypeScript", "Tailwind", "GSAP"],
    demo: "https://your-demo.com",
    code: "https://github.com/your-repo",
    date: "2026-02-01",
  },
  {
    id: "task-manager",
    name: "Task Manager App",
    description: "Fullstack task management system with authentication",
    images: ["/projects/task.jpg"],
    tools: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://task-demo.com",
    code: "https://github.com/your-repo",
    date: "2025-12-10",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    description: "Shopping platform with payment integration",
    images: ["/projects/ecommerce.jpg"],
    tools: ["React", "tealux", "Stripe", "Node.js"],
    demo: "https://shop-demo.com",
    code: "https://github.com/your-repo",
    date: "2025-11-20",
  },
  {
    id: "dashboard",
    name: "Admin Dashboard",
    description: "Analytics dashboard with charts and realtime data",
    images: ["/projects/dashboard.jpg"],
    tools: ["React", "TypeScript", "ChartJS", "Firebase"],
    demo: "https://dashboard-demo.com",
    code: "https://github.com/your-repo",
    date: "2025-10-05",
  },
];

const Page = () => {
  return (
    <section
      id="projects"
      className="bg-black min-h-screen text-white relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 py-24 flex flex-col items-center gap-16 relative z-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white hover:text-teal-500 transition-colors mb-8 group font-medium self-start"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Dashboard</span>
        </Link>

        {/* Header */}
        <div className="max-w-3xl text-center flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
            The Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-800">
              Vault
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium italic">
            A comprehensive archive of high-performance applications, innovative
            experiments, and full-stack solutions built with mission-critical
            precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;