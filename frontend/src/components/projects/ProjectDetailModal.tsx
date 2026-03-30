import { Modal } from "../ui/Modal";
import {
  Code,
  Globe,
  ShieldCheck,
  Cpu,
} from "lucide-react";

type Project = {
  id: string;
  name: string;
  description: string;
  tools: string[];
  role?: string;
  code?: string;
  demo?: string;
  date?: string;
  images?: string[];
  highlights?: string[];
};

type Props = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProjectDetailModal = ({ project, isOpen, onClose }: Props) => {
  if (!project) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      darkMode={true}
      className="relative bg-[#050505] text-white max-h-[90vh] overflow-y-auto rounded-3xl"
    >
      <section>

        {/* 🌌 background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 p-8 space-y-12">

          {/* ===== HERO ===== */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl">

            <div className="absolute inset-0">
              <img
                src={project.images?.[0]}
                className="w-full h-full object-cover opacity-20 blur-xl scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 p-8 lg:p-12 flex flex-col lg:flex-row gap-10">

              {/* IMAGE */}
              <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={project.images?.[0]}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* INFO */}
              <div className="flex flex-col gap-6 w-full lg:w-1/2">

                <div className="flex flex-wrap gap-3">
                  {project.date && (
                    <span className="px-3 py-1 text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full">
                      {project.date}
                    </span>
                  )}

                  {project.role && (
                    <span className="px-3 py-1 text-xs font-bold bg-white/5 border border-white/10 rounded-full">
                      {project.role}
                    </span>
                  )}
                </div>

                <h1 className="text-4xl lg:text-5xl font-black tracking-tight">
                  {project.name}
                </h1>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 flex-wrap pt-2">
                  {project.demo && (
                    <a href={project.demo} target="_blank">
                      <button className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 transition font-bold flex items-center gap-2 shadow-lg hover:shadow-orange-600/20">
                        <Globe className="w-4 h-4" />
                        Live Preview
                      </button>
                    </a>
                  )}

                  {project.code && (
                    <a href={project.code} target="_blank">
                      <button className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-orange-950/30 transition font-bold flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Source Code
                      </button>
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* ===== CONTENT ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-8">

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-orange-500" />
                  <h2 className="text-2xl font-bold">Highlights</h2>
                </div>

                <div className="grid gap-4">
                  {project.highlights?.map((h, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 transition"
                    >
                      <p className="text-slate-300">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* SIDEBAR */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-fit backdrop-blur">

              <div className="flex items-center gap-2 mb-4">
                <Cpu className="text-orange-500" />
                <h3 className="font-bold text-lg">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-black/40 border border-white/10 rounded-full hover:border-orange-500/30 hover:text-orange-400 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    </Modal>
  );
};

export default ProjectDetailModal;