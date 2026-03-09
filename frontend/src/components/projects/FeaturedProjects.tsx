import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

type Project = {
  id: string;
  name: string;
  description: string;
  images?: string[];
  videos?: string[];
  tools: string[];
  demo?: string;
  code?: string;
  date?: string;
};

const projectsData: Project[] = [
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description: "Modern portfolio built with React + TypeScript + Tailwind",
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
    description: "Complete shopping platform with cart and payment",
    images: ["/projects/ecommerce.jpg"],
    tools: ["React", "tealux", "Stripe", "Node.js"],
    demo: "https://shop-demo.com",
    code: "https://github.com/your-repo",
    date: "2025-11-20"
  }
];

const FeatutealProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start"
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="relative py-20">

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">

          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
            >
              <ProjectCard project={project} />
            </div>
          ))}

        </div>
      </div>

      {/* arrows */}

      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={scrollNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        <ChevronRight />
      </button>

    </section>
  );
};

export default FeatutealProjects;