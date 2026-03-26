import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { ChevronUp, Code, ExternalLink, Globe, Sparkles } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";
import type { Project } from "./ProjectsSection";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [IsOpen, setIsOpen] = useState(false);
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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239,68,68,0.1), transparent 40%)`
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between border border-white/10 bg-gradient-to-br from-black via-orange-950/60 to-black backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/50 hover:shadow-orange-600/10">

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
              <div className="w-full h-full bg-gradient-to-br from-slate-950 via-orange-950/70 to-black flex items-center justify-center">
                <span className="text-slate-600">{project.name}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-orange-900/70 to-transparent opacity-80" />
          </div>

          {/* header */}
          <div className="p-6 pb-2">

            <h3 
              onClick={() => {
                setSelectedProject(project);
                setIsOpen(true);
              }}
              className="group/title relative z-20 cursor-pointer text-2xl font-bold text-white flex items-center gap-2 tracking-tight"
            >
              <span className="group-hover/title:text-orange-500 transition-colors">
                {project.name}
              </span>

              <span className="inline-flex items-center overflow-hidden">
                <ExternalLink className="w-4 h-4 text-orange-500 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300" />
              </span>
            </h3>

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
                  className="px-3 py-1 text-[11px] font-bold bg-white/5 border border-white/10 text-slate-400 rounded-lg hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-500 transition-all duration-300"
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
                  className="flex items-center gap-1 text-orange-500 hover:text-orange-400 text-[11px] font-black transition-colors pl-1 uppercase tracking-widest"
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

          {project.demo && (
            <a href={project.demo} target="_blank" className="flex-1">
              <button className="w-full h-11 rounded-xl text-xs font-bold bg-white/5 hover:bg-orange-600 text-white flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" />
                Live Demo
              </button>
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" className="flex-1">
              <button className="w-full h-11 rounded-xl text-xs font-bold bg-white/5 hover:bg-orange-950 text-white flex items-center justify-center gap-2">
                <Code className="w-4 h-4" />
                Source
              </button>
            </a>
          )}

        </div>
      </div>

      {/* ✅ MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={IsOpen}
        onClose={() => setIsOpen(false)}
      />

    </div>
  );
};

export default ProjectCard;