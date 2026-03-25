import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiFreelancer,
    SiDotnet,
    SiGsap,
    SiDocker,
    SiPostman,
    SiFigma,
    SiV0
  } from "react-icons/si";

  import { PiFileCSharpBold } from "react-icons/pi";
  import { RiTailwindCssLine } from "react-icons/ri";
  import { FaGitAlt, FaGithub, FaNode } from "react-icons/fa";
  import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
  
  import type { IconType } from "react-icons";
  
  export const getSkillIcon = (skill: string): IconType => {
    const skillLower = skill.toLowerCase();
  
    switch (skillLower) {
      case "html":
        return SiHtml5;
      case "css":
        return SiCss;
      case "javascript":
        return SiJavascript;
      case "typescript":
        return SiTypescript;
      case "ts":
        return SiTypescript;
      case "react":
        return SiReact;
      case "node":
        return FaNode;
      case "tailwind":
        return RiTailwindCssLine;
      case "c#":
        return PiFileCSharpBold;
      case ".net":
        return SiDotnet;
      case "gsap":
        return SiGsap;
      case "sqlserver":
        return DiMsqlServer;
      case "docker":
        return SiDocker;
      case "git":
        return FaGitAlt;
      case "github":
        return FaGithub;
      case "postman":
        return SiPostman;
      case "visual":
        return DiVisualstudio;
      case "figma":
        return SiFigma;
      case "v0":
        return SiV0;
      default:
        return SiFreelancer;
    }
  };
  
  export const getSkillColor = (skill: string): string => {
    const skillLower = skill.toLowerCase();
    switch (skillLower) {
      case "":
        return "#ea580c";  // orange-500
      default:
        return "#ea580c";
    }
  };
  