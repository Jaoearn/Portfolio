import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import { MdDownload } from "react-icons/md";

type heroData = {
  name: string;
  designation: string;
  designationAlternateWords: string[];
  github: string;
  linkedIn: string;
  resume: string;
};

type Props = {
  heroData: heroData;
};

const HeroSection = ({ heroData }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const designationRef = useRef<HTMLSpanElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const titles = heroData.designationAlternateWords;
      let index = 0;

      const introTl = gsap.timeline();

      introTl
        .fromTo(
          ".hero-tag",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        )
        .fromTo(
          ".hero-heading",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          codeCardRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" },
          "-=1",
        );

      const runDesignationAnimation = () => {
        const el = designationRef.current;
        if (!el) return;

        const tl = gsap.timeline({
          onComplete: () => {
            index = (index + 1) % titles.length;
            runDesignationAnimation();
          },
        });

        el.textContent = titles[index];

        const split = new SplitText(el, { type: "chars" });

        tl.from(split.chars, {
          opacity: 0,
          y: 10,
          rotateX: -90,
          stagger: 0.04,
          duration: 0.6,
          ease: "back.out(1.7)",
        }).to(split.chars, {
          opacity: 0,
          y: -10,
          rotateX: 90,
          stagger: 0.02,
          duration: 0.5,
          ease: "back.in(1.7)",
          delay: 2,
          onComplete: () => split.revert(),
        });
      };

      runDesignationAnimation();

      gsap.to(".social-icon", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 lg:py-24 overflow-hidden"
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

      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-900/10 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="order-2 lg:order-1 flex flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <span className="hero-tag px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-[0.3em] w-fit">
              Welcome To My Portfolio
            </span>

            <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
              Hi , I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800">
                {heroData.name}
              </span>
              <br />
            </h1>

            <p className="hero-heading text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
              I'm a professional
              <span
                ref={designationRef}
                className="text-orange-500 ml-2 font-bold inline-block min-w-[200px]"
              >
                {heroData.designation}
              </span>
              <br />
              dedicated to building high-performance web applications.
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <a
                href={heroData.github}
                target="_blank"
                className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 shadow-xl"
              >
                <BsGithub size={24} />
              </a>

              <a
                href={heroData.linkedIn}
                target="_blank"
                className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 shadow-xl"
              >
                <BsLinkedin size={24} />
              </a>
            </div>

            {/* BUTTON */}
            <div className="hero-cta flex flex-wrap gap-4">
              <a
                href={heroData.resume}
                target="_blank"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-900 text-white font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              >
                <span className="relative flex items-center gap-2">
                  Get Resume
                  <MdDownload className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Code Card */}
        <div className="order-1 lg:order-2 flex justify-center">
          <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.05}
            scale={1.01}
            className="w-full max-w-[550px]"
          >
            <div className="relative group">

              {/* 🔥 SOFT GLOW (เบาลง) */}
              <div className="absolute -inset-12 bg-orange-400/10 blur-[100px] opacity-40 group-hover:opacity-60 transition duration-500 pointer-events-none" />

              {/* 🔥 SOFT BORDER */}
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-orange-400/20 via-transparent to-orange-400/20">

                <div
                  ref={codeCardRef}
                  className="relative rounded-3xl border border-white/10 bg-[#050505]/85 backdrop-blur-xl overflow-hidden shadow-xl"
                >

                  {/* inner glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* HEADER */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-400" />
                      <div className="w-3 h-3 rounded-full bg-orange-300/40" />
                      <div className="w-3 h-3 rounded-full bg-orange-200/20" />
                    </div>

                    <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                      Portfolio.ts
                    </div>
                  </div>

                  {/* CODE */}
                  <div className="p-6 lg:p-10">
                    <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">

                      <div className="flex gap-4">
                        <span className="text-slate-600 italic">01</span>
                        <p>
                          <span className="text-orange-400">const</span>{" "}
                          <span className="text-white">developer</span> = {"{"}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <span className="text-slate-600 italic">02</span>
                        <p className="ml-4">
                          <span className="text-slate-300">name:</span>{" "}
                          <span className="text-orange-200">
                            'Sutheera Preenan'
                          </span>
                          ,
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <span className="text-slate-600 italic">03</span>
                        <p className="ml-4">
                          <span className="text-slate-300">focus:</span>{" "}
                          <span className="text-orange-200">
                            'Fullstack Developer'
                          </span>
                          ,
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <span className="text-slate-600 italic">04</span>
                        <p className="ml-4">
                          <span className="text-slate-300">skills:</span> [
                          <span className="text-orange-200">
                            'C#', '.Net', 'React', 'TypeScript'
                          </span>
                          ],
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <span className="text-slate-600 italic">05</span>
                        <p className="ml-4">
                          <span className="text-slate-300">passionate:</span>{" "}
                          <span className="text-orange-400">true</span>,
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <span className="text-slate-600 italic">06</span>
                        <p className="ml-4">
                          <span className="text-slate-300">motto:</span>{" "}
                          <span className="text-orange-300">
                            "Build with Purpose"
                          </span>
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <span className="text-slate-600 italic">07</span>
                        <p>{"};"}</p>
                      </div>

                      <div className="flex gap-4 mt-4">
                        <span className="text-slate-600 italic">08</span>
                        <p>
                          <span className="text-orange-400">developer</span>.
                          <span className="text-white">showcase</span>();
                        </p>
                      </div>

                    </code>
                  </div>

                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
