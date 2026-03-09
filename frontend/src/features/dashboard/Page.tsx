import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionReveal from "../../components/SectionReveal";
import AboutSection from "../../components/about/AboutSection";
import ExperienceSection from "../../components/experience/ExperienceSection";
import ProjectsSection, { type Project } from "../../components/projects/ProjectsSection";
import SkillsSection from "../../components/skills/SkillsSection";
import WelcomeSection from "../../components/welcome/WelcomeSection";

export default function DashboardPage() {
  const welcomeData = {
    name: "Sutheera Preenan",
    designation: "Fullstack Developer",
    designationAlternateWords: [
      "Full-Stack Developer",
      "React & TypeScript Developer",
      "C# .NET Developer",
      "Backend Engineer"
    ],
    github: "https://github.com/Jaoearn",
    linkedIn: "https://linkedin.com/in/sutheera-preenan-06bb0126a",
    resume: "/resume.pdf"
  };

  const aboutData = {
    name: "Sutheera Preenan",
    profile: "/images/profile.jpg",
    description: `
    I am a passionate Full Stack Developer specializing in
    React, TypeScript, and .NET. I enjoy designing scalable
    systems, building modern UI, and crafting high-performance
    web applications.
    `,
  };

  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "SCG",
      duration: "2022 - Present",
      details: [
        "Developed vendor evaluation system using React + .NET",
        "Built API services and optimized SQL queries",
        "Implemented dynamic questionnaire evaluation system",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Tech Startup",
      duration: "2020 - 2022",
      details: [
        "Built responsive UI with React and Tailwind",
        "Integrated REST APIs",
        "Improved UI performance and accessibility",
      ],
    },
  ];

  const footerData = {
    email: "jaoearn.sp@email.com",
    phone: "0903996712",
    location: "Bangkok, Thailand",
    github: "https://github.com/yourname",
    linkedIn: "https://linkedin.com/in/yourname"
  };

  const projectsData: Project[] = [
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
      tools: ["React", "tealux", "Stripe", "Node.js"],
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

  return (
    <>
      <main className="bg-black min-h-screen text-white">
        <Navbar />

        <SectionReveal>
          <WelcomeSection personalData={welcomeData} />
        </SectionReveal>

        <SectionReveal>
          <AboutSection personalData={aboutData} />
        </SectionReveal>

        <SectionReveal>
          <ExperienceSection experiences={experienceData} />
        </SectionReveal>

        <SectionReveal>
          <SkillsSection />
        </SectionReveal>

        <SectionReveal>
          <ProjectsSection projectsData={projectsData}/>
        </SectionReveal>

        <Footer personalData={footerData} />
      </main>
    </>
  );
}
