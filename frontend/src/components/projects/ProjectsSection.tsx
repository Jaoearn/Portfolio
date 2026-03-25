import { useState } from "react";
import { ChevronsDown, ChevronsUp } from "lucide-react";
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

  const [showAll, setShowAll] = useState(false);

  const firstProjects = projectsData.slice(0, 3);
  const restProjects = projectsData.slice(3);

  return (
    <section
      id="projects"
      className="relative z-50 py-16 lg:py-32 overflow-hidden"
    >
      {/* ⭐ STARS LAYER */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.8), transparent),
            radial-gradient(1.5px 1.5px at 70% 60%, rgba(255,255,255,.6), transparent),
            radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,.7), transparent),
            radial-gradient(2px 2px at 90% 20%, rgba(255,255,255,.9), transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* section title */}
      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">

          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-orange-600"></span>

          <span className="bg-[#050505] border border-orange-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            Projects Showcase
          </span>

          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-orange-600"></span>

        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <div className="flex flex-col items-center gap-12 lg:gap-20">

          {/* projects grid */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">

            {/* 3 project แรก */}
            {firstProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {/* project ที่เหลือ */}
            {showAll &&
              restProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>

          {/* view all button */}
          {restProjects.length > 0 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="group mt-8 relative px-10 py-4 rounded-2xl 
              bg-gradient-to-r from-black via-red-800 via-orange-700 to-black
              text-white font-bold uppercase tracking-widest text-sm 
              transition-all duration-300 hover:scale-105 active:scale-95 
              shadow-[0_0_15px_rgba(255,115,0,0.12)]
              flex items-center gap-2 overflow-hidden border border-white/10"
            >

              {/* 🔥 glow overlay */}
              <div className="absolute inset-0 bg-[#050505] border border-orange-600/30 text-white p-3 px-8 text-2xl font-bold" />

              {/* ✨ shine effect */}
              <div className="absolute -left-1/2 top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.5s_linear]"></div>

              <span className="relative flex items-center gap-2">
                {showAll ? "View Less" : "View All"}
                {showAll ? (
                  <ChevronsUp className="w-4 h-4" />
                ) : (
                  <ChevronsDown className="w-4 h-4" />
                )}
              </span>

            </button>
          )}

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;