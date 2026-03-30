import type { Project } from "../../components/projects/ProjectsSection";
import trendingMovieImg from "../../../public/img/trending-movies.png"
import cryptocurrencyTrackingImg from "../../../public/img/cryptocurrency-tracking.png"
import jotBugImg from "../../../public/img/jot-bug.png"
import portImg from "../../../public/img/port.png"

export const projectsData: Project[] = [
  {
    id: "project-001",
    name: "Jot Bug",
    description: "JotBug is a web app built with React and TypeScript for managing tasks. Users can create, edit, and track tasks with a clean, interactive, and responsive interface. This project helps practice modern front-end development and building dynamic user experiences.",
    images: [
      jotBugImg
    ],
    tools: ["React", "TypeScript", "Tailwind"],
    code: "https://github.com/Jaoearn/JotBug",
    date: "2026-03-05",
    highlights: [
      "Effortless task management",
      "Dark mode support",
      "Built with React & TypeScript",
      "Real-time updates and smooth UX"
    ]
  },
  {
    id: "project-002",
    name: "Trending Movie",
    description: "This project is a web application built with HTML, CSS, and JavaScript that displays trending movies. Users can browse movie posters, ratings, and basic information through a clean and simple interface. The project focuses on improving front-end development skills and creating an interactive user experience.",
    images: [
      trendingMovieImg
    ],
    tools: ["HTML", "JavaScript", "CSS"],
    code: "https://github.com/Jaoearn/MovieWebsite",
    date: "2023-04-28",
    highlights: [
      "Movie browsing interface",
      "Search functionality",
      "Clean UI layout",
      "API integration",
    ]
  },
  {
    id: "project-003",
    name: "Cryptocurrency Tracking",
    description: "This web application is built using the MVC (Model-View-Controller) architecture with C#, CSHTML, CSS, and JavaScript. It allows users to track cryptocurrency prices and view basic information about various coins. The app fetches data from external APIs and presents it through an interactive.",
    images: [
      cryptocurrencyTrackingImg
    ],
    tools: ["C#",".Net","CSHTML", "JavaScript", "CSS"],
    code: "https://github.com/Jaoearn/CryptocurrencyTracking",
    date: "2023-03-08",
    highlights: [
      "MVC architecture for clean code structure",
      "API integration for real-time cryptocurrency data",
      "Search and filter coins easily",
      "Clean CSHTML, CSS, and JavaScript implementation"
    ]
  },
  {
    id: "project-004",
    name: "Developer Portfolio",
    description: "Modern portfolio built with React, TypeScript and Tailwind.",
    images: [
      portImg
    ],
    tools: ["React", "TypeScript", "Tailwind", "GSAP"],
    demo: "",
    code: "https://github.com/Jaoearn/Portfolio",
    date: "2026-03-05",
    highlights: [
      "Built with React and TypeScript for scalable and maintainable code",
      "Styled using Tailwind CSS for fast and flexible UI development",
      "Smooth and engaging animations powered by GSAP",
      "Well-structured and reusable component architecture",
      "Modern and clean UI/UX design focused on user experience",
    ]
  },
];