import { User } from "lucide-react";

type AboutData = {
  name: string;
  profile: string;
  description: string;
};

type AboutProps = {
  aboutData: AboutData;
};

function AboutSection({ aboutData }: AboutProps) {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-40 overflow-hidden bg-[#050505]"
    >
      {/* STARS LAYER */}
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

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-teal-600/10 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-12">

          {/* HEADER */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-teal-500">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                <User className="w-6 h-6" />
              </div>

              <span className="text-sm font-bold uppercase tracking-[0.35em]">
                About Me
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-white">
              {aboutData.name}
            </h2>

            <p className="text-teal-400 font-semibold">
              {aboutData.profile}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="relative max-w-4xl w-full group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl text-slate-300 text-lg leading-relaxed italic shadow-lg transition-all duration-300 hover:border-teal-500/30">

              <span className="text-5xl text-teal-500 opacity-40 absolute left-6 top-2">
                "
              </span>

              <p className="relative z-10">
                {aboutData.description}
              </p>

              <span className="text-5xl text-teal-500 opacity-40 absolute right-6 bottom-2">
                "
              </span>

              <div className="absolute w-1 h-20 bg-gradient-to-b from-teal-500 to-transparent left-0 top-12 rounded-full" />

            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl">

            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-teal-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-teal-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex flex-col items-center gap-2">
                <span className="text-4xl font-black text-white">4+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                  Years Experience
                </span>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-teal-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-teal-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex flex-col items-center gap-2">
                <span className="text-4xl font-black text-white">10+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                  Projects
                </span>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-teal-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-teal-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex flex-col items-center gap-2">
                <span className="text-4xl font-black text-white">10+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                  Tech Mastered
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;