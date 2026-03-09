import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiFirebase,
    SiGit,
    SiFigma,
    SiBootstrap,
    SiMui,
    SiCanva,
    SiFreelancer,
  } from "react-icons/si";
  
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
      case "js":
        return SiJavascript;
      case "typescript":
        return SiTypescript;
      case "ts":
        return SiTypescript;
      case "react":
        return SiReact;
      case "next js":
      case "nextjs":
      case "next.js":
        return SiNextdotjs;
      case "tailwind":
      case "tailwindcss":
        return SiTailwindcss;
      case "node js":
      case "nodejs":
      case "node.js":
        return SiNodedotjs;
      case "mongodb":
        return SiMongodb;
      case "mysql":
        return SiMysql;
      case "firebase":
        return SiFirebase;
      case "git":
        return SiGit;
      case "figma":
        return SiFigma;
      case "bootstrap":
        return SiBootstrap;
      case "materialui":
      case "mui":
        return SiMui;
      case "canva":
        return SiCanva;
      default:
        return SiFreelancer;
    }
  };
  
  export const getSkillColor = (skill: string): string => {
    const skillLower = skill.toLowerCase();
    switch (skillLower) {
      case "html":
        return "#14b8a6 ";  // teal-500
      case "css":
        return "#14b8a6 ";
      case "javascript":
        return "#14b8a6 ";
      case "typescript":
        return "#14b8a6 ";
      case "react":
        return "#14b8a6 ";
      case "next js":
      case "nextjs":
      case "next.js":
        return "#ffffff";
      case "tailwind":
        return "#14b8a6";
      case "node js":
      case "nodejs":
        return "#14b8a6 ";
      case "mongodb":
        return "#14b8a6";
      case "mysql":
        return "#14b8a6";
      case "firebase":
        return "#14b8a6 ";
      case "git":
        return "#14b8a6 ";
      case "figma":
        return "#14b8a6 ";
      case "bootstrap":
        return "#14b8a6";
      case "materialui":
      case "mui":
        return "#14b8a6 ";
      default:
        return "#14b8a6 ";
    }
  };
  