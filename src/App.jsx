import AboutMeMain from "./components/aboutMeSection/AboutMeMain.jsx";
import ContactMeMain from "./components/contactMeSection/ContactMeMain.jsx";
import ExperienceMain from "./components/experienceSection/ExperienceMain.jsx";
import FooterMain from "./components/footer/FooterMain.jsx";
import HelperSection from "./components/HelperSection.jsx";
import HeroGradient from "./components/heroSection/HeroGradient.jsx";
import HeroMain from "./components/heroSection/HeroMain.jsx";
import SubHeroSection from "./components/heroSection/SubHeroSection.jsx";
import NavBarMain from "./components/navbar/NavBarMain.jsx";
import ProjectsMain from "./components/projectsSections/ProjectsMain.jsx";
import SkillsMain from "./components/skillsSection/SkillsMain.jsx";
import SubSkills from "./components/skillsSection/SubSkills.jsx";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
