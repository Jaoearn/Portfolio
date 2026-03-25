import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

interface SectionRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const bg = bgRef.current;

    if (!el || !bg) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = 50;
        break;
      case "down":
        y = -50;
        break;
      case "left":
        x = 50;
        break;
      case "right":
        x = -50;
        break;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      el,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
      }
    );

    // background fade
    tl.fromTo(
      bg,
      { opacity: 0 },
      {
        opacity: 0.25,
        duration: 1.2,
        ease: "power2.out",
      },
      0
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [direction, delay, duration]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* gradient overlay */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_center,rgba(255,80,80,0.25),rgba(255,140,0,0.2)_60%,transparent_85%)]"
      />

      {children}
    </div>
  );
}