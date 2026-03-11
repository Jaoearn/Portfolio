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
    <section id="about" className="relative py-24 lg:py-48 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* CONTENT */}
          <div className="lg:col-span-8 lg:col-start-3 flex flex-col gap-8 items-center text-center">
            {/* HEADER */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-teal-500 mb-2">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>

                <span className="text-sm font-bold uppercase tracking-[0.3em]">
                  About Me
                </span>
              </div>
            </div>

            {/* DESCRIPTION CARD */}
            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl max-w-4xl w-full">
              <div className="about-description text-slate-300 text-lg leading-relaxed italic">
                {aboutData.description}
              </div>

              <div className="absolute w-1 h-20 bg-gradient-to-b from-teal-600 to-transparent left-0 top-10 rounded-full" />
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 items-center mt-4 justify-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">4+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Years Experience
                </span>
              </div>

              <div className="w-[1px] h-10 bg-white/10" />

              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Global Projects
                </span>
              </div>

              <div className="w-[1px] h-10 bg-white/10" />

              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
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
