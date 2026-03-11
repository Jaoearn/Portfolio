import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionReveal from "../../components/SectionReveal";
import AboutSection from "../../components/about/AboutSection";
import ExperienceSection from "../../components/experience/ExperienceSection";
import ProjectsSection from "../../components/projects/ProjectsSection";
import SkillsSection from "../../components/skills/SkillsSection";
import WelcomeSection from "../../components/welcome/WelcomeSection";
import { welcomeData } from "../../utils/data/welcome-data";
import { aboutData } from "../../utils/data/about-data";
import { experienceData } from "../../utils/data/experience-data";
import { projectsData } from "../../utils/data/projects-data";
import { footerData } from "../../utils/data/footer-data";
import { skillsData } from "../../utils/data/skills-data";

export default function DashboardPage() {

  return (
    <>
      <main className="bg-black min-h-screen text-white">
        
        <Navbar />

        <SectionReveal>
          <WelcomeSection welcomeData={welcomeData} />
        </SectionReveal>

        <SectionReveal>
          <AboutSection aboutData={aboutData} />
        </SectionReveal>

        <SectionReveal>
          <ExperienceSection experiencesData={experienceData} />
        </SectionReveal>

        <SectionReveal>
          <SkillsSection skillsData={skillsData}/>
        </SectionReveal>

        <SectionReveal>
          <ProjectsSection projectsData={projectsData}/>
        </SectionReveal>

        <Footer footerData={footerData} />
      </main>
    </>
  );
}
