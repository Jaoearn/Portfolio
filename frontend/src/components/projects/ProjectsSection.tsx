import { MoveUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export type Project = {
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

type Props = {
  projectsData: Project[];
};

const ProjectsSection = ({ projectsData }: Props) => {
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative z-50 py-16 lg:py-32 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* section title */}
      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">

          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-teal-600"></span>

          <span className="bg-[#050505] border border-teal-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            Projects Showcase
          </span>

          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-teal-600"></span>

        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <div className="flex flex-col items-center gap-12 lg:gap-20">

          {/* projects grid */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">

            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

          </div>

          {/* view more button */}
          <a href="/projects" className="group mt-8">

            <button className="relative px-10 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-900 text-white font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(220,38,38,0.3)] flex items-center gap-2 overflow-hidden">

              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              <span className="relative flex items-center gap-2">
                Explore Full Archive
                <MoveUpRight className="w-4 h-4" />
              </span>

            </button>

          </a>

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;