import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import {
  Code,
  Globe,
  ShieldCheck,
  Cpu,
  Calendar,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    name: "Docs-now",
    description:
      "An AI-powered SaaS application that enables intelligent conversations with PDF documents...",
    tools: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "tRPC",
      "Prisma",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "OpenAI",
      "Pinecone",
      "Kinde Auth",
      "UploadThing",
      "Stripe",
    ],
    role: "Full-stack Developer",
    code: "",
    demo: "https://docs-now.vercel.app",
    date: "2025-10-14",
    images: [
      "/projects/docs-now/docs-now-landing.png",
      "/projects/docs-now/Docs-now.png",
      "/projects/docs-now/docs-now-chat.jpg",
    ],
    highlights: [
      "Implemented AI-powered chat using OpenAI GPT with streaming responses.",
      "Integrated vector-based semantic search using Pinecone.",
      "Built type-safe APIs with tRPC.",
    ],
  },
];

const Page = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  const [index, setIndex] = useState(0);

  if (!project) {
    return (
      <div className="text-white text-center py-20">Project not found</div>
    );
  }

  const images = project.images?.slice(1) || [];

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="bg-black min-h-screen text-white relative">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 py-12 px-4 lg:px-8">
        {/* ===== HERO SECTION ===== */}
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-orange-500 transition-colors mb-8 group font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>

          {/* Hero */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl mb-12">
            <div className="absolute inset-0 z-0">
              <img
                src={project.images?.[0]}
                alt={project.name}
                className="object-cover opacity-20 blur-sm scale-110 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={project.images?.[0]}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-orange-500/10 text-orange-500 border border-orange-500/20 px-3 py-1 text-xs font-bold rounded">
                    {project.date}
                  </span>

                  <span className="bg-orange-950/20 text-orange-400 border border-orange-900/30 px-3 py-1 text-xs font-bold rounded">
                    {project.role}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-slate-400">
                  {project.name}
                </h1>

                <p className="text-lg text-slate-400 italic">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl flex gap-2 font-bold uppercase"
                    >
                      <Globe className="w-5 h-5" />
                      Live Preview
                    </a>
                  )}

                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      className="border border-white/10 bg-white/5 hover:bg-orange-950/20 hover:text-orange-500 px-8 py-4 rounded-xl flex gap-2 font-bold uppercase"
                    >
                      <Code className="w-5 h-5" />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CONTENT + SIDEBAR ===== */}
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 flex flex-col gap-16">
              <section className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    <ShieldCheck className="w-6 h-6 text-orange-500" />
                  </div>

                  <h2 className="text-3xl font-black">Project Highlights</h2>
                </div>

                <ul className="grid gap-4">
                  {project.highlights?.map((highlight, index) => (
                    <li
                      key={index}
                      className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
                    >
                      <p className="text-slate-300 text-lg">{highlight}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {images.length > 0 && (
                <section className="flex flex-col gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-900/10 flex items-center justify-center border border-orange-900/20">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>

                    <h2 className="text-3xl font-black">Visual Showcase</h2>
                  </div>

                  <div className="relative">
                    <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
                      <img
                        src={images[index]}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <button
                      onClick={prev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-600/20 hover:bg-orange-600 text-white p-2 rounded-full"
                    >
                      <ArrowLeft />
                    </button>

                    <button
                      onClick={next}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-600/20 hover:bg-orange-600 text-white p-2 rounded-full"
                    >
                      <ArrowRight />
                    </button>
                  </div>
                </section>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="self-start sticky top-24">
              <div className="bg-[#050505]/60 backdrop-blur border border-white/10 rounded-3xl p-8">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu className="w-4 h-4 text-orange-500" />
                      <h3 className="text-xl font-bold">Technologies</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-4 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Page;
