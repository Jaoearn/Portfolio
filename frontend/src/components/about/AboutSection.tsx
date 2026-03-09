import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Tilt from "react-parallax-tilt";
import { User, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

type PersonalData = {
  name: string;
  profile: string;
  description: string;
};

type AboutProps = {
  personalData: PersonalData;
};

function AboutSection({ personalData }: AboutProps) {
  useEffect(() => {
    const split = new SplitText(".about-description", {
      type: "lines,words",
      linesClass: "overflow-hidden",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      rotateX: -45,
      stagger: 0.015,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
      },
    });

    gsap.fromTo(
      ".about-image-card",
      { opacity: 0, scale: 0.9, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-image-card",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="relative py-24 lg:py-48 overflow-hidden">

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-teal-500 mb-2">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>

                <span className="text-sm font-bold uppercase tracking-[0.3em]">
                  Discovery
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-800">
                  The Architect
                </span>
              </h2>
            </div>

            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl">

              <div className="about-description text-slate-300 text-lg leading-relaxed italic">
                {personalData.description}
              </div>

              <div className="absolute w-1 h-20 bg-gradient-to-b from-teal-600 to-transparent left-0 top-10 rounded-full" />

            </div>

            <div className="flex flex-wrap gap-8 items-center mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">2+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Years Experience
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">20+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Global Projects
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Tech Masteteal
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5">

            <Tilt
              perspective={1500}
              glareEnable
              glareMaxOpacity={0.2}
              glareColor="#ef4444"
              scale={1.05}
              className="about-image-card"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/10">

                <img
                  src={personalData.profile}
                  alt={personalData.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />

              </div>
            </Tilt>

          </div>

        </div>
      </div>

    </section>
  );
}

export default AboutSection;