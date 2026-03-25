import { getSkillIcon, getSkillColor } from "../../utils/skill-icons";
import Marquee from "react-fast-marquee";
import SectionReveal from "../SectionReveal";

type SkillItemProps = {
  skill: string;
};

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const Icon = getSkillIcon(skill);
  const color = getSkillColor(skill);

  return (
    <div className="mx-4 my-4 group">
      <div className="relative px-8 py-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-500 hover:border-orange-500/30 hover:bg-white/[0.05] flex items-center gap-4 shadow-xl">
        
        <div
          className="text-3xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_var(--icon-color)]"
          style={{ "--icon-color": color } as React.CSSProperties}
        >
          <Icon style={{ color: color }} />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-wide uppercase group-hover:text-orange-500 transition-colors">
            {skill}
          </span>

          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">
            Technology
          </span>
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none blur-xl"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

type SkillsSectionProps = {
  skillsData: string[];
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsData }) => {

  const firstHalf = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const secondHalf = skillsData.slice(Math.ceil(skillsData.length / 2));

  return (
    <div id="skills" className="relative z-50 py-24 lg:py-48 overflow-hidden">

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

      {/* 🌌 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-950/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* ✅ CONTENT */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex justify-center mb-10 lg:mb-20">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-orange-600"></span>

            <span className="bg-[#050505] border border-orange-600/30 text-white p-3 px-8 text-2xl font-bold rounded-full">
              Tech Stack
            </span>

            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-orange-600"></span>
          </div>
        </div>

        {/* Marquee */}
        <div className="flex flex-col gap-6 lg:gap-8 relative">
          <SectionReveal direction="right" delay={0.2}>
            <Marquee speed={40} gradient={false} pauseOnHover>
              {firstHalf.map((skill, index) => (
                <SkillItem key={`first-${index}`} skill={skill} />
              ))}
            </Marquee>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.4}>
            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover
              direction="right"
            >
              {secondHalf.map((skill, index) => (
                <SkillItem key={`second-${index}`} skill={skill} />
              ))}
            </Marquee>
          </SectionReveal>
        </div>

      </div>
    </div>
  );
};

export default SkillsSection;