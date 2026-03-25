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
      className="relative py-28 lg:py-44 overflow-hidden bg-[#030303]"
    >
      {/* STAR BG (animated feel) */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.7), transparent),
            radial-gradient(1.5px 1.5px at 70% 60%, rgba(255,255,255,.6), transparent),
            radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,.6), transparent),
            radial-gradient(2px 2px at 90% 20%, rgba(255,255,255,.8), transparent)
          `,
          backgroundSize: "180px 180px",
        }}
      />

      {/* GRADIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500/20 via-red-500/10 to-transparent blur-[160px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-16">

          {/* HEADER */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3 text-orange-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-400/20 flex items-center justify-center backdrop-blur-md shadow-lg">
                <User className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.4em] text-orange-400">
                About Me
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              {aboutData.name}
            </h2>
          </div>

          {/* DESCRIPTION CARD */}
          <div className="relative max-w-4xl w-full group">

            {/* glow border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

            <div className="relative p-12 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl text-slate-300 text-lg leading-relaxed shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40">

              {/* quote icon */}
              <span className="text-6xl text-orange-500/30 absolute left-6 top-4">
                "
              </span>

              <p className="relative z-10">
                {aboutData.description}
              </p>

              <span className="text-6xl text-orange-500/30 absolute right-6 bottom-4">
                "
              </span>

              {/* accent line */}
              <div className="absolute left-0 top-10 h-24 w-[3px] bg-gradient-to-b from-orange-500 to-transparent rounded-full" />

            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-4xl">

            {[
              { label: "Years Experience", value: "4+" },
              { label: "Projects", value: "10+" },
              { label: "Tech Stack", value: "10+" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-orange-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,115,0,0.2)]"
              >
                <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

                <div className="relative flex flex-col items-center gap-3">
                  <span className="text-5xl font-black bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                    {item.value}
                  </span>

                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;