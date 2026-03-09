import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { ChevronUp, Code, ExternalLink, Globe, Sparkles } from "lucide-react";

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

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const firstImage = project.images?.[0];

  const [showAllTags, setShowAllTags] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cardRef = useRef<HTMLDivElement>(null);

  const maxVisibleTags = 5;

  const hasMoreTags = project.tools.length > maxVisibleTags;

  const visibleTools = showAllTags
    ? project.tools
    : project.tools.slice(0, maxVisibleTags);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const isNewProject = (dateString?: string) => {
    if (!dateString) return false;

    try {
      const projectDate = new Date(dateString);
      const currentDate = new Date();

      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(currentDate.getMonth() - 1);

      return projectDate >= oneMonthAgo && projectDate <= currentDate;
    } catch {
      return false;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239,68,68,0.1), transparent 40%)`
        }}
      />

      <div className="relative flex flex-col h-full justify-between border border-white/10 bg-[#050505]/20 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-teal-600/50 hover:shadow-teal-600/10">

        {/* media */}
        <div className="flex-1">

          <div className="relative overflow-hidden aspect-video">

            {project.videos?.[0] ? (
              <video
                src={project.videos[0]}
                className="w-full h-full object-cover"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
            ) : firstImage ? (
              <img
                src={firstImage}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                <span className="text-slate-600">{project.name}</span>
              </div>
            )}

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />

            {isNewProject(project.date) && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-600 to-teal-900 text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg animate-pulse z-10 border border-white/10">
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-[10px] font-bold tracking-wider">
                  NEW
                </span>
              </div>
            )}

          </div>

          {/* header */}
          <div className="p-6 pb-2">

            <a
              href={`/projects/${project.id}`}
              className="group/title inline-block"
            >
              <h3 className="text-2xl font-bold text-white group-hover/title:text-teal-500 transition-colors flex items-center gap-2 tracking-tight">
                {project.name}

                <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-y-0 group-hover/title:translate-x-0 transition-all text-teal-500" />
              </h3>
            </a>

          </div>

          {/* content */}
          <div className="px-6">

            <p className="text-slate-400 line-clamp-2 text-sm mb-6 leading-relaxed font-medium italic">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">

              {visibleTools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-[11px] font-bold bg-white/5 border border-white/10 text-slate-400 rounded-lg hover:bg-teal-500/10 hover:border-teal-500/30 hover:text-teal-500 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}

              {hasMoreTags && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllTags(!showAllTags);
                  }}
                  className="flex items-center gap-1 text-teal-500 hover:text-teal-400 text-[11px] font-black transition-colors pl-1 uppercase tracking-widest"
                >
                  {showAllTags ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    `+${project.tools.length - maxVisibleTags}`
                  )}
                </button>
              )}

            </div>

          </div>
        </div>

        {/* footer */}
        <div className="p-6 pt-2 flex gap-4">

          <a
            href={project.demo || "#"}
            target="_blank"
            className="flex-1"
          >
            <button
              disabled={!project.demo}
              className={`w-full h-11 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 ${
                project.demo
                  ? "bg-white/5 hover:bg-teal-600 text-white hover:border-teal-500 shadow-xl hover:shadow-teal-600/20"
                  : "bg-white/2 text-slate-800 cursor-not-allowed border-none"
              }`}
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </button>
          </a>

          <a
            href={project.code || "#"}
            target="_blank"
            className="flex-1"
          >
            <button
              disabled={!project.code}
              className={`w-full h-11 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 ${
                project.code
                  ? "bg-white/5 hover:bg-teal-950 text-white hover:border-teal-800 shadow-xl hover:shadow-teal-950/20"
                  : "bg-white/2 text-slate-800 cursor-not-allowed border-none"
              }`}
            >
              <Code className="w-4 h-4" />
              Source
            </button>
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;