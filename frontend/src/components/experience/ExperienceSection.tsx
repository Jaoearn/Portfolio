import {
  Calendar,
  Building2,
  ChevronRight,
  SquareUserRound,
} from "lucide-react";
import SectionReveal from "../SectionReveal";

type ExperienceDetail = {
  details: string;
  subDetails?: string[];
};

type ExperienceType = {
  id: number;
  title: string;
  company: string;
  duration: string;
  detail?: ExperienceDetail[];
};

type Props = {
  experiencesData: ExperienceType[];
};

function ExperienceSection({ experiencesData }: Props) {
  return (
    <div
      id="experience"
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

      {/* 🌌 Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* ✅ CONTENT */}
      <div className="relative z-10">
        <div className="flex justify-center mb-10 lg:mb-20">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-teal-600"></span>

            <span className="bg-[#050505] border border-teal-600/30 text-white p-3 px-8 text-2xl font-bold rounded-full">
              Professional Journey
            </span>

            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-teal-600"></span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-600 via-teal-950 to-transparent opacity-30" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {experiencesData.map((exp, index) => (
              <div key={exp.id} className="relative">
                <SectionReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* ICON */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-xl bg-[#050505] border-2 border-teal-600 flex items-center justify-center z-10">
                      <SquareUserRound className="text-teal-600 w-5 h-5" />
                    </div>

                    {/* DATE */}
                    <div
                      className={`w-full md:w-1/2 flex ${
                        index % 2 === 0
                          ? "md:justify-end"
                          : "md:justify-start"
                      }`}
                    >
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4 text-teal-600" />
                        {exp.duration}
                      </div>
                    </div>

                    {/* CARD */}
                    <div className="w-full md:w-1/2">
                      <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                        <div className="flex flex-col gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {exp.title}
                            </h3>

                            <div className="flex items-center gap-2 text-teal-500">
                              <Building2 className="w-4 h-4" />
                              {exp.company}
                            </div>
                          </div>

                          <div className="space-y-4">
                            {exp.detail?.map((detail, idx) => (
                              <div key={idx} className="space-y-2">
                                <div className="flex gap-3 items-start">
                                  <ChevronRight className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                                  <p className="text-slate-400 text-sm lg:text-base">
                                    {detail.details}
                                  </p>
                                </div>

                                {(detail.subDetails ?? []).length > 0 && (
                                  <div className="ml-7 space-y-1">
                                    {detail.subDetails?.map((sub, i) => (
                                      <div
                                        key={i}
                                        className="flex gap-2 items-start"
                                      >
                                        <ChevronRight className="w-3 h-3 text-teal-500 mt-1 shrink-0" />
                                        <p className="text-slate-500 text-sm">
                                          {sub}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;